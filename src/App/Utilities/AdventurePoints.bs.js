// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as IC$OptolithClient from "./IC.bs.js";
import * as Ley_Int$OptolithClient from "../../Data/Ley_Int.bs.js";
import * as Tradition$OptolithClient from "./Tradition.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../../Data/Ley_Option.bs.js";
import * as Ley_Function$OptolithClient from "../../Data/Ley_Function.bs.js";

function getMissingAp(isInCharacterCreation, apAvailable, apCost) {
  if (apCost > 0 && !isInCharacterCreation && apCost > apAvailable) {
    return apCost - apAvailable | 0;
  }
  
}

function getDisAdvantagesSubtypeMax(staticData, hero, isMagical) {
  if (isMagical) {
    return Ley_Option$OptolithClient.option(50, (function (param) {
                  if (param[2].isDisAdvAPMaxHalved) {
                    return 25;
                  } else {
                    return 50;
                  }
                }), Ley_Option$OptolithClient.listToOption(Tradition$OptolithClient.Magical.getEntries(staticData, hero.specialAbilities)));
  } else {
    return 50;
  }
}

function getDisAdvantageSubtypeApSpent(apCategories, isDisadvantage, isMagical, isBlessed) {
  if (isDisadvantage) {
    if (isMagical) {
      return apCategories.spentOnMagicalDisadvantages;
    } else if (isBlessed) {
      return apCategories.spentOnBlessedDisadvantages;
    } else {
      return ;
    }
  } else if (isMagical) {
    return apCategories.spentOnMagicalAdvantages;
  } else if (isBlessed) {
    return apCategories.spentOnBlessedAdvantages;
  } else {
    return ;
  }
}

function getMissingApForDisAdvantage(staticData, hero, isInCharacterCreation, apCategories, isMagical, isBlessed, apCost, staticEntry) {
  var isDisadvantage;
  isDisadvantage = staticEntry.TAG ? true : false;
  var noMaxAPInfluence = staticEntry._0.noMaxAPInfluence;
  var apSpent = isDisadvantage ? apCategories.spentOnDisadvantages : apCategories.spentOnAdvantages;
  var mApSpentSubtype = getDisAdvantageSubtypeApSpent(apCategories, isDisadvantage, isMagical, isBlessed);
  var subtypeMax = getDisAdvantagesSubtypeMax(staticData, hero, isMagical);
  var absoluteApCost = Ley_Int$OptolithClient.abs(apCost);
  var missingApForSubtype = isInCharacterCreation && !noMaxAPInfluence ? Ley_Option$OptolithClient.Monad.$great$great$eq(mApSpentSubtype, (function (apSpentSubtype) {
            return Ley_Option$OptolithClient.ensure((function (param) {
                          return 0 < param;
                        }), (apSpentSubtype + absoluteApCost | 0) - subtypeMax | 0);
          })) : undefined;
  var missingApForMain = isInCharacterCreation && !noMaxAPInfluence ? Ley_Option$OptolithClient.ensure((function (param) {
            return 0 < param;
          }), (apSpent + absoluteApCost | 0) - 80 | 0) : undefined;
  var missingApForTotal = getMissingAp(isInCharacterCreation, apCategories.available, apCost);
  return {
          totalMissing: missingApForTotal,
          mainMissing: missingApForMain,
          subMissing: missingApForSubtype
        };
}

var DifferenceTotal = {};

var getApSpentOnAttributes = Curry._2(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
        var partial_arg = IC$OptolithClient.getAPForRange(/* E */4, 8, x.value);
        return function (param) {
          return partial_arg + param | 0;
        };
      }), 0);

function getApSpentOnSkills(staticData) {
  return Curry._2(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                return Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (staticEntry) {
                              var partial_arg = IC$OptolithClient.getAPForRange(staticEntry.ic, 0, x.value);
                              return function (param) {
                                return partial_arg + param | 0;
                              };
                            }), Curry._2(Ley_IntMap$OptolithClient.lookup, x.id, staticData.skills));
              }), 0);
}

function getApSpentOnCombatTechniques(staticData) {
  return Curry._2(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                return Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (staticEntry) {
                              var partial_arg = IC$OptolithClient.getAPForRange(staticEntry.ic, 6, x.value);
                              return function (param) {
                                return partial_arg + param | 0;
                              };
                            }), Curry._2(Ley_IntMap$OptolithClient.lookup, x.id, staticData.combatTechniques));
              }), 0);
}

function getApSpentOnSpells(staticData) {
  return Curry._2(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                var value = x.value;
                if (!value) {
                  return Ley_Function$OptolithClient.id;
                }
                var value$1 = value._0;
                return Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (staticEntry) {
                              var partial_arg = IC$OptolithClient.getAPForRange(staticEntry.ic, 0, value$1);
                              return function (param) {
                                return partial_arg + param | 0;
                              };
                            }), Curry._2(Ley_IntMap$OptolithClient.lookup, x.id, staticData.spells));
              }), 0);
}

function getApSpentOnLiturgicalChants(staticData) {
  return Curry._2(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                var value = x.value;
                if (!value) {
                  return Ley_Function$OptolithClient.id;
                }
                var value$1 = value._0;
                return Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (staticEntry) {
                              var partial_arg = IC$OptolithClient.getAPForRange(staticEntry.ic, 0, value$1);
                              return function (param) {
                                return partial_arg + param | 0;
                              };
                            }), Curry._2(Ley_IntMap$OptolithClient.lookup, x.id, staticData.liturgicalChants));
              }), 0);
}

var Sum = {
  getApSpentOnAttributes: getApSpentOnAttributes,
  getApSpentOnSkills: getApSpentOnSkills,
  getApSpentOnCombatTechniques: getApSpentOnCombatTechniques,
  getApSpentOnSpells: getApSpentOnSpells,
  getApSpentOnLiturgicalChants: getApSpentOnLiturgicalChants,
  getApSpentOnCantrips: Ley_IntMap$OptolithClient.size,
  getAPSpentOnBlessings: Ley_IntMap$OptolithClient.size
};

export {
  getMissingAp ,
  getDisAdvantagesSubtypeMax ,
  getMissingApForDisAdvantage ,
  DifferenceTotal ,
  Sum ,
  
}
/* getApSpentOnAttributes Not a pure module */
