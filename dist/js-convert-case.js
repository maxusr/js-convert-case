var jsConvert = (function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var jsCamelcase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toCamelCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/[^A-Za-z0-9]+/g, '$')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "$" + b; })
	        .toLowerCase()
	        .replace(/(\$)(\w)/g, function (m, a, b) { return b.toUpperCase(); });
	}
	exports.default = toCamelCase;
	});

	unwrapExports(jsCamelcase);

	var jsSnakecase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toSnakeCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + '_' + b.toLowerCase(); })
	        .replace(/[^A-Za-z0-9]+|_+/g, '_')
	        .toLowerCase();
	}
	exports.default = toSnakeCase;
	});

	unwrapExports(jsSnakecase);

	var jsPascalcase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toPascalCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
	        .replace(/[^A-Za-z0-9]+/g, '$')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "$" + b; })
	        .toLowerCase()
	        .replace(/(\$)(\w?)/g, function (m, a, b) { return b.toUpperCase(); });
	}
	exports.default = toPascalCase;
	});

	unwrapExports(jsPascalcase);

	var jsDotcase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toDotCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
	        .replace(/[^A-Za-z0-9]+|_+/g, '.')
	        .toLowerCase();
	}
	exports.default = toDotCase;
	});

	unwrapExports(jsDotcase);

	var jsPathcase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toPathCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
	        .replace(/[^A-Za-z0-9]+|_+/g, '/')
	        .toLowerCase();
	}
	exports.default = toPathCase;
	});

	unwrapExports(jsPathcase);

	var jsTextcase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toTextCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + '_' + b.toLowerCase(); })
	        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
	        .toLowerCase();
	}
	exports.default = toTextCase;
	});

	unwrapExports(jsTextcase);

	var jsSentencecase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toSentenceCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    var textcase = String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
	        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
	        .toLowerCase();
	    return textcase.charAt(0).toUpperCase() + textcase.slice(1);
	}
	exports.default = toSentenceCase;
	});

	unwrapExports(jsSentencecase);

	var jsHeadercase = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function toHeaderCase(str) {
	    if (str === void 0) { str = ''; }
	    if (!str)
	        return '';
	    return String(str)
	        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
	        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
	        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
	        .toLowerCase()
	        .replace(/( ?)(\w+)( ?)/g, function (m, a, b, c) { return a + b.charAt(0).toUpperCase() + b.slice(1) + c; });
	}
	exports.default = toHeaderCase;
	});

	unwrapExports(jsHeadercase);

	var utils = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isValidObject = exports.DefaultOption = void 0;
	exports.DefaultOption = {
	    recursive: false,
	};
	exports.isValidObject = function (obj) {
	    return obj != null && typeof obj === 'object' && !Array.isArray(obj);
	};
	});

	unwrapExports(utils);
	var utils_1 = utils.isValidObject;
	var utils_2 = utils.DefaultOption;

	var lowercaseKeysObject = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * Convert string keys in an object to lowercase format.
	 * If `obj` isn't a json object, `null` is returned.
	 */
	function lowerKeys(obj, opt) {
	    if (opt === void 0) { opt = utils.DefaultOption; }
	    if (!utils.isValidObject(obj))
	        return null;
	    var res = {};
	    Object.keys(obj).forEach(function (key) {
	        var value = obj[key];
	        var nkey = key.toLowerCase();
	        if (opt.recursive) {
	            if (utils.isValidObject(value)) {
	                value = lowerKeys(value, opt);
	            }
	        }
	        res[nkey] = value;
	    });
	    return res;
	}
	exports.default = lowerKeys;
	});

	unwrapExports(lowercaseKeysObject);

	var uppercaseKeysObject = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * Convert string keys in an object to UPPERCASE format.
	 * If `obj` isn't a json object, `null` is returned.
	 */
	function upperKeys(obj, opt) {
	    if (opt === void 0) { opt = utils.DefaultOption; }
	    if (!utils.isValidObject(obj))
	        return null;
	    var res = {};
	    Object.keys(obj).forEach(function (key) {
	        var value = obj[key];
	        var nkey = key.toUpperCase();
	        if (opt.recursive) {
	            if (utils.isValidObject(value)) {
	                value = upperKeys(value, opt);
	            }
	        }
	        res[nkey] = value;
	    });
	    return res;
	}
	exports.default = upperKeys;
	});

	unwrapExports(uppercaseKeysObject);

	var camelcaseKeysObject = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * Convert string keys in an object to camelCase format.
	 * If `obj` isn't a json object, `null` is returned.
	 */
	function camelKeys(obj, opt) {
	    if (opt === void 0) { opt = utils.DefaultOption; }
	    if (!utils.isValidObject(obj))
	        return null;
	    var res = {};
	    Object.keys(obj).forEach(function (key) {
	        var value = obj[key];
	        var nkey = jsCamelcase.default(key);
	        if (opt.recursive) {
	            if (utils.isValidObject(value)) {
	                value = camelKeys(value, opt);
	            }
	        }
	        res[nkey] = value;
	    });
	    return res;
	}
	exports.default = camelKeys;
	});

	unwrapExports(camelcaseKeysObject);

	var snakecaseKeysObject = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * Convert string keys in an object to snake_case format.
	 * If `obj` isn't a json object, `null` is returned.
	 */
	function snakeKeys(obj, opt) {
	    if (opt === void 0) { opt = utils.DefaultOption; }
	    if (!utils.isValidObject(obj))
	        return null;
	    var res = {};
	    Object.keys(obj).forEach(function (key) {
	        var value = obj[key];
	        var nkey = jsSnakecase.default(key);
	        if (opt.recursive) {
	            if (utils.isValidObject(value)) {
	                value = snakeKeys(value, opt);
	            }
	        }
	        res[nkey] = value;
	    });
	    return res;
	}
	exports.default = snakeKeys;
	});

	unwrapExports(snakecaseKeysObject);

	var pascalcaseKeysObject = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * Convert string keys in an object to PascalCase format.
	 * If `obj` isn't a json object, `null` is returned.
	 */
	function pascalKeys(obj, opt) {
	    if (opt === void 0) { opt = utils.DefaultOption; }
	    if (!utils.isValidObject(obj))
	        return null;
	    var res = {};
	    Object.keys(obj).forEach(function (key) {
	        var value = obj[key];
	        var nkey = jsPascalcase.default(key);
	        if (opt.recursive) {
	            if (utils.isValidObject(value)) {
	                value = pascalKeys(value, opt);
	            }
	        }
	        res[nkey] = value;
	    });
	    return res;
	}
	exports.default = pascalKeys;
	});

	unwrapExports(pascalcaseKeysObject);

	var lib = createCommonjsModule(function (module, exports) {
	/**
	 * Author: <Ha Huynh> https://github.com/huynhsamha
	 * Github: https://github.com/huynhsamha/js-convert-case
	 * NPM Package: https://www.npmjs.com/package/js-convert-case
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pascalKeys = exports.snakeKeys = exports.camelKeys = exports.upperKeys = exports.lowerKeys = exports.toLowerCase = exports.toUpperCase = exports.toHeaderCase = exports.toSentenceCase = exports.toTextCase = exports.toPathCase = exports.toDotCase = exports.toPascalCase = exports.toSnakeCase = exports.toCamelCase = void 0;

	exports.toCamelCase = jsCamelcase.default;

	exports.toSnakeCase = jsSnakecase.default;

	exports.toPascalCase = jsPascalcase.default;

	exports.toDotCase = jsDotcase.default;

	exports.toPathCase = jsPathcase.default;

	exports.toTextCase = jsTextcase.default;

	exports.toSentenceCase = jsSentencecase.default;

	exports.toHeaderCase = jsHeadercase.default;

	exports.lowerKeys = lowercaseKeysObject.default;

	exports.upperKeys = uppercaseKeysObject.default;

	exports.camelKeys = camelcaseKeysObject.default;

	exports.snakeKeys = snakecaseKeysObject.default;

	exports.pascalKeys = pascalcaseKeysObject.default;
	var toLowerCase = function (str) { return String(str || '').toLowerCase(); };
	exports.toLowerCase = toLowerCase;
	var toUpperCase = function (str) { return String(str || '').toUpperCase(); };
	exports.toUpperCase = toUpperCase;
	var jsConvert = {
	    toCamelCase: jsCamelcase.default,
	    toSnakeCase: jsSnakecase.default,
	    toPascalCase: jsPascalcase.default,
	    toDotCase: jsDotcase.default,
	    toPathCase: jsPathcase.default,
	    toTextCase: jsTextcase.default,
	    toSentenceCase: jsSentencecase.default,
	    toHeaderCase: jsHeadercase.default,
	    toUpperCase: toUpperCase,
	    toLowerCase: toLowerCase,
	    lowerKeys: lowercaseKeysObject.default,
	    upperKeys: uppercaseKeysObject.default,
	    camelKeys: camelcaseKeysObject.default,
	    snakeKeys: snakecaseKeysObject.default,
	    pascalKeys: pascalcaseKeysObject.default,
	};
	exports.default = jsConvert;
	});

	unwrapExports(lib);
	var lib_1 = lib.pascalKeys;
	var lib_2 = lib.snakeKeys;
	var lib_3 = lib.camelKeys;
	var lib_4 = lib.upperKeys;
	var lib_5 = lib.lowerKeys;
	var lib_6 = lib.toLowerCase;
	var lib_7 = lib.toUpperCase;
	var lib_8 = lib.toHeaderCase;
	var lib_9 = lib.toSentenceCase;
	var lib_10 = lib.toTextCase;
	var lib_11 = lib.toPathCase;
	var lib_12 = lib.toDotCase;
	var lib_13 = lib.toPascalCase;
	var lib_14 = lib.toSnakeCase;
	var lib_15 = lib.toCamelCase;

	var jsConvertCase = lib;

	return jsConvertCase;

}());
