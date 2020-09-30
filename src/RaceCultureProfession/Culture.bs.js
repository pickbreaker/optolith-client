// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Ley_Int$OptolithClient from "../Data/Ley_Int.bs.js";
import * as Yaml_Zip$OptolithClient from "../Misc/Yaml_Zip.bs.js";
import * as JsonStrict$OptolithClient from "../Misc/JsonStrict.bs.js";
import * as Ley_IntMap$OptolithClient from "../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../Data/Ley_Option.bs.js";

function tL10n(json) {
  return {
          id: JsonStrict$OptolithClient.field("id", JsonStrict$OptolithClient.$$int, json),
          name: JsonStrict$OptolithClient.field("name", JsonStrict$OptolithClient.string, json),
          areaKnowledge: JsonStrict$OptolithClient.field("areaKnowledge", JsonStrict$OptolithClient.string, json),
          areaKnowledgeShort: JsonStrict$OptolithClient.field("areaKnowledgeShort", JsonStrict$OptolithClient.string, json),
          commonMundaneProfessions: JsonStrict$OptolithClient.optionalField("commonMundaneProfessions", JsonStrict$OptolithClient.string, json),
          commonMagicalProfessions: JsonStrict$OptolithClient.optionalField("commonMagicalProfessions", JsonStrict$OptolithClient.string, json),
          commonBlessedProfessions: JsonStrict$OptolithClient.optionalField("commonBlessedProfessions", JsonStrict$OptolithClient.string, json),
          commonAdvantages: JsonStrict$OptolithClient.optionalField("commonAdvantages", JsonStrict$OptolithClient.string, json),
          commonDisadvantages: JsonStrict$OptolithClient.optionalField("commonDisadvantages", JsonStrict$OptolithClient.string, json),
          uncommonAdvantages: JsonStrict$OptolithClient.optionalField("uncommonAdvantages", JsonStrict$OptolithClient.string, json),
          uncommonDisadvantages: JsonStrict$OptolithClient.optionalField("uncommonDisadvantages", JsonStrict$OptolithClient.string, json),
          commonNames: JsonStrict$OptolithClient.field("commonNames", JsonStrict$OptolithClient.string, json)
        };
}

function frequencyException(json) {
  var str = JsonStrict$OptolithClient.field("scope", JsonStrict$OptolithClient.string, json);
  switch (str) {
    case "Group" :
        return {
                TAG: /* Group */1,
                _0: JsonStrict$OptolithClient.field("value", JsonStrict$OptolithClient.$$int, json)
              };
    case "Single" :
        return {
                TAG: /* Single */0,
                _0: JsonStrict$OptolithClient.field("value", JsonStrict$OptolithClient.$$int, json)
              };
    default:
      throw {
            RE_EXN_ID: JsonStrict$OptolithClient.DecodeError,
            _1: "Unknown frequency exception: " + str,
            Error: new Error()
          };
  }
}

