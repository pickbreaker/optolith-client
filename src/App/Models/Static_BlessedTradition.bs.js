// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Int$OptolithClient = require("../../Data/Int.bs.js");
var IntMap$OptolithClient = require("../../Data/IntMap.bs.js");
var Yaml_Zip$OptolithClient = require("../Utilities/Yaml_Zip.bs.js");
var JsonStrict$OptolithClient = require("../Utilities/JsonStrict.bs.js");

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
  return Curry._1(IntMap$OptolithClient.fromList, Yaml_Zip$OptolithClient.zipBy(Int$OptolithClient.show, t, (function (x) {
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

exports.Decode = Decode;
/* IntMap-OptolithClient Not a pure module */
