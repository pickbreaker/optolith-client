// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Id$OptolithClient from "../Misc/Id.bs.js";
import * as Ley_List$OptolithClient from "../Data/Ley_List.bs.js";
import * as Ley_IntMap$OptolithClient from "../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../Data/Ley_Option.bs.js";
import * as Prerequisite$OptolithClient from "../Prerequisites/Prerequisite.bs.js";

function getSingle(target, level, id, name, cost, description, prerequisites, src, errata) {
  return [
          id,
          {
            id: {
              HASH: /* Generic */61643255,
              VAL: id
            },
            name: target.name + (": " + name),
            cost: cost,
            prerequisites: prerequisites,
            description: description,
            isSecret: undefined,
            languages: undefined,
            continent: undefined,
            isExtinct: undefined,
            specializations: undefined,
            specializationInput: undefined,
            animalGr: undefined,
            animalLevel: undefined,
            enhancementTarget: target.id,
            enhancementLevel: level,
            wikiEntry: {
              TAG: /* LiturgicalChant */3,
              _0: target
            },
            applications: undefined,
            src: src,
            errata: errata
          }
        ];
}

function liturgicalChantEnhancements(liturgicalChants, xs) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Ley_List$OptolithClient.Monad.$great$great$eq(xs, (function (enhancement) {
                    return Ley_Option$OptolithClient.option(/* [] */0, (function (liturgicalChant) {
                                  var match = enhancement.level3.requirePrevious;
                                  return {
                                          hd: getSingle(liturgicalChant, 1, enhancement.level1.id, enhancement.level1.name, enhancement.level1.cost, enhancement.level1.effect, Prerequisite$OptolithClient.empty, enhancement.src, enhancement.errata),
                                          tl: {
                                            hd: getSingle(liturgicalChant, 2, enhancement.level2.id, enhancement.level2.name, enhancement.level2.cost, enhancement.level2.effect, {
                                                  sex: Prerequisite$OptolithClient.empty.sex,
                                                  race: Prerequisite$OptolithClient.empty.race,
                                                  culture: Prerequisite$OptolithClient.empty.culture,
                                                  pact: Prerequisite$OptolithClient.empty.pact,
                                                  social: Prerequisite$OptolithClient.empty.social,
                                                  primaryAttribute: Prerequisite$OptolithClient.empty.primaryAttribute,
                                                  activatable: enhancement.level2.requireLevel1 ? ({
                                                        hd: {
                                                          id: {
                                                            HASH: /* SpecialAbility */-789492591,
                                                            VAL: Id$OptolithClient.specialAbilityToInt(/* SpellEnhancement */25)
                                                          },
                                                          active: true,
                                                          sid: {
                                                            HASH: /* Generic */61643255,
                                                            VAL: enhancement.level1.id
                                                          },
                                                          sid2: undefined,
                                                          level: undefined
                                                        },
                                                        tl: /* [] */0
                                                      }) : /* [] */0,
                                                  activatableMultiEntry: Prerequisite$OptolithClient.empty.activatableMultiEntry,
                                                  activatableMultiSelect: Prerequisite$OptolithClient.empty.activatableMultiSelect,
                                                  increasable: Prerequisite$OptolithClient.empty.increasable,
                                                  increasableMultiEntry: Prerequisite$OptolithClient.empty.increasableMultiEntry
                                                }, enhancement.src, enhancement.errata),
                                            tl: {
                                              hd: getSingle(liturgicalChant, 3, enhancement.level3.id, enhancement.level3.name, enhancement.level3.cost, enhancement.level3.effect, {
                                                    sex: Prerequisite$OptolithClient.empty.sex,
                                                    race: Prerequisite$OptolithClient.empty.race,
                                                    culture: Prerequisite$OptolithClient.empty.culture,
                                                    pact: Prerequisite$OptolithClient.empty.pact,
                                                    social: Prerequisite$OptolithClient.empty.social,
                                                    primaryAttribute: Prerequisite$OptolithClient.empty.primaryAttribute,
                                                    activatable: match !== undefined ? (
                                                        match ? ({
                                                              hd: {
                                                                id: {
                                                                  HASH: /* SpecialAbility */-789492591,
                                                                  VAL: Id$OptolithClient.specialAbilityToInt(/* SpellEnhancement */25)
                                                                },
                                                                active: true,
                                                                sid: {
                                                                  HASH: /* Generic */61643255,
                                                                  VAL: enhancement.level2.id
                                                                },
                                                                sid2: undefined,
                                                                level: undefined
                                                              },
                                                              tl: /* [] */0
                                                            }) : ({
                                                              hd: {
                                                                id: {
                                                                  HASH: /* SpecialAbility */-789492591,
                                                                  VAL: Id$OptolithClient.specialAbilityToInt(/* SpellEnhancement */25)
                                                                },
                                                                active: true,
                                                                sid: {
                                                                  HASH: /* Generic */61643255,
                                                                  VAL: enhancement.level1.id
                                                                },
                                                                sid2: undefined,
                                                                level: undefined
                                                              },
                                                              tl: /* [] */0
                                                            })
                                                      ) : /* [] */0,
                                                    activatableMultiEntry: Prerequisite$OptolithClient.empty.activatableMultiEntry,
                                                    activatableMultiSelect: Prerequisite$OptolithClient.empty.activatableMultiSelect,
                                                    increasable: Prerequisite$OptolithClient.empty.increasable,
                                                    increasableMultiEntry: Prerequisite$OptolithClient.empty.increasableMultiEntry
                                                  }, enhancement.src, enhancement.errata),
                                              tl: /* [] */0
                                            }
                                          }
                                        };
                                }), Curry._2(Ley_IntMap$OptolithClient.lookup, enhancement.target, liturgicalChants));
                  })));
}

var Decode = {
  liturgicalChantEnhancements: liturgicalChantEnhancements
};

var IM;

var O;

export {
  IM ,
  O ,
  Decode ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
