// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Ley_List$OptolithClient from "./Ley_List.bs.js";
import * as Ley_Function$OptolithClient from "./Ley_Function.bs.js";

function fromError(def, x) {
  if (x.TAG) {
    return x._0;
  } else {
    return def;
  }
}

function fromOk(def, x) {
  if (x.TAG) {
    return def;
  } else {
    return x._0;
  }
}

function fromResult(x) {
  return x._0;
}

function fromError$prime(x) {
  if (x.TAG) {
    return x._0;
  } else {
    return Pervasives.invalid_arg("fromError': Cannot extract a Error value out of a Ok");
  }
}

function fromOk$prime(x) {
  if (x.TAG) {
    return Pervasives.invalid_arg("fromOk': Cannot extract a Ok value out of a Error");
  } else {
    return x._0;
  }
}

function resultToOption(x) {
  if (x.TAG) {
    return ;
  } else {
    return Caml_option.some(x._0);
  }
}

function optionToResult(error, x) {
  if (x !== undefined) {
    return {
            TAG: /* Ok */0,
            _0: Caml_option.valFromOption(x)
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: error
          };
  }
}

function optionToResult$prime(error, x) {
  if (x !== undefined) {
    return {
            TAG: /* Ok */0,
            _0: Caml_option.valFromOption(x)
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: Curry._1(error, undefined)
          };
  }
}

var Extra = {
  fromError: fromError,
  fromOk: fromOk,
  fromResult: fromResult,
  fromError$prime: fromError$prime,
  fromError_: fromError$prime,
  fromOk$prime: fromOk$prime,
  fromOk_: fromOk$prime,
  resultToOption: resultToOption,
  optionToResult: optionToResult,
  optionToResult$prime: optionToResult$prime,
  optionToResult_: optionToResult$prime
};

function $less$$great(f, x) {
  if (x.TAG) {
    return {
            TAG: /* Error */1,
            _0: x._0
          };
  } else {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(f, x._0)
          };
  }
}

var Functor = {
  $less$$great: $less$$great,
  fmap: $less$$great
};

function bimap(fError, fOk, x) {
  if (x.TAG) {
    return {
            TAG: /* Error */1,
            _0: Curry._1(fError, x._0)
          };
  } else {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(fOk, x._0)
          };
  }
}

function first(f, x) {
  if (x.TAG) {
    return {
            TAG: /* Error */1,
            _0: Curry._1(f, x._0)
          };
  } else {
    return {
            TAG: /* Ok */0,
            _0: x._0
          };
  }
}

var Bifunctor = {
  bimap: bimap,
  first: first,
  second: $less$$great
};

function $less$star$great(f, x) {
  if (f.TAG) {
    return {
            TAG: /* Error */1,
            _0: f._0
          };
  } else {
    return $less$$great(f._0, x);
  }
}

var Applicative = {
  $less$star$great: $less$star$great,
  ap: $less$star$great
};

