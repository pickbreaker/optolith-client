// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Attribute$OptolithClient from "./Attribute.bs.js";
import * as Ley_IntMap$OptolithClient from "../Data/Ley_IntMap.bs.js";

function getValues(mp, param) {
  return [
          Curry._1(Attribute$OptolithClient.Dynamic.getValueDef, Curry._2(Ley_IntMap$OptolithClient.lookup, param[0], mp)),
          Curry._1(Attribute$OptolithClient.Dynamic.getValueDef, Curry._2(Ley_IntMap$OptolithClient.lookup, param[1], mp)),
          Curry._1(Attribute$OptolithClient.Dynamic.getValueDef, Curry._2(Ley_IntMap$OptolithClient.lookup, param[2], mp))
        ];
}

function decode(param) {
  return Json_decode.tuple3(Json_decode.$$int, Json_decode.$$int, Json_decode.$$int, param);
}

export {
  getValues ,
  decode ,
  
}
/* Attribute-OptolithClient Not a pure module */
