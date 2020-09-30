type t = {
  id: int,
  numId: option(int),
  name: string,
  primary: option(int),
  aeMod: option(float),
  canLearnCantrips: bool,
  canLearnSpells: bool,
  canLearnRituals: bool,
  allowMultipleTraditions: bool,
  isDisAdvAPMaxHalved: bool,
  areDisAdvRequiredApplyToMagActionsOrApps: bool,
};

module Decode = {
  open JsonStrict;

  type tL10n = {
    id: int,
    name: string,
  };

  let tL10n = json => {
    id: json |> field("id", int),
    name: json |> field("name", string),
  };

  type tUniv = {
    id: int,
    numId: option(int),
    primary: option(int),
    aeMod: option(float),
    canLearnCantrips: bool,
    canLearnSpells: bool,
    canLearnRituals: bool,
    allowMultipleTraditions: bool,
    isDisAdvAPMaxHalved: bool,
    areDisAdvRequiredApplyToMagActionsOrApps: bool,
  };

  let tUniv = json => {
    id: json |> field("id", int),
    numId: json |> optionalField("numId", int),
    primary: json |> optionalField("primary", int),
    aeMod: json |> optionalField("aeMod", Json.Decode.float),
    canLearnCantrips: json |> field("canLearnCantrips", bool),
    canLearnSpells: json |> field("canLearnSpells", bool),
    canLearnRituals: json |> field("canLearnRituals", bool),
    allowMultipleTraditions: json |> field("allowMultipleTraditions", bool),
    isDisAdvAPMaxHalved: json |> field("isDisAdvAPMaxHalved", bool),
    areDisAdvRequiredApplyToMagActionsOrApps:
      json |> field("areDisAdvRequiredApplyToMagActionsOrApps", bool),
  };

  let t = (univ: tUniv, l10n: tL10n) => (
    univ.id,
    {
      id: univ.id,
      numId: univ.numId,
      name: l10n.name,
      primary: univ.primary,
      aeMod: univ.aeMod,
      canLearnCantrips: univ.canLearnCantrips,
      canLearnSpells: univ.canLearnSpells,
      canLearnRituals: univ.canLearnRituals,
      allowMultipleTraditions: univ.allowMultipleTraditions,
      isDisAdvAPMaxHalved: univ.isDisAdvAPMaxHalved,
      areDisAdvRequiredApplyToMagActionsOrApps:
        univ.areDisAdvRequiredApplyToMagActionsOrApps,
    },
  );

  let all = (yamlData: Yaml_Raw.yamlData) =>
    Yaml_Zip.zipBy(
      Ley_Int.show,
      t,
      x => x.id,
      x => x.id,
      yamlData.magicalTraditionsUniv |> list(tUniv),
      yamlData.magicalTraditionsL10n |> list(tL10n),
    )
    |> Ley_IntMap.fromList;
};