function $great$great$eq(x, f) {
  if (x.TAG) {
    return {
            TAG: /* Error */1,
            _0: x._0
          };
  } else {
    return Curry._1(f, x._0);
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

function $great$eq$great(f, g, x) {
  return $great$great$eq(Curry._1(f, x), g);
}

function join(x) {
  return $great$great$eq(x, Ley_Function$OptolithClient.id);
}

function mapM(f, xs) {
  if (!xs) {
    return {
            TAG: /* Ok */0,
            _0: /* [] */0
          };
  }
  var e = Curry._1(f, xs.hd);
  if (e.TAG) {
    return {
            TAG: /* Error */1,
            _0: e._0
          };
  }
  var z = e._0;
  return $less$$great((function (zs) {
                return {
                        hd: z,
                        tl: zs
                      };
              }), mapM(f, xs.tl));
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

var Monad = {
  $great$great$eq: $great$great$eq,
  bind: $great$great$eq,
  $eq$less$less: $eq$less$less,
  bindF: $eq$less$less,
  $great$great: $great$great,
  then_: $great$great,
  $great$eq$great: $great$eq$great,
  kleisli: $great$eq$great,
  join: join,
  mapM: mapM,
  liftM2: liftM2,
  liftM3: liftM3,
  liftM4: liftM4
};

function foldr(f, init, mx) {
  if (mx.TAG) {
    return init;
  } else {
    return Curry._2(f, mx._0, init);
  }
}

function foldl(f, init, mx) {
  if (mx.TAG) {
    return init;
  } else {
    return Curry._2(f, init, mx._0);
  }
}

function toList(mx) {
  if (mx.TAG) {
    return /* [] */0;
  } else {
    return {
            hd: mx._0,
            tl: /* [] */0
          };
  }
}

function $$null(mx) {
  if (mx.TAG) {
    return true;
  } else {
    return false;
  }
}

function length(mx) {
  if (mx.TAG) {
    return 0;
  } else {
    return 1;
  }
}

function elem(e, mx) {
  if (mx.TAG) {
    return false;
  } else {
    return e === mx._0;
  }
}

function sum(mx) {
  if (mx.TAG) {
    return 0;
  } else {
    return mx._0;
  }
}

function product(mx) {
  if (mx.TAG) {
    return 1;
  } else {
    return mx._0;
  }
}

function concat(mxs) {
  if (mxs.TAG) {
    return /* [] */0;
  } else {
    return mxs._0;
  }
}

function concatMap(f, mx) {
  if (mx.TAG) {
    return /* [] */0;
  } else {
    return Curry._1(f, mx._0);
  }
}

function con(mx) {
  if (mx.TAG) {
    return true;
  } else {
    return mx._0;
  }
}

function dis(mx) {
  if (mx.TAG) {
    return false;
  } else {
    return mx._0;
  }
}

function any(pred, mx) {
  if (mx.TAG) {
    return false;
  } else {
    return Curry._1(pred, mx._0);
  }
}

function all(pred, mx) {
  if (mx.TAG) {
    return true;
  } else {
    return Curry._1(pred, mx._0);
  }
}

function notElem(e, mx) {
  return !elem(e, mx);
}

function find(pred, mx) {
  if (mx.TAG) {
    return ;
  }
  var x = mx._0;
  if (Curry._1(pred, x)) {
    return Caml_option.some(x);
  }
  
}

var Foldable = {
  foldr: foldr,
  foldl: foldl,
  toList: toList,
  $$null: $$null,
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

function result(fError, fOk, x) {
  if (x.TAG) {
    return Curry._1(fError, x._0);
  } else {
    return Curry._1(fOk, x._0);
  }
}

function errors(xs) {
  return Ley_List$OptolithClient.Foldable.foldr((function (x, acc) {
                if (x.TAG) {
                  return {
                          hd: x._0,
                          tl: acc
                        };
                } else {
                  return acc;
                }
              }), /* [] */0, xs);
}

function oks(xs) {
  return Ley_List$OptolithClient.Foldable.foldr((function (x, acc) {
                if (x.TAG) {
                  return acc;
                } else {
                  return {
                          hd: x._0,
                          tl: acc
                        };
                }
              }), /* [] */0, xs);
}

function partitionResults(xs) {
  return Ley_List$OptolithClient.Foldable.foldr((function (x, param) {
                var rs = param[1];
                var ls = param[0];
                if (x.TAG) {
                  return [
                          {
                            hd: x._0,
                            tl: ls
                          },
                          rs
                        ];
                } else {
                  return [
                          ls,
                          {
                            hd: x._0,
                            tl: rs
                          }
                        ];
                }
              }), [
              /* [] */0,
              /* [] */0
            ], xs);
}

function swap(x) {
  if (x.TAG) {
    return {
            TAG: /* Ok */0,
            _0: x._0
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: x._0
          };
  }
}

export {
  Extra ,
  Functor ,
  Bifunctor ,
  Applicative ,
  Monad ,
  Foldable ,
  result ,
  errors ,
  oks ,
  partitionResults ,
  swap ,
  
}
/* No side effect */
