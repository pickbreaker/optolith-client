type t = {
  id: int,
  numId: int,
  name: string,
  primary: int,
  aspects: option((int, int)),
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
    numId: int,
    primary: int,
    aspects: option((int, int)),
  };

  let tUniv = json => {
    id: json |> field("id", int),
    numId: json |> field("numId", int),
    primary: json |> field("primary", int),
    aspects: json |> optionalField("aspects", pair(int, int)),
  };

  let t = (univ: tUniv, l10n: tL10n) => (
    univ.id,
    {
      id: univ.id,
      numId: univ.numId,
      name: l10n.name,
      primary: univ.primary,
      aspects: univ.aspects,
    },
  );

  let all = (yamlData: Yaml_Raw.yamlData) =>
    Yaml_Zip.zipBy(
      Ley_Int.show,
      t,
      x => x.id,
      x => x.id,
      yamlData.blessedTraditionsUniv |> list(tUniv),
      yamlData.blessedTraditionsL10n |> list(tL10n),
    )
    |> Ley_IntMap.fromList;
};
