// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as List from "bs-platform/lib/es6/list.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Ley_Function$OptolithClient from "./Ley_Function.bs.js";

function $less$$great(f, mx) {
  if (mx !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(mx)));
  }
  
}

function $less$amp$great(mx, f) {
  return $less$$great(f, mx);
}

function $less$star$great(mf, mx) {
  if (mf !== undefined) {
    return $less$$great(mf, mx);
  }
  
}

var Applicative = {
  $less$star$great: $less$star$great,
  ap: $less$star$great
};

function $less$pipe$great(mx, my) {
  if (mx !== undefined) {
    return mx;
  } else {
    return my;
  }
}

function guard(pred) {
  if (pred) {
    return Caml_option.some(undefined);
  }
  
}

function $$return(x) {
  return Caml_option.some(x);
}

function $great$great$eq(mx, f) {
  if (mx !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(mx));
  }
  
}

function $eq$less$less(f, mx) {
  return $great$great$eq(mx, f);
}

function $great$great(x, y) {
  return $great$great$eq(x, (function (param) {
                return Ley_Function$OptolithClient.$$const(y, param);
              }));
}

function mapM(f, xs) {
  if (!xs) {
    return /* [] */0;
  }
  var z = Curry._1(f, xs.hd);
  if (z === undefined) {
    return ;
  }
  var z$1 = Caml_option.valFromOption(z);
  return $less$$great((function (zs) {
                return {
                        hd: z$1,
                        tl: zs
                      };
              }), mapM(f, xs.tl));
}

function $great$eq$great(f, g, x) {
  return $great$great$eq(Curry._1(f, x), g);
}

function join(x) {
  return $great$great$eq(x, Ley_Function$OptolithClient.id);
}

function liftM2(f, mx, my) {
  return $great$great$eq(mx, (function (x) {
                return $less$$great(Curry._1(f, x), my);
              }));
}

function liftM3(f, mx, my, mz) {
  return $great$great$eq(mx, (function (x) {
                return $great$great$eq(my, (function (y) {
                              return $less$$great(Curry._2(f, x, y), mz);
                            }));
              }));
}

function liftM4(f, mx, my, mz, ma) {
  return $great$great$eq(mx, (function (x) {
                return $great$great$eq(my, (function (y) {
                              return $great$great$eq(mz, (function (z) {
                                            return $less$$great(Curry._3(f, x, y, z), ma);
                                          }));
                            }));
              }));
}

function liftM5(f, mx, my, mz, ma, mb) {
  return $great$great$eq(mx, (function (x) {
                return $great$great$eq(my, (function (y) {
                              return $great$great$eq(mz, (function (z) {
                                            return $great$great$eq(ma, (function (a) {
                                                          return $less$$great(Curry._4(f, x, y, z, a), mb);
                                                        }));
                                          }));
                            }));
              }));
}

function foldr(f, init, mx) {
  if (mx !== undefined) {
    return Curry._2(f, Caml_option.valFromOption(mx), init);
  } else {
    return init;
  }
}

function foldl(f, init, mx) {
  if (mx !== undefined) {
    return Curry._2(f, init, Caml_option.valFromOption(mx));
  } else {
    return init;
  }
}

function toList(mx) {
  if (mx !== undefined) {
    return {
            hd: Caml_option.valFromOption(mx),
            tl: /* [] */0
          };
  } else {
    return /* [] */0;
  }
}

