// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as IC$OptolithClient from "../Utilities/IC.bs.js";
import * as Ley_Int$OptolithClient from "../../Data/Ley_Int.bs.js";
import * as Yaml_Zip$OptolithClient from "../Utilities/Yaml_Zip.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";
import * as Ley_IntSet$OptolithClient from "../../Data/Ley_IntSet.bs.js";
import * as Static_Erratum$OptolithClient from "./Static_Erratum.bs.js";
import * as Static_SourceRef$OptolithClient from "./Static_SourceRef.bs.js";

function nameByTradition(json) {
  return [
          Json_decode.field("id", Json_decode.$$int, json),
          Json_decode.field("name", Json_decode.string, json)
        ];
}

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json),
          nameByTradition: Json_decode.field("nameByTradition", (function (param) {
                  return Json_decode.list(nameByTradition, param);
                }), json),
          effect: Json_decode.field("effect", Json_decode.string, json),
          duration: Json_decode.field("duration", Json_decode.string, json),
          durationShort: Json_decode.field("durationShort", Json_decode.string, json),
          aeCost: Json_decode.field("aeCost", Json_decode.string, json),
          aeCostShort: Json_decode.field("aeCostShort", Json_decode.string, json),
          src: Json_decode.field("src", Static_SourceRef$OptolithClient.Decode.list, json),
          errata: Json_decode.field("errata", Static_Erratum$OptolithClient.Decode.list, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          check1: Json_decode.field("check1", Json_decode.$$int, json),
          check2: Json_decode.field("check2", Json_decode.$$int, json),
          check3: Json_decode.field("check3", Json_decode.$$int, json),
          musictraditions: Json_decode.field("musictraditions", (function (param) {
                  return Json_decode.list(Json_decode.$$int, param);
                }), json),
          property: Json_decode.field("property", Json_decode.$$int, json),
          ic: Json_decode.field("ic", IC$OptolithClient.Decode.t, json)
        };
}

function t(univ, l10n) {
  return [
          univ.id,
          {
            id: univ.id,
            name: l10n.name,
            nameByTradition: Curry._1(Ley_IntMap$OptolithClient.fromList, l10n.nameByTradition),
            check: [
              univ.check1,
              univ.check2,
              univ.check3
            ],
            effect: l10n.effect,
            duration: l10n.duration,
            durationShort: l10n.durationShort,
            aeCost: l10n.aeCost,
            aeCostShort: l10n.aeCostShort,
            musictraditions: Curry._1(Ley_IntSet$OptolithClient.fromList, univ.musictraditions),
            property: univ.property,
            ic: univ.ic,
            src: l10n.src,
            errata: l10n.errata
          }
        ];
}

function all(yamlData) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Yaml_Zip$OptolithClient.zipBy(Ley_Int$OptolithClient.show, t, (function (x) {
                    return x.id;
                  }), (function (x) {
                    return x.id;
                  }), Json_decode.list(tUniv, yamlData.magicalDancesUniv), Json_decode.list(tL10n, yamlData.magicalDancesL10n)));
}

var Decode = {
  nameByTradition: nameByTradition,
  tL10n: tL10n,
  tUniv: tUniv,
  t: t,
  all: all
};

export {
  Decode ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
