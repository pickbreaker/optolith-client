// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Ley_Option$OptolithClient from "../Data/Ley_Option.bs.js";
import * as Increasable$OptolithClient from "./Increasable.bs.js";
import * as TranslationMap$OptolithClient from "../Misc/TranslationMap.bs.js";

var Dynamic = Increasable$OptolithClient.Dynamic({
      minValue: 8
    });

function decode(json) {
  return {
          name: Json_decode.field("name", Json_decode.string, json),
          short: Json_decode.field("short", Json_decode.string, json)
        };
}

var Translations = {
  decode: decode
};

var TranslationMap = TranslationMap$OptolithClient.Make(Translations);

function decodeFull(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          translations: Json_decode.field("translations", TranslationMap.decode, json)
        };
}

function decode$1(langs, json) {
  var x = decodeFull(json);
  return Ley_Option$OptolithClient.Functor.$less$amp$great(Curry._2(TranslationMap.getFromLanguageOrder, langs, x.translations), (function (translation) {
                return {
                        id: x.id,
                        name: translation.name,
                        short: translation.short
                      };
              }));
}

var Dynamic_empty = Dynamic.empty;

var Dynamic_isEmpty = Dynamic.isEmpty;

var Dynamic_getValueDef = Dynamic.getValueDef;

var Dynamic$1 = {
  empty: Dynamic_empty,
  isEmpty: Dynamic_isEmpty,
  getValueDef: Dynamic_getValueDef
};

var Static = {
  decode: decode$1
};

export {
  Dynamic$1 as Dynamic,
  Static ,
  
}
/* Dynamic Not a pure module */
