// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Ley_Int$OptolithClient from "../../Data/Ley_Int.bs.js";
import * as Yaml_Zip$OptolithClient from "../Utilities/Yaml_Zip.bs.js";
import * as JsonStrict$OptolithClient from "../Utilities/JsonStrict.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          numId: Json_decode.field("numId", Json_decode.$$int, json),
          primary: Json_decode.field("primary", Json_decode.$$int, json),
          aspects: JsonStrict$OptolithClient.optionalField("aspects", (function (param) {
                  return Json_decode.pair(Json_decode.$$int, Json_decode.$$int, param);
                }), json)
        };
}

function t(univ, l10n) {
  return [
          univ.id,
          {
            id: univ.id,
            numId: univ.numId,
            name: l10n.name,
            primary: univ.primary,
            aspects: univ.aspects
          }
        ];
}

function all(yamlData) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Yaml_Zip$OptolithClient.zipBy(Ley_Int$OptolithClient.show, t, (function (x) {
                    return x.id;
                  }), (function (x) {
                    return x.id;
                  }), Json_decode.list(tUniv, yamlData.blessedTraditionsUniv), Json_decode.list(tL10n, yamlData.blessedTraditionsL10n)));
}

var Decode = {
  tL10n: tL10n,
  tUniv: tUniv,
  t: t,
  all: all
};

export {
  Decode ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
