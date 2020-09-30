type info = {
  note: option(string),
  rules: option(string),
  advantage: option(string),
  disadvantage: option(string),
  src: list(PublicationRef.t),
  errata: list(Erratum.t),
};

type mundaneItem = {structurePoints: option(OneOrMany.t(int))};

type newAttribute = {
  attribute: int,
  threshold: int,
};

type agilityStrength = {
  agility: int,
  strength: int,
};

type primaryAttributeDamageThreshold =
  | DefaultAttribute(int)
  | DifferentAttribute(newAttribute)
  | AgilityStrength(agilityStrength);

type damage = {
  amount: int,
  sides: int,
  flat: option(int),
};

type meleeWeapon = {
  combatTechnique: int,
  damage,
  primaryAttributeDamageThreshold: option(primaryAttributeDamageThreshold),
  at: option(int),
  pa: option(int),
  reach: option(int),
  length: option(int),
  structurePoints: option(OneOrMany.t(int)),
  isParryingWeapon: bool,
  isTwoHandedWeapon: bool,
  isImprovisedWeapon: bool,
};

type rangedWeapon = {
  combatTechnique: int,
  damage: option(damage),
  length: option(int),
  range: (int, int, int),
  reloadTime: OneOrMany.t(int),
  ammunition: option(int),
  isImprovisedWeapon: bool,
};

type armor = {
  protection: int,
  encumbrance: int,
  hasAdditionalPenalties: bool,
  armorType: int,
};

type special =
  | MundaneItem(mundaneItem)
  | MeleeWeapon(meleeWeapon)
  | RangedWeapon(rangedWeapon)
  | CombinedWeapon(meleeWeapon, rangedWeapon)
  | Armor(armor);

type t = {
  id: int,
  name: string,
  price: option(int),
  weight: option(int),
  special: option(special),
  info: list(info),
  gr: int,
};

module Decode = {
  open Json.Decode;
  open JsonStrict;

  let info = json => {
    note: json |> optionalField("note", string),
    rules: json |> optionalField("rules", string),
    advantage: json |> optionalField("advantage", string),
    disadvantage: json |> optionalField("disadvantage", string),
    src: json |> field("src", PublicationRef.decodeMultilingualList),
    errata: json |> field("errata", Erratum.Decode.list),
  };

  type tL10n = {
    id: int,
    name: string,
    info: list(info),
  };

  let tL10n = json => {
    id: json |> field("id", int),
    name: json |> field("name", string),
    info:
      json
      |> field(
           "versions",
           oneOf([
             json => json |> info |> (x => [x]),
             json => json |> list(info),
           ]),
         ),
  };

  let mundaneItem = json => {
    structurePoints:
      json |> optionalField("structurePoints", OneOrMany.Decode.t(int)),
  };

  let newAttribute = json => {
    attribute: json |> field("attribute", int),
    threshold: json |> field("threshold", int),
  };

  let agilityStrength = json =>
    json |> pair(int, int) |> (x => {agility: fst(x), strength: snd(x)});

  let primaryAttributeDamageThreshold =
    oneOf([
      json => json |> int |> (x => DefaultAttribute(x)),
      json => json |> newAttribute |> (x => DifferentAttribute(x)),
      json => json |> agilityStrength |> (x => AgilityStrength(x)),
    ]);

  let meleeWeapon = json => {
    combatTechnique: json |> field("combatTechnique", int),
    damage: {
      amount: json |> field("damageDiceNumber", int),
      sides: json |> field("damageDiceSides", int),
      flat: json |> optionalField("damageFlat", int),
    },
    primaryAttributeDamageThreshold:
      json
      |> optionalField("damageThreshold", primaryAttributeDamageThreshold),
    at: json |> optionalField("at", int),
    pa: json |> optionalField("pa", int),
    reach: json |> optionalField("reach", int),
    length: json |> optionalField("length", int),
    structurePoints:
      json |> optionalField("structurePoints", OneOrMany.Decode.t(int)),
    isParryingWeapon: json |> field("isParryingWeapon", bool),
    isTwoHandedWeapon: json |> field("isTwoHandedWeapon", bool),
    isImprovisedWeapon: json |> field("isImprovisedWeapon", bool),
  };

  let rangedWeapon = json =>
    Ley_Option.Monad.{
      combatTechnique: json |> field("combatTechnique", int),
      damage:
        liftM2(
          (amount, sides) =>
            {amount, sides, flat: json |> optionalField("damageFlat", int)},
          json |> optionalField("damageDiceNumber", int),
          json |> optionalField("damageDiceSides", int),
        ),
      length: json |> optionalField("length", int),
      range: (
        json |> field("closeRange", int),
        json |> field("mediumRange", int),
        json |> field("farRange", int),
      ),
      reloadTime: json |> field("reloadTime", OneOrMany.Decode.t(int)),
      ammunition: json |> optionalField("ammunition", int),
      isImprovisedWeapon: json |> field("isImprovisedWeapon", bool),
    };

  let combinedWeapon = json => (
    json |> field("melee", meleeWeapon),
    json |> field("ranged", rangedWeapon),
  );

  let armor = json => {
    protection: json |> field("protection", int),
    encumbrance: json |> field("encumbrance", int),
    hasAdditionalPenalties: json |> field("hasAdditionalPenalties", bool),
    armorType: json |> field("armorType", int),
  };

  let special =
    oneOf([
      json => json |> mundaneItem |> (x => MundaneItem(x)),
      json => json |> meleeWeapon |> (x => MeleeWeapon(x)),
      json => json |> rangedWeapon |> (x => RangedWeapon(x)),
      json => json |> combinedWeapon |> (((m, r)) => CombinedWeapon(m, r)),
      json => json |> armor |> (x => Armor(x)),
    ]);

  type tUniv = {
    id: int,
    price: option(int),
    weight: option(int),
    special: option(special),
    gr: int,
  };

  let tUniv = json => {
    id: json |> field("id", int),
    price: json |> optionalField("price", int),
    weight: json |> optionalField("weight", int),
    special: json |> optionalField("special", oneOf([])),
    gr: json |> field("gr", int),
  };

  let t = (univ: tUniv, l10n: tL10n) => (
    univ.id,
    {
      id: univ.id,
      name: l10n.name,
      price: univ.price,
      weight: univ.weight,
      special: univ.special,
      info: l10n.info,
      gr: univ.gr,
    },
  );

  let all = (yamlData: Yaml_Raw.yamlData) =>
    Yaml_Zip.zipBy(
      Ley_Int.show,
      t,
      x => x.id,
      x => x.id,
      yamlData.equipmentUniv |> list(tUniv),
      yamlData.equipmentL10n |> list(tL10n),
    )
    |> Ley_IntMap.fromList;
};
