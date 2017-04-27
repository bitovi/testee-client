/*[global-shim-start]*/
(function(exports, global, doEval){ // jshint ignore:line
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val){
		var parts = name.split("."),
			cur = global,
			i, part, next;
		for(i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if(!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod){
		if(!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, "default": true };
		for(var p in mod) {
			if(!esProps[p]) return false;
		}
		return true;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if(globalExport && !get(globalExport)) {
			if(useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				doEval(__load.source, global);
			}
		};
	});
}
)({},window,function(__$source__, __$global__) { // jshint ignore:line
	eval("(function() { " + __$source__ + " \n }).call(__$global__);");
}
)
/*core-js@2.4.1#client/core*/
!function (__e, __g, undefined) {
    'use strict';
    (function (modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
                return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = '';
        return __webpack_require__(0);
    }([
        function (module, exports, __webpack_require__) {
            __webpack_require__(1);
            __webpack_require__(50);
            __webpack_require__(51);
            __webpack_require__(52);
            __webpack_require__(54);
            __webpack_require__(55);
            __webpack_require__(58);
            __webpack_require__(59);
            __webpack_require__(60);
            __webpack_require__(61);
            __webpack_require__(62);
            __webpack_require__(63);
            __webpack_require__(64);
            __webpack_require__(65);
            __webpack_require__(66);
            __webpack_require__(68);
            __webpack_require__(70);
            __webpack_require__(72);
            __webpack_require__(74);
            __webpack_require__(77);
            __webpack_require__(78);
            __webpack_require__(79);
            __webpack_require__(83);
            __webpack_require__(86);
            __webpack_require__(87);
            __webpack_require__(88);
            __webpack_require__(89);
            __webpack_require__(91);
            __webpack_require__(92);
            __webpack_require__(93);
            __webpack_require__(94);
            __webpack_require__(95);
            __webpack_require__(97);
            __webpack_require__(99);
            __webpack_require__(100);
            __webpack_require__(101);
            __webpack_require__(103);
            __webpack_require__(104);
            __webpack_require__(105);
            __webpack_require__(107);
            __webpack_require__(108);
            __webpack_require__(109);
            __webpack_require__(111);
            __webpack_require__(112);
            __webpack_require__(113);
            __webpack_require__(114);
            __webpack_require__(115);
            __webpack_require__(116);
            __webpack_require__(117);
            __webpack_require__(118);
            __webpack_require__(119);
            __webpack_require__(120);
            __webpack_require__(121);
            __webpack_require__(122);
            __webpack_require__(123);
            __webpack_require__(124);
            __webpack_require__(126);
            __webpack_require__(130);
            __webpack_require__(131);
            __webpack_require__(132);
            __webpack_require__(133);
            __webpack_require__(137);
            __webpack_require__(139);
            __webpack_require__(140);
            __webpack_require__(141);
            __webpack_require__(142);
            __webpack_require__(143);
            __webpack_require__(144);
            __webpack_require__(145);
            __webpack_require__(146);
            __webpack_require__(147);
            __webpack_require__(148);
            __webpack_require__(149);
            __webpack_require__(150);
            __webpack_require__(151);
            __webpack_require__(152);
            __webpack_require__(158);
            __webpack_require__(159);
            __webpack_require__(161);
            __webpack_require__(162);
            __webpack_require__(163);
            __webpack_require__(167);
            __webpack_require__(168);
            __webpack_require__(169);
            __webpack_require__(170);
            __webpack_require__(171);
            __webpack_require__(173);
            __webpack_require__(174);
            __webpack_require__(175);
            __webpack_require__(176);
            __webpack_require__(179);
            __webpack_require__(181);
            __webpack_require__(182);
            __webpack_require__(183);
            __webpack_require__(185);
            __webpack_require__(187);
            __webpack_require__(189);
            __webpack_require__(190);
            __webpack_require__(191);
            __webpack_require__(193);
            __webpack_require__(194);
            __webpack_require__(195);
            __webpack_require__(196);
            __webpack_require__(203);
            __webpack_require__(206);
            __webpack_require__(207);
            __webpack_require__(209);
            __webpack_require__(210);
            __webpack_require__(211);
            __webpack_require__(212);
            __webpack_require__(213);
            __webpack_require__(214);
            __webpack_require__(215);
            __webpack_require__(216);
            __webpack_require__(217);
            __webpack_require__(218);
            __webpack_require__(219);
            __webpack_require__(220);
            __webpack_require__(222);
            __webpack_require__(223);
            __webpack_require__(224);
            __webpack_require__(225);
            __webpack_require__(226);
            __webpack_require__(227);
            __webpack_require__(228);
            __webpack_require__(229);
            __webpack_require__(231);
            __webpack_require__(234);
            __webpack_require__(235);
            __webpack_require__(237);
            __webpack_require__(238);
            __webpack_require__(239);
            __webpack_require__(240);
            __webpack_require__(241);
            __webpack_require__(242);
            __webpack_require__(243);
            __webpack_require__(244);
            __webpack_require__(245);
            __webpack_require__(246);
            __webpack_require__(247);
            __webpack_require__(249);
            __webpack_require__(250);
            __webpack_require__(251);
            __webpack_require__(252);
            __webpack_require__(253);
            __webpack_require__(254);
            __webpack_require__(255);
            __webpack_require__(256);
            __webpack_require__(258);
            __webpack_require__(259);
            __webpack_require__(261);
            __webpack_require__(262);
            __webpack_require__(263);
            __webpack_require__(264);
            __webpack_require__(267);
            __webpack_require__(268);
            __webpack_require__(269);
            __webpack_require__(270);
            __webpack_require__(271);
            __webpack_require__(272);
            __webpack_require__(273);
            __webpack_require__(274);
            __webpack_require__(276);
            __webpack_require__(277);
            __webpack_require__(278);
            __webpack_require__(279);
            __webpack_require__(280);
            __webpack_require__(281);
            __webpack_require__(282);
            __webpack_require__(283);
            __webpack_require__(284);
            __webpack_require__(285);
            __webpack_require__(286);
            __webpack_require__(287);
            __webpack_require__(288);
            __webpack_require__(291);
            __webpack_require__(156);
            __webpack_require__(293);
            __webpack_require__(292);
            __webpack_require__(294);
            __webpack_require__(295);
            __webpack_require__(296);
            __webpack_require__(297);
            __webpack_require__(298);
            __webpack_require__(300);
            __webpack_require__(301);
            __webpack_require__(302);
            __webpack_require__(304);
            module.exports = __webpack_require__(305);
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(2), has = __webpack_require__(3), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(6), redefine = __webpack_require__(16), META = __webpack_require__(20).KEY, $fails = __webpack_require__(5), shared = __webpack_require__(21), setToStringTag = __webpack_require__(22), uid = __webpack_require__(17), wks = __webpack_require__(23), wksExt = __webpack_require__(24), wksDefine = __webpack_require__(25), keyOf = __webpack_require__(27), enumKeys = __webpack_require__(40), isArray = __webpack_require__(43), anObject = __webpack_require__(10), toIObject = __webpack_require__(30), toPrimitive = __webpack_require__(14), createDesc = __webpack_require__(15), _create = __webpack_require__(44), gOPNExt = __webpack_require__(47), $GOPD = __webpack_require__(49), $DP = __webpack_require__(9), $keys = __webpack_require__(28), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = 'prototype', HIDDEN = wks('_hidden'), TO_PRIMITIVE = wks('toPrimitive'), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared('symbol-registry'), AllSymbols = shared('symbols'), OPSymbols = shared('op-symbols'), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == 'function', QObject = global.QObject;
            var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
            var setSymbolDesc = DESCRIPTORS && $fails(function () {
                return _create(dP({}, 'a', {
                    get: function () {
                        return dP(this, 'a', { value: 7 }).a;
                    }
                })).a != 7;
            }) ? function (it, key, D) {
                var protoDesc = gOPD(ObjectProto, key);
                if (protoDesc)
                    delete ObjectProto[key];
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto)
                    dP(ObjectProto, key, protoDesc);
            } : dP;
            var wrap = function (tag) {
                var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                sym._k = tag;
                return sym;
            };
            var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
                return typeof it == 'symbol';
            } : function (it) {
                return it instanceof $Symbol;
            };
            var $defineProperty = function defineProperty(it, key, D) {
                if (it === ObjectProto)
                    $defineProperty(OPSymbols, key, D);
                anObject(it);
                key = toPrimitive(key, true);
                anObject(D);
                if (has(AllSymbols, key)) {
                    if (!D.enumerable) {
                        if (!has(it, HIDDEN))
                            dP(it, HIDDEN, createDesc(1, {}));
                        it[HIDDEN][key] = true;
                    } else {
                        if (has(it, HIDDEN) && it[HIDDEN][key])
                            it[HIDDEN][key] = false;
                        D = _create(D, { enumerable: createDesc(0, false) });
                    }
                    return setSymbolDesc(it, key, D);
                }
                return dP(it, key, D);
            };
            var $defineProperties = function defineProperties(it, P) {
                anObject(it);
                var keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length, key;
                while (l > i)
                    $defineProperty(it, key = keys[i++], P[key]);
                return it;
            };
            var $create = function create(it, P) {
                return P === undefined ? _create(it) : $defineProperties(_create(it), P);
            };
            var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                var E = isEnum.call(this, key = toPrimitive(key, true));
                if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
                    return false;
                return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
            };
            var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                it = toIObject(it);
                key = toPrimitive(key, true);
                if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
                    return;
                var D = gOPD(it, key);
                if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
                    D.enumerable = true;
                return D;
            };
            var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                var names = gOPN(toIObject(it)), result = [], i = 0, key;
                while (names.length > i) {
                    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
                        result.push(key);
                }
                return result;
            };
            var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                var IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0, key;
                while (names.length > i) {
                    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
                        result.push(AllSymbols[key]);
                }
                return result;
            };
            if (!USE_NATIVE) {
                $Symbol = function Symbol() {
                    if (this instanceof $Symbol)
                        throw TypeError('Symbol is not a constructor!');
                    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                    var $set = function (value) {
                        if (this === ObjectProto)
                            $set.call(OPSymbols, value);
                        if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                            this[HIDDEN][tag] = false;
                        setSymbolDesc(this, tag, createDesc(1, value));
                    };
                    if (DESCRIPTORS && setter)
                        setSymbolDesc(ObjectProto, tag, {
                            configurable: true,
                            set: $set
                        });
                    return wrap(tag);
                };
                redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                    return this._k;
                });
                $GOPD.f = $getOwnPropertyDescriptor;
                $DP.f = $defineProperty;
                __webpack_require__(48).f = gOPNExt.f = $getOwnPropertyNames;
                __webpack_require__(42).f = $propertyIsEnumerable;
                __webpack_require__(41).f = $getOwnPropertySymbols;
                if (DESCRIPTORS && !__webpack_require__(26)) {
                    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                }
                wksExt.f = function (name) {
                    return wrap(wks(name));
                };
            }
            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
            for (var symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;)
                wks(symbols[i++]);
            for (var symbols = $keys(wks.store), i = 0; symbols.length > i;)
                wksDefine(symbols[i++]);
            $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
                'for': function (key) {
                    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                },
                keyFor: function keyFor(key) {
                    if (isSymbol(key))
                        return keyOf(SymbolRegistry, key);
                    throw TypeError(key + ' is not a symbol!');
                },
                useSetter: function () {
                    setter = true;
                },
                useSimple: function () {
                    setter = false;
                }
            });
            $export($export.S + $export.F * !USE_NATIVE, 'Object', {
                create: $create,
                defineProperty: $defineProperty,
                defineProperties: $defineProperties,
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                getOwnPropertyNames: $getOwnPropertyNames,
                getOwnPropertySymbols: $getOwnPropertySymbols
            });
            $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
                var S = $Symbol();
                return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
            })), 'JSON', {
                stringify: function stringify(it) {
                    if (it === undefined || isSymbol(it))
                        return;
                    var args = [it], i = 1, replacer, $replacer;
                    while (arguments.length > i)
                        args.push(arguments[i++]);
                    replacer = args[1];
                    if (typeof replacer == 'function')
                        $replacer = replacer;
                    if ($replacer || !isArray(replacer))
                        replacer = function (key, value) {
                            if ($replacer)
                                value = $replacer.call(this, key, value);
                            if (!isSymbol(value))
                                return value;
                        };
                    args[1] = replacer;
                    return _stringify.apply($JSON, args);
                }
            });
            $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
            setToStringTag($Symbol, 'Symbol');
            setToStringTag(Math, 'Math', true);
            setToStringTag(global.JSON, 'JSON', true);
        },
        function (module, exports) {
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
            if (typeof __g == 'number')
                __g = global;
        },
        function (module, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function (it, key) {
                return hasOwnProperty.call(it, key);
            };
        },
        function (module, exports, __webpack_require__) {
            module.exports = !__webpack_require__(5)(function () {
                return Object.defineProperty({}, 'a', {
                    get: function () {
                        return 7;
                    }
                }).a != 7;
            });
        },
        function (module, exports) {
            module.exports = function (exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), core = __webpack_require__(7), hide = __webpack_require__(8), redefine = __webpack_require__(16), ctx = __webpack_require__(18), PROTOTYPE = 'prototype';
            var $export = function (type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE], exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}), key, own, out, exp;
                if (IS_GLOBAL)
                    source = name;
                for (key in source) {
                    own = !IS_FORCED && target && target[key] !== undefined;
                    out = (own ? target : source)[key];
                    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    if (target)
                        redefine(target, key, out, type & $export.U);
                    if (exports[key] != out)
                        hide(exports, key, exp);
                    if (IS_PROTO && expProto[key] != out)
                        expProto[key] = out;
                }
            };
            global.core = core;
            $export.F = 1;
            $export.G = 2;
            $export.S = 4;
            $export.P = 8;
            $export.B = 16;
            $export.W = 32;
            $export.U = 64;
            $export.R = 128;
            module.exports = $export;
        },
        function (module, exports) {
            var core = module.exports = { version: '2.4.0' };
            if (typeof __e == 'number')
                __e = core;
        },
        function (module, exports, __webpack_require__) {
            var dP = __webpack_require__(9), createDesc = __webpack_require__(15);
            module.exports = __webpack_require__(4) ? function (object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function (object, key, value) {
                object[key] = value;
                return object;
            };
        },
        function (module, exports, __webpack_require__) {
            var anObject = __webpack_require__(10), IE8_DOM_DEFINE = __webpack_require__(12), toPrimitive = __webpack_require__(14), dP = Object.defineProperty;
            exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                    try {
                        return dP(O, P, Attributes);
                    } catch (e) {
                    }
                if ('get' in Attributes || 'set' in Attributes)
                    throw TypeError('Accessors not supported!');
                if ('value' in Attributes)
                    O[P] = Attributes.value;
                return O;
            };
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11);
            module.exports = function (it) {
                if (!isObject(it))
                    throw TypeError(it + ' is not an object!');
                return it;
            };
        },
        function (module, exports) {
            module.exports = function (it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };
        },
        function (module, exports, __webpack_require__) {
            module.exports = !__webpack_require__(4) && !__webpack_require__(5)(function () {
                return Object.defineProperty(__webpack_require__(13)('div'), 'a', {
                    get: function () {
                        return 7;
                    }
                }).a != 7;
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), document = __webpack_require__(2).document, is = isObject(document) && isObject(document.createElement);
            module.exports = function (it) {
                return is ? document.createElement(it) : {};
            };
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11);
            module.exports = function (it, S) {
                if (!isObject(it))
                    return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))
                    return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))
                    return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))
                    return val;
                throw TypeError('Can\'t convert object to primitive value');
            };
        },
        function (module, exports) {
            module.exports = function (bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), hide = __webpack_require__(8), has = __webpack_require__(3), SRC = __webpack_require__(17)('src'), TO_STRING = 'toString', $toString = Function[TO_STRING], TPL = ('' + $toString).split(TO_STRING);
            __webpack_require__(7).inspectSource = function (it) {
                return $toString.call(it);
            };
            (module.exports = function (O, key, val, safe) {
                var isFunction = typeof val == 'function';
                if (isFunction)
                    has(val, 'name') || hide(val, 'name', key);
                if (O[key] === val)
                    return;
                if (isFunction)
                    has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                if (O === global) {
                    O[key] = val;
                } else {
                    if (!safe) {
                        delete O[key];
                        hide(O, key, val);
                    } else {
                        if (O[key])
                            O[key] = val;
                        else
                            hide(O, key, val);
                    }
                }
            })(Function.prototype, TO_STRING, function toString() {
                return typeof this == 'function' && this[SRC] || $toString.call(this);
            });
        },
        function (module, exports) {
            var id = 0, px = Math.random();
            module.exports = function (key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };
        },
        function (module, exports, __webpack_require__) {
            var aFunction = __webpack_require__(19);
            module.exports = function (fn, that, length) {
                aFunction(fn);
                if (that === undefined)
                    return fn;
                switch (length) {
                case 1:
                    return function (a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function (a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function (a, b, c) {
                        return fn.call(that, a, b, c);
                    };
                }
                return function () {
                    return fn.apply(that, arguments);
                };
            };
        },
        function (module, exports) {
            module.exports = function (it) {
                if (typeof it != 'function')
                    throw TypeError(it + ' is not a function!');
                return it;
            };
        },
        function (module, exports, __webpack_require__) {
            var META = __webpack_require__(17)('meta'), isObject = __webpack_require__(11), has = __webpack_require__(3), setDesc = __webpack_require__(9).f, id = 0;
            var isExtensible = Object.isExtensible || function () {
                return true;
            };
            var FREEZE = !__webpack_require__(5)(function () {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function (it) {
                setDesc(it, META, {
                    value: {
                        i: 'O' + ++id,
                        w: {}
                    }
                });
            };
            var fastKey = function (it, create) {
                if (!isObject(it))
                    return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!has(it, META)) {
                    if (!isExtensible(it))
                        return 'F';
                    if (!create)
                        return 'E';
                    setMeta(it);
                }
                return it[META].i;
            };
            var getWeak = function (it, create) {
                if (!has(it, META)) {
                    if (!isExtensible(it))
                        return true;
                    if (!create)
                        return false;
                    setMeta(it);
                }
                return it[META].w;
            };
            var onFreeze = function (it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
                    setMeta(it);
                return it;
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            };
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), SHARED = '__core-js_shared__', store = global[SHARED] || (global[SHARED] = {});
            module.exports = function (key) {
                return store[key] || (store[key] = {});
            };
        },
        function (module, exports, __webpack_require__) {
            var def = __webpack_require__(9).f, has = __webpack_require__(3), TAG = __webpack_require__(23)('toStringTag');
            module.exports = function (it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG))
                    def(it, TAG, {
                        configurable: true,
                        value: tag
                    });
            };
        },
        function (module, exports, __webpack_require__) {
            var store = __webpack_require__(21)('wks'), uid = __webpack_require__(17), Symbol = __webpack_require__(2).Symbol, USE_SYMBOL = typeof Symbol == 'function';
            var $exports = module.exports = function (name) {
                return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            };
            $exports.store = store;
        },
        function (module, exports, __webpack_require__) {
            exports.f = __webpack_require__(23);
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), core = __webpack_require__(7), LIBRARY = __webpack_require__(26), wksExt = __webpack_require__(24), defineProperty = __webpack_require__(9).f;
            module.exports = function (name) {
                var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                if (name.charAt(0) != '_' && !(name in $Symbol))
                    defineProperty($Symbol, name, { value: wksExt.f(name) });
            };
        },
        function (module, exports) {
            module.exports = false;
        },
        function (module, exports, __webpack_require__) {
            var getKeys = __webpack_require__(28), toIObject = __webpack_require__(30);
            module.exports = function (object, el) {
                var O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0, key;
                while (length > index)
                    if (O[key = keys[index++]] === el)
                        return key;
            };
        },
        function (module, exports, __webpack_require__) {
            var $keys = __webpack_require__(29), enumBugKeys = __webpack_require__(39);
            module.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };
        },
        function (module, exports, __webpack_require__) {
            var has = __webpack_require__(3), toIObject = __webpack_require__(30), arrayIndexOf = __webpack_require__(34)(false), IE_PROTO = __webpack_require__(38)('IE_PROTO');
            module.exports = function (object, names) {
                var O = toIObject(object), i = 0, result = [], key;
                for (key in O)
                    if (key != IE_PROTO)
                        has(O, key) && result.push(key);
                while (names.length > i)
                    if (has(O, key = names[i++])) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                return result;
            };
        },
        function (module, exports, __webpack_require__) {
            var IObject = __webpack_require__(31), defined = __webpack_require__(33);
            module.exports = function (it) {
                return IObject(defined(it));
            };
        },
        function (module, exports, __webpack_require__) {
            var cof = __webpack_require__(32);
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };
        },
        function (module, exports) {
            var toString = {}.toString;
            module.exports = function (it) {
                return toString.call(it).slice(8, -1);
            };
        },
        function (module, exports) {
            module.exports = function (it) {
                if (it == undefined)
                    throw TypeError('Can\'t call method on  ' + it);
                return it;
            };
        },
        function (module, exports, __webpack_require__) {
            var toIObject = __webpack_require__(30), toLength = __webpack_require__(35), toIndex = __webpack_require__(37);
            module.exports = function (IS_INCLUDES) {
                return function ($this, el, fromIndex) {
                    var O = toIObject($this), length = toLength(O.length), index = toIndex(fromIndex, length), value;
                    if (IS_INCLUDES && el != el)
                        while (length > index) {
                            value = O[index++];
                            if (value != value)
                                return true;
                        }
                    else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el)
                                    return IS_INCLUDES || index || 0;
                            }
                    return !IS_INCLUDES && -1;
                };
            };
        },
        function (module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(36), min = Math.min;
            module.exports = function (it) {
                return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
            };
        },
        function (module, exports) {
            var ceil = Math.ceil, floor = Math.floor;
            module.exports = function (it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };
        },
        function (module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(36), max = Math.max, min = Math.min;
            module.exports = function (index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };
        },
        function (module, exports, __webpack_require__) {
            var shared = __webpack_require__(21)('keys'), uid = __webpack_require__(17);
            module.exports = function (key) {
                return shared[key] || (shared[key] = uid(key));
            };
        },
        function (module, exports) {
            module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
        },
        function (module, exports, __webpack_require__) {
            var getKeys = __webpack_require__(28), gOPS = __webpack_require__(41), pIE = __webpack_require__(42);
            module.exports = function (it) {
                var result = getKeys(it), getSymbols = gOPS.f;
                if (getSymbols) {
                    var symbols = getSymbols(it), isEnum = pIE.f, i = 0, key;
                    while (symbols.length > i)
                        if (isEnum.call(it, key = symbols[i++]))
                            result.push(key);
                }
                return result;
            };
        },
        function (module, exports) {
            exports.f = Object.getOwnPropertySymbols;
        },
        function (module, exports) {
            exports.f = {}.propertyIsEnumerable;
        },
        function (module, exports, __webpack_require__) {
            var cof = __webpack_require__(32);
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == 'Array';
            };
        },
        function (module, exports, __webpack_require__) {
            var anObject = __webpack_require__(10), dPs = __webpack_require__(45), enumBugKeys = __webpack_require__(39), IE_PROTO = __webpack_require__(38)('IE_PROTO'), Empty = function () {
                }, PROTOTYPE = 'prototype';
            var createDict = function () {
                var iframe = __webpack_require__(13)('iframe'), i = enumBugKeys.length, lt = '<', gt = '>', iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__(46).appendChild(iframe);
                iframe.src = 'javascript:';
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--)
                    delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    result[IE_PROTO] = O;
                } else
                    result = createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };
        },
        function (module, exports, __webpack_require__) {
            var dP = __webpack_require__(9), anObject = __webpack_require__(10), getKeys = __webpack_require__(28);
            module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties), length = keys.length, i = 0, P;
                while (length > i)
                    dP.f(O, P = keys[i++], Properties[P]);
                return O;
            };
        },
        function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(2).document && document.documentElement;
        },
        function (module, exports, __webpack_require__) {
            var toIObject = __webpack_require__(30), gOPN = __webpack_require__(48).f, toString = {}.toString;
            var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            var getWindowNames = function (it) {
                try {
                    return gOPN(it);
                } catch (e) {
                    return windowNames.slice();
                }
            };
            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
            };
        },
        function (module, exports, __webpack_require__) {
            var $keys = __webpack_require__(29), hiddenKeys = __webpack_require__(39).concat('length', 'prototype');
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return $keys(O, hiddenKeys);
            };
        },
        function (module, exports, __webpack_require__) {
            var pIE = __webpack_require__(42), createDesc = __webpack_require__(15), toIObject = __webpack_require__(30), toPrimitive = __webpack_require__(14), has = __webpack_require__(3), IE8_DOM_DEFINE = __webpack_require__(12), gOPD = Object.getOwnPropertyDescriptor;
            exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                    try {
                        return gOPD(O, P);
                    } catch (e) {
                    }
                if (has(O, P))
                    return createDesc(!pIE.f.call(O, P), O[P]);
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S + $export.F * !__webpack_require__(4), 'Object', { defineProperty: __webpack_require__(9).f });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S + $export.F * !__webpack_require__(4), 'Object', { defineProperties: __webpack_require__(45) });
        },
        function (module, exports, __webpack_require__) {
            var toIObject = __webpack_require__(30), $getOwnPropertyDescriptor = __webpack_require__(49).f;
            __webpack_require__(53)('getOwnPropertyDescriptor', function () {
                return function getOwnPropertyDescriptor(it, key) {
                    return $getOwnPropertyDescriptor(toIObject(it), key);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), core = __webpack_require__(7), fails = __webpack_require__(5);
            module.exports = function (KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function () {
                    fn(1);
                }), 'Object', exp);
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Object', { create: __webpack_require__(44) });
        },
        function (module, exports, __webpack_require__) {
            var toObject = __webpack_require__(56), $getPrototypeOf = __webpack_require__(57);
            __webpack_require__(53)('getPrototypeOf', function () {
                return function getPrototypeOf(it) {
                    return $getPrototypeOf(toObject(it));
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var defined = __webpack_require__(33);
            module.exports = function (it) {
                return Object(defined(it));
            };
        },
        function (module, exports, __webpack_require__) {
            var has = __webpack_require__(3), toObject = __webpack_require__(56), IE_PROTO = __webpack_require__(38)('IE_PROTO'), ObjectProto = Object.prototype;
            module.exports = Object.getPrototypeOf || function (O) {
                O = toObject(O);
                if (has(O, IE_PROTO))
                    return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                    return O.constructor.prototype;
                }
                return O instanceof Object ? ObjectProto : null;
            };
        },
        function (module, exports, __webpack_require__) {
            var toObject = __webpack_require__(56), $keys = __webpack_require__(28);
            __webpack_require__(53)('keys', function () {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(53)('getOwnPropertyNames', function () {
                return __webpack_require__(47).f;
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), meta = __webpack_require__(20).onFreeze;
            __webpack_require__(53)('freeze', function ($freeze) {
                return function freeze(it) {
                    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), meta = __webpack_require__(20).onFreeze;
            __webpack_require__(53)('seal', function ($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(meta(it)) : it;
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), meta = __webpack_require__(20).onFreeze;
            __webpack_require__(53)('preventExtensions', function ($preventExtensions) {
                return function preventExtensions(it) {
                    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11);
            __webpack_require__(53)('isFrozen', function ($isFrozen) {
                return function isFrozen(it) {
                    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11);
            __webpack_require__(53)('isSealed', function ($isSealed) {
                return function isSealed(it) {
                    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11);
            __webpack_require__(53)('isExtensible', function ($isExtensible) {
                return function isExtensible(it) {
                    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S + $export.F, 'Object', { assign: __webpack_require__(67) });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var getKeys = __webpack_require__(28), gOPS = __webpack_require__(41), pIE = __webpack_require__(42), toObject = __webpack_require__(56), IObject = __webpack_require__(31), $assign = Object.assign;
            module.exports = !$assign || __webpack_require__(5)(function () {
                var A = {}, B = {}, S = Symbol(), K = 'abcdefghijklmnopqrst';
                A[S] = 7;
                K.split('').forEach(function (k) {
                    B[k] = k;
                });
                return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
            }) ? function assign(target, source) {
                var T = toObject(target), aLen = arguments.length, index = 1, getSymbols = gOPS.f, isEnum = pIE.f;
                while (aLen > index) {
                    var S = IObject(arguments[index++]), keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S), length = keys.length, j = 0, key;
                    while (length > j)
                        if (isEnum.call(S, key = keys[j++]))
                            T[key] = S[key];
                }
                return T;
            } : $assign;
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Object', { is: __webpack_require__(69) });
        },
        function (module, exports) {
            module.exports = Object.is || function is(x, y) {
                return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Object', { setPrototypeOf: __webpack_require__(71).set });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), anObject = __webpack_require__(10);
            var check = function (O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null)
                    throw TypeError(proto + ': can\'t set as prototype!');
            };
            module.exports = {
                set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
                    try {
                        set = __webpack_require__(18)(Function.call, __webpack_require__(49).f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) {
                        buggy = true;
                    }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy)
                            O.__proto__ = proto;
                        else
                            set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
                check: check
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var classof = __webpack_require__(73), test = {};
            test[__webpack_require__(23)('toStringTag')] = 'z';
            if (test + '' != '[object z]') {
                __webpack_require__(16)(Object.prototype, 'toString', function toString() {
                    return '[object ' + classof(this) + ']';
                }, true);
            }
        },
        function (module, exports, __webpack_require__) {
            var cof = __webpack_require__(32), TAG = __webpack_require__(23)('toStringTag'), ARG = cof(function () {
                    return arguments;
                }()) == 'Arguments';
            var tryGet = function (it, key) {
                try {
                    return it[key];
                } catch (e) {
                }
            };
            module.exports = function (it) {
                var O, T, B;
                return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.P, 'Function', { bind: __webpack_require__(75) });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var aFunction = __webpack_require__(19), isObject = __webpack_require__(11), invoke = __webpack_require__(76), arraySlice = [].slice, factories = {};
            var construct = function (F, len, args) {
                if (!(len in factories)) {
                    for (var n = [], i = 0; i < len; i++)
                        n[i] = 'a[' + i + ']';
                    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
                }
                return factories[len](F, args);
            };
            module.exports = Function.bind || function bind(that) {
                var fn = aFunction(this), partArgs = arraySlice.call(arguments, 1);
                var bound = function () {
                    var args = partArgs.concat(arraySlice.call(arguments));
                    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
                };
                if (isObject(fn.prototype))
                    bound.prototype = fn.prototype;
                return bound;
            };
        },
        function (module, exports) {
            module.exports = function (fn, args, that) {
                var un = that === undefined;
                switch (args.length) {
                case 0:
                    return un ? fn() : fn.call(that);
                case 1:
                    return un ? fn(args[0]) : fn.call(that, args[0]);
                case 2:
                    return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                case 3:
                    return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                case 4:
                    return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                }
                return fn.apply(that, args);
            };
        },
        function (module, exports, __webpack_require__) {
            var dP = __webpack_require__(9).f, createDesc = __webpack_require__(15), has = __webpack_require__(3), FProto = Function.prototype, nameRE = /^\s*function ([^ (]*)/, NAME = 'name';
            var isExtensible = Object.isExtensible || function () {
                return true;
            };
            NAME in FProto || __webpack_require__(4) && dP(FProto, NAME, {
                configurable: true,
                get: function () {
                    try {
                        var that = this, name = ('' + that).match(nameRE)[1];
                        has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
                        return name;
                    } catch (e) {
                        return '';
                    }
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var isObject = __webpack_require__(11), getPrototypeOf = __webpack_require__(57), HAS_INSTANCE = __webpack_require__(23)('hasInstance'), FunctionProto = Function.prototype;
            if (!(HAS_INSTANCE in FunctionProto))
                __webpack_require__(9).f(FunctionProto, HAS_INSTANCE, {
                    value: function (O) {
                        if (typeof this != 'function' || !isObject(O))
                            return false;
                        if (!isObject(this.prototype))
                            return O instanceof this;
                        while (O = getPrototypeOf(O))
                            if (this.prototype === O)
                                return true;
                        return false;
                    }
                });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(2), has = __webpack_require__(3), cof = __webpack_require__(32), inheritIfRequired = __webpack_require__(80), toPrimitive = __webpack_require__(14), fails = __webpack_require__(5), gOPN = __webpack_require__(48).f, gOPD = __webpack_require__(49).f, dP = __webpack_require__(9).f, $trim = __webpack_require__(81).trim, NUMBER = 'Number', $Number = global[NUMBER], Base = $Number, proto = $Number.prototype, BROKEN_COF = cof(__webpack_require__(44)(proto)) == NUMBER, TRIM = 'trim' in String.prototype;
            var toNumber = function (argument) {
                var it = toPrimitive(argument, false);
                if (typeof it == 'string' && it.length > 2) {
                    it = TRIM ? it.trim() : $trim(it, 3);
                    var first = it.charCodeAt(0), third, radix, maxCode;
                    if (first === 43 || first === 45) {
                        third = it.charCodeAt(2);
                        if (third === 88 || third === 120)
                            return NaN;
                    } else if (first === 48) {
                        switch (it.charCodeAt(1)) {
                        case 66:
                        case 98:
                            radix = 2;
                            maxCode = 49;
                            break;
                        case 79:
                        case 111:
                            radix = 8;
                            maxCode = 55;
                            break;
                        default:
                            return +it;
                        }
                        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                            code = digits.charCodeAt(i);
                            if (code < 48 || code > maxCode)
                                return NaN;
                        }
                        return parseInt(digits, radix);
                    }
                }
                return +it;
            };
            if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
                $Number = function Number(value) {
                    var it = arguments.length < 1 ? 0 : value, that = this;
                    return that instanceof $Number && (BROKEN_COF ? fails(function () {
                        proto.valueOf.call(that);
                    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
                };
                for (var keys = __webpack_require__(4) ? gOPN(Base) : ('MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + 'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
                    if (has(Base, key = keys[j]) && !has($Number, key)) {
                        dP($Number, key, gOPD(Base, key));
                    }
                }
                $Number.prototype = proto;
                proto.constructor = $Number;
                __webpack_require__(16)(global, NUMBER, $Number);
            }
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), setPrototypeOf = __webpack_require__(71).set;
            module.exports = function (that, target, C) {
                var P, S = target.constructor;
                if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                    setPrototypeOf(that, P);
                }
                return that;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), defined = __webpack_require__(33), fails = __webpack_require__(5), spaces = __webpack_require__(82), space = '[' + spaces + ']', non = '\u200B\x85', ltrim = RegExp('^' + space + space + '*'), rtrim = RegExp(space + space + '*$');
            var exporter = function (KEY, exec, ALIAS) {
                var exp = {};
                var FORCE = fails(function () {
                    return !!spaces[KEY]() || non[KEY]() != non;
                });
                var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
                if (ALIAS)
                    exp[ALIAS] = fn;
                $export($export.P + $export.F * FORCE, 'String', exp);
            };
            var trim = exporter.trim = function (string, TYPE) {
                string = String(defined(string));
                if (TYPE & 1)
                    string = string.replace(ltrim, '');
                if (TYPE & 2)
                    string = string.replace(rtrim, '');
                return string;
            };
            module.exports = exporter;
        },
        function (module, exports) {
            module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toInteger = __webpack_require__(36), aNumberValue = __webpack_require__(84), repeat = __webpack_require__(85), $toFixed = 1..toFixed, floor = Math.floor, data = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], ERROR = 'Number.toFixed: incorrect invocation!', ZERO = '0';
            var multiply = function (n, c) {
                var i = -1, c2 = c;
                while (++i < 6) {
                    c2 += n * data[i];
                    data[i] = c2 % 10000000;
                    c2 = floor(c2 / 10000000);
                }
            };
            var divide = function (n) {
                var i = 6, c = 0;
                while (--i >= 0) {
                    c += data[i];
                    data[i] = floor(c / n);
                    c = c % n * 10000000;
                }
            };
            var numToString = function () {
                var i = 6, s = '';
                while (--i >= 0) {
                    if (s !== '' || i === 0 || data[i] !== 0) {
                        var t = String(data[i]);
                        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
                    }
                }
                return s;
            };
            var pow = function (x, n, acc) {
                return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
            };
            var log = function (x) {
                var n = 0, x2 = x;
                while (x2 >= 4096) {
                    n += 12;
                    x2 /= 4096;
                }
                while (x2 >= 2) {
                    n += 1;
                    x2 /= 2;
                }
                return n;
            };
            $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000100..toFixed(0) !== '1000000000000000128') || !__webpack_require__(5)(function () {
                $toFixed.call({});
            })), 'Number', {
                toFixed: function toFixed(fractionDigits) {
                    var x = aNumberValue(this, ERROR), f = toInteger(fractionDigits), s = '', m = ZERO, e, z, j, k;
                    if (f < 0 || f > 20)
                        throw RangeError(ERROR);
                    if (x != x)
                        return 'NaN';
                    if (x <= -1e+21 || x >= 1e+21)
                        return String(x);
                    if (x < 0) {
                        s = '-';
                        x = -x;
                    }
                    if (x > 1e-21) {
                        e = log(x * pow(2, 69, 1)) - 69;
                        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
                        z *= 4503599627370496;
                        e = 52 - e;
                        if (e > 0) {
                            multiply(0, z);
                            j = f;
                            while (j >= 7) {
                                multiply(10000000, 0);
                                j -= 7;
                            }
                            multiply(pow(10, j, 1), 0);
                            j = e - 1;
                            while (j >= 23) {
                                divide(1 << 23);
                                j -= 23;
                            }
                            divide(1 << j);
                            multiply(1, 1);
                            divide(2);
                            m = numToString();
                        } else {
                            multiply(0, z);
                            multiply(1 << -e, 0);
                            m = numToString() + repeat.call(ZERO, f);
                        }
                    }
                    if (f > 0) {
                        k = m.length;
                        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
                    } else {
                        m = s + m;
                    }
                    return m;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var cof = __webpack_require__(32);
            module.exports = function (it, msg) {
                if (typeof it != 'number' && cof(it) != 'Number')
                    throw TypeError(msg);
                return +it;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var toInteger = __webpack_require__(36), defined = __webpack_require__(33);
            module.exports = function repeat(count) {
                var str = String(defined(this)), res = '', n = toInteger(count);
                if (n < 0 || n == Infinity)
                    throw RangeError('Count can\'t be negative');
                for (; n > 0; (n >>>= 1) && (str += str))
                    if (n & 1)
                        res += str;
                return res;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $fails = __webpack_require__(5), aNumberValue = __webpack_require__(84), $toPrecision = 1..toPrecision;
            $export($export.P + $export.F * ($fails(function () {
                return $toPrecision.call(1, undefined) !== '1';
            }) || !$fails(function () {
                $toPrecision.call({});
            })), 'Number', {
                toPrecision: function toPrecision(precision) {
                    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
                    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), _isFinite = __webpack_require__(2).isFinite;
            $export($export.S, 'Number', {
                isFinite: function isFinite(it) {
                    return typeof it == 'number' && _isFinite(it);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Number', { isInteger: __webpack_require__(90) });
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), floor = Math.floor;
            module.exports = function isInteger(it) {
                return !isObject(it) && isFinite(it) && floor(it) === it;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Number', {
                isNaN: function isNaN(number) {
                    return number != number;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), isInteger = __webpack_require__(90), abs = Math.abs;
            $export($export.S, 'Number', {
                isSafeInteger: function isSafeInteger(number) {
                    return isInteger(number) && abs(number) <= 9007199254740991;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Number', { MIN_SAFE_INTEGER: -9007199254740991 });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $parseFloat = __webpack_require__(96);
            $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
        },
        function (module, exports, __webpack_require__) {
            var $parseFloat = __webpack_require__(2).parseFloat, $trim = __webpack_require__(81).trim;
            module.exports = 1 / $parseFloat(__webpack_require__(82) + '-0') !== -Infinity ? function parseFloat(str) {
                var string = $trim(String(str), 3), result = $parseFloat(string);
                return result === 0 && string.charAt(0) == '-' ? -0 : result;
            } : $parseFloat;
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $parseInt = __webpack_require__(98);
            $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
        },
        function (module, exports, __webpack_require__) {
            var $parseInt = __webpack_require__(2).parseInt, $trim = __webpack_require__(81).trim, ws = __webpack_require__(82), hex = /^[\-+]?0[xX]/;
            module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
                var string = $trim(String(str), 3);
                return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
            } : $parseInt;
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $parseInt = __webpack_require__(98);
            $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $parseFloat = __webpack_require__(96);
            $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), log1p = __webpack_require__(102), sqrt = Math.sqrt, $acosh = Math.acosh;
            $export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), 'Math', {
                acosh: function acosh(x) {
                    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
                }
            });
        },
        function (module, exports) {
            module.exports = Math.log1p || function log1p(x) {
                return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $asinh = Math.asinh;
            function asinh(x) {
                return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
            }
            $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $atanh = Math.atanh;
            $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
                atanh: function atanh(x) {
                    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), sign = __webpack_require__(106);
            $export($export.S, 'Math', {
                cbrt: function cbrt(x) {
                    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
                }
            });
        },
        function (module, exports) {
            module.exports = Math.sign || function sign(x) {
                return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                clz32: function clz32(x) {
                    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), exp = Math.exp;
            $export($export.S, 'Math', {
                cosh: function cosh(x) {
                    return (exp(x = +x) + exp(-x)) / 2;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $expm1 = __webpack_require__(110);
            $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
        },
        function (module, exports) {
            var $expm1 = Math.expm1;
            module.exports = !$expm1 || $expm1(10) > 22025.465794806718 || $expm1(10) < 22025.465794806718 || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
                return (x = +x) == 0 ? x : x > -0.000001 && x < 0.000001 ? x + x * x / 2 : Math.exp(x) - 1;
            } : $expm1;
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), sign = __webpack_require__(106), pow = Math.pow, EPSILON = pow(2, -52), EPSILON32 = pow(2, -23), MAX32 = pow(2, 127) * (2 - EPSILON32), MIN32 = pow(2, -126);
            var roundTiesToEven = function (n) {
                return n + 1 / EPSILON - 1 / EPSILON;
            };
            $export($export.S, 'Math', {
                fround: function fround(x) {
                    var $abs = Math.abs(x), $sign = sign(x), a, result;
                    if ($abs < MIN32)
                        return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
                    a = (1 + EPSILON32 / EPSILON) * $abs;
                    result = a - (a - $abs);
                    if (result > MAX32 || result != result)
                        return $sign * Infinity;
                    return $sign * result;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), abs = Math.abs;
            $export($export.S, 'Math', {
                hypot: function hypot(value1, value2) {
                    var sum = 0, i = 0, aLen = arguments.length, larg = 0, arg, div;
                    while (i < aLen) {
                        arg = abs(arguments[i++]);
                        if (larg < arg) {
                            div = larg / arg;
                            sum = sum * div * div + 1;
                            larg = arg;
                        } else if (arg > 0) {
                            div = arg / larg;
                            sum += div * div;
                        } else
                            sum += arg;
                    }
                    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $imul = Math.imul;
            $export($export.S + $export.F * __webpack_require__(5)(function () {
                return $imul(4294967295, 5) != -5 || $imul.length != 2;
            }), 'Math', {
                imul: function imul(x, y) {
                    var UINT16 = 65535, xn = +x, yn = +y, xl = UINT16 & xn, yl = UINT16 & yn;
                    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                log10: function log10(x) {
                    return Math.log(x) / Math.LN10;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', { log1p: __webpack_require__(102) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                log2: function log2(x) {
                    return Math.log(x) / Math.LN2;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', { sign: __webpack_require__(106) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), expm1 = __webpack_require__(110), exp = Math.exp;
            $export($export.S + $export.F * __webpack_require__(5)(function () {
                return !Math.sinh(-2e-17) != -2e-17;
            }), 'Math', {
                sinh: function sinh(x) {
                    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), expm1 = __webpack_require__(110), exp = Math.exp;
            $export($export.S, 'Math', {
                tanh: function tanh(x) {
                    var a = expm1(x = +x), b = expm1(-x);
                    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                trunc: function trunc(it) {
                    return (it > 0 ? Math.floor : Math.ceil)(it);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), toIndex = __webpack_require__(37), fromCharCode = String.fromCharCode, $fromCodePoint = String.fromCodePoint;
            $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
                fromCodePoint: function fromCodePoint(x) {
                    var res = [], aLen = arguments.length, i = 0, code;
                    while (aLen > i) {
                        code = +arguments[i++];
                        if (toIndex(code, 1114111) !== code)
                            throw RangeError(code + ' is not a valid code point');
                        res.push(code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
                    }
                    return res.join('');
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), toIObject = __webpack_require__(30), toLength = __webpack_require__(35);
            $export($export.S, 'String', {
                raw: function raw(callSite) {
                    var tpl = toIObject(callSite.raw), len = toLength(tpl.length), aLen = arguments.length, res = [], i = 0;
                    while (len > i) {
                        res.push(String(tpl[i++]));
                        if (i < aLen)
                            res.push(String(arguments[i]));
                    }
                    return res.join('');
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(81)('trim', function ($trim) {
                return function trim() {
                    return $trim(this, 3);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $at = __webpack_require__(125)(false);
            $export($export.P, 'String', {
                codePointAt: function codePointAt(pos) {
                    return $at(this, pos);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(36), defined = __webpack_require__(33);
            module.exports = function (TO_STRING) {
                return function (that, pos) {
                    var s = String(defined(that)), i = toInteger(pos), l = s.length, a, b;
                    if (i < 0 || i >= l)
                        return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
                };
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toLength = __webpack_require__(35), context = __webpack_require__(127), ENDS_WITH = 'endsWith', $endsWith = ''[ENDS_WITH];
            $export($export.P + $export.F * __webpack_require__(129)(ENDS_WITH), 'String', {
                endsWith: function endsWith(searchString) {
                    var that = context(this, searchString, ENDS_WITH), endPosition = arguments.length > 1 ? arguments[1] : undefined, len = toLength(that.length), end = endPosition === undefined ? len : Math.min(toLength(endPosition), len), search = String(searchString);
                    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var isRegExp = __webpack_require__(128), defined = __webpack_require__(33);
            module.exports = function (that, searchString, NAME) {
                if (isRegExp(searchString))
                    throw TypeError('String#' + NAME + ' doesn\'t accept regex!');
                return String(defined(that));
            };
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), cof = __webpack_require__(32), MATCH = __webpack_require__(23)('match');
            module.exports = function (it) {
                var isRegExp;
                return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
            };
        },
        function (module, exports, __webpack_require__) {
            var MATCH = __webpack_require__(23)('match');
            module.exports = function (KEY) {
                var re = /./;
                try {
                    '/./'[KEY](re);
                } catch (e) {
                    try {
                        re[MATCH] = false;
                        return !'/./'[KEY](re);
                    } catch (f) {
                    }
                }
                return true;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), context = __webpack_require__(127), INCLUDES = 'includes';
            $export($export.P + $export.F * __webpack_require__(129)(INCLUDES), 'String', {
                includes: function includes(searchString) {
                    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.P, 'String', { repeat: __webpack_require__(85) });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toLength = __webpack_require__(35), context = __webpack_require__(127), STARTS_WITH = 'startsWith', $startsWith = ''[STARTS_WITH];
            $export($export.P + $export.F * __webpack_require__(129)(STARTS_WITH), 'String', {
                startsWith: function startsWith(searchString) {
                    var that = context(this, searchString, STARTS_WITH), index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)), search = String(searchString);
                    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $at = __webpack_require__(125)(true);
            __webpack_require__(134)(String, 'String', function (iterated) {
                this._t = String(iterated);
                this._i = 0;
            }, function () {
                var O = this._t, index = this._i, point;
                if (index >= O.length)
                    return {
                        value: undefined,
                        done: true
                    };
                point = $at(O, index);
                this._i += point.length;
                return {
                    value: point,
                    done: false
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var LIBRARY = __webpack_require__(26), $export = __webpack_require__(6), redefine = __webpack_require__(16), hide = __webpack_require__(8), has = __webpack_require__(3), Iterators = __webpack_require__(135), $iterCreate = __webpack_require__(136), setToStringTag = __webpack_require__(22), getPrototypeOf = __webpack_require__(57), ITERATOR = __webpack_require__(23)('iterator'), BUGGY = !([].keys && 'next' in [].keys()), FF_ITERATOR = '@@iterator', KEYS = 'keys', VALUES = 'values';
            var returnThis = function () {
                return this;
            };
            module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function (kind) {
                    if (!BUGGY && kind in proto)
                        return proto[kind];
                    switch (kind) {
                    case KEYS:
                        return function keys() {
                            return new Constructor(this, kind);
                        };
                    case VALUES:
                        return function values() {
                            return new Constructor(this, kind);
                        };
                    }
                    return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator', DEF_VALUES = DEFAULT == VALUES, VALUES_BUG = false, proto = Base.prototype, $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined, $anyNative = NAME == 'Array' ? proto.entries || $native : $native, methods, key, IteratorPrototype;
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype) {
                        setToStringTag(IteratorPrototype, TAG, true);
                        if (!LIBRARY && !has(IteratorPrototype, ITERATOR))
                            hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                    hide(proto, ITERATOR, $default);
                }
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED)
                        for (key in methods) {
                            if (!(key in proto))
                                redefine(proto, key, methods[key]);
                        }
                    else
                        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };
        },
        function (module, exports) {
            module.exports = {};
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var create = __webpack_require__(44), descriptor = __webpack_require__(15), setToStringTag = __webpack_require__(22), IteratorPrototype = {};
            __webpack_require__(8)(IteratorPrototype, __webpack_require__(23)('iterator'), function () {
                return this;
            });
            module.exports = function (Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + ' Iterator');
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('anchor', function (createHTML) {
                return function anchor(name) {
                    return createHTML(this, 'a', 'name', name);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), fails = __webpack_require__(5), defined = __webpack_require__(33), quot = /"/g;
            var createHTML = function (string, tag, attribute, value) {
                var S = String(defined(string)), p1 = '<' + tag;
                if (attribute !== '')
                    p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
                return p1 + '>' + S + '</' + tag + '>';
            };
            module.exports = function (NAME, exec) {
                var O = {};
                O[NAME] = exec(createHTML);
                $export($export.P + $export.F * fails(function () {
                    var test = ''[NAME]('"');
                    return test !== test.toLowerCase() || test.split('"').length > 3;
                }), 'String', O);
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('big', function (createHTML) {
                return function big() {
                    return createHTML(this, 'big', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('blink', function (createHTML) {
                return function blink() {
                    return createHTML(this, 'blink', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('bold', function (createHTML) {
                return function bold() {
                    return createHTML(this, 'b', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('fixed', function (createHTML) {
                return function fixed() {
                    return createHTML(this, 'tt', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('fontcolor', function (createHTML) {
                return function fontcolor(color) {
                    return createHTML(this, 'font', 'color', color);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('fontsize', function (createHTML) {
                return function fontsize(size) {
                    return createHTML(this, 'font', 'size', size);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('italics', function (createHTML) {
                return function italics() {
                    return createHTML(this, 'i', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('link', function (createHTML) {
                return function link(url) {
                    return createHTML(this, 'a', 'href', url);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('small', function (createHTML) {
                return function small() {
                    return createHTML(this, 'small', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('strike', function (createHTML) {
                return function strike() {
                    return createHTML(this, 'strike', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('sub', function (createHTML) {
                return function sub() {
                    return createHTML(this, 'sub', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(138)('sup', function (createHTML) {
                return function sup() {
                    return createHTML(this, 'sup', '', '');
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Array', { isArray: __webpack_require__(43) });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var ctx = __webpack_require__(18), $export = __webpack_require__(6), toObject = __webpack_require__(56), call = __webpack_require__(153), isArrayIter = __webpack_require__(154), toLength = __webpack_require__(35), createProperty = __webpack_require__(155), getIterFn = __webpack_require__(156);
            $export($export.S + $export.F * !__webpack_require__(157)(function (iter) {
                Array.from(iter);
            }), 'Array', {
                from: function from(arrayLike) {
                    var O = toObject(arrayLike), C = typeof this == 'function' ? this : Array, aLen = arguments.length, mapfn = aLen > 1 ? arguments[1] : undefined, mapping = mapfn !== undefined, index = 0, iterFn = getIterFn(O), length, result, step, iterator;
                    if (mapping)
                        mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                            createProperty(result, index, mapping ? call(iterator, mapfn, [
                                step.value,
                                index
                            ], true) : step.value);
                        }
                    } else {
                        length = toLength(O.length);
                        for (result = new C(length); length > index; index++) {
                            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                        }
                    }
                    result.length = index;
                    return result;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var anObject = __webpack_require__(10);
            module.exports = function (iterator, fn, value, entries) {
                try {
                    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (e) {
                    var ret = iterator['return'];
                    if (ret !== undefined)
                        anObject(ret.call(iterator));
                    throw e;
                }
            };
        },
        function (module, exports, __webpack_require__) {
            var Iterators = __webpack_require__(135), ITERATOR = __webpack_require__(23)('iterator'), ArrayProto = Array.prototype;
            module.exports = function (it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $defineProperty = __webpack_require__(9), createDesc = __webpack_require__(15);
            module.exports = function (object, index, value) {
                if (index in object)
                    $defineProperty.f(object, index, createDesc(0, value));
                else
                    object[index] = value;
            };
        },
        function (module, exports, __webpack_require__) {
            var classof = __webpack_require__(73), ITERATOR = __webpack_require__(23)('iterator'), Iterators = __webpack_require__(135);
            module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
                if (it != undefined)
                    return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        },
        function (module, exports, __webpack_require__) {
            var ITERATOR = __webpack_require__(23)('iterator'), SAFE_CLOSING = false;
            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function () {
                    SAFE_CLOSING = true;
                };
                Array.from(riter, function () {
                    throw 2;
                });
            } catch (e) {
            }
            module.exports = function (exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING)
                    return false;
                var safe = false;
                try {
                    var arr = [7], iter = arr[ITERATOR]();
                    iter.next = function () {
                        return { done: safe = true };
                    };
                    arr[ITERATOR] = function () {
                        return iter;
                    };
                    exec(arr);
                } catch (e) {
                }
                return safe;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), createProperty = __webpack_require__(155);
            $export($export.S + $export.F * __webpack_require__(5)(function () {
                function F() {
                }
                return !(Array.of.call(F) instanceof F);
            }), 'Array', {
                of: function of() {
                    var index = 0, aLen = arguments.length, result = new (typeof this == 'function' ? this : Array)(aLen);
                    while (aLen > index)
                        createProperty(result, index, arguments[index++]);
                    result.length = aLen;
                    return result;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toIObject = __webpack_require__(30), arrayJoin = [].join;
            $export($export.P + $export.F * (__webpack_require__(31) != Object || !__webpack_require__(160)(arrayJoin)), 'Array', {
                join: function join(separator) {
                    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var fails = __webpack_require__(5);
            module.exports = function (method, arg) {
                return !!method && fails(function () {
                    arg ? method.call(null, function () {
                    }, 1) : method.call(null);
                });
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), html = __webpack_require__(46), cof = __webpack_require__(32), toIndex = __webpack_require__(37), toLength = __webpack_require__(35), arraySlice = [].slice;
            $export($export.P + $export.F * __webpack_require__(5)(function () {
                if (html)
                    arraySlice.call(html);
            }), 'Array', {
                slice: function slice(begin, end) {
                    var len = toLength(this.length), klass = cof(this);
                    end = end === undefined ? len : end;
                    if (klass == 'Array')
                        return arraySlice.call(this, begin, end);
                    var start = toIndex(begin, len), upTo = toIndex(end, len), size = toLength(upTo - start), cloned = Array(size), i = 0;
                    for (; i < size; i++)
                        cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
                    return cloned;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), aFunction = __webpack_require__(19), toObject = __webpack_require__(56), fails = __webpack_require__(5), $sort = [].sort, test = [
                    1,
                    2,
                    3
                ];
            $export($export.P + $export.F * (fails(function () {
                test.sort(undefined);
            }) || !fails(function () {
                test.sort(null);
            }) || !__webpack_require__(160)($sort)), 'Array', {
                sort: function sort(comparefn) {
                    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $forEach = __webpack_require__(164)(0), STRICT = __webpack_require__(160)([].forEach, true);
            $export($export.P + $export.F * !STRICT, 'Array', {
                forEach: function forEach(callbackfn) {
                    return $forEach(this, callbackfn, arguments[1]);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var ctx = __webpack_require__(18), IObject = __webpack_require__(31), toObject = __webpack_require__(56), toLength = __webpack_require__(35), asc = __webpack_require__(165);
            module.exports = function (TYPE, $create) {
                var IS_MAP = TYPE == 1, IS_FILTER = TYPE == 2, IS_SOME = TYPE == 3, IS_EVERY = TYPE == 4, IS_FIND_INDEX = TYPE == 6, NO_HOLES = TYPE == 5 || IS_FIND_INDEX, create = $create || asc;
                return function ($this, callbackfn, that) {
                    var O = toObject($this), self = IObject(O), f = ctx(callbackfn, that, 3), length = toLength(self.length), index = 0, result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined, val, res;
                    for (; length > index; index++)
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP)
                                    result[index] = res;
                                else if (res)
                                    switch (TYPE) {
                                    case 3:
                                        return true;
                                    case 5:
                                        return val;
                                    case 6:
                                        return index;
                                    case 2:
                                        result.push(val);
                                    }
                                else if (IS_EVERY)
                                    return false;
                            }
                        }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
                };
            };
        },
        function (module, exports, __webpack_require__) {
            var speciesConstructor = __webpack_require__(166);
            module.exports = function (original, length) {
                return new (speciesConstructor(original))(length);
            };
        },
        function (module, exports, __webpack_require__) {
            var isObject = __webpack_require__(11), isArray = __webpack_require__(43), SPECIES = __webpack_require__(23)('species');
            module.exports = function (original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
                        C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null)
                            C = undefined;
                    }
                }
                return C === undefined ? Array : C;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $map = __webpack_require__(164)(1);
            $export($export.P + $export.F * !__webpack_require__(160)([].map, true), 'Array', {
                map: function map(callbackfn) {
                    return $map(this, callbackfn, arguments[1]);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $filter = __webpack_require__(164)(2);
            $export($export.P + $export.F * !__webpack_require__(160)([].filter, true), 'Array', {
                filter: function filter(callbackfn) {
                    return $filter(this, callbackfn, arguments[1]);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $some = __webpack_require__(164)(3);
            $export($export.P + $export.F * !__webpack_require__(160)([].some, true), 'Array', {
                some: function some(callbackfn) {
                    return $some(this, callbackfn, arguments[1]);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $every = __webpack_require__(164)(4);
            $export($export.P + $export.F * !__webpack_require__(160)([].every, true), 'Array', {
                every: function every(callbackfn) {
                    return $every(this, callbackfn, arguments[1]);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $reduce = __webpack_require__(172);
            $export($export.P + $export.F * !__webpack_require__(160)([].reduce, true), 'Array', {
                reduce: function reduce(callbackfn) {
                    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var aFunction = __webpack_require__(19), toObject = __webpack_require__(56), IObject = __webpack_require__(31), toLength = __webpack_require__(35);
            module.exports = function (that, callbackfn, aLen, memo, isRight) {
                aFunction(callbackfn);
                var O = toObject(that), self = IObject(O), length = toLength(O.length), index = isRight ? length - 1 : 0, i = isRight ? -1 : 1;
                if (aLen < 2)
                    for (;;) {
                        if (index in self) {
                            memo = self[index];
                            index += i;
                            break;
                        }
                        index += i;
                        if (isRight ? index < 0 : length <= index) {
                            throw TypeError('Reduce of empty array with no initial value');
                        }
                    }
                for (; isRight ? index >= 0 : length > index; index += i)
                    if (index in self) {
                        memo = callbackfn(memo, self[index], index, O);
                    }
                return memo;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $reduce = __webpack_require__(172);
            $export($export.P + $export.F * !__webpack_require__(160)([].reduceRight, true), 'Array', {
                reduceRight: function reduceRight(callbackfn) {
                    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $indexOf = __webpack_require__(34)(false), $native = [].indexOf, NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
            $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(160)($native)), 'Array', {
                indexOf: function indexOf(searchElement) {
                    return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toIObject = __webpack_require__(30), toInteger = __webpack_require__(36), toLength = __webpack_require__(35), $native = [].lastIndexOf, NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
            $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(160)($native)), 'Array', {
                lastIndexOf: function lastIndexOf(searchElement) {
                    if (NEGATIVE_ZERO)
                        return $native.apply(this, arguments) || 0;
                    var O = toIObject(this), length = toLength(O.length), index = length - 1;
                    if (arguments.length > 1)
                        index = Math.min(index, toInteger(arguments[1]));
                    if (index < 0)
                        index = length + index;
                    for (; index >= 0; index--)
                        if (index in O)
                            if (O[index] === searchElement)
                                return index || 0;
                    return -1;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.P, 'Array', { copyWithin: __webpack_require__(177) });
            __webpack_require__(178)('copyWithin');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var toObject = __webpack_require__(56), toIndex = __webpack_require__(37), toLength = __webpack_require__(35);
            module.exports = [].copyWithin || function copyWithin(target, start) {
                var O = toObject(this), len = toLength(O.length), to = toIndex(target, len), from = toIndex(start, len), end = arguments.length > 2 ? arguments[2] : undefined, count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to), inc = 1;
                if (from < to && to < from + count) {
                    inc = -1;
                    from += count - 1;
                    to += count - 1;
                }
                while (count-- > 0) {
                    if (from in O)
                        O[to] = O[from];
                    else
                        delete O[to];
                    to += inc;
                    from += inc;
                }
                return O;
            };
        },
        function (module, exports, __webpack_require__) {
            var UNSCOPABLES = __webpack_require__(23)('unscopables'), ArrayProto = Array.prototype;
            if (ArrayProto[UNSCOPABLES] == undefined)
                __webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
            module.exports = function (key) {
                ArrayProto[UNSCOPABLES][key] = true;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.P, 'Array', { fill: __webpack_require__(180) });
            __webpack_require__(178)('fill');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var toObject = __webpack_require__(56), toIndex = __webpack_require__(37), toLength = __webpack_require__(35);
            module.exports = function fill(value) {
                var O = toObject(this), length = toLength(O.length), aLen = arguments.length, index = toIndex(aLen > 1 ? arguments[1] : undefined, length), end = aLen > 2 ? arguments[2] : undefined, endPos = end === undefined ? length : toIndex(end, length);
                while (endPos > index)
                    O[index++] = value;
                return O;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $find = __webpack_require__(164)(5), KEY = 'find', forced = true;
            if (KEY in [])
                Array(1)[KEY](function () {
                    forced = false;
                });
            $export($export.P + $export.F * forced, 'Array', {
                find: function find(callbackfn) {
                    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__(178)(KEY);
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $find = __webpack_require__(164)(6), KEY = 'findIndex', forced = true;
            if (KEY in [])
                Array(1)[KEY](function () {
                    forced = false;
                });
            $export($export.P + $export.F * forced, 'Array', {
                findIndex: function findIndex(callbackfn) {
                    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__(178)(KEY);
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var addToUnscopables = __webpack_require__(178), step = __webpack_require__(184), Iterators = __webpack_require__(135), toIObject = __webpack_require__(30);
            module.exports = __webpack_require__(134)(Array, 'Array', function (iterated, kind) {
                this._t = toIObject(iterated);
                this._i = 0;
                this._k = kind;
            }, function () {
                var O = this._t, kind = this._k, index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1);
                }
                if (kind == 'keys')
                    return step(0, index);
                if (kind == 'values')
                    return step(0, O[index]);
                return step(0, [
                    index,
                    O[index]
                ]);
            }, 'values');
            Iterators.Arguments = Iterators.Array;
            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');
        },
        function (module, exports) {
            module.exports = function (done, value) {
                return {
                    value: value,
                    done: !!done
                };
            };
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(186)('Array');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(2), dP = __webpack_require__(9), DESCRIPTORS = __webpack_require__(4), SPECIES = __webpack_require__(23)('species');
            module.exports = function (KEY) {
                var C = global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES])
                    dP.f(C, SPECIES, {
                        configurable: true,
                        get: function () {
                            return this;
                        }
                    });
            };
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), inheritIfRequired = __webpack_require__(80), dP = __webpack_require__(9).f, gOPN = __webpack_require__(48).f, isRegExp = __webpack_require__(128), $flags = __webpack_require__(188), $RegExp = global.RegExp, Base = $RegExp, proto = $RegExp.prototype, re1 = /a/g, re2 = /a/g, CORRECT_NEW = new $RegExp(re1) !== re1;
            if (__webpack_require__(4) && (!CORRECT_NEW || __webpack_require__(5)(function () {
                    re2[__webpack_require__(23)('match')] = false;
                    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
                }))) {
                $RegExp = function RegExp(p, f) {
                    var tiRE = this instanceof $RegExp, piRE = isRegExp(p), fiU = f === undefined;
                    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
                };
                var proxy = function (key) {
                    key in $RegExp || dP($RegExp, key, {
                        configurable: true,
                        get: function () {
                            return Base[key];
                        },
                        set: function (it) {
                            Base[key] = it;
                        }
                    });
                };
                for (var keys = gOPN(Base), i = 0; keys.length > i;)
                    proxy(keys[i++]);
                proto.constructor = $RegExp;
                $RegExp.prototype = proto;
                __webpack_require__(16)(global, 'RegExp', $RegExp);
            }
            __webpack_require__(186)('RegExp');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var anObject = __webpack_require__(10);
            module.exports = function () {
                var that = anObject(this), result = '';
                if (that.global)
                    result += 'g';
                if (that.ignoreCase)
                    result += 'i';
                if (that.multiline)
                    result += 'm';
                if (that.unicode)
                    result += 'u';
                if (that.sticky)
                    result += 'y';
                return result;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(190);
            var anObject = __webpack_require__(10), $flags = __webpack_require__(188), DESCRIPTORS = __webpack_require__(4), TO_STRING = 'toString', $toString = /./[TO_STRING];
            var define = function (fn) {
                __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
            };
            if (__webpack_require__(5)(function () {
                    return $toString.call({
                        source: 'a',
                        flags: 'b'
                    }) != '/a/b';
                })) {
                define('core-js/client/core', function toString() {
                    var R = anObject(this);
                    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
                });
            } else if ($toString.name != TO_STRING) {
                define('core-js/client/core', function toString() {
                    return $toString.call(this);
                });
            }
        },
        function (module, exports, __webpack_require__) {
            if (__webpack_require__(4) && /./g.flags != 'g')
                __webpack_require__(9).f(RegExp.prototype, 'flags', {
                    configurable: true,
                    get: __webpack_require__(188)
                });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(192)('match', 1, function (defined, MATCH, $match) {
                return [
                    function match(regexp) {
                        'use strict';
                        var O = defined(this), fn = regexp == undefined ? undefined : regexp[MATCH];
                        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                    },
                    $match
                ];
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var hide = __webpack_require__(8), redefine = __webpack_require__(16), fails = __webpack_require__(5), defined = __webpack_require__(33), wks = __webpack_require__(23);
            module.exports = function (KEY, length, exec) {
                var SYMBOL = wks(KEY), fns = exec(defined, SYMBOL, ''[KEY]), strfn = fns[0], rxfn = fns[1];
                if (fails(function () {
                        var O = {};
                        O[SYMBOL] = function () {
                            return 7;
                        };
                        return ''[KEY](O) != 7;
                    })) {
                    redefine(String.prototype, KEY, strfn);
                    hide(RegExp.prototype, SYMBOL, length == 2 ? function (string, arg) {
                        return rxfn.call(string, this, arg);
                    } : function (string) {
                        return rxfn.call(string, this);
                    });
                }
            };
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(192)('replace', 2, function (defined, REPLACE, $replace) {
                return [
                    function replace(searchValue, replaceValue) {
                        'use strict';
                        var O = defined(this), fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
                    },
                    $replace
                ];
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(192)('search', 1, function (defined, SEARCH, $search) {
                return [
                    function search(regexp) {
                        'use strict';
                        var O = defined(this), fn = regexp == undefined ? undefined : regexp[SEARCH];
                        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
                    },
                    $search
                ];
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(192)('split', 2, function (defined, SPLIT, $split) {
                'use strict';
                var isRegExp = __webpack_require__(128), _split = $split, $push = [].push, $SPLIT = 'split', LENGTH = 'length', LAST_INDEX = 'lastIndex';
                if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
                    var NPCG = /()??/.exec('')[1] === undefined;
                    $split = function (separator, limit) {
                        var string = String(this);
                        if (separator === undefined && limit === 0)
                            return [];
                        if (!isRegExp(separator))
                            return _split.call(string, separator, limit);
                        var output = [];
                        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
                        var lastLastIndex = 0;
                        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
                        var separatorCopy = new RegExp(separator.source, flags + 'g');
                        var separator2, match, lastIndex, lastLength, i;
                        if (!NPCG)
                            separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
                        while (match = separatorCopy.exec(string)) {
                            lastIndex = match.index + match[0][LENGTH];
                            if (lastIndex > lastLastIndex) {
                                output.push(string.slice(lastLastIndex, match.index));
                                if (!NPCG && match[LENGTH] > 1)
                                    match[0].replace(separator2, function () {
                                        for (i = 1; i < arguments[LENGTH] - 2; i++)
                                            if (arguments[i] === undefined)
                                                match[i] = undefined;
                                    });
                                if (match[LENGTH] > 1 && match.index < string[LENGTH])
                                    $push.apply(output, match.slice(1));
                                lastLength = match[0][LENGTH];
                                lastLastIndex = lastIndex;
                                if (output[LENGTH] >= splitLimit)
                                    break;
                            }
                            if (separatorCopy[LAST_INDEX] === match.index)
                                separatorCopy[LAST_INDEX]++;
                        }
                        if (lastLastIndex === string[LENGTH]) {
                            if (lastLength || !separatorCopy.test(''))
                                output.push('');
                        } else
                            output.push(string.slice(lastLastIndex));
                        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                    };
                } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
                    $split = function (separator, limit) {
                        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
                    };
                }
                return [
                    function split(separator, limit) {
                        var O = defined(this), fn = separator == undefined ? undefined : separator[SPLIT];
                        return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
                    },
                    $split
                ];
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var LIBRARY = __webpack_require__(26), global = __webpack_require__(2), ctx = __webpack_require__(18), classof = __webpack_require__(73), $export = __webpack_require__(6), isObject = __webpack_require__(11), aFunction = __webpack_require__(19), anInstance = __webpack_require__(197), forOf = __webpack_require__(198), speciesConstructor = __webpack_require__(199), task = __webpack_require__(200).set, microtask = __webpack_require__(201)(), PROMISE = 'Promise', TypeError = global.TypeError, process = global.process, $Promise = global[PROMISE], process = global.process, isNode = classof(process) == 'process', empty = function () {
                }, Internal, GenericPromiseCapability, Wrapper;
            var USE_NATIVE = !!function () {
                try {
                    var promise = $Promise.resolve(1), FakePromise = (promise.constructor = {})[__webpack_require__(23)('species')] = function (exec) {
                            exec(empty, empty);
                        };
                    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
                } catch (e) {
                }
            }();
            var sameConstructor = function (a, b) {
                return a === b || a === $Promise && b === Wrapper;
            };
            var isThenable = function (it) {
                var then;
                return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
            };
            var newPromiseCapability = function (C) {
                return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
            };
            var PromiseCapability = GenericPromiseCapability = function (C) {
                var resolve, reject;
                this.promise = new C(function ($$resolve, $$reject) {
                    if (resolve !== undefined || reject !== undefined)
                        throw TypeError('Bad Promise constructor');
                    resolve = $$resolve;
                    reject = $$reject;
                });
                this.resolve = aFunction(resolve);
                this.reject = aFunction(reject);
            };
            var perform = function (exec) {
                try {
                    exec();
                } catch (e) {
                    return { error: e };
                }
            };
            var notify = function (promise, isReject) {
                if (promise._n)
                    return;
                promise._n = true;
                var chain = promise._c;
                microtask(function () {
                    var value = promise._v, ok = promise._s == 1, i = 0;
                    var run = function (reaction) {
                        var handler = ok ? reaction.ok : reaction.fail, resolve = reaction.resolve, reject = reaction.reject, domain = reaction.domain, result, then;
                        try {
                            if (handler) {
                                if (!ok) {
                                    if (promise._h == 2)
                                        onHandleUnhandled(promise);
                                    promise._h = 1;
                                }
                                if (handler === true)
                                    result = value;
                                else {
                                    if (domain)
                                        domain.enter();
                                    result = handler(value);
                                    if (domain)
                                        domain.exit();
                                }
                                if (result === reaction.promise) {
                                    reject(TypeError('Promise-chain cycle'));
                                } else if (then = isThenable(result)) {
                                    then.call(result, resolve, reject);
                                } else
                                    resolve(result);
                            } else
                                reject(value);
                        } catch (e) {
                            reject(e);
                        }
                    };
                    while (chain.length > i)
                        run(chain[i++]);
                    promise._c = [];
                    promise._n = false;
                    if (isReject && !promise._h)
                        onUnhandled(promise);
                });
            };
            var onUnhandled = function (promise) {
                task.call(global, function () {
                    var value = promise._v, abrupt, handler, console;
                    if (isUnhandled(promise)) {
                        abrupt = perform(function () {
                            if (isNode) {
                                process.emit('unhandledRejection', value, promise);
                            } else if (handler = global.onunhandledrejection) {
                                handler({
                                    promise: promise,
                                    reason: value
                                });
                            } else if ((console = global.console) && console.error) {
                                console.error('Unhandled promise rejection', value);
                            }
                        });
                        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                    }
                    promise._a = undefined;
                    if (abrupt)
                        throw abrupt.error;
                });
            };
            var isUnhandled = function (promise) {
                if (promise._h == 1)
                    return false;
                var chain = promise._a || promise._c, i = 0, reaction;
                while (chain.length > i) {
                    reaction = chain[i++];
                    if (reaction.fail || !isUnhandled(reaction.promise))
                        return false;
                }
                return true;
            };
            var onHandleUnhandled = function (promise) {
                task.call(global, function () {
                    var handler;
                    if (isNode) {
                        process.emit('rejectionHandled', promise);
                    } else if (handler = global.onrejectionhandled) {
                        handler({
                            promise: promise,
                            reason: promise._v
                        });
                    }
                });
            };
            var $reject = function (value) {
                var promise = this;
                if (promise._d)
                    return;
                promise._d = true;
                promise = promise._w || promise;
                promise._v = value;
                promise._s = 2;
                if (!promise._a)
                    promise._a = promise._c.slice();
                notify(promise, true);
            };
            var $resolve = function (value) {
                var promise = this, then;
                if (promise._d)
                    return;
                promise._d = true;
                promise = promise._w || promise;
                try {
                    if (promise === value)
                        throw TypeError('Promise can\'t be resolved itself');
                    if (then = isThenable(value)) {
                        microtask(function () {
                            var wrapper = {
                                _w: promise,
                                _d: false
                            };
                            try {
                                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                            } catch (e) {
                                $reject.call(wrapper, e);
                            }
                        });
                    } else {
                        promise._v = value;
                        promise._s = 1;
                        notify(promise, false);
                    }
                } catch (e) {
                    $reject.call({
                        _w: promise,
                        _d: false
                    }, e);
                }
            };
            if (!USE_NATIVE) {
                $Promise = function Promise(executor) {
                    anInstance(this, $Promise, PROMISE, '_h');
                    aFunction(executor);
                    Internal.call(this);
                    try {
                        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                    } catch (err) {
                        $reject.call(this, err);
                    }
                };
                Internal = function Promise(executor) {
                    this._c = [];
                    this._a = undefined;
                    this._s = 0;
                    this._d = false;
                    this._v = undefined;
                    this._h = 0;
                    this._n = false;
                };
                Internal.prototype = __webpack_require__(202)($Promise.prototype, {
                    then: function then(onFulfilled, onRejected) {
                        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                        reaction.fail = typeof onRejected == 'function' && onRejected;
                        reaction.domain = isNode ? process.domain : undefined;
                        this._c.push(reaction);
                        if (this._a)
                            this._a.push(reaction);
                        if (this._s)
                            notify(this, false);
                        return reaction.promise;
                    },
                    'catch': function (onRejected) {
                        return this.then(undefined, onRejected);
                    }
                });
                PromiseCapability = function () {
                    var promise = new Internal();
                    this.promise = promise;
                    this.resolve = ctx($resolve, promise, 1);
                    this.reject = ctx($reject, promise, 1);
                };
            }
            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
            __webpack_require__(22)($Promise, PROMISE);
            __webpack_require__(186)(PROMISE);
            Wrapper = __webpack_require__(7)[PROMISE];
            $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                reject: function reject(r) {
                    var capability = newPromiseCapability(this), $$reject = capability.reject;
                    $$reject(r);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                resolve: function resolve(x) {
                    if (x instanceof $Promise && sameConstructor(x.constructor, this))
                        return x;
                    var capability = newPromiseCapability(this), $$resolve = capability.resolve;
                    $$resolve(x);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(157)(function (iter) {
                $Promise.all(iter)['catch'](empty);
            })), PROMISE, {
                all: function all(iterable) {
                    var C = this, capability = newPromiseCapability(C), resolve = capability.resolve, reject = capability.reject;
                    var abrupt = perform(function () {
                        var values = [], index = 0, remaining = 1;
                        forOf(iterable, false, function (promise) {
                            var $index = index++, alreadyCalled = false;
                            values.push(undefined);
                            remaining++;
                            C.resolve(promise).then(function (value) {
                                if (alreadyCalled)
                                    return;
                                alreadyCalled = true;
                                values[$index] = value;
                                --remaining || resolve(values);
                            }, reject);
                        });
                        --remaining || resolve(values);
                    });
                    if (abrupt)
                        reject(abrupt.error);
                    return capability.promise;
                },
                race: function race(iterable) {
                    var C = this, capability = newPromiseCapability(C), reject = capability.reject;
                    var abrupt = perform(function () {
                        forOf(iterable, false, function (promise) {
                            C.resolve(promise).then(capability.resolve, reject);
                        });
                    });
                    if (abrupt)
                        reject(abrupt.error);
                    return capability.promise;
                }
            });
        },
        function (module, exports) {
            module.exports = function (it, Constructor, name, forbiddenField) {
                if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
                    throw TypeError(name + ': incorrect invocation!');
                }
                return it;
            };
        },
        function (module, exports, __webpack_require__) {
            var ctx = __webpack_require__(18), call = __webpack_require__(153), isArrayIter = __webpack_require__(154), anObject = __webpack_require__(10), toLength = __webpack_require__(35), getIterFn = __webpack_require__(156), BREAK = {}, RETURN = {};
            var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function () {
                        return iterable;
                    } : getIterFn(iterable), f = ctx(fn, that, entries ? 2 : 1), index = 0, length, step, iterator, result;
                if (typeof iterFn != 'function')
                    throw TypeError(iterable + ' is not iterable!');
                if (isArrayIter(iterFn))
                    for (length = toLength(iterable.length); length > index; index++) {
                        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                        if (result === BREAK || result === RETURN)
                            return result;
                    }
                else
                    for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                        result = call(iterator, f, step.value, entries);
                        if (result === BREAK || result === RETURN)
                            return result;
                    }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;
        },
        function (module, exports, __webpack_require__) {
            var anObject = __webpack_require__(10), aFunction = __webpack_require__(19), SPECIES = __webpack_require__(23)('species');
            module.exports = function (O, D) {
                var C = anObject(O).constructor, S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };
        },
        function (module, exports, __webpack_require__) {
            var ctx = __webpack_require__(18), invoke = __webpack_require__(76), html = __webpack_require__(46), cel = __webpack_require__(13), global = __webpack_require__(2), process = global.process, setTask = global.setImmediate, clearTask = global.clearImmediate, MessageChannel = global.MessageChannel, counter = 0, queue = {}, ONREADYSTATECHANGE = 'onreadystatechange', defer, channel, port;
            var run = function () {
                var id = +this;
                if (queue.hasOwnProperty(id)) {
                    var fn = queue[id];
                    delete queue[id];
                    fn();
                }
            };
            var listener = function (event) {
                run.call(event.data);
            };
            if (!setTask || !clearTask) {
                setTask = function setImmediate(fn) {
                    var args = [], i = 1;
                    while (arguments.length > i)
                        args.push(arguments[i++]);
                    queue[++counter] = function () {
                        invoke(typeof fn == 'function' ? fn : Function(fn), args);
                    };
                    defer(counter);
                    return counter;
                };
                clearTask = function clearImmediate(id) {
                    delete queue[id];
                };
                if (__webpack_require__(32)(process) == 'process') {
                    defer = function (id) {
                        process.nextTick(ctx(run, id, 1));
                    };
                } else if (MessageChannel) {
                    channel = new MessageChannel();
                    port = channel.port2;
                    channel.port1.onmessage = listener;
                    defer = ctx(port.postMessage, port, 1);
                } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                    defer = function (id) {
                        global.postMessage(id + '', '*');
                    };
                    global.addEventListener('message', listener, false);
                } else if (ONREADYSTATECHANGE in cel('script')) {
                    defer = function (id) {
                        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                            html.removeChild(this);
                            run.call(id);
                        };
                    };
                } else {
                    defer = function (id) {
                        setTimeout(ctx(run, id, 1), 0);
                    };
                }
            }
            module.exports = {
                set: setTask,
                clear: clearTask
            };
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), macrotask = __webpack_require__(200).set, Observer = global.MutationObserver || global.WebKitMutationObserver, process = global.process, Promise = global.Promise, isNode = __webpack_require__(32)(process) == 'process';
            module.exports = function () {
                var head, last, notify;
                var flush = function () {
                    var parent, fn;
                    if (isNode && (parent = process.domain))
                        parent.exit();
                    while (head) {
                        fn = head.fn;
                        head = head.next;
                        try {
                            fn();
                        } catch (e) {
                            if (head)
                                notify();
                            else
                                last = undefined;
                            throw e;
                        }
                    }
                    last = undefined;
                    if (parent)
                        parent.enter();
                };
                if (isNode) {
                    notify = function () {
                        process.nextTick(flush);
                    };
                } else if (Observer) {
                    var toggle = true, node = document.createTextNode('');
                    new Observer(flush).observe(node, { characterData: true });
                    notify = function () {
                        node.data = toggle = !toggle;
                    };
                } else if (Promise && Promise.resolve) {
                    var promise = Promise.resolve();
                    notify = function () {
                        promise.then(flush);
                    };
                } else {
                    notify = function () {
                        macrotask.call(global, flush);
                    };
                }
                return function (fn) {
                    var task = {
                        fn: fn,
                        next: undefined
                    };
                    if (last)
                        last.next = task;
                    if (!head) {
                        head = task;
                        notify();
                    }
                    last = task;
                };
            };
        },
        function (module, exports, __webpack_require__) {
            var redefine = __webpack_require__(16);
            module.exports = function (target, src, safe) {
                for (var key in src)
                    redefine(target, key, src[key], safe);
                return target;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var strong = __webpack_require__(204);
            module.exports = __webpack_require__(205)('Map', function (get) {
                return function Map() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                get: function get(key) {
                    var entry = strong.getEntry(this, key);
                    return entry && entry.v;
                },
                set: function set(key, value) {
                    return strong.def(this, key === 0 ? 0 : key, value);
                }
            }, strong, true);
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var dP = __webpack_require__(9).f, create = __webpack_require__(44), redefineAll = __webpack_require__(202), ctx = __webpack_require__(18), anInstance = __webpack_require__(197), defined = __webpack_require__(33), forOf = __webpack_require__(198), $iterDefine = __webpack_require__(134), step = __webpack_require__(184), setSpecies = __webpack_require__(186), DESCRIPTORS = __webpack_require__(4), fastKey = __webpack_require__(20).fastKey, SIZE = DESCRIPTORS ? '_s' : 'size';
            var getEntry = function (that, key) {
                var index = fastKey(key), entry;
                if (index !== 'F')
                    return that._i[index];
                for (entry = that._f; entry; entry = entry.n) {
                    if (entry.k == key)
                        return entry;
                }
            };
            module.exports = {
                getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function (that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._i = create(null);
                        that._f = undefined;
                        that._l = undefined;
                        that[SIZE] = 0;
                        if (iterable != undefined)
                            forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        clear: function clear() {
                            for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
                                entry.r = true;
                                if (entry.p)
                                    entry.p = entry.p.n = undefined;
                                delete data[entry.i];
                            }
                            that._f = that._l = undefined;
                            that[SIZE] = 0;
                        },
                        'delete': function (key) {
                            var that = this, entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n, prev = entry.p;
                                delete that._i[entry.i];
                                entry.r = true;
                                if (prev)
                                    prev.n = next;
                                if (next)
                                    next.p = prev;
                                if (that._f == entry)
                                    that._f = next;
                                if (that._l == entry)
                                    that._l = prev;
                                that[SIZE]--;
                            }
                            return !!entry;
                        },
                        forEach: function forEach(callbackfn) {
                            anInstance(this, C, 'forEach');
                            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3), entry;
                            while (entry = entry ? entry.n : this._f) {
                                f(entry.v, entry.k, this);
                                while (entry && entry.r)
                                    entry = entry.p;
                            }
                        },
                        has: function has(key) {
                            return !!getEntry(this, key);
                        }
                    });
                    if (DESCRIPTORS)
                        dP(C.prototype, 'size', {
                            get: function () {
                                return defined(this[SIZE]);
                            }
                        });
                    return C;
                },
                def: function (that, key, value) {
                    var entry = getEntry(that, key), prev, index;
                    if (entry) {
                        entry.v = value;
                    } else {
                        that._l = entry = {
                            i: index = fastKey(key, true),
                            k: key,
                            v: value,
                            p: prev = that._l,
                            n: undefined,
                            r: false
                        };
                        if (!that._f)
                            that._f = entry;
                        if (prev)
                            prev.n = entry;
                        that[SIZE]++;
                        if (index !== 'F')
                            that._i[index] = entry;
                    }
                    return that;
                },
                getEntry: getEntry,
                setStrong: function (C, NAME, IS_MAP) {
                    $iterDefine(C, NAME, function (iterated, kind) {
                        this._t = iterated;
                        this._k = kind;
                        this._l = undefined;
                    }, function () {
                        var that = this, kind = that._k, entry = that._l;
                        while (entry && entry.r)
                            entry = entry.p;
                        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                            that._t = undefined;
                            return step(1);
                        }
                        if (kind == 'keys')
                            return step(0, entry.k);
                        if (kind == 'values')
                            return step(0, entry.v);
                        return step(0, [
                            entry.k,
                            entry.v
                        ]);
                    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
                    setSpecies(NAME);
                }
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(2), $export = __webpack_require__(6), redefine = __webpack_require__(16), redefineAll = __webpack_require__(202), meta = __webpack_require__(20), forOf = __webpack_require__(198), anInstance = __webpack_require__(197), isObject = __webpack_require__(11), fails = __webpack_require__(5), $iterDetect = __webpack_require__(157), setToStringTag = __webpack_require__(22), inheritIfRequired = __webpack_require__(80);
            module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME], C = Base, ADDER = IS_MAP ? 'set' : 'add', proto = C && C.prototype, O = {};
                var fixMethod = function (KEY) {
                    var fn = proto[KEY];
                    redefine(proto, KEY, KEY == 'delete' ? function (a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'has' ? function has(a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'get' ? function get(a) {
                        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'add' ? function add(a) {
                        fn.call(this, a === 0 ? 0 : a);
                        return this;
                    } : function set(a, b) {
                        fn.call(this, a === 0 ? 0 : a, b);
                        return this;
                    });
                };
                if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
                        new C().entries().next();
                    }))) {
                    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                    redefineAll(C.prototype, methods);
                    meta.NEED = true;
                } else {
                    var instance = new C(), HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance, THROWS_ON_PRIMITIVES = fails(function () {
                            instance.has(1);
                        }), ACCEPT_ITERABLES = $iterDetect(function (iter) {
                            new C(iter);
                        }), BUGGY_ZERO = !IS_WEAK && fails(function () {
                            var $instance = new C(), index = 5;
                            while (index--)
                                $instance[ADDER](index, index);
                            return !$instance.has(-0);
                        });
                    if (!ACCEPT_ITERABLES) {
                        C = wrapper(function (target, iterable) {
                            anInstance(target, C, NAME);
                            var that = inheritIfRequired(new Base(), target, C);
                            if (iterable != undefined)
                                forOf(iterable, IS_MAP, that[ADDER], that);
                            return that;
                        });
                        C.prototype = proto;
                        proto.constructor = C;
                    }
                    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                        fixMethod('delete');
                        fixMethod('has');
                        IS_MAP && fixMethod('get');
                    }
                    if (BUGGY_ZERO || HASNT_CHAINING)
                        fixMethod(ADDER);
                    if (IS_WEAK && proto.clear)
                        delete proto.clear;
                }
                setToStringTag(C, NAME);
                O[NAME] = C;
                $export($export.G + $export.W + $export.F * (C != Base), O);
                if (!IS_WEAK)
                    common.setStrong(C, NAME, IS_MAP);
                return C;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var strong = __webpack_require__(204);
            module.exports = __webpack_require__(205)('Set', function (get) {
                return function Set() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                add: function add(value) {
                    return strong.def(this, value = value === 0 ? 0 : value, value);
                }
            }, strong);
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var each = __webpack_require__(164)(0), redefine = __webpack_require__(16), meta = __webpack_require__(20), assign = __webpack_require__(67), weak = __webpack_require__(208), isObject = __webpack_require__(11), getWeak = meta.getWeak, isExtensible = Object.isExtensible, uncaughtFrozenStore = weak.ufstore, tmp = {}, InternalMap;
            var wrapper = function (get) {
                return function WeakMap() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            };
            var methods = {
                get: function get(key) {
                    if (isObject(key)) {
                        var data = getWeak(key);
                        if (data === true)
                            return uncaughtFrozenStore(this).get(key);
                        return data ? data[this._i] : undefined;
                    }
                },
                set: function set(key, value) {
                    return weak.def(this, key, value);
                }
            };
            var $WeakMap = module.exports = __webpack_require__(205)('WeakMap', wrapper, methods, weak, true, true);
            if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
                InternalMap = weak.getConstructor(wrapper);
                assign(InternalMap.prototype, methods);
                meta.NEED = true;
                each([
                    'delete',
                    'has',
                    'get',
                    'set'
                ], function (key) {
                    var proto = $WeakMap.prototype, method = proto[key];
                    redefine(proto, key, function (a, b) {
                        if (isObject(a) && !isExtensible(a)) {
                            if (!this._f)
                                this._f = new InternalMap();
                            var result = this._f[key](a, b);
                            return key == 'set' ? this : result;
                        }
                        return method.call(this, a, b);
                    });
                });
            }
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var redefineAll = __webpack_require__(202), getWeak = __webpack_require__(20).getWeak, anObject = __webpack_require__(10), isObject = __webpack_require__(11), anInstance = __webpack_require__(197), forOf = __webpack_require__(198), createArrayMethod = __webpack_require__(164), $has = __webpack_require__(3), arrayFind = createArrayMethod(5), arrayFindIndex = createArrayMethod(6), id = 0;
            var uncaughtFrozenStore = function (that) {
                return that._l || (that._l = new UncaughtFrozenStore());
            };
            var UncaughtFrozenStore = function () {
                this.a = [];
            };
            var findUncaughtFrozen = function (store, key) {
                return arrayFind(store.a, function (it) {
                    return it[0] === key;
                });
            };
            UncaughtFrozenStore.prototype = {
                get: function (key) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry)
                        return entry[1];
                },
                has: function (key) {
                    return !!findUncaughtFrozen(this, key);
                },
                set: function (key, value) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry)
                        entry[1] = value;
                    else
                        this.a.push([
                            key,
                            value
                        ]);
                },
                'delete': function (key) {
                    var index = arrayFindIndex(this.a, function (it) {
                        return it[0] === key;
                    });
                    if (~index)
                        this.a.splice(index, 1);
                    return !!~index;
                }
            };
            module.exports = {
                getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function (that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._i = id++;
                        that._l = undefined;
                        if (iterable != undefined)
                            forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        'delete': function (key) {
                            if (!isObject(key))
                                return false;
                            var data = getWeak(key);
                            if (data === true)
                                return uncaughtFrozenStore(this)['delete'](key);
                            return data && $has(data, this._i) && delete data[this._i];
                        },
                        has: function has(key) {
                            if (!isObject(key))
                                return false;
                            var data = getWeak(key);
                            if (data === true)
                                return uncaughtFrozenStore(this).has(key);
                            return data && $has(data, this._i);
                        }
                    });
                    return C;
                },
                def: function (that, key, value) {
                    var data = getWeak(anObject(key), true);
                    if (data === true)
                        uncaughtFrozenStore(that).set(key, value);
                    else
                        data[that._i] = value;
                    return that;
                },
                ufstore: uncaughtFrozenStore
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var weak = __webpack_require__(208);
            __webpack_require__(205)('WeakSet', function (get) {
                return function WeakSet() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                add: function add(value) {
                    return weak.def(this, value, true);
                }
            }, weak, false, true);
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), aFunction = __webpack_require__(19), anObject = __webpack_require__(10), rApply = (__webpack_require__(2).Reflect || {}).apply, fApply = Function.apply;
            $export($export.S + $export.F * !__webpack_require__(5)(function () {
                rApply(function () {
                });
            }), 'Reflect', {
                apply: function apply(target, thisArgument, argumentsList) {
                    var T = aFunction(target), L = anObject(argumentsList);
                    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), create = __webpack_require__(44), aFunction = __webpack_require__(19), anObject = __webpack_require__(10), isObject = __webpack_require__(11), fails = __webpack_require__(5), bind = __webpack_require__(75), rConstruct = (__webpack_require__(2).Reflect || {}).construct;
            var NEW_TARGET_BUG = fails(function () {
                function F() {
                }
                return !(rConstruct(function () {
                }, [], F) instanceof F);
            });
            var ARGS_BUG = !fails(function () {
                rConstruct(function () {
                });
            });
            $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
                construct: function construct(Target, args) {
                    aFunction(Target);
                    anObject(args);
                    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
                    if (ARGS_BUG && !NEW_TARGET_BUG)
                        return rConstruct(Target, args, newTarget);
                    if (Target == newTarget) {
                        switch (args.length) {
                        case 0:
                            return new Target();
                        case 1:
                            return new Target(args[0]);
                        case 2:
                            return new Target(args[0], args[1]);
                        case 3:
                            return new Target(args[0], args[1], args[2]);
                        case 4:
                            return new Target(args[0], args[1], args[2], args[3]);
                        }
                        var $args = [null];
                        $args.push.apply($args, args);
                        return new (bind.apply(Target, $args))();
                    }
                    var proto = newTarget.prototype, instance = create(isObject(proto) ? proto : Object.prototype), result = Function.apply.call(Target, instance, args);
                    return isObject(result) ? result : instance;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var dP = __webpack_require__(9), $export = __webpack_require__(6), anObject = __webpack_require__(10), toPrimitive = __webpack_require__(14);
            $export($export.S + $export.F * __webpack_require__(5)(function () {
                Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
            }), 'Reflect', {
                defineProperty: function defineProperty(target, propertyKey, attributes) {
                    anObject(target);
                    propertyKey = toPrimitive(propertyKey, true);
                    anObject(attributes);
                    try {
                        dP.f(target, propertyKey, attributes);
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), gOPD = __webpack_require__(49).f, anObject = __webpack_require__(10);
            $export($export.S, 'Reflect', {
                deleteProperty: function deleteProperty(target, propertyKey) {
                    var desc = gOPD(anObject(target), propertyKey);
                    return desc && !desc.configurable ? false : delete target[propertyKey];
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), anObject = __webpack_require__(10);
            var Enumerate = function (iterated) {
                this._t = anObject(iterated);
                this._i = 0;
                var keys = this._k = [], key;
                for (key in iterated)
                    keys.push(key);
            };
            __webpack_require__(136)(Enumerate, 'Object', function () {
                var that = this, keys = that._k, key;
                do {
                    if (that._i >= keys.length)
                        return {
                            value: undefined,
                            done: true
                        };
                } while (!((key = keys[that._i++]) in that._t));
                return {
                    value: key,
                    done: false
                };
            });
            $export($export.S, 'Reflect', {
                enumerate: function enumerate(target) {
                    return new Enumerate(target);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var gOPD = __webpack_require__(49), getPrototypeOf = __webpack_require__(57), has = __webpack_require__(3), $export = __webpack_require__(6), isObject = __webpack_require__(11), anObject = __webpack_require__(10);
            function get(target, propertyKey) {
                var receiver = arguments.length < 3 ? target : arguments[2], desc, proto;
                if (anObject(target) === receiver)
                    return target[propertyKey];
                if (desc = gOPD.f(target, propertyKey))
                    return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
                if (isObject(proto = getPrototypeOf(target)))
                    return get(proto, propertyKey, receiver);
            }
            $export($export.S, 'Reflect', { get: get });
        },
        function (module, exports, __webpack_require__) {
            var gOPD = __webpack_require__(49), $export = __webpack_require__(6), anObject = __webpack_require__(10);
            $export($export.S, 'Reflect', {
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                    return gOPD.f(anObject(target), propertyKey);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), getProto = __webpack_require__(57), anObject = __webpack_require__(10);
            $export($export.S, 'Reflect', {
                getPrototypeOf: function getPrototypeOf(target) {
                    return getProto(anObject(target));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Reflect', {
                has: function has(target, propertyKey) {
                    return propertyKey in target;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), anObject = __webpack_require__(10), $isExtensible = Object.isExtensible;
            $export($export.S, 'Reflect', {
                isExtensible: function isExtensible(target) {
                    anObject(target);
                    return $isExtensible ? $isExtensible(target) : true;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Reflect', { ownKeys: __webpack_require__(221) });
        },
        function (module, exports, __webpack_require__) {
            var gOPN = __webpack_require__(48), gOPS = __webpack_require__(41), anObject = __webpack_require__(10), Reflect = __webpack_require__(2).Reflect;
            module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = gOPN.f(anObject(it)), getSymbols = gOPS.f;
                return getSymbols ? keys.concat(getSymbols(it)) : keys;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), anObject = __webpack_require__(10), $preventExtensions = Object.preventExtensions;
            $export($export.S, 'Reflect', {
                preventExtensions: function preventExtensions(target) {
                    anObject(target);
                    try {
                        if ($preventExtensions)
                            $preventExtensions(target);
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var dP = __webpack_require__(9), gOPD = __webpack_require__(49), getPrototypeOf = __webpack_require__(57), has = __webpack_require__(3), $export = __webpack_require__(6), createDesc = __webpack_require__(15), anObject = __webpack_require__(10), isObject = __webpack_require__(11);
            function set(target, propertyKey, V) {
                var receiver = arguments.length < 4 ? target : arguments[3], ownDesc = gOPD.f(anObject(target), propertyKey), existingDescriptor, proto;
                if (!ownDesc) {
                    if (isObject(proto = getPrototypeOf(target))) {
                        return set(proto, propertyKey, V, receiver);
                    }
                    ownDesc = createDesc(0);
                }
                if (has(ownDesc, 'value')) {
                    if (ownDesc.writable === false || !isObject(receiver))
                        return false;
                    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
                    existingDescriptor.value = V;
                    dP.f(receiver, propertyKey, existingDescriptor);
                    return true;
                }
                return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
            }
            $export($export.S, 'Reflect', { set: set });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), setProto = __webpack_require__(71);
            if (setProto)
                $export($export.S, 'Reflect', {
                    setPrototypeOf: function setPrototypeOf(target, proto) {
                        setProto.check(target, proto);
                        try {
                            setProto.set(target, proto);
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Date', {
                now: function () {
                    return new Date().getTime();
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toObject = __webpack_require__(56), toPrimitive = __webpack_require__(14);
            $export($export.P + $export.F * __webpack_require__(5)(function () {
                return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
                    toISOString: function () {
                        return 1;
                    }
                }) !== 1;
            }), 'Date', {
                toJSON: function toJSON(key) {
                    var O = toObject(this), pv = toPrimitive(O);
                    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), fails = __webpack_require__(5), getTime = Date.prototype.getTime;
            var lz = function (num) {
                return num > 9 ? num : '0' + num;
            };
            $export($export.P + $export.F * (fails(function () {
                return new Date(-50000000000000 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
            }) || !fails(function () {
                new Date(NaN).toISOString();
            })), 'Date', {
                toISOString: function toISOString() {
                    if (!isFinite(getTime.call(this)))
                        throw RangeError('Invalid time value');
                    var d = this, y = d.getUTCFullYear(), m = d.getUTCMilliseconds(), s = y < 0 ? '-' : y > 9999 ? '+' : '';
                    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var DateProto = Date.prototype, INVALID_DATE = 'Invalid Date', TO_STRING = 'toString', $toString = DateProto[TO_STRING], getTime = DateProto.getTime;
            if (new Date(NaN) + '' != INVALID_DATE) {
                __webpack_require__(16)(DateProto, TO_STRING, function toString() {
                    var value = getTime.call(this);
                    return value === value ? $toString.call(this) : INVALID_DATE;
                });
            }
        },
        function (module, exports, __webpack_require__) {
            var TO_PRIMITIVE = __webpack_require__(23)('toPrimitive'), proto = Date.prototype;
            if (!(TO_PRIMITIVE in proto))
                __webpack_require__(8)(proto, TO_PRIMITIVE, __webpack_require__(230));
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var anObject = __webpack_require__(10), toPrimitive = __webpack_require__(14), NUMBER = 'number';
            module.exports = function (hint) {
                if (hint !== 'string' && hint !== NUMBER && hint !== 'default')
                    throw TypeError('Incorrect hint');
                return toPrimitive(anObject(this), hint != NUMBER);
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $typed = __webpack_require__(232), buffer = __webpack_require__(233), anObject = __webpack_require__(10), toIndex = __webpack_require__(37), toLength = __webpack_require__(35), isObject = __webpack_require__(11), ArrayBuffer = __webpack_require__(2).ArrayBuffer, speciesConstructor = __webpack_require__(199), $ArrayBuffer = buffer.ArrayBuffer, $DataView = buffer.DataView, $isView = $typed.ABV && ArrayBuffer.isView, $slice = $ArrayBuffer.prototype.slice, VIEW = $typed.VIEW, ARRAY_BUFFER = 'ArrayBuffer';
            $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
            $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
                isView: function isView(it) {
                    return $isView && $isView(it) || isObject(it) && VIEW in it;
                }
            });
            $export($export.P + $export.U + $export.F * __webpack_require__(5)(function () {
                return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
            }), ARRAY_BUFFER, {
                slice: function slice(start, end) {
                    if ($slice !== undefined && end === undefined)
                        return $slice.call(anObject(this), start);
                    var len = anObject(this).byteLength, first = toIndex(start, len), final = toIndex(end === undefined ? len : end, len), result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)), viewS = new $DataView(this), viewT = new $DataView(result), index = 0;
                    while (first < final) {
                        viewT.setUint8(index++, viewS.getUint8(first++));
                    }
                    return result;
                }
            });
            __webpack_require__(186)(ARRAY_BUFFER);
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), hide = __webpack_require__(8), uid = __webpack_require__(17), TYPED = uid('typed_array'), VIEW = uid('view'), ABV = !!(global.ArrayBuffer && global.DataView), CONSTR = ABV, i = 0, l = 9, Typed;
            var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
            while (i < l) {
                if (Typed = global[TypedArrayConstructors[i++]]) {
                    hide(Typed.prototype, TYPED, true);
                    hide(Typed.prototype, VIEW, true);
                } else
                    CONSTR = false;
            }
            module.exports = {
                ABV: ABV,
                CONSTR: CONSTR,
                TYPED: TYPED,
                VIEW: VIEW
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(2), DESCRIPTORS = __webpack_require__(4), LIBRARY = __webpack_require__(26), $typed = __webpack_require__(232), hide = __webpack_require__(8), redefineAll = __webpack_require__(202), fails = __webpack_require__(5), anInstance = __webpack_require__(197), toInteger = __webpack_require__(36), toLength = __webpack_require__(35), gOPN = __webpack_require__(48).f, dP = __webpack_require__(9).f, arrayFill = __webpack_require__(180), setToStringTag = __webpack_require__(22), ARRAY_BUFFER = 'ArrayBuffer', DATA_VIEW = 'DataView', PROTOTYPE = 'prototype', WRONG_LENGTH = 'Wrong length!', WRONG_INDEX = 'Wrong index!', $ArrayBuffer = global[ARRAY_BUFFER], $DataView = global[DATA_VIEW], Math = global.Math, RangeError = global.RangeError, Infinity = global.Infinity, BaseBuffer = $ArrayBuffer, abs = Math.abs, pow = Math.pow, floor = Math.floor, log = Math.log, LN2 = Math.LN2, BUFFER = 'buffer', BYTE_LENGTH = 'byteLength', BYTE_OFFSET = 'byteOffset', $BUFFER = DESCRIPTORS ? '_b' : BUFFER, $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH, $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
            var packIEEE754 = function (value, mLen, nBytes) {
                var buffer = Array(nBytes), eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0, i = 0, s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0, e, m, c;
                value = abs(value);
                if (value != value || value === Infinity) {
                    m = value != value ? 1 : 0;
                    e = eMax;
                } else {
                    e = floor(log(value) / LN2);
                    if (value * (c = pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    } else {
                        value += rt * pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * pow(2, eBias - 1) * pow(2, mLen);
                        e = 0;
                    }
                }
                for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
                e = e << mLen | m;
                eLen += mLen;
                for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
                buffer[--i] |= s * 128;
                return buffer;
            };
            var unpackIEEE754 = function (buffer, mLen, nBytes) {
                var eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = eLen - 7, i = nBytes - 1, s = buffer[i--], e = s & 127, m;
                s >>= 7;
                for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
                if (e === 0) {
                    e = 1 - eBias;
                } else if (e === eMax) {
                    return m ? NaN : s ? -Infinity : Infinity;
                } else {
                    m = m + pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * pow(2, e - mLen);
            };
            var unpackI32 = function (bytes) {
                return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
            };
            var packI8 = function (it) {
                return [it & 255];
            };
            var packI16 = function (it) {
                return [
                    it & 255,
                    it >> 8 & 255
                ];
            };
            var packI32 = function (it) {
                return [
                    it & 255,
                    it >> 8 & 255,
                    it >> 16 & 255,
                    it >> 24 & 255
                ];
            };
            var packF64 = function (it) {
                return packIEEE754(it, 52, 8);
            };
            var packF32 = function (it) {
                return packIEEE754(it, 23, 4);
            };
            var addGetter = function (C, key, internal) {
                dP(C[PROTOTYPE], key, {
                    get: function () {
                        return this[internal];
                    }
                });
            };
            var get = function (view, bytes, index, isLittleEndian) {
                var numIndex = +index, intIndex = toInteger(numIndex);
                if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])
                    throw RangeError(WRONG_INDEX);
                var store = view[$BUFFER]._b, start = intIndex + view[$OFFSET], pack = store.slice(start, start + bytes);
                return isLittleEndian ? pack : pack.reverse();
            };
            var set = function (view, bytes, index, conversion, value, isLittleEndian) {
                var numIndex = +index, intIndex = toInteger(numIndex);
                if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])
                    throw RangeError(WRONG_INDEX);
                var store = view[$BUFFER]._b, start = intIndex + view[$OFFSET], pack = conversion(+value);
                for (var i = 0; i < bytes; i++)
                    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
            };
            var validateArrayBufferArguments = function (that, length) {
                anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
                var numberLength = +length, byteLength = toLength(numberLength);
                if (numberLength != byteLength)
                    throw RangeError(WRONG_LENGTH);
                return byteLength;
            };
            if (!$typed.ABV) {
                $ArrayBuffer = function ArrayBuffer(length) {
                    var byteLength = validateArrayBufferArguments(this, length);
                    this._b = arrayFill.call(Array(byteLength), 0);
                    this[$LENGTH] = byteLength;
                };
                $DataView = function DataView(buffer, byteOffset, byteLength) {
                    anInstance(this, $DataView, DATA_VIEW);
                    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                    var bufferLength = buffer[$LENGTH], offset = toInteger(byteOffset);
                    if (offset < 0 || offset > bufferLength)
                        throw RangeError('Wrong offset!');
                    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
                    if (offset + byteLength > bufferLength)
                        throw RangeError(WRONG_LENGTH);
                    this[$BUFFER] = buffer;
                    this[$OFFSET] = offset;
                    this[$LENGTH] = byteLength;
                };
                if (DESCRIPTORS) {
                    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
                    addGetter($DataView, BUFFER, '_b');
                    addGetter($DataView, BYTE_LENGTH, '_l');
                    addGetter($DataView, BYTE_OFFSET, '_o');
                }
                redefineAll($DataView[PROTOTYPE], {
                    getInt8: function getInt8(byteOffset) {
                        return get(this, 1, byteOffset)[0] << 24 >> 24;
                    },
                    getUint8: function getUint8(byteOffset) {
                        return get(this, 1, byteOffset)[0];
                    },
                    getInt16: function getInt16(byteOffset) {
                        var bytes = get(this, 2, byteOffset, arguments[1]);
                        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                    },
                    getUint16: function getUint16(byteOffset) {
                        var bytes = get(this, 2, byteOffset, arguments[1]);
                        return bytes[1] << 8 | bytes[0];
                    },
                    getInt32: function getInt32(byteOffset) {
                        return unpackI32(get(this, 4, byteOffset, arguments[1]));
                    },
                    getUint32: function getUint32(byteOffset) {
                        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
                    },
                    getFloat32: function getFloat32(byteOffset) {
                        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
                    },
                    getFloat64: function getFloat64(byteOffset) {
                        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
                    },
                    setInt8: function setInt8(byteOffset, value) {
                        set(this, 1, byteOffset, packI8, value);
                    },
                    setUint8: function setUint8(byteOffset, value) {
                        set(this, 1, byteOffset, packI8, value);
                    },
                    setInt16: function setInt16(byteOffset, value) {
                        set(this, 2, byteOffset, packI16, value, arguments[2]);
                    },
                    setUint16: function setUint16(byteOffset, value) {
                        set(this, 2, byteOffset, packI16, value, arguments[2]);
                    },
                    setInt32: function setInt32(byteOffset, value) {
                        set(this, 4, byteOffset, packI32, value, arguments[2]);
                    },
                    setUint32: function setUint32(byteOffset, value) {
                        set(this, 4, byteOffset, packI32, value, arguments[2]);
                    },
                    setFloat32: function setFloat32(byteOffset, value) {
                        set(this, 4, byteOffset, packF32, value, arguments[2]);
                    },
                    setFloat64: function setFloat64(byteOffset, value) {
                        set(this, 8, byteOffset, packF64, value, arguments[2]);
                    }
                });
            } else {
                if (!fails(function () {
                        new $ArrayBuffer();
                    }) || !fails(function () {
                        new $ArrayBuffer(0.5);
                    })) {
                    $ArrayBuffer = function ArrayBuffer(length) {
                        return new BaseBuffer(validateArrayBufferArguments(this, length));
                    };
                    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
                    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
                        if (!((key = keys[j++]) in $ArrayBuffer))
                            hide($ArrayBuffer, key, BaseBuffer[key]);
                    }
                    ;
                    if (!LIBRARY)
                        ArrayBufferProto.constructor = $ArrayBuffer;
                }
                var view = new $DataView(new $ArrayBuffer(2)), $setInt8 = $DataView[PROTOTYPE].setInt8;
                view.setInt8(0, 2147483648);
                view.setInt8(1, 2147483649);
                if (view.getInt8(0) || !view.getInt8(1))
                    redefineAll($DataView[PROTOTYPE], {
                        setInt8: function setInt8(byteOffset, value) {
                            $setInt8.call(this, byteOffset, value << 24 >> 24);
                        },
                        setUint8: function setUint8(byteOffset, value) {
                            $setInt8.call(this, byteOffset, value << 24 >> 24);
                        }
                    }, true);
            }
            setToStringTag($ArrayBuffer, ARRAY_BUFFER);
            setToStringTag($DataView, DATA_VIEW);
            hide($DataView[PROTOTYPE], $typed.VIEW, true);
            exports[ARRAY_BUFFER] = $ArrayBuffer;
            exports[DATA_VIEW] = $DataView;
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.G + $export.W + $export.F * !__webpack_require__(232).ABV, { DataView: __webpack_require__(233).DataView });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Int8', 1, function (init) {
                return function Int8Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            if (__webpack_require__(4)) {
                var LIBRARY = __webpack_require__(26), global = __webpack_require__(2), fails = __webpack_require__(5), $export = __webpack_require__(6), $typed = __webpack_require__(232), $buffer = __webpack_require__(233), ctx = __webpack_require__(18), anInstance = __webpack_require__(197), propertyDesc = __webpack_require__(15), hide = __webpack_require__(8), redefineAll = __webpack_require__(202), toInteger = __webpack_require__(36), toLength = __webpack_require__(35), toIndex = __webpack_require__(37), toPrimitive = __webpack_require__(14), has = __webpack_require__(3), same = __webpack_require__(69), classof = __webpack_require__(73), isObject = __webpack_require__(11), toObject = __webpack_require__(56), isArrayIter = __webpack_require__(154), create = __webpack_require__(44), getPrototypeOf = __webpack_require__(57), gOPN = __webpack_require__(48).f, getIterFn = __webpack_require__(156), uid = __webpack_require__(17), wks = __webpack_require__(23), createArrayMethod = __webpack_require__(164), createArrayIncludes = __webpack_require__(34), speciesConstructor = __webpack_require__(199), ArrayIterators = __webpack_require__(183), Iterators = __webpack_require__(135), $iterDetect = __webpack_require__(157), setSpecies = __webpack_require__(186), arrayFill = __webpack_require__(180), arrayCopyWithin = __webpack_require__(177), $DP = __webpack_require__(9), $GOPD = __webpack_require__(49), dP = $DP.f, gOPD = $GOPD.f, RangeError = global.RangeError, TypeError = global.TypeError, Uint8Array = global.Uint8Array, ARRAY_BUFFER = 'ArrayBuffer', SHARED_BUFFER = 'Shared' + ARRAY_BUFFER, BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT', PROTOTYPE = 'prototype', ArrayProto = Array[PROTOTYPE], $ArrayBuffer = $buffer.ArrayBuffer, $DataView = $buffer.DataView, arrayForEach = createArrayMethod(0), arrayFilter = createArrayMethod(2), arraySome = createArrayMethod(3), arrayEvery = createArrayMethod(4), arrayFind = createArrayMethod(5), arrayFindIndex = createArrayMethod(6), arrayIncludes = createArrayIncludes(true), arrayIndexOf = createArrayIncludes(false), arrayValues = ArrayIterators.values, arrayKeys = ArrayIterators.keys, arrayEntries = ArrayIterators.entries, arrayLastIndexOf = ArrayProto.lastIndexOf, arrayReduce = ArrayProto.reduce, arrayReduceRight = ArrayProto.reduceRight, arrayJoin = ArrayProto.join, arraySort = ArrayProto.sort, arraySlice = ArrayProto.slice, arrayToString = ArrayProto.toString, arrayToLocaleString = ArrayProto.toLocaleString, ITERATOR = wks('iterator'), TAG = wks('toStringTag'), TYPED_CONSTRUCTOR = uid('typed_constructor'), DEF_CONSTRUCTOR = uid('def_constructor'), ALL_CONSTRUCTORS = $typed.CONSTR, TYPED_ARRAY = $typed.TYPED, VIEW = $typed.VIEW, WRONG_LENGTH = 'Wrong length!';
                var $map = createArrayMethod(1, function (O, length) {
                    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
                });
                var LITTLE_ENDIAN = fails(function () {
                    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
                });
                var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
                    new Uint8Array(1).set({});
                });
                var strictToLength = function (it, SAME) {
                    if (it === undefined)
                        throw TypeError(WRONG_LENGTH);
                    var number = +it, length = toLength(it);
                    if (SAME && !same(number, length))
                        throw RangeError(WRONG_LENGTH);
                    return length;
                };
                var toOffset = function (it, BYTES) {
                    var offset = toInteger(it);
                    if (offset < 0 || offset % BYTES)
                        throw RangeError('Wrong offset!');
                    return offset;
                };
                var validate = function (it) {
                    if (isObject(it) && TYPED_ARRAY in it)
                        return it;
                    throw TypeError(it + ' is not a typed array!');
                };
                var allocate = function (C, length) {
                    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
                        throw TypeError('It is not a typed array constructor!');
                    }
                    return new C(length);
                };
                var speciesFromList = function (O, list) {
                    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
                };
                var fromList = function (C, list) {
                    var index = 0, length = list.length, result = allocate(C, length);
                    while (length > index)
                        result[index] = list[index++];
                    return result;
                };
                var addGetter = function (it, key, internal) {
                    dP(it, key, {
                        get: function () {
                            return this._d[internal];
                        }
                    });
                };
                var $from = function from(source) {
                    var O = toObject(source), aLen = arguments.length, mapfn = aLen > 1 ? arguments[1] : undefined, mapping = mapfn !== undefined, iterFn = getIterFn(O), i, length, values, result, step, iterator;
                    if (iterFn != undefined && !isArrayIter(iterFn)) {
                        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
                            values.push(step.value);
                        }
                        O = values;
                    }
                    if (mapping && aLen > 2)
                        mapfn = ctx(mapfn, arguments[2], 2);
                    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
                        result[i] = mapping ? mapfn(O[i], i) : O[i];
                    }
                    return result;
                };
                var $of = function of() {
                    var index = 0, length = arguments.length, result = allocate(this, length);
                    while (length > index)
                        result[index] = arguments[index++];
                    return result;
                };
                var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
                    arrayToLocaleString.call(new Uint8Array(1));
                });
                var $toLocaleString = function toLocaleString() {
                    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
                };
                var proto = {
                    copyWithin: function copyWithin(target, start) {
                        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
                    },
                    every: function every(callbackfn) {
                        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    fill: function fill(value) {
                        return arrayFill.apply(validate(this), arguments);
                    },
                    filter: function filter(callbackfn) {
                        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
                    },
                    find: function find(predicate) {
                        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    findIndex: function findIndex(predicate) {
                        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    forEach: function forEach(callbackfn) {
                        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    indexOf: function indexOf(searchElement) {
                        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    includes: function includes(searchElement) {
                        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    join: function join(separator) {
                        return arrayJoin.apply(validate(this), arguments);
                    },
                    lastIndexOf: function lastIndexOf(searchElement) {
                        return arrayLastIndexOf.apply(validate(this), arguments);
                    },
                    map: function map(mapfn) {
                        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    reduce: function reduce(callbackfn) {
                        return arrayReduce.apply(validate(this), arguments);
                    },
                    reduceRight: function reduceRight(callbackfn) {
                        return arrayReduceRight.apply(validate(this), arguments);
                    },
                    reverse: function reverse() {
                        var that = this, length = validate(that).length, middle = Math.floor(length / 2), index = 0, value;
                        while (index < middle) {
                            value = that[index];
                            that[index++] = that[--length];
                            that[length] = value;
                        }
                        return that;
                    },
                    some: function some(callbackfn) {
                        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    sort: function sort(comparefn) {
                        return arraySort.call(validate(this), comparefn);
                    },
                    subarray: function subarray(begin, end) {
                        var O = validate(this), length = O.length, $begin = toIndex(begin, length);
                        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
                    }
                };
                var $slice = function slice(start, end) {
                    return speciesFromList(this, arraySlice.call(validate(this), start, end));
                };
                var $set = function set(arrayLike) {
                    validate(this);
                    var offset = toOffset(arguments[1], 1), length = this.length, src = toObject(arrayLike), len = toLength(src.length), index = 0;
                    if (len + offset > length)
                        throw RangeError(WRONG_LENGTH);
                    while (index < len)
                        this[offset + index] = src[index++];
                };
                var $iterators = {
                    entries: function entries() {
                        return arrayEntries.call(validate(this));
                    },
                    keys: function keys() {
                        return arrayKeys.call(validate(this));
                    },
                    values: function values() {
                        return arrayValues.call(validate(this));
                    }
                };
                var isTAIndex = function (target, key) {
                    return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
                };
                var $getDesc = function getOwnPropertyDescriptor(target, key) {
                    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
                };
                var $setDesc = function defineProperty(target, key, desc) {
                    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
                        target[key] = desc.value;
                        return target;
                    } else
                        return dP(target, key, desc);
                };
                if (!ALL_CONSTRUCTORS) {
                    $GOPD.f = $getDesc;
                    $DP.f = $setDesc;
                }
                $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
                    getOwnPropertyDescriptor: $getDesc,
                    defineProperty: $setDesc
                });
                if (fails(function () {
                        arrayToString.call({});
                    })) {
                    arrayToString = arrayToLocaleString = function toString() {
                        return arrayJoin.call(this);
                    };
                }
                var $TypedArrayPrototype$ = redefineAll({}, proto);
                redefineAll($TypedArrayPrototype$, $iterators);
                hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
                redefineAll($TypedArrayPrototype$, {
                    slice: $slice,
                    set: $set,
                    constructor: function () {
                    },
                    toString: arrayToString,
                    toLocaleString: $toLocaleString
                });
                addGetter($TypedArrayPrototype$, 'buffer', 'b');
                addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
                addGetter($TypedArrayPrototype$, 'byteLength', 'l');
                addGetter($TypedArrayPrototype$, 'length', 'e');
                dP($TypedArrayPrototype$, TAG, {
                    get: function () {
                        return this[TYPED_ARRAY];
                    }
                });
                module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
                    CLAMPED = !!CLAMPED;
                    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array', ISNT_UINT8 = NAME != 'Uint8Array', GETTER = 'get' + KEY, SETTER = 'set' + KEY, TypedArray = global[NAME], Base = TypedArray || {}, TAC = TypedArray && getPrototypeOf(TypedArray), FORCED = !TypedArray || !$typed.ABV, O = {}, TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
                    var getter = function (that, index) {
                        var data = that._d;
                        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
                    };
                    var setter = function (that, index, value) {
                        var data = that._d;
                        if (CLAMPED)
                            value = (value = Math.round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
                        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
                    };
                    var addElement = function (that, index) {
                        dP(that, index, {
                            get: function () {
                                return getter(this, index);
                            },
                            set: function (value) {
                                return setter(this, index, value);
                            },
                            enumerable: true
                        });
                    };
                    if (FORCED) {
                        TypedArray = wrapper(function (that, data, $offset, $length) {
                            anInstance(that, TypedArray, NAME, '_d');
                            var index = 0, offset = 0, buffer, byteLength, length, klass;
                            if (!isObject(data)) {
                                length = strictToLength(data, true);
                                byteLength = length * BYTES;
                                buffer = new $ArrayBuffer(byteLength);
                            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                                buffer = data;
                                offset = toOffset($offset, BYTES);
                                var $len = data.byteLength;
                                if ($length === undefined) {
                                    if ($len % BYTES)
                                        throw RangeError(WRONG_LENGTH);
                                    byteLength = $len - offset;
                                    if (byteLength < 0)
                                        throw RangeError(WRONG_LENGTH);
                                } else {
                                    byteLength = toLength($length) * BYTES;
                                    if (byteLength + offset > $len)
                                        throw RangeError(WRONG_LENGTH);
                                }
                                length = byteLength / BYTES;
                            } else if (TYPED_ARRAY in data) {
                                return fromList(TypedArray, data);
                            } else {
                                return $from.call(TypedArray, data);
                            }
                            hide(that, '_d', {
                                b: buffer,
                                o: offset,
                                l: byteLength,
                                e: length,
                                v: new $DataView(buffer)
                            });
                            while (index < length)
                                addElement(that, index++);
                        });
                        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
                        hide(TypedArrayPrototype, 'constructor', TypedArray);
                    } else if (!$iterDetect(function (iter) {
                            new TypedArray(null);
                            new TypedArray(iter);
                        }, true)) {
                        TypedArray = wrapper(function (that, data, $offset, $length) {
                            anInstance(that, TypedArray, NAME);
                            var klass;
                            if (!isObject(data))
                                return new Base(strictToLength(data, ISNT_UINT8));
                            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                                return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
                            }
                            if (TYPED_ARRAY in data)
                                return fromList(TypedArray, data);
                            return $from.call(TypedArray, data);
                        });
                        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
                            if (!(key in TypedArray))
                                hide(TypedArray, key, Base[key]);
                        });
                        TypedArray[PROTOTYPE] = TypedArrayPrototype;
                        if (!LIBRARY)
                            TypedArrayPrototype.constructor = TypedArray;
                    }
                    var $nativeIterator = TypedArrayPrototype[ITERATOR], CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined), $iterator = $iterators.values;
                    hide(TypedArray, TYPED_CONSTRUCTOR, true);
                    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
                    hide(TypedArrayPrototype, VIEW, true);
                    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
                    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
                        dP(TypedArrayPrototype, TAG, {
                            get: function () {
                                return NAME;
                            }
                        });
                    }
                    O[NAME] = TypedArray;
                    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
                    $export($export.S, NAME, {
                        BYTES_PER_ELEMENT: BYTES,
                        from: $from,
                        of: $of
                    });
                    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype))
                        hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
                    $export($export.P, NAME, proto);
                    setSpecies(NAME);
                    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
                    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
                    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
                    $export($export.P + $export.F * fails(function () {
                        new TypedArray(1).slice();
                    }), NAME, { slice: $slice });
                    $export($export.P + $export.F * (fails(function () {
                        return [
                            1,
                            2
                        ].toLocaleString() != new TypedArray([
                            1,
                            2
                        ]).toLocaleString();
                    }) || !fails(function () {
                        TypedArrayPrototype.toLocaleString.call([
                            1,
                            2
                        ]);
                    })), NAME, { toLocaleString: $toLocaleString });
                    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
                    if (!LIBRARY && !CORRECT_ITER_NAME)
                        hide(TypedArrayPrototype, ITERATOR, $iterator);
                };
            } else
                module.exports = function () {
                };
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Uint8', 1, function (init) {
                return function Uint8Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Uint8', 1, function (init) {
                return function Uint8ClampedArray(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            }, true);
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Int16', 2, function (init) {
                return function Int16Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Uint16', 2, function (init) {
                return function Uint16Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Int32', 4, function (init) {
                return function Int32Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Uint32', 4, function (init) {
                return function Uint32Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Float32', 4, function (init) {
                return function Float32Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(236)('Float64', 8, function (init) {
                return function Float64Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $includes = __webpack_require__(34)(true);
            $export($export.P, 'Array', {
                includes: function includes(el) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__(178)('includes');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $at = __webpack_require__(125)(true);
            $export($export.P, 'String', {
                at: function at(pos) {
                    return $at(this, pos);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $pad = __webpack_require__(248);
            $export($export.P, 'String', {
                padStart: function padStart(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var toLength = __webpack_require__(35), repeat = __webpack_require__(85), defined = __webpack_require__(33);
            module.exports = function (that, maxLength, fillString, left) {
                var S = String(defined(that)), stringLength = S.length, fillStr = fillString === undefined ? ' ' : String(fillString), intMaxLength = toLength(maxLength);
                if (intMaxLength <= stringLength || fillStr == '')
                    return S;
                var fillLen = intMaxLength - stringLength, stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
                if (stringFiller.length > fillLen)
                    stringFiller = stringFiller.slice(0, fillLen);
                return left ? stringFiller + S : S + stringFiller;
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), $pad = __webpack_require__(248);
            $export($export.P, 'String', {
                padEnd: function padEnd(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(81)('trimLeft', function ($trim) {
                return function trimLeft() {
                    return $trim(this, 1);
                };
            }, 'trimStart');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(81)('trimRight', function ($trim) {
                return function trimRight() {
                    return $trim(this, 2);
                };
            }, 'trimEnd');
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), defined = __webpack_require__(33), toLength = __webpack_require__(35), isRegExp = __webpack_require__(128), getFlags = __webpack_require__(188), RegExpProto = RegExp.prototype;
            var $RegExpStringIterator = function (regexp, string) {
                this._r = regexp;
                this._s = string;
            };
            __webpack_require__(136)($RegExpStringIterator, 'RegExp String', function next() {
                var match = this._r.exec(this._s);
                return {
                    value: match,
                    done: match === null
                };
            });
            $export($export.P, 'String', {
                matchAll: function matchAll(regexp) {
                    defined(this);
                    if (!isRegExp(regexp))
                        throw TypeError(regexp + ' is not a regexp!');
                    var S = String(this), flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp), rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
                    rx.lastIndex = toLength(regexp.lastIndex);
                    return new $RegExpStringIterator(rx, S);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(25)('asyncIterator');
        },
        function (module, exports, __webpack_require__) {
            __webpack_require__(25)('observable');
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), ownKeys = __webpack_require__(221), toIObject = __webpack_require__(30), gOPD = __webpack_require__(49), createProperty = __webpack_require__(155);
            $export($export.S, 'Object', {
                getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                    var O = toIObject(object), getDesc = gOPD.f, keys = ownKeys(O), result = {}, i = 0, key;
                    while (keys.length > i)
                        createProperty(result, key = keys[i++], getDesc(O, key));
                    return result;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $values = __webpack_require__(257)(false);
            $export($export.S, 'Object', {
                values: function values(it) {
                    return $values(it);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var getKeys = __webpack_require__(28), toIObject = __webpack_require__(30), isEnum = __webpack_require__(42).f;
            module.exports = function (isEntries) {
                return function (it) {
                    var O = toIObject(it), keys = getKeys(O), length = keys.length, i = 0, result = [], key;
                    while (length > i)
                        if (isEnum.call(O, key = keys[i++])) {
                            result.push(isEntries ? [
                                key,
                                O[key]
                            ] : O[key]);
                        }
                    return result;
                };
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $entries = __webpack_require__(257)(true);
            $export($export.S, 'Object', {
                entries: function entries(it) {
                    return $entries(it);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toObject = __webpack_require__(56), aFunction = __webpack_require__(19), $defineProperty = __webpack_require__(9);
            __webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
                __defineGetter__: function __defineGetter__(P, getter) {
                    $defineProperty.f(toObject(this), P, {
                        get: aFunction(getter),
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        },
        function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(26) || !__webpack_require__(5)(function () {
                var K = Math.random();
                __defineSetter__.call(null, K, function () {
                });
                delete __webpack_require__(2)[K];
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toObject = __webpack_require__(56), aFunction = __webpack_require__(19), $defineProperty = __webpack_require__(9);
            __webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
                __defineSetter__: function __defineSetter__(P, setter) {
                    $defineProperty.f(toObject(this), P, {
                        set: aFunction(setter),
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toObject = __webpack_require__(56), toPrimitive = __webpack_require__(14), getPrototypeOf = __webpack_require__(57), getOwnPropertyDescriptor = __webpack_require__(49).f;
            __webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
                __lookupGetter__: function __lookupGetter__(P) {
                    var O = toObject(this), K = toPrimitive(P, true), D;
                    do {
                        if (D = getOwnPropertyDescriptor(O, K))
                            return D.get;
                    } while (O = getPrototypeOf(O));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), toObject = __webpack_require__(56), toPrimitive = __webpack_require__(14), getPrototypeOf = __webpack_require__(57), getOwnPropertyDescriptor = __webpack_require__(49).f;
            __webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
                __lookupSetter__: function __lookupSetter__(P) {
                    var O = toObject(this), K = toPrimitive(P, true), D;
                    do {
                        if (D = getOwnPropertyDescriptor(O, K))
                            return D.set;
                    } while (O = getPrototypeOf(O));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(265)('Map') });
        },
        function (module, exports, __webpack_require__) {
            var classof = __webpack_require__(73), from = __webpack_require__(266);
            module.exports = function (NAME) {
                return function toJSON() {
                    if (classof(this) != NAME)
                        throw TypeError(NAME + '#toJSON isn\'t generic');
                    return from(this);
                };
            };
        },
        function (module, exports, __webpack_require__) {
            var forOf = __webpack_require__(198);
            module.exports = function (iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(265)('Set') });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'System', { global: __webpack_require__(2) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), cof = __webpack_require__(32);
            $export($export.S, 'Error', {
                isError: function isError(it) {
                    return cof(it) === 'Error';
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                iaddh: function iaddh(x0, x1, y0, y1) {
                    var $x0 = x0 >>> 0, $x1 = x1 >>> 0, $y0 = y0 >>> 0;
                    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                isubh: function isubh(x0, x1, y0, y1) {
                    var $x0 = x0 >>> 0, $x1 = x1 >>> 0, $y0 = y0 >>> 0;
                    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                imulh: function imulh(u, v) {
                    var UINT16 = 65535, $u = +u, $v = +v, u0 = $u & UINT16, v0 = $v & UINT16, u1 = $u >> 16, v1 = $v >> 16, t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S, 'Math', {
                umulh: function umulh(u, v) {
                    var UINT16 = 65535, $u = +u, $v = +v, u0 = $u & UINT16, v0 = $v & UINT16, u1 = $u >>> 16, v1 = $v >>> 16, t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), toMetaKey = metadata.key, ordinaryDefineOwnMetadata = metadata.set;
            metadata.exp({
                defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
                    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var Map = __webpack_require__(203), $export = __webpack_require__(6), shared = __webpack_require__(21)('metadata'), store = shared.store || (shared.store = new (__webpack_require__(207))());
            var getOrCreateMetadataMap = function (target, targetKey, create) {
                var targetMetadata = store.get(target);
                if (!targetMetadata) {
                    if (!create)
                        return undefined;
                    store.set(target, targetMetadata = new Map());
                }
                var keyMetadata = targetMetadata.get(targetKey);
                if (!keyMetadata) {
                    if (!create)
                        return undefined;
                    targetMetadata.set(targetKey, keyMetadata = new Map());
                }
                return keyMetadata;
            };
            var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
                var metadataMap = getOrCreateMetadataMap(O, P, false);
                return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
            };
            var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
                var metadataMap = getOrCreateMetadataMap(O, P, false);
                return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
            };
            var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
                getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
            };
            var ordinaryOwnMetadataKeys = function (target, targetKey) {
                var metadataMap = getOrCreateMetadataMap(target, targetKey, false), keys = [];
                if (metadataMap)
                    metadataMap.forEach(function (_, key) {
                        keys.push(key);
                    });
                return keys;
            };
            var toMetaKey = function (it) {
                return it === undefined || typeof it == 'symbol' ? it : String(it);
            };
            var exp = function (O) {
                $export($export.S, 'Reflect', O);
            };
            module.exports = {
                store: store,
                map: getOrCreateMetadataMap,
                has: ordinaryHasOwnMetadata,
                get: ordinaryGetOwnMetadata,
                set: ordinaryDefineOwnMetadata,
                keys: ordinaryOwnMetadataKeys,
                key: toMetaKey,
                exp: exp
            };
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), toMetaKey = metadata.key, getOrCreateMetadataMap = metadata.map, store = metadata.store;
            metadata.exp({
                deleteMetadata: function deleteMetadata(metadataKey, target) {
                    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]), metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
                    if (metadataMap === undefined || !metadataMap['delete'](metadataKey))
                        return false;
                    if (metadataMap.size)
                        return true;
                    var targetMetadata = store.get(target);
                    targetMetadata['delete'](targetKey);
                    return !!targetMetadata.size || store['delete'](target);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), getPrototypeOf = __webpack_require__(57), ordinaryHasOwnMetadata = metadata.has, ordinaryGetOwnMetadata = metadata.get, toMetaKey = metadata.key;
            var ordinaryGetMetadata = function (MetadataKey, O, P) {
                var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return ordinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = getPrototypeOf(O);
                return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
            };
            metadata.exp({
                getMetadata: function getMetadata(metadataKey, target) {
                    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var Set = __webpack_require__(206), from = __webpack_require__(266), metadata = __webpack_require__(275), anObject = __webpack_require__(10), getPrototypeOf = __webpack_require__(57), ordinaryOwnMetadataKeys = metadata.keys, toMetaKey = metadata.key;
            var ordinaryMetadataKeys = function (O, P) {
                var oKeys = ordinaryOwnMetadataKeys(O, P), parent = getPrototypeOf(O);
                if (parent === null)
                    return oKeys;
                var pKeys = ordinaryMetadataKeys(parent, P);
                return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
            };
            metadata.exp({
                getMetadataKeys: function getMetadataKeys(target) {
                    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), ordinaryGetOwnMetadata = metadata.get, toMetaKey = metadata.key;
            metadata.exp({
                getOwnMetadata: function getOwnMetadata(metadataKey, target) {
                    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), ordinaryOwnMetadataKeys = metadata.keys, toMetaKey = metadata.key;
            metadata.exp({
                getOwnMetadataKeys: function getOwnMetadataKeys(target) {
                    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), getPrototypeOf = __webpack_require__(57), ordinaryHasOwnMetadata = metadata.has, toMetaKey = metadata.key;
            var ordinaryHasMetadata = function (MetadataKey, O, P) {
                var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return true;
                var parent = getPrototypeOf(O);
                return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
            };
            metadata.exp({
                hasMetadata: function hasMetadata(metadataKey, target) {
                    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), ordinaryHasOwnMetadata = metadata.has, toMetaKey = metadata.key;
            metadata.exp({
                hasOwnMetadata: function hasOwnMetadata(metadataKey, target) {
                    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var metadata = __webpack_require__(275), anObject = __webpack_require__(10), aFunction = __webpack_require__(19), toMetaKey = metadata.key, ordinaryDefineOwnMetadata = metadata.set;
            metadata.exp({
                metadata: function metadata(metadataKey, metadataValue) {
                    return function decorator(target, targetKey) {
                        ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
                    };
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), microtask = __webpack_require__(201)(), process = __webpack_require__(2).process, isNode = __webpack_require__(32)(process) == 'process';
            $export($export.G, {
                asap: function asap(fn) {
                    var domain = isNode && process.domain;
                    microtask(domain ? domain.bind(fn) : fn);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6), global = __webpack_require__(2), core = __webpack_require__(7), microtask = __webpack_require__(201)(), OBSERVABLE = __webpack_require__(23)('observable'), aFunction = __webpack_require__(19), anObject = __webpack_require__(10), anInstance = __webpack_require__(197), redefineAll = __webpack_require__(202), hide = __webpack_require__(8), forOf = __webpack_require__(198), RETURN = forOf.RETURN;
            var getMethod = function (fn) {
                return fn == null ? undefined : aFunction(fn);
            };
            var cleanupSubscription = function (subscription) {
                var cleanup = subscription._c;
                if (cleanup) {
                    subscription._c = undefined;
                    cleanup();
                }
            };
            var subscriptionClosed = function (subscription) {
                return subscription._o === undefined;
            };
            var closeSubscription = function (subscription) {
                if (!subscriptionClosed(subscription)) {
                    subscription._o = undefined;
                    cleanupSubscription(subscription);
                }
            };
            var Subscription = function (observer, subscriber) {
                anObject(observer);
                this._c = undefined;
                this._o = observer;
                observer = new SubscriptionObserver(this);
                try {
                    var cleanup = subscriber(observer), subscription = cleanup;
                    if (cleanup != null) {
                        if (typeof cleanup.unsubscribe === 'function')
                            cleanup = function () {
                                subscription.unsubscribe();
                            };
                        else
                            aFunction(cleanup);
                        this._c = cleanup;
                    }
                } catch (e) {
                    observer.error(e);
                    return;
                }
                if (subscriptionClosed(this))
                    cleanupSubscription(this);
            };
            Subscription.prototype = redefineAll({}, {
                unsubscribe: function unsubscribe() {
                    closeSubscription(this);
                }
            });
            var SubscriptionObserver = function (subscription) {
                this._s = subscription;
            };
            SubscriptionObserver.prototype = redefineAll({}, {
                next: function next(value) {
                    var subscription = this._s;
                    if (!subscriptionClosed(subscription)) {
                        var observer = subscription._o;
                        try {
                            var m = getMethod(observer.next);
                            if (m)
                                return m.call(observer, value);
                        } catch (e) {
                            try {
                                closeSubscription(subscription);
                            } finally {
                                throw e;
                            }
                        }
                    }
                },
                error: function error(value) {
                    var subscription = this._s;
                    if (subscriptionClosed(subscription))
                        throw value;
                    var observer = subscription._o;
                    subscription._o = undefined;
                    try {
                        var m = getMethod(observer.error);
                        if (!m)
                            throw value;
                        value = m.call(observer, value);
                    } catch (e) {
                        try {
                            cleanupSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    }
                    cleanupSubscription(subscription);
                    return value;
                },
                complete: function complete(value) {
                    var subscription = this._s;
                    if (!subscriptionClosed(subscription)) {
                        var observer = subscription._o;
                        subscription._o = undefined;
                        try {
                            var m = getMethod(observer.complete);
                            value = m ? m.call(observer, value) : undefined;
                        } catch (e) {
                            try {
                                cleanupSubscription(subscription);
                            } finally {
                                throw e;
                            }
                        }
                        cleanupSubscription(subscription);
                        return value;
                    }
                }
            });
            var $Observable = function Observable(subscriber) {
                anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
            };
            redefineAll($Observable.prototype, {
                subscribe: function subscribe(observer) {
                    return new Subscription(observer, this._f);
                },
                forEach: function forEach(fn) {
                    var that = this;
                    return new (core.Promise || global.Promise)(function (resolve, reject) {
                        aFunction(fn);
                        var subscription = that.subscribe({
                            next: function (value) {
                                try {
                                    return fn(value);
                                } catch (e) {
                                    reject(e);
                                    subscription.unsubscribe();
                                }
                            },
                            error: reject,
                            complete: resolve
                        });
                    });
                }
            });
            redefineAll($Observable, {
                from: function from(x) {
                    var C = typeof this === 'function' ? this : $Observable;
                    var method = getMethod(anObject(x)[OBSERVABLE]);
                    if (method) {
                        var observable = anObject(method.call(x));
                        return observable.constructor === C ? observable : new C(function (observer) {
                            return observable.subscribe(observer);
                        });
                    }
                    return new C(function (observer) {
                        var done = false;
                        microtask(function () {
                            if (!done) {
                                try {
                                    if (forOf(x, false, function (it) {
                                            observer.next(it);
                                            if (done)
                                                return RETURN;
                                        }) === RETURN)
                                        return;
                                } catch (e) {
                                    if (done)
                                        throw e;
                                    observer.error(e);
                                    return;
                                }
                                observer.complete();
                            }
                        });
                        return function () {
                            done = true;
                        };
                    });
                },
                of: function of() {
                    for (var i = 0, l = arguments.length, items = Array(l); i < l;)
                        items[i] = arguments[i++];
                    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
                        var done = false;
                        microtask(function () {
                            if (!done) {
                                for (var i = 0; i < items.length; ++i) {
                                    observer.next(items[i]);
                                    if (done)
                                        return;
                                }
                                observer.complete();
                            }
                        });
                        return function () {
                            done = true;
                        };
                    });
                }
            });
            hide($Observable.prototype, OBSERVABLE, function () {
                return this;
            });
            $export($export.G, { Observable: $Observable });
            __webpack_require__(186)('Observable');
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $task = __webpack_require__(200);
            $export($export.G + $export.B, {
                setImmediate: $task.set,
                clearImmediate: $task.clear
            });
        },
        function (module, exports, __webpack_require__) {
            var $iterators = __webpack_require__(183), redefine = __webpack_require__(16), global = __webpack_require__(2), hide = __webpack_require__(8), Iterators = __webpack_require__(135), wks = __webpack_require__(23), ITERATOR = wks('iterator'), TO_STRING_TAG = wks('toStringTag'), ArrayValues = Iterators.Array;
            for (var collections = [
                        'NodeList',
                        'DOMTokenList',
                        'MediaList',
                        'StyleSheetList',
                        'CSSRuleList'
                    ], i = 0; i < 5; i++) {
                var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype, key;
                if (proto) {
                    if (!proto[ITERATOR])
                        hide(proto, ITERATOR, ArrayValues);
                    if (!proto[TO_STRING_TAG])
                        hide(proto, TO_STRING_TAG, NAME);
                    Iterators[NAME] = ArrayValues;
                    for (key in $iterators)
                        if (!proto[key])
                            redefine(proto, key, $iterators[key], true);
                }
            }
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), $export = __webpack_require__(6), invoke = __webpack_require__(76), partial = __webpack_require__(289), navigator = global.navigator, MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent);
            var wrap = function (set) {
                return MSIE ? function (fn, time) {
                    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
                } : set;
            };
            $export($export.G + $export.B + $export.F * MSIE, {
                setTimeout: wrap(global.setTimeout),
                setInterval: wrap(global.setInterval)
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var path = __webpack_require__(290), invoke = __webpack_require__(76), aFunction = __webpack_require__(19);
            module.exports = function () {
                var fn = aFunction(this), length = arguments.length, pargs = Array(length), i = 0, _ = path._, holder = false;
                while (length > i)
                    if ((pargs[i] = arguments[i++]) === _)
                        holder = true;
                return function () {
                    var that = this, aLen = arguments.length, j = 0, k = 0, args;
                    if (!holder && !aLen)
                        return invoke(fn, pargs, that);
                    args = pargs.slice();
                    if (holder)
                        for (; length > j; j++)
                            if (args[j] === _)
                                args[j] = arguments[k++];
                    while (aLen > k)
                        args.push(arguments[k++]);
                    return invoke(fn, args, that);
                };
            };
        },
        function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(2);
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var ctx = __webpack_require__(18), $export = __webpack_require__(6), createDesc = __webpack_require__(15), assign = __webpack_require__(67), create = __webpack_require__(44), getPrototypeOf = __webpack_require__(57), getKeys = __webpack_require__(28), dP = __webpack_require__(9), keyOf = __webpack_require__(27), aFunction = __webpack_require__(19), forOf = __webpack_require__(198), isIterable = __webpack_require__(292), $iterCreate = __webpack_require__(136), step = __webpack_require__(184), isObject = __webpack_require__(11), toIObject = __webpack_require__(30), DESCRIPTORS = __webpack_require__(4), has = __webpack_require__(3);
            var createDictMethod = function (TYPE) {
                var IS_MAP = TYPE == 1, IS_EVERY = TYPE == 4;
                return function (object, callbackfn, that) {
                    var f = ctx(callbackfn, that, 3), O = toIObject(object), result = IS_MAP || TYPE == 7 || TYPE == 2 ? new (typeof this == 'function' ? this : Dict)() : undefined, key, val, res;
                    for (key in O)
                        if (has(O, key)) {
                            val = O[key];
                            res = f(val, key, object);
                            if (TYPE) {
                                if (IS_MAP)
                                    result[key] = res;
                                else if (res)
                                    switch (TYPE) {
                                    case 2:
                                        result[key] = val;
                                        break;
                                    case 3:
                                        return true;
                                    case 5:
                                        return val;
                                    case 6:
                                        return key;
                                    case 7:
                                        result[res[0]] = res[1];
                                    }
                                else if (IS_EVERY)
                                    return false;
                            }
                        }
                    return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
                };
            };
            var findKey = createDictMethod(6);
            var createDictIter = function (kind) {
                return function (it) {
                    return new DictIterator(it, kind);
                };
            };
            var DictIterator = function (iterated, kind) {
                this._t = toIObject(iterated);
                this._a = getKeys(iterated);
                this._i = 0;
                this._k = kind;
            };
            $iterCreate(DictIterator, 'Dict', function () {
                var that = this, O = that._t, keys = that._a, kind = that._k, key;
                do {
                    if (that._i >= keys.length) {
                        that._t = undefined;
                        return step(1);
                    }
                } while (!has(O, key = keys[that._i++]));
                if (kind == 'keys')
                    return step(0, key);
                if (kind == 'values')
                    return step(0, O[key]);
                return step(0, [
                    key,
                    O[key]
                ]);
            });
            function Dict(iterable) {
                var dict = create(null);
                if (iterable != undefined) {
                    if (isIterable(iterable)) {
                        forOf(iterable, true, function (key, value) {
                            dict[key] = value;
                        });
                    } else
                        assign(dict, iterable);
                }
                return dict;
            }
            Dict.prototype = null;
            function reduce(object, mapfn, init) {
                aFunction(mapfn);
                var O = toIObject(object), keys = getKeys(O), length = keys.length, i = 0, memo, key;
                if (arguments.length < 3) {
                    if (!length)
                        throw TypeError('Reduce of empty object with no initial value');
                    memo = O[keys[i++]];
                } else
                    memo = Object(init);
                while (length > i)
                    if (has(O, key = keys[i++])) {
                        memo = mapfn(memo, O[key], key, object);
                    }
                return memo;
            }
            function includes(object, el) {
                return (el == el ? keyOf(object, el) : findKey(object, function (it) {
                    return it != it;
                })) !== undefined;
            }
            function get(object, key) {
                if (has(object, key))
                    return object[key];
            }
            function set(object, key, value) {
                if (DESCRIPTORS && key in Object)
                    dP.f(object, key, createDesc(0, value));
                else
                    object[key] = value;
                return object;
            }
            function isDict(it) {
                return isObject(it) && getPrototypeOf(it) === Dict.prototype;
            }
            $export($export.G + $export.F, { Dict: Dict });
            $export($export.S, 'Dict', {
                keys: createDictIter('keys'),
                values: createDictIter('values'),
                entries: createDictIter('entries'),
                forEach: createDictMethod(0),
                map: createDictMethod(1),
                filter: createDictMethod(2),
                some: createDictMethod(3),
                every: createDictMethod(4),
                find: createDictMethod(5),
                findKey: findKey,
                mapPairs: createDictMethod(7),
                reduce: reduce,
                keyOf: keyOf,
                includes: includes,
                has: has,
                get: get,
                set: set,
                isDict: isDict
            });
        },
        function (module, exports, __webpack_require__) {
            var classof = __webpack_require__(73), ITERATOR = __webpack_require__(23)('iterator'), Iterators = __webpack_require__(135);
            module.exports = __webpack_require__(7).isIterable = function (it) {
                var O = Object(it);
                return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
            };
        },
        function (module, exports, __webpack_require__) {
            var anObject = __webpack_require__(10), get = __webpack_require__(156);
            module.exports = __webpack_require__(7).getIterator = function (it) {
                var iterFn = get(it);
                if (typeof iterFn != 'function')
                    throw TypeError(it + ' is not iterable!');
                return anObject(iterFn.call(it));
            };
        },
        function (module, exports, __webpack_require__) {
            var global = __webpack_require__(2), core = __webpack_require__(7), $export = __webpack_require__(6), partial = __webpack_require__(289);
            $export($export.G + $export.F, {
                delay: function delay(time) {
                    return new (core.Promise || global.Promise)(function (resolve) {
                        setTimeout(partial.call(resolve, true), time);
                    });
                }
            });
        },
        function (module, exports, __webpack_require__) {
            var path = __webpack_require__(290), $export = __webpack_require__(6);
            __webpack_require__(7)._ = path._ = path._ || {};
            $export($export.P + $export.F, 'Function', { part: __webpack_require__(289) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S + $export.F, 'Object', { isObject: __webpack_require__(11) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6);
            $export($export.S + $export.F, 'Object', { classof: __webpack_require__(73) });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), define = __webpack_require__(299);
            $export($export.S + $export.F, 'Object', { define: define });
        },
        function (module, exports, __webpack_require__) {
            var dP = __webpack_require__(9), gOPD = __webpack_require__(49), ownKeys = __webpack_require__(221), toIObject = __webpack_require__(30);
            module.exports = function define(target, mixin) {
                var keys = ownKeys(toIObject(mixin)), length = keys.length, i = 0, key;
                while (length > i)
                    dP.f(target, key = keys[i++], gOPD.f(mixin, key));
                return target;
            };
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), define = __webpack_require__(299), create = __webpack_require__(44);
            $export($export.S + $export.F, 'Object', {
                make: function (proto, mixin) {
                    return define('core-js/client/core', create(proto), mixin);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(134)(Number, 'Number', function (iterated) {
                this._l = +iterated;
                this._i = 0;
            }, function () {
                var i = this._i++, done = !(i < this._l);
                return {
                    done: done,
                    value: done ? undefined : i
                };
            });
        },
        function (module, exports, __webpack_require__) {
            var $export = __webpack_require__(6), $re = __webpack_require__(303)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
            $export($export.S, 'RegExp', {
                escape: function escape(it) {
                    return $re(it);
                }
            });
        },
        function (module, exports) {
            module.exports = function (regExp, replace) {
                var replacer = replace === Object(replace) ? function (part) {
                    return replace[part];
                } : replace;
                return function (it) {
                    return String(it).replace(regExp, replacer);
                };
            };
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6);
            var $re = __webpack_require__(303)(/[&<>"']/g, {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                '\'': '&apos;'
            });
            $export($export.P + $export.F, 'String', {
                escapeHTML: function escapeHTML() {
                    return $re(this);
                }
            });
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(6);
            var $re = __webpack_require__(303)(/&(?:amp|lt|gt|quot|apos);/g, {
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&apos;': '\''
            });
            $export($export.P + $export.F, 'String', {
                unescapeHTML: function unescapeHTML() {
                    return $re(this);
                }
            });
        }
    ]));
    if (typeof module != 'undefined' && module.exports)
        module.exports = __e;
    else if (typeof define == 'function' && define.amd)
        define('core-js/client/core', function () {
            return __e;
        });
    else
        __g.core = __e;
}(1, 1);
/*lodash@4.17.4#_apply*/
define('lodash/_apply', function (require, exports, module) {
    function apply(func, thisArg, args) {
        switch (args.length) {
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
    }
    module.exports = apply;
});
/*lodash@4.17.4#_freeGlobal*/
define('lodash/_freeGlobal', function (require, exports, module) {
    (function (global) {
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
        module.exports = freeGlobal;
    }(function () {
        return this;
    }()));
});
/*lodash@4.17.4#_root*/
define('lodash/_root', function (require, exports, module) {
    (function (global) {
        var freeGlobal = require('lodash/_freeGlobal');
        var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function('return this')();
        module.exports = root;
    }(function () {
        return this;
    }()));
});
/*lodash@4.17.4#_Symbol*/
define('lodash/_Symbol', function (require, exports, module) {
    var root = require('lodash/_root');
    var Symbol = root.Symbol;
    module.exports = Symbol;
});
/*lodash@4.17.4#_getRawTag*/
define('lodash/_getRawTag', function (require, exports, module) {
    var Symbol = require('lodash/_Symbol');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
            value[symToStringTag] = undefined;
            var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
            if (isOwn) {
                value[symToStringTag] = tag;
            } else {
                delete value[symToStringTag];
            }
        }
        return result;
    }
    module.exports = getRawTag;
});
/*lodash@4.17.4#_objectToString*/
define('lodash/_objectToString', function (require, exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
        return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
});
/*lodash@4.17.4#_baseGetTag*/
define('lodash/_baseGetTag', function (require, exports, module) {
    var Symbol = require('lodash/_Symbol'), getRawTag = require('lodash/_getRawTag'), objectToString = require('lodash/_objectToString');
    var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    function baseGetTag(value) {
        if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
});
/*lodash@4.17.4#isObject*/
define('lodash/isObject', function (require, exports, module) {
    function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }
    module.exports = isObject;
});
/*lodash@4.17.4#isFunction*/
define('lodash/isFunction', function (require, exports, module) {
    var baseGetTag = require('lodash/_baseGetTag'), isObject = require('lodash/isObject');
    var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
    function isFunction(value) {
        if (!isObject(value)) {
            return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
});
/*lodash@4.17.4#_coreJsData*/
define('lodash/_coreJsData', function (require, exports, module) {
    var root = require('lodash/_root');
    var coreJsData = root['__core-js_shared__'];
    module.exports = coreJsData;
});
/*lodash@4.17.4#_isMasked*/
define('lodash/_isMasked', function (require, exports, module) {
    var coreJsData = require('lodash/_coreJsData');
    var maskSrcKey = function () {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
        return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
});
/*lodash@4.17.4#_toSource*/
define('lodash/_toSource', function (require, exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
        if (func != null) {
            try {
                return funcToString.call(func);
            } catch (e) {
            }
            try {
                return func + '';
            } catch (e) {
            }
        }
        return '';
    }
    module.exports = toSource;
});
/*lodash@4.17.4#_baseIsNative*/
define('lodash/_baseIsNative', function (require, exports, module) {
    var isFunction = require('lodash/isFunction'), isMasked = require('lodash/_isMasked'), isObject = require('lodash/isObject'), toSource = require('lodash/_toSource');
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype, objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
            return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
});
/*lodash@4.17.4#_getValue*/
define('lodash/_getValue', function (require, exports, module) {
    function getValue(object, key) {
        return object == null ? undefined : object[key];
    }
    module.exports = getValue;
});
/*lodash@4.17.4#_getNative*/
define('lodash/_getNative', function (require, exports, module) {
    var baseIsNative = require('lodash/_baseIsNative'), getValue = require('lodash/_getValue');
    function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
    }
    module.exports = getNative;
});
/*lodash@4.17.4#_defineProperty*/
define('lodash/_defineProperty', function (require, exports, module) {
    var getNative = require('lodash/_getNative');
    var defineProperty = function () {
        try {
            var func = getNative(Object, 'defineProperty');
            func({}, '', {});
            return func;
        } catch (e) {
        }
    }();
    module.exports = defineProperty;
});
/*lodash@4.17.4#_baseAssignValue*/
define('lodash/_baseAssignValue', function (require, exports, module) {
    var defineProperty = require('lodash/_defineProperty');
    function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
            defineProperty(object, key, {
                'configurable': true,
                'enumerable': true,
                'value': value,
                'writable': true
            });
        } else {
            object[key] = value;
        }
    }
    module.exports = baseAssignValue;
});
/*lodash@4.17.4#eq*/
define('lodash/eq', function (require, exports, module) {
    function eq(value, other) {
        return value === other || value !== value && other !== other;
    }
    module.exports = eq;
});
/*lodash@4.17.4#_assignValue*/
define('lodash/_assignValue', function (require, exports, module) {
    var baseAssignValue = require('lodash/_baseAssignValue'), eq = require('lodash/eq');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
        }
    }
    module.exports = assignValue;
});
/*lodash@4.17.4#_copyObject*/
define('lodash/_copyObject', function (require, exports, module) {
    var assignValue = require('lodash/_assignValue'), baseAssignValue = require('lodash/_baseAssignValue');
    function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
            if (newValue === undefined) {
                newValue = source[key];
            }
            if (isNew) {
                baseAssignValue(object, key, newValue);
            } else {
                assignValue(object, key, newValue);
            }
        }
        return object;
    }
    module.exports = copyObject;
});
/*lodash@4.17.4#identity*/
define('lodash/identity', function (require, exports, module) {
    function identity(value) {
        return value;
    }
    module.exports = identity;
});
/*lodash@4.17.4#_overRest*/
define('lodash/_overRest', function (require, exports, module) {
    var apply = require('lodash/_apply');
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? func.length - 1 : start, 0);
        return function () {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
            while (++index < length) {
                array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
                otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
        };
    }
    module.exports = overRest;
});
/*lodash@4.17.4#constant*/
define('lodash/constant', function (require, exports, module) {
    function constant(value) {
        return function () {
            return value;
        };
    }
    module.exports = constant;
});
/*lodash@4.17.4#_baseSetToString*/
define('lodash/_baseSetToString', function (require, exports, module) {
    var constant = require('lodash/constant'), defineProperty = require('lodash/_defineProperty'), identity = require('lodash/identity');
    var baseSetToString = !defineProperty ? identity : function (func, string) {
        return defineProperty(func, 'toString', {
            'configurable': true,
            'enumerable': false,
            'value': constant(string),
            'writable': true
        });
    };
    module.exports = baseSetToString;
});
/*lodash@4.17.4#_shortOut*/
define('lodash/_shortOut', function (require, exports, module) {
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function () {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                    return arguments[0];
                }
            } else {
                count = 0;
            }
            return func.apply(undefined, arguments);
        };
    }
    module.exports = shortOut;
});
/*lodash@4.17.4#_setToString*/
define('lodash/_setToString', function (require, exports, module) {
    var baseSetToString = require('lodash/_baseSetToString'), shortOut = require('lodash/_shortOut');
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
});
/*lodash@4.17.4#_baseRest*/
define('lodash/_baseRest', function (require, exports, module) {
    var identity = require('lodash/identity'), overRest = require('lodash/_overRest'), setToString = require('lodash/_setToString');
    function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + '');
    }
    module.exports = baseRest;
});
/*lodash@4.17.4#isLength*/
define('lodash/isLength', function (require, exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
});
/*lodash@4.17.4#isArrayLike*/
define('lodash/isArrayLike', function (require, exports, module) {
    var isFunction = require('lodash/isFunction'), isLength = require('lodash/isLength');
    function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
});
/*lodash@4.17.4#_isIndex*/
define('lodash/_isIndex', function (require, exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == 'number' || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
});
/*lodash@4.17.4#_isIterateeCall*/
define('lodash/_isIterateeCall', function (require, exports, module) {
    var eq = require('lodash/eq'), isArrayLike = require('lodash/isArrayLike'), isIndex = require('lodash/_isIndex'), isObject = require('lodash/isObject');
    function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
            return false;
        }
        var type = typeof index;
        if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
            return eq(object[index], value);
        }
        return false;
    }
    module.exports = isIterateeCall;
});
/*lodash@4.17.4#_createAssigner*/
define('lodash/_createAssigner', function (require, exports, module) {
    var baseRest = require('lodash/_baseRest'), isIterateeCall = require('lodash/_isIterateeCall');
    function createAssigner(assigner) {
        return baseRest(function (object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined : customizer;
                length = 1;
            }
            object = Object(object);
            while (++index < length) {
                var source = sources[index];
                if (source) {
                    assigner(object, source, index, customizer);
                }
            }
            return object;
        });
    }
    module.exports = createAssigner;
});
/*lodash@4.17.4#_baseTimes*/
define('lodash/_baseTimes', function (require, exports, module) {
    function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
            result[index] = iteratee(index);
        }
        return result;
    }
    module.exports = baseTimes;
});
/*lodash@4.17.4#isObjectLike*/
define('lodash/isObjectLike', function (require, exports, module) {
    function isObjectLike(value) {
        return value != null && typeof value == 'object';
    }
    module.exports = isObjectLike;
});
/*lodash@4.17.4#_baseIsArguments*/
define('lodash/_baseIsArguments', function (require, exports, module) {
    var baseGetTag = require('lodash/_baseGetTag'), isObjectLike = require('lodash/isObjectLike');
    var argsTag = '[object Arguments]';
    function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
});
/*lodash@4.17.4#isArguments*/
define('lodash/isArguments', function (require, exports, module) {
    var baseIsArguments = require('lodash/_baseIsArguments'), isObjectLike = require('lodash/isObjectLike');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function () {
        return arguments;
    }()) ? baseIsArguments : function (value) {
        return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    };
    module.exports = isArguments;
});
/*lodash@4.17.4#isArray*/
define('lodash/isArray', function (require, exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
});
/*lodash@4.17.4#stubFalse*/
define('lodash/stubFalse', function (require, exports, module) {
    function stubFalse() {
        return false;
    }
    module.exports = stubFalse;
});
/*lodash@4.17.4#isBuffer*/
define('lodash/isBuffer', function (require, exports, module) {
    var root = require('lodash/_root'), stubFalse = require('lodash/stubFalse');
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : undefined;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
});
/*lodash@4.17.4#_baseIsTypedArray*/
define('lodash/_baseIsTypedArray', function (require, exports, module) {
    var baseGetTag = require('lodash/_baseGetTag'), isLength = require('lodash/isLength'), isObjectLike = require('lodash/isObjectLike');
    var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
});
/*lodash@4.17.4#_baseUnary*/
define('lodash/_baseUnary', function (require, exports, module) {
    function baseUnary(func) {
        return function (value) {
            return func(value);
        };
    }
    module.exports = baseUnary;
});
/*lodash@4.17.4#_nodeUtil*/
define('lodash/_nodeUtil', function (require, exports, module) {
    var freeGlobal = require('lodash/_freeGlobal');
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function () {
        try {
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {
        }
    }();
    module.exports = nodeUtil;
});
/*lodash@4.17.4#isTypedArray*/
define('lodash/isTypedArray', function (require, exports, module) {
    var baseIsTypedArray = require('lodash/_baseIsTypedArray'), baseUnary = require('lodash/_baseUnary'), nodeUtil = require('lodash/_nodeUtil');
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
});
/*lodash@4.17.4#_arrayLikeKeys*/
define('lodash/_arrayLikeKeys', function (require, exports, module) {
    var baseTimes = require('lodash/_baseTimes'), isArguments = require('lodash/isArguments'), isArray = require('lodash/isArray'), isBuffer = require('lodash/isBuffer'), isIndex = require('lodash/_isIndex'), isTypedArray = require('lodash/isTypedArray');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
                result.push(key);
            }
        }
        return result;
    }
    module.exports = arrayLikeKeys;
});
/*lodash@4.17.4#_isPrototype*/
define('lodash/_isPrototype', function (require, exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
        return value === proto;
    }
    module.exports = isPrototype;
});
/*lodash@4.17.4#_nativeKeysIn*/
define('lodash/_nativeKeysIn', function (require, exports, module) {
    function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
            for (var key in Object(object)) {
                result.push(key);
            }
        }
        return result;
    }
    module.exports = nativeKeysIn;
});
/*lodash@4.17.4#_baseKeysIn*/
define('lodash/_baseKeysIn', function (require, exports, module) {
    var isObject = require('lodash/isObject'), isPrototype = require('lodash/_isPrototype'), nativeKeysIn = require('lodash/_nativeKeysIn');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
        if (!isObject(object)) {
            return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
            if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                result.push(key);
            }
        }
        return result;
    }
    module.exports = baseKeysIn;
});
/*lodash@4.17.4#keysIn*/
define('lodash/keysIn', function (require, exports, module) {
    var arrayLikeKeys = require('lodash/_arrayLikeKeys'), baseKeysIn = require('lodash/_baseKeysIn'), isArrayLike = require('lodash/isArrayLike');
    function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
});
/*lodash@4.17.4#assignInWith*/
define('lodash/assignInWith', function (require, exports, module) {
    var copyObject = require('lodash/_copyObject'), createAssigner = require('lodash/_createAssigner'), keysIn = require('lodash/keysIn');
    var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
    });
    module.exports = assignInWith;
});
/*lodash@4.17.4#_customDefaultsAssignIn*/
define('lodash/_customDefaultsAssignIn', function (require, exports, module) {
    var eq = require('lodash/eq');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
        }
        return objValue;
    }
    module.exports = customDefaultsAssignIn;
});
/*lodash@4.17.4#defaults*/
define('lodash/defaults', function (require, exports, module) {
    var apply = require('lodash/_apply'), assignInWith = require('lodash/assignInWith'), baseRest = require('lodash/_baseRest'), customDefaultsAssignIn = require('lodash/_customDefaultsAssignIn');
    var defaults = baseRest(function (args) {
        args.push(undefined, customDefaultsAssignIn);
        return apply(assignInWith, undefined, args);
    });
    module.exports = defaults;
});
/*lodash@4.17.4#_baseDelay*/
define('lodash/_baseDelay', function (require, exports, module) {
    var FUNC_ERROR_TEXT = 'Expected a function';
    function baseDelay(func, wait, args) {
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        return setTimeout(function () {
            func.apply(undefined, args);
        }, wait);
    }
    module.exports = baseDelay;
});
/*lodash@4.17.4#isSymbol*/
define('lodash/isSymbol', function (require, exports, module) {
    var baseGetTag = require('lodash/_baseGetTag'), isObjectLike = require('lodash/isObjectLike');
    var symbolTag = '[object Symbol]';
    function isSymbol(value) {
        return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
});
/*lodash@4.17.4#toNumber*/
define('lodash/toNumber', function (require, exports, module) {
    var isObject = require('lodash/isObject'), isSymbol = require('lodash/isSymbol');
    var NAN = 0 / 0;
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
        if (typeof value == 'number') {
            return value;
        }
        if (isSymbol(value)) {
            return NAN;
        }
        if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
        }
        if (typeof value != 'string') {
            return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
});
/*lodash@4.17.4#delay*/
define('lodash/delay', function (require, exports, module) {
    var baseDelay = require('lodash/_baseDelay'), baseRest = require('lodash/_baseRest'), toNumber = require('lodash/toNumber');
    var delay = baseRest(function (func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
    });
    module.exports = delay;
});
/*uberproto@1.2.0#lib/proto*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('uberproto', [], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Proto = factory();
    }
}(this, function () {
    function makeSuper(_super, old, name, fn) {
        return function () {
            var tmp = this._super;
            this._super = typeof old === 'function' ? old : _super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
        };
    }
    function legacyMixin(prop, obj) {
        var self = obj || this;
        var fnTest = /\b_super\b/;
        var _super = Object.getPrototypeOf(self) || self.prototype;
        var _old;
        for (var name in prop) {
            _old = self[name];
            if ((typeof prop[name] === 'function' && typeof _super[name] === 'function' || typeof _old === 'function' && typeof prop[name] === 'function') && fnTest.test(prop[name])) {
                self[name] = makeSuper(_super, _old, name, prop[name]);
            } else {
                self[name] = prop[name];
            }
        }
        return self;
    }
    function es5Mixin(prop, obj) {
        var self = obj || this;
        var fnTest = /\b_super\b/;
        var _super = Object.getPrototypeOf(self) || self.prototype;
        var descriptors = {};
        var proto = prop;
        var processProperty = function (name) {
            if (!descriptors[name]) {
                descriptors[name] = Object.getOwnPropertyDescriptor(proto, name);
            }
        };
        do {
            Object.getOwnPropertyNames(proto).forEach(processProperty);
        } while ((proto = Object.getPrototypeOf(proto)) && Object.getPrototypeOf(proto));
        Object.keys(descriptors).forEach(function (name) {
            var descriptor = descriptors[name];
            if (typeof descriptor.value === 'function' && fnTest.test(descriptor.value)) {
                descriptor.value = makeSuper(_super, self[name], name, descriptor.value);
            }
            Object.defineProperty(self, name, descriptor);
        });
        return self;
    }
    return {
        create: function () {
            var instance = Object.create(this);
            var init = typeof instance.__init === 'string' ? instance.__init : 'init';
            if (typeof instance[init] === 'function') {
                instance[init].apply(instance, arguments);
            }
            return instance;
        },
        mixin: typeof Object.defineProperty === 'function' ? es5Mixin : legacyMixin,
        extend: function (prop, obj) {
            return this.mixin(prop, Object.create(obj || this));
        },
        proxy: function (name) {
            var fn = this[name];
            var args = Array.prototype.slice.call(arguments, 1);
            args.unshift(this);
            return fn.bind.apply(fn, args);
        }
    };
}));
/*ms@0.7.1#index*/
define('ms', function (require, exports, module) {
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function (val, options) {
        options = options || {};
        if ('string' == typeof val)
            return parse(val);
        return options.long ? long(val) : short(val);
    };
    function parse(str) {
        str = '' + str;
        if (str.length > 10000)
            return;
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match)
            return;
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        }
    }
    function short(ms) {
        if (ms >= d)
            return Math.round(ms / d) + 'd';
        if (ms >= h)
            return Math.round(ms / h) + 'h';
        if (ms >= m)
            return Math.round(ms / m) + 'm';
        if (ms >= s)
            return Math.round(ms / s) + 's';
        return ms + 'ms';
    }
    function long(ms) {
        return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
    }
    function plural(ms, n, name) {
        if (ms < n)
            return;
        if (ms < n * 1.5)
            return Math.floor(ms / n) + ' ' + name;
        return Math.ceil(ms / n) + ' ' + name + 's';
    }
});
/*debug@2.2.0#debug*/
define('debug/debug', function (require, exports, module) {
    exports = module.exports = debug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require('ms');
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevColor = 0;
    var prevTime;
    function selectColor() {
        return exports.colors[prevColor++ % exports.colors.length];
    }
    function debug(namespace) {
        function disabled() {
        }
        disabled.enabled = false;
        function enabled() {
            var self = enabled;
            var curr = +new Date();
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            if (null == self.useColors)
                self.useColors = exports.useColors();
            if (null == self.color && self.useColors)
                self.color = selectColor();
            var args = Array.prototype.slice.call(arguments);
            args[0] = exports.coerce(args[0]);
            if ('string' !== typeof args[0]) {
                args = ['%o'].concat(args);
            }
            var index = 0;
            args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
                if (match === '%%')
                    return match;
                index++;
                var formatter = exports.formatters[format];
                if ('function' === typeof formatter) {
                    var val = args[index];
                    match = formatter.call(self, val);
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            if ('function' === typeof exports.formatArgs) {
                args = exports.formatArgs.apply(self, args);
            }
            var logFn = enabled.log || exports.log || console.log.bind(console);
            logFn.apply(self, args);
        }
        enabled.enabled = true;
        var fn = exports.enabled(namespace) ? enabled : disabled;
        fn.namespace = namespace;
        return fn;
    }
    function enable(namespaces) {
        exports.save(namespaces);
        var split = (namespaces || '').split(/[\s,]+/);
        var len = split.length;
        for (var i = 0; i < len; i++) {
            if (!split[i])
                continue;
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
                exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
                exports.names.push(new RegExp('^' + namespaces + '$'));
            }
        }
    }
    function disable() {
        exports.enable('');
    }
    function enabled(name) {
        var i, len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
            if (exports.skips[i].test(name)) {
                return false;
            }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
            if (exports.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    function coerce(val) {
        if (val instanceof Error)
            return val.stack || val.message;
        return val;
    }
});
/*debug@2.2.0#browser*/
define('debug', function (require, exports, module) {
    exports = module.exports = require('debug/debug');
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
        'lightseagreen',
        'forestgreen',
        'goldenrod',
        'dodgerblue',
        'darkorchid',
        'crimson'
    ];
    function useColors() {
        return 'WebkitAppearance' in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
    }
    exports.formatters.j = function (v) {
        return JSON.stringify(v);
    };
    function formatArgs() {
        var args = arguments;
        var useColors = this.useColors;
        args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
        if (!useColors)
            return args;
        var c = 'color: ' + this.color;
        args = [
            args[0],
            c,
            'color: inherit'
        ].concat(Array.prototype.slice.call(args, 1));
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-z%]/g, function (match) {
            if ('%%' === match)
                return;
            index++;
            if ('%c' === match) {
                lastC = index;
            }
        });
        args.splice(lastC, 0, c);
        return args;
    }
    function log() {
        return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
        try {
            if (null == namespaces) {
                exports.storage.removeItem('debug');
            } else {
                exports.storage.debug = namespaces;
            }
        } catch (e) {
        }
    }
    function load() {
        var r;
        try {
            r = exports.storage.debug;
        } catch (e) {
        }
        return r;
    }
    exports.enable(load());
    function localstorage() {
        try {
            return window.localStorage;
        } catch (e) {
        }
    }
});
/*feathers-commons@0.8.7#lib/arguments*/
define('feathers-commons/lib/arguments', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = getArguments;
    function _typeof(obj) {
        return obj && typeof Symbol !== 'undefined' && obj.constructor === Symbol ? 'symbol' : typeof obj;
    }
    var noop = exports.noop = function noop() {
    };
    var getCallback = function getCallback(args) {
        var last = args[args.length - 1];
        return typeof last === 'function' ? last : noop;
    };
    var getParams = function getParams(args, position) {
        return _typeof(args[position]) === 'object' ? args[position] : {};
    };
    var updateOrPatch = function updateOrPatch(name) {
        return function (args) {
            var id = args[0];
            var data = args[1];
            var callback = getCallback(args);
            var params = getParams(args, 2);
            if (typeof id === 'function') {
                throw new Error('First parameter for \'' + name + '\' can not be a function');
            }
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                throw new Error('No data provided for \'' + name + '\'');
            }
            if (args.length > 4) {
                throw new Error('Too many arguments for \'' + name + '\' service method');
            }
            return [
                id,
                data,
                params,
                callback
            ];
        };
    };
    var getOrRemove = function getOrRemove(name) {
        return function (args) {
            var id = args[0];
            var params = getParams(args, 1);
            var callback = getCallback(args);
            if (args.length > 3) {
                throw new Error('Too many arguments for \'' + name + '\' service method');
            }
            if (typeof id === 'function') {
                throw new Error('First parameter for \'' + name + '\' can not be a function');
            }
            return [
                id,
                params,
                callback
            ];
        };
    };
    var converters = exports.converters = {
        find: function find(args) {
            var callback = getCallback(args);
            var params = getParams(args, 0);
            if (args.length > 2) {
                throw new Error('Too many arguments for \'find\' service method');
            }
            return [
                params,
                callback
            ];
        },
        create: function create(args) {
            var data = args[0];
            var params = getParams(args, 1);
            var callback = getCallback(args);
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                throw new Error('First parameter for \'create\' must be an object');
            }
            if (args.length > 3) {
                throw new Error('Too many arguments for \'create\' service method');
            }
            return [
                data,
                params,
                callback
            ];
        },
        update: updateOrPatch('update'),
        patch: updateOrPatch('patch'),
        get: getOrRemove('get'),
        remove: getOrRemove('remove')
    };
    function getArguments(method, args) {
        return converters[method](args);
    }
});
/*feathers-commons@0.8.7#lib/utils*/
define('feathers-commons/lib/utils', function (require, exports, module) {
    'use strict';
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.stripSlashes = stripSlashes;
    exports.each = each;
    exports.some = some;
    exports.every = every;
    exports.keys = keys;
    exports.values = values;
    exports.isMatch = isMatch;
    exports.isEmpty = isEmpty;
    exports.isObject = isObject;
    exports.extend = extend;
    exports.omit = omit;
    exports.pick = pick;
    exports.merge = merge;
    exports.select = select;
    exports.matcher = matcher;
    exports.sorter = sorter;
    exports.makeUrl = makeUrl;
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _typeof(obj) {
        return obj && typeof Symbol !== 'undefined' && obj.constructor === Symbol ? 'symbol' : typeof obj;
    }
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }
    function stripSlashes(name) {
        return name.replace(/^(\/*)|(\/*)$/g, '');
    }
    function each(obj, callback) {
        if (obj && typeof obj.forEach === 'function') {
            obj.forEach(callback);
        } else if (isObject(obj)) {
            Object.keys(obj).forEach(function (key) {
                return callback(obj[key], key);
            });
        }
    }
    function some(value, callback) {
        return Object.keys(value).map(function (key) {
            return [
                value[key],
                key
            ];
        }).some(function (current) {
            return callback.apply(undefined, _toConsumableArray(current));
        });
    }
    function every(value, callback) {
        return Object.keys(value).map(function (key) {
            return [
                value[key],
                key
            ];
        }).every(function (current) {
            return callback.apply(undefined, _toConsumableArray(current));
        });
    }
    function keys(obj) {
        return Object.keys(obj);
    }
    function values(obj) {
        return _.keys(obj).map(function (key) {
            return obj[key];
        });
    }
    function isMatch(obj, item) {
        return _.keys(item).every(function (key) {
            return obj[key] === item[key];
        });
    }
    function isEmpty(obj) {
        return _.keys(obj).length === 0;
    }
    function isObject(item) {
        return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item) && item !== null;
    }
    function extend() {
        return _extends.apply(undefined, arguments);
    }
    function omit(obj) {
        var result = _.extend({}, obj);
        for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            keys[_key - 1] = arguments[_key];
        }
        keys.forEach(function (key) {
            return delete result[key];
        });
        return result;
    }
    function pick(source) {
        var result = {};
        for (var _len2 = arguments.length, keys = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            keys[_key2 - 1] = arguments[_key2];
        }
        keys.forEach(function (key) {
            result[key] = source[key];
        });
        return result;
    }
    function merge(target, source) {
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach(function (key) {
                if (isObject(source[key])) {
                    if (!target[key])
                        _extends(target, _defineProperty({}, key, {}));
                    merge(target[key], source[key]);
                } else {
                    _extends(target, _defineProperty({}, key, source[key]));
                }
            });
        }
        return target;
    }
    var _ = exports._ = {
        each: each,
        some: some,
        every: every,
        keys: keys,
        values: values,
        isMatch: isMatch,
        isEmpty: isEmpty,
        isObject: isObject,
        extend: extend,
        omit: omit,
        pick: pick,
        merge: merge
    };
    var specialFilters = exports.specialFilters = {
        $in: function $in(key, ins) {
            return function (current) {
                return ins.indexOf(current[key]) !== -1;
            };
        },
        $nin: function $nin(key, nins) {
            return function (current) {
                return nins.indexOf(current[key]) === -1;
            };
        },
        $lt: function $lt(key, value) {
            return function (current) {
                return current[key] < value;
            };
        },
        $lte: function $lte(key, value) {
            return function (current) {
                return current[key] <= value;
            };
        },
        $gt: function $gt(key, value) {
            return function (current) {
                return current[key] > value;
            };
        },
        $gte: function $gte(key, value) {
            return function (current) {
                return current[key] >= value;
            };
        },
        $ne: function $ne(key, value) {
            return function (current) {
                return current[key] !== value;
            };
        }
    };
    function select(params) {
        var fields = params && params.query && params.query.$select;
        for (var _len3 = arguments.length, otherFields = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            otherFields[_key3 - 1] = arguments[_key3];
        }
        if (Array.isArray(fields) && otherFields.length) {
            fields.push.apply(fields, otherFields);
        }
        var convert = function convert(result) {
            if (!Array.isArray(fields)) {
                return result;
            }
            return _.pick.apply(_, [result].concat(_toConsumableArray(fields)));
        };
        return function (result) {
            if (Array.isArray(result)) {
                return result.map(convert);
            }
            return convert(result);
        };
    }
    function matcher(originalQuery) {
        var query = _.omit(originalQuery, '$limit', '$skip', '$sort', '$select');
        return function (item) {
            if (query.$or && _.some(query.$or, function (or) {
                    return matcher(or)(item);
                })) {
                return true;
            }
            return _.every(query, function (value, key) {
                if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                    return _.every(value, function (target, filterType) {
                        if (specialFilters[filterType]) {
                            var filter = specialFilters[filterType](key, target);
                            return filter(item);
                        }
                        return false;
                    });
                } else if (typeof item[key] !== 'undefined') {
                    return item[key] === query[key];
                }
                return false;
            });
        };
    }
    function sorter($sort) {
        return function (first, second) {
            var comparator = 0;
            each($sort, function (modifier, key) {
                modifier = parseInt(modifier, 10);
                if (first[key] < second[key]) {
                    comparator -= 1 * modifier;
                }
                if (first[key] > second[key]) {
                    comparator += 1 * modifier;
                }
            });
            return comparator;
        };
    }
    function makeUrl(path) {
        var app = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var get = typeof app.get === 'function' ? app.get.bind(app) : function () {
        };
        var env = get('env') || process.env.NODE_ENV;
        var host = get('host') || process.env.HOST_NAME || 'localhost';
        var protocol = env === 'development' || env === 'test' || env === undefined ? 'http' : 'https';
        var PORT = get('port') || process.env.PORT || 3030;
        var port = env === 'development' || env === 'test' || env === undefined ? ':' + PORT : '';
        path = path || '';
        return protocol + '://' + host + port + '/' + stripSlashes(path);
    }
});
/*feathers-commons@0.8.7#lib/hooks*/
define('feathers-commons/lib/hooks', function (require, exports, module) {
    'use strict';
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    Object.defineProperty(exports, '__esModule', { value: true });
    var _utils = require('feathers-commons/lib/utils');
    function _typeof(obj) {
        return obj && typeof Symbol !== 'undefined' && obj.constructor === Symbol ? 'symbol' : typeof obj;
    }
    function getOrRemove(args) {
        return {
            id: args[0],
            params: args[1],
            callback: args[2]
        };
    }
    function updateOrPatch(args) {
        return {
            id: args[0],
            data: args[1],
            params: args[2],
            callback: args[3]
        };
    }
    var converters = {
        find: function find(args) {
            return {
                params: args[0],
                callback: args[1]
            };
        },
        create: function create(args) {
            return {
                data: args[0],
                params: args[1],
                callback: args[2]
            };
        },
        get: getOrRemove,
        remove: getOrRemove,
        update: updateOrPatch,
        patch: updateOrPatch
    };
    function hookObject(method, type, args) {
        var app = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
        var hook = converters[method](args);
        hook.method = method;
        hook.type = type;
        if (typeof app === 'function') {
            hook.app = app;
        } else {
            _extends(hook, app);
        }
        return hook;
    }
    function defaultMakeArguments(hook) {
        var result = [];
        if (typeof hook.id !== 'undefined') {
            result.push(hook.id);
        }
        if (hook.data) {
            result.push(hook.data);
        }
        result.push(hook.params || {});
        result.push(hook.callback);
        return result;
    }
    function makeArguments(hook) {
        if (hook.method === 'find') {
            return [
                hook.params,
                hook.callback
            ];
        }
        if (hook.method === 'get' || hook.method === 'remove') {
            return [
                hook.id,
                hook.params,
                hook.callback
            ];
        }
        if (hook.method === 'update' || hook.method === 'patch') {
            return [
                hook.id,
                hook.data,
                hook.params,
                hook.callback
            ];
        }
        if (hook.method === 'create') {
            return [
                hook.data,
                hook.params,
                hook.callback
            ];
        }
        return defaultMakeArguments(hook);
    }
    function convertHookData(obj) {
        var hook = {};
        if (Array.isArray(obj)) {
            hook = { all: obj };
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
            hook = { all: [obj] };
        } else {
            (0, _utils.each)(obj, function (value, key) {
                hook[key] = !Array.isArray(value) ? [value] : value;
            });
        }
        return hook;
    }
    exports.default = {
        hookObject: hookObject,
        hook: hookObject,
        converters: converters,
        defaultMakeArguments: defaultMakeArguments,
        makeArguments: makeArguments,
        convertHookData: convertHookData
    };
    module.exports = exports['default'];
});
/*feathers-commons@0.8.7#lib/commons*/
define('feathers-commons', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _arguments = require('feathers-commons/lib/arguments');
    var _arguments2 = _interopRequireDefault(_arguments);
    var _utils = require('feathers-commons/lib/utils');
    var _hooks = require('feathers-commons/lib/hooks');
    var _hooks2 = _interopRequireDefault(_hooks);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
        _: _utils._,
        getArguments: _arguments2.default,
        stripSlashes: _utils.stripSlashes,
        hooks: _hooks2.default,
        matcher: _utils.matcher,
        sorter: _utils.sorter,
        select: _utils.select,
        makeUrl: _utils.makeUrl,
        each: _utils.each,
        some: _utils.some,
        every: _utils.every,
        keys: _utils.keys,
        values: _utils.values,
        isMatch: _utils.isMatch,
        isEmpty: _utils.isEmpty,
        isObject: _utils.isObject,
        extend: _utils.extend,
        omit: _utils.omit,
        pick: _utils.pick,
        merge: _utils.merge
    };
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/mixins/promise*/
define('feathers/lib/mixins/promise', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function (service) {
        var _this = this;
        if (typeof service.mixin === 'function') {
            (function () {
                var mixin = {};
                _this.methods.forEach(function (method) {
                    if (typeof service[method] === 'function') {
                        mixin[method] = wrapper;
                    }
                });
                service.mixin(mixin);
            }());
        }
    };
    function isPromise(result) {
        return typeof result !== 'undefined' && typeof result.then === 'function';
    }
    function wrapper() {
        var result = this._super.apply(this, arguments);
        var callback = arguments[arguments.length - 1];
        if (typeof callback === 'function' && isPromise(result)) {
            result.then(function (data) {
                return callback(null, data);
            }, function (error) {
                return callback(error);
            });
        }
        return result;
    }
    module.exports = exports['default'];
});
/*events@1.1.1#events*/
define('events', function (require, exports, module) {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
    };
    EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;
        if (!this._events)
            this._events = {};
        if (type === 'error') {
            if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er;
                } else {
                    var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                    err.context = er;
                    throw err;
                }
            }
        }
        handler = this._events[type];
        if (isUndefined(handler))
            return false;
        if (isFunction(handler)) {
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                args = Array.prototype.slice.call(arguments, 1);
                handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }
        return true;
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        var m;
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        if (!this._events)
            this._events = {};
        if (this._events.newListener)
            this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
            this._events[type] = listener;
        else if (isObject(this._events[type]))
            this._events[type].push(listener);
        else
            this._events[type] = [
                this._events[type],
                listener
            ];
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }
            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                if (typeof console.trace === 'function') {
                    console.trace();
                }
            }
        }
        return this;
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        var fired = false;
        function g() {
            this.removeListener(type, g);
            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }
        g.listener = listener;
        this.on(type, g);
        return this;
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        if (!this._events || !this._events[type])
            return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || isFunction(list.listener) && list.listener === listener) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break;
                }
            }
            if (position < 0)
                return this;
            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }
            if (this._events.removeListener)
                this.emit('removeListener', type, listener);
        }
        return this;
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;
        if (!this._events)
            return this;
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener')
                    continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this;
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];
        return this;
    };
    EventEmitter.prototype.listeners = function (type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };
    EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };
    EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
    };
    function isFunction(arg) {
        return typeof arg === 'function';
    }
    function isNumber(arg) {
        return typeof arg === 'number';
    }
    function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
    }
    function isUndefined(arg) {
        return arg === void 0;
    }
});
/*rubberduck@1.1.1#lib/utils*/
define('rubberduck/lib/utils', function (require, exports, module) {
    exports.toBase26 = function (num) {
        var outString = '';
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        while (num > 25) {
            var remainder = num % 26;
            outString = letters.charAt(remainder) + outString;
            num = Math.floor(num / 26) - 1;
        }
        outString = letters.charAt(num) + outString;
        return outString;
    };
    exports.makeFakeArgs = function (len) {
        var argArr = [];
        for (var i = 0; i < len; i++) {
            argArr.push(exports.toBase26(i));
        }
        return argArr.join(',');
    };
    exports.addArgs = function (fnString, argLen) {
        return fnString.replace(/function\s*\(\)/, 'function(' + exports.makeFakeArgs(argLen) + ')');
    };
    exports.emitEvents = function (emitter, type, name, args) {
        var ucName = name ? name.replace(/^\w/, function (first) {
            return first.toUpperCase();
        }) : null;
        emitter.emit.apply(emitter, [type].concat(args));
        if (ucName) {
            emitter.emit.apply(emitter, [type + ucName].concat(args));
        }
    };
});
/*rubberduck@1.1.1#lib/rubberduck*/
define('rubberduck', function (require, exports, module) {
    var events = require('events');
    var utils = require('rubberduck/lib/utils');
    var wrap = exports.wrap = {
        fn: function (emitter, fn, strict, name, scope) {
            var wrapped = function () {
                var result;
                utils.emitEvents(emitter, 'before', name, [
                    arguments,
                    this,
                    name
                ]);
                try {
                    result = fn.apply(scope || this, arguments);
                } catch (e) {
                    utils.emitEvents(emitter, 'error', name, [
                        e,
                        arguments,
                        this,
                        name
                    ]);
                    throw e;
                }
                utils.emitEvents(emitter, 'after', name, [
                    result,
                    arguments,
                    this,
                    name
                ]);
                return result;
            };
            if (strict) {
                eval('wrapped = ' + utils.addArgs(wrapped.toString(), fn.length));
            }
            return wrapped;
        },
        async: function (emitter, fn, position, strict, name, scope) {
            var wrapped = function () {
                var pos = position == -1 ? arguments.length - 1 : position || 0;
                var callback = arguments[pos];
                var context = this;
                var methodArgs = arguments;
                var callbackWrapper = function () {
                    try {
                        callback.apply(context, arguments);
                    } catch (e) {
                        utils.emitEvents(emitter, 'error', name, [
                            e,
                            methodArgs,
                            context,
                            name
                        ]);
                        throw e;
                    }
                    var eventType = arguments[0] instanceof Error ? 'error' : 'after';
                    utils.emitEvents(emitter, eventType, name, [
                        arguments,
                        methodArgs,
                        context,
                        name
                    ]);
                };
                utils.emitEvents(emitter, 'before', name, [
                    methodArgs,
                    this,
                    name
                ]);
                methodArgs[pos] = callbackWrapper;
                try {
                    return fn.apply(scope || this, methodArgs);
                } catch (e) {
                    utils.emitEvents(emitter, 'error', name, [
                        e,
                        methodArgs,
                        context,
                        name
                    ]);
                    throw e;
                }
            };
            if (strict) {
                eval('wrapped = ' + utils.addArgs(wrapped.toString(), fn.length));
            }
            return wrapped;
        }
    };
    var Emitter = exports.Emitter = function (obj) {
        this.obj = obj;
    };
    Emitter.prototype = Object.create(events.EventEmitter.prototype);
    Emitter.prototype.punch = function (method, position, strict) {
        if (Array.isArray(method)) {
            var self = this;
            method.forEach(function (method) {
                self.punch(method, position, strict);
            });
        } else {
            var old = this.obj[method];
            if (typeof old == 'function') {
                this.obj[method] = !position && position !== 0 ? wrap.fn(this, old, strict, method) : wrap.async(this, old, position, strict, method);
            }
        }
        return this;
    };
    exports.emitter = function (obj) {
        return new Emitter(obj);
    };
});
/*feathers@2.0.3#lib/mixins/event*/
define('feathers/lib/mixins/event', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function (service) {
        var app = this;
        var isEmitter = typeof service.on === 'function' && typeof service.emit === 'function';
        var emitter = service._rubberDuck = _rubberduck2.default.emitter(service);
        if (typeof service.mixin === 'function' && !isEmitter) {
            service.mixin(_events.EventEmitter.prototype);
        }
        service._serviceEvents = Array.isArray(service.events) ? service.events.slice() : [];
        emitter.on('error', function (errors) {
            service.emit('serviceError', errors[0]);
        });
        Object.keys(eventMappings).forEach(function (method) {
            var event = eventMappings[method];
            var alreadyEmits = service._serviceEvents.indexOf(event) !== -1;
            if (typeof service[method] === 'function' && !alreadyEmits) {
                var eventName = 'after' + upperCase(method);
                service._serviceEvents.push(event);
                emitter.punch(method, -1);
                emitter.on(eventName, function (results, args) {
                    if (!results[0]) {
                        (function () {
                            var hook = hookObject(method, 'after', args);
                            var data = Array.isArray(results[1]) ? results[1] : [results[1]];
                            hook.app = app;
                            data.forEach(function (current) {
                                return service.emit(event, current, hook);
                            });
                        }());
                    } else {
                        service.emit('serviceError', results[0]);
                    }
                });
            }
        });
    };
    var _rubberduck = require('rubberduck');
    var _rubberduck2 = _interopRequireDefault(_rubberduck);
    var _events = require('events');
    var _feathersCommons = require('feathers-commons');
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var hookObject = _feathersCommons.hooks.hookObject;
    var eventMappings = {
        create: 'created',
        update: 'updated',
        remove: 'removed',
        patch: 'patched'
    };
    function upperCase(name) {
        return name.charAt(0).toUpperCase() + name.substring(1);
    }
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/mixins/normalizer*/
define('feathers/lib/mixins/normalizer', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function (service) {
        var _this = this;
        if (typeof service.mixin === 'function') {
            (function () {
                var mixin = {};
                _this.methods.forEach(function (method) {
                    if (typeof service[method] === 'function') {
                        mixin[method] = function () {
                            return this._super.apply(this, (0, _feathersCommons.getArguments)(method, arguments));
                        };
                    }
                });
                service.mixin(mixin);
            }());
        }
    };
    var _feathersCommons = require('feathers-commons');
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/mixins/index*/
define('feathers/lib/mixins/index', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function () {
        var mixins = [
            require('feathers/lib/mixins/promise'),
            require('feathers/lib/mixins/event'),
            require('feathers/lib/mixins/normalizer')
        ];
        mixins.push = function () {
            var args = [
                this.length - 1,
                0
            ].concat(Array.from(arguments));
            this.splice.apply(this, args);
            return this.length;
        };
        return mixins;
    };
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/application*/
define('feathers/lib/application', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _debug = require('debug');
    var _debug2 = _interopRequireDefault(_debug);
    var _feathersCommons = require('feathers-commons');
    var _uberproto = require('uberproto');
    var _uberproto2 = _interopRequireDefault(_uberproto);
    var _index = require('feathers/lib/mixins/index');
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var debug = (0, _debug2.default)('feathers:application');
    var methods = [
        'find',
        'get',
        'create',
        'update',
        'patch',
        'remove'
    ];
    var Proto = _uberproto2.default.extend({ create: null });
    exports.default = {
        init: function init() {
            Object.assign(this, {
                methods: methods,
                mixins: (0, _index2.default)(),
                services: {},
                providers: [],
                _setup: false
            });
        },
        service: function service(location, _service) {
            var _this = this;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            location = (0, _feathersCommons.stripSlashes)(location);
            if (!_service) {
                var current = this.services[location];
                if (typeof current === 'undefined' && typeof this.defaultService === 'function') {
                    return this.service(location, this.defaultService(location), options);
                }
                return current;
            }
            var protoService = Proto.extend(_service);
            debug('Registering new service at `' + location + '`');
            this.mixins.forEach(function (fn) {
                return fn.call(_this, protoService);
            });
            if (typeof protoService._setup === 'function') {
                protoService._setup(this, location);
            }
            this.providers.forEach(function (provider) {
                return provider.call(_this, location, protoService, options);
            });
            if (this._isSetup && typeof protoService.setup === 'function') {
                debug('Setting up service for `' + location + '`');
                protoService.setup(this, location);
            }
            return this.services[location] = protoService;
        },
        use: function use(location) {
            var service = void 0;
            var middleware = Array.from(arguments).slice(1).reduce(function (middleware, arg) {
                if (typeof arg === 'function') {
                    middleware[service ? 'after' : 'before'].push(arg);
                } else if (!service) {
                    service = arg;
                } else {
                    throw new Error('invalid arg passed to app.use');
                }
                return middleware;
            }, {
                before: [],
                after: []
            });
            var hasMethod = function hasMethod(methods) {
                return methods.some(function (name) {
                    return service && typeof service[name] === 'function';
                });
            };
            if (hasMethod([
                    'handle',
                    'set'
                ]) || !hasMethod(this.methods.concat('setup'))) {
                return this._super.apply(this, arguments);
            }
            this.service(location, service, { middleware: middleware });
            return this;
        },
        setup: function setup() {
            var _this2 = this;
            Object.keys(this.services).forEach(function (path) {
                var service = _this2.services[path];
                debug('Setting up service for `' + path + '`');
                if (typeof service.setup === 'function') {
                    service.setup(_this2, path);
                }
            });
            this._isSetup = true;
            return this;
        },
        configure: function configure(fn) {
            fn.call(this);
            return this;
        },
        listen: function listen() {
            var server = this._super.apply(this, arguments);
            this.setup(server);
            debug('Feathers application listening');
            return server;
        }
    };
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/feathers*/
define('feathers/lib/feathers', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = createApplication;
    var _uberproto = require('uberproto');
    var _uberproto2 = _interopRequireDefault(_uberproto);
    var _application = require('feathers/lib/application');
    var _application2 = _interopRequireDefault(_application);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function createApplication(app) {
        _uberproto2.default.mixin(_application2.default, app);
        app.init();
        return app;
    }
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/client/express*/
define('feathers/lib/client/express', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function () {
        var app = {
            settings: {},
            get: function get(name) {
                return this.settings[name];
            },
            set: function set(name, value) {
                this.settings[name] = value;
                return this;
            },
            disable: function disable(name) {
                this.settings[name] = false;
                return this;
            },
            disabled: function disabled(name) {
                return !this.settings[name];
            },
            enable: function enable(name) {
                this.settings[name] = true;
                return this;
            },
            enabled: function enabled(name) {
                return !!this.settings[name];
            },
            use: function use() {
                throw new Error('Middleware functions can not be used in the Feathers client');
            },
            listen: function listen() {
                return {};
            }
        };
        _uberproto2.default.mixin(_events.EventEmitter.prototype, app);
        return app;
    };
    var _events = require('events');
    var _uberproto = require('uberproto');
    var _uberproto2 = _interopRequireDefault(_uberproto);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = exports['default'];
});
/*feathers@2.0.3#lib/client/index*/
define('feathers/lib/client/index', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = createApplication;
    var _feathers = require('feathers/lib/feathers');
    var _feathers2 = _interopRequireDefault(_feathers);
    var _express = require('feathers/lib/client/express');
    var _express2 = _interopRequireDefault(_express);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function createApplication() {
        return (0, _feathers2.default)(_express2.default.apply(undefined, arguments));
    }
    createApplication.version = '2.0.1';
    module.exports = exports['default'];
});
/*feathers@2.0.3#client*/
define('feathers/client', function (require, exports, module) {
    module.exports = require('feathers/lib/client/index');
});
/*qs@6.3.0#lib/utils*/
define('qs/lib/utils', function (require, exports, module) {
    'use strict';
    var has = Object.prototype.hasOwnProperty;
    var hexTable = function () {
        var array = [];
        for (var i = 0; i < 256; ++i) {
            array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
        }
        return array;
    }();
    exports.arrayToObject = function (source, options) {
        var obj = options && options.plainObjects ? Object.create(null) : {};
        for (var i = 0; i < source.length; ++i) {
            if (typeof source[i] !== 'undefined') {
                obj[i] = source[i];
            }
        }
        return obj;
    };
    exports.merge = function (target, source, options) {
        if (!source) {
            return target;
        }
        if (typeof source !== 'object') {
            if (Array.isArray(target)) {
                target.push(source);
            } else if (typeof target === 'object') {
                target[source] = true;
            } else {
                return [
                    target,
                    source
                ];
            }
            return target;
        }
        if (typeof target !== 'object') {
            return [target].concat(source);
        }
        var mergeTarget = target;
        if (Array.isArray(target) && !Array.isArray(source)) {
            mergeTarget = exports.arrayToObject(target, options);
        }
        if (Array.isArray(target) && Array.isArray(source)) {
            source.forEach(function (item, i) {
                if (has.call(target, i)) {
                    if (target[i] && typeof target[i] === 'object') {
                        target[i] = exports.merge(target[i], item, options);
                    } else {
                        target.push(item);
                    }
                } else {
                    target[i] = item;
                }
            });
            return target;
        }
        return Object.keys(source).reduce(function (acc, key) {
            var value = source[key];
            if (Object.prototype.hasOwnProperty.call(acc, key)) {
                acc[key] = exports.merge(acc[key], value, options);
            } else {
                acc[key] = value;
            }
            return acc;
        }, mergeTarget);
    };
    exports.decode = function (str) {
        try {
            return decodeURIComponent(str.replace(/\+/g, ' '));
        } catch (e) {
            return str;
        }
    };
    exports.encode = function (str) {
        if (str.length === 0) {
            return str;
        }
        var string = typeof str === 'string' ? str : String(str);
        var out = '';
        for (var i = 0; i < string.length; ++i) {
            var c = string.charCodeAt(i);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122) {
                out += string.charAt(i);
                continue;
            }
            if (c < 128) {
                out = out + hexTable[c];
                continue;
            }
            if (c < 2048) {
                out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
                continue;
            }
            if (c < 55296 || c >= 57344) {
                out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
                continue;
            }
            i += 1;
            c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
            out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        return out;
    };
    exports.compact = function (obj, references) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        var refs = references || [];
        var lookup = refs.indexOf(obj);
        if (lookup !== -1) {
            return refs[lookup];
        }
        refs.push(obj);
        if (Array.isArray(obj)) {
            var compacted = [];
            for (var i = 0; i < obj.length; ++i) {
                if (obj[i] && typeof obj[i] === 'object') {
                    compacted.push(exports.compact(obj[i], refs));
                } else if (typeof obj[i] !== 'undefined') {
                    compacted.push(obj[i]);
                }
            }
            return compacted;
        }
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            obj[key] = exports.compact(obj[key], refs);
        });
        return obj;
    };
    exports.isRegExp = function (obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    };
    exports.isBuffer = function (obj) {
        if (obj === null || typeof obj === 'undefined') {
            return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
});
/*qs@6.3.0#lib/formats*/
define('qs/lib/formats', function (require, exports, module) {
    'use strict';
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    module.exports = {
        'default': 'RFC3986',
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return value;
            }
        },
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986'
    };
});
/*qs@6.3.0#lib/stringify*/
define('qs/lib/stringify', function (require, exports, module) {
    'use strict';
    var utils = require('qs/lib/utils');
    var formats = require('qs/lib/formats');
    var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
            return prefix + '[]';
        },
        indices: function indices(prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function repeat(prefix) {
            return prefix;
        }
    };
    var toISO = Date.prototype.toISOString;
    var defaults = {
        delimiter: '&',
        encode: true,
        encoder: utils.encode,
        serializeDate: function serializeDate(date) {
            return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
    };
    var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter) {
        var obj = object;
        if (typeof filter === 'function') {
            obj = filter(prefix, obj);
        } else if (obj instanceof Date) {
            obj = serializeDate(obj);
        } else if (obj === null) {
            if (strictNullHandling) {
                return encoder ? encoder(prefix) : prefix;
            }
            obj = '';
        }
        if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
            if (encoder) {
                return [formatter(encoder(prefix)) + '=' + formatter(encoder(obj))];
            }
            return [formatter(prefix) + '=' + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === 'undefined') {
            return values;
        }
        var objKeys;
        if (Array.isArray(filter)) {
            objKeys = filter;
        } else {
            var keys = Object.keys(obj);
            objKeys = sort ? keys.sort(sort) : keys;
        }
        for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];
            if (skipNulls && obj[key] === null) {
                continue;
            }
            if (Array.isArray(obj)) {
                values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter));
            } else {
                values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter));
            }
        }
        return values;
    };
    module.exports = function (object, opts) {
        var obj = object;
        var options = opts || {};
        var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
        var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
        var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
        var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
        var encoder = encode ? typeof options.encoder === 'function' ? options.encoder : defaults.encoder : null;
        var sort = typeof options.sort === 'function' ? options.sort : null;
        var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
        var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
        if (typeof options.format === 'undefined') {
            options.format = formats.default;
        } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        var formatter = formats.formatters[options.format];
        var objKeys;
        var filter;
        if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
            throw new TypeError('Encoder has to be a function.');
        }
        if (typeof options.filter === 'function') {
            filter = options.filter;
            obj = filter('', obj);
        } else if (Array.isArray(options.filter)) {
            filter = options.filter;
            objKeys = filter;
        }
        var keys = [];
        if (typeof obj !== 'object' || obj === null) {
            return '';
        }
        var arrayFormat;
        if (options.arrayFormat in arrayPrefixGenerators) {
            arrayFormat = options.arrayFormat;
        } else if ('indices' in options) {
            arrayFormat = options.indices ? 'indices' : 'repeat';
        } else {
            arrayFormat = 'indices';
        }
        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
        if (!objKeys) {
            objKeys = Object.keys(obj);
        }
        if (sort) {
            objKeys.sort(sort);
        }
        for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];
            if (skipNulls && obj[key] === null) {
                continue;
            }
            keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter));
        }
        return keys.join(delimiter);
    };
});
/*qs@6.3.0#lib/parse*/
define('qs/lib/parse', function (require, exports, module) {
    'use strict';
    var utils = require('qs/lib/utils');
    var has = Object.prototype.hasOwnProperty;
    var defaults = {
        allowDots: false,
        allowPrototypes: false,
        arrayLimit: 20,
        decoder: utils.decode,
        delimiter: '&',
        depth: 5,
        parameterLimit: 1000,
        plainObjects: false,
        strictNullHandling: false
    };
    var parseValues = function parseValues(str, options) {
        var obj = {};
        var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
        for (var i = 0; i < parts.length; ++i) {
            var part = parts[i];
            var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
            var key, val;
            if (pos === -1) {
                key = options.decoder(part);
                val = options.strictNullHandling ? null : '';
            } else {
                key = options.decoder(part.slice(0, pos));
                val = options.decoder(part.slice(pos + 1));
            }
            if (has.call(obj, key)) {
                obj[key] = [].concat(obj[key]).concat(val);
            } else {
                obj[key] = val;
            }
        }
        return obj;
    };
    var parseObject = function parseObject(chain, val, options) {
        if (!chain.length) {
            return val;
        }
        var root = chain.shift();
        var obj;
        if (root === '[]') {
            obj = [];
            obj = obj.concat(parseObject(chain, val, options));
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
                obj = [];
                obj[index] = parseObject(chain, val, options);
            } else {
                obj[cleanRoot] = parseObject(chain, val, options);
            }
        }
        return obj;
    };
    var parseKeys = function parseKeys(givenKey, val, options) {
        if (!givenKey) {
            return;
        }
        var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
        var parent = /^([^\[\]]*)/;
        var child = /(\[[^\[\]]*\])/g;
        var segment = parent.exec(key);
        var keys = [];
        if (segment[1]) {
            if (!options.plainObjects && has.call(Object.prototype, segment[1])) {
                if (!options.allowPrototypes) {
                    return;
                }
            }
            keys.push(segment[1]);
        }
        var i = 0;
        while ((segment = child.exec(key)) !== null && i < options.depth) {
            i += 1;
            if (!options.plainObjects && has.call(Object.prototype, segment[1].replace(/\[|\]/g, ''))) {
                if (!options.allowPrototypes) {
                    continue;
                }
            }
            keys.push(segment[1]);
        }
        if (segment) {
            keys.push('[' + key.slice(segment.index) + ']');
        }
        return parseObject(keys, val, options);
    };
    module.exports = function (str, opts) {
        var options = opts || {};
        if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
            throw new TypeError('Decoder has to be a function.');
        }
        options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
        options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
        options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
        options.parseArrays = options.parseArrays !== false;
        options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
        options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
        options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
        options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
        options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
        options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
        if (str === '' || str === null || typeof str === 'undefined') {
            return options.plainObjects ? Object.create(null) : {};
        }
        var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
        var obj = options.plainObjects ? Object.create(null) : {};
        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            var newObj = parseKeys(key, tempObj[key], options);
            obj = utils.merge(obj, newObj, options);
        }
        return utils.compact(obj);
    };
});
/*qs@6.3.0#lib/index*/
define('qs', function (require, exports, module) {
    'use strict';
    var stringify = require('qs/lib/stringify');
    var parse = require('qs/lib/parse');
    var formats = require('qs/lib/formats');
    module.exports = {
        formats: formats,
        parse: parse,
        stringify: stringify
    };
});
/*feathers-errors@2.5.0#lib/index*/
define('feathers-errors', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _extendableBuiltin(cls) {
        function ExtendableBuiltin() {
            var instance = Reflect.construct(cls, Array.from(arguments));
            Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
            return instance;
        }
        ExtendableBuiltin.prototype = Object.create(cls.prototype, {
            constructor: {
                value: cls,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(ExtendableBuiltin, cls);
        } else {
            ExtendableBuiltin.__proto__ = cls;
        }
        return ExtendableBuiltin;
    }
    var debug = require('debug')('feathers-errors');
    var FeathersError = function (_extendableBuiltin2) {
        _inherits(FeathersError, _extendableBuiltin2);
        function FeathersError(msg, name, code, className, data) {
            _classCallCheck(this, FeathersError);
            msg = msg || 'Error';
            var errors = void 0;
            var message = void 0;
            var newData = void 0;
            if (msg instanceof Error) {
                message = msg.message || 'Error';
                if (msg.errors) {
                    errors = msg.errors;
                }
            } else if ((typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
                message = msg.message || 'Error';
                data = msg;
            } else {
                message = msg;
            }
            if (data) {
                newData = _extends({}, data);
                if (newData.errors) {
                    errors = newData.errors;
                    delete newData.errors;
                }
            }
            var _this = _possibleConstructorReturn(this, (FeathersError.__proto__ || Object.getPrototypeOf(FeathersError)).call(this, message));
            _this.type = 'FeathersError';
            _this.name = name;
            _this.message = message;
            _this.code = code;
            _this.className = className;
            _this.data = newData;
            _this.errors = errors || {};
            debug(_this.name + '(' + _this.code + '): ' + _this.message);
            return _this;
        }
        _createClass(FeathersError, [{
                key: 'toJSON',
                value: function toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        code: this.code,
                        className: this.className,
                        data: this.data,
                        errors: this.errors
                    };
                }
            }]);
        return FeathersError;
    }(_extendableBuiltin(Error));
    var BadRequest = function (_FeathersError) {
        _inherits(BadRequest, _FeathersError);
        function BadRequest(message, data) {
            _classCallCheck(this, BadRequest);
            return _possibleConstructorReturn(this, (BadRequest.__proto__ || Object.getPrototypeOf(BadRequest)).call(this, message, 'BadRequest', 400, 'bad-request', data));
        }
        return BadRequest;
    }(FeathersError);
    var NotAuthenticated = function (_FeathersError2) {
        _inherits(NotAuthenticated, _FeathersError2);
        function NotAuthenticated(message, data) {
            _classCallCheck(this, NotAuthenticated);
            return _possibleConstructorReturn(this, (NotAuthenticated.__proto__ || Object.getPrototypeOf(NotAuthenticated)).call(this, message, 'NotAuthenticated', 401, 'not-authenticated', data));
        }
        return NotAuthenticated;
    }(FeathersError);
    var PaymentError = function (_FeathersError3) {
        _inherits(PaymentError, _FeathersError3);
        function PaymentError(message, data) {
            _classCallCheck(this, PaymentError);
            return _possibleConstructorReturn(this, (PaymentError.__proto__ || Object.getPrototypeOf(PaymentError)).call(this, message, 'PaymentError', 402, 'payment-error', data));
        }
        return PaymentError;
    }(FeathersError);
    var Forbidden = function (_FeathersError4) {
        _inherits(Forbidden, _FeathersError4);
        function Forbidden(message, data) {
            _classCallCheck(this, Forbidden);
            return _possibleConstructorReturn(this, (Forbidden.__proto__ || Object.getPrototypeOf(Forbidden)).call(this, message, 'Forbidden', 403, 'forbidden', data));
        }
        return Forbidden;
    }(FeathersError);
    var NotFound = function (_FeathersError5) {
        _inherits(NotFound, _FeathersError5);
        function NotFound(message, data) {
            _classCallCheck(this, NotFound);
            return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, message, 'NotFound', 404, 'not-found', data));
        }
        return NotFound;
    }(FeathersError);
    var MethodNotAllowed = function (_FeathersError6) {
        _inherits(MethodNotAllowed, _FeathersError6);
        function MethodNotAllowed(message, data) {
            _classCallCheck(this, MethodNotAllowed);
            return _possibleConstructorReturn(this, (MethodNotAllowed.__proto__ || Object.getPrototypeOf(MethodNotAllowed)).call(this, message, 'MethodNotAllowed', 405, 'method-not-allowed', data));
        }
        return MethodNotAllowed;
    }(FeathersError);
    var NotAcceptable = function (_FeathersError7) {
        _inherits(NotAcceptable, _FeathersError7);
        function NotAcceptable(message, data) {
            _classCallCheck(this, NotAcceptable);
            return _possibleConstructorReturn(this, (NotAcceptable.__proto__ || Object.getPrototypeOf(NotAcceptable)).call(this, message, 'NotAcceptable', 406, 'not-acceptable', data));
        }
        return NotAcceptable;
    }(FeathersError);
    var Timeout = function (_FeathersError8) {
        _inherits(Timeout, _FeathersError8);
        function Timeout(message, data) {
            _classCallCheck(this, Timeout);
            return _possibleConstructorReturn(this, (Timeout.__proto__ || Object.getPrototypeOf(Timeout)).call(this, message, 'Timeout', 408, 'timeout', data));
        }
        return Timeout;
    }(FeathersError);
    var Conflict = function (_FeathersError9) {
        _inherits(Conflict, _FeathersError9);
        function Conflict(message, data) {
            _classCallCheck(this, Conflict);
            return _possibleConstructorReturn(this, (Conflict.__proto__ || Object.getPrototypeOf(Conflict)).call(this, message, 'Conflict', 409, 'conflict', data));
        }
        return Conflict;
    }(FeathersError);
    var LengthRequired = function (_FeathersError10) {
        _inherits(LengthRequired, _FeathersError10);
        function LengthRequired(message, data) {
            _classCallCheck(this, LengthRequired);
            return _possibleConstructorReturn(this, (LengthRequired.__proto__ || Object.getPrototypeOf(LengthRequired)).call(this, message, 'LengthRequired', 411, 'length-required', data));
        }
        return LengthRequired;
    }(FeathersError);
    var Unprocessable = function (_FeathersError11) {
        _inherits(Unprocessable, _FeathersError11);
        function Unprocessable(message, data) {
            _classCallCheck(this, Unprocessable);
            return _possibleConstructorReturn(this, (Unprocessable.__proto__ || Object.getPrototypeOf(Unprocessable)).call(this, message, 'Unprocessable', 422, 'unprocessable', data));
        }
        return Unprocessable;
    }(FeathersError);
    var TooManyRequests = function (_FeathersError12) {
        _inherits(TooManyRequests, _FeathersError12);
        function TooManyRequests(message, data) {
            _classCallCheck(this, TooManyRequests);
            return _possibleConstructorReturn(this, (TooManyRequests.__proto__ || Object.getPrototypeOf(TooManyRequests)).call(this, message, 'TooManyRequests', 429, 'too-many-requests', data));
        }
        return TooManyRequests;
    }(FeathersError);
    var GeneralError = function (_FeathersError13) {
        _inherits(GeneralError, _FeathersError13);
        function GeneralError(message, data) {
            _classCallCheck(this, GeneralError);
            return _possibleConstructorReturn(this, (GeneralError.__proto__ || Object.getPrototypeOf(GeneralError)).call(this, message, 'GeneralError', 500, 'general-error', data));
        }
        return GeneralError;
    }(FeathersError);
    var NotImplemented = function (_FeathersError14) {
        _inherits(NotImplemented, _FeathersError14);
        function NotImplemented(message, data) {
            _classCallCheck(this, NotImplemented);
            return _possibleConstructorReturn(this, (NotImplemented.__proto__ || Object.getPrototypeOf(NotImplemented)).call(this, message, 'NotImplemented', 501, 'not-implemented', data));
        }
        return NotImplemented;
    }(FeathersError);
    var BadGateway = function (_FeathersError15) {
        _inherits(BadGateway, _FeathersError15);
        function BadGateway(message, data) {
            _classCallCheck(this, BadGateway);
            return _possibleConstructorReturn(this, (BadGateway.__proto__ || Object.getPrototypeOf(BadGateway)).call(this, message, 'BadGateway', 502, 'bad-gateway', data));
        }
        return BadGateway;
    }(FeathersError);
    var Unavailable = function (_FeathersError16) {
        _inherits(Unavailable, _FeathersError16);
        function Unavailable(message, data) {
            _classCallCheck(this, Unavailable);
            return _possibleConstructorReturn(this, (Unavailable.__proto__ || Object.getPrototypeOf(Unavailable)).call(this, message, 'Unavailable', 503, 'unavailable', data));
        }
        return Unavailable;
    }(FeathersError);
    var errors = {
        FeathersError: FeathersError,
        BadRequest: BadRequest,
        NotAuthenticated: NotAuthenticated,
        PaymentError: PaymentError,
        Forbidden: Forbidden,
        NotFound: NotFound,
        MethodNotAllowed: MethodNotAllowed,
        NotAcceptable: NotAcceptable,
        Timeout: Timeout,
        Conflict: Conflict,
        LengthRequired: LengthRequired,
        Unprocessable: Unprocessable,
        TooManyRequests: TooManyRequests,
        GeneralError: GeneralError,
        NotImplemented: NotImplemented,
        BadGateway: BadGateway,
        Unavailable: Unavailable,
        400: BadRequest,
        401: NotAuthenticated,
        402: PaymentError,
        403: Forbidden,
        404: NotFound,
        405: MethodNotAllowed,
        406: NotAcceptable,
        408: Timeout,
        409: Conflict,
        411: LengthRequired,
        422: Unprocessable,
        429: TooManyRequests,
        500: GeneralError,
        501: NotImplemented,
        502: BadGateway,
        503: Unavailable
    };
    function convert(error) {
        if (!error) {
            return error;
        }
        var FeathersError = errors[error.name];
        var result = FeathersError ? new FeathersError(error.message, error.data) : new Error(error.message || error);
        if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object') {
            _extends(result, error);
        }
        return result;
    }
    exports.default = _extends({
        convert: convert,
        types: errors,
        errors: errors
    }, errors);
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/base*/
define('feathers-rest/lib/client/base', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _qs = require('qs');
    var _qs2 = _interopRequireDefault(_qs);
    var _feathersCommons = require('feathers-commons');
    var _feathersErrors = require('feathers-errors');
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function toError(error) {
        throw (0, _feathersErrors.convert)(error);
    }
    var Base = function () {
        function Base(settings) {
            _classCallCheck(this, Base);
            this.name = (0, _feathersCommons.stripSlashes)(settings.name);
            this.options = settings.options;
            this.connection = settings.connection;
            this.base = settings.base + '/' + this.name;
        }
        _createClass(Base, [
            {
                key: 'makeUrl',
                value: function makeUrl(params, id) {
                    params = params || {};
                    var url = this.base;
                    if (typeof id !== 'undefined' && id !== null) {
                        url += '/' + id;
                    }
                    if (Object.keys(params).length !== 0) {
                        var queryString = _qs2.default.stringify(params);
                        url += '?' + queryString;
                    }
                    return url;
                }
            },
            {
                key: 'find',
                value: function find() {
                    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.request({
                        url: this.makeUrl(params.query),
                        method: 'GET',
                        headers: _extends({}, params.headers)
                    }).catch(toError);
                }
            },
            {
                key: 'get',
                value: function get(id) {
                    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    if (typeof id === 'undefined') {
                        return Promise.reject(new Error('id for \'get\' can not be undefined'));
                    }
                    return this.request({
                        url: this.makeUrl(params.query, id),
                        method: 'GET',
                        headers: _extends({}, params.headers)
                    }).catch(toError);
                }
            },
            {
                key: 'create',
                value: function create(body) {
                    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return this.request({
                        url: this.makeUrl(params.query),
                        body: body,
                        method: 'POST',
                        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
                    }).catch(toError);
                }
            },
            {
                key: 'update',
                value: function update(id, body) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (typeof id === 'undefined') {
                        return Promise.reject(new Error('id for \'update\' can not be undefined, only \'null\' when updating multiple entries'));
                    }
                    return this.request({
                        url: this.makeUrl(params.query, id),
                        body: body,
                        method: 'PUT',
                        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
                    }).catch(toError);
                }
            },
            {
                key: 'patch',
                value: function patch(id, body) {
                    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (typeof id === 'undefined') {
                        return Promise.reject(new Error('id for \'patch\' can not be undefined, only \'null\' when updating multiple entries'));
                    }
                    return this.request({
                        url: this.makeUrl(params.query, id),
                        body: body,
                        method: 'PATCH',
                        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
                    }).catch(toError);
                }
            },
            {
                key: 'remove',
                value: function remove(id) {
                    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    if (typeof id === 'undefined') {
                        return Promise.reject(new Error('id for \'remove\' can not be undefined, only \'null\' when removing multiple entries'));
                    }
                    return this.request({
                        url: this.makeUrl(params.query, id),
                        method: 'DELETE',
                        headers: _extends({}, params.headers)
                    }).catch(toError);
                }
            }
        ]);
        return Base;
    }();
    exports.default = Base;
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/jquery*/
define('feathers-rest/lib/client/jquery', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _base = require('feathers-rest/lib/client/base');
    var _base2 = _interopRequireDefault(_base);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Service = function (_Base) {
        _inherits(Service, _Base);
        function Service() {
            _classCallCheck(this, Service);
            return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).apply(this, arguments));
        }
        _createClass(Service, [{
                key: 'request',
                value: function request(options) {
                    var _this2 = this;
                    var opts = _extends({ dataType: options.type || 'json' }, { headers: this.options.headers || {} }, options);
                    if (options.body) {
                        opts.data = JSON.stringify(options.body);
                        opts.contentType = 'application/json';
                    }
                    delete opts.type;
                    delete opts.body;
                    return new Promise(function (resolve, reject) {
                        _this2.connection.ajax(opts).then(resolve, function (xhr) {
                            var error = xhr.responseText;
                            try {
                                error = JSON.parse(error);
                            } catch (e) {
                                error = new Error(xhr.responseText);
                            }
                            error.xhr = error.response = xhr;
                            reject(error);
                        });
                    });
                }
            }]);
        return Service;
    }(_base2.default);
    exports.default = Service;
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/superagent*/
define('feathers-rest/lib/client/superagent', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _base = require('feathers-rest/lib/client/base');
    var _base2 = _interopRequireDefault(_base);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Service = function (_Base) {
        _inherits(Service, _Base);
        function Service() {
            _classCallCheck(this, Service);
            return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).apply(this, arguments));
        }
        _createClass(Service, [{
                key: 'request',
                value: function request(options) {
                    var superagent = this.connection(options.method, options.url).set(this.options.headers || {}).set('Accept', 'application/json').set(options.headers || {}).type(options.type || 'json');
                    return new Promise(function (resolve, reject) {
                        superagent.set(options.headers);
                        if (options.body) {
                            superagent.send(options.body);
                        }
                        superagent.end(function (error, res) {
                            if (error) {
                                try {
                                    var response = error.response;
                                    error = JSON.parse(error.response.text);
                                    error.response = response;
                                } catch (e) {
                                }
                                return reject(error);
                            }
                            resolve(res && res.body);
                        });
                    });
                }
            }]);
        return Service;
    }(_base2.default);
    exports.default = Service;
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/request*/
define('feathers-rest/lib/client/request', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _base = require('feathers-rest/lib/client/base');
    var _base2 = _interopRequireDefault(_base);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Service = function (_Base) {
        _inherits(Service, _Base);
        function Service() {
            _classCallCheck(this, Service);
            return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).apply(this, arguments));
        }
        _createClass(Service, [{
                key: 'request',
                value: function request(options) {
                    var _this2 = this;
                    return new Promise(function (resolve, reject) {
                        _this2.connection(_extends({ json: true }, options), function (error, res, data) {
                            if (error) {
                                return reject(error);
                            }
                            if (!error && res.statusCode >= 400) {
                                if (typeof data === 'string') {
                                    return reject(new Error(data));
                                }
                                data.response = res;
                                return reject(_extends(new Error(data.message), data));
                            }
                            resolve(data);
                        });
                    });
                }
            }]);
        return Service;
    }(_base2.default);
    exports.default = Service;
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/fetch*/
define('feathers-rest/lib/client/fetch', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _base = require('feathers-rest/lib/client/base');
    var _base2 = _interopRequireDefault(_base);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Service = function (_Base) {
        _inherits(Service, _Base);
        function Service() {
            _classCallCheck(this, Service);
            return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).apply(this, arguments));
        }
        _createClass(Service, [
            {
                key: 'request',
                value: function request(options) {
                    var fetchOptions = _extends({}, options);
                    fetchOptions.headers = _extends({ Accept: 'application/json' }, this.options.headers, fetchOptions.headers);
                    if (options.body) {
                        fetchOptions.body = JSON.stringify(options.body);
                    }
                    var fetch = this.connection;
                    return fetch(options.url, fetchOptions).then(this.checkStatus).then(function (response) {
                        if (response.status === 204) {
                            return null;
                        }
                        return response.json();
                    });
                }
            },
            {
                key: 'checkStatus',
                value: function checkStatus(response) {
                    if (response.ok) {
                        return response;
                    }
                    return response.json().then(function (error) {
                        error.response = response;
                        throw error;
                    });
                }
            }
        ]);
        return Service;
    }(_base2.default);
    exports.default = Service;
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/axios*/
define('feathers-rest/lib/client/axios', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _base = require('feathers-rest/lib/client/base');
    var _base2 = _interopRequireDefault(_base);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Service = function (_Base) {
        _inherits(Service, _Base);
        function Service() {
            _classCallCheck(this, Service);
            return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).apply(this, arguments));
        }
        _createClass(Service, [{
                key: 'request',
                value: function request(options) {
                    var config = {
                        url: options.url,
                        method: options.method,
                        data: options.body,
                        headers: _extends({ Accept: 'application/json' }, this.options.headers, options.headers)
                    };
                    return this.connection.request(config).then(function (res) {
                        return res.data;
                    }).catch(function (error) {
                        var response = error.response || error;
                        throw response instanceof Error ? response : response.data || response;
                    });
                }
            }]);
        return Service;
    }(_base2.default);
    exports.default = Service;
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#lib/client/index*/
define('feathers-rest/lib/client/index', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function () {
        var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var result = {};
        Object.keys(transports).forEach(function (key) {
            var Service = transports[key];
            result[key] = function (connection) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (!connection) {
                    throw new Error(key + ' has to be provided to feathers-rest');
                }
                var defaultService = function defaultService(name) {
                    return new Service({
                        base: base,
                        name: name,
                        connection: connection,
                        options: options
                    });
                };
                var initialize = function initialize() {
                    if (typeof this.defaultService === 'function') {
                        throw new Error('Only one default client provider can be configured');
                    }
                    this.rest = connection;
                    this.defaultService = defaultService;
                };
                initialize.Service = Service;
                initialize.service = defaultService;
                return initialize;
            };
        });
        return result;
    };
    var _jquery = require('feathers-rest/lib/client/jquery');
    var _jquery2 = _interopRequireDefault(_jquery);
    var _superagent = require('feathers-rest/lib/client/superagent');
    var _superagent2 = _interopRequireDefault(_superagent);
    var _request = require('feathers-rest/lib/client/request');
    var _request2 = _interopRequireDefault(_request);
    var _fetch = require('feathers-rest/lib/client/fetch');
    var _fetch2 = _interopRequireDefault(_fetch);
    var _axios = require('feathers-rest/lib/client/axios');
    var _axios2 = _interopRequireDefault(_axios);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var transports = {
        jquery: _jquery2.default,
        superagent: _superagent2.default,
        request: _request2.default,
        fetch: _fetch2.default,
        axios: _axios2.default
    };
    module.exports = exports['default'];
});
/*feathers-rest@1.6.0#client*/
define('feathers-rest/client', function (require, exports, module) {
    module.exports = require('feathers-rest/lib/client/index');
});
/*component-emitter@1.2.1#index*/
define('component-emitter', function (require, exports, module) {
    if (typeof module !== 'undefined') {
        module.exports = Emitter;
    }
    function Emitter(obj) {
        if (obj)
            return mixin(obj);
    }
    ;
    function mixin(obj) {
        for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
        }
        return obj;
    }
    Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
    };
    Emitter.prototype.once = function (event, fn) {
        function on() {
            this.off(event, on);
            fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
            this._callbacks = {};
            return this;
        }
        var callbacks = this._callbacks['$' + event];
        if (!callbacks)
            return this;
        if (1 == arguments.length) {
            delete this._callbacks['$' + event];
            return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }
        return this;
    };
    Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1), callbacks = this._callbacks['$' + event];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].apply(this, args);
            }
        }
        return this;
    };
    Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
    };
    Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
    };
});
/*superagent@3.3.1#lib/is-object*/
define('superagent/lib/is-object', function (require, exports, module) {
    function isObject(obj) {
        return null !== obj && 'object' === typeof obj;
    }
    module.exports = isObject;
});
/*superagent@3.3.1#lib/request-base*/
define('superagent/lib/request-base', function (require, exports, module) {
    var isObject = require('superagent/lib/is-object');
    module.exports = RequestBase;
    function RequestBase(obj) {
        if (obj)
            return mixin(obj);
    }
    function mixin(obj) {
        for (var key in RequestBase.prototype) {
            obj[key] = RequestBase.prototype[key];
        }
        return obj;
    }
    RequestBase.prototype.clearTimeout = function _clearTimeout() {
        this._timeout = 0;
        this._responseTimeout = 0;
        clearTimeout(this._timer);
        clearTimeout(this._responseTimeoutTimer);
        return this;
    };
    RequestBase.prototype.parse = function parse(fn) {
        this._parser = fn;
        return this;
    };
    RequestBase.prototype.responseType = function (val) {
        this._responseType = val;
        return this;
    };
    RequestBase.prototype.serialize = function serialize(fn) {
        this._serializer = fn;
        return this;
    };
    RequestBase.prototype.timeout = function timeout(options) {
        if (!options || 'object' !== typeof options) {
            this._timeout = options;
            this._responseTimeout = 0;
            return this;
        }
        if ('undefined' !== typeof options.deadline) {
            this._timeout = options.deadline;
        }
        if ('undefined' !== typeof options.response) {
            this._responseTimeout = options.response;
        }
        return this;
    };
    RequestBase.prototype.then = function then(resolve, reject) {
        if (!this._fullfilledPromise) {
            var self = this;
            if (this._endCalled) {
                console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
            }
            this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
                self.end(function (err, res) {
                    if (err)
                        innerReject(err);
                    else
                        innerResolve(res);
                });
            });
        }
        return this._fullfilledPromise.then(resolve, reject);
    };
    RequestBase.prototype.catch = function (cb) {
        return this.then(undefined, cb);
    };
    RequestBase.prototype.use = function use(fn) {
        fn(this);
        return this;
    };
    RequestBase.prototype.ok = function (cb) {
        if ('function' !== typeof cb)
            throw Error('Callback required');
        this._okCallback = cb;
        return this;
    };
    RequestBase.prototype._isResponseOK = function (res) {
        if (!res) {
            return false;
        }
        if (this._okCallback) {
            return this._okCallback(res);
        }
        return res.status >= 200 && res.status < 300;
    };
    RequestBase.prototype.get = function (field) {
        return this._header[field.toLowerCase()];
    };
    RequestBase.prototype.getHeader = RequestBase.prototype.get;
    RequestBase.prototype.set = function (field, val) {
        if (isObject(field)) {
            for (var key in field) {
                this.set(key, field[key]);
            }
            return this;
        }
        this._header[field.toLowerCase()] = val;
        this.header[field] = val;
        return this;
    };
    RequestBase.prototype.unset = function (field) {
        delete this._header[field.toLowerCase()];
        delete this.header[field];
        return this;
    };
    RequestBase.prototype.field = function (name, val) {
        if (null === name || undefined === name) {
            throw new Error('.field(name, val) name can not be empty');
        }
        if (isObject(name)) {
            for (var key in name) {
                this.field(key, name[key]);
            }
            return this;
        }
        if (Array.isArray(val)) {
            for (var i in val) {
                this.field(name, val[i]);
            }
            return this;
        }
        if (null === val || undefined === val) {
            throw new Error('.field(name, val) val can not be empty');
        }
        if ('boolean' === typeof val) {
            val = '' + val;
        }
        this._getFormData().append(name, val);
        return this;
    };
    RequestBase.prototype.abort = function () {
        if (this._aborted) {
            return this;
        }
        this._aborted = true;
        this.xhr && this.xhr.abort();
        this.req && this.req.abort();
        this.clearTimeout();
        this.emit('abort');
        return this;
    };
    RequestBase.prototype.withCredentials = function () {
        this._withCredentials = true;
        return this;
    };
    RequestBase.prototype.redirects = function (n) {
        this._maxRedirects = n;
        return this;
    };
    RequestBase.prototype.toJSON = function () {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        };
    };
    RequestBase.prototype.send = function (data) {
        var isObj = isObject(data);
        var type = this._header['content-type'];
        if (isObj && !this._data) {
            if (Array.isArray(data)) {
                this._data = [];
            } else if (!this._isHost(data)) {
                this._data = {};
            }
        } else if (data && this._data && this._isHost(this._data)) {
            throw Error('Can\'t merge these send calls');
        }
        if (isObj && isObject(this._data)) {
            for (var key in data) {
                this._data[key] = data[key];
            }
        } else if ('string' == typeof data) {
            if (!type)
                this.type('form');
            type = this._header['content-type'];
            if ('application/x-www-form-urlencoded' == type) {
                this._data = this._data ? this._data + '&' + data : data;
            } else {
                this._data = (this._data || '') + data;
            }
        } else {
            this._data = data;
        }
        if (!isObj || this._isHost(data)) {
            return this;
        }
        if (!type)
            this.type('json');
        return this;
    };
    RequestBase.prototype.sortQuery = function (sort) {
        this._sort = typeof sort === 'undefined' ? true : sort;
        return this;
    };
    RequestBase.prototype._timeoutError = function (reason, timeout) {
        if (this._aborted) {
            return;
        }
        var err = new Error(reason + timeout + 'ms exceeded');
        err.timeout = timeout;
        err.code = 'ECONNABORTED';
        this.timedout = true;
        this.abort();
        this.callback(err);
    };
    RequestBase.prototype._setTimeouts = function () {
        var self = this;
        if (this._timeout && !this._timer) {
            this._timer = setTimeout(function () {
                self._timeoutError('Timeout of ', self._timeout);
            }, this._timeout);
        }
        if (this._responseTimeout && !this._responseTimeoutTimer) {
            this._responseTimeoutTimer = setTimeout(function () {
                self._timeoutError('Response timeout of ', self._responseTimeout);
            }, this._responseTimeout);
        }
    };
});
/*superagent@3.3.1#lib/is-function*/
define('superagent/lib/is-function', function (require, exports, module) {
    var isObject = require('superagent/lib/is-object');
    function isFunction(fn) {
        var tag = isObject(fn) ? Object.prototype.toString.call(fn) : '';
        return tag === '[object Function]';
    }
    module.exports = isFunction;
});
/*superagent@3.3.1#lib/utils*/
define('superagent/lib/utils', function (require, exports, module) {
    exports.type = function (str) {
        return str.split(/ *; */).shift();
    };
    exports.params = function (str) {
        return str.split(/ *; */).reduce(function (obj, str) {
            var parts = str.split(/ *= */);
            var key = parts.shift();
            var val = parts.shift();
            if (key && val)
                obj[key] = val;
            return obj;
        }, {});
    };
    exports.parseLinks = function (str) {
        return str.split(/ *, */).reduce(function (obj, str) {
            var parts = str.split(/ *; */);
            var url = parts[0].slice(1, -1);
            var rel = parts[1].split(/ *= */)[1].slice(1, -1);
            obj[rel] = url;
            return obj;
        }, {});
    };
    exports.cleanHeader = function (header, shouldStripCookie) {
        delete header['content-type'];
        delete header['content-length'];
        delete header['transfer-encoding'];
        delete header['host'];
        if (shouldStripCookie) {
            delete header['cookie'];
        }
        return header;
    };
});
/*superagent@3.3.1#lib/response-base*/
define('superagent/lib/response-base', function (require, exports, module) {
    var utils = require('superagent/lib/utils');
    module.exports = ResponseBase;
    function ResponseBase(obj) {
        if (obj)
            return mixin(obj);
    }
    function mixin(obj) {
        for (var key in ResponseBase.prototype) {
            obj[key] = ResponseBase.prototype[key];
        }
        return obj;
    }
    ResponseBase.prototype.get = function (field) {
        return this.header[field.toLowerCase()];
    };
    ResponseBase.prototype._setHeaderProperties = function (header) {
        var ct = header['content-type'] || '';
        this.type = utils.type(ct);
        var params = utils.params(ct);
        for (var key in params)
            this[key] = params[key];
        this.links = {};
        try {
            if (header.link) {
                this.links = utils.parseLinks(header.link);
            }
        } catch (err) {
        }
    };
    ResponseBase.prototype._setStatusProperties = function (status) {
        var type = status / 100 | 0;
        this.status = this.statusCode = status;
        this.statusType = type;
        this.info = 1 == type;
        this.ok = 2 == type;
        this.redirect = 3 == type;
        this.clientError = 4 == type;
        this.serverError = 5 == type;
        this.error = 4 == type || 5 == type ? this.toError() : false;
        this.accepted = 202 == status;
        this.noContent = 204 == status;
        this.badRequest = 400 == status;
        this.unauthorized = 401 == status;
        this.notAcceptable = 406 == status;
        this.forbidden = 403 == status;
        this.notFound = 404 == status;
    };
});
/*superagent@3.3.1#lib/client*/
define('superagent/lib/client', function (require, exports, module) {
    var root;
    if (typeof window !== 'undefined') {
        root = window;
    } else if (typeof self !== 'undefined') {
        root = self;
    } else {
        console.warn('Using browser-only version of superagent in non-browser environment');
        root = this;
    }
    var Emitter = require('component-emitter');
    var RequestBase = require('superagent/lib/request-base');
    var isObject = require('superagent/lib/is-object');
    var isFunction = require('superagent/lib/is-function');
    var ResponseBase = require('superagent/lib/response-base');
    function noop() {
    }
    ;
    var request = exports = module.exports = function (method, url) {
        if ('function' == typeof url) {
            return new exports.Request('GET', method).end(url);
        }
        if (1 == arguments.length) {
            return new exports.Request('GET', method);
        }
        return new exports.Request(method, url);
    };
    exports.Request = Request;
    request.getXHR = function () {
        if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
            return new XMLHttpRequest();
        } else {
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
            }
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {
            }
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {
            }
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
            }
        }
        throw Error('Browser-only verison of superagent could not find XHR');
    };
    var trim = ''.trim ? function (s) {
        return s.trim();
    } : function (s) {
        return s.replace(/(^\s*|\s*$)/g, '');
    };
    function serialize(obj) {
        if (!isObject(obj))
            return obj;
        var pairs = [];
        for (var key in obj) {
            pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
        return pairs.join('&');
    }
    function pushEncodedKeyValuePair(pairs, key, val) {
        if (val != null) {
            if (Array.isArray(val)) {
                val.forEach(function (v) {
                    pushEncodedKeyValuePair(pairs, key, v);
                });
            } else if (isObject(val)) {
                for (var subkey in val) {
                    pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
                }
            } else {
                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
            }
        } else if (val === null) {
            pairs.push(encodeURIComponent(key));
        }
    }
    request.serializeObject = serialize;
    function parseString(str) {
        var obj = {};
        var pairs = str.split('&');
        var pair;
        var pos;
        for (var i = 0, len = pairs.length; i < len; ++i) {
            pair = pairs[i];
            pos = pair.indexOf('=');
            if (pos == -1) {
                obj[decodeURIComponent(pair)] = '';
            } else {
                obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
            }
        }
        return obj;
    }
    request.parseString = parseString;
    request.types = {
        html: 'text/html',
        json: 'application/json',
        xml: 'application/xml',
        urlencoded: 'application/x-www-form-urlencoded',
        'form': 'application/x-www-form-urlencoded',
        'form-data': 'application/x-www-form-urlencoded'
    };
    request.serialize = {
        'application/x-www-form-urlencoded': serialize,
        'application/json': JSON.stringify
    };
    request.parse = {
        'application/x-www-form-urlencoded': parseString,
        'application/json': JSON.parse
    };
    function parseHeader(str) {
        var lines = str.split(/\r?\n/);
        var fields = {};
        var index;
        var line;
        var field;
        var val;
        lines.pop();
        for (var i = 0, len = lines.length; i < len; ++i) {
            line = lines[i];
            index = line.indexOf(':');
            field = line.slice(0, index).toLowerCase();
            val = trim(line.slice(index + 1));
            fields[field] = val;
        }
        return fields;
    }
    function isJSON(mime) {
        return /[\/+]json\b/.test(mime);
    }
    function Response(req, options) {
        options = options || {};
        this.req = req;
        this.xhr = this.req.xhr;
        this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
        this.statusText = this.req.xhr.statusText;
        var status = this.xhr.status;
        if (status === 1223) {
            status = 204;
        }
        this._setStatusProperties(status);
        this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
        this.header['content-type'] = this.xhr.getResponseHeader('content-type');
        this._setHeaderProperties(this.header);
        if (null === this.text && req._responseType) {
            this.body = this.xhr.response;
        } else {
            this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
        }
    }
    ResponseBase(Response.prototype);
    Response.prototype._parseBody = function (str) {
        var parse = request.parse[this.type];
        if (this.req._parser) {
            return this.req._parser(this, str);
        }
        if (!parse && isJSON(this.type)) {
            parse = request.parse['application/json'];
        }
        return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
    };
    Response.prototype.toError = function () {
        var req = this.req;
        var method = req.method;
        var url = req.url;
        var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
        var err = new Error(msg);
        err.status = this.status;
        err.method = method;
        err.url = url;
        return err;
    };
    request.Response = Response;
    function Request(method, url) {
        var self = this;
        this._query = this._query || [];
        this.method = method;
        this.url = url;
        this.header = {};
        this._header = {};
        this.on('end', function () {
            var err = null;
            var res = null;
            try {
                res = new Response(self);
            } catch (e) {
                err = new Error('Parser is unable to parse the response');
                err.parse = true;
                err.original = e;
                if (self.xhr) {
                    err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
                    err.status = self.xhr.status ? self.xhr.status : null;
                    err.statusCode = err.status;
                } else {
                    err.rawResponse = null;
                    err.status = null;
                }
                return self.callback(err);
            }
            self.emit('response', res);
            var new_err;
            try {
                if (!self._isResponseOK(res)) {
                    new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
                    new_err.original = err;
                    new_err.response = res;
                    new_err.status = res.status;
                }
            } catch (e) {
                new_err = e;
            }
            if (new_err) {
                self.callback(new_err, res);
            } else {
                self.callback(null, res);
            }
        });
    }
    Emitter(Request.prototype);
    RequestBase(Request.prototype);
    Request.prototype.type = function (type) {
        this.set('Content-Type', request.types[type] || type);
        return this;
    };
    Request.prototype.accept = function (type) {
        this.set('Accept', request.types[type] || type);
        return this;
    };
    Request.prototype.auth = function (user, pass, options) {
        if (!options) {
            options = { type: 'function' === typeof btoa ? 'basic' : 'auto' };
        }
        switch (options.type) {
        case 'basic':
            this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
            break;
        case 'auto':
            this.username = user;
            this.password = pass;
            break;
        }
        return this;
    };
    Request.prototype.query = function (val) {
        if ('string' != typeof val)
            val = serialize(val);
        if (val)
            this._query.push(val);
        return this;
    };
    Request.prototype.attach = function (field, file, options) {
        if (this._data) {
            throw Error('superagent can\'t mix .send() and .attach()');
        }
        this._getFormData().append(field, file, options || file.name);
        return this;
    };
    Request.prototype._getFormData = function () {
        if (!this._formData) {
            this._formData = new root.FormData();
        }
        return this._formData;
    };
    Request.prototype.callback = function (err, res) {
        var fn = this._callback;
        this.clearTimeout();
        if (err) {
            this.emit('error', err);
        }
        fn(err, res);
    };
    Request.prototype.crossDomainError = function () {
        var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
        err.crossDomain = true;
        err.status = this.status;
        err.method = this.method;
        err.url = this.url;
        this.callback(err);
    };
    Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
        console.warn('This is not supported in browser version of superagent');
        return this;
    };
    Request.prototype.pipe = Request.prototype.write = function () {
        throw Error('Streaming is not supported in browser version of superagent');
    };
    Request.prototype._appendQueryString = function () {
        var query = this._query.join('&');
        if (query) {
            this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
        }
        if (this._sort) {
            var index = this.url.indexOf('?');
            if (index >= 0) {
                var queryArr = this.url.substring(index + 1).split('&');
                if (isFunction(this._sort)) {
                    queryArr.sort(this._sort);
                } else {
                    queryArr.sort();
                }
                this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
            }
        }
    };
    Request.prototype._isHost = function _isHost(obj) {
        return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
    };
    Request.prototype.end = function (fn) {
        var self = this;
        var xhr = this.xhr = request.getXHR();
        var data = this._formData || this._data;
        if (this._endCalled) {
            console.warn('Warning: .end() was called twice. This is not supported in superagent');
        }
        this._endCalled = true;
        this._callback = fn || noop;
        xhr.onreadystatechange = function () {
            var readyState = xhr.readyState;
            if (readyState >= 2 && self._responseTimeoutTimer) {
                clearTimeout(self._responseTimeoutTimer);
            }
            if (4 != readyState) {
                return;
            }
            var status;
            try {
                status = xhr.status;
            } catch (e) {
                status = 0;
            }
            if (!status) {
                if (self.timedout || self._aborted)
                    return;
                return self.crossDomainError();
            }
            self.emit('end');
        };
        var handleProgress = function (direction, e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            e.direction = direction;
            self.emit('progress', e);
        };
        if (this.hasListeners('progress')) {
            try {
                xhr.onprogress = handleProgress.bind(null, 'download');
                if (xhr.upload) {
                    xhr.upload.onprogress = handleProgress.bind(null, 'upload');
                }
            } catch (e) {
            }
        }
        this._appendQueryString();
        this._setTimeouts();
        if (this.username && this.password) {
            xhr.open(this.method, this.url, true, this.username, this.password);
        } else {
            xhr.open(this.method, this.url, true);
        }
        if (this._withCredentials)
            xhr.withCredentials = true;
        if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
            var contentType = this._header['content-type'];
            var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
            if (!serialize && isJSON(contentType)) {
                serialize = request.serialize['application/json'];
            }
            if (serialize)
                data = serialize(data);
        }
        for (var field in this.header) {
            if (null == this.header[field])
                continue;
            xhr.setRequestHeader(field, this.header[field]);
        }
        if (this._responseType) {
            xhr.responseType = this._responseType;
        }
        this.emit('request', this);
        xhr.send(typeof data !== 'undefined' ? data : null);
        return this;
    };
    request.get = function (url, data, fn) {
        var req = request('GET', url);
        if ('function' == typeof data)
            fn = data, data = null;
        if (data)
            req.query(data);
        if (fn)
            req.end(fn);
        return req;
    };
    request.head = function (url, data, fn) {
        var req = request('HEAD', url);
        if ('function' == typeof data)
            fn = data, data = null;
        if (data)
            req.send(data);
        if (fn)
            req.end(fn);
        return req;
    };
    request.options = function (url, data, fn) {
        var req = request('OPTIONS', url);
        if ('function' == typeof data)
            fn = data, data = null;
        if (data)
            req.send(data);
        if (fn)
            req.end(fn);
        return req;
    };
    function del(url, fn) {
        var req = request('DELETE', url);
        if (fn)
            req.end(fn);
        return req;
    }
    ;
    request['del'] = del;
    request['delete'] = del;
    request.patch = function (url, data, fn) {
        var req = request('PATCH', url);
        if ('function' == typeof data)
            fn = data, data = null;
        if (data)
            req.send(data);
        if (fn)
            req.end(fn);
        return req;
    };
    request.post = function (url, data, fn) {
        var req = request('POST', url);
        if ('function' == typeof data)
            fn = data, data = null;
        if (data)
            req.send(data);
        if (fn)
            req.end(fn);
        return req;
    };
    request.put = function (url, data, fn) {
        var req = request('PUT', url);
        if ('function' == typeof data)
            fn = data, data = null;
        if (data)
            req.send(data);
        if (fn)
            req.end(fn);
        return req;
    };
});
/*socket.io-client@1.7.2#dist/socket.io*/
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define('socket.io-client/dist/socket.io', [], factory);
    else if (typeof exports === 'object')
        exports['io'] = factory();
    else
        root['io'] = factory();
}(this, function () {
    return function (modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
                return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = '';
        return __webpack_require__(0);
    }([
        function (module, exports, __webpack_require__) {
            'use strict';
            var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            var url = __webpack_require__(1);
            var parser = __webpack_require__(7);
            var Manager = __webpack_require__(17);
            var debug = __webpack_require__(3)('socket.io-client');
            module.exports = exports = lookup;
            var cache = exports.managers = {};
            function lookup(uri, opts) {
                if ((typeof uri === 'undefined' ? 'undefined' : _typeof(uri)) === 'object') {
                    opts = uri;
                    uri = undefined;
                }
                opts = opts || {};
                var parsed = url(uri);
                var source = parsed.source;
                var id = parsed.id;
                var path = parsed.path;
                var sameNamespace = cache[id] && path in cache[id].nsps;
                var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
                var io;
                if (newConnection) {
                    debug('ignoring socket cache for %s', source);
                    io = Manager(source, opts);
                } else {
                    if (!cache[id]) {
                        debug('new io instance for %s', source);
                        cache[id] = Manager(source, opts);
                    }
                    io = cache[id];
                }
                if (parsed.query && !opts.query) {
                    opts.query = parsed.query;
                } else if (opts && 'object' === _typeof(opts.query)) {
                    opts.query = encodeQueryString(opts.query);
                }
                return io.socket(parsed.path, opts);
            }
            function encodeQueryString(obj) {
                var str = [];
                for (var p in obj) {
                    if (obj.hasOwnProperty(p)) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                    }
                }
                return str.join('&');
            }
            exports.protocol = parser.protocol;
            exports.connect = lookup;
            exports.Manager = __webpack_require__(17);
            exports.Socket = __webpack_require__(44);
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                'use strict';
                var parseuri = __webpack_require__(2);
                var debug = __webpack_require__(3)('socket.io-client:url');
                module.exports = url;
                function url(uri, loc) {
                    var obj = uri;
                    loc = loc || global.location;
                    if (null == uri)
                        uri = loc.protocol + '//' + loc.host;
                    if ('string' === typeof uri) {
                        if ('/' === uri.charAt(0)) {
                            if ('/' === uri.charAt(1)) {
                                uri = loc.protocol + uri;
                            } else {
                                uri = loc.host + uri;
                            }
                        }
                        if (!/^(https?|wss?):\/\//.test(uri)) {
                            debug('protocol-less url %s', uri);
                            if ('undefined' !== typeof loc) {
                                uri = loc.protocol + '//' + uri;
                            } else {
                                uri = 'https://' + uri;
                            }
                        }
                        debug('parse %s', uri);
                        obj = parseuri(uri);
                    }
                    if (!obj.port) {
                        if (/^(http|ws)$/.test(obj.protocol)) {
                            obj.port = '80';
                        } else if (/^(http|ws)s$/.test(obj.protocol)) {
                            obj.port = '443';
                        }
                    }
                    obj.path = obj.path || '/';
                    var ipv6 = obj.host.indexOf(':') !== -1;
                    var host = ipv6 ? '[' + obj.host + ']' : obj.host;
                    obj.id = obj.protocol + '://' + host + ':' + obj.port;
                    obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
                    return obj;
                }
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports) {
            var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
            var parts = [
                'source',
                'protocol',
                'authority',
                'userInfo',
                'user',
                'password',
                'host',
                'port',
                'relative',
                'path',
                'directory',
                'file',
                'query',
                'anchor'
            ];
            module.exports = function parseuri(str) {
                var src = str, b = str.indexOf('['), e = str.indexOf(']');
                if (b != -1 && e != -1) {
                    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
                }
                var m = re.exec(str || ''), uri = {}, i = 14;
                while (i--) {
                    uri[parts[i]] = m[i] || '';
                }
                if (b != -1 && e != -1) {
                    uri.source = src;
                    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
                    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
                    uri.ipv6uri = true;
                }
                return uri;
            };
        },
        function (module, exports, __webpack_require__) {
            (function (process) {
                exports = module.exports = __webpack_require__(5);
                exports.log = log;
                exports.formatArgs = formatArgs;
                exports.save = save;
                exports.load = load;
                exports.useColors = useColors;
                exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
                exports.colors = [
                    'lightseagreen',
                    'forestgreen',
                    'goldenrod',
                    'dodgerblue',
                    'darkorchid',
                    'crimson'
                ];
                function useColors() {
                    return typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
                }
                exports.formatters.j = function (v) {
                    try {
                        return JSON.stringify(v);
                    } catch (err) {
                        return '[UnexpectedJSONParseError]: ' + err.message;
                    }
                };
                function formatArgs() {
                    var args = arguments;
                    var useColors = this.useColors;
                    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
                    if (!useColors)
                        return args;
                    var c = 'color: ' + this.color;
                    args = [
                        args[0],
                        c,
                        'color: inherit'
                    ].concat(Array.prototype.slice.call(args, 1));
                    var index = 0;
                    var lastC = 0;
                    args[0].replace(/%[a-z%]/g, function (match) {
                        if ('%%' === match)
                            return;
                        index++;
                        if ('%c' === match) {
                            lastC = index;
                        }
                    });
                    args.splice(lastC, 0, c);
                    return args;
                }
                function log() {
                    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
                }
                function save(namespaces) {
                    try {
                        if (null == namespaces) {
                            exports.storage.removeItem('debug');
                        } else {
                            exports.storage.debug = namespaces;
                        }
                    } catch (e) {
                    }
                }
                function load() {
                    var r;
                    try {
                        return exports.storage.debug;
                    } catch (e) {
                    }
                    if (typeof process !== 'undefined' && 'env' in process) {
                        return process.env.DEBUG;
                    }
                }
                exports.enable(load());
                function localstorage() {
                    try {
                        return window.localStorage;
                    } catch (e) {
                    }
                }
            }.call(exports, __webpack_require__(4)));
        },
        function (module, exports) {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function () {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            }());
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = '';
            process.versions = {};
            function noop() {
            }
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };
            process.cwd = function () {
                return '/';
            };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function () {
                return 0;
            };
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = debug.debug = debug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = __webpack_require__(6);
            exports.names = [];
            exports.skips = [];
            exports.formatters = {};
            var prevColor = 0;
            var prevTime;
            function selectColor() {
                return exports.colors[prevColor++ % exports.colors.length];
            }
            function debug(namespace) {
                function disabled() {
                }
                disabled.enabled = false;
                function enabled() {
                    var self = enabled;
                    var curr = +new Date();
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    if (null == self.useColors)
                        self.useColors = exports.useColors();
                    if (null == self.color && self.useColors)
                        self.color = selectColor();
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i];
                    }
                    args[0] = exports.coerce(args[0]);
                    if ('string' !== typeof args[0]) {
                        args = ['%o'].concat(args);
                    }
                    var index = 0;
                    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
                        if (match === '%%')
                            return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ('function' === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    });
                    args = exports.formatArgs.apply(self, args);
                    var logFn = enabled.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args);
                }
                enabled.enabled = true;
                var fn = exports.enabled(namespace) ? enabled : disabled;
                fn.namespace = namespace;
                return fn;
            }
            function enable(namespaces) {
                exports.save(namespaces);
                var split = (namespaces || '').split(/[\s,]+/);
                var len = split.length;
                for (var i = 0; i < len; i++) {
                    if (!split[i])
                        continue;
                    namespaces = split[i].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?');
                    if (namespaces[0] === '-') {
                        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                    } else {
                        exports.names.push(new RegExp('^' + namespaces + '$'));
                    }
                }
            }
            function disable() {
                exports.enable('');
            }
            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function coerce(val) {
                if (val instanceof Error)
                    return val.stack || val.message;
                return val;
            }
        },
        function (module, exports) {
            var s = 1000;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module.exports = function (val, options) {
                options = options || {};
                var type = typeof val;
                if (type === 'string' && val.length > 0) {
                    return parse(val);
                } else if (type === 'number' && isNaN(val) === false) {
                    return options.long ? fmtLong(val) : fmtShort(val);
                }
                throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
            };
            function parse(str) {
                str = String(str);
                if (str.length > 10000) {
                    return;
                }
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (!match) {
                    return;
                }
                var n = parseFloat(match[1]);
                var type = (match[2] || 'ms').toLowerCase();
                switch (type) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                    return n * y;
                case 'days':
                case 'day':
                case 'd':
                    return n * d;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                    return n * h;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                    return n * m;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                    return n * s;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                    return n;
                default:
                    return undefined;
                }
            }
            function fmtShort(ms) {
                if (ms >= d) {
                    return Math.round(ms / d) + 'd';
                }
                if (ms >= h) {
                    return Math.round(ms / h) + 'h';
                }
                if (ms >= m) {
                    return Math.round(ms / m) + 'm';
                }
                if (ms >= s) {
                    return Math.round(ms / s) + 's';
                }
                return ms + 'ms';
            }
            function fmtLong(ms) {
                return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
            }
            function plural(ms, n, name) {
                if (ms < n) {
                    return;
                }
                if (ms < n * 1.5) {
                    return Math.floor(ms / n) + ' ' + name;
                }
                return Math.ceil(ms / n) + ' ' + name + 's';
            }
        },
        function (module, exports, __webpack_require__) {
            var debug = __webpack_require__(8)('socket.io-parser');
            var json = __webpack_require__(11);
            var Emitter = __webpack_require__(13);
            var binary = __webpack_require__(14);
            var isBuf = __webpack_require__(16);
            exports.protocol = 4;
            exports.types = [
                'CONNECT',
                'DISCONNECT',
                'EVENT',
                'ACK',
                'ERROR',
                'BINARY_EVENT',
                'BINARY_ACK'
            ];
            exports.CONNECT = 0;
            exports.DISCONNECT = 1;
            exports.EVENT = 2;
            exports.ACK = 3;
            exports.ERROR = 4;
            exports.BINARY_EVENT = 5;
            exports.BINARY_ACK = 6;
            exports.Encoder = Encoder;
            exports.Decoder = Decoder;
            function Encoder() {
            }
            Encoder.prototype.encode = function (obj, callback) {
                debug('encoding packet %j', obj);
                if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
                    encodeAsBinary(obj, callback);
                } else {
                    var encoding = encodeAsString(obj);
                    callback([encoding]);
                }
            };
            function encodeAsString(obj) {
                var str = '';
                var nsp = false;
                str += obj.type;
                if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
                    str += obj.attachments;
                    str += '-';
                }
                if (obj.nsp && '/' != obj.nsp) {
                    nsp = true;
                    str += obj.nsp;
                }
                if (null != obj.id) {
                    if (nsp) {
                        str += ',';
                        nsp = false;
                    }
                    str += obj.id;
                }
                if (null != obj.data) {
                    if (nsp)
                        str += ',';
                    str += json.stringify(obj.data);
                }
                debug('encoded %j as %s', obj, str);
                return str;
            }
            function encodeAsBinary(obj, callback) {
                function writeEncoding(bloblessData) {
                    var deconstruction = binary.deconstructPacket(bloblessData);
                    var pack = encodeAsString(deconstruction.packet);
                    var buffers = deconstruction.buffers;
                    buffers.unshift(pack);
                    callback(buffers);
                }
                binary.removeBlobs(obj, writeEncoding);
            }
            function Decoder() {
                this.reconstructor = null;
            }
            Emitter(Decoder.prototype);
            Decoder.prototype.add = function (obj) {
                var packet;
                if ('string' == typeof obj) {
                    packet = decodeString(obj);
                    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
                        this.reconstructor = new BinaryReconstructor(packet);
                        if (this.reconstructor.reconPack.attachments === 0) {
                            this.emit('decoded', packet);
                        }
                    } else {
                        this.emit('decoded', packet);
                    }
                } else if (isBuf(obj) || obj.base64) {
                    if (!this.reconstructor) {
                        throw new Error('got binary data when not reconstructing a packet');
                    } else {
                        packet = this.reconstructor.takeBinaryData(obj);
                        if (packet) {
                            this.reconstructor = null;
                            this.emit('decoded', packet);
                        }
                    }
                } else {
                    throw new Error('Unknown type: ' + obj);
                }
            };
            function decodeString(str) {
                var p = {};
                var i = 0;
                p.type = Number(str.charAt(0));
                if (null == exports.types[p.type])
                    return error();
                if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
                    var buf = '';
                    while (str.charAt(++i) != '-') {
                        buf += str.charAt(i);
                        if (i == str.length)
                            break;
                    }
                    if (buf != Number(buf) || str.charAt(i) != '-') {
                        throw new Error('Illegal attachments');
                    }
                    p.attachments = Number(buf);
                }
                if ('/' == str.charAt(i + 1)) {
                    p.nsp = '';
                    while (++i) {
                        var c = str.charAt(i);
                        if (',' == c)
                            break;
                        p.nsp += c;
                        if (i == str.length)
                            break;
                    }
                } else {
                    p.nsp = '/';
                }
                var next = str.charAt(i + 1);
                if ('' !== next && Number(next) == next) {
                    p.id = '';
                    while (++i) {
                        var c = str.charAt(i);
                        if (null == c || Number(c) != c) {
                            --i;
                            break;
                        }
                        p.id += str.charAt(i);
                        if (i == str.length)
                            break;
                    }
                    p.id = Number(p.id);
                }
                if (str.charAt(++i)) {
                    p = tryParse(p, str.substr(i));
                }
                debug('decoded %s as %j', str, p);
                return p;
            }
            function tryParse(p, str) {
                try {
                    p.data = json.parse(str);
                } catch (e) {
                    return error();
                }
                return p;
            }
            ;
            Decoder.prototype.destroy = function () {
                if (this.reconstructor) {
                    this.reconstructor.finishedReconstruction();
                }
            };
            function BinaryReconstructor(packet) {
                this.reconPack = packet;
                this.buffers = [];
            }
            BinaryReconstructor.prototype.takeBinaryData = function (binData) {
                this.buffers.push(binData);
                if (this.buffers.length == this.reconPack.attachments) {
                    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
                    this.finishedReconstruction();
                    return packet;
                }
                return null;
            };
            BinaryReconstructor.prototype.finishedReconstruction = function () {
                this.reconPack = null;
                this.buffers = [];
            };
            function error(data) {
                return {
                    type: exports.ERROR,
                    data: 'parser error'
                };
            }
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(9);
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;
            exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
            exports.colors = [
                'lightseagreen',
                'forestgreen',
                'goldenrod',
                'dodgerblue',
                'darkorchid',
                'crimson'
            ];
            function useColors() {
                return 'WebkitAppearance' in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
            }
            exports.formatters.j = function (v) {
                return JSON.stringify(v);
            };
            function formatArgs() {
                var args = arguments;
                var useColors = this.useColors;
                args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
                if (!useColors)
                    return args;
                var c = 'color: ' + this.color;
                args = [
                    args[0],
                    c,
                    'color: inherit'
                ].concat(Array.prototype.slice.call(args, 1));
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-z%]/g, function (match) {
                    if ('%%' === match)
                        return;
                    index++;
                    if ('%c' === match) {
                        lastC = index;
                    }
                });
                args.splice(lastC, 0, c);
                return args;
            }
            function log() {
                return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }
            function save(namespaces) {
                try {
                    if (null == namespaces) {
                        exports.storage.removeItem('debug');
                    } else {
                        exports.storage.debug = namespaces;
                    }
                } catch (e) {
                }
            }
            function load() {
                var r;
                try {
                    r = exports.storage.debug;
                } catch (e) {
                }
                return r;
            }
            exports.enable(load());
            function localstorage() {
                try {
                    return window.localStorage;
                } catch (e) {
                }
            }
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = debug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = __webpack_require__(10);
            exports.names = [];
            exports.skips = [];
            exports.formatters = {};
            var prevColor = 0;
            var prevTime;
            function selectColor() {
                return exports.colors[prevColor++ % exports.colors.length];
            }
            function debug(namespace) {
                function disabled() {
                }
                disabled.enabled = false;
                function enabled() {
                    var self = enabled;
                    var curr = +new Date();
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    if (null == self.useColors)
                        self.useColors = exports.useColors();
                    if (null == self.color && self.useColors)
                        self.color = selectColor();
                    var args = Array.prototype.slice.call(arguments);
                    args[0] = exports.coerce(args[0]);
                    if ('string' !== typeof args[0]) {
                        args = ['%o'].concat(args);
                    }
                    var index = 0;
                    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
                        if (match === '%%')
                            return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ('function' === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    });
                    if ('function' === typeof exports.formatArgs) {
                        args = exports.formatArgs.apply(self, args);
                    }
                    var logFn = enabled.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args);
                }
                enabled.enabled = true;
                var fn = exports.enabled(namespace) ? enabled : disabled;
                fn.namespace = namespace;
                return fn;
            }
            function enable(namespaces) {
                exports.save(namespaces);
                var split = (namespaces || '').split(/[\s,]+/);
                var len = split.length;
                for (var i = 0; i < len; i++) {
                    if (!split[i])
                        continue;
                    namespaces = split[i].replace(/\*/g, '.*?');
                    if (namespaces[0] === '-') {
                        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                    } else {
                        exports.names.push(new RegExp('^' + namespaces + '$'));
                    }
                }
            }
            function disable() {
                exports.enable('');
            }
            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function coerce(val) {
                if (val instanceof Error)
                    return val.stack || val.message;
                return val;
            }
        },
        function (module, exports) {
            var s = 1000;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module.exports = function (val, options) {
                options = options || {};
                if ('string' == typeof val)
                    return parse(val);
                return options.long ? long(val) : short(val);
            };
            function parse(str) {
                str = '' + str;
                if (str.length > 10000)
                    return;
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (!match)
                    return;
                var n = parseFloat(match[1]);
                var type = (match[2] || 'ms').toLowerCase();
                switch (type) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                    return n * y;
                case 'days':
                case 'day':
                case 'd':
                    return n * d;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                    return n * h;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                    return n * m;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                    return n * s;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                    return n;
                }
            }
            function short(ms) {
                if (ms >= d)
                    return Math.round(ms / d) + 'd';
                if (ms >= h)
                    return Math.round(ms / h) + 'h';
                if (ms >= m)
                    return Math.round(ms / m) + 'm';
                if (ms >= s)
                    return Math.round(ms / s) + 's';
                return ms + 'ms';
            }
            function long(ms) {
                return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
            }
            function plural(ms, n, name) {
                if (ms < n)
                    return;
                if (ms < n * 1.5)
                    return Math.floor(ms / n) + ' ' + name;
                return Math.ceil(ms / n) + ' ' + name + 's';
            }
        },
        function (module, exports, __webpack_require__) {
            (function (module, global) {
                var define = false;
                ;
                (function () {
                    var isLoader = typeof define === 'function' && define.amd;
                    var objectTypes = {
                        'function': true,
                        'object': true
                    };
                    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
                    var root = objectTypes[typeof window] && window || this, freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == 'object' && global;
                    if (freeGlobal && (freeGlobal['global'] === freeGlobal || freeGlobal['window'] === freeGlobal || freeGlobal['self'] === freeGlobal)) {
                        root = freeGlobal;
                    }
                    function runInContext(context, exports) {
                        context || (context = root['Object']());
                        exports || (exports = root['Object']());
                        var Number = context['Number'] || root['Number'], String = context['String'] || root['String'], Object = context['Object'] || root['Object'], Date = context['Date'] || root['Date'], SyntaxError = context['SyntaxError'] || root['SyntaxError'], TypeError = context['TypeError'] || root['TypeError'], Math = context['Math'] || root['Math'], nativeJSON = context['JSON'] || root['JSON'];
                        if (typeof nativeJSON == 'object' && nativeJSON) {
                            exports.stringify = nativeJSON.stringify;
                            exports.parse = nativeJSON.parse;
                        }
                        var objectProto = Object.prototype, getClass = objectProto.toString, isProperty, forEach, undef;
                        var isExtended = new Date(-3509827334573292);
                        try {
                            isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
                        } catch (exception) {
                        }
                        function has(name) {
                            if (has[name] !== undef) {
                                return has[name];
                            }
                            var isSupported;
                            if (name == 'bug-string-char-index') {
                                isSupported = 'a'[0] != 'a';
                            } else if (name == 'json') {
                                isSupported = has('json-stringify') && has('json-parse');
                            } else {
                                var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if (name == 'json-stringify') {
                                    var stringify = exports.stringify, stringifySupported = typeof stringify == 'function' && isExtended;
                                    if (stringifySupported) {
                                        (value = function () {
                                            return 1;
                                        }).toJSON = value;
                                        try {
                                            stringifySupported = stringify(0) === '0' && stringify(new Number()) === '0' && stringify(new String()) == '""' && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && stringify(value) === '1' && stringify([value]) == '[1]' && stringify([undef]) == '[null]' && stringify(null) == 'null' && stringify([
                                                undef,
                                                getClass,
                                                null
                                            ]) == '[null,null,null]' && stringify({
                                                'a': [
                                                    value,
                                                    true,
                                                    false,
                                                    null,
                                                    '\0\b\n\f\r\t'
                                                ]
                                            }) == serialized && stringify(null, value) === '1' && stringify([
                                                1,
                                                2
                                            ], null, 1) == '[\n 1,\n 2\n]' && stringify(new Date(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && stringify(new Date(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && stringify(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                                        } catch (exception) {
                                            stringifySupported = false;
                                        }
                                    }
                                    isSupported = stringifySupported;
                                }
                                if (name == 'json-parse') {
                                    var parse = exports.parse;
                                    if (typeof parse == 'function') {
                                        try {
                                            if (parse('0') === 0 && !parse(false)) {
                                                value = parse(serialized);
                                                var parseSupported = value['a'].length == 5 && value['a'][0] === 1;
                                                if (parseSupported) {
                                                    try {
                                                        parseSupported = !parse('"\t"');
                                                    } catch (exception) {
                                                    }
                                                    if (parseSupported) {
                                                        try {
                                                            parseSupported = parse('01') !== 1;
                                                        } catch (exception) {
                                                        }
                                                    }
                                                    if (parseSupported) {
                                                        try {
                                                            parseSupported = parse('1.') !== 1;
                                                        } catch (exception) {
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (exception) {
                                            parseSupported = false;
                                        }
                                    }
                                    isSupported = parseSupported;
                                }
                            }
                            return has[name] = !!isSupported;
                        }
                        if (!has('json')) {
                            var functionClass = '[object Function]', dateClass = '[object Date]', numberClass = '[object Number]', stringClass = '[object String]', arrayClass = '[object Array]', booleanClass = '[object Boolean]';
                            var charIndexBuggy = has('bug-string-char-index');
                            if (!isExtended) {
                                var floor = Math.floor;
                                var Months = [
                                    0,
                                    31,
                                    59,
                                    90,
                                    120,
                                    151,
                                    181,
                                    212,
                                    243,
                                    273,
                                    304,
                                    334
                                ];
                                var getDay = function (year, month) {
                                    return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                                };
                            }
                            if (!(isProperty = objectProto.hasOwnProperty)) {
                                isProperty = function (property) {
                                    var members = {}, constructor;
                                    if ((members.__proto__ = null, members.__proto__ = { 'toString': 1 }, members).toString != getClass) {
                                        isProperty = function (property) {
                                            var original = this.__proto__, result = property in (this.__proto__ = null, this);
                                            this.__proto__ = original;
                                            return result;
                                        };
                                    } else {
                                        constructor = members.constructor;
                                        isProperty = function (property) {
                                            var parent = (this.constructor || constructor).prototype;
                                            return property in this && !(property in parent && this[property] === parent[property]);
                                        };
                                    }
                                    members = null;
                                    return isProperty.call(this, property);
                                };
                            }
                            forEach = function (object, callback) {
                                var size = 0, Properties, members, property;
                                (Properties = function () {
                                    this.valueOf = 0;
                                }).prototype.valueOf = 0;
                                members = new Properties();
                                for (property in members) {
                                    if (isProperty.call(members, property)) {
                                        size++;
                                    }
                                }
                                Properties = members = null;
                                if (!size) {
                                    members = [
                                        'valueOf',
                                        'toString',
                                        'toLocaleString',
                                        'propertyIsEnumerable',
                                        'isPrototypeOf',
                                        'hasOwnProperty',
                                        'constructor'
                                    ];
                                    forEach = function (object, callback) {
                                        var isFunction = getClass.call(object) == functionClass, property, length;
                                        var hasProperty = !isFunction && typeof object.constructor != 'function' && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                                        for (property in object) {
                                            if (!(isFunction && property == 'prototype') && hasProperty.call(object, property)) {
                                                callback(property);
                                            }
                                        }
                                        for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                                    };
                                } else if (size == 2) {
                                    forEach = function (object, callback) {
                                        var members = {}, isFunction = getClass.call(object) == functionClass, property;
                                        for (property in object) {
                                            if (!(isFunction && property == 'prototype') && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                                                callback(property);
                                            }
                                        }
                                    };
                                } else {
                                    forEach = function (object, callback) {
                                        var isFunction = getClass.call(object) == functionClass, property, isConstructor;
                                        for (property in object) {
                                            if (!(isFunction && property == 'prototype') && isProperty.call(object, property) && !(isConstructor = property === 'constructor')) {
                                                callback(property);
                                            }
                                        }
                                        if (isConstructor || isProperty.call(object, property = 'constructor')) {
                                            callback(property);
                                        }
                                    };
                                }
                                return forEach(object, callback);
                            };
                            if (!has('json-stringify')) {
                                var Escapes = {
                                    92: '\\\\',
                                    34: '\\"',
                                    8: '\\b',
                                    12: '\\f',
                                    10: '\\n',
                                    13: '\\r',
                                    9: '\\t'
                                };
                                var leadingZeroes = '000000';
                                var toPaddedString = function (width, value) {
                                    return (leadingZeroes + (value || 0)).slice(-width);
                                };
                                var unicodePrefix = '\\u00';
                                var quote = function (value) {
                                    var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
                                    var symbols = useCharIndex && (charIndexBuggy ? value.split('') : value);
                                    for (; index < length; index++) {
                                        var charCode = value.charCodeAt(index);
                                        switch (charCode) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            result += Escapes[charCode];
                                            break;
                                        default:
                                            if (charCode < 32) {
                                                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                                                break;
                                            }
                                            result += useCharIndex ? symbols[index] : value.charAt(index);
                                        }
                                    }
                                    return result + '"';
                                };
                                var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
                                    var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                                    try {
                                        value = object[property];
                                    } catch (exception) {
                                    }
                                    if (typeof value == 'object' && value) {
                                        className = getClass.call(value);
                                        if (className == dateClass && !isProperty.call(value, 'toJSON')) {
                                            if (value > -1 / 0 && value < 1 / 0) {
                                                if (getDay) {
                                                    date = floor(value / 86400000);
                                                    for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                                                    date = 1 + date - getDay(year, month);
                                                    time = (value % 86400000 + 86400000) % 86400000;
                                                    hours = floor(time / 3600000) % 24;
                                                    minutes = floor(time / 60000) % 60;
                                                    seconds = floor(time / 1000) % 60;
                                                    milliseconds = time % 1000;
                                                } else {
                                                    year = value.getUTCFullYear();
                                                    month = value.getUTCMonth();
                                                    date = value.getUTCDate();
                                                    hours = value.getUTCHours();
                                                    minutes = value.getUTCMinutes();
                                                    seconds = value.getUTCSeconds();
                                                    milliseconds = value.getUTCMilliseconds();
                                                }
                                                value = (year <= 0 || year >= 10000 ? (year < 0 ? '-' : '+') + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + '-' + toPaddedString(2, month + 1) + '-' + toPaddedString(2, date) + 'T' + toPaddedString(2, hours) + ':' + toPaddedString(2, minutes) + ':' + toPaddedString(2, seconds) + '.' + toPaddedString(3, milliseconds) + 'Z';
                                            } else {
                                                value = null;
                                            }
                                        } else if (typeof value.toJSON == 'function' && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, 'toJSON'))) {
                                            value = value.toJSON(property);
                                        }
                                    }
                                    if (callback) {
                                        value = callback.call(object, property, value);
                                    }
                                    if (value === null) {
                                        return 'null';
                                    }
                                    className = getClass.call(value);
                                    if (className == booleanClass) {
                                        return '' + value;
                                    } else if (className == numberClass) {
                                        return value > -1 / 0 && value < 1 / 0 ? '' + value : 'null';
                                    } else if (className == stringClass) {
                                        return quote('' + value);
                                    }
                                    if (typeof value == 'object') {
                                        for (length = stack.length; length--;) {
                                            if (stack[length] === value) {
                                                throw TypeError();
                                            }
                                        }
                                        stack.push(value);
                                        results = [];
                                        prefix = indentation;
                                        indentation += whitespace;
                                        if (className == arrayClass) {
                                            for (index = 0, length = value.length; index < length; index++) {
                                                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                                                results.push(element === undef ? 'null' : element);
                                            }
                                            result = results.length ? whitespace ? '[\n' + indentation + results.join(',\n' + indentation) + '\n' + prefix + ']' : '[' + results.join(',') + ']' : '[]';
                                        } else {
                                            forEach(properties || value, function (property) {
                                                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                                if (element !== undef) {
                                                    results.push(quote(property) + ':' + (whitespace ? ' ' : '') + element);
                                                }
                                            });
                                            result = results.length ? whitespace ? '{\n' + indentation + results.join(',\n' + indentation) + '\n' + prefix + '}' : '{' + results.join(',') + '}' : '{}';
                                        }
                                        stack.pop();
                                        return result;
                                    }
                                };
                                exports.stringify = function (source, filter, width) {
                                    var whitespace, callback, properties, className;
                                    if (objectTypes[typeof filter] && filter) {
                                        if ((className = getClass.call(filter)) == functionClass) {
                                            callback = filter;
                                        } else if (className == arrayClass) {
                                            properties = {};
                                            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
                                        }
                                    }
                                    if (width) {
                                        if ((className = getClass.call(width)) == numberClass) {
                                            if ((width -= width % 1) > 0) {
                                                for (whitespace = '', width > 10 && (width = 10); whitespace.length < width; whitespace += ' ');
                                            }
                                        } else if (className == stringClass) {
                                            whitespace = width.length <= 10 ? width : width.slice(0, 10);
                                        }
                                    }
                                    return serialize('', (value = {}, value[''] = source, value), callback, properties, whitespace, '', []);
                                };
                            }
                            if (!has('json-parse')) {
                                var fromCharCode = String.fromCharCode;
                                var Unescapes = {
                                    92: '\\',
                                    34: '"',
                                    47: '/',
                                    98: '\b',
                                    116: '\t',
                                    110: '\n',
                                    102: '\f',
                                    114: '\r'
                                };
                                var Index, Source;
                                var abort = function () {
                                    Index = Source = null;
                                    throw SyntaxError();
                                };
                                var lex = function () {
                                    var source = Source, length = source.length, value, begin, position, isSigned, charCode;
                                    while (Index < length) {
                                        charCode = source.charCodeAt(Index);
                                        switch (charCode) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            Index++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            value = charIndexBuggy ? source.charAt(Index) : source[Index];
                                            Index++;
                                            return value;
                                        case 34:
                                            for (value = '@', Index++; Index < length;) {
                                                charCode = source.charCodeAt(Index);
                                                if (charCode < 32) {
                                                    abort();
                                                } else if (charCode == 92) {
                                                    charCode = source.charCodeAt(++Index);
                                                    switch (charCode) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        value += Unescapes[charCode];
                                                        Index++;
                                                        break;
                                                    case 117:
                                                        begin = ++Index;
                                                        for (position = Index + 4; Index < position; Index++) {
                                                            charCode = source.charCodeAt(Index);
                                                            if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                                                abort();
                                                            }
                                                        }
                                                        value += fromCharCode('0x' + source.slice(begin, Index));
                                                        break;
                                                    default:
                                                        abort();
                                                    }
                                                } else {
                                                    if (charCode == 34) {
                                                        break;
                                                    }
                                                    charCode = source.charCodeAt(Index);
                                                    begin = Index;
                                                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                                                        charCode = source.charCodeAt(++Index);
                                                    }
                                                    value += source.slice(begin, Index);
                                                }
                                            }
                                            if (source.charCodeAt(Index) == 34) {
                                                Index++;
                                                return value;
                                            }
                                            abort();
                                        default:
                                            begin = Index;
                                            if (charCode == 45) {
                                                isSigned = true;
                                                charCode = source.charCodeAt(++Index);
                                            }
                                            if (charCode >= 48 && charCode <= 57) {
                                                if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                                                    abort();
                                                }
                                                isSigned = false;
                                                for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                                                if (source.charCodeAt(Index) == 46) {
                                                    position = ++Index;
                                                    for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                                                    if (position == Index) {
                                                        abort();
                                                    }
                                                    Index = position;
                                                }
                                                charCode = source.charCodeAt(Index);
                                                if (charCode == 101 || charCode == 69) {
                                                    charCode = source.charCodeAt(++Index);
                                                    if (charCode == 43 || charCode == 45) {
                                                        Index++;
                                                    }
                                                    for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                                                    if (position == Index) {
                                                        abort();
                                                    }
                                                    Index = position;
                                                }
                                                return +source.slice(begin, Index);
                                            }
                                            if (isSigned) {
                                                abort();
                                            }
                                            if (source.slice(Index, Index + 4) == 'true') {
                                                Index += 4;
                                                return true;
                                            } else if (source.slice(Index, Index + 5) == 'false') {
                                                Index += 5;
                                                return false;
                                            } else if (source.slice(Index, Index + 4) == 'null') {
                                                Index += 4;
                                                return null;
                                            }
                                            abort();
                                        }
                                    }
                                    return '$';
                                };
                                var get = function (value) {
                                    var results, hasMembers;
                                    if (value == '$') {
                                        abort();
                                    }
                                    if (typeof value == 'string') {
                                        if ((charIndexBuggy ? value.charAt(0) : value[0]) == '@') {
                                            return value.slice(1);
                                        }
                                        if (value == '[') {
                                            results = [];
                                            for (;; hasMembers || (hasMembers = true)) {
                                                value = lex();
                                                if (value == ']') {
                                                    break;
                                                }
                                                if (hasMembers) {
                                                    if (value == ',') {
                                                        value = lex();
                                                        if (value == ']') {
                                                            abort();
                                                        }
                                                    } else {
                                                        abort();
                                                    }
                                                }
                                                if (value == ',') {
                                                    abort();
                                                }
                                                results.push(get(value));
                                            }
                                            return results;
                                        } else if (value == '{') {
                                            results = {};
                                            for (;; hasMembers || (hasMembers = true)) {
                                                value = lex();
                                                if (value == '}') {
                                                    break;
                                                }
                                                if (hasMembers) {
                                                    if (value == ',') {
                                                        value = lex();
                                                        if (value == '}') {
                                                            abort();
                                                        }
                                                    } else {
                                                        abort();
                                                    }
                                                }
                                                if (value == ',' || typeof value != 'string' || (charIndexBuggy ? value.charAt(0) : value[0]) != '@' || lex() != ':') {
                                                    abort();
                                                }
                                                results[value.slice(1)] = get(lex());
                                            }
                                            return results;
                                        }
                                        abort();
                                    }
                                    return value;
                                };
                                var update = function (source, property, callback) {
                                    var element = walk(source, property, callback);
                                    if (element === undef) {
                                        delete source[property];
                                    } else {
                                        source[property] = element;
                                    }
                                };
                                var walk = function (source, property, callback) {
                                    var value = source[property], length;
                                    if (typeof value == 'object' && value) {
                                        if (getClass.call(value) == arrayClass) {
                                            for (length = value.length; length--;) {
                                                update(value, length, callback);
                                            }
                                        } else {
                                            forEach(value, function (property) {
                                                update(value, property, callback);
                                            });
                                        }
                                    }
                                    return callback.call(source, property, value);
                                };
                                exports.parse = function (source, callback) {
                                    var result, value;
                                    Index = 0;
                                    Source = '' + source;
                                    result = get(lex());
                                    if (lex() != '$') {
                                        abort();
                                    }
                                    Index = Source = null;
                                    return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[''] = result, value), '', callback) : result;
                                };
                            }
                        }
                        exports['runInContext'] = runInContext;
                        return exports;
                    }
                    if (freeExports && !isLoader) {
                        runInContext(root, freeExports);
                    } else {
                        var nativeJSON = root.JSON, previousJSON = root['JSON3'], isRestored = false;
                        var JSON3 = runInContext(root, root['JSON3'] = {
                            'noConflict': function () {
                                if (!isRestored) {
                                    isRestored = true;
                                    root.JSON = nativeJSON;
                                    root['JSON3'] = previousJSON;
                                    nativeJSON = previousJSON = null;
                                }
                                return JSON3;
                            }
                        });
                        root.JSON = {
                            'parse': JSON3.parse,
                            'stringify': JSON3.stringify
                        };
                    }
                    if (isLoader) {
                        define('socket.io-client/dist/socket.io', function () {
                            return JSON3;
                        });
                    }
                }.call(this));
            }.call(exports, __webpack_require__(12)(module), function () {
                return this;
            }()));
        },
        function (module, exports) {
            module.exports = function (module) {
                if (!module.webpackPolyfill) {
                    module.deprecate = function () {
                    };
                    module.paths = [];
                    module.children = [];
                    module.webpackPolyfill = 1;
                }
                return module;
            };
        },
        function (module, exports) {
            module.exports = Emitter;
            function Emitter(obj) {
                if (obj)
                    return mixin(obj);
            }
            ;
            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key];
                }
                return obj;
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || []).push(fn);
                return this;
            };
            Emitter.prototype.once = function (event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};
                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments);
                }
                on.fn = fn;
                this.on(event, on);
                return this;
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }
                var callbacks = this._callbacks[event];
                if (!callbacks)
                    return this;
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this;
                }
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
                return this;
            };
            Emitter.prototype.emit = function (event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args);
                    }
                }
                return this;
            };
            Emitter.prototype.listeners = function (event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || [];
            };
            Emitter.prototype.hasListeners = function (event) {
                return !!this.listeners(event).length;
            };
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var isArray = __webpack_require__(15);
                var isBuf = __webpack_require__(16);
                exports.deconstructPacket = function (packet) {
                    var buffers = [];
                    var packetData = packet.data;
                    function _deconstructPacket(data) {
                        if (!data)
                            return data;
                        if (isBuf(data)) {
                            var placeholder = {
                                _placeholder: true,
                                num: buffers.length
                            };
                            buffers.push(data);
                            return placeholder;
                        } else if (isArray(data)) {
                            var newData = new Array(data.length);
                            for (var i = 0; i < data.length; i++) {
                                newData[i] = _deconstructPacket(data[i]);
                            }
                            return newData;
                        } else if ('object' == typeof data && !(data instanceof Date)) {
                            var newData = {};
                            for (var key in data) {
                                newData[key] = _deconstructPacket(data[key]);
                            }
                            return newData;
                        }
                        return data;
                    }
                    var pack = packet;
                    pack.data = _deconstructPacket(packetData);
                    pack.attachments = buffers.length;
                    return {
                        packet: pack,
                        buffers: buffers
                    };
                };
                exports.reconstructPacket = function (packet, buffers) {
                    var curPlaceHolder = 0;
                    function _reconstructPacket(data) {
                        if (data && data._placeholder) {
                            var buf = buffers[data.num];
                            return buf;
                        } else if (isArray(data)) {
                            for (var i = 0; i < data.length; i++) {
                                data[i] = _reconstructPacket(data[i]);
                            }
                            return data;
                        } else if (data && 'object' == typeof data) {
                            for (var key in data) {
                                data[key] = _reconstructPacket(data[key]);
                            }
                            return data;
                        }
                        return data;
                    }
                    packet.data = _reconstructPacket(packet.data);
                    packet.attachments = undefined;
                    return packet;
                };
                exports.removeBlobs = function (data, callback) {
                    function _removeBlobs(obj, curKey, containingObject) {
                        if (!obj)
                            return obj;
                        if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                            pendingBlobs++;
                            var fileReader = new FileReader();
                            fileReader.onload = function () {
                                if (containingObject) {
                                    containingObject[curKey] = this.result;
                                } else {
                                    bloblessData = this.result;
                                }
                                if (!--pendingBlobs) {
                                    callback(bloblessData);
                                }
                            };
                            fileReader.readAsArrayBuffer(obj);
                        } else if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                _removeBlobs(obj[i], i, obj);
                            }
                        } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
                            for (var key in obj) {
                                _removeBlobs(obj[key], key, obj);
                            }
                        }
                    }
                    var pendingBlobs = 0;
                    var bloblessData = data;
                    _removeBlobs(bloblessData);
                    if (!pendingBlobs) {
                        callback(bloblessData);
                    }
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports) {
            module.exports = Array.isArray || function (arr) {
                return Object.prototype.toString.call(arr) == '[object Array]';
            };
        },
        function (module, exports) {
            (function (global) {
                module.exports = isBuf;
                function isBuf(obj) {
                    return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
                }
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
            var eio = __webpack_require__(18);
            var Socket = __webpack_require__(44);
            var Emitter = __webpack_require__(35);
            var parser = __webpack_require__(7);
            var on = __webpack_require__(46);
            var bind = __webpack_require__(47);
            var debug = __webpack_require__(3)('socket.io-client:manager');
            var indexOf = __webpack_require__(42);
            var Backoff = __webpack_require__(48);
            var has = Object.prototype.hasOwnProperty;
            module.exports = Manager;
            function Manager(uri, opts) {
                if (!(this instanceof Manager))
                    return new Manager(uri, opts);
                if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
                    opts = uri;
                    uri = undefined;
                }
                opts = opts || {};
                opts.path = opts.path || '/socket.io';
                this.nsps = {};
                this.subs = [];
                this.opts = opts;
                this.reconnection(opts.reconnection !== false);
                this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
                this.reconnectionDelay(opts.reconnectionDelay || 1000);
                this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
                this.randomizationFactor(opts.randomizationFactor || 0.5);
                this.backoff = new Backoff({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                });
                this.timeout(null == opts.timeout ? 20000 : opts.timeout);
                this.readyState = 'closed';
                this.uri = uri;
                this.connecting = [];
                this.lastPing = null;
                this.encoding = false;
                this.packetBuffer = [];
                this.encoder = new parser.Encoder();
                this.decoder = new parser.Decoder();
                this.autoConnect = opts.autoConnect !== false;
                if (this.autoConnect)
                    this.open();
            }
            Manager.prototype.emitAll = function () {
                this.emit.apply(this, arguments);
                for (var nsp in this.nsps) {
                    if (has.call(this.nsps, nsp)) {
                        this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
                    }
                }
            };
            Manager.prototype.updateSocketIds = function () {
                for (var nsp in this.nsps) {
                    if (has.call(this.nsps, nsp)) {
                        this.nsps[nsp].id = this.engine.id;
                    }
                }
            };
            Emitter(Manager.prototype);
            Manager.prototype.reconnection = function (v) {
                if (!arguments.length)
                    return this._reconnection;
                this._reconnection = !!v;
                return this;
            };
            Manager.prototype.reconnectionAttempts = function (v) {
                if (!arguments.length)
                    return this._reconnectionAttempts;
                this._reconnectionAttempts = v;
                return this;
            };
            Manager.prototype.reconnectionDelay = function (v) {
                if (!arguments.length)
                    return this._reconnectionDelay;
                this._reconnectionDelay = v;
                this.backoff && this.backoff.setMin(v);
                return this;
            };
            Manager.prototype.randomizationFactor = function (v) {
                if (!arguments.length)
                    return this._randomizationFactor;
                this._randomizationFactor = v;
                this.backoff && this.backoff.setJitter(v);
                return this;
            };
            Manager.prototype.reconnectionDelayMax = function (v) {
                if (!arguments.length)
                    return this._reconnectionDelayMax;
                this._reconnectionDelayMax = v;
                this.backoff && this.backoff.setMax(v);
                return this;
            };
            Manager.prototype.timeout = function (v) {
                if (!arguments.length)
                    return this._timeout;
                this._timeout = v;
                return this;
            };
            Manager.prototype.maybeReconnectOnOpen = function () {
                if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
                    this.reconnect();
                }
            };
            Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
                debug('readyState %s', this.readyState);
                if (~this.readyState.indexOf('open'))
                    return this;
                debug('opening %s', this.uri);
                this.engine = eio(this.uri, this.opts);
                var socket = this.engine;
                var self = this;
                this.readyState = 'opening';
                this.skipReconnect = false;
                var openSub = on(socket, 'open', function () {
                    self.onopen();
                    fn && fn();
                });
                var errorSub = on(socket, 'error', function (data) {
                    debug('connect_error');
                    self.cleanup();
                    self.readyState = 'closed';
                    self.emitAll('connect_error', data);
                    if (fn) {
                        var err = new Error('Connection error');
                        err.data = data;
                        fn(err);
                    } else {
                        self.maybeReconnectOnOpen();
                    }
                });
                if (false !== this._timeout) {
                    var timeout = this._timeout;
                    debug('connect attempt will timeout after %d', timeout);
                    var timer = setTimeout(function () {
                        debug('connect attempt timed out after %d', timeout);
                        openSub.destroy();
                        socket.close();
                        socket.emit('error', 'timeout');
                        self.emitAll('connect_timeout', timeout);
                    }, timeout);
                    this.subs.push({
                        destroy: function destroy() {
                            clearTimeout(timer);
                        }
                    });
                }
                this.subs.push(openSub);
                this.subs.push(errorSub);
                return this;
            };
            Manager.prototype.onopen = function () {
                debug('open');
                this.cleanup();
                this.readyState = 'open';
                this.emit('open');
                var socket = this.engine;
                this.subs.push(on(socket, 'data', bind(this, 'ondata')));
                this.subs.push(on(socket, 'ping', bind(this, 'onping')));
                this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
                this.subs.push(on(socket, 'error', bind(this, 'onerror')));
                this.subs.push(on(socket, 'close', bind(this, 'onclose')));
                this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
            };
            Manager.prototype.onping = function () {
                this.lastPing = new Date();
                this.emitAll('ping');
            };
            Manager.prototype.onpong = function () {
                this.emitAll('pong', new Date() - this.lastPing);
            };
            Manager.prototype.ondata = function (data) {
                this.decoder.add(data);
            };
            Manager.prototype.ondecoded = function (packet) {
                this.emit('packet', packet);
            };
            Manager.prototype.onerror = function (err) {
                debug('error', err);
                this.emitAll('error', err);
            };
            Manager.prototype.socket = function (nsp, opts) {
                var socket = this.nsps[nsp];
                if (!socket) {
                    socket = new Socket(this, nsp, opts);
                    this.nsps[nsp] = socket;
                    var self = this;
                    socket.on('connecting', onConnecting);
                    socket.on('connect', function () {
                        socket.id = self.engine.id;
                    });
                    if (this.autoConnect) {
                        onConnecting();
                    }
                }
                function onConnecting() {
                    if (!~indexOf(self.connecting, socket)) {
                        self.connecting.push(socket);
                    }
                }
                return socket;
            };
            Manager.prototype.destroy = function (socket) {
                var index = indexOf(this.connecting, socket);
                if (~index)
                    this.connecting.splice(index, 1);
                if (this.connecting.length)
                    return;
                this.close();
            };
            Manager.prototype.packet = function (packet) {
                debug('writing packet %j', packet);
                var self = this;
                if (packet.query && packet.type === 0)
                    packet.nsp += '?' + packet.query;
                if (!self.encoding) {
                    self.encoding = true;
                    this.encoder.encode(packet, function (encodedPackets) {
                        for (var i = 0; i < encodedPackets.length; i++) {
                            self.engine.write(encodedPackets[i], packet.options);
                        }
                        self.encoding = false;
                        self.processPacketQueue();
                    });
                } else {
                    self.packetBuffer.push(packet);
                }
            };
            Manager.prototype.processPacketQueue = function () {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var pack = this.packetBuffer.shift();
                    this.packet(pack);
                }
            };
            Manager.prototype.cleanup = function () {
                debug('cleanup');
                var subsLength = this.subs.length;
                for (var i = 0; i < subsLength; i++) {
                    var sub = this.subs.shift();
                    sub.destroy();
                }
                this.packetBuffer = [];
                this.encoding = false;
                this.lastPing = null;
                this.decoder.destroy();
            };
            Manager.prototype.close = Manager.prototype.disconnect = function () {
                debug('disconnect');
                this.skipReconnect = true;
                this.reconnecting = false;
                if ('opening' === this.readyState) {
                    this.cleanup();
                }
                this.backoff.reset();
                this.readyState = 'closed';
                if (this.engine)
                    this.engine.close();
            };
            Manager.prototype.onclose = function (reason) {
                debug('onclose');
                this.cleanup();
                this.backoff.reset();
                this.readyState = 'closed';
                this.emit('close', reason);
                if (this._reconnection && !this.skipReconnect) {
                    this.reconnect();
                }
            };
            Manager.prototype.reconnect = function () {
                if (this.reconnecting || this.skipReconnect)
                    return this;
                var self = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) {
                    debug('reconnect failed');
                    this.backoff.reset();
                    this.emitAll('reconnect_failed');
                    this.reconnecting = false;
                } else {
                    var delay = this.backoff.duration();
                    debug('will wait %dms before reconnect attempt', delay);
                    this.reconnecting = true;
                    var timer = setTimeout(function () {
                        if (self.skipReconnect)
                            return;
                        debug('attempting reconnect');
                        self.emitAll('reconnect_attempt', self.backoff.attempts);
                        self.emitAll('reconnecting', self.backoff.attempts);
                        if (self.skipReconnect)
                            return;
                        self.open(function (err) {
                            if (err) {
                                debug('reconnect attempt error');
                                self.reconnecting = false;
                                self.reconnect();
                                self.emitAll('reconnect_error', err.data);
                            } else {
                                debug('reconnect success');
                                self.onreconnect();
                            }
                        });
                    }, delay);
                    this.subs.push({
                        destroy: function destroy() {
                            clearTimeout(timer);
                        }
                    });
                }
            };
            Manager.prototype.onreconnect = function () {
                var attempt = this.backoff.attempts;
                this.reconnecting = false;
                this.backoff.reset();
                this.updateSocketIds();
                this.emitAll('reconnect', attempt);
            };
        },
        function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(19);
        },
        function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(20);
            module.exports.parser = __webpack_require__(27);
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var transports = __webpack_require__(21);
                var Emitter = __webpack_require__(35);
                var debug = __webpack_require__(3)('engine.io-client:socket');
                var index = __webpack_require__(42);
                var parser = __webpack_require__(27);
                var parseuri = __webpack_require__(2);
                var parsejson = __webpack_require__(43);
                var parseqs = __webpack_require__(36);
                module.exports = Socket;
                function Socket(uri, opts) {
                    if (!(this instanceof Socket))
                        return new Socket(uri, opts);
                    opts = opts || {};
                    if (uri && 'object' === typeof uri) {
                        opts = uri;
                        uri = null;
                    }
                    if (uri) {
                        uri = parseuri(uri);
                        opts.hostname = uri.host;
                        opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
                        opts.port = uri.port;
                        if (uri.query)
                            opts.query = uri.query;
                    } else if (opts.host) {
                        opts.hostname = parseuri(opts.host).host;
                    }
                    this.secure = null != opts.secure ? opts.secure : global.location && 'https:' === location.protocol;
                    if (opts.hostname && !opts.port) {
                        opts.port = this.secure ? '443' : '80';
                    }
                    this.agent = opts.agent || false;
                    this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
                    this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
                    this.query = opts.query || {};
                    if ('string' === typeof this.query)
                        this.query = parseqs.decode(this.query);
                    this.upgrade = false !== opts.upgrade;
                    this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
                    this.forceJSONP = !!opts.forceJSONP;
                    this.jsonp = false !== opts.jsonp;
                    this.forceBase64 = !!opts.forceBase64;
                    this.enablesXDR = !!opts.enablesXDR;
                    this.timestampParam = opts.timestampParam || 't';
                    this.timestampRequests = opts.timestampRequests;
                    this.transports = opts.transports || [
                        'polling',
                        'websocket'
                    ];
                    this.readyState = '';
                    this.writeBuffer = [];
                    this.prevBufferLen = 0;
                    this.policyPort = opts.policyPort || 843;
                    this.rememberUpgrade = opts.rememberUpgrade || false;
                    this.binaryType = null;
                    this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
                    this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
                    if (true === this.perMessageDeflate)
                        this.perMessageDeflate = {};
                    if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
                        this.perMessageDeflate.threshold = 1024;
                    }
                    this.pfx = opts.pfx || null;
                    this.key = opts.key || null;
                    this.passphrase = opts.passphrase || null;
                    this.cert = opts.cert || null;
                    this.ca = opts.ca || null;
                    this.ciphers = opts.ciphers || null;
                    this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
                    this.forceNode = !!opts.forceNode;
                    var freeGlobal = typeof global === 'object' && global;
                    if (freeGlobal.global === freeGlobal) {
                        if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
                            this.extraHeaders = opts.extraHeaders;
                        }
                        if (opts.localAddress) {
                            this.localAddress = opts.localAddress;
                        }
                    }
                    this.id = null;
                    this.upgrades = null;
                    this.pingInterval = null;
                    this.pingTimeout = null;
                    this.pingIntervalTimer = null;
                    this.pingTimeoutTimer = null;
                    this.open();
                }
                Socket.priorWebsocketSuccess = false;
                Emitter(Socket.prototype);
                Socket.protocol = parser.protocol;
                Socket.Socket = Socket;
                Socket.Transport = __webpack_require__(26);
                Socket.transports = __webpack_require__(21);
                Socket.parser = __webpack_require__(27);
                Socket.prototype.createTransport = function (name) {
                    debug('creating transport "%s"', name);
                    var query = clone(this.query);
                    query.EIO = parser.protocol;
                    query.transport = name;
                    if (this.id)
                        query.sid = this.id;
                    var transport = new transports[name]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: query,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized,
                        perMessageDeflate: this.perMessageDeflate,
                        extraHeaders: this.extraHeaders,
                        forceNode: this.forceNode,
                        localAddress: this.localAddress
                    });
                    return transport;
                };
                function clone(obj) {
                    var o = {};
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            o[i] = obj[i];
                        }
                    }
                    return o;
                }
                Socket.prototype.open = function () {
                    var transport;
                    if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
                        transport = 'websocket';
                    } else if (0 === this.transports.length) {
                        var self = this;
                        setTimeout(function () {
                            self.emit('error', 'No transports available');
                        }, 0);
                        return;
                    } else {
                        transport = this.transports[0];
                    }
                    this.readyState = 'opening';
                    try {
                        transport = this.createTransport(transport);
                    } catch (e) {
                        this.transports.shift();
                        this.open();
                        return;
                    }
                    transport.open();
                    this.setTransport(transport);
                };
                Socket.prototype.setTransport = function (transport) {
                    debug('setting transport %s', transport.name);
                    var self = this;
                    if (this.transport) {
                        debug('clearing existing transport %s', this.transport.name);
                        this.transport.removeAllListeners();
                    }
                    this.transport = transport;
                    transport.on('drain', function () {
                        self.onDrain();
                    }).on('packet', function (packet) {
                        self.onPacket(packet);
                    }).on('error', function (e) {
                        self.onError(e);
                    }).on('close', function () {
                        self.onClose('transport close');
                    });
                };
                Socket.prototype.probe = function (name) {
                    debug('probing transport "%s"', name);
                    var transport = this.createTransport(name, { probe: 1 });
                    var failed = false;
                    var self = this;
                    Socket.priorWebsocketSuccess = false;
                    function onTransportOpen() {
                        if (self.onlyBinaryUpgrades) {
                            var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                            failed = failed || upgradeLosesBinary;
                        }
                        if (failed)
                            return;
                        debug('probe transport "%s" opened', name);
                        transport.send([{
                                type: 'ping',
                                data: 'probe'
                            }]);
                        transport.once('packet', function (msg) {
                            if (failed)
                                return;
                            if ('pong' === msg.type && 'probe' === msg.data) {
                                debug('probe transport "%s" pong', name);
                                self.upgrading = true;
                                self.emit('upgrading', transport);
                                if (!transport)
                                    return;
                                Socket.priorWebsocketSuccess = 'websocket' === transport.name;
                                debug('pausing current transport "%s"', self.transport.name);
                                self.transport.pause(function () {
                                    if (failed)
                                        return;
                                    if ('closed' === self.readyState)
                                        return;
                                    debug('changing transport and sending upgrade packet');
                                    cleanup();
                                    self.setTransport(transport);
                                    transport.send([{ type: 'upgrade' }]);
                                    self.emit('upgrade', transport);
                                    transport = null;
                                    self.upgrading = false;
                                    self.flush();
                                });
                            } else {
                                debug('probe transport "%s" failed', name);
                                var err = new Error('probe error');
                                err.transport = transport.name;
                                self.emit('upgradeError', err);
                            }
                        });
                    }
                    function freezeTransport() {
                        if (failed)
                            return;
                        failed = true;
                        cleanup();
                        transport.close();
                        transport = null;
                    }
                    function onerror(err) {
                        var error = new Error('probe error: ' + err);
                        error.transport = transport.name;
                        freezeTransport();
                        debug('probe transport "%s" failed because of error: %s', name, err);
                        self.emit('upgradeError', error);
                    }
                    function onTransportClose() {
                        onerror('transport closed');
                    }
                    function onclose() {
                        onerror('socket closed');
                    }
                    function onupgrade(to) {
                        if (transport && to.name !== transport.name) {
                            debug('"%s" works - aborting "%s"', to.name, transport.name);
                            freezeTransport();
                        }
                    }
                    function cleanup() {
                        transport.removeListener('open', onTransportOpen);
                        transport.removeListener('error', onerror);
                        transport.removeListener('close', onTransportClose);
                        self.removeListener('close', onclose);
                        self.removeListener('upgrading', onupgrade);
                    }
                    transport.once('open', onTransportOpen);
                    transport.once('error', onerror);
                    transport.once('close', onTransportClose);
                    this.once('close', onclose);
                    this.once('upgrading', onupgrade);
                    transport.open();
                };
                Socket.prototype.onOpen = function () {
                    debug('socket open');
                    this.readyState = 'open';
                    Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
                    this.emit('open');
                    this.flush();
                    if ('open' === this.readyState && this.upgrade && this.transport.pause) {
                        debug('starting upgrade probes');
                        for (var i = 0, l = this.upgrades.length; i < l; i++) {
                            this.probe(this.upgrades[i]);
                        }
                    }
                };
                Socket.prototype.onPacket = function (packet) {
                    if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
                        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
                        this.emit('packet', packet);
                        this.emit('heartbeat');
                        switch (packet.type) {
                        case 'open':
                            this.onHandshake(parsejson(packet.data));
                            break;
                        case 'pong':
                            this.setPing();
                            this.emit('pong');
                            break;
                        case 'error':
                            var err = new Error('server error');
                            err.code = packet.data;
                            this.onError(err);
                            break;
                        case 'message':
                            this.emit('data', packet.data);
                            this.emit('message', packet.data);
                            break;
                        }
                    } else {
                        debug('packet received with socket readyState "%s"', this.readyState);
                    }
                };
                Socket.prototype.onHandshake = function (data) {
                    this.emit('handshake', data);
                    this.id = data.sid;
                    this.transport.query.sid = data.sid;
                    this.upgrades = this.filterUpgrades(data.upgrades);
                    this.pingInterval = data.pingInterval;
                    this.pingTimeout = data.pingTimeout;
                    this.onOpen();
                    if ('closed' === this.readyState)
                        return;
                    this.setPing();
                    this.removeListener('heartbeat', this.onHeartbeat);
                    this.on('heartbeat', this.onHeartbeat);
                };
                Socket.prototype.onHeartbeat = function (timeout) {
                    clearTimeout(this.pingTimeoutTimer);
                    var self = this;
                    self.pingTimeoutTimer = setTimeout(function () {
                        if ('closed' === self.readyState)
                            return;
                        self.onClose('ping timeout');
                    }, timeout || self.pingInterval + self.pingTimeout);
                };
                Socket.prototype.setPing = function () {
                    var self = this;
                    clearTimeout(self.pingIntervalTimer);
                    self.pingIntervalTimer = setTimeout(function () {
                        debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
                        self.ping();
                        self.onHeartbeat(self.pingTimeout);
                    }, self.pingInterval);
                };
                Socket.prototype.ping = function () {
                    var self = this;
                    this.sendPacket('ping', function () {
                        self.emit('ping');
                    });
                };
                Socket.prototype.onDrain = function () {
                    this.writeBuffer.splice(0, this.prevBufferLen);
                    this.prevBufferLen = 0;
                    if (0 === this.writeBuffer.length) {
                        this.emit('drain');
                    } else {
                        this.flush();
                    }
                };
                Socket.prototype.flush = function () {
                    if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        debug('flushing %d packets in socket', this.writeBuffer.length);
                        this.transport.send(this.writeBuffer);
                        this.prevBufferLen = this.writeBuffer.length;
                        this.emit('flush');
                    }
                };
                Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
                    this.sendPacket('message', msg, options, fn);
                    return this;
                };
                Socket.prototype.sendPacket = function (type, data, options, fn) {
                    if ('function' === typeof data) {
                        fn = data;
                        data = undefined;
                    }
                    if ('function' === typeof options) {
                        fn = options;
                        options = null;
                    }
                    if ('closing' === this.readyState || 'closed' === this.readyState) {
                        return;
                    }
                    options = options || {};
                    options.compress = false !== options.compress;
                    var packet = {
                        type: type,
                        data: data,
                        options: options
                    };
                    this.emit('packetCreate', packet);
                    this.writeBuffer.push(packet);
                    if (fn)
                        this.once('flush', fn);
                    this.flush();
                };
                Socket.prototype.close = function () {
                    if ('opening' === this.readyState || 'open' === this.readyState) {
                        this.readyState = 'closing';
                        var self = this;
                        if (this.writeBuffer.length) {
                            this.once('drain', function () {
                                if (this.upgrading) {
                                    waitForUpgrade();
                                } else {
                                    close();
                                }
                            });
                        } else if (this.upgrading) {
                            waitForUpgrade();
                        } else {
                            close();
                        }
                    }
                    function close() {
                        self.onClose('forced close');
                        debug('socket closing - telling transport to close');
                        self.transport.close();
                    }
                    function cleanupAndClose() {
                        self.removeListener('upgrade', cleanupAndClose);
                        self.removeListener('upgradeError', cleanupAndClose);
                        close();
                    }
                    function waitForUpgrade() {
                        self.once('upgrade', cleanupAndClose);
                        self.once('upgradeError', cleanupAndClose);
                    }
                    return this;
                };
                Socket.prototype.onError = function (err) {
                    debug('socket error %j', err);
                    Socket.priorWebsocketSuccess = false;
                    this.emit('error', err);
                    this.onClose('transport error', err);
                };
                Socket.prototype.onClose = function (reason, desc) {
                    if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
                        debug('socket close with reason: "%s"', reason);
                        var self = this;
                        clearTimeout(this.pingIntervalTimer);
                        clearTimeout(this.pingTimeoutTimer);
                        this.transport.removeAllListeners('close');
                        this.transport.close();
                        this.transport.removeAllListeners();
                        this.readyState = 'closed';
                        this.id = null;
                        this.emit('close', reason, desc);
                        self.writeBuffer = [];
                        self.prevBufferLen = 0;
                    }
                };
                Socket.prototype.filterUpgrades = function (upgrades) {
                    var filteredUpgrades = [];
                    for (var i = 0, j = upgrades.length; i < j; i++) {
                        if (~index(this.transports, upgrades[i]))
                            filteredUpgrades.push(upgrades[i]);
                    }
                    return filteredUpgrades;
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var XMLHttpRequest = __webpack_require__(22);
                var XHR = __webpack_require__(24);
                var JSONP = __webpack_require__(39);
                var websocket = __webpack_require__(40);
                exports.polling = polling;
                exports.websocket = websocket;
                function polling(opts) {
                    var xhr;
                    var xd = false;
                    var xs = false;
                    var jsonp = false !== opts.jsonp;
                    if (global.location) {
                        var isSSL = 'https:' === location.protocol;
                        var port = location.port;
                        if (!port) {
                            port = isSSL ? 443 : 80;
                        }
                        xd = opts.hostname !== location.hostname || port !== opts.port;
                        xs = opts.secure !== isSSL;
                    }
                    opts.xdomain = xd;
                    opts.xscheme = xs;
                    xhr = new XMLHttpRequest(opts);
                    if ('open' in xhr && !opts.forceJSONP) {
                        return new XHR(opts);
                    } else {
                        if (!jsonp)
                            throw new Error('JSONP disabled');
                        return new JSONP(opts);
                    }
                }
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var hasCORS = __webpack_require__(23);
                module.exports = function (opts) {
                    var xdomain = opts.xdomain;
                    var xscheme = opts.xscheme;
                    var enablesXDR = opts.enablesXDR;
                    try {
                        if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
                            return new XMLHttpRequest();
                        }
                    } catch (e) {
                    }
                    try {
                        if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
                            return new XDomainRequest();
                        }
                    } catch (e) {
                    }
                    if (!xdomain) {
                        try {
                            return new global[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
                        } catch (e) {
                        }
                    }
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports) {
            try {
                module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
            } catch (err) {
                module.exports = false;
            }
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var XMLHttpRequest = __webpack_require__(22);
                var Polling = __webpack_require__(25);
                var Emitter = __webpack_require__(35);
                var inherit = __webpack_require__(37);
                var debug = __webpack_require__(3)('engine.io-client:polling-xhr');
                module.exports = XHR;
                module.exports.Request = Request;
                function empty() {
                }
                function XHR(opts) {
                    Polling.call(this, opts);
                    this.requestTimeout = opts.requestTimeout;
                    if (global.location) {
                        var isSSL = 'https:' === location.protocol;
                        var port = location.port;
                        if (!port) {
                            port = isSSL ? 443 : 80;
                        }
                        this.xd = opts.hostname !== global.location.hostname || port !== opts.port;
                        this.xs = opts.secure !== isSSL;
                    } else {
                        this.extraHeaders = opts.extraHeaders;
                    }
                }
                inherit(XHR, Polling);
                XHR.prototype.supportsBinary = true;
                XHR.prototype.request = function (opts) {
                    opts = opts || {};
                    opts.uri = this.uri();
                    opts.xd = this.xd;
                    opts.xs = this.xs;
                    opts.agent = this.agent || false;
                    opts.supportsBinary = this.supportsBinary;
                    opts.enablesXDR = this.enablesXDR;
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;
                    opts.requestTimeout = this.requestTimeout;
                    opts.extraHeaders = this.extraHeaders;
                    return new Request(opts);
                };
                XHR.prototype.doWrite = function (data, fn) {
                    var isBinary = typeof data !== 'string' && data !== undefined;
                    var req = this.request({
                        method: 'POST',
                        data: data,
                        isBinary: isBinary
                    });
                    var self = this;
                    req.on('success', fn);
                    req.on('error', function (err) {
                        self.onError('xhr post error', err);
                    });
                    this.sendXhr = req;
                };
                XHR.prototype.doPoll = function () {
                    debug('xhr poll');
                    var req = this.request();
                    var self = this;
                    req.on('data', function (data) {
                        self.onData(data);
                    });
                    req.on('error', function (err) {
                        self.onError('xhr poll error', err);
                    });
                    this.pollXhr = req;
                };
                function Request(opts) {
                    this.method = opts.method || 'GET';
                    this.uri = opts.uri;
                    this.xd = !!opts.xd;
                    this.xs = !!opts.xs;
                    this.async = false !== opts.async;
                    this.data = undefined !== opts.data ? opts.data : null;
                    this.agent = opts.agent;
                    this.isBinary = opts.isBinary;
                    this.supportsBinary = opts.supportsBinary;
                    this.enablesXDR = opts.enablesXDR;
                    this.requestTimeout = opts.requestTimeout;
                    this.pfx = opts.pfx;
                    this.key = opts.key;
                    this.passphrase = opts.passphrase;
                    this.cert = opts.cert;
                    this.ca = opts.ca;
                    this.ciphers = opts.ciphers;
                    this.rejectUnauthorized = opts.rejectUnauthorized;
                    this.extraHeaders = opts.extraHeaders;
                    this.create();
                }
                Emitter(Request.prototype);
                Request.prototype.create = function () {
                    var opts = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;
                    var xhr = this.xhr = new XMLHttpRequest(opts);
                    var self = this;
                    try {
                        debug('xhr open %s: %s', this.method, this.uri);
                        xhr.open(this.method, this.uri, this.async);
                        try {
                            if (this.extraHeaders) {
                                xhr.setDisableHeaderCheck(true);
                                for (var i in this.extraHeaders) {
                                    if (this.extraHeaders.hasOwnProperty(i)) {
                                        xhr.setRequestHeader(i, this.extraHeaders[i]);
                                    }
                                }
                            }
                        } catch (e) {
                        }
                        if (this.supportsBinary) {
                            xhr.responseType = 'arraybuffer';
                        }
                        if ('POST' === this.method) {
                            try {
                                if (this.isBinary) {
                                    xhr.setRequestHeader('Content-type', 'application/octet-stream');
                                } else {
                                    xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                                }
                            } catch (e) {
                            }
                        }
                        try {
                            xhr.setRequestHeader('Accept', '*/*');
                        } catch (e) {
                        }
                        if ('withCredentials' in xhr) {
                            xhr.withCredentials = true;
                        }
                        if (this.requestTimeout) {
                            xhr.timeout = this.requestTimeout;
                        }
                        if (this.hasXDR()) {
                            xhr.onload = function () {
                                self.onLoad();
                            };
                            xhr.onerror = function () {
                                self.onError(xhr.responseText);
                            };
                        } else {
                            xhr.onreadystatechange = function () {
                                if (4 !== xhr.readyState)
                                    return;
                                if (200 === xhr.status || 1223 === xhr.status) {
                                    self.onLoad();
                                } else {
                                    setTimeout(function () {
                                        self.onError(xhr.status);
                                    }, 0);
                                }
                            };
                        }
                        debug('xhr data %s', this.data);
                        xhr.send(this.data);
                    } catch (e) {
                        setTimeout(function () {
                            self.onError(e);
                        }, 0);
                        return;
                    }
                    if (global.document) {
                        this.index = Request.requestsCount++;
                        Request.requests[this.index] = this;
                    }
                };
                Request.prototype.onSuccess = function () {
                    this.emit('success');
                    this.cleanup();
                };
                Request.prototype.onData = function (data) {
                    this.emit('data', data);
                    this.onSuccess();
                };
                Request.prototype.onError = function (err) {
                    this.emit('error', err);
                    this.cleanup(true);
                };
                Request.prototype.cleanup = function (fromError) {
                    if ('undefined' === typeof this.xhr || null === this.xhr) {
                        return;
                    }
                    if (this.hasXDR()) {
                        this.xhr.onload = this.xhr.onerror = empty;
                    } else {
                        this.xhr.onreadystatechange = empty;
                    }
                    if (fromError) {
                        try {
                            this.xhr.abort();
                        } catch (e) {
                        }
                    }
                    if (global.document) {
                        delete Request.requests[this.index];
                    }
                    this.xhr = null;
                };
                Request.prototype.onLoad = function () {
                    var data;
                    try {
                        var contentType;
                        try {
                            contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
                        } catch (e) {
                        }
                        if (contentType === 'application/octet-stream') {
                            data = this.xhr.response || this.xhr.responseText;
                        } else {
                            if (!this.supportsBinary) {
                                data = this.xhr.responseText;
                            } else {
                                try {
                                    data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                                } catch (e) {
                                    var ui8Arr = new Uint8Array(this.xhr.response);
                                    var dataArray = [];
                                    for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
                                        dataArray.push(ui8Arr[idx]);
                                    }
                                    data = String.fromCharCode.apply(null, dataArray);
                                }
                            }
                        }
                    } catch (e) {
                        this.onError(e);
                    }
                    if (null != data) {
                        this.onData(data);
                    }
                };
                Request.prototype.hasXDR = function () {
                    return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
                };
                Request.prototype.abort = function () {
                    this.cleanup();
                };
                Request.requestsCount = 0;
                Request.requests = {};
                if (global.document) {
                    if (global.attachEvent) {
                        global.attachEvent('onunload', unloadHandler);
                    } else if (global.addEventListener) {
                        global.addEventListener('beforeunload', unloadHandler, false);
                    }
                }
                function unloadHandler() {
                    for (var i in Request.requests) {
                        if (Request.requests.hasOwnProperty(i)) {
                            Request.requests[i].abort();
                        }
                    }
                }
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            var Transport = __webpack_require__(26);
            var parseqs = __webpack_require__(36);
            var parser = __webpack_require__(27);
            var inherit = __webpack_require__(37);
            var yeast = __webpack_require__(38);
            var debug = __webpack_require__(3)('engine.io-client:polling');
            module.exports = Polling;
            var hasXHR2 = function () {
                var XMLHttpRequest = __webpack_require__(22);
                var xhr = new XMLHttpRequest({ xdomain: false });
                return null != xhr.responseType;
            }();
            function Polling(opts) {
                var forceBase64 = opts && opts.forceBase64;
                if (!hasXHR2 || forceBase64) {
                    this.supportsBinary = false;
                }
                Transport.call(this, opts);
            }
            inherit(Polling, Transport);
            Polling.prototype.name = 'polling';
            Polling.prototype.doOpen = function () {
                this.poll();
            };
            Polling.prototype.pause = function (onPause) {
                var self = this;
                this.readyState = 'pausing';
                function pause() {
                    debug('paused');
                    self.readyState = 'paused';
                    onPause();
                }
                if (this.polling || !this.writable) {
                    var total = 0;
                    if (this.polling) {
                        debug('we are currently polling - waiting to pause');
                        total++;
                        this.once('pollComplete', function () {
                            debug('pre-pause polling complete');
                            --total || pause();
                        });
                    }
                    if (!this.writable) {
                        debug('we are currently writing - waiting to pause');
                        total++;
                        this.once('drain', function () {
                            debug('pre-pause writing complete');
                            --total || pause();
                        });
                    }
                } else {
                    pause();
                }
            };
            Polling.prototype.poll = function () {
                debug('polling');
                this.polling = true;
                this.doPoll();
                this.emit('poll');
            };
            Polling.prototype.onData = function (data) {
                var self = this;
                debug('polling got data %s', data);
                var callback = function (packet, index, total) {
                    if ('opening' === self.readyState) {
                        self.onOpen();
                    }
                    if ('close' === packet.type) {
                        self.onClose();
                        return false;
                    }
                    self.onPacket(packet);
                };
                parser.decodePayload(data, this.socket.binaryType, callback);
                if ('closed' !== this.readyState) {
                    this.polling = false;
                    this.emit('pollComplete');
                    if ('open' === this.readyState) {
                        this.poll();
                    } else {
                        debug('ignoring poll - transport state "%s"', this.readyState);
                    }
                }
            };
            Polling.prototype.doClose = function () {
                var self = this;
                function close() {
                    debug('writing close packet');
                    self.write([{ type: 'close' }]);
                }
                if ('open' === this.readyState) {
                    debug('transport open - closing');
                    close();
                } else {
                    debug('transport not open - deferring close');
                    this.once('open', close);
                }
            };
            Polling.prototype.write = function (packets) {
                var self = this;
                this.writable = false;
                var callbackfn = function () {
                    self.writable = true;
                    self.emit('drain');
                };
                parser.encodePayload(packets, this.supportsBinary, function (data) {
                    self.doWrite(data, callbackfn);
                });
            };
            Polling.prototype.uri = function () {
                var query = this.query || {};
                var schema = this.secure ? 'https' : 'http';
                var port = '';
                if (false !== this.timestampRequests) {
                    query[this.timestampParam] = yeast();
                }
                if (!this.supportsBinary && !query.sid) {
                    query.b64 = 1;
                }
                query = parseqs.encode(query);
                if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
                    port = ':' + this.port;
                }
                if (query.length) {
                    query = '?' + query;
                }
                var ipv6 = this.hostname.indexOf(':') !== -1;
                return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
            };
        },
        function (module, exports, __webpack_require__) {
            var parser = __webpack_require__(27);
            var Emitter = __webpack_require__(35);
            module.exports = Transport;
            function Transport(opts) {
                this.path = opts.path;
                this.hostname = opts.hostname;
                this.port = opts.port;
                this.secure = opts.secure;
                this.query = opts.query;
                this.timestampParam = opts.timestampParam;
                this.timestampRequests = opts.timestampRequests;
                this.readyState = '';
                this.agent = opts.agent || false;
                this.socket = opts.socket;
                this.enablesXDR = opts.enablesXDR;
                this.pfx = opts.pfx;
                this.key = opts.key;
                this.passphrase = opts.passphrase;
                this.cert = opts.cert;
                this.ca = opts.ca;
                this.ciphers = opts.ciphers;
                this.rejectUnauthorized = opts.rejectUnauthorized;
                this.forceNode = opts.forceNode;
                this.extraHeaders = opts.extraHeaders;
                this.localAddress = opts.localAddress;
            }
            Emitter(Transport.prototype);
            Transport.prototype.onError = function (msg, desc) {
                var err = new Error(msg);
                err.type = 'TransportError';
                err.description = desc;
                this.emit('error', err);
                return this;
            };
            Transport.prototype.open = function () {
                if ('closed' === this.readyState || '' === this.readyState) {
                    this.readyState = 'opening';
                    this.doOpen();
                }
                return this;
            };
            Transport.prototype.close = function () {
                if ('opening' === this.readyState || 'open' === this.readyState) {
                    this.doClose();
                    this.onClose();
                }
                return this;
            };
            Transport.prototype.send = function (packets) {
                if ('open' === this.readyState) {
                    this.write(packets);
                } else {
                    throw new Error('Transport not open');
                }
            };
            Transport.prototype.onOpen = function () {
                this.readyState = 'open';
                this.writable = true;
                this.emit('open');
            };
            Transport.prototype.onData = function (data) {
                var packet = parser.decodePacket(data, this.socket.binaryType);
                this.onPacket(packet);
            };
            Transport.prototype.onPacket = function (packet) {
                this.emit('packet', packet);
            };
            Transport.prototype.onClose = function () {
                this.readyState = 'closed';
                this.emit('close');
            };
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var keys = __webpack_require__(28);
                var hasBinary = __webpack_require__(29);
                var sliceBuffer = __webpack_require__(30);
                var after = __webpack_require__(31);
                var utf8 = __webpack_require__(32);
                var base64encoder;
                if (global && global.ArrayBuffer) {
                    base64encoder = __webpack_require__(33);
                }
                var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
                var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
                var dontSendBlobs = isAndroid || isPhantomJS;
                exports.protocol = 3;
                var packets = exports.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                };
                var packetslist = keys(packets);
                var err = {
                    type: 'error',
                    data: 'parser error'
                };
                var Blob = __webpack_require__(34);
                exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
                    if ('function' == typeof supportsBinary) {
                        callback = supportsBinary;
                        supportsBinary = false;
                    }
                    if ('function' == typeof utf8encode) {
                        callback = utf8encode;
                        utf8encode = null;
                    }
                    var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;
                    if (global.ArrayBuffer && data instanceof ArrayBuffer) {
                        return encodeArrayBuffer(packet, supportsBinary, callback);
                    } else if (Blob && data instanceof global.Blob) {
                        return encodeBlob(packet, supportsBinary, callback);
                    }
                    if (data && data.base64) {
                        return encodeBase64Object(packet, callback);
                    }
                    var encoded = packets[packet.type];
                    if (undefined !== packet.data) {
                        encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
                    }
                    return callback('' + encoded);
                };
                function encodeBase64Object(packet, callback) {
                    var message = 'b' + exports.packets[packet.type] + packet.data.data;
                    return callback(message);
                }
                function encodeArrayBuffer(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback);
                    }
                    var data = packet.data;
                    var contentArray = new Uint8Array(data);
                    var resultBuffer = new Uint8Array(1 + data.byteLength);
                    resultBuffer[0] = packets[packet.type];
                    for (var i = 0; i < contentArray.length; i++) {
                        resultBuffer[i + 1] = contentArray[i];
                    }
                    return callback(resultBuffer.buffer);
                }
                function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback);
                    }
                    var fr = new FileReader();
                    fr.onload = function () {
                        packet.data = fr.result;
                        exports.encodePacket(packet, supportsBinary, true, callback);
                    };
                    return fr.readAsArrayBuffer(packet.data);
                }
                function encodeBlob(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback);
                    }
                    if (dontSendBlobs) {
                        return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
                    }
                    var length = new Uint8Array(1);
                    length[0] = packets[packet.type];
                    var blob = new Blob([
                        length.buffer,
                        packet.data
                    ]);
                    return callback(blob);
                }
                exports.encodeBase64Packet = function (packet, callback) {
                    var message = 'b' + exports.packets[packet.type];
                    if (Blob && packet.data instanceof global.Blob) {
                        var fr = new FileReader();
                        fr.onload = function () {
                            var b64 = fr.result.split(',')[1];
                            callback(message + b64);
                        };
                        return fr.readAsDataURL(packet.data);
                    }
                    var b64data;
                    try {
                        b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
                    } catch (e) {
                        var typed = new Uint8Array(packet.data);
                        var basic = new Array(typed.length);
                        for (var i = 0; i < typed.length; i++) {
                            basic[i] = typed[i];
                        }
                        b64data = String.fromCharCode.apply(null, basic);
                    }
                    message += global.btoa(b64data);
                    return callback(message);
                };
                exports.decodePacket = function (data, binaryType, utf8decode) {
                    if (data === undefined) {
                        return err;
                    }
                    if (typeof data == 'string') {
                        if (data.charAt(0) == 'b') {
                            return exports.decodeBase64Packet(data.substr(1), binaryType);
                        }
                        if (utf8decode) {
                            data = tryDecode(data);
                            if (data === false) {
                                return err;
                            }
                        }
                        var type = data.charAt(0);
                        if (Number(type) != type || !packetslist[type]) {
                            return err;
                        }
                        if (data.length > 1) {
                            return {
                                type: packetslist[type],
                                data: data.substring(1)
                            };
                        } else {
                            return { type: packetslist[type] };
                        }
                    }
                    var asArray = new Uint8Array(data);
                    var type = asArray[0];
                    var rest = sliceBuffer(data, 1);
                    if (Blob && binaryType === 'blob') {
                        rest = new Blob([rest]);
                    }
                    return {
                        type: packetslist[type],
                        data: rest
                    };
                };
                function tryDecode(data) {
                    try {
                        data = utf8.decode(data);
                    } catch (e) {
                        return false;
                    }
                    return data;
                }
                exports.decodeBase64Packet = function (msg, binaryType) {
                    var type = packetslist[msg.charAt(0)];
                    if (!base64encoder) {
                        return {
                            type: type,
                            data: {
                                base64: true,
                                data: msg.substr(1)
                            }
                        };
                    }
                    var data = base64encoder.decode(msg.substr(1));
                    if (binaryType === 'blob' && Blob) {
                        data = new Blob([data]);
                    }
                    return {
                        type: type,
                        data: data
                    };
                };
                exports.encodePayload = function (packets, supportsBinary, callback) {
                    if (typeof supportsBinary == 'function') {
                        callback = supportsBinary;
                        supportsBinary = null;
                    }
                    var isBinary = hasBinary(packets);
                    if (supportsBinary && isBinary) {
                        if (Blob && !dontSendBlobs) {
                            return exports.encodePayloadAsBlob(packets, callback);
                        }
                        return exports.encodePayloadAsArrayBuffer(packets, callback);
                    }
                    if (!packets.length) {
                        return callback('0:');
                    }
                    function setLengthHeader(message) {
                        return message.length + ':' + message;
                    }
                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function (message) {
                            doneCallback(null, setLengthHeader(message));
                        });
                    }
                    map(packets, encodeOne, function (err, results) {
                        return callback(results.join(''));
                    });
                };
                function map(ary, each, done) {
                    var result = new Array(ary.length);
                    var next = after(ary.length, done);
                    var eachWithIndex = function (i, el, cb) {
                        each(el, function (error, msg) {
                            result[i] = msg;
                            cb(error, result);
                        });
                    };
                    for (var i = 0; i < ary.length; i++) {
                        eachWithIndex(i, ary[i], next);
                    }
                }
                exports.decodePayload = function (data, binaryType, callback) {
                    if (typeof data != 'string') {
                        return exports.decodePayloadAsBinary(data, binaryType, callback);
                    }
                    if (typeof binaryType === 'function') {
                        callback = binaryType;
                        binaryType = null;
                    }
                    var packet;
                    if (data == '') {
                        return callback(err, 0, 1);
                    }
                    var length = '', n, msg;
                    for (var i = 0, l = data.length; i < l; i++) {
                        var chr = data.charAt(i);
                        if (':' != chr) {
                            length += chr;
                        } else {
                            if ('' == length || length != (n = Number(length))) {
                                return callback(err, 0, 1);
                            }
                            msg = data.substr(i + 1, n);
                            if (length != msg.length) {
                                return callback(err, 0, 1);
                            }
                            if (msg.length) {
                                packet = exports.decodePacket(msg, binaryType, true);
                                if (err.type == packet.type && err.data == packet.data) {
                                    return callback(err, 0, 1);
                                }
                                var ret = callback(packet, i + n, l);
                                if (false === ret)
                                    return;
                            }
                            i += n;
                            length = '';
                        }
                    }
                    if (length != '') {
                        return callback(err, 0, 1);
                    }
                };
                exports.encodePayloadAsArrayBuffer = function (packets, callback) {
                    if (!packets.length) {
                        return callback(new ArrayBuffer(0));
                    }
                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, true, true, function (data) {
                            return doneCallback(null, data);
                        });
                    }
                    map(packets, encodeOne, function (err, encodedPackets) {
                        var totalLength = encodedPackets.reduce(function (acc, p) {
                            var len;
                            if (typeof p === 'string') {
                                len = p.length;
                            } else {
                                len = p.byteLength;
                            }
                            return acc + len.toString().length + len + 2;
                        }, 0);
                        var resultArray = new Uint8Array(totalLength);
                        var bufferIndex = 0;
                        encodedPackets.forEach(function (p) {
                            var isString = typeof p === 'string';
                            var ab = p;
                            if (isString) {
                                var view = new Uint8Array(p.length);
                                for (var i = 0; i < p.length; i++) {
                                    view[i] = p.charCodeAt(i);
                                }
                                ab = view.buffer;
                            }
                            if (isString) {
                                resultArray[bufferIndex++] = 0;
                            } else {
                                resultArray[bufferIndex++] = 1;
                            }
                            var lenStr = ab.byteLength.toString();
                            for (var i = 0; i < lenStr.length; i++) {
                                resultArray[bufferIndex++] = parseInt(lenStr[i]);
                            }
                            resultArray[bufferIndex++] = 255;
                            var view = new Uint8Array(ab);
                            for (var i = 0; i < view.length; i++) {
                                resultArray[bufferIndex++] = view[i];
                            }
                        });
                        return callback(resultArray.buffer);
                    });
                };
                exports.encodePayloadAsBlob = function (packets, callback) {
                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, true, true, function (encoded) {
                            var binaryIdentifier = new Uint8Array(1);
                            binaryIdentifier[0] = 1;
                            if (typeof encoded === 'string') {
                                var view = new Uint8Array(encoded.length);
                                for (var i = 0; i < encoded.length; i++) {
                                    view[i] = encoded.charCodeAt(i);
                                }
                                encoded = view.buffer;
                                binaryIdentifier[0] = 0;
                            }
                            var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
                            var lenStr = len.toString();
                            var lengthAry = new Uint8Array(lenStr.length + 1);
                            for (var i = 0; i < lenStr.length; i++) {
                                lengthAry[i] = parseInt(lenStr[i]);
                            }
                            lengthAry[lenStr.length] = 255;
                            if (Blob) {
                                var blob = new Blob([
                                    binaryIdentifier.buffer,
                                    lengthAry.buffer,
                                    encoded
                                ]);
                                doneCallback(null, blob);
                            }
                        });
                    }
                    map(packets, encodeOne, function (err, results) {
                        return callback(new Blob(results));
                    });
                };
                exports.decodePayloadAsBinary = function (data, binaryType, callback) {
                    if (typeof binaryType === 'function') {
                        callback = binaryType;
                        binaryType = null;
                    }
                    var bufferTail = data;
                    var buffers = [];
                    var numberTooLong = false;
                    while (bufferTail.byteLength > 0) {
                        var tailArray = new Uint8Array(bufferTail);
                        var isString = tailArray[0] === 0;
                        var msgLength = '';
                        for (var i = 1;; i++) {
                            if (tailArray[i] == 255)
                                break;
                            if (msgLength.length > 310) {
                                numberTooLong = true;
                                break;
                            }
                            msgLength += tailArray[i];
                        }
                        if (numberTooLong)
                            return callback(err, 0, 1);
                        bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
                        msgLength = parseInt(msgLength);
                        var msg = sliceBuffer(bufferTail, 0, msgLength);
                        if (isString) {
                            try {
                                msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                            } catch (e) {
                                var typed = new Uint8Array(msg);
                                msg = '';
                                for (var i = 0; i < typed.length; i++) {
                                    msg += String.fromCharCode(typed[i]);
                                }
                            }
                        }
                        buffers.push(msg);
                        bufferTail = sliceBuffer(bufferTail, msgLength);
                    }
                    var total = buffers.length;
                    buffers.forEach(function (buffer, i) {
                        callback(exports.decodePacket(buffer, binaryType, true), i, total);
                    });
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports) {
            module.exports = Object.keys || function keys(obj) {
                var arr = [];
                var has = Object.prototype.hasOwnProperty;
                for (var i in obj) {
                    if (has.call(obj, i)) {
                        arr.push(i);
                    }
                }
                return arr;
            };
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var isArray = __webpack_require__(15);
                module.exports = hasBinary;
                function hasBinary(data) {
                    function _hasBinary(obj) {
                        if (!obj)
                            return false;
                        if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                            return true;
                        }
                        if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                if (_hasBinary(obj[i])) {
                                    return true;
                                }
                            }
                        } else if (obj && 'object' == typeof obj) {
                            if (obj.toJSON && 'function' == typeof obj.toJSON) {
                                obj = obj.toJSON();
                            }
                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    }
                    return _hasBinary(data);
                }
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports) {
            module.exports = function (arraybuffer, start, end) {
                var bytes = arraybuffer.byteLength;
                start = start || 0;
                end = end || bytes;
                if (arraybuffer.slice) {
                    return arraybuffer.slice(start, end);
                }
                if (start < 0) {
                    start += bytes;
                }
                if (end < 0) {
                    end += bytes;
                }
                if (end > bytes) {
                    end = bytes;
                }
                if (start >= bytes || start >= end || bytes === 0) {
                    return new ArrayBuffer(0);
                }
                var abv = new Uint8Array(arraybuffer);
                var result = new Uint8Array(end - start);
                for (var i = start, ii = 0; i < end; i++, ii++) {
                    result[ii] = abv[i];
                }
                return result.buffer;
            };
        },
        function (module, exports) {
            module.exports = after;
            function after(count, callback, err_cb) {
                var bail = false;
                err_cb = err_cb || noop;
                proxy.count = count;
                return count === 0 ? callback() : proxy;
                function proxy(err, result) {
                    if (proxy.count <= 0) {
                        throw new Error('after called too many times');
                    }
                    --proxy.count;
                    if (err) {
                        bail = true;
                        callback(err);
                        callback = err_cb;
                    } else if (proxy.count === 0 && !bail) {
                        callback(null, result);
                    }
                }
            }
            function noop() {
            }
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function (module, global) {
                ;
                (function (root) {
                    var freeExports = typeof exports == 'object' && exports;
                    var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
                    var freeGlobal = typeof global == 'object' && global;
                    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                        root = freeGlobal;
                    }
                    var stringFromCharCode = String.fromCharCode;
                    function ucs2decode(string) {
                        var output = [];
                        var counter = 0;
                        var length = string.length;
                        var value;
                        var extra;
                        while (counter < length) {
                            value = string.charCodeAt(counter++);
                            if (value >= 55296 && value <= 56319 && counter < length) {
                                extra = string.charCodeAt(counter++);
                                if ((extra & 64512) == 56320) {
                                    output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                                } else {
                                    output.push(value);
                                    counter--;
                                }
                            } else {
                                output.push(value);
                            }
                        }
                        return output;
                    }
                    function ucs2encode(array) {
                        var length = array.length;
                        var index = -1;
                        var value;
                        var output = '';
                        while (++index < length) {
                            value = array[index];
                            if (value > 65535) {
                                value -= 65536;
                                output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                                value = 56320 | value & 1023;
                            }
                            output += stringFromCharCode(value);
                        }
                        return output;
                    }
                    function createByte(codePoint, shift) {
                        return stringFromCharCode(codePoint >> shift & 63 | 128);
                    }
                    function encodeCodePoint(codePoint) {
                        if ((codePoint & 4294967168) == 0) {
                            return stringFromCharCode(codePoint);
                        }
                        var symbol = '';
                        if ((codePoint & 4294965248) == 0) {
                            symbol = stringFromCharCode(codePoint >> 6 & 31 | 192);
                        } else if ((codePoint & 4294901760) == 0) {
                            symbol = stringFromCharCode(codePoint >> 12 & 15 | 224);
                            symbol += createByte(codePoint, 6);
                        } else if ((codePoint & 4292870144) == 0) {
                            symbol = stringFromCharCode(codePoint >> 18 & 7 | 240);
                            symbol += createByte(codePoint, 12);
                            symbol += createByte(codePoint, 6);
                        }
                        symbol += stringFromCharCode(codePoint & 63 | 128);
                        return symbol;
                    }
                    function wtf8encode(string) {
                        var codePoints = ucs2decode(string);
                        var length = codePoints.length;
                        var index = -1;
                        var codePoint;
                        var byteString = '';
                        while (++index < length) {
                            codePoint = codePoints[index];
                            byteString += encodeCodePoint(codePoint);
                        }
                        return byteString;
                    }
                    function readContinuationByte() {
                        if (byteIndex >= byteCount) {
                            throw Error('Invalid byte index');
                        }
                        var continuationByte = byteArray[byteIndex] & 255;
                        byteIndex++;
                        if ((continuationByte & 192) == 128) {
                            return continuationByte & 63;
                        }
                        throw Error('Invalid continuation byte');
                    }
                    function decodeSymbol() {
                        var byte1;
                        var byte2;
                        var byte3;
                        var byte4;
                        var codePoint;
                        if (byteIndex > byteCount) {
                            throw Error('Invalid byte index');
                        }
                        if (byteIndex == byteCount) {
                            return false;
                        }
                        byte1 = byteArray[byteIndex] & 255;
                        byteIndex++;
                        if ((byte1 & 128) == 0) {
                            return byte1;
                        }
                        if ((byte1 & 224) == 192) {
                            var byte2 = readContinuationByte();
                            codePoint = (byte1 & 31) << 6 | byte2;
                            if (codePoint >= 128) {
                                return codePoint;
                            } else {
                                throw Error('Invalid continuation byte');
                            }
                        }
                        if ((byte1 & 240) == 224) {
                            byte2 = readContinuationByte();
                            byte3 = readContinuationByte();
                            codePoint = (byte1 & 15) << 12 | byte2 << 6 | byte3;
                            if (codePoint >= 2048) {
                                return codePoint;
                            } else {
                                throw Error('Invalid continuation byte');
                            }
                        }
                        if ((byte1 & 248) == 240) {
                            byte2 = readContinuationByte();
                            byte3 = readContinuationByte();
                            byte4 = readContinuationByte();
                            codePoint = (byte1 & 15) << 18 | byte2 << 12 | byte3 << 6 | byte4;
                            if (codePoint >= 65536 && codePoint <= 1114111) {
                                return codePoint;
                            }
                        }
                        throw Error('Invalid WTF-8 detected');
                    }
                    var byteArray;
                    var byteCount;
                    var byteIndex;
                    function wtf8decode(byteString) {
                        byteArray = ucs2decode(byteString);
                        byteCount = byteArray.length;
                        byteIndex = 0;
                        var codePoints = [];
                        var tmp;
                        while ((tmp = decodeSymbol()) !== false) {
                            codePoints.push(tmp);
                        }
                        return ucs2encode(codePoints);
                    }
                    var wtf8 = {
                        'version': '1.0.0',
                        'encode': wtf8encode,
                        'decode': wtf8decode
                    };
                    if (true) {
                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return wtf8;
                        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else if (freeExports && !freeExports.nodeType) {
                        if (freeModule) {
                            freeModule.exports = wtf8;
                        } else {
                            var object = {};
                            var hasOwnProperty = object.hasOwnProperty;
                            for (var key in wtf8) {
                                hasOwnProperty.call(wtf8, key) && (freeExports[key] = wtf8[key]);
                            }
                        }
                    } else {
                        root.wtf8 = wtf8;
                    }
                }(this));
            }.call(exports, __webpack_require__(12)(module), function () {
                return this;
            }()));
        },
        function (module, exports) {
            (function () {
                'use strict';
                var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var lookup = new Uint8Array(256);
                for (var i = 0; i < chars.length; i++) {
                    lookup[chars.charCodeAt(i)] = i;
                }
                exports.encode = function (arraybuffer) {
                    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
                    for (i = 0; i < len; i += 3) {
                        base64 += chars[bytes[i] >> 2];
                        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                        base64 += chars[bytes[i + 2] & 63];
                    }
                    if (len % 3 === 2) {
                        base64 = base64.substring(0, base64.length - 1) + '=';
                    } else if (len % 3 === 1) {
                        base64 = base64.substring(0, base64.length - 2) + '==';
                    }
                    return base64;
                };
                exports.decode = function (base64) {
                    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
                    if (base64[base64.length - 1] === '=') {
                        bufferLength--;
                        if (base64[base64.length - 2] === '=') {
                            bufferLength--;
                        }
                    }
                    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
                    for (i = 0; i < len; i += 4) {
                        encoded1 = lookup[base64.charCodeAt(i)];
                        encoded2 = lookup[base64.charCodeAt(i + 1)];
                        encoded3 = lookup[base64.charCodeAt(i + 2)];
                        encoded4 = lookup[base64.charCodeAt(i + 3)];
                        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                    }
                    return arraybuffer;
                };
            }());
        },
        function (module, exports) {
            (function (global) {
                var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
                var blobSupported = function () {
                    try {
                        var a = new Blob(['hi']);
                        return a.size === 2;
                    } catch (e) {
                        return false;
                    }
                }();
                var blobSupportsArrayBufferView = blobSupported && function () {
                    try {
                        var b = new Blob([new Uint8Array([
                                1,
                                2
                            ])]);
                        return b.size === 2;
                    } catch (e) {
                        return false;
                    }
                }();
                var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
                function mapArrayBufferViews(ary) {
                    for (var i = 0; i < ary.length; i++) {
                        var chunk = ary[i];
                        if (chunk.buffer instanceof ArrayBuffer) {
                            var buf = chunk.buffer;
                            if (chunk.byteLength !== buf.byteLength) {
                                var copy = new Uint8Array(chunk.byteLength);
                                copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                                buf = copy.buffer;
                            }
                            ary[i] = buf;
                        }
                    }
                }
                function BlobBuilderConstructor(ary, options) {
                    options = options || {};
                    var bb = new BlobBuilder();
                    mapArrayBufferViews(ary);
                    for (var i = 0; i < ary.length; i++) {
                        bb.append(ary[i]);
                    }
                    return options.type ? bb.getBlob(options.type) : bb.getBlob();
                }
                ;
                function BlobConstructor(ary, options) {
                    mapArrayBufferViews(ary);
                    return new Blob(ary, options || {});
                }
                ;
                module.exports = function () {
                    if (blobSupported) {
                        return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
                    } else if (blobBuilderSupported) {
                        return BlobBuilderConstructor;
                    } else {
                        return undefined;
                    }
                }();
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            if (true) {
                module.exports = Emitter;
            }
            function Emitter(obj) {
                if (obj)
                    return mixin(obj);
            }
            ;
            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key];
                }
                return obj;
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
                return this;
            };
            Emitter.prototype.once = function (event, fn) {
                function on() {
                    this.off(event, on);
                    fn.apply(this, arguments);
                }
                on.fn = fn;
                this.on(event, on);
                return this;
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }
                var callbacks = this._callbacks['$' + event];
                if (!callbacks)
                    return this;
                if (1 == arguments.length) {
                    delete this._callbacks['$' + event];
                    return this;
                }
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
                return this;
            };
            Emitter.prototype.emit = function (event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1), callbacks = this._callbacks['$' + event];
                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args);
                    }
                }
                return this;
            };
            Emitter.prototype.listeners = function (event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks['$' + event] || [];
            };
            Emitter.prototype.hasListeners = function (event) {
                return !!this.listeners(event).length;
            };
        },
        function (module, exports) {
            exports.encode = function (obj) {
                var str = '';
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        if (str.length)
                            str += '&';
                        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
                    }
                }
                return str;
            };
            exports.decode = function (qs) {
                var qry = {};
                var pairs = qs.split('&');
                for (var i = 0, l = pairs.length; i < l; i++) {
                    var pair = pairs[i].split('=');
                    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                }
                return qry;
            };
        },
        function (module, exports) {
            module.exports = function (a, b) {
                var fn = function () {
                };
                fn.prototype = b.prototype;
                a.prototype = new fn();
                a.prototype.constructor = a;
            };
        },
        function (module, exports) {
            'use strict';
            var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {}, seed = 0, i = 0, prev;
            function encode(num) {
                var encoded = '';
                do {
                    encoded = alphabet[num % length] + encoded;
                    num = Math.floor(num / length);
                } while (num > 0);
                return encoded;
            }
            function decode(str) {
                var decoded = 0;
                for (i = 0; i < str.length; i++) {
                    decoded = decoded * length + map[str.charAt(i)];
                }
                return decoded;
            }
            function yeast() {
                var now = encode(+new Date());
                if (now !== prev)
                    return seed = 0, prev = now;
                return now + '.' + encode(seed++);
            }
            for (; i < length; i++)
                map[alphabet[i]] = i;
            yeast.encode = encode;
            yeast.decode = decode;
            module.exports = yeast;
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var Polling = __webpack_require__(25);
                var inherit = __webpack_require__(37);
                module.exports = JSONPPolling;
                var rNewline = /\n/g;
                var rEscapedNewline = /\\n/g;
                var callbacks;
                function empty() {
                }
                function JSONPPolling(opts) {
                    Polling.call(this, opts);
                    this.query = this.query || {};
                    if (!callbacks) {
                        if (!global.___eio)
                            global.___eio = [];
                        callbacks = global.___eio;
                    }
                    this.index = callbacks.length;
                    var self = this;
                    callbacks.push(function (msg) {
                        self.onData(msg);
                    });
                    this.query.j = this.index;
                    if (global.document && global.addEventListener) {
                        global.addEventListener('beforeunload', function () {
                            if (self.script)
                                self.script.onerror = empty;
                        }, false);
                    }
                }
                inherit(JSONPPolling, Polling);
                JSONPPolling.prototype.supportsBinary = false;
                JSONPPolling.prototype.doClose = function () {
                    if (this.script) {
                        this.script.parentNode.removeChild(this.script);
                        this.script = null;
                    }
                    if (this.form) {
                        this.form.parentNode.removeChild(this.form);
                        this.form = null;
                        this.iframe = null;
                    }
                    Polling.prototype.doClose.call(this);
                };
                JSONPPolling.prototype.doPoll = function () {
                    var self = this;
                    var script = document.createElement('script');
                    if (this.script) {
                        this.script.parentNode.removeChild(this.script);
                        this.script = null;
                    }
                    script.async = true;
                    script.src = this.uri();
                    script.onerror = function (e) {
                        self.onError('jsonp poll error', e);
                    };
                    var insertAt = document.getElementsByTagName('script')[0];
                    if (insertAt) {
                        insertAt.parentNode.insertBefore(script, insertAt);
                    } else {
                        (document.head || document.body).appendChild(script);
                    }
                    this.script = script;
                    var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
                    if (isUAgecko) {
                        setTimeout(function () {
                            var iframe = document.createElement('iframe');
                            document.body.appendChild(iframe);
                            document.body.removeChild(iframe);
                        }, 100);
                    }
                };
                JSONPPolling.prototype.doWrite = function (data, fn) {
                    var self = this;
                    if (!this.form) {
                        var form = document.createElement('form');
                        var area = document.createElement('textarea');
                        var id = this.iframeId = 'eio_iframe_' + this.index;
                        var iframe;
                        form.className = 'socketio';
                        form.style.position = 'absolute';
                        form.style.top = '-1000px';
                        form.style.left = '-1000px';
                        form.target = id;
                        form.method = 'POST';
                        form.setAttribute('accept-charset', 'utf-8');
                        area.name = 'd';
                        form.appendChild(area);
                        document.body.appendChild(form);
                        this.form = form;
                        this.area = area;
                    }
                    this.form.action = this.uri();
                    function complete() {
                        initIframe();
                        fn();
                    }
                    function initIframe() {
                        if (self.iframe) {
                            try {
                                self.form.removeChild(self.iframe);
                            } catch (e) {
                                self.onError('jsonp polling iframe removal error', e);
                            }
                        }
                        try {
                            var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                            iframe = document.createElement(html);
                        } catch (e) {
                            iframe = document.createElement('iframe');
                            iframe.name = self.iframeId;
                            iframe.src = 'javascript:0';
                        }
                        iframe.id = self.iframeId;
                        self.form.appendChild(iframe);
                        self.iframe = iframe;
                    }
                    initIframe();
                    data = data.replace(rEscapedNewline, '\\\n');
                    this.area.value = data.replace(rNewline, '\\n');
                    try {
                        this.form.submit();
                    } catch (e) {
                    }
                    if (this.iframe.attachEvent) {
                        this.iframe.onreadystatechange = function () {
                            if (self.iframe.readyState === 'complete') {
                                complete();
                            }
                        };
                    } else {
                        this.iframe.onload = complete;
                    }
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            (function (global) {
                var Transport = __webpack_require__(26);
                var parser = __webpack_require__(27);
                var parseqs = __webpack_require__(36);
                var inherit = __webpack_require__(37);
                var yeast = __webpack_require__(38);
                var debug = __webpack_require__(3)('engine.io-client:websocket');
                var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
                var NodeWebSocket;
                if (typeof window === 'undefined') {
                    try {
                        NodeWebSocket = __webpack_require__(41);
                    } catch (e) {
                    }
                }
                var WebSocket = BrowserWebSocket;
                if (!WebSocket && typeof window === 'undefined') {
                    WebSocket = NodeWebSocket;
                }
                module.exports = WS;
                function WS(opts) {
                    var forceBase64 = opts && opts.forceBase64;
                    if (forceBase64) {
                        this.supportsBinary = false;
                    }
                    this.perMessageDeflate = opts.perMessageDeflate;
                    this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
                    if (!this.usingBrowserWebSocket) {
                        WebSocket = NodeWebSocket;
                    }
                    Transport.call(this, opts);
                }
                inherit(WS, Transport);
                WS.prototype.name = 'websocket';
                WS.prototype.supportsBinary = true;
                WS.prototype.doOpen = function () {
                    if (!this.check()) {
                        return;
                    }
                    var uri = this.uri();
                    var protocols = void 0;
                    var opts = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;
                    if (this.extraHeaders) {
                        opts.headers = this.extraHeaders;
                    }
                    if (this.localAddress) {
                        opts.localAddress = this.localAddress;
                    }
                    try {
                        this.ws = this.usingBrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
                    } catch (err) {
                        return this.emit('error', err);
                    }
                    if (this.ws.binaryType === undefined) {
                        this.supportsBinary = false;
                    }
                    if (this.ws.supports && this.ws.supports.binary) {
                        this.supportsBinary = true;
                        this.ws.binaryType = 'nodebuffer';
                    } else {
                        this.ws.binaryType = 'arraybuffer';
                    }
                    this.addEventListeners();
                };
                WS.prototype.addEventListeners = function () {
                    var self = this;
                    this.ws.onopen = function () {
                        self.onOpen();
                    };
                    this.ws.onclose = function () {
                        self.onClose();
                    };
                    this.ws.onmessage = function (ev) {
                        self.onData(ev.data);
                    };
                    this.ws.onerror = function (e) {
                        self.onError('websocket error', e);
                    };
                };
                WS.prototype.write = function (packets) {
                    var self = this;
                    this.writable = false;
                    var total = packets.length;
                    for (var i = 0, l = total; i < l; i++) {
                        (function (packet) {
                            parser.encodePacket(packet, self.supportsBinary, function (data) {
                                if (!self.usingBrowserWebSocket) {
                                    var opts = {};
                                    if (packet.options) {
                                        opts.compress = packet.options.compress;
                                    }
                                    if (self.perMessageDeflate) {
                                        var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
                                        if (len < self.perMessageDeflate.threshold) {
                                            opts.compress = false;
                                        }
                                    }
                                }
                                try {
                                    if (self.usingBrowserWebSocket) {
                                        self.ws.send(data);
                                    } else {
                                        self.ws.send(data, opts);
                                    }
                                } catch (e) {
                                    debug('websocket closed before onclose event');
                                }
                                --total || done();
                            });
                        }(packets[i]));
                    }
                    function done() {
                        self.emit('flush');
                        setTimeout(function () {
                            self.writable = true;
                            self.emit('drain');
                        }, 0);
                    }
                };
                WS.prototype.onClose = function () {
                    Transport.prototype.onClose.call(this);
                };
                WS.prototype.doClose = function () {
                    if (typeof this.ws !== 'undefined') {
                        this.ws.close();
                    }
                };
                WS.prototype.uri = function () {
                    var query = this.query || {};
                    var schema = this.secure ? 'wss' : 'ws';
                    var port = '';
                    if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
                        port = ':' + this.port;
                    }
                    if (this.timestampRequests) {
                        query[this.timestampParam] = yeast();
                    }
                    if (!this.supportsBinary) {
                        query.b64 = 1;
                    }
                    query = parseqs.encode(query);
                    if (query.length) {
                        query = '?' + query;
                    }
                    var ipv6 = this.hostname.indexOf(':') !== -1;
                    return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
                };
                WS.prototype.check = function () {
                    return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports) {
        },
        function (module, exports) {
            var indexOf = [].indexOf;
            module.exports = function (arr, obj) {
                if (indexOf)
                    return arr.indexOf(obj);
                for (var i = 0; i < arr.length; ++i) {
                    if (arr[i] === obj)
                        return i;
                }
                return -1;
            };
        },
        function (module, exports) {
            (function (global) {
                var rvalidchars = /^[\],:{}\s]*$/;
                var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
                var rtrimLeft = /^\s+/;
                var rtrimRight = /\s+$/;
                module.exports = function parsejson(data) {
                    if ('string' != typeof data || !data) {
                        return null;
                    }
                    data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
                    if (global.JSON && JSON.parse) {
                        return JSON.parse(data);
                    }
                    if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
                        return new Function('return ' + data)();
                    }
                };
            }.call(exports, function () {
                return this;
            }()));
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            var parser = __webpack_require__(7);
            var Emitter = __webpack_require__(35);
            var toArray = __webpack_require__(45);
            var on = __webpack_require__(46);
            var bind = __webpack_require__(47);
            var debug = __webpack_require__(3)('socket.io-client:socket');
            var hasBin = __webpack_require__(29);
            module.exports = exports = Socket;
            var events = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            };
            var emit = Emitter.prototype.emit;
            function Socket(io, nsp, opts) {
                this.io = io;
                this.nsp = nsp;
                this.json = this;
                this.ids = 0;
                this.acks = {};
                this.receiveBuffer = [];
                this.sendBuffer = [];
                this.connected = false;
                this.disconnected = true;
                if (opts && opts.query) {
                    this.query = opts.query;
                }
                if (this.io.autoConnect)
                    this.open();
            }
            Emitter(Socket.prototype);
            Socket.prototype.subEvents = function () {
                if (this.subs)
                    return;
                var io = this.io;
                this.subs = [
                    on(io, 'open', bind(this, 'onopen')),
                    on(io, 'packet', bind(this, 'onpacket')),
                    on(io, 'close', bind(this, 'onclose'))
                ];
            };
            Socket.prototype.open = Socket.prototype.connect = function () {
                if (this.connected)
                    return this;
                this.subEvents();
                this.io.open();
                if ('open' === this.io.readyState)
                    this.onopen();
                this.emit('connecting');
                return this;
            };
            Socket.prototype.send = function () {
                var args = toArray(arguments);
                args.unshift('message');
                this.emit.apply(this, args);
                return this;
            };
            Socket.prototype.emit = function (ev) {
                if (events.hasOwnProperty(ev)) {
                    emit.apply(this, arguments);
                    return this;
                }
                var args = toArray(arguments);
                var parserType = parser.EVENT;
                if (hasBin(args)) {
                    parserType = parser.BINARY_EVENT;
                }
                var packet = {
                    type: parserType,
                    data: args
                };
                packet.options = {};
                packet.options.compress = !this.flags || false !== this.flags.compress;
                if ('function' === typeof args[args.length - 1]) {
                    debug('emitting packet with ack id %d', this.ids);
                    this.acks[this.ids] = args.pop();
                    packet.id = this.ids++;
                }
                if (this.connected) {
                    this.packet(packet);
                } else {
                    this.sendBuffer.push(packet);
                }
                delete this.flags;
                return this;
            };
            Socket.prototype.packet = function (packet) {
                packet.nsp = this.nsp;
                this.io.packet(packet);
            };
            Socket.prototype.onopen = function () {
                debug('transport is open - connecting');
                if ('/' !== this.nsp) {
                    if (this.query) {
                        this.packet({
                            type: parser.CONNECT,
                            query: this.query
                        });
                    } else {
                        this.packet({ type: parser.CONNECT });
                    }
                }
            };
            Socket.prototype.onclose = function (reason) {
                debug('close (%s)', reason);
                this.connected = false;
                this.disconnected = true;
                delete this.id;
                this.emit('disconnect', reason);
            };
            Socket.prototype.onpacket = function (packet) {
                if (packet.nsp !== this.nsp)
                    return;
                switch (packet.type) {
                case parser.CONNECT:
                    this.onconnect();
                    break;
                case parser.EVENT:
                    this.onevent(packet);
                    break;
                case parser.BINARY_EVENT:
                    this.onevent(packet);
                    break;
                case parser.ACK:
                    this.onack(packet);
                    break;
                case parser.BINARY_ACK:
                    this.onack(packet);
                    break;
                case parser.DISCONNECT:
                    this.ondisconnect();
                    break;
                case parser.ERROR:
                    this.emit('error', packet.data);
                    break;
                }
            };
            Socket.prototype.onevent = function (packet) {
                var args = packet.data || [];
                debug('emitting event %j', args);
                if (null != packet.id) {
                    debug('attaching ack callback to event');
                    args.push(this.ack(packet.id));
                }
                if (this.connected) {
                    emit.apply(this, args);
                } else {
                    this.receiveBuffer.push(args);
                }
            };
            Socket.prototype.ack = function (id) {
                var self = this;
                var sent = false;
                return function () {
                    if (sent)
                        return;
                    sent = true;
                    var args = toArray(arguments);
                    debug('sending ack %j', args);
                    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
                    self.packet({
                        type: type,
                        id: id,
                        data: args
                    });
                };
            };
            Socket.prototype.onack = function (packet) {
                var ack = this.acks[packet.id];
                if ('function' === typeof ack) {
                    debug('calling ack %s with %j', packet.id, packet.data);
                    ack.apply(this, packet.data);
                    delete this.acks[packet.id];
                } else {
                    debug('bad ack %s', packet.id);
                }
            };
            Socket.prototype.onconnect = function () {
                this.connected = true;
                this.disconnected = false;
                this.emit('connect');
                this.emitBuffered();
            };
            Socket.prototype.emitBuffered = function () {
                var i;
                for (i = 0; i < this.receiveBuffer.length; i++) {
                    emit.apply(this, this.receiveBuffer[i]);
                }
                this.receiveBuffer = [];
                for (i = 0; i < this.sendBuffer.length; i++) {
                    this.packet(this.sendBuffer[i]);
                }
                this.sendBuffer = [];
            };
            Socket.prototype.ondisconnect = function () {
                debug('server disconnect (%s)', this.nsp);
                this.destroy();
                this.onclose('io server disconnect');
            };
            Socket.prototype.destroy = function () {
                if (this.subs) {
                    for (var i = 0; i < this.subs.length; i++) {
                        this.subs[i].destroy();
                    }
                    this.subs = null;
                }
                this.io.destroy(this);
            };
            Socket.prototype.close = Socket.prototype.disconnect = function () {
                if (this.connected) {
                    debug('performing disconnect (%s)', this.nsp);
                    this.packet({ type: parser.DISCONNECT });
                }
                this.destroy();
                if (this.connected) {
                    this.onclose('io client disconnect');
                }
                return this;
            };
            Socket.prototype.compress = function (compress) {
                this.flags = this.flags || {};
                this.flags.compress = compress;
                return this;
            };
        },
        function (module, exports) {
            module.exports = toArray;
            function toArray(list, index) {
                var array = [];
                index = index || 0;
                for (var i = index || 0; i < list.length; i++) {
                    array[i - index] = list[i];
                }
                return array;
            }
        },
        function (module, exports) {
            'use strict';
            module.exports = on;
            function on(obj, ev, fn) {
                obj.on(ev, fn);
                return {
                    destroy: function destroy() {
                        obj.removeListener(ev, fn);
                    }
                };
            }
        },
        function (module, exports) {
            var slice = [].slice;
            module.exports = function (obj, fn) {
                if ('string' == typeof fn)
                    fn = obj[fn];
                if ('function' != typeof fn)
                    throw new Error('bind() requires a function');
                var args = slice.call(arguments, 2);
                return function () {
                    return fn.apply(obj, args.concat(slice.call(arguments)));
                };
            };
        },
        function (module, exports) {
            module.exports = Backoff;
            function Backoff(opts) {
                opts = opts || {};
                this.ms = opts.min || 100;
                this.max = opts.max || 10000;
                this.factor = opts.factor || 2;
                this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
                this.attempts = 0;
            }
            Backoff.prototype.duration = function () {
                var ms = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var rand = Math.random();
                    var deviation = Math.floor(rand * this.jitter * ms);
                    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
                }
                return Math.min(ms, this.max) | 0;
            };
            Backoff.prototype.reset = function () {
                this.attempts = 0;
            };
            Backoff.prototype.setMin = function (min) {
                this.ms = min;
            };
            Backoff.prototype.setMax = function (max) {
                this.max = max;
            };
            Backoff.prototype.setJitter = function (jitter) {
                this.jitter = jitter;
            };
        }
    ]);
}));
;
/*feathers-commons@0.7.8#lib/arguments*/
define('feathers-commons/lib/arguments', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    exports.default = getArguments;
    var noop = exports.noop = function noop() {
    };
    var getCallback = function getCallback(args) {
        var last = args[args.length - 1];
        return typeof last === 'function' ? last : noop;
    };
    var getParams = function getParams(args, position) {
        return _typeof(args[position]) === 'object' ? args[position] : {};
    };
    var updateOrPatch = function updateOrPatch(name) {
        return function (args) {
            var id = args[0];
            var data = args[1];
            var callback = getCallback(args);
            var params = getParams(args, 2);
            if (typeof id === 'function') {
                throw new Error('First parameter for \'' + name + '\' can not be a function');
            }
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                throw new Error('No data provided for \'' + name + '\'');
            }
            if (args.length > 4) {
                throw new Error('Too many arguments for \'' + name + '\' service method');
            }
            return [
                id,
                data,
                params,
                callback
            ];
        };
    };
    var getOrRemove = function getOrRemove(name) {
        return function (args) {
            var id = args[0];
            var params = getParams(args, 1);
            var callback = getCallback(args);
            if (args.length > 3) {
                throw new Error('Too many arguments for \'' + name + '\' service method');
            }
            if (typeof id === 'function') {
                throw new Error('First parameter for \'' + name + '\' can not be a function');
            }
            return [
                id,
                params,
                callback
            ];
        };
    };
    var converters = exports.converters = {
        find: function find(args) {
            var callback = getCallback(args);
            var params = getParams(args, 0);
            if (args.length > 2) {
                throw new Error('Too many arguments for \'find\' service method');
            }
            return [
                params,
                callback
            ];
        },
        create: function create(args) {
            var data = args[0];
            var params = getParams(args, 1);
            var callback = getCallback(args);
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                throw new Error('First parameter for \'create\' must be an object');
            }
            if (args.length > 3) {
                throw new Error('Too many arguments for \'create\' service method');
            }
            return [
                data,
                params,
                callback
            ];
        },
        update: updateOrPatch('update'),
        patch: updateOrPatch('patch'),
        get: getOrRemove('get'),
        remove: getOrRemove('remove')
    };
    function getArguments(method, args) {
        return converters[method](args);
    }
});
/*feathers-commons@0.7.8#lib/utils*/
define('feathers-commons/lib/utils', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    exports.stripSlashes = stripSlashes;
    exports.each = each;
    exports.matcher = matcher;
    exports.sorter = sorter;
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }
    function stripSlashes(name) {
        return name.replace(/^(\/*)|(\/*)$/g, '');
    }
    function each(obj, callback) {
        if (obj && typeof obj.forEach === 'function') {
            obj.forEach(callback);
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
            Object.keys(obj).forEach(function (key) {
                return callback(obj[key], key);
            });
        }
    }
    var _ = exports._ = {
        some: function some(value, callback) {
            return Object.keys(value).map(function (key) {
                return [
                    value[key],
                    key
                ];
            }).some(function (current) {
                return callback.apply(undefined, _toConsumableArray(current));
            });
        },
        every: function every(value, callback) {
            return Object.keys(value).map(function (key) {
                return [
                    value[key],
                    key
                ];
            }).every(function (current) {
                return callback.apply(undefined, _toConsumableArray(current));
            });
        },
        isMatch: function isMatch(obj, item) {
            return Object.keys(item).every(function (key) {
                return obj[key] === item[key];
            });
        },
        omit: function omit(obj) {
            var result = _extends({}, obj);
            for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                keys[_key - 1] = arguments[_key];
            }
            keys.forEach(function (key) {
                return delete result[key];
            });
            return result;
        }
    };
    var specialFilters = exports.specialFilters = {
        $in: function $in(key, ins) {
            return function (current) {
                return ins.indexOf(current[key]) !== -1;
            };
        },
        $nin: function $nin(key, nins) {
            return function (current) {
                return nins.indexOf(current[key]) === -1;
            };
        },
        $lt: function $lt(key, value) {
            return function (current) {
                return current[key] < value;
            };
        },
        $lte: function $lte(key, value) {
            return function (current) {
                return current[key] <= value;
            };
        },
        $gt: function $gt(key, value) {
            return function (current) {
                return current[key] > value;
            };
        },
        $gte: function $gte(key, value) {
            return function (current) {
                return current[key] >= value;
            };
        },
        $ne: function $ne(key, value) {
            return function (current) {
                return current[key] !== value;
            };
        }
    };
    function matcher(originalQuery) {
        var query = _.omit(originalQuery, '$limit', '$skip', '$sort', '$select');
        return function (item) {
            if (query.$or && _.some(query.$or, function (or) {
                    return matcher(or)(item);
                })) {
                return true;
            }
            return _.every(query, function (value, key) {
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                    return _.every(value, function (target, filterType) {
                        if (specialFilters[filterType]) {
                            var filter = specialFilters[filterType](key, target);
                            return filter(item);
                        }
                        return false;
                    });
                } else if (typeof item[key] !== 'undefined') {
                    return item[key] === query[key];
                }
                return false;
            });
        };
    }
    function sorter($sort) {
        return function (first, second) {
            var comparator = 0;
            each($sort, function (modifier, key) {
                modifier = parseInt(modifier, 10);
                if (first[key] < second[key]) {
                    comparator -= 1 * modifier;
                }
                if (first[key] > second[key]) {
                    comparator += 1 * modifier;
                }
            });
            return comparator;
        };
    }
});
/*feathers-commons@0.7.8#lib/hooks*/
define('feathers-commons/lib/hooks', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
    var _utils = require('feathers-commons/lib/utils');
    function getOrRemove(args) {
        return {
            id: args[0],
            params: args[1],
            callback: args[2]
        };
    }
    function updateOrPatch(args) {
        return {
            id: args[0],
            data: args[1],
            params: args[2],
            callback: args[3]
        };
    }
    var converters = {
        find: function find(args) {
            return {
                params: args[0],
                callback: args[1]
            };
        },
        create: function create(args) {
            return {
                data: args[0],
                params: args[1],
                callback: args[2]
            };
        },
        get: getOrRemove,
        remove: getOrRemove,
        update: updateOrPatch,
        patch: updateOrPatch
    };
    function hookObject(method, type, args, app) {
        var hook = converters[method](args);
        hook.method = method;
        hook.type = type;
        if (app) {
            hook.app = app;
        }
        return hook;
    }
    function defaultMakeArguments(hook) {
        var result = [];
        if (typeof hook.id !== 'undefined') {
            result.push(hook.id);
        }
        if (hook.data) {
            result.push(hook.data);
        }
        result.push(hook.params || {});
        result.push(hook.callback);
        return result;
    }
    function makeArguments(hook) {
        if (hook.method === 'find') {
            return [
                hook.params,
                hook.callback
            ];
        }
        if (hook.method === 'get' || hook.method === 'remove') {
            return [
                hook.id,
                hook.params,
                hook.callback
            ];
        }
        if (hook.method === 'update' || hook.method === 'patch') {
            return [
                hook.id,
                hook.data,
                hook.params,
                hook.callback
            ];
        }
        if (hook.method === 'create') {
            return [
                hook.data,
                hook.params,
                hook.callback
            ];
        }
        return defaultMakeArguments(hook);
    }
    function convertHookData(obj) {
        var hook = {};
        if (Array.isArray(obj)) {
            hook = { all: obj };
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
            hook = { all: [obj] };
        } else {
            (0, _utils.each)(obj, function (value, key) {
                hook[key] = !Array.isArray(value) ? [value] : value;
            });
        }
        return hook;
    }
    exports.default = {
        hookObject: hookObject,
        hook: hookObject,
        converters: converters,
        defaultMakeArguments: defaultMakeArguments,
        makeArguments: makeArguments,
        convertHookData: convertHookData
    };
    module.exports = exports['default'];
});
/*feathers-commons@0.7.8#lib/commons*/
define('feathers-commons', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _arguments = require('feathers-commons/lib/arguments');
    var _arguments2 = _interopRequireDefault(_arguments);
    var _utils = require('feathers-commons/lib/utils');
    var _hooks = require('feathers-commons/lib/hooks');
    var _hooks2 = _interopRequireDefault(_hooks);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
        getArguments: _arguments2.default,
        stripSlashes: _utils.stripSlashes,
        each: _utils.each,
        hooks: _hooks2.default,
        matcher: _utils.matcher,
        sorter: _utils.sorter
    };
    module.exports = exports['default'];
});
/*feathers-socket-commons@2.3.1#lib/utils*/
define('feathers-socket-commons/lib/utils', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.events = exports.eventMappings = undefined;
    exports.convertFilterData = convertFilterData;
    exports.promisify = promisify;
    exports.normalizeError = normalizeError;
    var _feathersCommons = require('feathers-commons');
    var eventMappings = exports.eventMappings = {
        create: 'created',
        update: 'updated',
        patch: 'patched',
        remove: 'removed'
    };
    var events = exports.events = Object.keys(eventMappings).map(function (method) {
        return eventMappings[method];
    });
    function convertFilterData(obj) {
        return _feathersCommons.hooks.convertHookData(obj);
    }
    function promisify(method, context) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }
        return new Promise(function (resolve, reject) {
            method.apply(context, args.concat(function (error, result) {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            }));
        });
    }
    function normalizeError(e) {
        var result = {};
        Object.getOwnPropertyNames(e).forEach(function (key) {
            return result[key] = e[key];
        });
        if (process.env.NODE_ENV === 'production') {
            delete result.stack;
        }
        delete result.hook;
        return result;
    }
});
/*feathers-socket-commons@2.3.1#lib/client*/
define('feathers-socket-commons/lib/client', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _utils = require('feathers-socket-commons/lib/utils');
    var _feathersErrors = require('feathers-errors');
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    var debug = require('debug')('feathers-socket-commons:client');
    var namespacedEmitterMethods = [
        'addListener',
        'emit',
        'listenerCount',
        'listeners',
        'on',
        'once',
        'prependListener',
        'prependOnceListener',
        'removeAllListeners',
        'removeListener'
    ];
    var otherEmitterMethods = [
        'eventNames',
        'getMaxListeners',
        'setMaxListeners'
    ];
    var addEmitterMethods = function addEmitterMethods(service) {
        otherEmitterMethods.forEach(function (method) {
            service[method] = function () {
                var _connection;
                if (typeof this.connection[method] !== 'function') {
                    throw new Error('Can not call \'' + method + '\' on the client service connection.');
                }
                return (_connection = this.connection)[method].apply(_connection, arguments);
            };
        });
        namespacedEmitterMethods.forEach(function (method) {
            service[method] = function (name) {
                var _connection2;
                if (typeof this.connection[method] !== 'function') {
                    throw new Error('Can not call \'' + method + '\' on the client service connection.');
                }
                var eventName = this.path + ' ' + name;
                debug('Calling emitter method ' + method + ' with ' + ('namespaced event \'' + eventName + '\''));
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }
                var result = (_connection2 = this.connection)[method].apply(_connection2, [eventName].concat(args));
                return result === this.connection ? this : result;
            };
        });
    };
    var Service = function () {
        function Service(options) {
            _classCallCheck(this, Service);
            this.events = _utils.events;
            this.path = options.name;
            this.connection = options.connection;
            this.method = options.method;
            this.timeout = options.timeout || 5000;
            addEmitterMethods(this);
        }
        _createClass(Service, [
            {
                key: 'send',
                value: function send(method) {
                    var _this = this;
                    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        args[_key2 - 1] = arguments[_key2];
                    }
                    var callback = null;
                    if (typeof args[args.length - 1] === 'function') {
                        callback = args.pop();
                    }
                    return new Promise(function (resolve, reject) {
                        var _connection3;
                        var event = _this.path + '::' + method;
                        var timeoutId = setTimeout(function () {
                            return reject(new Error('Timeout of ' + _this.timeout + 'ms exceeded calling ' + event));
                        }, _this.timeout);
                        args.unshift(event);
                        args.push(function (error, data) {
                            error = (0, _feathersErrors.convert)(error);
                            clearTimeout(timeoutId);
                            if (callback) {
                                callback(error, data);
                            }
                            return error ? reject(error) : resolve(data);
                        });
                        debug('Sending socket.' + _this.method, args);
                        (_connection3 = _this.connection)[_this.method].apply(_connection3, args);
                    });
                }
            },
            {
                key: 'find',
                value: function find() {
                    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    return this.send('find', params.query || {});
                }
            },
            {
                key: 'get',
                value: function get(id) {
                    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    return this.send('get', id, params.query || {});
                }
            },
            {
                key: 'create',
                value: function create(data) {
                    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    return this.send('create', data, params.query || {});
                }
            },
            {
                key: 'update',
                value: function update(id, data) {
                    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                    return this.send('update', id, data, params.query || {});
                }
            },
            {
                key: 'patch',
                value: function patch(id, data) {
                    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                    return this.send('patch', id, data, params.query || {});
                }
            },
            {
                key: 'remove',
                value: function remove(id) {
                    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    return this.send('remove', id, params.query || {});
                }
            },
            {
                key: 'off',
                value: function off(name) {
                    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                        args[_key3 - 1] = arguments[_key3];
                    }
                    if (typeof this.connection.off === 'function') {
                        var _connection4;
                        return (_connection4 = this.connection).off.apply(_connection4, [this.path + ' ' + name].concat(args));
                    } else if (args.length === 0) {
                        return this.removeAllListeners(name);
                    }
                    return this.removeListener.apply(this, [name].concat(args));
                }
            }
        ]);
        return Service;
    }();
    exports.default = Service;
    module.exports = exports['default'];
});
/*feathers-socket-commons@2.3.1#client*/
define('feathers-socket-commons/client', function (require, exports, module) {
    module.exports = require('feathers-socket-commons/lib/client');
});
/*feathers-socketio@1.4.2#lib/client*/
define('feathers-socketio/lib/client', function (require, exports, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    exports.default = function (connection, options) {
        if (!connection) {
            throw new Error('Socket.io connection needs to be provided');
        }
        var defaultService = function defaultService(name) {
            var settings = _extends({}, options, {
                name: name,
                connection: connection,
                method: 'emit'
            });
            return new _client2.default(settings);
        };
        var initialize = function initialize() {
            if (typeof this.defaultService === 'function') {
                throw new Error('Only one default client provider can be configured');
            }
            this.io = connection;
            this.defaultService = defaultService;
        };
        initialize.Service = _client2.default;
        initialize.service = defaultService;
        return initialize;
    };
    var _client = require('feathers-socket-commons/client');
    var _client2 = _interopRequireDefault(_client);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = exports['default'];
});
/*feathers-socketio@1.4.2#client*/
define('feathers-socketio/client', function (require, exports, module) {
    module.exports = require('feathers-socketio/lib/client');
});
/*testee-client@0.4.0#docready*/
define('testee-client/docready', function (require, exports, module) {
    var domReadyCallback = function () {
    };
    var $ = function (callback) {
        readyBound = false;
        $.isReady = false;
        if (typeof callback === 'function') {
            domReadyCallback = callback;
        }
        bindReady();
    };
    var doc = window.document;
    var readyBound = false;
    var DOMContentLoaded = function () {
        if (doc.addEventListener) {
            doc.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
        } else {
            doc.detachEvent('onreadystatechange', DOMContentLoaded);
        }
        domReady();
    };
    var domReady = function () {
        if (!$.isReady) {
            if (!doc.body) {
                return setTimeout(domReady, 1);
            }
            $.isReady = true;
            domReadyCallback();
        }
    };
    var bindReady = function () {
        var toplevel = false;
        if (readyBound) {
            return;
        }
        readyBound = true;
        if (doc.readyState !== 'loading') {
            domReady();
        }
        if (doc.addEventListener) {
            doc.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
            window.addEventListener('load', DOMContentLoaded, false);
        } else if (doc.attachEvent) {
            doc.attachEvent('onreadystatechange', DOMContentLoaded);
            window.attachEvent('onload', DOMContentLoaded);
            try {
                toplevel = window.frameElement == null;
            } catch (e) {
            }
            if (doc.documentElement.doScroll && toplevel) {
                doScrollCheck();
            }
        }
    };
    var doScrollCheck = function () {
        if ($.isReady) {
            return;
        }
        try {
            doc.documentElement.doScroll('left');
        } catch (error) {
            setTimeout(doScrollCheck, 1);
            return;
        }
        domReady();
    };
    $.isReady = false;
    module.exports = $;
});
/*lodash@4.17.4#_copyArray*/
define('lodash/_copyArray', function (require, exports, module) {
    function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
            array[index] = source[index];
        }
        return array;
    }
    module.exports = copyArray;
});
/*lodash@4.17.4#_DataView*/
define('lodash/_DataView', function (require, exports, module) {
    var getNative = require('lodash/_getNative'), root = require('lodash/_root');
    var DataView = getNative(root, 'DataView');
    module.exports = DataView;
});
/*lodash@4.17.4#_Map*/
define('lodash/_Map', function (require, exports, module) {
    var getNative = require('lodash/_getNative'), root = require('lodash/_root');
    var Map = getNative(root, 'Map');
    module.exports = Map;
});
/*lodash@4.17.4#_Promise*/
define('lodash/_Promise', function (require, exports, module) {
    var getNative = require('lodash/_getNative'), root = require('lodash/_root');
    var Promise = getNative(root, 'Promise');
    module.exports = Promise;
});
/*lodash@4.17.4#_Set*/
define('lodash/_Set', function (require, exports, module) {
    var getNative = require('lodash/_getNative'), root = require('lodash/_root');
    var Set = getNative(root, 'Set');
    module.exports = Set;
});
/*lodash@4.17.4#_WeakMap*/
define('lodash/_WeakMap', function (require, exports, module) {
    var getNative = require('lodash/_getNative'), root = require('lodash/_root');
    var WeakMap = getNative(root, 'WeakMap');
    module.exports = WeakMap;
});
/*lodash@4.17.4#_getTag*/
define('lodash/_getTag', function (require, exports, module) {
    var DataView = require('lodash/_DataView'), Map = require('lodash/_Map'), Promise = require('lodash/_Promise'), Set = require('lodash/_Set'), WeakMap = require('lodash/_WeakMap'), baseGetTag = require('lodash/_baseGetTag'), toSource = require('lodash/_toSource');
    var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
    var dataViewTag = '[object DataView]';
    var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function (value) {
            var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
            if (ctorString) {
                switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
                }
            }
            return result;
        };
    }
    module.exports = getTag;
});
/*lodash@4.17.4#isString*/
define('lodash/isString', function (require, exports, module) {
    var baseGetTag = require('lodash/_baseGetTag'), isArray = require('lodash/isArray'), isObjectLike = require('lodash/isObjectLike');
    var stringTag = '[object String]';
    function isString(value) {
        return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString;
});
/*lodash@4.17.4#_iteratorToArray*/
define('lodash/_iteratorToArray', function (require, exports, module) {
    function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
            result.push(data.value);
        }
        return result;
    }
    module.exports = iteratorToArray;
});
/*lodash@4.17.4#_mapToArray*/
define('lodash/_mapToArray', function (require, exports, module) {
    function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function (value, key) {
            result[++index] = [
                key,
                value
            ];
        });
        return result;
    }
    module.exports = mapToArray;
});
/*lodash@4.17.4#_setToArray*/
define('lodash/_setToArray', function (require, exports, module) {
    function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function (value) {
            result[++index] = value;
        });
        return result;
    }
    module.exports = setToArray;
});
/*lodash@4.17.4#_asciiToArray*/
define('lodash/_asciiToArray', function (require, exports, module) {
    function asciiToArray(string) {
        return string.split('');
    }
    module.exports = asciiToArray;
});
/*lodash@4.17.4#_hasUnicode*/
define('lodash/_hasUnicode', function (require, exports, module) {
    var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
    var rsZWJ = '\\u200d';
    var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
    function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
});
/*lodash@4.17.4#_unicodeToArray*/
define('lodash/_unicodeToArray', function (require, exports, module) {
    var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
    var rsAstral = '[' + rsAstralRange + ']', rsCombo = '[' + rsComboRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsZWJ = '\\u200d';
    var reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
            rsNonAstral,
            rsRegional,
            rsSurrPair
        ].join('|') + ')' + rsOptVar + reOptMod + ')*', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = '(?:' + [
            rsNonAstral + rsCombo + '?',
            rsCombo,
            rsRegional,
            rsSurrPair,
            rsAstral
        ].join('|') + ')';
    var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
    function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
});
/*lodash@4.17.4#_stringToArray*/
define('lodash/_stringToArray', function (require, exports, module) {
    var asciiToArray = require('lodash/_asciiToArray'), hasUnicode = require('lodash/_hasUnicode'), unicodeToArray = require('lodash/_unicodeToArray');
    function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
});
/*lodash@4.17.4#_arrayMap*/
define('lodash/_arrayMap', function (require, exports, module) {
    function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }
    module.exports = arrayMap;
});
/*lodash@4.17.4#_baseValues*/
define('lodash/_baseValues', function (require, exports, module) {
    var arrayMap = require('lodash/_arrayMap');
    function baseValues(object, props) {
        return arrayMap(props, function (key) {
            return object[key];
        });
    }
    module.exports = baseValues;
});
/*lodash@4.17.4#_overArg*/
define('lodash/_overArg', function (require, exports, module) {
    function overArg(func, transform) {
        return function (arg) {
            return func(transform(arg));
        };
    }
    module.exports = overArg;
});
/*lodash@4.17.4#_nativeKeys*/
define('lodash/_nativeKeys', function (require, exports, module) {
    var overArg = require('lodash/_overArg');
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
});
/*lodash@4.17.4#_baseKeys*/
define('lodash/_baseKeys', function (require, exports, module) {
    var isPrototype = require('lodash/_isPrototype'), nativeKeys = require('lodash/_nativeKeys');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
        if (!isPrototype(object)) {
            return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
                result.push(key);
            }
        }
        return result;
    }
    module.exports = baseKeys;
});
/*lodash@4.17.4#keys*/
define('lodash/keys', function (require, exports, module) {
    var arrayLikeKeys = require('lodash/_arrayLikeKeys'), baseKeys = require('lodash/_baseKeys'), isArrayLike = require('lodash/isArrayLike');
    function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
});
/*lodash@4.17.4#values*/
define('lodash/values', function (require, exports, module) {
    var baseValues = require('lodash/_baseValues'), keys = require('lodash/keys');
    function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
    }
    module.exports = values;
});
/*lodash@4.17.4#toArray*/
define('lodash/toArray', function (require, exports, module) {
    var Symbol = require('lodash/_Symbol'), copyArray = require('lodash/_copyArray'), getTag = require('lodash/_getTag'), isArrayLike = require('lodash/isArrayLike'), isString = require('lodash/isString'), iteratorToArray = require('lodash/_iteratorToArray'), mapToArray = require('lodash/_mapToArray'), setToArray = require('lodash/_setToArray'), stringToArray = require('lodash/_stringToArray'), values = require('lodash/values');
    var mapTag = '[object Map]', setTag = '[object Set]';
    var symIterator = Symbol ? Symbol.iterator : undefined;
    function toArray(value) {
        if (!value) {
            return [];
        }
        if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
    }
    module.exports = toArray;
});
/*testee-client@0.4.0#runner*/
define('testee-client/runner', function (require, exports, module) {
    var _ = { toArray: require('lodash/toArray') };
    module.exports = function (options) {
        var file = { file: window.location.toString() };
        return Object.assign({
            call: function (path, method) {
                var args = _.toArray(arguments).slice(2);
                var service = this[path];
                this.connect = this.connect.then(function () {
                    return service[method].apply(service, args);
                });
                return this.connect;
            },
            log: function (type, args) {
                var convertedArgs = [];
                for (var i = 0; i < args.length; i++) {
                    convertedArgs.push(args[i]);
                }
                this.call('logs', 'create', {
                    parent: this._root.id,
                    type: type,
                    args: convertedArgs
                });
            },
            start: function (data) {
                data = Object.assign({ status: 'running' }, file, data);
                this._root = data;
                this.call('runs', 'create', data);
            },
            suite: function (data) {
                data = Object.assign({ status: 'running' }, file, data);
                this.call('suites', 'create', data);
            },
            test: function (data) {
                data = Object.assign({}, file, data);
                this.call('tests', 'create', data);
            },
            pending: function (data) {
                data = Object.assign({ status: 'pending' }, file, data);
                this.call('tests', 'create', data);
            },
            pass: function (data) {
                data = Object.assign({
                    status: 'passed',
                    state: 'passed'
                }, data);
                this.call('tests', 'patch', data.id, data);
            },
            fail: function (data) {
                data = Object.assign({
                    status: 'failed',
                    state: 'failed'
                }, data);
                this.call('tests', 'patch', data.id, data);
            },
            testEnd: function () {
            },
            suiteEnd: function (data) {
                data = Object.assign({ status: 'finished' }, data);
                this.call('suites', 'patch', data.id, data);
            },
            end: function (data) {
                data = Object.assign({ status: 'finished' }, data);
                var socket = this.socket;
                if (window.__coverage__ && this.coverages) {
                    this.call('coverages', 'create', {
                        id: data.id,
                        run: data,
                        coverage: window.__coverage__
                    });
                }
                this.call('runs', 'patch', data.id, data).then(function () {
                    if (socket && typeof socket.disconnect === 'function') {
                        socket.disconnect();
                    }
                });
            }
        }, options);
    };
});
/*crypt@0.0.2#crypt*/
define('crypt', function (require, exports, module) {
    (function () {
        var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', crypt = {
                rotl: function (n, b) {
                    return n << b | n >>> 32 - b;
                },
                rotr: function (n, b) {
                    return n << 32 - b | n >>> b;
                },
                endian: function (n) {
                    if (n.constructor == Number) {
                        return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
                    }
                    for (var i = 0; i < n.length; i++)
                        n[i] = crypt.endian(n[i]);
                    return n;
                },
                randomBytes: function (n) {
                    for (var bytes = []; n > 0; n--)
                        bytes.push(Math.floor(Math.random() * 256));
                    return bytes;
                },
                bytesToWords: function (bytes) {
                    for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
                        words[b >>> 5] |= bytes[i] << 24 - b % 32;
                    return words;
                },
                wordsToBytes: function (words) {
                    for (var bytes = [], b = 0; b < words.length * 32; b += 8)
                        bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
                    return bytes;
                },
                bytesToHex: function (bytes) {
                    for (var hex = [], i = 0; i < bytes.length; i++) {
                        hex.push((bytes[i] >>> 4).toString(16));
                        hex.push((bytes[i] & 15).toString(16));
                    }
                    return hex.join('');
                },
                hexToBytes: function (hex) {
                    for (var bytes = [], c = 0; c < hex.length; c += 2)
                        bytes.push(parseInt(hex.substr(c, 2), 16));
                    return bytes;
                },
                bytesToBase64: function (bytes) {
                    for (var base64 = [], i = 0; i < bytes.length; i += 3) {
                        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
                        for (var j = 0; j < 4; j++)
                            if (i * 8 + j * 6 <= bytes.length * 8)
                                base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
                            else
                                base64.push('=');
                    }
                    return base64.join('');
                },
                base64ToBytes: function (base64) {
                    base64 = base64.replace(/[^A-Z0-9+\/]/gi, '');
                    for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
                        if (imod4 == 0)
                            continue;
                        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
                    }
                    return bytes;
                }
            };
        module.exports = crypt;
    }());
});
/*charenc@0.0.2#charenc*/
define('charenc', function (require, exports, module) {
    var charenc = {
        utf8: {
            stringToBytes: function (str) {
                return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
            },
            bytesToString: function (bytes) {
                return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
            }
        },
        bin: {
            stringToBytes: function (str) {
                for (var bytes = [], i = 0; i < str.length; i++)
                    bytes.push(str.charCodeAt(i) & 255);
                return bytes;
            },
            bytesToString: function (bytes) {
                for (var str = [], i = 0; i < bytes.length; i++)
                    str.push(String.fromCharCode(bytes[i]));
                return str.join('');
            }
        }
    };
    module.exports = charenc;
});
/*is-buffer@1.1.4#index*/
define('is-buffer', function (require, exports, module) {
    module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
    };
    function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
    }
    function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
    }
});
/*md5@2.2.1#md5*/
define('md5', function (require, exports, module) {
    (function () {
        var crypt = require('crypt'), utf8 = require('charenc').utf8, isBuffer = require('is-buffer'), bin = require('charenc').bin, md5 = function (message, options) {
                if (message.constructor == String)
                    if (options && options.encoding === 'binary')
                        message = bin.stringToBytes(message);
                    else
                        message = utf8.stringToBytes(message);
                else if (isBuffer(message))
                    message = Array.prototype.slice.call(message, 0);
                else if (!Array.isArray(message))
                    message = message.toString();
                var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
                for (var i = 0; i < m.length; i++) {
                    m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
                }
                m[l >>> 5] |= 128 << l % 32;
                m[(l + 64 >>> 9 << 4) + 14] = l;
                var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
                for (var i = 0; i < m.length; i += 16) {
                    var aa = a, bb = b, cc = c, dd = d;
                    a = FF(a, b, c, d, m[i + 0], 7, -680876936);
                    d = FF(d, a, b, c, m[i + 1], 12, -389564586);
                    c = FF(c, d, a, b, m[i + 2], 17, 606105819);
                    b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
                    a = FF(a, b, c, d, m[i + 4], 7, -176418897);
                    d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
                    c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
                    b = FF(b, c, d, a, m[i + 7], 22, -45705983);
                    a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
                    d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
                    c = FF(c, d, a, b, m[i + 10], 17, -42063);
                    b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
                    a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
                    d = FF(d, a, b, c, m[i + 13], 12, -40341101);
                    c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
                    b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
                    a = GG(a, b, c, d, m[i + 1], 5, -165796510);
                    d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
                    c = GG(c, d, a, b, m[i + 11], 14, 643717713);
                    b = GG(b, c, d, a, m[i + 0], 20, -373897302);
                    a = GG(a, b, c, d, m[i + 5], 5, -701558691);
                    d = GG(d, a, b, c, m[i + 10], 9, 38016083);
                    c = GG(c, d, a, b, m[i + 15], 14, -660478335);
                    b = GG(b, c, d, a, m[i + 4], 20, -405537848);
                    a = GG(a, b, c, d, m[i + 9], 5, 568446438);
                    d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
                    c = GG(c, d, a, b, m[i + 3], 14, -187363961);
                    b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
                    a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
                    d = GG(d, a, b, c, m[i + 2], 9, -51403784);
                    c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
                    b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
                    a = HH(a, b, c, d, m[i + 5], 4, -378558);
                    d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
                    c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
                    b = HH(b, c, d, a, m[i + 14], 23, -35309556);
                    a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
                    d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
                    c = HH(c, d, a, b, m[i + 7], 16, -155497632);
                    b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
                    a = HH(a, b, c, d, m[i + 13], 4, 681279174);
                    d = HH(d, a, b, c, m[i + 0], 11, -358537222);
                    c = HH(c, d, a, b, m[i + 3], 16, -722521979);
                    b = HH(b, c, d, a, m[i + 6], 23, 76029189);
                    a = HH(a, b, c, d, m[i + 9], 4, -640364487);
                    d = HH(d, a, b, c, m[i + 12], 11, -421815835);
                    c = HH(c, d, a, b, m[i + 15], 16, 530742520);
                    b = HH(b, c, d, a, m[i + 2], 23, -995338651);
                    a = II(a, b, c, d, m[i + 0], 6, -198630844);
                    d = II(d, a, b, c, m[i + 7], 10, 1126891415);
                    c = II(c, d, a, b, m[i + 14], 15, -1416354905);
                    b = II(b, c, d, a, m[i + 5], 21, -57434055);
                    a = II(a, b, c, d, m[i + 12], 6, 1700485571);
                    d = II(d, a, b, c, m[i + 3], 10, -1894986606);
                    c = II(c, d, a, b, m[i + 10], 15, -1051523);
                    b = II(b, c, d, a, m[i + 1], 21, -2054922799);
                    a = II(a, b, c, d, m[i + 8], 6, 1873313359);
                    d = II(d, a, b, c, m[i + 15], 10, -30611744);
                    c = II(c, d, a, b, m[i + 6], 15, -1560198380);
                    b = II(b, c, d, a, m[i + 13], 21, 1309151649);
                    a = II(a, b, c, d, m[i + 4], 6, -145523070);
                    d = II(d, a, b, c, m[i + 11], 10, -1120210379);
                    c = II(c, d, a, b, m[i + 2], 15, 718787259);
                    b = II(b, c, d, a, m[i + 9], 21, -343485551);
                    a = a + aa >>> 0;
                    b = b + bb >>> 0;
                    c = c + cc >>> 0;
                    d = d + dd >>> 0;
                }
                return crypt.endian([
                    a,
                    b,
                    c,
                    d
                ]);
            };
        md5._ff = function (a, b, c, d, x, s, t) {
            var n = a + (b & c | ~b & d) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
        };
        md5._gg = function (a, b, c, d, x, s, t) {
            var n = a + (b & d | c & ~d) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
        };
        md5._hh = function (a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
        };
        md5._ii = function (a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
        };
        md5._blocksize = 16;
        md5._digestsize = 16;
        module.exports = function (message, options) {
            if (message === undefined || message === null)
                throw new Error('Illegal argument ' + message);
            var digestbytes = crypt.wordsToBytes(md5(message, options));
            return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
        };
    }());
});
/*testee-client@0.4.0#guid*/
define('testee-client/guid', function (require, exports, module) {
    var md5 = require('md5');
    module.exports = function () {
        var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : r & 3 | 8;
            return v.toString(16);
        });
        return md5(guid + navigator.useragent);
    };
});
/*testee-client@0.4.0#adapters/qunit*/
define('testee-client/adapters/qunit', function (require, exports, module) {
    var guid = require('testee-client/guid');
    module.exports = function (QUnit, Runner, win) {
        var suites = [];
        var suiteId = function () {
            return suites[suites.length - 1];
        };
        var endSuite = function () {
            Runner.suiteEnd({ id: suiteId() });
            suites.pop();
        };
        var runId = guid();
        QUnit.begin(function () {
            var titleEl = win.document.getElementsByTagName('title')[0] || document.getElementsByTagName('h1')[0];
            var suite = guid();
            Runner.start({
                id: runId,
                environment: win.navigator.userAgent,
                runner: 'QUnit',
                time: new Date().getTime()
            });
            var title = titleEl ? titleEl.children.length ? titleEl.children[0].innerHTML : titleEl.innerHTML : '';
            Runner.suite({
                title: title,
                root: true,
                id: suite,
                parent: runId
            });
            suites.push(suite);
        });
        QUnit.moduleStart(function (data) {
            var id = guid();
            Runner.suite({
                title: data.name,
                parent: suiteId(),
                id: id
            });
            suites.push(id);
        });
        QUnit.moduleDone(function (data) {
            Runner.suiteEnd({
                failed: data.failed,
                total: data.total,
                id: suiteId()
            });
            suites.pop();
        });
        QUnit.testStart(function (data) {
            var id = guid();
            Runner.suite({
                title: data.name,
                parent: suiteId(),
                id: id
            });
            suites.push(id);
        });
        QUnit.testDone(endSuite);
        QUnit.log(function (data) {
            var testId = guid();
            var errorMessage = '';
            Runner.test({
                id: testId,
                title: data.message || 'okay',
                parent: suiteId()
            });
            if (data.result) {
                Runner.pass({ id: testId });
            } else {
                errorMessage = data.expected ? 'Expected ' + data.expected + ' but was ' + data.actual : 'Expected assertion to be truthy but it was not';
                var stack = (data.source || '').replace(/\\n/g, '\n\t');
                Runner.fail({
                    id: testId,
                    err: {
                        message: errorMessage,
                        stack: 'Error: ' + errorMessage + '\n' + stack
                    }
                });
            }
            Runner.testEnd({ id: testId });
        });
        QUnit.done(function (data) {
            data.id = runId;
            endSuite();
            Runner.end(data);
        });
        return QUnit;
    };
});
/*lodash@4.17.4#assign*/
define('lodash/assign', function (require, exports, module) {
    var assignValue = require('lodash/_assignValue'), copyObject = require('lodash/_copyObject'), createAssigner = require('lodash/_createAssigner'), isArrayLike = require('lodash/isArrayLike'), isPrototype = require('lodash/_isPrototype'), keys = require('lodash/keys');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var assign = createAssigner(function (object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
        }
        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
            }
        }
    });
    module.exports = assign;
});
/*lodash@4.17.4#noop*/
define('lodash/noop', function (require, exports, module) {
    function noop() {
    }
    module.exports = noop;
});
/*testee-client@0.4.0#adapters/jasmine-legacy*/
define('testee-client/adapters/jasmine-legacy', function (require, exports, module) {
    var _ = {
        extend: require('lodash/assign'),
        noop: require('lodash/noop')
    };
    var guid = require('testee-client/guid');
    var TesteeReporter = function (runner) {
        this.runner = runner;
        this.suites = {};
        this.specs = {};
        this.failed = 0;
        this.total = 0;
    };
    _.extend(TesteeReporter.prototype, {
        log: _.noop,
        id: function (obj, id) {
            if (obj[id]) {
                return obj[id];
            }
            return obj[id] = guid();
        },
        reportRunnerStarting: function () {
            var id = this.runId = guid();
            this.runner.start({
                id: id,
                environment: navigator.userAgent,
                runner: 'Jasmine',
                time: new Date().getTime()
            });
        },
        reportRunnerResults: function () {
            this.runner.end({
                id: this.runId,
                failed: this.failed,
                total: this.total,
                passed: this.total - this.failed
            });
        },
        reportSpecResults: function (spec) {
            if (spec.results_.failedCount) {
                var message = spec.results_.items_[0].message;
                var stack = spec.results_.items_[0].trace.stack;
                this.failed++;
                this.total++;
                this.runner.fail({
                    id: this.id(this.specs, spec.id),
                    err: {
                        message: message,
                        stack: stack
                    }
                });
            } else if (spec.results_.passedCount) {
                var duration = new Date().getTime() - spec.startTime || 0;
                this.total++;
                this.runner.pass({
                    duration: duration,
                    id: this.id(this.specs, spec.id)
                });
            }
        },
        startSuite: function (suite) {
            if (suite.parentSuite !== null) {
                if (!suite.parentSuite.started) {
                    this.startSuite(suite.parentSuite);
                }
            }
            if (suite.parentSuite !== null) {
                this.runner.suite({
                    title: suite.description,
                    parent: this.id(this.suites, suite.parentSuite.id),
                    id: this.id(this.suites, suite.id)
                });
            } else {
                this.runner.suite({
                    title: suite.description,
                    root: true,
                    id: this.id(this.suites, suite.id),
                    parent: this.runId
                });
            }
            suite.started = true;
        },
        reportSpecStarting: function (spec) {
            if (!spec.suite.started) {
                this.startSuite(spec.suite);
            }
            spec.startTime = new Date();
            if (!spec.suite.startTime) {
                spec.suite.startTime = spec.startTime;
            }
            this.runner.test({
                title: spec.description,
                parent: this.id(this.suites, spec.suite.id),
                id: this.id(this.specs, spec.id)
            });
        },
        reportSuiteResults: function (suite) {
            if (suite.started) {
                this.runner.suiteEnd({ id: this.id(this.suites, suite.id) });
            }
        }
    });
    module.exports = function (jasmine, runner) {
        jasmine.getEnv().addReporter(new TesteeReporter(runner));
    };
    module.exports.Reporter = TesteeReporter;
});
/*testee-client@0.4.0#adapters/jasmine*/
define('testee-client/adapters/jasmine', function (require, exports, module) {
    var _ = {
        extend: require('lodash/assign'),
        noop: require('lodash/noop')
    };
    var guid = require('testee-client/guid');
    var TesteeReporter = function (runner) {
        this.runner = runner;
        this.currentSuite = null;
        this.currentSpec = null;
        this.suites = {};
        this.specs = {};
        this.failed = 0;
        this.total = 0;
    };
    var fakeFocusedSuite = {
        id: 'focused',
        description: 'focused specs',
        fullName: 'focused specs'
    };
    var __suites = {}, __specs = {};
    function getSuite(suite) {
        __suites[suite.id] = _.extend(__suites[suite.id] || {}, suite);
        return __suites[suite.id];
    }
    function getSpec(spec) {
        __specs[spec.id] = _.extend(__specs[spec.id] || {}, spec);
        return __specs[spec.id];
    }
    _.extend(TesteeReporter.prototype, {
        log: _.noop,
        id: function (obj, id) {
            if (obj[id]) {
                return obj[id];
            }
            return obj[id] = guid();
        },
        jasmineStarted: function () {
            var id = this.runId = guid();
            this.runner.start({
                id: id,
                environment: navigator.userAgent,
                runner: 'Jasmine',
                time: new Date().getTime()
            });
        },
        jasmineDone: function () {
            if (this.currentSuite) {
                this.suiteDone(fakeFocusedSuite);
            }
            this.runner.end({
                id: this.runId,
                failed: this.failed,
                total: this.total,
                passed: this.total - this.failed
            });
        },
        suiteStarted: function (suite) {
            suite = getSuite(suite);
            suite._parent = this.currentSuite;
            this.currentSuite = suite;
            if (suite._parent !== null) {
                if (!suite._parent.started) {
                    this.suiteStarted(suite._parent);
                }
            }
            if (suite._parent !== null) {
                this.runner.suite({
                    title: suite.description,
                    parent: this.id(this.suites, suite._parent.id),
                    id: this.id(this.suites, suite.id)
                });
            } else {
                this.runner.suite({
                    title: suite.description,
                    root: true,
                    id: this.id(this.suites, suite.id),
                    parent: this.runId
                });
            }
            suite.started = true;
        },
        suiteDone: function (suite) {
            suite = getSuite(suite);
            this.currentSuite = suite._parent;
            if (suite.started) {
                this.runner.suiteEnd({ id: this.id(this.suites, suite.id) });
            }
        },
        specStarted: function (spec) {
            if (!this.currentSuite) {
                this.suiteStarted(fakeFocusedSuite);
            }
            spec = getSpec(spec);
            spec._suite = this.currentSuite;
            if (!spec._suite.started) {
                this.suiteStarted(spec._suite);
            }
            spec.startTime = new Date();
            if (!spec._suite.startTime) {
                spec._suite.startTime = spec.startTime;
            }
            this.currentSpec = spec;
            this.runner.test({
                title: spec.description,
                parent: this.id(this.suites, spec._suite.id),
                id: this.id(this.specs, spec.id)
            });
        },
        specDone: function (result) {
            if (result.failedExpectations.length > 0) {
                var message = result.failedExpectations[0].message;
                var stack = result.failedExpectations[0].stack;
                this.failed++;
                this.total++;
                this.runner.fail({
                    id: this.id(this.specs, this.currentSpec.id),
                    err: {
                        message: message,
                        stack: stack
                    }
                });
            } else if (result.passedExpectations.length > 0) {
                var duration = new Date().getTime() - this.currentSpec.startTime || 0;
                this.total++;
                this.runner.pass({
                    duration: duration,
                    id: this.id(this.specs, this.currentSpec.id)
                });
            }
        }
    });
    module.exports = function (jasmine, runner) {
        jasmine.getEnv().addReporter(new TesteeReporter(runner));
    };
    module.exports.Reporter = TesteeReporter;
});
/*lodash@4.17.4#_arrayEach*/
define('lodash/_arrayEach', function (require, exports, module) {
    function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    module.exports = arrayEach;
});
/*lodash@4.17.4#_createBaseFor*/
define('lodash/_createBaseFor', function (require, exports, module) {
    function createBaseFor(fromRight) {
        return function (object, iteratee, keysFunc) {
            var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
            while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) {
                    break;
                }
            }
            return object;
        };
    }
    module.exports = createBaseFor;
});
/*lodash@4.17.4#_baseFor*/
define('lodash/_baseFor', function (require, exports, module) {
    var createBaseFor = require('lodash/_createBaseFor');
    var baseFor = createBaseFor();
    module.exports = baseFor;
});
/*lodash@4.17.4#_baseForOwn*/
define('lodash/_baseForOwn', function (require, exports, module) {
    var baseFor = require('lodash/_baseFor'), keys = require('lodash/keys');
    function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
});
/*lodash@4.17.4#_createBaseEach*/
define('lodash/_createBaseEach', function (require, exports, module) {
    var isArrayLike = require('lodash/isArrayLike');
    function createBaseEach(eachFunc, fromRight) {
        return function (collection, iteratee) {
            if (collection == null) {
                return collection;
            }
            if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
            while (fromRight ? index-- : ++index < length) {
                if (iteratee(iterable[index], index, iterable) === false) {
                    break;
                }
            }
            return collection;
        };
    }
    module.exports = createBaseEach;
});
/*lodash@4.17.4#_baseEach*/
define('lodash/_baseEach', function (require, exports, module) {
    var baseForOwn = require('lodash/_baseForOwn'), createBaseEach = require('lodash/_createBaseEach');
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
});
/*lodash@4.17.4#_castFunction*/
define('lodash/_castFunction', function (require, exports, module) {
    var identity = require('lodash/identity');
    function castFunction(value) {
        return typeof value == 'function' ? value : identity;
    }
    module.exports = castFunction;
});
/*lodash@4.17.4#forEach*/
define('lodash/forEach', function (require, exports, module) {
    var arrayEach = require('lodash/_arrayEach'), baseEach = require('lodash/_baseEach'), castFunction = require('lodash/_castFunction'), isArray = require('lodash/isArray');
    function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
    }
    module.exports = forEach;
});
/*lodash@4.17.4#each*/
define('lodash/each', function (require, exports, module) {
    module.exports = require('lodash/forEach');
});
/*lodash@4.17.4#_metaMap*/
define('lodash/_metaMap', function (require, exports, module) {
    var WeakMap = require('lodash/_WeakMap');
    var metaMap = WeakMap && new WeakMap();
    module.exports = metaMap;
});
/*lodash@4.17.4#_baseSetData*/
define('lodash/_baseSetData', function (require, exports, module) {
    var identity = require('lodash/identity'), metaMap = require('lodash/_metaMap');
    var baseSetData = !metaMap ? identity : function (func, data) {
        metaMap.set(func, data);
        return func;
    };
    module.exports = baseSetData;
});
/*lodash@4.17.4#_baseCreate*/
define('lodash/_baseCreate', function (require, exports, module) {
    var isObject = require('lodash/isObject');
    var objectCreate = Object.create;
    var baseCreate = function () {
        function object() {
        }
        return function (proto) {
            if (!isObject(proto)) {
                return {};
            }
            if (objectCreate) {
                return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = undefined;
            return result;
        };
    }();
    module.exports = baseCreate;
});
/*lodash@4.17.4#_createCtor*/
define('lodash/_createCtor', function (require, exports, module) {
    var baseCreate = require('lodash/_baseCreate'), isObject = require('lodash/isObject');
    function createCtor(Ctor) {
        return function () {
            var args = arguments;
            switch (args.length) {
            case 0:
                return new Ctor();
            case 1:
                return new Ctor(args[0]);
            case 2:
                return new Ctor(args[0], args[1]);
            case 3:
                return new Ctor(args[0], args[1], args[2]);
            case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
        };
    }
    module.exports = createCtor;
});
/*lodash@4.17.4#_createBind*/
define('lodash/_createBind', function (require, exports, module) {
    var createCtor = require('lodash/_createCtor'), root = require('lodash/_root');
    var WRAP_BIND_FLAG = 1;
    function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
    }
    module.exports = createBind;
});
/*lodash@4.17.4#_composeArgs*/
define('lodash/_composeArgs', function (require, exports, module) {
    var nativeMax = Math.max;
    function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
                result[holders[argsIndex]] = args[argsIndex];
            }
        }
        while (rangeLength--) {
            result[leftIndex++] = args[argsIndex++];
        }
        return result;
    }
    module.exports = composeArgs;
});
/*lodash@4.17.4#_composeArgsRight*/
define('lodash/_composeArgsRight', function (require, exports, module) {
    var nativeMax = Math.max;
    function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
            result[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
                result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
        }
        return result;
    }
    module.exports = composeArgsRight;
});
/*lodash@4.17.4#_countHolders*/
define('lodash/_countHolders', function (require, exports, module) {
    function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
            if (array[length] === placeholder) {
                ++result;
            }
        }
        return result;
    }
    module.exports = countHolders;
});
/*lodash@4.17.4#_baseLodash*/
define('lodash/_baseLodash', function (require, exports, module) {
    function baseLodash() {
    }
    module.exports = baseLodash;
});
/*lodash@4.17.4#_LazyWrapper*/
define('lodash/_LazyWrapper', function (require, exports, module) {
    var baseCreate = require('lodash/_baseCreate'), baseLodash = require('lodash/_baseLodash');
    var MAX_ARRAY_LENGTH = 4294967295;
    function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
    }
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;
    module.exports = LazyWrapper;
});
/*lodash@4.17.4#_getData*/
define('lodash/_getData', function (require, exports, module) {
    var metaMap = require('lodash/_metaMap'), noop = require('lodash/noop');
    var getData = !metaMap ? noop : function (func) {
        return metaMap.get(func);
    };
    module.exports = getData;
});
/*lodash@4.17.4#_realNames*/
define('lodash/_realNames', function (require, exports, module) {
    var realNames = {};
    module.exports = realNames;
});
/*lodash@4.17.4#_getFuncName*/
define('lodash/_getFuncName', function (require, exports, module) {
    var realNames = require('lodash/_realNames');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function getFuncName(func) {
        var result = func.name + '', array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
                return data.name;
            }
        }
        return result;
    }
    module.exports = getFuncName;
});
/*lodash@4.17.4#_LodashWrapper*/
define('lodash/_LodashWrapper', function (require, exports, module) {
    var baseCreate = require('lodash/_baseCreate'), baseLodash = require('lodash/_baseLodash');
    function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined;
    }
    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;
    module.exports = LodashWrapper;
});
/*lodash@4.17.4#_wrapperClone*/
define('lodash/_wrapperClone', function (require, exports, module) {
    var LazyWrapper = require('lodash/_LazyWrapper'), LodashWrapper = require('lodash/_LodashWrapper'), copyArray = require('lodash/_copyArray');
    function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
    }
    module.exports = wrapperClone;
});
/*lodash@4.17.4#wrapperLodash*/
define('lodash/wrapperLodash', function (require, exports, module) {
    var LazyWrapper = require('lodash/_LazyWrapper'), LodashWrapper = require('lodash/_LodashWrapper'), baseLodash = require('lodash/_baseLodash'), isArray = require('lodash/isArray'), isObjectLike = require('lodash/isObjectLike'), wrapperClone = require('lodash/_wrapperClone');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
                return value;
            }
            if (hasOwnProperty.call(value, '__wrapped__')) {
                return wrapperClone(value);
            }
        }
        return new LodashWrapper(value);
    }
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;
    module.exports = lodash;
});
/*lodash@4.17.4#_isLaziable*/
define('lodash/_isLaziable', function (require, exports, module) {
    var LazyWrapper = require('lodash/_LazyWrapper'), getData = require('lodash/_getData'), getFuncName = require('lodash/_getFuncName'), lodash = require('lodash/wrapperLodash');
    function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
        }
        if (func === other) {
            return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
    }
    module.exports = isLaziable;
});
/*lodash@4.17.4#_setData*/
define('lodash/_setData', function (require, exports, module) {
    var baseSetData = require('lodash/_baseSetData'), shortOut = require('lodash/_shortOut');
    var setData = shortOut(baseSetData);
    module.exports = setData;
});
/*lodash@4.17.4#_getWrapDetails*/
define('lodash/_getWrapDetails', function (require, exports, module) {
    var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
    }
    module.exports = getWrapDetails;
});
/*lodash@4.17.4#_insertWrapDetails*/
define('lodash/_insertWrapDetails', function (require, exports, module) {
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
            return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
        details = details.join(length > 2 ? ', ' : ' ');
        return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }
    module.exports = insertWrapDetails;
});
/*lodash@4.17.4#_baseFindIndex*/
define('lodash/_baseFindIndex', function (require, exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }
    module.exports = baseFindIndex;
});
/*lodash@4.17.4#_baseIsNaN*/
define('lodash/_baseIsNaN', function (require, exports, module) {
    function baseIsNaN(value) {
        return value !== value;
    }
    module.exports = baseIsNaN;
});
/*lodash@4.17.4#_strictIndexOf*/
define('lodash/_strictIndexOf', function (require, exports, module) {
    function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }
    module.exports = strictIndexOf;
});
/*lodash@4.17.4#_baseIndexOf*/
define('lodash/_baseIndexOf', function (require, exports, module) {
    var baseFindIndex = require('lodash/_baseFindIndex'), baseIsNaN = require('lodash/_baseIsNaN'), strictIndexOf = require('lodash/_strictIndexOf');
    function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
});
/*lodash@4.17.4#_arrayIncludes*/
define('lodash/_arrayIncludes', function (require, exports, module) {
    var baseIndexOf = require('lodash/_baseIndexOf');
    function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
});
/*lodash@4.17.4#_updateWrapDetails*/
define('lodash/_updateWrapDetails', function (require, exports, module) {
    var arrayEach = require('lodash/_arrayEach'), arrayIncludes = require('lodash/_arrayIncludes');
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var wrapFlags = [
        [
            'ary',
            WRAP_ARY_FLAG
        ],
        [
            'bind',
            WRAP_BIND_FLAG
        ],
        [
            'bindKey',
            WRAP_BIND_KEY_FLAG
        ],
        [
            'curry',
            WRAP_CURRY_FLAG
        ],
        [
            'curryRight',
            WRAP_CURRY_RIGHT_FLAG
        ],
        [
            'flip',
            WRAP_FLIP_FLAG
        ],
        [
            'partial',
            WRAP_PARTIAL_FLAG
        ],
        [
            'partialRight',
            WRAP_PARTIAL_RIGHT_FLAG
        ],
        [
            'rearg',
            WRAP_REARG_FLAG
        ]
    ];
    function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function (pair) {
            var value = '_.' + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
            }
        });
        return details.sort();
    }
    module.exports = updateWrapDetails;
});
/*lodash@4.17.4#_setWrapToString*/
define('lodash/_setWrapToString', function (require, exports, module) {
    var getWrapDetails = require('lodash/_getWrapDetails'), insertWrapDetails = require('lodash/_insertWrapDetails'), setToString = require('lodash/_setToString'), updateWrapDetails = require('lodash/_updateWrapDetails');
    function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + '';
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }
    module.exports = setWrapToString;
});
/*lodash@4.17.4#_createRecurry*/
define('lodash/_createRecurry', function (require, exports, module) {
    var isLaziable = require('lodash/_isLaziable'), setData = require('lodash/_setData'), setWrapToString = require('lodash/_setWrapToString');
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary,
            arity
        ];
        var result = wrapFunc.apply(undefined, newData);
        if (isLaziable(func)) {
            setData(result, newData);
        }
        result.placeholder = placeholder;
        return setWrapToString(result, func, bitmask);
    }
    module.exports = createRecurry;
});
/*lodash@4.17.4#_getHolder*/
define('lodash/_getHolder', function (require, exports, module) {
    function getHolder(func) {
        var object = func;
        return object.placeholder;
    }
    module.exports = getHolder;
});
/*lodash@4.17.4#_reorder*/
define('lodash/_reorder', function (require, exports, module) {
    var copyArray = require('lodash/_copyArray'), isIndex = require('lodash/_isIndex');
    var nativeMin = Math.min;
    function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
        }
        return array;
    }
    module.exports = reorder;
});
/*lodash@4.17.4#_replaceHolders*/
define('lodash/_replaceHolders', function (require, exports, module) {
    var PLACEHOLDER = '__lodash_placeholder__';
    function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index;
            }
        }
        return result;
    }
    module.exports = replaceHolders;
});
/*lodash@4.17.4#_createHybrid*/
define('lodash/_createHybrid', function (require, exports, module) {
    var composeArgs = require('lodash/_composeArgs'), composeArgsRight = require('lodash/_composeArgsRight'), countHolders = require('lodash/_countHolders'), createCtor = require('lodash/_createCtor'), createRecurry = require('lodash/_createRecurry'), getHolder = require('lodash/_getHolder'), reorder = require('lodash/_reorder'), replaceHolders = require('lodash/_replaceHolders'), root = require('lodash/_root');
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_ARY_FLAG = 128, WRAP_FLIP_FLAG = 512;
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
        function wrapper() {
            var length = arguments.length, args = Array(length), index = length;
            while (index--) {
                args[index] = arguments[index];
            }
            if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
                args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
                args.reverse();
            }
            if (isAry && ary < length) {
                args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
        }
        return wrapper;
    }
    module.exports = createHybrid;
});
/*lodash@4.17.4#_createCurry*/
define('lodash/_createCurry', function (require, exports, module) {
    var apply = require('lodash/_apply'), createCtor = require('lodash/_createCtor'), createHybrid = require('lodash/_createHybrid'), createRecurry = require('lodash/_createRecurry'), getHolder = require('lodash/_getHolder'), replaceHolders = require('lodash/_replaceHolders'), root = require('lodash/_root');
    function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
            var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
                args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
        }
        return wrapper;
    }
    module.exports = createCurry;
});
/*lodash@4.17.4#_createPartial*/
define('lodash/_createPartial', function (require, exports, module) {
    var apply = require('lodash/_apply'), createCtor = require('lodash/_createCtor'), root = require('lodash/_root');
    var WRAP_BIND_FLAG = 1;
    function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
    }
    module.exports = createPartial;
});
/*lodash@4.17.4#_mergeData*/
define('lodash/_mergeData', function (require, exports, module) {
    var composeArgs = require('lodash/_composeArgs'), composeArgsRight = require('lodash/_composeArgsRight'), replaceHolders = require('lodash/_replaceHolders');
    var PLACEHOLDER = '__lodash_placeholder__';
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
    var nativeMin = Math.min;
    function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
            return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
            data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
            data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
    }
    module.exports = mergeData;
});
/*lodash@4.17.4#toFinite*/
define('lodash/toFinite', function (require, exports, module) {
    var toNumber = require('lodash/toNumber');
    var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
    function toFinite(value) {
        if (!value) {
            return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
    }
    module.exports = toFinite;
});
/*lodash@4.17.4#toInteger*/
define('lodash/toInteger', function (require, exports, module) {
    var toFinite = require('lodash/toFinite');
    function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
});
/*lodash@4.17.4#_createWrap*/
define('lodash/_createWrap', function (require, exports, module) {
    var baseSetData = require('lodash/_baseSetData'), createBind = require('lodash/_createBind'), createCurry = require('lodash/_createCurry'), createHybrid = require('lodash/_createHybrid'), createPartial = require('lodash/_createPartial'), getData = require('lodash/_getData'), mergeData = require('lodash/_mergeData'), setData = require('lodash/_setData'), setWrapToString = require('lodash/_setWrapToString'), toInteger = require('lodash/toInteger');
    var FUNC_ERROR_TEXT = 'Expected a function';
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
    var nativeMax = Math.max;
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
        }
        ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
        arity = arity === undefined ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined;
        }
        var data = isBindKey ? undefined : getData(func);
        var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary,
            arity
        ];
        if (data) {
            mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result = createPartial(func, bitmask, thisArg, partials);
        } else {
            result = createHybrid.apply(undefined, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result, newData), func, bitmask);
    }
    module.exports = createWrap;
});
/*lodash@4.17.4#bind*/
define('lodash/bind', function (require, exports, module) {
    var baseRest = require('lodash/_baseRest'), createWrap = require('lodash/_createWrap'), getHolder = require('lodash/_getHolder'), replaceHolders = require('lodash/_replaceHolders');
    var WRAP_BIND_FLAG = 1, WRAP_PARTIAL_FLAG = 32;
    var bind = baseRest(function (func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
    });
    bind.placeholder = {};
    module.exports = bind;
});
/*lodash@4.17.4#indexOf*/
define('lodash/indexOf', function (require, exports, module) {
    var baseIndexOf = require('lodash/_baseIndexOf'), toInteger = require('lodash/toInteger');
    var nativeMax = Math.max;
    function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
            return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
            index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
    }
    module.exports = indexOf;
});
/*lodash@4.17.4#_listCacheClear*/
define('lodash/_listCacheClear', function (require, exports, module) {
    function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
    }
    module.exports = listCacheClear;
});
/*lodash@4.17.4#_assocIndexOf*/
define('lodash/_assocIndexOf', function (require, exports, module) {
    var eq = require('lodash/eq');
    function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
            if (eq(array[length][0], key)) {
                return length;
            }
        }
        return -1;
    }
    module.exports = assocIndexOf;
});
/*lodash@4.17.4#_listCacheDelete*/
define('lodash/_listCacheDelete', function (require, exports, module) {
    var assocIndexOf = require('lodash/_assocIndexOf');
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
            return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
            data.pop();
        } else {
            splice.call(data, index, 1);
        }
        --this.size;
        return true;
    }
    module.exports = listCacheDelete;
});
/*lodash@4.17.4#_listCacheGet*/
define('lodash/_listCacheGet', function (require, exports, module) {
    var assocIndexOf = require('lodash/_assocIndexOf');
    function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
    }
    module.exports = listCacheGet;
});
/*lodash@4.17.4#_listCacheHas*/
define('lodash/_listCacheHas', function (require, exports, module) {
    var assocIndexOf = require('lodash/_assocIndexOf');
    function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
});
/*lodash@4.17.4#_listCacheSet*/
define('lodash/_listCacheSet', function (require, exports, module) {
    var assocIndexOf = require('lodash/_assocIndexOf');
    function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
            ++this.size;
            data.push([
                key,
                value
            ]);
        } else {
            data[index][1] = value;
        }
        return this;
    }
    module.exports = listCacheSet;
});
/*lodash@4.17.4#_ListCache*/
define('lodash/_ListCache', function (require, exports, module) {
    var listCacheClear = require('lodash/_listCacheClear'), listCacheDelete = require('lodash/_listCacheDelete'), listCacheGet = require('lodash/_listCacheGet'), listCacheHas = require('lodash/_listCacheHas'), listCacheSet = require('lodash/_listCacheSet');
    function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
});
/*lodash@4.17.4#_stackClear*/
define('lodash/_stackClear', function (require, exports, module) {
    var ListCache = require('lodash/_ListCache');
    function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
    }
    module.exports = stackClear;
});
/*lodash@4.17.4#_stackDelete*/
define('lodash/_stackDelete', function (require, exports, module) {
    function stackDelete(key) {
        var data = this.__data__, result = data['delete'](key);
        this.size = data.size;
        return result;
    }
    module.exports = stackDelete;
});
/*lodash@4.17.4#_stackGet*/
define('lodash/_stackGet', function (require, exports, module) {
    function stackGet(key) {
        return this.__data__.get(key);
    }
    module.exports = stackGet;
});
/*lodash@4.17.4#_stackHas*/
define('lodash/_stackHas', function (require, exports, module) {
    function stackHas(key) {
        return this.__data__.has(key);
    }
    module.exports = stackHas;
});
/*lodash@4.17.4#_nativeCreate*/
define('lodash/_nativeCreate', function (require, exports, module) {
    var getNative = require('lodash/_getNative');
    var nativeCreate = getNative(Object, 'create');
    module.exports = nativeCreate;
});
/*lodash@4.17.4#_hashClear*/
define('lodash/_hashClear', function (require, exports, module) {
    var nativeCreate = require('lodash/_nativeCreate');
    function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
    }
    module.exports = hashClear;
});
/*lodash@4.17.4#_hashDelete*/
define('lodash/_hashDelete', function (require, exports, module) {
    function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    }
    module.exports = hashDelete;
});
/*lodash@4.17.4#_hashGet*/
define('lodash/_hashGet', function (require, exports, module) {
    var nativeCreate = require('lodash/_nativeCreate');
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }
    module.exports = hashGet;
});
/*lodash@4.17.4#_hashHas*/
define('lodash/_hashHas', function (require, exports, module) {
    var nativeCreate = require('lodash/_nativeCreate');
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
});
/*lodash@4.17.4#_hashSet*/
define('lodash/_hashSet', function (require, exports, module) {
    var nativeCreate = require('lodash/_nativeCreate');
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
        return this;
    }
    module.exports = hashSet;
});
/*lodash@4.17.4#_Hash*/
define('lodash/_Hash', function (require, exports, module) {
    var hashClear = require('lodash/_hashClear'), hashDelete = require('lodash/_hashDelete'), hashGet = require('lodash/_hashGet'), hashHas = require('lodash/_hashHas'), hashSet = require('lodash/_hashSet');
    function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
});
/*lodash@4.17.4#_mapCacheClear*/
define('lodash/_mapCacheClear', function (require, exports, module) {
    var Hash = require('lodash/_Hash'), ListCache = require('lodash/_ListCache'), Map = require('lodash/_Map');
    function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
        };
    }
    module.exports = mapCacheClear;
});
/*lodash@4.17.4#_isKeyable*/
define('lodash/_isKeyable', function (require, exports, module) {
    function isKeyable(value) {
        var type = typeof value;
        return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }
    module.exports = isKeyable;
});
/*lodash@4.17.4#_getMapData*/
define('lodash/_getMapData', function (require, exports, module) {
    var isKeyable = require('lodash/_isKeyable');
    function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }
    module.exports = getMapData;
});
/*lodash@4.17.4#_mapCacheDelete*/
define('lodash/_mapCacheDelete', function (require, exports, module) {
    var getMapData = require('lodash/_getMapData');
    function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
    }
    module.exports = mapCacheDelete;
});
/*lodash@4.17.4#_mapCacheGet*/
define('lodash/_mapCacheGet', function (require, exports, module) {
    var getMapData = require('lodash/_getMapData');
    function mapCacheGet(key) {
        return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
});
/*lodash@4.17.4#_mapCacheHas*/
define('lodash/_mapCacheHas', function (require, exports, module) {
    var getMapData = require('lodash/_getMapData');
    function mapCacheHas(key) {
        return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
});
/*lodash@4.17.4#_mapCacheSet*/
define('lodash/_mapCacheSet', function (require, exports, module) {
    var getMapData = require('lodash/_getMapData');
    function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
    }
    module.exports = mapCacheSet;
});
/*lodash@4.17.4#_MapCache*/
define('lodash/_MapCache', function (require, exports, module) {
    var mapCacheClear = require('lodash/_mapCacheClear'), mapCacheDelete = require('lodash/_mapCacheDelete'), mapCacheGet = require('lodash/_mapCacheGet'), mapCacheHas = require('lodash/_mapCacheHas'), mapCacheSet = require('lodash/_mapCacheSet');
    function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
});
/*lodash@4.17.4#_stackSet*/
define('lodash/_stackSet', function (require, exports, module) {
    var ListCache = require('lodash/_ListCache'), Map = require('lodash/_Map'), MapCache = require('lodash/_MapCache');
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([
                    key,
                    value
                ]);
                this.size = ++data.size;
                return this;
            }
            data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
    }
    module.exports = stackSet;
});
/*lodash@4.17.4#_Stack*/
define('lodash/_Stack', function (require, exports, module) {
    var ListCache = require('lodash/_ListCache'), stackClear = require('lodash/_stackClear'), stackDelete = require('lodash/_stackDelete'), stackGet = require('lodash/_stackGet'), stackHas = require('lodash/_stackHas'), stackSet = require('lodash/_stackSet');
    function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
});
/*lodash@4.17.4#_baseAssign*/
define('lodash/_baseAssign', function (require, exports, module) {
    var copyObject = require('lodash/_copyObject'), keys = require('lodash/keys');
    function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
});
/*lodash@4.17.4#_baseAssignIn*/
define('lodash/_baseAssignIn', function (require, exports, module) {
    var copyObject = require('lodash/_copyObject'), keysIn = require('lodash/keysIn');
    function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
});
/*lodash@4.17.4#_cloneBuffer*/
define('lodash/_cloneBuffer', function (require, exports, module) {
    var root = require('lodash/_root');
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
    function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
            return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
    }
    module.exports = cloneBuffer;
});
/*lodash@4.17.4#_arrayFilter*/
define('lodash/_arrayFilter', function (require, exports, module) {
    function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
                result[resIndex++] = value;
            }
        }
        return result;
    }
    module.exports = arrayFilter;
});
/*lodash@4.17.4#stubArray*/
define('lodash/stubArray', function (require, exports, module) {
    function stubArray() {
        return [];
    }
    module.exports = stubArray;
});
/*lodash@4.17.4#_getSymbols*/
define('lodash/_getSymbols', function (require, exports, module) {
    var arrayFilter = require('lodash/_arrayFilter'), stubArray = require('lodash/stubArray');
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
        if (object == null) {
            return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function (symbol) {
            return propertyIsEnumerable.call(object, symbol);
        });
    };
    module.exports = getSymbols;
});
/*lodash@4.17.4#_copySymbols*/
define('lodash/_copySymbols', function (require, exports, module) {
    var copyObject = require('lodash/_copyObject'), getSymbols = require('lodash/_getSymbols');
    function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
});
/*lodash@4.17.4#_arrayPush*/
define('lodash/_arrayPush', function (require, exports, module) {
    function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
            array[offset + index] = values[index];
        }
        return array;
    }
    module.exports = arrayPush;
});
/*lodash@4.17.4#_getPrototype*/
define('lodash/_getPrototype', function (require, exports, module) {
    var overArg = require('lodash/_overArg');
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
});
/*lodash@4.17.4#_getSymbolsIn*/
define('lodash/_getSymbolsIn', function (require, exports, module) {
    var arrayPush = require('lodash/_arrayPush'), getPrototype = require('lodash/_getPrototype'), getSymbols = require('lodash/_getSymbols'), stubArray = require('lodash/stubArray');
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
        var result = [];
        while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
        }
        return result;
    };
    module.exports = getSymbolsIn;
});
/*lodash@4.17.4#_copySymbolsIn*/
define('lodash/_copySymbolsIn', function (require, exports, module) {
    var copyObject = require('lodash/_copyObject'), getSymbolsIn = require('lodash/_getSymbolsIn');
    function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
});
/*lodash@4.17.4#_baseGetAllKeys*/
define('lodash/_baseGetAllKeys', function (require, exports, module) {
    var arrayPush = require('lodash/_arrayPush'), isArray = require('lodash/isArray');
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
});
/*lodash@4.17.4#_getAllKeys*/
define('lodash/_getAllKeys', function (require, exports, module) {
    var baseGetAllKeys = require('lodash/_baseGetAllKeys'), getSymbols = require('lodash/_getSymbols'), keys = require('lodash/keys');
    function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
});
/*lodash@4.17.4#_getAllKeysIn*/
define('lodash/_getAllKeysIn', function (require, exports, module) {
    var baseGetAllKeys = require('lodash/_baseGetAllKeys'), getSymbolsIn = require('lodash/_getSymbolsIn'), keysIn = require('lodash/keysIn');
    function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
});
/*lodash@4.17.4#_initCloneArray*/
define('lodash/_initCloneArray', function (require, exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
        var length = array.length, result = array.constructor(length);
        if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
        }
        return result;
    }
    module.exports = initCloneArray;
});
/*lodash@4.17.4#_Uint8Array*/
define('lodash/_Uint8Array', function (require, exports, module) {
    var root = require('lodash/_root');
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
});
/*lodash@4.17.4#_cloneArrayBuffer*/
define('lodash/_cloneArrayBuffer', function (require, exports, module) {
    var Uint8Array = require('lodash/_Uint8Array');
    function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result).set(new Uint8Array(arrayBuffer));
        return result;
    }
    module.exports = cloneArrayBuffer;
});
/*lodash@4.17.4#_cloneDataView*/
define('lodash/_cloneDataView', function (require, exports, module) {
    var cloneArrayBuffer = require('lodash/_cloneArrayBuffer');
    function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
});
/*lodash@4.17.4#_addMapEntry*/
define('lodash/_addMapEntry', function (require, exports, module) {
    function addMapEntry(map, pair) {
        map.set(pair[0], pair[1]);
        return map;
    }
    module.exports = addMapEntry;
});
/*lodash@4.17.4#_arrayReduce*/
define('lodash/_arrayReduce', function (require, exports, module) {
    function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
            accumulator = array[++index];
        }
        while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
    }
    module.exports = arrayReduce;
});
/*lodash@4.17.4#_cloneMap*/
define('lodash/_cloneMap', function (require, exports, module) {
    var addMapEntry = require('lodash/_addMapEntry'), arrayReduce = require('lodash/_arrayReduce'), mapToArray = require('lodash/_mapToArray');
    var CLONE_DEEP_FLAG = 1;
    function cloneMap(map, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
        return arrayReduce(array, addMapEntry, new map.constructor());
    }
    module.exports = cloneMap;
});
/*lodash@4.17.4#_cloneRegExp*/
define('lodash/_cloneRegExp', function (require, exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
    }
    module.exports = cloneRegExp;
});
/*lodash@4.17.4#_addSetEntry*/
define('lodash/_addSetEntry', function (require, exports, module) {
    function addSetEntry(set, value) {
        set.add(value);
        return set;
    }
    module.exports = addSetEntry;
});
/*lodash@4.17.4#_cloneSet*/
define('lodash/_cloneSet', function (require, exports, module) {
    var addSetEntry = require('lodash/_addSetEntry'), arrayReduce = require('lodash/_arrayReduce'), setToArray = require('lodash/_setToArray');
    var CLONE_DEEP_FLAG = 1;
    function cloneSet(set, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
        return arrayReduce(array, addSetEntry, new set.constructor());
    }
    module.exports = cloneSet;
});
/*lodash@4.17.4#_cloneSymbol*/
define('lodash/_cloneSymbol', function (require, exports, module) {
    var Symbol = require('lodash/_Symbol');
    var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
    function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
});
/*lodash@4.17.4#_cloneTypedArray*/
define('lodash/_cloneTypedArray', function (require, exports, module) {
    var cloneArrayBuffer = require('lodash/_cloneArrayBuffer');
    function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
});
/*lodash@4.17.4#_initCloneByTag*/
define('lodash/_initCloneByTag', function (require, exports, module) {
    var cloneArrayBuffer = require('lodash/_cloneArrayBuffer'), cloneDataView = require('lodash/_cloneDataView'), cloneMap = require('lodash/_cloneMap'), cloneRegExp = require('lodash/_cloneRegExp'), cloneSet = require('lodash/_cloneSet'), cloneSymbol = require('lodash/_cloneSymbol'), cloneTypedArray = require('lodash/_cloneTypedArray');
    var boolTag = '[object Boolean]', dateTag = '[object Date]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
    var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
            return cloneSymbol(object);
        }
    }
    module.exports = initCloneByTag;
});
/*lodash@4.17.4#_initCloneObject*/
define('lodash/_initCloneObject', function (require, exports, module) {
    var baseCreate = require('lodash/_baseCreate'), getPrototype = require('lodash/_getPrototype'), isPrototype = require('lodash/_isPrototype');
    function initCloneObject(object) {
        return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
});
/*lodash@4.17.4#_baseClone*/
define('lodash/_baseClone', function (require, exports, module) {
    var Stack = require('lodash/_Stack'), arrayEach = require('lodash/_arrayEach'), assignValue = require('lodash/_assignValue'), baseAssign = require('lodash/_baseAssign'), baseAssignIn = require('lodash/_baseAssignIn'), cloneBuffer = require('lodash/_cloneBuffer'), copyArray = require('lodash/_copyArray'), copySymbols = require('lodash/_copySymbols'), copySymbolsIn = require('lodash/_copySymbolsIn'), getAllKeys = require('lodash/_getAllKeys'), getAllKeysIn = require('lodash/_getAllKeysIn'), getTag = require('lodash/_getTag'), initCloneArray = require('lodash/_initCloneArray'), initCloneByTag = require('lodash/_initCloneByTag'), initCloneObject = require('lodash/_initCloneObject'), isArray = require('lodash/isArray'), isBuffer = require('lodash/isBuffer'), isObject = require('lodash/isObject'), keys = require('lodash/keys');
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== undefined) {
            return result;
        }
        if (!isObject(value)) {
            return value;
        }
        var isArr = isArray(value);
        if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
                return copyArray(value, result);
            }
        } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                    return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
                }
            } else {
                if (!cloneableTags[tag]) {
                    return object ? value : {};
                }
                result = initCloneByTag(value, tag, baseClone, isDeep);
            }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
            return stacked;
        }
        stack.set(value, result);
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined : keysFunc(value);
        arrayEach(props || value, function (subValue, key) {
            if (props) {
                key = subValue;
                subValue = value[key];
            }
            assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
        return result;
    }
    module.exports = baseClone;
});
/*lodash@4.17.4#clone*/
define('lodash/clone', function (require, exports, module) {
    var baseClone = require('lodash/_baseClone');
    var CLONE_SYMBOLS_FLAG = 4;
    function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    module.exports = clone;
});
/*testee-client@0.4.0#adapters/mocha*/
define('testee-client/adapters/mocha', function (require, exports, module) {
    var _ = {
        extend: require('lodash/assign'),
        noop: require('lodash/noop'),
        each: require('lodash/each'),
        bind: require('lodash/bind'),
        indexOf: require('lodash/indexOf'),
        clone: require('lodash/clone')
    };
    var guid = require('testee-client/guid');
    function TesteeReporter(runner) {
        var self = this;
        var methodMappings = {
            'test end': 'testEnd',
            'suite end': 'suiteEnd'
        };
        var pipe = function (type, converter) {
            runner.on(type, function () {
                var data = converter.apply(converter, arguments);
                var method = methodMappings[type] || type;
                self.api[method](data);
            });
        };
        this.originalReporter = new this.OldReporter(runner);
        this.ids = [];
        this.uuids = {};
        this.last = {};
        this.total = 0;
        this.pending = 0;
        this.failed = 0;
        this.runId = guid();
        pipe('start', function () {
            return {
                environment: navigator.userAgent,
                runner: 'Mocha',
                time: new Date().getTime(),
                id: self.runId
            };
        });
        pipe('fail', function (data, err) {
            var diff = self.diff(data);
            diff.err = {
                message: err.message,
                stack: err.stack || ''
            };
            return diff;
        });
        pipe('end', function (data) {
            var diff = self.diff(data);
            diff.id = self.runId;
            diff.total = self.total;
            diff.failed = self.failed;
            diff.pending = self.pending;
            diff.passed = self.total - self.failed - self.pending;
            return diff;
        });
        pipe('suite', function (data) {
            var diff = self.diff(data);
            if (data.root) {
                diff.parent = self.runId;
            }
            return diff;
        });
        _.each([
            'suite end',
            'pending',
            'test',
            'test end',
            'pass'
        ], function (name) {
            pipe(name, _.bind(self.diff, self));
        });
        runner.on('pending', function () {
            self.pending++;
            self.total++;
        });
        runner.on('fail', function () {
            self.failed++;
            self.total++;
        });
        runner.on('pass', function () {
            self.total++;
        });
    }
    TesteeReporter.prototype.objectify = function (data) {
        var result = {};
        var self = this;
        _.each(data, function (value, key) {
            var isPrivate = key.indexOf('_') === 0 || key.indexOf('$') === 0;
            if (typeof value === 'object' && !isPrivate) {
                var idx = _.indexOf(self.ids, value);
                if (!!~idx) {
                    result[key] = self.uuids[idx];
                }
            } else if (typeof value !== 'function' && !isPrivate && value !== undefined) {
                result[key] = value;
            }
        });
        return result;
    };
    TesteeReporter.prototype.diff = function (obj) {
        var self = this;
        var current = self.objectify(obj);
        var result = {};
        var idx = _.indexOf(self.ids, obj);
        if (!~idx) {
            idx = self.ids.push(obj) - 1;
            self.uuids[idx] = guid();
            result = _.clone(current || {});
        } else {
            _.each(current, function (value, key) {
                if (self.last[idx][key] !== value) {
                    result[key] = value;
                }
            });
        }
        self.last[idx] = current;
        result.id = self.uuids[idx];
        return result;
    };
    module.exports = function (mocha, api) {
        TesteeReporter.prototype.api = api;
        TesteeReporter.prototype.OldReporter = mocha._reporter;
        mocha.reporter(TesteeReporter);
    };
    module.exports.Reporter = TesteeReporter;
});
/*testee-client@0.4.0#index*/
define('testee-client/index', function (require, exports, module) {
    require('core-js/client/core');
    var _ = {
        defaults: require('lodash/defaults'),
        delay: require('lodash/delay')
    };
    var feathers = require('feathers/client');
    var rest = require('feathers-rest/client');
    var superagent = require('superagent/lib/client');
    var io = require('socket.io-client/dist/socket.io');
    var socketio = require('feathers-socketio/client');
    var ready = require('testee-client/docready');
    var Runner = require('testee-client/runner');
    var setupQunit = require('testee-client/adapters/qunit');
    var setupJasmine1 = require('testee-client/adapters/jasmine-legacy');
    var setupJasmine = require('testee-client/adapters/jasmine');
    var setupMocha = require('testee-client/adapters/mocha');
    ready(function () {
        var options = window.Testee = window.Testee || {};
        options.baseURL = options.baseURL || window.location.protocol + '//' + window.location.host;
        if (!options.app) {
            if (options.provider && options.provider.type === 'rest') {
                var restService = rest(options.baseURL).superagent(superagent);
                options.app = feathers().configure(restService);
            } else {
                options.socket = options.socket || io(options.baseURL);
                options.app = feathers().configure(socketio(options.socket));
            }
        }
        _.defaults(options, {
            runs: options.app.service('api/runs'),
            suites: options.app.service('api/suites'),
            tests: options.app.service('api/tests'),
            coverages: options.app.service('api/coverages'),
            logs: options.app.service('api/logs'),
            runner: function () {
                if (!this._runner) {
                    this._runner = Runner(options);
                }
                return this._runner;
            },
            canInitialize: function () {
                return window.QUnit || window.jasmine && window.jasmine.version_ && window.jasmine.version_.major === 1 || window.jasmine && window.jasmine.version && window.jasmine.version.split('.')[0] === '2' || window.mocha && window.Mocha;
            },
            init: function () {
                var oldLog = window.console && window.console.log;
                var oldError = window.console && window.console.error;
                var self = this;
                if (window.QUnit) {
                    this.initQUnit(window.QUnit);
                }
                if (window.jasmine && window.jasmine.version_ && window.jasmine.version_.major === 1) {
                    this.initJasmine1(window.jasmine);
                }
                if (window.jasmine && window.jasmine.version && window.jasmine.version.split('.')[0] === '2') {
                    this.initJasmine(window.jasmine);
                }
                if (window.mocha && window.Mocha) {
                    this.initMocha(window.mocha);
                }
                if (typeof oldLog === 'function' && typeof oldError === 'function') {
                    window.console.log = function () {
                        self.runner().log('log', arguments);
                        return oldLog.apply(this, arguments);
                    };
                    window.console.error = function () {
                        self.runner().log('error', arguments);
                        return oldError.apply(this, arguments);
                    };
                }
            },
            initQUnit: function (QUnit) {
                setupQunit(QUnit, this.runner(), window);
            },
            initJasmine1: function (jasmine) {
                setupJasmine1(jasmine, this.runner(), window);
            },
            initJasmine: function (jasmine) {
                setupJasmine(jasmine, this.runner(), window);
            },
            initMocha: function (mocha) {
                setupMocha(mocha || window.mocha, this.runner(), window);
            },
            connect: new Promise(function (resolve) {
                var done = function () {
                    _.delay(function () {
                        resolve(options.socket);
                    }, 250);
                };
                if (options.socket && !options.socket.connected) {
                    options.socket.on('connect', done);
                } else {
                    done();
                }
            })
        });
        if (options.canInitialize()) {
            options.init();
        }
    });
});
/*[global-shim-end]*/
(function(){ // jshint ignore:line
	window._define = window.define;
	window.define = window.define.orig;
}
)();