function tUniv(json) {
  return {
          id: JsonStrict$OptolithClient.field("id", JsonStrict$OptolithClient.$$int, json),
          languages: JsonStrict$OptolithClient.field("languages", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          literacy: JsonStrict$OptolithClient.optionalField("literacy", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          social: JsonStrict$OptolithClient.field("social", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          commonMundaneProfessionsAll: JsonStrict$OptolithClient.field("commonMundaneProfessionsAll", JsonStrict$OptolithClient.bool, json),
          commonMundaneProfessionsExceptions: JsonStrict$OptolithClient.optionalField("commonMundaneProfessionsExceptions", (function (param) {
                  return JsonStrict$OptolithClient.list(frequencyException, param);
                }), json),
          commonMagicalProfessionsAll: JsonStrict$OptolithClient.field("commonMagicalProfessionsAll", JsonStrict$OptolithClient.bool, json),
          commonMagicalProfessionsExceptions: JsonStrict$OptolithClient.optionalField("commonMagicalProfessionsExceptions", (function (param) {
                  return JsonStrict$OptolithClient.list(frequencyException, param);
                }), json),
          commonBlessedProfessionsAll: JsonStrict$OptolithClient.field("commonBlessedProfessionsAll", JsonStrict$OptolithClient.bool, json),
          commonBlessedProfessionsExceptions: JsonStrict$OptolithClient.optionalField("commonBlessedProfessionsExceptions", (function (param) {
                  return JsonStrict$OptolithClient.list(frequencyException, param);
                }), json),
          commonAdvantages: JsonStrict$OptolithClient.optionalField("commonAdvantages", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          commonDisadvantages: JsonStrict$OptolithClient.optionalField("commonDisadvantages", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          uncommonAdvantages: JsonStrict$OptolithClient.optionalField("uncommonAdvantages", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          uncommonDisadvantages: JsonStrict$OptolithClient.optionalField("uncommonDisadvantages", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          commonSkills: JsonStrict$OptolithClient.field("commonSkills", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          uncommonSkills: JsonStrict$OptolithClient.optionalField("uncommonSkills", (function (param) {
                  return JsonStrict$OptolithClient.list(JsonStrict$OptolithClient.$$int, param);
                }), json),
          culturalPackageCost: JsonStrict$OptolithClient.field("culturalPackageCost", JsonStrict$OptolithClient.$$int, json),
          culturalPackageSkills: JsonStrict$OptolithClient.field("culturalPackageSkills", (function (param) {
                  return JsonStrict$OptolithClient.list((function (param) {
                                return JsonStrict$OptolithClient.pair(JsonStrict$OptolithClient.$$int, JsonStrict$OptolithClient.$$int, param);
                              }), param);
                }), json)
        };
}

function t(univ, l10n) {
  return [
          univ.id,
          {
            id: univ.id,
            name: l10n.name,
            language: univ.languages,
            script: univ.literacy,
            areaKnowledge: l10n.areaKnowledge,
            areaKnowledgeShort: l10n.areaKnowledgeShort,
            socialStatus: univ.social,
            commonMundaneProfessionsAll: univ.commonMundaneProfessionsAll,
            commonMundaneProfessionsExceptions: univ.commonMundaneProfessionsExceptions,
            commonMundaneProfessionsText: l10n.commonMundaneProfessions,
            commonMagicProfessionsAll: univ.commonMagicalProfessionsAll,
            commonMagicProfessionsExceptions: univ.commonMagicalProfessionsExceptions,
            commonMagicProfessionsText: l10n.commonMagicalProfessions,
            commonBlessedProfessionsAll: univ.commonBlessedProfessionsAll,
            commonBlessedProfessionsExceptions: univ.commonBlessedProfessionsExceptions,
            commonBlessedProfessionsText: l10n.commonBlessedProfessions,
            commonAdvantages: Ley_Option$OptolithClient.fromOption(/* [] */0, univ.commonAdvantages),
            commonAdvantagesText: l10n.commonAdvantages,
            commonDisadvantages: Ley_Option$OptolithClient.fromOption(/* [] */0, univ.commonDisadvantages),
            commonDisadvantagesText: l10n.commonDisadvantages,
            uncommonAdvantages: Ley_Option$OptolithClient.fromOption(/* [] */0, univ.uncommonAdvantages),
            uncommonAdvantagesText: l10n.uncommonAdvantages,
            uncommonDisadvantages: Ley_Option$OptolithClient.fromOption(/* [] */0, univ.uncommonDisadvantages),
            uncommonDisadvantagesText: l10n.uncommonDisadvantages,
            commonSkills: univ.commonSkills,
            uncommonSkills: Ley_Option$OptolithClient.fromOption(/* [] */0, univ.uncommonSkills),
            commonNames: l10n.commonNames,
            culturalPackageCost: univ.culturalPackageCost,
            culturalPackageSkills: Curry._1(Ley_IntMap$OptolithClient.fromList, univ.culturalPackageSkills)
          }
        ];
}

function all(yamlData) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Yaml_Zip$OptolithClient.zipBy(Ley_Int$OptolithClient.show, t, (function (x) {
                    return x.id;
                  }), (function (x) {
                    return x.id;
                  }), JsonStrict$OptolithClient.list(tUniv, yamlData.culturesUniv), JsonStrict$OptolithClient.list(tL10n, yamlData.culturesL10n)));
}

var Decode = {
  tL10n: tL10n,
  frequencyException: frequencyException,
  tUniv: tUniv,
  t: t,
  all: all
};

export {
  Decode ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