function length(mx) {
  if (mx !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

function elem(e, mx) {
  if (mx !== undefined) {
    return e === Caml_option.valFromOption(mx);
  } else {
    return false;
  }
}

function sum(mx) {
  if (mx !== undefined) {
    return mx;
  } else {
    return 0;
  }
}

function product(mx) {
  if (mx !== undefined) {
    return mx;
  } else {
    return 1;
  }
}

function concat(mxs) {
  if (mxs !== undefined) {
    return mxs;
  } else {
    return /* [] */0;
  }
}

function concatMap(f, mx) {
  if (mx !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(mx));
  } else {
    return /* [] */0;
  }
}

function con(mx) {
  if (mx !== undefined) {
    return mx;
  } else {
    return true;
  }
}

function dis(mx) {
  if (mx !== undefined) {
    return mx;
  } else {
    return false;
  }
}

function any(pred, mx) {
  if (mx !== undefined) {
    return Curry._1(pred, Caml_option.valFromOption(mx));
  } else {
    return false;
  }
}

function all(pred, mx) {
  if (mx !== undefined) {
    return Curry._1(pred, Caml_option.valFromOption(mx));
  } else {
    return true;
  }
}

function notElem(e, mx) {
  return !elem(e, mx);
}

function find(pred, mx) {
  if (mx === undefined) {
    return ;
  }
  var x = Caml_option.valFromOption(mx);
  if (Curry._1(pred, x)) {
    return Caml_option.some(x);
  }
  
}

function sappend(mxs, mys) {
  if (mxs !== undefined && mys !== undefined) {
    return List.append(mxs, mys);
  } else {
    return mxs;
  }
}

var Semigroup = {
  sappend: sappend
};

function isSome(m) {
  return m !== undefined;
}

function isNone(m) {
  return m === undefined;
}

function fromSome(x) {
  if (x !== undefined) {
    return Caml_option.valFromOption(x);
  } else {
    return Pervasives.invalid_arg("Cannot unwrap None.");
  }
}

function fromOption(def, mx) {
  if (mx !== undefined) {
    return Caml_option.valFromOption(mx);
  } else {
    return def;
  }
}

function option(def, f, mx) {
  if (mx !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(mx));
  } else {
    return def;
  }
}

function listToOption(xs) {
  if (xs) {
    return Caml_option.some(xs.hd);
  }
  
}

function catOptions(xs) {
  return List.fold_right((function (param) {
                return option(Ley_Function$OptolithClient.id, (function (x, xs) {
                              return {
                                      hd: x,
                                      tl: xs
                                    };
                            }), param);
              }), xs, /* [] */0);
}

function mapOption(f, xs) {
  return List.fold_right((function (param) {
                return Ley_Function$OptolithClient.$less$neg((function (param) {
                              return option(Ley_Function$OptolithClient.id, (function (x, xs) {
                                            return {
                                                    hd: x,
                                                    tl: xs
                                                  };
                                          }), param);
                            }), f, param);
              }), xs, /* [] */0);
}

function ensure(pred, x) {
  if (Curry._1(pred, x)) {
    return Caml_option.some(x);
  }
  
}

function imapOptionAux(f, _index, _xs) {
  while(true) {
    var xs = _xs;
    var index = _index;
    if (!xs) {
      return /* [] */0;
    }
    var xs$1 = xs.tl;
    var y = Curry._2(f, index, xs.hd);
    if (y !== undefined) {
      return {
              hd: Caml_option.valFromOption(y),
              tl: imapOptionAux(f, index + 1 | 0, xs$1)
            };
    }
    _xs = xs$1;
    _index = index + 1 | 0;
    continue ;
  };
}

function imapOption(f, xs) {
  return imapOptionAux(f, 0, xs);
}

var Functor = {
  $less$$great: $less$$great,
  $less$amp$great: $less$amp$great
};

var Alternative = {
  $less$pipe$great: $less$pipe$great,
  guard: guard
};

var Monad = {
  $$return: $$return,
  $great$great$eq: $great$great$eq,
  $eq$less$less: $eq$less$less,
  $great$great: $great$great,
  mapM: mapM,
  $great$eq$great: $great$eq$great,
  join: join,
  liftM2: liftM2,
  liftM3: liftM3,
  liftM4: liftM4,
  liftM5: liftM5
};

var Foldable = {
  foldr: foldr,
  foldl: foldl,
  toList: toList,
  length: length,
  elem: elem,
  sum: sum,
  product: product,
  concat: concat,
  concatMap: concatMap,
  con: con,
  dis: dis,
  any: any,
  all: all,
  notElem: notElem,
  find: find
};

var optionToList = toList;

export {
  Functor ,
  Applicative ,
  Alternative ,
  Monad ,
  Foldable ,
  Semigroup ,
  isSome ,
  isNone ,
  fromSome ,
  fromOption ,
  option ,
  listToOption ,
  optionToList ,
  catOptions ,
  mapOption ,
  ensure ,
  imapOption ,
  
}
/* No side effect */
