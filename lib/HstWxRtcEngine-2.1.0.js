module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/javascript-state-machine/lib/state-machine.js":
/*!********************************************************************!*\
  !*** ./node_modules/javascript-state-machine/lib/state-machine.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(target, sources) {
  var n, source, key;
  for(n = 1 ; n < arguments.length ; n++) {
    source = arguments[n];
    for(key in source) {
      if (source.hasOwnProperty(key))
        target[key] = source[key];
    }
  }
  return target;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-------------------------------------------------------------------------------------------------

var mixin = __webpack_require__(0);

//-------------------------------------------------------------------------------------------------

module.exports = {

  build: function(target, config) {
    var n, max, plugin, plugins = config.plugins;
    for(n = 0, max = plugins.length ; n < max ; n++) {
      plugin = plugins[n];
      if (plugin.methods)
        mixin(target, plugin.methods);
      if (plugin.properties)
        Object.defineProperties(target, plugin.properties);
    }
  },

  hook: function(fsm, name, additional) {
    var n, max, method, plugin,
        plugins = fsm.config.plugins,
        args    = [fsm.context];

    if (additional)
      args = args.concat(additional)

    for(n = 0, max = plugins.length ; n < max ; n++) {
      plugin = plugins[n]
      method = plugins[n][name]
      if (method)
        method.apply(plugin, args);
    }
  }

}

//-------------------------------------------------------------------------------------------------


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-------------------------------------------------------------------------------------------------

function camelize(label) {

  if (label.length === 0)
    return label;

  var n, result, word, words = label.split(/[_-]/);

  // single word with first character already lowercase, return untouched
  if ((words.length === 1) && (words[0][0].toLowerCase() === words[0][0]))
    return label;

  result = words[0].toLowerCase();
  for(n = 1 ; n < words.length ; n++) {
    result = result + words[n].charAt(0).toUpperCase() + words[n].substring(1).toLowerCase();
  }

  return result;
}

//-------------------------------------------------------------------------------------------------

camelize.prepended = function(prepend, label) {
  label = camelize(label);
  return prepend + label[0].toUpperCase() + label.substring(1);
}

//-------------------------------------------------------------------------------------------------

module.exports = camelize;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-------------------------------------------------------------------------------------------------

var mixin    = __webpack_require__(0),
    camelize = __webpack_require__(2);

//-------------------------------------------------------------------------------------------------

function Config(options, StateMachine) {

  options = options || {};

  this.options     = options; // preserving original options can be useful (e.g visualize plugin)
  this.defaults    = StateMachine.defaults;
  this.states      = [];
  this.transitions = [];
  this.map         = {};
  this.lifecycle   = this.configureLifecycle();
  this.init        = this.configureInitTransition(options.init);
  this.data        = this.configureData(options.data);
  this.methods     = this.configureMethods(options.methods);

  this.map[this.defaults.wildcard] = {};

  this.configureTransitions(options.transitions || []);

  this.plugins = this.configurePlugins(options.plugins, StateMachine.plugin);

}

//-------------------------------------------------------------------------------------------------

mixin(Config.prototype, {

  addState: function(name) {
    if (!this.map[name]) {
      this.states.push(name);
      this.addStateLifecycleNames(name);
      this.map[name] = {};
    }
  },

  addStateLifecycleNames: function(name) {
    this.lifecycle.onEnter[name] = camelize.prepended('onEnter', name);
    this.lifecycle.onLeave[name] = camelize.prepended('onLeave', name);
    this.lifecycle.on[name]      = camelize.prepended('on',      name);
  },

  addTransition: function(name) {
    if (this.transitions.indexOf(name) < 0) {
      this.transitions.push(name);
      this.addTransitionLifecycleNames(name);
    }
  },

  addTransitionLifecycleNames: function(name) {
    this.lifecycle.onBefore[name] = camelize.prepended('onBefore', name);
    this.lifecycle.onAfter[name]  = camelize.prepended('onAfter',  name);
    this.lifecycle.on[name]       = camelize.prepended('on',       name);
  },

  mapTransition: function(transition) {
    var name = transition.name,
        from = transition.from,
        to   = transition.to;
    this.addState(from);
    if (typeof to !== 'function')
      this.addState(to);
    this.addTransition(name);
    this.map[from][name] = transition;
    return transition;
  },

  configureLifecycle: function() {
    return {
      onBefore: { transition: 'onBeforeTransition' },
      onAfter:  { transition: 'onAfterTransition'  },
      onEnter:  { state:      'onEnterState'       },
      onLeave:  { state:      'onLeaveState'       },
      on:       { transition: 'onTransition'       }
    };
  },

  configureInitTransition: function(init) {
    if (typeof init === 'string') {
      return this.mapTransition(mixin({}, this.defaults.init, { to: init, active: true }));
    }
    else if (typeof init === 'object') {
      return this.mapTransition(mixin({}, this.defaults.init, init, { active: true }));
    }
    else {
      this.addState(this.defaults.init.from);
      return this.defaults.init;
    }
  },

  configureData: function(data) {
    if (typeof data === 'function')
      return data;
    else if (typeof data === 'object')
      return function() { return data; }
    else
      return function() { return {};  }
  },

  configureMethods: function(methods) {
    return methods || {};
  },

  configurePlugins: function(plugins, builtin) {
    plugins = plugins || [];
    var n, max, plugin;
    for(n = 0, max = plugins.length ; n < max ; n++) {
      plugin = plugins[n];
      if (typeof plugin === 'function')
        plugins[n] = plugin = plugin()
      if (plugin.configure)
        plugin.configure(this);
    }
    return plugins
  },

  configureTransitions: function(transitions) {
    var i, n, transition, from, to, wildcard = this.defaults.wildcard;
    for(n = 0 ; n < transitions.length ; n++) {
      transition = transitions[n];
      from  = Array.isArray(transition.from) ? transition.from : [transition.from || wildcard]
      to    = transition.to || wildcard;
      for(i = 0 ; i < from.length ; i++) {
        this.mapTransition({ name: transition.name, from: from[i], to: to });
      }
    }
  },

  transitionFor: function(state, transition) {
    var wildcard = this.defaults.wildcard;
    return this.map[state][transition] ||
           this.map[wildcard][transition];
  },

  transitionsFor: function(state) {
    var wildcard = this.defaults.wildcard;
    return Object.keys(this.map[state]).concat(Object.keys(this.map[wildcard]));
  },

  allStates: function() {
    return this.states;
  },

  allTransitions: function() {
    return this.transitions;
  }

});

//-------------------------------------------------------------------------------------------------

module.exports = Config;

//-------------------------------------------------------------------------------------------------


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var mixin      = __webpack_require__(0),
    Exception  = __webpack_require__(6),
    plugin     = __webpack_require__(1),
    UNOBSERVED = [ null, [] ];

//-------------------------------------------------------------------------------------------------

function JSM(context, config) {
  this.context   = context;
  this.config    = config;
  this.state     = config.init.from;
  this.observers = [context];
}

//-------------------------------------------------------------------------------------------------

mixin(JSM.prototype, {

  init: function(args) {
    mixin(this.context, this.config.data.apply(this.context, args));
    plugin.hook(this, 'init');
    if (this.config.init.active)
      return this.fire(this.config.init.name, []);
  },

  is: function(state) {
    return Array.isArray(state) ? (state.indexOf(this.state) >= 0) : (this.state === state);
  },

  isPending: function() {
    return this.pending;
  },

  can: function(transition) {
    return !this.isPending() && !!this.seek(transition);
  },

  cannot: function(transition) {
    return !this.can(transition);
  },

  allStates: function() {
    return this.config.allStates();
  },

  allTransitions: function() {
    return this.config.allTransitions();
  },

  transitions: function() {
    return this.config.transitionsFor(this.state);
  },

  seek: function(transition, args) {
    var wildcard = this.config.defaults.wildcard,
        entry    = this.config.transitionFor(this.state, transition),
        to       = entry && entry.to;
    if (typeof to === 'function')
      return to.apply(this.context, args);
    else if (to === wildcard)
      return this.state
    else
      return to
  },

  fire: function(transition, args) {
    return this.transit(transition, this.state, this.seek(transition, args), args);
  },

  transit: function(transition, from, to, args) {

    var lifecycle = this.config.lifecycle,
        changed   = this.config.options.observeUnchangedState || (from !== to);

    if (!to)
      return this.context.onInvalidTransition(transition, from, to);

    if (this.isPending())
      return this.context.onPendingTransition(transition, from, to);

    this.config.addState(to);  // might need to add this state if it's unknown (e.g. conditional transition or goto)

    this.beginTransit();

    args.unshift({             // this context will be passed to each lifecycle event observer
      transition: transition,
      from:       from,
      to:         to,
      fsm:        this.context
    });

    return this.observeEvents([
                this.observersForEvent(lifecycle.onBefore.transition),
                this.observersForEvent(lifecycle.onBefore[transition]),
      changed ? this.observersForEvent(lifecycle.onLeave.state) : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.onLeave[from]) : UNOBSERVED,
                this.observersForEvent(lifecycle.on.transition),
      changed ? [ 'doTransit', [ this ] ]                       : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.onEnter.state) : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.onEnter[to])   : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.on[to])        : UNOBSERVED,
                this.observersForEvent(lifecycle.onAfter.transition),
                this.observersForEvent(lifecycle.onAfter[transition]),
                this.observersForEvent(lifecycle.on[transition])
    ], args);
  },

  beginTransit: function()          { this.pending = true;                 },
  endTransit:   function(result)    { this.pending = false; return result; },
  failTransit:  function(result)    { this.pending = false; throw result;  },
  doTransit:    function(lifecycle) { this.state = lifecycle.to;           },

  observe: function(args) {
    if (args.length === 2) {
      var observer = {};
      observer[args[0]] = args[1];
      this.observers.push(observer);
    }
    else {
      this.observers.push(args[0]);
    }
  },

  observersForEvent: function(event) { // TODO: this could be cached
    var n = 0, max = this.observers.length, observer, result = [];
    for( ; n < max ; n++) {
      observer = this.observers[n];
      if (observer[event])
        result.push(observer);
    }
    return [ event, result, true ]
  },

  observeEvents: function(events, args, previousEvent, previousResult) {
    if (events.length === 0) {
      return this.endTransit(previousResult === undefined ? true : previousResult);
    }

    var event     = events[0][0],
        observers = events[0][1],
        pluggable = events[0][2];

    args[0].event = event;
    if (event && pluggable && event !== previousEvent)
      plugin.hook(this, 'lifecycle', args);

    if (observers.length === 0) {
      events.shift();
      return this.observeEvents(events, args, event, previousResult);
    }
    else {
      var observer = observers.shift(),
          result = observer[event].apply(observer, args);
      if (result && typeof result.then === 'function') {
        return result.then(this.observeEvents.bind(this, events, args, event))
                     .catch(this.failTransit.bind(this))
      }
      else if (result === false) {
        return this.endTransit(false);
      }
      else {
        return this.observeEvents(events, args, event, result);
      }
    }
  },

  onInvalidTransition: function(transition, from, to) {
    throw new Exception("transition is invalid in current state", transition, from, to, this.state);
  },

  onPendingTransition: function(transition, from, to) {
    throw new Exception("transition is invalid while previous transition is still in progress", transition, from, to, this.state);
  }

});

//-------------------------------------------------------------------------------------------------

module.exports = JSM;

//-------------------------------------------------------------------------------------------------


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-----------------------------------------------------------------------------------------------

var mixin    = __webpack_require__(0),
    camelize = __webpack_require__(2),
    plugin   = __webpack_require__(1),
    Config   = __webpack_require__(3),
    JSM      = __webpack_require__(4);

//-----------------------------------------------------------------------------------------------

var PublicMethods = {
  is:                  function(state)       { return this._fsm.is(state)                                     },
  can:                 function(transition)  { return this._fsm.can(transition)                               },
  cannot:              function(transition)  { return this._fsm.cannot(transition)                            },
  observe:             function()            { return this._fsm.observe(arguments)                            },
  transitions:         function()            { return this._fsm.transitions()                                 },
  allTransitions:      function()            { return this._fsm.allTransitions()                              },
  allStates:           function()            { return this._fsm.allStates()                                   },
  onInvalidTransition: function(t, from, to) { return this._fsm.onInvalidTransition(t, from, to)              },
  onPendingTransition: function(t, from, to) { return this._fsm.onPendingTransition(t, from, to)              },
}

var PublicProperties = {
  state: {
    configurable: false,
    enumerable:   true,
    get: function() {
      return this._fsm.state;
    },
    set: function(state) {
      throw Error('use transitions to change state')
    }
  }
}

//-----------------------------------------------------------------------------------------------

function StateMachine(options) {
  return apply(this || {}, options);
}

function factory() {
  var cstor, options;
  if (typeof arguments[0] === 'function') {
    cstor   = arguments[0];
    options = arguments[1] || {};
  }
  else {
    cstor   = function() { this._fsm.apply(this, arguments) };
    options = arguments[0] || {};
  }
  var config = new Config(options, StateMachine);
  build(cstor.prototype, config);
  cstor.prototype._fsm.config = config; // convenience access to shared config without needing an instance
  return cstor;
}

//-------------------------------------------------------------------------------------------------

function apply(instance, options) {
  var config = new Config(options, StateMachine);
  build(instance, config);
  instance._fsm();
  return instance;
}

function build(target, config) {
  if ((typeof target !== 'object') || Array.isArray(target))
    throw Error('StateMachine can only be applied to objects');
  plugin.build(target, config);
  Object.defineProperties(target, PublicProperties);
  mixin(target, PublicMethods);
  mixin(target, config.methods);
  config.allTransitions().forEach(function(transition) {
    target[camelize(transition)] = function() {
      return this._fsm.fire(transition, [].slice.call(arguments))
    }
  });
  target._fsm = function() {
    this._fsm = new JSM(this, config);
    this._fsm.init(arguments);
  }
}

//-----------------------------------------------------------------------------------------------

StateMachine.version  = '3.0.1';
StateMachine.factory  = factory;
StateMachine.apply    = apply;
StateMachine.defaults = {
  wildcard: '*',
  init: {
    name: 'init',
    from: 'none'
  }
}

//===============================================================================================

module.exports = StateMachine;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(message, transition, from, to, current) {
  this.message    = message;
  this.transition = transition;
  this.from       = from;
  this.to         = to;
  this.current    = current;
}


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/*! exports provided: getBitRate, generateGUID, getAddrs, detectOS, asyncWrapper, tracelog, getCtrlPoint, writeTextOnCanvas, preloadImage, getTempPath, stringToRGBA, colorToNumber, stringToColor, getEventPostfix, checkParam, dealCanvasSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBitRate", function() { return getBitRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGUID", function() { return generateGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddrs", function() { return getAddrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectOS", function() { return detectOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncWrapper", function() { return asyncWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tracelog", function() { return tracelog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCtrlPoint", function() { return getCtrlPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTextOnCanvas", function() { return writeTextOnCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadImage", function() { return preloadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTempPath", function() { return getTempPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToRGBA", function() { return stringToRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToNumber", function() { return colorToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToColor", function() { return stringToColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventPostfix", function() { return getEventPostfix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkParam", function() { return checkParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealCanvasSize", function() { return dealCanvasSize; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/common/logger.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Resolution array

var resolutionArray = [328 * 240, 480 * 360, 640 * 480, 800 * 600, 1280 * 720, 1440 * 900, 1920 * 1080]; // Frame rate array

var frameRateArray = [5, 10, 15, 18, 20, 25, 30]; // BitRate control table for h265/vp9

var lowBitRateTable = [// 5     10   15   18   20   25   30  (fps)
[130, 180, 220, 230, 240, 260, 290], // 320*240
[157, 233, 277, 304, 336, 366, 431], // 480*360
[220, 270, 330, 372, 392, 450, 520], // 640*480
[230, 305, 393, 483, 505, 610, 725], // 800*600
[229, 339, 489, 613, 630, 730, 910], // 1280*720
[294, 498, 653, 823, 927, 1151, 1355], // 1440*900
[370, 670, 870, 1058, 1150, 1410, 1530] // 1920*1080
]; // BitRate control table for h264/vp8

var highBitRateTable = [// 5     10   15   18   20   25   30  (fps)
[50, 100, 150, 180, 200, 250, 300], // 320*240
[87, 173, 261, 314, 346, 434, 521], // 480*360
[120, 240, 360, 432, 460, 600, 720], // 640*480
[187, 375, 563, 675, 700, 900, 1125], // 800*600
[239, 479, 719, 863, 900, 1100, 1400], // 1280*720
[384, 768, 1153, 1383, 1537, 1921, 2305], // 1440*900
[480, 960, 1440, 1728, 1920, 2400, 3000] // 1920*1080
];
/**
 * 获取帧率在帧率表的索引
 * @param {*} frameRate 
 */

function _getFrameRateIndex(frameRate) {
  var index = 0;

  for (; index < frameRateArray.length; index++) {
    if (frameRate <= frameRateArray[index]) {
      break;
    }
  } // 比最大的帧率还大


  if (index === frameRateArray.length) {
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("Frame rate is too big, ", frameRate);
    index--;
  }

  return index;
}
/**
 * 获取分辨率在分辨率表的索引
 * @param {*} width 
 * @param {*} height 
 */


function _getResolutionIndex(width, height) {
  var resolution = width * height;
  var index = 0;

  for (; index < resolutionArray.length; index++) {
    if (resolution <= resolutionArray[index]) {
      break;
    }
  } // 比最大的分辨率还大


  if (index === resolutionArray.length) {
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("Resolution is too big, ", width + "*" + height);
    index--;
  }

  return index;
}
/**
 * 根据视频的宽、高、帧率计算码率
 * @param {*} width 
 * @param {*} height 
 * @param {*} frameRate 
 */


function getBitRate(width, height, frameRate) {
  var frameIndex = _getFrameRateIndex(frameRate);

  var resolutionIndex = _getResolutionIndex(width, height);

  return highBitRateTable[resolutionIndex][frameIndex];
}
/**
 * 生成GUID
 */

function generateGUID() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}
function getAddrs(str, urlStrs) {
  var urlAddrs = urlStrs.split(';');

  var _iterator = _createForOfIteratorHelper(urlAddrs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var addr = _step.value;

      if (addr.indexOf(str) > -1) {
        return addr;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
}
/**
 * 检测操作系统类型
 */

function detectOS() {
  if (navigator.platform == "Win32" || navigator.platform == "Windows") {
    return "windows";
  } else if (navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel") {
    return "mac";
  } else if (String(navigator.platform).indexOf("Linux") > -1) {
    return "linux";
  } else if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) {
    return "android";
  } else if (navigator.userAgent.indexOf('iPhone') > -1) {
    return "ios";
  } else {
    return "unknown";
  }
}
/**
 * 函数同步转异步包装器
 * @param {*} excutor 待执行函数
 */

function asyncWrapper(excutor) {
  var promise = new Promise(function (resolve) {
    resolve();
  });
  promise.then(function () {
    excutor();
  });
}
/**
 * 打印函数跟踪日志的装饰器
 * @param {*} target 
 * @param {*} name 
 * @param {*} descriptor 
 */

function tracelog(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    var argString = "";

    for (var i = 0; i < arguments.length; i++) {
      if (argString) {
        argString += ", " + JSON.stringify(arguments[i]);
      } else {
        argString += JSON.stringify(arguments[i]);
      }
    }

    if (argString) {
      _logger__WEBPACK_IMPORTED_MODULE_0__["default"].trace("".concat(name, ": ") + argString);
    } else {
      _logger__WEBPACK_IMPORTED_MODULE_0__["default"].trace("\"".concat(name, "\""));
    }

    return oldValue.apply(this, arguments);
  };

  return descriptor;
} // 两点确定三次贝塞尔曲线函数的两个控制点

var getCtrlPoint = function getCtrlPoint(ps, i, a, b) {
  if (!a || !b) {
    a = 0.25;
    b = 0.25;
  } // 处理两种极端情形


  if (i < 1) {
    var pAx = parseInt(ps[0].X) + (ps[1].X - ps[0].X) * a;
    var pAy = parseInt(ps[0].Y) + (ps[1].Y - ps[0].Y) * a;
  } else {
    var pAx = parseInt(ps[i].X) + (ps[i + 1].X - ps[i - 1].X) * a;
    var pAy = parseInt(ps[i].Y) + (ps[i + 1].Y - ps[i - 1].Y) * a;
  }

  if (i > ps.length - 3) {
    var last = ps.length - 1;
    var pBx = parseInt(ps[last].X) - (ps[last].X - ps[last - 1].X) * b;
    var pBy = parseInt(ps[last].Y) - (ps[last].Y - ps[last - 1].Y) * b;
  } else {
    var pBx = parseInt(ps[i + 1].X) - (ps[i + 2].X - ps[i].X) * b;
    var pBy = parseInt(ps[i + 1].Y) - (ps[i + 2].Y - ps[i].Y) * b;
  }

  return {
    pA: {
      x: pAx,
      y: pAy
    },
    pB: {
      x: pBx,
      y: pBy
    }
  };
}; // 获取字符串的真实长度（字节长度） 

var getTrueLength = function getTrueLength(str) {
  var len = str.length,
      truelen = 0;

  for (var x = 0; x < len; x++) {
    if (str.charCodeAt(x) > 128) {
      truelen += 2;
    } else {
      truelen += 1;
    }
  }

  return truelen;
}; // 按字节长度截取字符串，返回substr截取位置  


var cutString = function cutString(str, leng) {
  var len = str.length,
      tlen = len,
      nlen = 0;

  for (var x = 0; x < len; x++) {
    if (str.charCodeAt(x) > 128) {
      if (nlen + 2 < leng) {
        nlen += 2;
      } else {
        tlen = x;
        break;
      }
    } else {
      if (nlen + 1 < leng) {
        nlen += 1;
      } else {
        tlen = x;
        break;
      }
    }
  }

  return tlen;
}; //ctx_2d        getContext("2d") 对象  
//lineheight    段落文本行高  
//bytelength    设置单字节文字一行内的数量  
//text          写入画面的段落文本  
//startleft     开始绘制文本的 x 坐标位置（相对于画布）  
//starttop      开始绘制文本的 y 坐标位置（相对于画布）  


var writeTextOnCanvas = function writeTextOnCanvas(ctx_2d, lineheight, bytelength, text, startleft, starttop) {
  for (var i = 1; getTrueLength(text) > 0; i++) {
    var tl = cutString(text, bytelength);
    ctx_2d.fillText(text.substr(0, tl).replace(/^\s+|\s+$/, ""), startleft, (i - 1) * lineheight + starttop);
    text = text.substr(tl);
  }
};
/**
 * 预加载白板图片
 * @param {*} url 
 * @param {*} callback 
 * @param {*} n 
 */

var preloadImage = function preloadImage(canvas, url, callback, fail) {
  var img = canvas.createImage();
  img.src = url;

  if (img.complete) {
    callback(img);
    return;
  }

  img.onload = function () {
    console.log("加载图片成功");
    callback && callback(img);
  };

  img.onerror = function () {
    fail && fail();
  }; // wx.downloadFile({
  //   url: url,
  //   success(res) {
  //     if (res.statusCode === 200) {
  //       callback(res.tempFilePath)
  //     } else {
  //       console.warn("Unexpected status code: " + res.statusCode)
  //     }
  //   },
  //   fail() {
  //     logger.error("Download image failed: " + url)
  //     if (n > 5) return
  //     n++;
  //     preloadImage(url, callback, n);
  //   }
  // })
  // let img = new Image()
  // img.onload = () => {
  //   callback && callback()
  // }
  // img.onerror = () => {
  //   if (n > 10) return
  //   n++
  //   preloadImage(url, callback, n)
  // }
  // img.src = url

};
function getTempPath(url, _success, _fail) {
  wx.getImageInfo({
    src: url,
    success: function success(result) {
      _success && _success(result.path);
    },
    fail: function fail() {
      _fail && _fail();
      console.warn("Get image info failed!");
    }
  });
}
function stringToRGBA(strCL) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  var R = parseInt(strCL.slice(1, 3), 16);
  var G = parseInt(strCL.slice(3, 5), 16);
  var B = parseInt(strCL.slice(5, 7), 16);
  return "rgba(".concat(R, ", ").concat(G, ", ").concat(B, ", ").concat(opacity, ")");
}
/**
 * #00000 转换为 256x256x256x256的数字
 */

function colorToNumber(color) {
  color = color.charAt(0) == "#" ? color.substring(1, 7) : color;

  while (color.length < 8) {
    color = 'f' + color;
  }

  return parseInt(color, 16);
}
/**
 * 字符串到颜色的转换
 * @param {*} strCL 
 */

function stringToColor(strCL) {
  var sexadecimalCL; // 判断十进制是整型还是字符串，字符串为负数十进制，整型为正数十进制

  if (typeof strCL == "string") {
    sexadecimalCL = (parseInt(strCL) >>> 0).toString(16).toLocaleUpperCase();
  } else {
    sexadecimalCL = parseInt(strCL).toString(16);
  }

  while (sexadecimalCL.length < 6) {
    sexadecimalCL = "0" + sexadecimalCL;
  } // 前端color#RRGGBB，转换成客户端类型#BBGGRR


  var BB = sexadecimalCL.substring(sexadecimalCL.length - 2);
  var GG = sexadecimalCL.substring(sexadecimalCL.length - 4, sexadecimalCL.length - 2);
  var RR = sexadecimalCL.substring(sexadecimalCL.length - 6, sexadecimalCL.length - 4);
  return "#" + RR + GG + BB;
}
/**
 * 有些媒体事件，需要使用后缀进行隔离，否则可能会相互影响
 * @param {*} userId 
 * @param {*} mediaType 
 * @param {*} mediaId 
 */

function getEventPostfix(userId, mediaType, mediaId) {
  if (userId) {
    return "_" + userId + "_" + mediaType + "_" + mediaId;
  } else {
    return "_" + mediaType + "_" + mediaId;
  }
}
/**
 * 判断参数是否合法
 * @param {} param 
 */

function checkParam(param) {
  return param !== null && param !== undefined && param !== '';
}
function dealCanvasSize(width, height) {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      windowWidth = _wx$getSystemInfoSync.windowWidth,
      windowHeight = _wx$getSystemInfoSync.windowHeight;

  var ratio = width / height;

  if (width > windowWidth * 2) {
    width = windowWidth * 2;
  }

  if (width < windowWidth) {
    width = windowWidth;
  }

  height = width / ratio;

  if (height > windowHeight * 3) {
    height = windowHeight * 3;
    width = height * ratio;
  }

  return {
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./src/common/enums.js":
/*!*****************************!*\
  !*** ./src/common/enums.js ***!
  \*****************************/
/*! exports provided: MediaType, MediaOper, RecvState, Graphics, RecvMagicMode, EventResult, EventType, DisplayMode, ProxyEventType, fillStyle, fillMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaOper", function() { return MediaOper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecvState", function() { return RecvState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graphics", function() { return Graphics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecvMagicMode", function() { return RecvMagicMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResult", function() { return EventResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMode", function() { return DisplayMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyEventType", function() { return ProxyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillStyle", function() { return fillStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillMode", function() { return fillMode; });
var MediaType = {
  "SCREEN_SHARE": 0,
  "AUDIO": 1,
  "VIDEO": 2,
  "WHITE_BOARD": 4
};
var MediaOper = {
  "STOP_PUBLISH": 0,
  "START_PUBLISH": 1
};
var RecvState = {
  "STOP_RECV": 0,
  "START_RECV": 1
};
var Graphics = {
  'LINE': 'line',
  'CURVE': 'curve',
  'TEXT': 'text',
  'ERASER': 'eraser',
  'MASK_CURVE': 'mask_curve'
};
var RecvMagicMode = {
  "FOLLOW": 0,
  "ONLY_ORIGIN": 1,
  "ONLY_MAGIC": 2
};
var EventResult = {
  "SUCCESS": 0,
  "FAILED": 1,
  "NOADDR": 1001
};
var EventType = {
  EVENT_INIT: "EVENT_INIT",
  EVENT_LOGIN: "EVENT_LOGIN",
  EVENT_LOGOUT: "EVENT_LOGOUT",
  EVENT_JOIN_GROUP: "EVENT_JOIN_GROUP",
  EVENT_LEAVE_GROUP: "EVENT_LEAVE_GROUP",
  EVENT_START_RCV_MEDIA: "EVENT_START_RECV_MEDIA",
  EVENT_STOP_RCV_MEDIA: "EVENT_STOP_RECV_MEDIA",
  EVENT_START_PUB_MEDIA: "EVENT_START_PUB_MEDIA",
  EVENT_STOP_PUB_MEDIA: "EVENT_STOP_PUB_MEDIA",
  EVENT_GET_ONLINE_USERS: "EVENT_GET_ONLINE_USERS",
  EVENT_ONLINE_USERS_NOTIFY: "EVENT_ONLINE_USERS_NOTIFY",
  EVENT_INVITE: "EVENT_INVITE",
  EVENT_NOTICE_IGNORE_INVITE: "EVENT_NOTICE_IGNORE_INVITE",
  EVENT_REPLY_INVITE: "EVENT_REPLY_INVITE",
  EVENT_CANCEL_INVITE: "EVENT_CANCEL_INVITE",
  EVENT_NOTICE_CANCEL_INVITE: "EVENT_NOTICE_CANCEL_INVITE",
  EVENT_CREATE_WHITE_BOARD: "EVENT_CREATE_WHITE_BOARD",
  EVENT_CLOSE_WHITE_BOARD: "EVENT_CLOSE_WHITE_BOARD"
};
var DisplayMode = {
  DBWZ: 1,
  DBSY: 2,
  DBSF: 3
};
var ProxyEventType = {
  CREATE_CHANNEL: 100,
  CREATE_CHANNEL_SUCCESS: 101,
  BUSINESS_MESSAGE: 103,
  CONNECT_ERROR: 106
}; // 填充样式

var fillStyle = {
  SOLID: 0,
  //实心填充
  L_SLASH: 1,
  // 左斜线
  GRID: 2,
  //网格
  IN_GRID: 3,
  // 斜网格
  R_SLASH: 4,
  // 右斜线
  VERTICAL: 6,
  // 竖线
  HORIZONTAL: 5
}; // 填充模式

var fillMode = {
  EMPTY: 0,
  FILL_WITH_BORDER: 1,
  // 填充带边框
  FILL_NO_BORDER: 2 // 填充不带边框

};

/***/ }),

/***/ "./src/common/event-registry.js":
/*!**************************************!*\
  !*** ./src/common/event-registry.js ***!
  \**************************************/
/*! exports provided: on, off, trigger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// 基于Backbone.Events(Backbone.js 1.1.2)改造的事件注册中心，主要改造点如下：
// 1）简化接口和实现，去除暂时用不到的接口和功能。
// 2）支持事件缓存，确保事件不丢失
var slice = [].slice;
/**
 * 订阅事件
 * @param {*} eventName 
 * @param {*} callback 
 * @param {*} context 
 */

function on(eventName, callback, context) {
  var _registry = this._registry || (this._registry = {});

  var eventEntry = _registry[eventName] || (_registry[eventName] = {
    events: [],
    callbacks: []
  });
  eventEntry.callbacks.push({
    callback: callback,
    context: context
  });

  _triggerCachedEvents(eventEntry, callback, context);

  return this;
}
/**
 * 取消订阅事件
 * @param {*} eventName 
 * @param {*} callback 
 * @param {*} context 
 */

function off(eventName, callback, context) {
  // 都为空，表示删除所有注册事件
  if (!eventName && !callback && !context) {
    delete this._registry;
    return this;
  } // 如果未指定事件，则遍历所有事件删除回调函数


  var allEvents = eventName ? [eventName] : Object.keys(this._registry);

  for (var i = 0, l = allEvents.length; i < l; i++) {
    var event = allEvents[i];
    var callbacks = this._registry[event] && this._registry[event].callbacks;

    if (callbacks) {
      var retain = this._registry[event].callbacks = [];

      if (callback || context) {
        for (var j = 0, k = callbacks.length; j < k; j++) {
          var callbackItem = callbacks[j];

          if (callback && callback !== callbackItem.callback || context && context !== callbackItem.context) {
            retain.push(callbackItem);
          }
        }
      }

      if (!retain.length) {
        delete this._registry[event];
      }
    } else {
      console.warn("Empty callbacks of event: " + event);
    }
  }

  return this;
}
/**
 * 触发事件
 * @param {*} eventName 
 */

function trigger(eventName) {
  if (!this._registry) {
    this._registry = {};
  }

  var args = slice.call(arguments, 1);
  var eventEntry = this._registry[eventName] || (this._registry[eventName] = {
    events: [],
    callbacks: []
  });

  if (eventEntry.callbacks.length > 0) {
    _triggerEvents(eventEntry, args, this);
  } else {
    if (eventEntry.events.length < 1024) {
      eventEntry.events.push(args);
    } else {
      console.warn("Events queue is full, event: " + eventName);
    }
  }

  return this;
}
/**
 * 触发缓存事件
 * @param {*} eventEntry 
 * @param {*} callback 
 * @param {*} context 
 */

function _triggerCachedEvents(eventEntry, callback, context) {
  if (eventEntry.events.length > 0) {
    var _iterator = _createForOfIteratorHelper(eventEntry.events),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var event = _step.value;
        callback.apply(context || this, event);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    eventEntry.events = [];
  }
}
/**
 * 实时触发事件
 * @param {*} eventEntry 
 * @param {*} args 
 * @param {*} context 
 */


function _triggerEvents(eventEntry, args, context) {
  var i = -1;
  var l = eventEntry.callbacks.length;

  while (++i < l) {
    var callbackItem = eventEntry.callbacks[i];
    callbackItem.callback.apply(callbackItem.context || context, args);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  on: on,
  off: off,
  trigger: trigger
});

/***/ }),

/***/ "./src/common/hstRequest/interceptorsManage.js":
/*!*****************************************************!*\
  !*** ./src/common/hstRequest/interceptorsManage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var InterceptorsManage = /*#__PURE__*/function () {
  function InterceptorsManage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InterceptorsManage);

    this.handlers = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InterceptorsManage, [{
    key: "use",
    value: function use(onFulField, onRejected) {
      this.handlers.push({
        onFulField: onFulField,
        onRejected: onRejected
      });
    }
  }]);

  return InterceptorsManage;
}();

/* harmony default export */ __webpack_exports__["default"] = (InterceptorsManage);

/***/ }),

/***/ "./src/common/hstRequest/request.js":
/*!******************************************!*\
  !*** ./src/common/hstRequest/request.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _interceptorsManage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptorsManage */ "./src/common/hstRequest/interceptorsManage.js");




/**
 * 仿照axios做的基于promise websocket请求对象 可以实现请求拦截
 * 请求参数: config {
 *  eventName // 事件名称
 *  requestFn // websocket 请求函数
 *  retryConfig: {
 *    num // 当前重试次数
 *    max // 最大重试次数
 *  }
 * }
 * 请求拦截器 interceptors.request.use()
 * 响应拦截器 interceptors.respone.use()
 */

var HstRequest = /*#__PURE__*/function () {
  function HstRequest() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HstRequest);

    this.interceptors = {
      request: new _interceptorsManage__WEBPACK_IMPORTED_MODULE_3__["default"](),
      response: new _interceptorsManage__WEBPACK_IMPORTED_MODULE_3__["default"]()
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HstRequest, [{
    key: "request",
    value: function request(config) {
      var chain = [this.sendMessge.bind(this), undefined];
      this.interceptors.request.handlers.forEach(function (interceptor) {
        chain.unshift(interceptor.onFulField, interceptor.onRejected);
      });
      this.interceptors.response.handlers.forEach(function (interceptor) {
        chain.push(interceptor.onFulField, interceptor.onRejected);
      });
      var promise = Promise.resolve(config);

      while (chain.length > 0) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }
  }, {
    key: "sendMessge",
    value: function sendMessge(config) {
      return new Promise(function (resolve, reject) {
        _event_registry__WEBPACK_IMPORTED_MODULE_2__["default"].on(config.eventName, function (res) {
          resolve({
            data: res,
            config: config
          });
        });
        config.requestFn();
      });
    }
  }]);

  return HstRequest;
}();

/* harmony default export */ __webpack_exports__["default"] = (HstRequest);

/***/ }),

/***/ "./src/common/logger.js":
/*!******************************!*\
  !*** ./src/common/logger.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 自定义日志输出，主要是添加时间
 */
var Logger = /*#__PURE__*/function () {
  function Logger() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logger);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Logger, [{
    key: "state",
    value:
    /**
     * state级别日志，状态机专用
     * @param {*} data 
     */
    function state(data) {
      console.info("%c" + this._getFormatter() + " " + data, "color: #FF6347");
    }
    /**
     * trace级别日志
     * @param {*} data 
     */

  }, {
    key: "trace",
    value: function trace(data) {
      console.info("%c" + this._getFormatter() + " " + data, "color: #008080"); //console.info((new Error("backtrace")).stack);
    }
    /**
     * info级别日志
     * @param {*} data 
     */

  }, {
    key: "info",
    value: function info(data) {
      console.info(this._getFormatter() + " " + data); //console.info((new Error("backtrace")).stack);
    }
    /**
     * warn级别日志
     * @param {*} data 
     */

  }, {
    key: "warn",
    value: function warn(data) {
      console.warn(this._getFormatter() + " " + data);
    }
    /**
     * error级别日志
     * @param {*} data 
     */

  }, {
    key: "error",
    value: function error(data) {
      console.error(this._getFormatter() + " " + data);
    }
    /**
     * info级别日志别名
     * @param {*} data 
     */

  }, {
    key: "log",
    value: function log(data) {
      this.info(data);
    }
    /**
     * 获取格式化时间
     */

  }, {
    key: "_getFormatter",
    value: function _getFormatter() {
      return this._dateFormat("[YY-MM-DD HH:mm:SS.sss]");
    }
    /**
     * 时间格式化
     * @param {*} fmt 
     */

  }, {
    key: "_dateFormat",
    value: function _dateFormat(fmt) {
      var date = new Date();
      var opt = {
        "Y+": date.getFullYear().toString(),
        // 年
        "M+": (date.getMonth() + 1).toString(),
        // 月
        "D+": date.getDate().toString(),
        // 日
        "H+": date.getHours().toString(),
        // 时
        "m+": date.getMinutes().toString(),
        // 分
        "S+": date.getSeconds().toString(),
        // 秒
        "s+": date.getMilliseconds().toString() // 毫秒

      };

      for (var k in opt) {
        var regexp = new RegExp("(" + k + ")").exec(fmt);

        if (regexp) {
          fmt = fmt.replace(regexp[1], regexp[1].length == 1 ? opt[k] : opt[k].padStart(regexp[1].length, "0"));
        }

        ;
      }

      ;
      return fmt;
    }
  }]);

  return Logger;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Logger());

/***/ }),

/***/ "./src/common/promise-handler.js":
/*!***************************************!*\
  !*** ./src/common/promise-handler.js ***!
  \***************************************/
/*! exports provided: promiseHandler, hstRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseHandler", function() { return promiseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hstRequest", function() { return hstRequest; });
/* harmony import */ var _event_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _hstRequest_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hstRequest/request */ "./src/common/hstRequest/request.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/common/enums.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/common/logger.js");




var hstRequest = new _hstRequest_request__WEBPACK_IMPORTED_MODULE_1__["default"](); // websocket 请求拦截

hstRequest.interceptors.response.use(function (_ref) {
  var data = _ref.data,
      config = _ref.config;

  // 订阅事件
  if (data === _enums__WEBPACK_IMPORTED_MODULE_2__["EventResult"].NOADDR && config.retryConfig.num < config.retryConfig.max) {
    config.retryConfig.num++;
    _logger__WEBPACK_IMPORTED_MODULE_3__["default"].warn("start retry receive media: ".concat(config.retryConfig.num));
    return hstRequest.request(config);
  }

  return data;
}, function (err) {}); // 使用事件回调的方式来封装Promise以方便外部处理异步调用

var promiseHandler = function promiseHandler(eventName, fn) {
  return new Promise(function (resolve, reject) {
    //FIXME：这里是否要考虑once场景
    _event_registry__WEBPACK_IMPORTED_MODULE_0__["default"].on(eventName, function () {
      // 第一个参数为异步调用的处理结果
      var result = Array.prototype.shift.call(arguments);

      if (parseInt(result) === 0) {
        fn && fn.call(this);
        resolve.apply(void 0, arguments);
      } else {
        reject.apply(void 0, arguments);
      }
    });
  });
};



/***/ }),

/***/ "./src/core/bbox.js":
/*!**************************!*\
  !*** ./src/core/bbox.js ***!
  \**************************/
/*! exports provided: fromPoints, fromLine, fromCubic, fromQuadratic, fromArc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoints", function() { return fromPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLine", function() { return fromLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCubic", function() { return fromCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuadratic", function() { return fromQuadratic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArc", function() { return fromArc; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/core/vector.js");
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curve */ "./src/core/curve.js");
/**
 * @author Yi Shen(https://github.com/pissang)
 */


var mathMin = Math.min;
var mathMax = Math.max;
var mathSin = Math.sin;
var mathCos = Math.cos;
var PI2 = Math.PI * 2;
var start = _vector__WEBPACK_IMPORTED_MODULE_0__["create"]();
var end = _vector__WEBPACK_IMPORTED_MODULE_0__["create"]();
var extremity = _vector__WEBPACK_IMPORTED_MODULE_0__["create"]();
/**
 * 从顶点数组中计算出最小包围盒，写入`min`和`max`中
 * @module zrender/core/bbox
 * @param {Array<Object>} points 顶点数组
 * @param {number} min
 * @param {number} max
 */

function fromPoints(points, min, max) {
  if (points.length === 0) {
    return;
  }

  var p = points[0];
  var left = p[0];
  var right = p[0];
  var top = p[1];
  var bottom = p[1];
  var i;

  for (i = 1; i < points.length; i++) {
    p = points[i];
    left = mathMin(left, p[0]);
    right = mathMax(right, p[0]);
    top = mathMin(top, p[1]);
    bottom = mathMax(bottom, p[1]);
  }

  min[0] = left;
  min[1] = top;
  max[0] = right;
  max[1] = bottom;
}
/**
 * @memberOf module:zrender/core/bbox
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @param {Array.<number>} min
 * @param {Array.<number>} max
 */

function fromLine(x0, y0, x1, y1, min, max) {
  min[0] = mathMin(x0, x1);
  min[1] = mathMin(y0, y1);
  max[0] = mathMax(x0, x1);
  max[1] = mathMax(y0, y1);
}
var xDim = [];
var yDim = [];
/**
 * 从三阶贝塞尔曲线(p0, p1, p2, p3)中计算出最小包围盒，写入`min`和`max`中
 * @memberOf module:zrender/core/bbox
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {Array.<number>} min
 * @param {Array.<number>} max
 */

function fromCubic(x0, y0, x1, y1, x2, y2, x3, y3, min, max) {
  var cubicExtrema = _curve__WEBPACK_IMPORTED_MODULE_1__["cubicExtrema"];
  var cubicAt = _curve__WEBPACK_IMPORTED_MODULE_1__["cubicAt"];
  var i;
  var n = cubicExtrema(x0, x1, x2, x3, xDim);
  min[0] = Infinity;
  min[1] = Infinity;
  max[0] = -Infinity;
  max[1] = -Infinity;

  for (i = 0; i < n; i++) {
    var x = cubicAt(x0, x1, x2, x3, xDim[i]);
    min[0] = mathMin(x, min[0]);
    max[0] = mathMax(x, max[0]);
  }

  n = cubicExtrema(y0, y1, y2, y3, yDim);

  for (i = 0; i < n; i++) {
    var y = cubicAt(y0, y1, y2, y3, yDim[i]);
    min[1] = mathMin(y, min[1]);
    max[1] = mathMax(y, max[1]);
  }

  min[0] = mathMin(x0, min[0]);
  max[0] = mathMax(x0, max[0]);
  min[0] = mathMin(x3, min[0]);
  max[0] = mathMax(x3, max[0]);
  min[1] = mathMin(y0, min[1]);
  max[1] = mathMax(y0, max[1]);
  min[1] = mathMin(y3, min[1]);
  max[1] = mathMax(y3, max[1]);
}
/**
 * 从二阶贝塞尔曲线(p0, p1, p2)中计算出最小包围盒，写入`min`和`max`中
 * @memberOf module:zrender/core/bbox
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {Array.<number>} min
 * @param {Array.<number>} max
 */

function fromQuadratic(x0, y0, x1, y1, x2, y2, min, max) {
  var quadraticExtremum = _curve__WEBPACK_IMPORTED_MODULE_1__["quadraticExtremum"];
  var quadraticAt = _curve__WEBPACK_IMPORTED_MODULE_1__["quadraticAt"]; // Find extremities, where derivative in x dim or y dim is zero

  var tx = mathMax(mathMin(quadraticExtremum(x0, x1, x2), 1), 0);
  var ty = mathMax(mathMin(quadraticExtremum(y0, y1, y2), 1), 0);
  var x = quadraticAt(x0, x1, x2, tx);
  var y = quadraticAt(y0, y1, y2, ty);
  min[0] = mathMin(x0, x2, x);
  min[1] = mathMin(y0, y2, y);
  max[0] = mathMax(x0, x2, x);
  max[1] = mathMax(y0, y2, y);
}
/**
 * 从圆弧中计算出最小包围盒，写入`min`和`max`中
 * @method
 * @memberOf module:zrender/core/bbox
 * @param {number} x
 * @param {number} y
 * @param {number} rx
 * @param {number} ry
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {number} anticlockwise
 * @param {Array.<number>} min
 * @param {Array.<number>} max
 */

function fromArc(x, y, rx, ry, startAngle, endAngle, anticlockwise, min, max) {
  var vec2Min = _vector__WEBPACK_IMPORTED_MODULE_0__["min"];
  var vec2Max = _vector__WEBPACK_IMPORTED_MODULE_0__["max"];
  var diff = Math.abs(startAngle - endAngle);

  if (diff % PI2 < 1e-4 && diff > 1e-4) {
    // Is a circle
    min[0] = x - rx;
    min[1] = y - ry;
    max[0] = x + rx;
    max[1] = y + ry;
    return;
  }

  start[0] = mathCos(startAngle) * rx + x;
  start[1] = mathSin(startAngle) * ry + y;
  end[0] = mathCos(endAngle) * rx + x;
  end[1] = mathSin(endAngle) * ry + y;
  vec2Min(min, start, end);
  vec2Max(max, start, end); // Thresh to [0, Math.PI * 2]

  startAngle = startAngle % PI2;

  if (startAngle < 0) {
    startAngle = startAngle + PI2;
  }

  endAngle = endAngle % PI2;

  if (endAngle < 0) {
    endAngle = endAngle + PI2;
  }

  if (startAngle > endAngle && !anticlockwise) {
    endAngle += PI2;
  } else if (startAngle < endAngle && anticlockwise) {
    startAngle += PI2;
  }

  if (anticlockwise) {
    var tmp = endAngle;
    endAngle = startAngle;
    startAngle = tmp;
  } // var number = 0;
  // var step = (anticlockwise ? -Math.PI : Math.PI) / 2;


  for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
    if (angle > startAngle) {
      extremity[0] = mathCos(angle) * rx + x;
      extremity[1] = mathSin(angle) * ry + y;
      vec2Min(min, extremity, min);
      vec2Max(max, extremity, max);
    }
  }
}

/***/ }),

/***/ "./src/core/curve.js":
/*!***************************!*\
  !*** ./src/core/curve.js ***!
  \***************************/
/*! exports provided: cubicAt, cubicDerivativeAt, cubicRootAt, cubicExtrema, cubicSubdivide, cubicProjectPoint, quadraticAt, quadraticDerivativeAt, quadraticRootAt, quadraticExtremum, quadraticSubdivide, quadraticProjectPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicAt", function() { return cubicAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicDerivativeAt", function() { return cubicDerivativeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicRootAt", function() { return cubicRootAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicExtrema", function() { return cubicExtrema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicSubdivide", function() { return cubicSubdivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicProjectPoint", function() { return cubicProjectPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticAt", function() { return quadraticAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticDerivativeAt", function() { return quadraticDerivativeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticRootAt", function() { return quadraticRootAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticExtremum", function() { return quadraticExtremum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticSubdivide", function() { return quadraticSubdivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticProjectPoint", function() { return quadraticProjectPoint; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/core/vector.js");
/**
 * 曲线辅助模块
 * @module zrender/core/curve
 * @author pissang(https://www.github.com/pissang)
 */

var mathPow = Math.pow;
var mathSqrt = Math.sqrt;
var EPSILON = 1e-8;
var EPSILON_NUMERIC = 1e-4;
var THREE_SQRT = mathSqrt(3);
var ONE_THIRD = 1 / 3; // 临时变量

var _v0 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["create"])();

var _v1 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["create"])();

var _v2 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["create"])();

function isAroundZero(val) {
  return val > -EPSILON && val < EPSILON;
}

function isNotAroundZero(val) {
  return val > EPSILON || val < -EPSILON;
}
/**
 * 计算三次贝塞尔值
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} p3
 * @param  {number} t
 * @return {number}
 */


function cubicAt(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return onet * onet * (onet * p0 + 3 * t * p1) + t * t * (t * p3 + 3 * onet * p2);
}
/**
 * 计算三次贝塞尔导数值
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} p3
 * @param  {number} t
 * @return {number}
 */

function cubicDerivativeAt(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return 3 * (((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet + (p3 - p2) * t * t);
}
/**
 * 计算三次贝塞尔方程根，使用盛金公式
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} p3
 * @param  {number} val
 * @param  {Array.<number>} roots
 * @return {number} 有效根数目
 */

function cubicRootAt(p0, p1, p2, p3, val, roots) {
  // Evaluate roots of cubic functions
  var a = p3 + 3 * (p1 - p2) - p0;
  var b = 3 * (p2 - p1 * 2 + p0);
  var c = 3 * (p1 - p0);
  var d = p0 - val;
  var A = b * b - 3 * a * c;
  var B = b * c - 9 * a * d;
  var C = c * c - 3 * b * d;
  var n = 0;

  if (isAroundZero(A) && isAroundZero(B)) {
    if (isAroundZero(b)) {
      roots[0] = 0;
    } else {
      var t1 = -c / b; //t1, t2, t3, b is not zero

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }
    }
  } else {
    var disc = B * B - 4 * A * C;

    if (isAroundZero(disc)) {
      var K = B / A;
      var t1 = -b / a + K; // t1, a is not zero

      var t2 = -K / 2; // t2, t3

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }

      if (t2 >= 0 && t2 <= 1) {
        roots[n++] = t2;
      }
    } else if (disc > 0) {
      var discSqrt = mathSqrt(disc);
      var Y1 = A * b + 1.5 * a * (-B + discSqrt);
      var Y2 = A * b + 1.5 * a * (-B - discSqrt);

      if (Y1 < 0) {
        Y1 = -mathPow(-Y1, ONE_THIRD);
      } else {
        Y1 = mathPow(Y1, ONE_THIRD);
      }

      if (Y2 < 0) {
        Y2 = -mathPow(-Y2, ONE_THIRD);
      } else {
        Y2 = mathPow(Y2, ONE_THIRD);
      }

      var t1 = (-b - (Y1 + Y2)) / (3 * a);

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }
    } else {
      var T = (2 * A * b - 3 * a * B) / (2 * mathSqrt(A * A * A));
      var theta = Math.acos(T) / 3;
      var ASqrt = mathSqrt(A);
      var tmp = Math.cos(theta);
      var t1 = (-b - 2 * ASqrt * tmp) / (3 * a);
      var t2 = (-b + ASqrt * (tmp + THREE_SQRT * Math.sin(theta))) / (3 * a);
      var t3 = (-b + ASqrt * (tmp - THREE_SQRT * Math.sin(theta))) / (3 * a);

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }

      if (t2 >= 0 && t2 <= 1) {
        roots[n++] = t2;
      }

      if (t3 >= 0 && t3 <= 1) {
        roots[n++] = t3;
      }
    }
  }

  return n;
}
/**
 * 计算三次贝塞尔方程极限值的位置
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} p3
 * @param  {Array.<number>} extrema
 * @return {number} 有效数目
 */

function cubicExtrema(p0, p1, p2, p3, extrema) {
  var b = 6 * p2 - 12 * p1 + 6 * p0;
  var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
  var c = 3 * p1 - 3 * p0;
  var n = 0;

  if (isAroundZero(a)) {
    if (isNotAroundZero(b)) {
      var t1 = -c / b;

      if (t1 >= 0 && t1 <= 1) {
        extrema[n++] = t1;
      }
    }
  } else {
    var disc = b * b - 4 * a * c;

    if (isAroundZero(disc)) {
      extrema[0] = -b / (2 * a);
    } else if (disc > 0) {
      var discSqrt = mathSqrt(disc);
      var t1 = (-b + discSqrt) / (2 * a);
      var t2 = (-b - discSqrt) / (2 * a);

      if (t1 >= 0 && t1 <= 1) {
        extrema[n++] = t1;
      }

      if (t2 >= 0 && t2 <= 1) {
        extrema[n++] = t2;
      }
    }
  }

  return n;
}
/**
 * 细分三次贝塞尔曲线
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} p3
 * @param  {number} t
 * @param  {Array.<number>} out
 */

function cubicSubdivide(p0, p1, p2, p3, t, out) {
  var p01 = (p1 - p0) * t + p0;
  var p12 = (p2 - p1) * t + p1;
  var p23 = (p3 - p2) * t + p2;
  var p012 = (p12 - p01) * t + p01;
  var p123 = (p23 - p12) * t + p12;
  var p0123 = (p123 - p012) * t + p012; // Seg0

  out[0] = p0;
  out[1] = p01;
  out[2] = p012;
  out[3] = p0123; // Seg1

  out[4] = p0123;
  out[5] = p123;
  out[6] = p23;
  out[7] = p3;
}
/**
 * 投射点到三次贝塞尔曲线上，返回投射距离。
 * 投射点有可能会有一个或者多个，这里只返回其中距离最短的一个。
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} x
 * @param {number} y
 * @param {Array.<number>} [out] 投射点
 * @return {number}
 */

function cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, out) {
  // http://pomax.github.io/bezierinfo/#projections
  var t;
  var interval = 0.005;
  var d = Infinity;
  var prev;
  var next;
  var d1;
  var d2;
  _v0[0] = x;
  _v0[1] = y; // 先粗略估计一下可能的最小距离的 t 值
  // PENDING

  for (var _t = 0; _t < 1; _t += 0.05) {
    _v1[0] = cubicAt(x0, x1, x2, x3, _t);
    _v1[1] = cubicAt(y0, y1, y2, y3, _t);
    d1 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["distSquare"])(_v0, _v1);

    if (d1 < d) {
      t = _t;
      d = d1;
    }
  }

  d = Infinity; // At most 32 iteration

  for (var i = 0; i < 32; i++) {
    if (interval < EPSILON_NUMERIC) {
      break;
    }

    prev = t - interval;
    next = t + interval; // t - interval

    _v1[0] = cubicAt(x0, x1, x2, x3, prev);
    _v1[1] = cubicAt(y0, y1, y2, y3, prev);
    d1 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["distSquare"])(_v1, _v0);

    if (prev >= 0 && d1 < d) {
      t = prev;
      d = d1;
    } else {
      // t + interval
      _v2[0] = cubicAt(x0, x1, x2, x3, next);
      _v2[1] = cubicAt(y0, y1, y2, y3, next);
      d2 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["distSquare"])(_v2, _v0);

      if (next <= 1 && d2 < d) {
        t = next;
        d = d2;
      } else {
        interval *= 0.5;
      }
    }
  } // t


  if (out) {
    out[0] = cubicAt(x0, x1, x2, x3, t);
    out[1] = cubicAt(y0, y1, y2, y3, t);
  } // console.log(interval, i);


  return mathSqrt(d);
}
/**
 * 计算二次方贝塞尔值
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} t
 * @return {number}
 */

function quadraticAt(p0, p1, p2, t) {
  var onet = 1 - t;
  return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
}
/**
 * 计算二次方贝塞尔导数值
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} t
 * @return {number}
 */

function quadraticDerivativeAt(p0, p1, p2, t) {
  return 2 * ((1 - t) * (p1 - p0) + t * (p2 - p1));
}
/**
 * 计算二次方贝塞尔方程根
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} t
 * @param  {Array.<number>} roots
 * @return {number} 有效根数目
 */

function quadraticRootAt(p0, p1, p2, val, roots) {
  var a = p0 - 2 * p1 + p2;
  var b = 2 * (p1 - p0);
  var c = p0 - val;
  var n = 0;

  if (isAroundZero(a)) {
    if (isNotAroundZero(b)) {
      var t1 = -c / b;

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }
    }
  } else {
    var disc = b * b - 4 * a * c;

    if (isAroundZero(disc)) {
      var t1 = -b / (2 * a);

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }
    } else if (disc > 0) {
      var discSqrt = mathSqrt(disc);
      var t1 = (-b + discSqrt) / (2 * a);
      var t2 = (-b - discSqrt) / (2 * a);

      if (t1 >= 0 && t1 <= 1) {
        roots[n++] = t1;
      }

      if (t2 >= 0 && t2 <= 1) {
        roots[n++] = t2;
      }
    }
  }

  return n;
}
/**
 * 计算二次贝塞尔方程极限值
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @return {number}
 */

function quadraticExtremum(p0, p1, p2) {
  var divider = p0 + p2 - 2 * p1;

  if (divider === 0) {
    // p1 is center of p0 and p2
    return 0.5;
  } else {
    return (p0 - p1) / divider;
  }
}
/**
 * 细分二次贝塞尔曲线
 * @memberOf module:zrender/core/curve
 * @param  {number} p0
 * @param  {number} p1
 * @param  {number} p2
 * @param  {number} t
 * @param  {Array.<number>} out
 */

function quadraticSubdivide(p0, p1, p2, t, out) {
  var p01 = (p1 - p0) * t + p0;
  var p12 = (p2 - p1) * t + p1;
  var p012 = (p12 - p01) * t + p01; // Seg0

  out[0] = p0;
  out[1] = p01;
  out[2] = p012; // Seg1

  out[3] = p012;
  out[4] = p12;
  out[5] = p2;
}
/**
 * 投射点到二次贝塞尔曲线上，返回投射距离。
 * 投射点有可能会有一个或者多个，这里只返回其中距离最短的一个。
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x
 * @param {number} y
 * @param {Array.<number>} out 投射点
 * @return {number}
 */

function quadraticProjectPoint(x0, y0, x1, y1, x2, y2, x, y, out) {
  // http://pomax.github.io/bezierinfo/#projections
  var t;
  var interval = 0.005;
  var d = Infinity;
  _v0[0] = x;
  _v0[1] = y; // 先粗略估计一下可能的最小距离的 t 值
  // PENDING

  for (var _t = 0; _t < 1; _t += 0.05) {
    _v1[0] = quadraticAt(x0, x1, x2, _t);
    _v1[1] = quadraticAt(y0, y1, y2, _t);
    var d1 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["distSquare"])(_v0, _v1);

    if (d1 < d) {
      t = _t;
      d = d1;
    }
  }

  d = Infinity; // At most 32 iteration

  for (var i = 0; i < 32; i++) {
    if (interval < EPSILON_NUMERIC) {
      break;
    }

    var prev = t - interval;
    var next = t + interval; // t - interval

    _v1[0] = quadraticAt(x0, x1, x2, prev);
    _v1[1] = quadraticAt(y0, y1, y2, prev);
    var d1 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["distSquare"])(_v1, _v0);

    if (prev >= 0 && d1 < d) {
      t = prev;
      d = d1;
    } else {
      // t + interval
      _v2[0] = quadraticAt(x0, x1, x2, next);
      _v2[1] = quadraticAt(y0, y1, y2, next);
      var d2 = Object(_vector__WEBPACK_IMPORTED_MODULE_0__["distSquare"])(_v2, _v0);

      if (next <= 1 && d2 < d) {
        t = next;
        d = d2;
      } else {
        interval *= 0.5;
      }
    }
  } // t


  if (out) {
    out[0] = quadraticAt(x0, x1, x2, t);
    out[1] = quadraticAt(y0, y1, y2, t);
  } // console.log(interval, i);


  return mathSqrt(d);
}

/***/ }),

/***/ "./src/core/vector.js":
/*!****************************!*\
  !*** ./src/core/vector.js ***!
  \****************************/
/*! exports provided: create, copy, clone, set, add, scaleAndAdd, sub, len, length, lenSquare, lengthSquare, mul, div, dot, scale, normalize, distance, dist, distanceSquare, distSquare, negate, lerp, applyTransform, min, max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lenSquare", function() { return lenSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthSquare", function() { return lengthSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceSquare", function() { return distanceSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distSquare", function() { return distSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTransform", function() { return applyTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* global Float32Array */
var ArrayCtor = typeof Float32Array === 'undefined' ? Array : Float32Array;
/**
 * 创建一个向量
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @return {Vector2}
 */

function create(x, y) {
  var out = new ArrayCtor(2);

  if (x == null) {
    x = 0;
  }

  if (y == null) {
    y = 0;
  }

  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * 复制向量数据
 * @param {Vector2} out
 * @param {Vector2} v
 * @return {Vector2}
 */

function copy(out, v) {
  out[0] = v[0];
  out[1] = v[1];
  return out;
}
/**
 * 克隆一个向量
 * @param {Vector2} v
 * @return {Vector2}
 */

function clone(v) {
  var out = new ArrayCtor(2);
  out[0] = v[0];
  out[1] = v[1];
  return out;
}
/**
 * 设置向量的两个项
 * @param {Vector2} out
 * @param {number} a
 * @param {number} b
 * @return {Vector2} 结果
 */

function set(out, a, b) {
  out[0] = a;
  out[1] = b;
  return out;
}
/**
 * 向量相加
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */

function add(out, v1, v2) {
  out[0] = v1[0] + v2[0];
  out[1] = v1[1] + v2[1];
  return out;
}
/**
 * 向量缩放后相加
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {number} a
 */

function scaleAndAdd(out, v1, v2, a) {
  out[0] = v1[0] + v2[0] * a;
  out[1] = v1[1] + v2[1] * a;
  return out;
}
/**
 * 向量相减
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */

function sub(out, v1, v2) {
  out[0] = v1[0] - v2[0];
  out[1] = v1[1] - v2[1];
  return out;
}
/**
 * 向量长度
 * @param {Vector2} v
 * @return {number}
 */

function len(v) {
  return Math.sqrt(lenSquare(v));
}
var length = len; // jshint ignore:line

/**
 * 向量长度平方
 * @param {Vector2} v
 * @return {number}
 */

function lenSquare(v) {
  return v[0] * v[0] + v[1] * v[1];
}
var lengthSquare = lenSquare;
/**
 * 向量乘法
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */

function mul(out, v1, v2) {
  out[0] = v1[0] * v2[0];
  out[1] = v1[1] * v2[1];
  return out;
}
/**
 * 向量除法
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */

function div(out, v1, v2) {
  out[0] = v1[0] / v2[0];
  out[1] = v1[1] / v2[1];
  return out;
}
/**
 * 向量点乘
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @return {number}
 */

function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}
/**
 * 向量缩放
 * @param {Vector2} out
 * @param {Vector2} v
 * @param {number} s
 */

function scale(out, v, s) {
  out[0] = v[0] * s;
  out[1] = v[1] * s;
  return out;
}
/**
 * 向量归一化
 * @param {Vector2} out
 * @param {Vector2} v
 */

function normalize(out, v) {
  var d = len(v);

  if (d === 0) {
    out[0] = 0;
    out[1] = 0;
  } else {
    out[0] = v[0] / d;
    out[1] = v[1] / d;
  }

  return out;
}
/**
 * 计算向量间距离
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @return {number}
 */

function distance(v1, v2) {
  return Math.sqrt((v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1]));
}
var dist = distance;
/**
 * 向量距离平方
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @return {number}
 */

function distanceSquare(v1, v2) {
  return (v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1]);
}
var distSquare = distanceSquare;
/**
 * 求负向量
 * @param {Vector2} out
 * @param {Vector2} v
 */

function negate(out, v) {
  out[0] = -v[0];
  out[1] = -v[1];
  return out;
}
/**
 * 插值两个点
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {number} t
 */

function lerp(out, v1, v2, t) {
  out[0] = v1[0] + t * (v2[0] - v1[0]);
  out[1] = v1[1] + t * (v2[1] - v1[1]);
  return out;
}
/**
 * 矩阵左乘向量
 * @param {Vector2} out
 * @param {Vector2} v
 * @param {Vector2} m
 */

function applyTransform(out, v, m) {
  var x = v[0];
  var y = v[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * 求两个向量最小值
 * @param  {Vector2} out
 * @param  {Vector2} v1
 * @param  {Vector2} v2
 */

function min(out, v1, v2) {
  out[0] = Math.min(v1[0], v2[0]);
  out[1] = Math.min(v1[1], v2[1]);
  return out;
}
/**
 * 求两个向量最大值
 * @param  {Vector2} out
 * @param  {Vector2} v1
 * @param  {Vector2} v2
 */

function max(out, v1, v2) {
  out[0] = Math.max(v1[0], v2[0]);
  out[1] = Math.max(v1[1], v2[1]);
  return out;
}

/***/ }),

/***/ "./src/export/enums-export.js":
/*!************************************!*\
  !*** ./src/export/enums-export.js ***!
  \************************************/
/*! exports provided: initEnums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEnums", function() { return initEnums; });
function initEnums(hstRtcEngine) {
  /**
   * 导出的媒体类型
   */
  hstRtcEngine.prototype.MediaType = {
    SCREEN_SHARE: 0,
    AUDIO: 1,
    VIDEO: 2,
    TRANSPARENT_DATA: 3,
    WHITE_BOARD: 4
  };
  /**
   * 导出的在线状态
   */

  hstRtcEngine.prototype.OnlineType = {
    OFFLINE: 0,
    ONLINE: 1
  };
  /**
   * 导出白板显示模式
   */

  hstRtcEngine.prototype.DisplayMode = {
    DBWZ: 1,
    // 等比完整
    DBSY: 2,
    // 等比适应
    DBSF: 3 // 等比缩放

  };
}

/***/ }),

/***/ "./src/export/media-export.js":
/*!************************************!*\
  !*** ./src/export/media-export.js ***!
  \************************************/
/*! exports provided: initMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMedia", function() { return initMedia; });
/* harmony import */ var _main_media_audio_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/media/audio-manager */ "./src/main/media/audio-manager.js");
/* harmony import */ var _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/media/media-manager */ "./src/main/media/media-manager.js");
/* harmony import */ var _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/media/white-board-manager */ "./src/main/media/white-board-manager.js");



function initMedia(hstRtcEngine) {
  /**
   * 开始广播本地媒体
   * @param {*} mediaType 
   * @param {*} mediaId 
   * @param {*} params
   * @returns 无
   */
  hstRtcEngine.prototype.startPublishMedia = function (mediaType, mediaId, params) {
    _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__["default"].startPublishMedia(mediaType, mediaId, params);
  };
  /**
   * 停止广播本地媒体
   * @param {*} mediaType 
   * @param {*} mediaId
   * @returns 无 
   */


  hstRtcEngine.prototype.stopPublishMedia = function (mediaType, mediaId) {
    _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__["default"].stopPublishMedia(mediaType, mediaId);
  };
  /**
   * 开始接收远端媒体
   * @param {*} userId 
   * @param {*} mediaType 
   * @param {*} mediaId 
   * @returns Promise
   */


  hstRtcEngine.prototype.startReceiveMedia = function (userId, mediaType, mediaId) {
    return _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__["default"].startReceiveMedia(userId, mediaType, mediaId);
  };
  /**
   * 停止接收远端媒体
   * @param {*} userId 
   * @param {*} mediaType 
   * @param {*} mediaId 
   * @returns Promise
   */


  hstRtcEngine.prototype.stopReceiveMedia = function (userId, mediaType, mediaId) {
    return _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__["default"].stopReceiveMedia(userId, mediaType, mediaId);
  };
  /**
   * 设置媒体渲染器
   * @param {*} userId      用户ID，可以是本地用户或远端用户 
   * @param {*} mediaType   媒体类型：音频、视频、屏幕共享、电子白板
   * @param {*} mediaId     媒体ID
   * @param {*} renderEle   HTML标签，对于白板来说是canvas，其它是video
   * @param {*} params      控制本地采集分辨率和帧率 
   */


  hstRtcEngine.prototype.setMediaRender = function (userId, mediaType, mediaId, renderEle, params) {
    _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__["default"].setMediaRender(userId, mediaType, mediaId, renderEle, params);
  };
  /**
   * 取消设置媒体渲染器
   * @param {*} userId 
   * @param {*} mediaType FIXME：音频和视频都传入MediaType？
   * @param {*} htmlEle 
   */


  hstRtcEngine.prototype.unsetMediaRender = function (userId, mediaType, mediaId) {
    _main_media_media_manager__WEBPACK_IMPORTED_MODULE_1__["default"].unsetMediaRender(userId, mediaType, mediaId);
  };
  /**
   * 设置本地是否发送变声
   * @param {*} value 变声程度值，取值范围为[-12, 12]，0表示没有变声
   */


  hstRtcEngine.prototype.setSendMagicAudioValue = function (value) {
    _main_media_audio_manager__WEBPACK_IMPORTED_MODULE_0__["default"].setSendMagicAudioValue(value);
  };
  /**
   * 设置是否接收变声
   * @param {*} mode 0：跟随，1：只接原声，2：只接变声
   */


  hstRtcEngine.prototype.setRecvMagicAudioMode = function (mode) {
    _main_media_audio_manager__WEBPACK_IMPORTED_MODULE_0__["default"].setRecvMagicAudioMode(mode);
  };
  /**
   * 创建白板
   */


  hstRtcEngine.prototype.createWhiteBoard = function (params) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].createWhiteBoard(params);
  };
  /**
   * 关闭白板
   * @param {*} mediaId 
   */


  hstRtcEngine.prototype.closeWhiteBoard = function (mediaId) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].closeWhiteBoard(mediaId);
  };
  /**
   * 查找白板
   * @param {*} mediaId 
   */


  hstRtcEngine.prototype.getWhiteBoard = function (mediaId) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].getWhiteBoard(mediaId);
  };
  /**
   * 设置白板显示模式
   * @param {*} mediaId 指定白板，为null表示所有白板
   * @param {*} mode 1：等比完整，2：等比适应，3：等比缩放
   * @param {*} param mode为3时，指定缩放比例
   */


  hstRtcEngine.prototype.setWhiteBoardDisplayMode = function (mediaId, mode, param) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].setDisplayMode(mediaId, mode, param);
  };
  /**
   *  旋转白板
   */


  hstRtcEngine.prototype.rotateWhiteBoard = function (rotateAngle, mediaId) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].rotateWhiteBoard(rotateAngle, mediaId);
  };
  /**
   *  切换白板
   */


  hstRtcEngine.prototype.switchWhiteBoard = function (mediaId) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].switchWhiteBoard(mediaId);
  };
  /**
   *  切换白板页
   */


  hstRtcEngine.prototype.switchWhiteBoardPage = function (curPage, mediaId, needNotifyOthers) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].switchWhiteBoardPage(curPage, mediaId, needNotifyOthers);
  };
  /**
   * 上传文档
   */


  hstRtcEngine.prototype.startUpload = function (params) {
    return _main_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].startUploadDoc(params);
  };
}

/***/ }),

/***/ "./src/export/message-export.js":
/*!**************************************!*\
  !*** ./src/export/message-export.js ***!
  \**************************************/
/*! exports provided: initMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMessage", function() { return initMessage; });
/* harmony import */ var _main_message_message_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/message/message-manager */ "./src/main/message/message-manager.js");

function initMessage(hstRtcEngine) {
  /**
   * 发送单播消息
   * @param {*} params 
   */
  hstRtcEngine.prototype.sendUserMsg = function (params) {
    _main_message_message_manager__WEBPACK_IMPORTED_MODULE_0__["default"].sendUserMsg(params);
  };
  /**
   * 发送白名单消息
   * @param {*} params 
   */


  hstRtcEngine.prototype.sendGroupMsgWithWhiteList = function (params) {
    _main_message_message_manager__WEBPACK_IMPORTED_MODULE_0__["default"].sendGroupMsgWithWhiteList(params);
  };
  /**
   * 发送黑名单消息
   * @param {*} params 
   */


  hstRtcEngine.prototype.sendGroupMsgWithBlackList = function (params) {
    _main_message_message_manager__WEBPACK_IMPORTED_MODULE_0__["default"].sendGroupMsgWithBlackList(params);
  };
  /**
   * 发送广播消息
   * @param {*} params 
   */


  hstRtcEngine.prototype.sendGroupMsg = function (params) {
    _main_message_message_manager__WEBPACK_IMPORTED_MODULE_0__["default"].sendGroupMsg(params);
  };
}

/***/ }),

/***/ "./src/export/online-export.js":
/*!*************************************!*\
  !*** ./src/export/online-export.js ***!
  \*************************************/
/*! exports provided: initOnline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOnline", function() { return initOnline; });
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/promise-handler */ "./src/common/promise-handler.js");
/* harmony import */ var _main_online_online_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/online/online-manager */ "./src/main/online/online-manager.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/enums */ "./src/common/enums.js");



function initOnline(hstRtcEngine) {
  /**
   * 获取所有在线用户列表
   */
  hstRtcEngine.prototype.getOnlineUsers = function () {
    _main_online_online_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getOnlineUsers();
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_0__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_GET_ONLINE_USERS);
  };
  /**
   * 邀请其他用户加入分组
   * @param {*} params 
   */


  hstRtcEngine.prototype.invite = function (params) {
    _main_online_online_manager__WEBPACK_IMPORTED_MODULE_1__["default"].invite(params);
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_0__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_INVITE);
  };
  /**
   * 响应邀请
   * @param {*} params 
   */


  hstRtcEngine.prototype.replyInvite = function (params) {
    _main_online_online_manager__WEBPACK_IMPORTED_MODULE_1__["default"].replyInvite(params);
  };
  /**
   * 邀请方取消邀请协议
   * @param {*} params 
   */


  hstRtcEngine.prototype.cancelInvite = function (params) {
    _main_online_online_manager__WEBPACK_IMPORTED_MODULE_1__["default"].cancelInvite(params);
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_0__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_CANCEL_INVITE);
  };
}

/***/ }),

/***/ "./src/export/platform-export.js":
/*!***************************************!*\
  !*** ./src/export/platform-export.js ***!
  \***************************************/
/*! exports provided: initPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPlatform", function() { return initPlatform; });
/* harmony import */ var _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/rtc-engine */ "./src/main/rtc-engine.js");
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/promise-handler */ "./src/common/promise-handler.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/enums */ "./src/common/enums.js");



function initPlatform(HstEngine) {
  /**
   * 初始化引擎
   * @params {*} params 
   */
  HstEngine.prototype.init = function (params) {
    _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__["default"].doInit(params);
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_1__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_INIT);
  };
  /**
   * 登录
   * @params {*} params 
   */


  HstEngine.prototype.login = function (params) {
    _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__["default"].doLogin(params);
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_1__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_LOGIN);
  };
  /**
   * 加入分组
   * @params {*} groupId 
   */


  HstEngine.prototype.joinGroup = function (groupId) {
    _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__["default"].doJoin(groupId);
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_1__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_JOIN_GROUP);
  };
  /**
   * 离开分组
   */


  HstEngine.prototype.leaveGroup = function () {
    _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__["default"].doLeave();
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_1__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_LEAVE_GROUP);
  };
  /**
   * 退出
   */


  HstEngine.prototype.logout = function () {
    _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__["default"].doLogout();
    return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_1__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_LOGOUT);
  };
  /**
   * 销毁引擎
   */


  HstEngine.prototype.destroy = function () {
    _main_rtc_engine__WEBPACK_IMPORTED_MODULE_0__["default"].doDestroy();
  };
}

/***/ }),

/***/ "./src/export/subevent-export.js":
/*!***************************************!*\
  !*** ./src/export/subevent-export.js ***!
  \***************************************/
/*! exports provided: initSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSubscribe", function() { return initSubscribe; });
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/event-registry */ "./src/common/event-registry.js");

function initSubscribe(HstRtcEngine) {
  /**
   * 订阅事件
   */
  HstRtcEngine.prototype.subEvent = function () {
    console.log("Subscribe event: ", arguments[0]);
    _common_event_registry__WEBPACK_IMPORTED_MODULE_0__["default"].on.apply(_common_event_registry__WEBPACK_IMPORTED_MODULE_0__["default"], arguments);
  };
  /**
   * 取消订阅事件，参数为空则为取消订阅所有事件
   */


  HstRtcEngine.prototype.unsubEvent = function () {
    console.log("Unsubscribe event: ", arguments[0]);
    _common_event_registry__WEBPACK_IMPORTED_MODULE_0__["default"].off.apply(_common_event_registry__WEBPACK_IMPORTED_MODULE_0__["default"], arguments);
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _export_platform_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export/platform-export */ "./src/export/platform-export.js");
/* harmony import */ var _export_subevent_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./export/subevent-export */ "./src/export/subevent-export.js");
/* harmony import */ var _export_media_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export/media-export */ "./src/export/media-export.js");
/* harmony import */ var _export_online_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export/online-export */ "./src/export/online-export.js");
/* harmony import */ var _export_enums_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./export/enums-export */ "./src/export/enums-export.js");
/* harmony import */ var _export_message_export__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./export/message-export */ "./src/export/message-export.js");







function HstRtcEngine() {
  if ( true && !(this instanceof HstRtcEngine)) {
    console.error("HstRtcEngine is a constructor and should be called with the `new` keyword");
  }
}

Object(_export_subevent_export__WEBPACK_IMPORTED_MODULE_1__["initSubscribe"])(HstRtcEngine);
Object(_export_platform_export__WEBPACK_IMPORTED_MODULE_0__["initPlatform"])(HstRtcEngine);
Object(_export_media_export__WEBPACK_IMPORTED_MODULE_2__["initMedia"])(HstRtcEngine);
Object(_export_online_export__WEBPACK_IMPORTED_MODULE_3__["initOnline"])(HstRtcEngine);
Object(_export_enums_export__WEBPACK_IMPORTED_MODULE_4__["initEnums"])(HstRtcEngine);
Object(_export_message_export__WEBPACK_IMPORTED_MODULE_5__["initMessage"])(HstRtcEngine);
/* harmony default export */ __webpack_exports__["default"] = (HstRtcEngine);

/***/ }),

/***/ "./src/main/media/audio-manager.js":
/*!*****************************************!*\
  !*** ./src/main/media/audio-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/promise-handler */ "./src/common/promise-handler.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _media_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media-manager */ "./src/main/media/media-manager.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var AudioManager = /*#__PURE__*/function () {
  function AudioManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AudioManager);

    // Current microphone device
    this.curMicDevId = null; // Current speaker device

    this.curSpkDevId = null; // magic audio, 0: original

    this.audioMagicValue = 0;
    this.recvMagicAudio = false;
  }
  /**
   * 开始广播音频
   * @param {*} devId 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AudioManager, [{
    key: "startPublishAudio",
    value: function startPublishAudio(devId) {
      if (!devId) {
        // TODO：不允许默认设备
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid devId!");
        return;
      } // 保存指定的麦克风设备


      this.setCurMicDevId(devId); // 其他端SDK将音频的MediaId写死为“appdef_mic”，为了保持一致
      // 这里强制把mediaId也写死为“appdef_mic”，但是可能会有问题

      var mediaId = null;

      if (this.audioMagicValue == 0) {
        mediaId = "appdef_mic"; // 原声
      } else {
        // 变声
        mediaId = "appdef_mic_magic";
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaOper"].START_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO, mediaId); // 发布响应（暂未实现）
      // return promiseHandler(EventType.EVENT_START_PUB_AUDIO)
    }
    /**
     * 停止广播音频
     * @param {*} devId 允许不填deviceId
     */

  }, {
    key: "stopPublishAudio",
    value: function stopPublishAudio(devId) {
      var mediaId = null;

      if (this.audioMagicValue == 0) {
        mediaId = "appdef_mic"; // 原声
      } else {
        // 变声
        mediaId = "appdef_mic_magic";
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaOper"].STOP_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO, mediaId); // 取消发布响应（暂未实现）
      // return promiseHandler(EventType.EVENT_STOP_PUB_AUDIO)
    }
    /**
     * 开始接收远端音频
     * @param {*} userId 
     * @param {*} mediaId 
     */

  }, {
    key: "startReceiveAudio",
    value: function startReceiveAudio(userId, mediaId) {
      if (!userId || !mediaId) {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid srcUserId or mediaId!");
        return;
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_2__["RecvState"].START_RECV, userId, _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO, mediaId); // 可能同时接收多个音频，保证请求和响应匹配

      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_4__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_START_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_5__["getEventPostfix"])(userId, _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO, mediaId));
    }
    /**
     * 停止接收远端音频
     * @param {*} srcUserId 
     * @param {*} mediaId 
     */

  }, {
    key: "stopReceiveAudio",
    value: function stopReceiveAudio(srcUserId, mediaId) {
      if (!srcUserId || !mediaId) {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid srcUserId or mediaId!");
        return;
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_2__["RecvState"].STOP_RECV, srcUserId, _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO, mediaId);
      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_4__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_STOP_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_5__["getEventPostfix"])(srcUserId, _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO, mediaId));
    }
    /**
     * 选择扬声器设备
     * @param {*} devId 
     */

  }, {
    key: "chooseSpkDevice",
    value: function chooseSpkDevice(devId) {
      this.curSpkDevId = devId; // 更新所有downPeerConnection的扬声器设置

      var _iterator = _createForOfIteratorHelper(_media_manager__WEBPACK_IMPORTED_MODULE_6__["default"].downPcMap.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var downPc = _step.value;

          if (downPc.videoEle) {
            this.setAudioSpeaker(downPc.videoEle);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * 设置本地是否发送变声
     * @param {*} value 变声程度值，取值范围为[-12, 12]，0表示没有变声
     */

  }, {
    key: "setSendMagicAudioValue",
    value: function setSendMagicAudioValue(value) {
      if (this.audioMagicValue == value) return;
      this.audioMagicValue = value;
      _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Set send audio magic to " + value); // 可能已经有音频正在发送中

      var _iterator2 = _createForOfIteratorHelper(_media_manager__WEBPACK_IMPORTED_MODULE_6__["default"].upPcMap),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pc = _step2.value;

          var _iterator3 = _createForOfIteratorHelper(pc.upTracks),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var track = _step3.value;

              if (track.mediaType == _common_enums__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO) {
                _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendSetAudioMagic(track.streamId, value);
                break; // 每个PC最多一路音频
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * 设置是否接收变声
     * @param {*} mode 0：跟随，1：只接原声，2：只接变声
     */

  }, {
    key: "setRecvMagicAudioMode",
    value: function setRecvMagicAudioMode(mode) {
      if (mode != _common_enums__WEBPACK_IMPORTED_MODULE_2__["RecvMagicMode"].FOLLOW && mode != _common_enums__WEBPACK_IMPORTED_MODULE_2__["RecvMagicMode"].ONLY_ORIGIN && mode != _common_enums__WEBPACK_IMPORTED_MODULE_2__["RecvMagicMode"].ONLY_MAGIC) {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid recv audio magic mode: " + mode);
        return;
      }

      _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Set recv audio magic mode: " + mode);
      this.recvMagicAudio = mode;
    }
    /**
     * 设置video标签上的音频到指定扬声器
     * @param {*} videoEle 
     */

  }, {
    key: "setAudioSpeaker",
    value: function setAudioSpeaker(videoEle) {
      var _this = this;

      if (typeof videoEle.sinkId !== 'undefined') {
        videoEle.setSinkId(this.curSpkDevId).then(function () {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Set speaker " + _this.curSpkDevId + " success.");
        })["catch"](function (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Set speaker " + _this.curSpkDevId + " failed!", err);
        });
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid media element!");
      }
    }
    /**
     * 设置当前使用的麦克风设备
     * TODO: 当前这个方法没有暴露出去，而curMicDev默认是null，如果在本地没有广播过
     * 音频的前提下，远端想查看本地音频，这时候可能会出错
     * @param {*} devId 
     */

  }, {
    key: "setCurMicDevId",
    value: function setCurMicDevId(devId) {
      if (devId) {
        this.curMicDevId = devId;
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid microphone device!");
      }
    }
    /**
     * 获取当前使用的麦克风设备
     */

  }, {
    key: "getCurMicDevId",
    value: function getCurMicDevId() {
      return this.curMicDevId;
    }
    /**
     * 获取当前使用的扬声器设备
     */

  }, {
    key: "getCurSpkDevId",
    value: function getCurSpkDevId() {
      return this.curSpkDevId;
    }
    /**
     * 构建音频设备采集的constraints
     * @param {*} devId 
     */

  }, {
    key: "buildConstraints",
    value: function buildConstraints(devId) {
      var audioConstraints = {
        deviceId: devId
      };
      return {
        audio: audioConstraints
      };
    }
  }]);

  return AudioManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AudioManager());

/***/ }),

/***/ "./src/main/media/media-manager.js":
/*!*****************************************!*\
  !*** ./src/main/media/media-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/store */ "./src/main/util/store.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");
/* harmony import */ var _video_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-manager */ "./src/main/media/video-manager.js");
/* harmony import */ var _audio_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio-manager */ "./src/main/media/audio-manager.js");
/* harmony import */ var _share_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./share-manager */ "./src/main/media/share-manager.js");
/* harmony import */ var _white_board_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./white-board-manager */ "./src/main/media/white-board-manager.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");




var _class;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











/**
 * 有些处理是多个媒体类型（音频、视频、屏幕共享、电子白板）所共有的
 */

var MediaManager = (_class = /*#__PURE__*/function () {
  function MediaManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MediaManager);

    // BindId : UpPeerConnection
    this.upPcMap = new Map(); // BindId : DownPeerConnection

    this.downPcMap = new Map(); // To be restored down tracks 

    this.restoreDownTracks = new Array(); // 订阅消息处理

    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14106, this.onNotifyUserMediaState.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14109, this.onNotifyGroupMediaStates.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14110, this.onNotifyUserJoinGroup.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14111, this.onNotifyUserLeaveGroup.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(18003, this.onRecvStreamRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(18000, this.onNotifySendStreamRes.bind(this)); // 重新接收媒体

    _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].on("restoreDownTrack", this._onRestoreDownTrack.bind(this));
  }
  /**
   * 恢复媒体渲染
   * @param {*} params 
   * @returns 找到了track
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MediaManager, [{
    key: "tryRestoreMediaRender",
    value: function tryRestoreMediaRender(params) {
      var _this = this;

      if (this.restoreDownTracks.length == 0) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Empty restore tracks.");
        return false;
      }

      var track = this.restoreDownTracks[0];

      if (params.userId !== track.userId || params.mediaType !== track.mediaType || params.mediaId !== track.mediaId) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Different track.");
        return false;
      }

      if (track.videoEle) {
        this.setMediaRender(track.userId, track.mediaType, track.mediaId, track.videoEle);
      }

      this.restoreDownTracks.shift();

      if (this.restoreDownTracks.length > 0) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_5__["asyncWrapper"])(function () {
          _this._doStartReceiveMedia(_this.restoreDownTracks[0]);
        });
      }

      return true;
    }
    /**
     * 停止接收媒体
     * @param {*} params 
     */

  }, {
    key: "_doStartReceiveMedia",
    value: function _doStartReceiveMedia(params) {
      var _this2 = this;

      this.startReceiveMedia(params.userId, params.mediaType, params.mediaId).then(function () {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Start receive media success.");
      })["catch"](function (e) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Start receive media failed, err: " + e);

        _this2.restoreDownTracks.shift();
      });
    }
    /**
     * 停止接收媒体
     * @param {*} params 
     */

  }, {
    key: "_doStopReceiveMedia",
    value: function _doStopReceiveMedia(params) {
      this.stopReceiveMedia(params.userId, params.mediaType, params.mediaId).then(function () {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Start receive media success.");
      })["catch"](function (e) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Start receive media failed, err: " + e);
      });
    }
    /**
     * 恢复接受媒体的事件处理
     * @param {*} params 
     */

  }, {
    key: "_onRestoreDownTrack",
    value: function _onRestoreDownTrack(params) {
      this.restoreDownTracks.push(params);

      if (this.restoreDownTracks.length == 1) {
        this._doStartReceiveMedia(params);
      }
    }
    /**
     * 开始广播本地媒体
     * @param {*} mediaType 
     * @param {*} mediaId 
     * @param {*} params
     * @returns 无
     */

  }, {
    key: "startPublishMedia",
    value: function startPublishMedia(mediaType, mediaId, params) {
      switch (mediaType) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
          _audio_manager__WEBPACK_IMPORTED_MODULE_8__["default"].startPublishAudio(mediaId);
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
          _video_manager__WEBPACK_IMPORTED_MODULE_7__["default"].startPublishVideo(mediaId, params);
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE:
          _share_manager__WEBPACK_IMPORTED_MODULE_9__["default"].startScreenShare(params);
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD:
          _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].startPublishWhiteBoard(mediaId);
          break;

        default:
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Unknown media type: " + mediaType);
          break;
      }
    }
  }, {
    key: "stopPublishMedia",
    value:
    /**
     * 停止广播本地媒体
     * @param {*} mediaType 
     * @param {*} mediaId
     * @returns 无 
     */
    function stopPublishMedia(mediaType, mediaId) {
      switch (mediaType) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
          _audio_manager__WEBPACK_IMPORTED_MODULE_8__["default"].stopPublishAudio();
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
          _video_manager__WEBPACK_IMPORTED_MODULE_7__["default"].stopPublishVideo(mediaId);
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE:
          _share_manager__WEBPACK_IMPORTED_MODULE_9__["default"].stopScreenShare();
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD:
          _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].stopPublishWhiteBoard(mediaId);
          break;

        default:
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Unknown media type: " + mediaType);
          break;
      }
    }
  }, {
    key: "startReceiveMedia",
    value:
    /**
     * 开始接收远端媒体，FIXME：需要返回Promise
     * @param {*} userId 
     * @param {*} mediaType 
     * @param {*} mediaId 
     * @returns Promise
     */
    function startReceiveMedia(userId, mediaType, mediaId) {
      switch (mediaType) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
          return _audio_manager__WEBPACK_IMPORTED_MODULE_8__["default"].startReceiveAudio(userId, mediaId);

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
          return _video_manager__WEBPACK_IMPORTED_MODULE_7__["default"].startReceiveVideo(userId, mediaId);

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE:
          return _share_manager__WEBPACK_IMPORTED_MODULE_9__["default"].startReceiveScreenShare(userId, mediaId);

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD:
          return _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].startReceiveWhiteBoard(userId, mediaId);

        default:
          return new Promise(function (resolve, reject) {
            reject("Unknown media type: " + mediaType);
          });
      }
    }
  }, {
    key: "stopReceiveMedia",
    value:
    /**
     * 停止接收远端媒体
     * @param {*} userId 
     * @param {*} mediaType 
     * @param {*} mediaId 
     */
    function stopReceiveMedia(userId, mediaType, mediaId) {
      switch (mediaType) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
          return _audio_manager__WEBPACK_IMPORTED_MODULE_8__["default"].stopReceiveAudio(userId, mediaId);

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
          return _video_manager__WEBPACK_IMPORTED_MODULE_7__["default"].stopReceiveVideo(userId, mediaId);

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE:
          return _share_manager__WEBPACK_IMPORTED_MODULE_9__["default"].stopReceiveScreenShare(userId, mediaId);

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD:
          return _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].stopReceiveWhiteBoard(userId, mediaId);

        default:
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Unknown media type: " + mediaType);
      }
    }
    /**
     * 设置媒体渲染器
     * @param {*} userId      用户ID，可以是本地用户或远端用户 
     * @param {*} mediaType   媒体类型：音频、视频、屏幕共享、电子白板
     * @param {*} mediaId     媒体ID
     * @param {*} renderEle   HTML标签，对于白板来说是canvas，其它是video
     * @param {*} params      本地渲染有效 
     */

  }, {
    key: "setMediaRender",
    value: function setMediaRender(userId, mediaType, mediaId, renderEle, params) {
      switch (mediaType) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE:
          console.warn("Unexpected mediaType: " + mediaType);
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD:
          _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].setWhiteBoardRender(mediaId, renderEle, params);
          break;

        default:
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Unknown media type: " + mediaType);
          break;
      }
    }
  }, {
    key: "unsetMediaRender",
    value:
    /**
     * 取消设置媒体渲染器
     * @param {*} userId 
     * @param {*} mediaType FIXME：音频和视频都传入MediaType？
     * @param {*} mediaId 
     */
    function unsetMediaRender(userId, mediaType, mediaId) {
      _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].trace("Calling unsetMediaRender: " + userId + ", " + mediaType);

      switch (mediaType) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE:
          console.warn("Unexpected mediaType: " + mediaType);
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD:
          _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].unsetWhiteBoardRender(mediaId);
          break;

        default:
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Unknown media type: " + mediaType);
          break;
      }
    }
  }, {
    key: "_setMediaRender",
    value:
    /**
     * 设置音视频播放对象 
     * @param {*} videoEle
     * @param {*} streamId 
     */
    function _setMediaRender(userId, mediaType, mediaId, videoEle, videoParam) {
      if (userId == _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.userId) {
        // 本端
        if (mediaType == _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO) {
          _video_manager__WEBPACK_IMPORTED_MODULE_7__["default"].setLocalVideoRender(mediaId, videoEle, videoParam);
        } else if (mediaType == _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE) {
          _share_manager__WEBPACK_IMPORTED_MODULE_9__["default"].setLocalScreenShareRender(videoEle);
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Unexpected media type: " + mediaType);
        }
      } else {
        // 远端
        var pc = this.findDownPcByUserMeida(userId, mediaType, mediaId);

        if (pc) {
          videoEle.srcObject = pc.mediaStream;
          pc.videoEle = videoEle;

          if (this.curSpkDevId) {
            // 同时设置下扬声器
            _audio_manager__WEBPACK_IMPORTED_MODULE_8__["default"].setAudioSpeaker(videoEle);
          }
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Cannot find down peer connection!");
        }
      }
    }
  }, {
    key: "_unsetMediaRender",
    value:
    /**
     * 取消设置音视频播放对象
     * 音频不需要显式调用unset，本端没有渲染，远端停止接收即可
     * @param {*} userId 
     * @param {*} videoEle 
     */
    function _unsetMediaRender(userId, videoEle) {
      if (!videoEle || !('srcObject' in videoEle)) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Invalid videoEle!");
        return;
      }

      if (userId == _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.userId) {
        // 本端视频
        if (videoEle.srcObject) {
          var _iterator = _createForOfIteratorHelper(videoEle.srcObject.getTracks()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var track = _step.value;
              track.stop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          videoEle.srcObject = null;
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].warn("Invalid srcObject!");
        }
      } else {
        // 远端视频
        videoEle.srcObject = null;
      }
    }
    /**
     * 通知有用户加入分组
     * @param {*} msg 
     * @param {*} socket 
     */

  }, {
    key: "onNotifyUserJoinGroup",
    value: function onNotifyUserJoinGroup(msg, socket) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onUserJoinGroup", msg.user_id);
    }
    /**
     * 通知有用户退出分组
     * @param {*} msg 
     * @param {*} socket 
     */

  }, {
    key: "onNotifyUserLeaveGroup",
    value: function onNotifyUserLeaveGroup(msg, socket) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onUserLeaveGroup", msg.user_id);
    }
    /**
    * 构造事件类型
    * @param {*} operation 
    * @param {*} userId 
    * @param {*} mediaType 
    * @param {*} mediaId 
    */

  }, {
    key: "_getEventType",
    value: function _getEventType(operation, userId, mediaType, mediaId) {
      return (operation == _common_enums__WEBPACK_IMPORTED_MODULE_4__["RecvState"].START_RECV ? _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_START_RCV_MEDIA : _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_STOP_RCV_MEDIA) + Object(_common_common__WEBPACK_IMPORTED_MODULE_5__["getEventPostfix"])(userId, mediaType, mediaId);
    }
    /**
     * 开始/停止接收音视频响应
     * @param {*} data 
     * @param {*} socket 
     */

  }, {
    key: "onRecvStreamRes",
    value: function onRecvStreamRes(data, socket) {
      if (data.media_type === _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE && !data.stream_server) {
        return _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger(this._getEventType(data.recv, data.user_id, data.media_type, data.media_id), _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].NOADDR);
      }

      if (data.media_type !== _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD) {
        return; // 暂不处理接收音频、视频、屏幕共享的响应
      }

      try {
        if (data.group_id.length === 0 || data.media_id.length === 0) {
          throw "Invalid recv stream response!!!" + data;
        } // 解析websocket服务地址


        var streamServer = null;

        if (data.stream_server) {
          // streamServer = getAddrs("ws", data.stream_server);
          streamServer = data.stream_server;

          if (!streamServer) {
            throw "Cannot find webrtc gateway: " + data.stream_server;
          }
        } else {
          // throw "Cannot find 'stream_server' in msg!"
          return _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger(this._getEventType(data.recv, data.user_id, data.media_type, data.media_id), _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].NOADDR);
        }

        if (data.recv === _common_enums__WEBPACK_IMPORTED_MODULE_4__["RecvState"].START_RECV) {
          _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].onStartRecvWhiteBoardRes({
            userId: data.user_id,
            mediaType: data.media_type,
            mediaId: data.media_id,
            streamId: data.stream_id,
            streamServer: streamServer,
            streamToken: data.subscribe_token
          });
        } else {
          _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].onStopRecvWhiteBoardRes({
            userId: data.user_id,
            mediaType: data.media_type,
            mediaId: data.media_id,
            streamId: data.stream_id
          });
        }

        _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger(this._getEventType(data.recv, data.user_id, data.media_type, data.media_id), _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].SUCCESS);
      } catch (err) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error(err);
        _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger(this._getEventType(data.recv, data.user_id, data.media_type, data.media_id), _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].FAILED);
      }
    }
  }, {
    key: "onNotifySendStreamRes",
    value: function onNotifySendStreamRes(data) {
      var params = {
        streamId: data.stream_id,
        send: data.send
      };
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_12__["default"].sendNotifySendStreamRes(params);
    }
    /**
     * 通知分组内其他用户媒体状态
     * @param {*} data 
     * @param {*} socket 
     */

  }, {
    key: "onNotifyUserMediaState",
    value: function onNotifyUserMediaState(data, socket) {
      if (data.media_type != _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].SCREEN_SHARE && data.media_type != _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO && data.media_type != _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO && data.media_type != _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD) {
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].warn("Unexpected media type: ", data.media_type);
        return;
      }

      var params = {
        userId: data.user_id,
        mediaType: data.media_type,
        mediaId: data.media_id,
        mediaName: data.media_description || data.media_name
      }; // 通知用户广播/停止广播

      if (data.operation == _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaOper"].STOP_PUBLISH) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onUnPublishMedia", params); // this._doStopReceiveMedia(params); // 小程序计费
      } else if (data.operation == _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaOper"].START_PUBLISH) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onPublishMedia", params); // this._doStartReceiveMedia(params); // 小程序计费
      }
    }
    /**
     * 通知分组中全量用户及其媒体状态
     * @param {*} data 
     * @param {*} socket 
     */

  }, {
    key: "onNotifyGroupMediaStates",
    value: function onNotifyGroupMediaStates(data, socket) {
      // FIXME：在恢复的过程中，有可能媒体状态发生了改变，这里简化处理了
      if (_util_store__WEBPACK_IMPORTED_MODULE_3__["default"].restoring) {
        _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].restoring = false;
        return;
      }

      var groupUsers = [];

      var _iterator2 = _createForOfIteratorHelper(data.user_info),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var user = _step2.value;
          groupUsers.push(user.user_id);
        } // 先通知分组用户列表

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (groupUsers.length > 0) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onGroupUserList", groupUsers);
      } // 然后再通知媒体广播


      var _iterator3 = _createForOfIteratorHelper(data.user_info),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _user = _step3.value;

          if (_user.media_info.length <= 0) {
            continue;
          }

          var _iterator5 = _createForOfIteratorHelper(_user.media_info),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var media = _step5.value;
              var params = {
                userId: _user.user_id,
                mediaType: media.media_type,
                mediaId: media.media_id,
                mediaName: media.media_description
              };
              _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onPublishMedia", params); // this._doStartReceiveMedia(params); // 小程序计费
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        } // 通知白板广播

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(data.group_media),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _media = _step4.value;
          var _params = {
            userId: _media.user_id,
            mediaType: _media.media_type,
            mediaId: _media.media_id,
            mediaName: _media.media_name
          };
          _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onPublishMedia", _params); // this._doStartReceiveMedia(params)
        } // 全量推送完成

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      _common_event_registry__WEBPACK_IMPORTED_MODULE_11__["default"].trigger("onGroupPushComplete");
    }
  }]);

  return MediaManager;
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "tryRestoreMediaRender", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "tryRestoreMediaRender"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "_onRestoreDownTrack", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "_onRestoreDownTrack"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "startPublishMedia", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "startPublishMedia"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "stopPublishMedia", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "stopPublishMedia"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "startReceiveMedia", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "startReceiveMedia"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "stopReceiveMedia", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "stopReceiveMedia"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "setMediaRender", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "setMediaRender"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "unsetMediaRender", [_common_common__WEBPACK_IMPORTED_MODULE_5__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "unsetMediaRender"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (new MediaManager());

/***/ }),

/***/ "./src/main/media/share-manager.js":
/*!*****************************************!*\
  !*** ./src/main/media/share-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/promise-handler */ "./src/common/promise-handler.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _media_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media-manager */ "./src/main/media/media-manager.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/event-registry */ "./src/common/event-registry.js");




var _class;







var ShareManager = (_class = /*#__PURE__*/function () {
  function ShareManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ShareManager);

    // Screen share media stream
    this.screenShareStream = null;
    this.screenShareStreamRefCount = 0; // Make sure one screen share stream

    this.isCreatingStream = false; // User defined screen share parameters(init value is default)

    this.screenShareParam = {
      frameRate: 15,
      width: 1920,
      height: 1080,
      bitRate: 0
    };
  }
  /**
   * 开始屏幕共享
   * @param {*} shareParam { width: 640, height: 360, frameRate: 15, bitRate: 1000 }
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ShareManager, [{
    key: "startScreenShare",
    value: function startScreenShare(shareParam) {
      if (shareParam) {
        if (!('width' in shareParam) || typeof shareParam.width !== 'number') {
          console.error("No width or invalid width in shareParam!");
          return;
        }

        if (!('height' in shareParam) || typeof shareParam.height !== 'number') {
          console.error("No height or invalid height in shareParam!");
          return;
        }

        if (!('frameRate' in shareParam) || typeof shareParam.frameRate !== 'number') {
          console.error("No frameRate or invaid frameRate in shareParam!");
          return;
        }

        if (!('bitRate' in shareParam) || typeof shareParam.bitRate !== 'number') {
          console.error("No bitRate or invalid bitRate in shareParam!");
          return;
        } // 保存参数


        this.setScreenShareParam(shareParam);
        console.log("Set screen share param: ", shareParam);
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaOper"].START_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaType"].SCREEN_SHARE, "0");
    }
  }, {
    key: "stopScreenShare",
    value:
    /**
     * 停止屏幕共享
     */
    function stopScreenShare() {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaOper"].STOP_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaType"].SCREEN_SHARE, "0");
    }
  }, {
    key: "startReceiveScreenShare",
    value:
    /**
     * 开始接受远端屏幕共享
     * @param {*} userId 
     * @param {*} mediaId 
     */
    function startReceiveScreenShare(userId, mediaId) {
      return _common_promise_handler__WEBPACK_IMPORTED_MODULE_5__["hstRequest"].request({
        eventName: _common_enums__WEBPACK_IMPORTED_MODULE_3__["EventType"].EVENT_START_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["getEventPostfix"])(userId, _common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaType"].SCREEN_SHARE, mediaId),
        retryConfig: {
          num: 0,
          max: 4
        },
        requestFn: function requestFn() {
          _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_3__["RecvState"].START_RECV, userId, _common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaType"].SCREEN_SHARE, '0');
        }
      }); // protocolSender.sendRecvMediaReq(
      //   RecvState.START_RECV, 
      //   userId, 
      //   MediaType.SCREEN_SHARE, 
      //   mediaId);
      // // 可能同时接收多个共享，保证请求和响应匹配
      // return promiseHandler(EventType.EVENT_START_RCV_MEDIA + getEventPostfix(userId, MediaType.SCREEN_SHARE, mediaId));
    }
  }, {
    key: "stopReceiveScreenShare",
    value:
    /**
     * 停止接收远端屏幕共享
     * @param {*} srcUserId 
     * @param {*} mediaId 
     */
    function stopReceiveScreenShare(srcUserId, mediaId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_3__["RecvState"].STOP_RECV, srcUserId, _common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaType"].SCREEN_SHARE, mediaId);
      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_5__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_3__["EventType"].EVENT_STOP_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["getEventPostfix"])(srcUserId, _common_enums__WEBPACK_IMPORTED_MODULE_3__["MediaType"].SCREEN_SHARE, mediaId));
    }
  }]);

  return ShareManager;
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "startScreenShare", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "startScreenShare"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (new ShareManager());

/***/ }),

/***/ "./src/main/media/upload-manager.js":
/*!******************************************!*\
  !*** ./src/main/media/upload-manager.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/store */ "./src/main/util/store.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");





var UploadManager = /*#__PURE__*/function () {
  function UploadManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UploadManager);

    _util_store__WEBPACK_IMPORTED_MODULE_2__["default"].msgDispatcher.addMsgHandler(20011, this._onRecvOpenUploadMsg.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_2__["default"].msgDispatcher.addMsgHandler(20003, this._onRecvCloseUploadMsg.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_2__["default"].msgDispatcher.addMsgHandler(21001, this._onRecvTransCodeMsg.bind(this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UploadManager, [{
    key: "startUpload",
    value: function startUpload(params) {
      this._init(params);

      this.startUpload_hook.call(this);
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendOpenUpload({
        file_path: "/".concat(this.file_path, "/0.jpg"),
        size: this.size
      });
    }
  }, {
    key: "_init",
    value: function _init(params) {
      // 开始上传
      this.startUpload_hook = params.onStartUpload || function () {}; // 上传成功（jpg格式）


      this.uploadSuccess_hook = params.onUploadSuccess || function () {}; // 开始转码


      this.startTransCode_hook = params.onStartTransCode || function () {}; // 转码成功


      this.transCodeSuccess_hook = params.onTransCodeSuccess || function () {};

      this.failed_hook = params.onFiled || function () {};

      this.fileTempPath = params.file;
      this.file_name = params.file_name;
      this.size = params.file_size;
      this.upload_mode = params.upload_mode || 0;
      this.check_code = params.CheckCode;
      this.appid = params.SrvAppID;
      this.link = params.SrvAddrLink;
      this.user_id = params.UserID;
      this.convert_file_path = String(params.Guid).toUpperCase();
      this.file_path = String(params.Guid).toUpperCase();
      this.upLoadControl = false;
    }
    /**
     * 开始上传响应消息
     * @param {*} data 
     */

  }, {
    key: "_onRecvOpenUploadMsg",
    value: function _onRecvOpenUploadMsg(data) {
      var _this = this;

      if (data.code === 0) {
        if (this.upLoadControl) return;
        var _data$data = data.data,
            bucket = _data$data.bucket,
            end_point = _data$data.end_point,
            access_id = _data$data.access_id,
            signature = _data$data.signature,
            policy = _data$data.policy,
            key = _data$data.key;
        var guid = this.file_path;
        var url = "https://".concat(bucket, ".").concat(end_point);
        this.upLoadControl = true;
        setTimeout(function () {
          _this.upLoadControl = false;
        }, 1000);
        wx.uploadFile({
          url: url,
          filePath: this.fileTempPath,
          name: 'file',
          header: {
            'content-type': "multipart/form-data; boundary=".concat(guid)
          },
          formData: {
            'AccessKeyID': access_id,
            'signature': signature,
            'policy': policy,
            'key': key
          },
          success: function success(res) {
            console.log(res.statusCode); //打印响应状态码

            if (res.statusCode == '204') {
              console.warn('上传图片成功', res);
              wx.showToast({
                title: '上传成功',
                icon: '成功'
              });
              var params = {
                guid: guid,
                check_code: _this.check_code,
                appid: _this.appid,
                link: _this.link,
                file_path: "/".concat(_this.file_path, "/0.jpg"),
                file_name: _this.file_name,
                file_size: _this.size,
                user_id: _this.user_id
              };
              _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendUploadEnd(params);
            } else {
              console.log('上传图片失败', res);
              wx.showToast({
                title: '上传失败',
                icon: '失败'
              });
            }
          },
          fail: function fail(e) {
            console.log(e);
          }
        });
      } else {
        this.failed_hook.call(this, {
          code: -1,
          msg: data.msg
        });
      }
    }
    /**
     * 上传结束响应消息
     */

  }, {
    key: "_onRecvCloseUploadMsg",
    value: function _onRecvCloseUploadMsg(data) {
      if (data.code === 0) {
        if (this.file_name.includes('.jpg')) {
          this.uploadSuccess_hook.call(this, {
            board_name: this.file_name,
            convert_file_path: data.data.file_path,
            file_path: data.data.file_path,
            check_code: this.check_code,
            appid: this.appid,
            link: this.link,
            id: this.convert_file_path
          });
        } else {
          this.startTransCode_hook.call(this);
          _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendTransCodeMsg(this.file_path);
        }
      } else {
        this.failed_hook({
          code: -1,
          msg: data.msg
        });
      }
    }
    /**
     * 转码响应消息
     */

  }, {
    key: "_onRecvTransCodeMsg",
    value: function _onRecvTransCodeMsg(data) {
      if (data.code === 0) {
        data = data.data;
        this.transCodeSuccess_hook.call(this, {
          board_name: this.file_name,
          convert_file_path: data.convert_file_path,
          file_path: data.file_path,
          width: data.width,
          height: data.height,
          page: data.convert_counts
        });
      } else {
        this.failed_hook.call(this, {
          code: -1,
          msg: data.msg
        });
      }
    }
  }]);

  return UploadManager;
}(); // function getQueryString(name, str) {
//   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//   var r = str.substr(1).match(reg);
//   if (r != null) {
//   return unescape(r[2]);
//   }
//   return null;
// }


/* harmony default export */ __webpack_exports__["default"] = (new UploadManager());

/***/ }),

/***/ "./src/main/media/video-manager.js":
/*!*****************************************!*\
  !*** ./src/main/media/video-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/store */ "./src/main/util/store.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/promise-handler */ "./src/common/promise-handler.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _media_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-manager */ "./src/main/media/media-manager.js");




var _class;









var VideoManager = (_class = /*#__PURE__*/function () {
  function VideoManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VideoManager);

    // User defined video parameters
    // Media Id: { width: xx, height: xx, frameRate: xx, bitRate: xx }
    this.videoParamMap = new Map(); // Default video parameters

    this.defaultVideoParam = {
      frameRate: 15,
      width: 640,
      height: 480,
      bitRate: 0
    };
  }
  /**
   * 开始广播视频
   * @param {*} deviceId 
   * @param {*} videoParam 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VideoManager, [{
    key: "startPublishVideo",
    value: function startPublishVideo(deviceId, videoParam) {
      if (!deviceId) {
        // TODO：不允许默认设备
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid deviceId!");
        return;
      } // videoParam: { width: 640, height: 360, frameRate: 15, bitRate: 1000 }


      if (videoParam) {
        if (!('width' in videoParam) || typeof videoParam.width !== 'number') {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("No width or invalid width in videoParam!");
          return;
        }

        if (!('height' in videoParam) || typeof videoParam.height !== 'number') {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("No height or invalid height in videoParam!");
          return;
        }

        if (!('frameRate' in videoParam) || typeof videoParam.frameRate !== 'number') {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("No frameRate or invaid frameRate in videoParam!");
          return;
        }

        if (!('bitRate' in videoParam) || typeof videoParam.bitRate !== 'number') {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("No bitRate or invalid bitRate in videoParam!");
          return;
        } // 保存视频参数


        this.setVideoParam(deviceId, videoParam);
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaOper"].START_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].VIDEO, deviceId); // 发布响应（暂未实现）
      // return promiseHandler(EventType.EVENT_START_PUB_VIDEO);
    }
  }, {
    key: "stopPublishVideo",
    value:
    /**
     * 停止广播视频
     * @param {*} deviceId 
     */
    function stopPublishVideo(deviceId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaOper"].STOP_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].VIDEO, deviceId); // 取消发布响应（暂未实现）
      // return promiseHandler(EventType.EVENT_STOP_PUB_VIDEO);
    }
  }, {
    key: "startReceiveVideo",
    value:
    /**
     * 开始接收远端视频
     * @param {*} userId 
     * @param {*} mediaId 
     */
    function startReceiveVideo(userId, mediaId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["RecvState"].START_RECV, userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].VIDEO, mediaId); // 可能同时接收多个视频，保证请求和响应匹配

      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_6__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_START_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_8__["getEventPostfix"])(userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].VIDEO, mediaId));
    }
  }, {
    key: "stopReceiveVideo",
    value:
    /**
     * 停止接收远端视频
     * @param {*} userId 
     * @param {*} mediaId 
     */
    function stopReceiveVideo(userId, mediaId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_3__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["RecvState"].STOP_RECV, userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].VIDEO, mediaId);
      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_6__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_STOP_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_8__["getEventPostfix"])(userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].VIDEO, mediaId));
    }
  }]);

  return VideoManager;
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "startPublishVideo", [_common_common__WEBPACK_IMPORTED_MODULE_8__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "startPublishVideo"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "stopPublishVideo", [_common_common__WEBPACK_IMPORTED_MODULE_8__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "stopPublishVideo"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "startReceiveVideo", [_common_common__WEBPACK_IMPORTED_MODULE_8__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "startReceiveVideo"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "stopReceiveVideo", [_common_common__WEBPACK_IMPORTED_MODULE_8__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "stopReceiveVideo"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (new VideoManager());

/***/ }),

/***/ "./src/main/media/white-board-manager.js":
/*!***********************************************!*\
  !*** ./src/main/media/white-board-manager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/store */ "./src/main/util/store.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/promise-handler */ "./src/common/promise-handler.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");
/* harmony import */ var _whiteBoard_Painter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whiteBoard/Painter */ "./src/main/media/whiteBoard/Painter.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _upload_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload-manager */ "./src/main/media/upload-manager.js");




var _class;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











/**
 * 管理所有白板对象
 */

var WhiteboardManager = (_class = /*#__PURE__*/function () {
  function WhiteboardManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WhiteboardManager);

    this._init(); // 注册信令服务事件


    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(19001, this._onCreateWhiteBoardRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(19003, this._onCloseWhiteBoardRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(20005, this._onNotifyGetFileList.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(20007, this._onGetWhiteBoardFileUrlRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(30101, this._onNotifySwitchWhiteBoardRes.bind(this)); // 自动恢复白板

    _common_event_registry__WEBPACK_IMPORTED_MODULE_10__["default"].on("restoreWhiteBoard", this._onRestoreWhiteBoard.bind(this));
    return this;
  }
  /**
   * 尝试恢复白板的渲染
   * @param {*} mediaId
   * @returns 是否找到白板 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WhiteboardManager, [{
    key: "tryRestoreWhiteBoardRender",
    value: function tryRestoreWhiteBoardRender(mediaId) {
      var _this = this;

      if (this.restoreWhiteBoards.length == 0) {
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Empty restore white boards.");
        return false;
      }

      var board = this.restoreWhiteBoards[0];

      if (board.mediaId != mediaId) {
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Different white board.");
        return false;
      }

      this.setWhiteBoardRender(mediaId, board.parentEle);
      this.setDisplayMode(mediaId, board.displayMode, board.displayParam);
      this.restoreWhiteBoards.shift();

      if (this.restoreWhiteBoards.length > 0) {
        var _board = this.restoreWhiteBoards[0];
        Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["asyncWrapper"])(function () {
          _this._doStartReceiveWhiteBoard(_board.userId, _board.mediaId);
        });
        console.warn("Try to restore white board: " + _board.mediaId);
      }

      return true;
    }
    /**
     * 接收白板
     * @param {*} mediaId 
     */

  }, {
    key: "_doStartReceiveWhiteBoard",
    value: function _doStartReceiveWhiteBoard(userId, mediaId) {
      var _this2 = this;

      this.startReceiveWhiteBoard(userId, mediaId).then(function () {
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Start receive white board success.");
      })["catch"](function (e) {
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].error("Start receive white board failed, err: " + e);

        _this2.restoreWhiteBoards.shift();
      });
    }
    /**
     * 恢复白板事件处理
     * @param {*} params 
     */

  }, {
    key: "_onRestoreWhiteBoard",
    value: function _onRestoreWhiteBoard(params) {
      this.restoreWhiteBoards.push(params);

      if (this.restoreWhiteBoards.length == 1) {
        this._doStartReceiveWhiteBoard(params.userId, params.mediaId);
      }
    }
  }, {
    key: "_onNotifySwitchWhiteBoardRes",
    value: function _onNotifySwitchWhiteBoardRes(params) {
      var channel_id = params.channel_id;
      var selectMedia = this.whiteBoards.find(function (item) {
        return item.channelId === channel_id;
      });

      selectMedia._updateMsgSeq(params);
    }
    /**
     * 初始化
     */

  }, {
    key: "_init",
    value: function _init() {
      // 包含本地创建和接收远端的白板
      this.whiteBoards = new Array(); // 全局显示模式和参数

      this.displayMode = null;
      this.displayParam = null; // fileUrlMap

      this.cacheFileUrlMap = new Map();
      this.cacheTempPathMap = new Map(); // 自动恢复白板

      this.restoreWhiteBoards = new Array();
    }
    /**
     * 创建白板
     */

  }, {
    key: "createWhiteBoard",
    value: function createWhiteBoard(params) {
      var path = params.convert_file_path;

      if (path) {
        params.board_type = 1;
        params.convert_file_path = path.substr(0, path.lastIndexOf('/'));
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendCreateWhiteboardReq(params);
      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_7__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_CREATE_WHITE_BOARD)["catch"](function (err) {
        console.error('createWhiteBoard err', err);
      });
    }
    /**
     * 创建白板响应
     * @param {*} params 
     */

  }, {
    key: "_onCreateWhiteBoardRes",
    value: function _onCreateWhiteBoardRes(params) {
      if (params.result === 0) {
        this.startPublishWhiteBoard(params.board_id);
        _common_event_registry__WEBPACK_IMPORTED_MODULE_10__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_CREATE_WHITE_BOARD, _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_CREATE_WHITE_BOARD, _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_CREATE_WHITE_BOARD, params.result == 0 ? _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventResult"].SUCCESS : _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventResult"].FAILED);
      }
    }
    /**
     * 关闭白板
     * @param {*} mediaId 
     */

  }, {
    key: "closeWhiteBoard",
    value: function closeWhiteBoard(mediaId) {
      if (!mediaId) {
        console.error("Invalid mediaId!");
        return;
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendCloseWhiteboardReq(mediaId);
      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_7__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_CLOSE_WHITE_BOARD);
    }
  }, {
    key: "rotateWhiteBoard",
    value: function rotateWhiteBoard(rotateAngle, mediaId) {
      var board = this.whiteBoards.find(function (item) {
        return item.mediaId === mediaId;
      });

      if (board) {
        board.rotate(rotateAngle);
      }
    }
  }, {
    key: "switchWhiteBoard",
    value: function switchWhiteBoard(mediaId) {
      var board = this.whiteBoards.find(function (item) {
        return item.mediaId === mediaId;
      });

      if (board) {
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendGetWhiteBoardFullDataReq(board.channelId);
        board.switchBoard();
      }
    }
  }, {
    key: "getFileList",
    value: function getFileList(filePath) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendRecvBoardFileList(filePath);
    }
  }, {
    key: "switchWhiteBoardPage",
    value: function switchWhiteBoardPage(curPage, mediaId, needNotifyOthers) {
      var board = this.whiteBoards.find(function (item) {
        return item.mediaId === mediaId;
      });

      if (board) {
        board.switchBoardPage(curPage, needNotifyOthers);
      }
    }
    /**
     * 关闭白板响应
     * @param {*} params 
     */

  }, {
    key: "_onCloseWhiteBoardRes",
    value: function _onCloseWhiteBoardRes(params) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_10__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_CREATE_WHITE_BOARD, params.result == 0 ? _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventResult"].SUCCESS : _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventResult"].FAILED);
    }
    /**
     * 开始广播白板
     * @param {*} mediaId 
     */

  }, {
    key: "startPublishWhiteBoard",
    value: function startPublishWhiteBoard(mediaId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaOper"].START_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD, mediaId, 'group'); // 发布响应（暂未实现）
      // return promiseHandler(EventType.EVENT_START_PUB_WHITE_BOARD);
    }
    /**
     * 停止广播白板
     * @param {*} mediaId 
     */

  }, {
    key: "stopPublishWhiteBoard",
    value: function stopPublishWhiteBoard(mediaId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendPublishMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaOper"].STOP_PUBLISH, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD, mediaId, 'group'); // 发布响应（暂未实现）
      // return promiseHandler(EventType.EVENT_STOP_PUB_WHITE_BOARD);
    }
    /**
     * 开始接收白板
     * @param {*} userId 
     * @param {*} mediaId 
     */

  }, {
    key: "startReceiveWhiteBoard",
    value: function startReceiveWhiteBoard(userId, mediaId) {
      return _common_promise_handler__WEBPACK_IMPORTED_MODULE_7__["hstRequest"].request({
        eventName: _common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_START_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["getEventPostfix"])(userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD, mediaId),
        retryConfig: {
          num: 0,
          max: 4
        },
        requestFn: function requestFn() {
          _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["RecvState"].START_RECV, userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD, mediaId);
        }
      }); // protocolSender.sendRecvMediaReq(
      //   RecvState.START_RECV, 
      //   userId, 
      //   MediaType.WHITE_BOARD, 
      //   mediaId);
      // // 可能同时接收多个视频，保证请求和响应匹配
      // return promiseHandler(EventType.EVENT_START_RCV_MEDIA + getEventPostfix(userId, MediaType.WHITE_BOARD, mediaId));
    }
    /**
     * 停止接收白板
     * @param {*} userId 
     * @param {*} mediaId 
     */

  }, {
    key: "stopReceiveWhiteBoard",
    value: function stopReceiveWhiteBoard(userId, mediaId) {
      // 关闭远端白板时如果有背景图则删除图片缓存，否则会影响下次创建相同文档白板
      var board = this.whiteBoards.find(function (board) {
        return board.mediaId === mediaId;
      });

      if (board && board.pageStore) {
        var path = board.pageStore.getConvertFilePath();

        if (path) {
          this.cacheFileUrlMap["delete"](path);
        }
      } // 加上延时避免上面的循环还没做完消息已经发出，白板被销毁


      setTimeout(function () {
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendRecvMediaReq(_common_enums__WEBPACK_IMPORTED_MODULE_5__["RecvState"].STOP_RECV, userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD, mediaId);
      }, 100);
      return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_7__["promiseHandler"])(_common_enums__WEBPACK_IMPORTED_MODULE_5__["EventType"].EVENT_STOP_RCV_MEDIA + Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["getEventPostfix"])(userId, _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD, mediaId));
    }
    /**
     * 
     * @param {*} mediaId 
     */

  }, {
    key: "startUploadDoc",
    value: function startUploadDoc(params) {
      _upload_manager__WEBPACK_IMPORTED_MODULE_11__["default"].startUpload(params);
    }
    /**
     * 设置白板渲染器
     * @param {*} mediaId 
     * @param {*} parentEle 
     */

  }, {
    key: "setWhiteBoardRender",
    value: function setWhiteBoardRender(mediaId, renderEle, params) {
      var _iterator = _createForOfIteratorHelper(this.whiteBoards),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var board = _step.value;

          if (board.mediaId == mediaId) {
            board.setRenderElement(renderEle, params);
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].warn("Cannot find white board by mediaId: " + mediaId);
    }
    /**
     * 取消设置白板渲染器
     * @param {*} userId 
     * @param {*} mediaId 
     */

  }, {
    key: "unsetWhiteBoardRender",
    value: function unsetWhiteBoardRender(mediaId) {
      var _iterator2 = _createForOfIteratorHelper(this.whiteBoards),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var board = _step2.value;

          if (board.mediaId == mediaId) {
            board.setRenderElement(null, null);
            return;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].warn("Cannot find white board by mediaId: " + mediaId);
    }
    /**
     * 设置显示模式
     * @param {*} mediaId 
     * @param {*} mode 
     * @param {*} param 
     */

  }, {
    key: "setDisplayMode",
    value: function setDisplayMode(mediaId, mode, param) {
      if (mode != _common_enums__WEBPACK_IMPORTED_MODULE_5__["DisplayMode"].DBWZ && mode != _common_enums__WEBPACK_IMPORTED_MODULE_5__["DisplayMode"].DBSY && mode != _common_enums__WEBPACK_IMPORTED_MODULE_5__["DisplayMode"].DBSF) {
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].error("Invalid display mode: " + mode);
        return;
      }

      if (mode == _common_enums__WEBPACK_IMPORTED_MODULE_5__["DisplayMode"].DBSF) {
        if (!param) {
          _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].error("setDisplayMode param is invalid!");
          return;
        } else {
          if (!Number.isInteger(param)) {
            _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].error("setDisplayMode param should be integer!");
            return;
          }
        }
      }

      if (!mediaId) {
        // 全局设置
        var _iterator3 = _createForOfIteratorHelper(this.whiteBoards),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var board = _step3.value;
            board.setDisplayMode(mode, param);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.displayMode = mode;
        this.displayParam = param;
      } else {
        // 单独设置
        var _board2 = this._findWhiteBoard(mediaId);

        if (_board2) {
          _board2.setDisplayMode(mode, param);
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].error("Cannot find white board " + mediaId);
        }
      }
    }
    /**
     * 收到开始接收白板的响应
     * @param {*} params 
     */

  }, {
    key: "onStartRecvWhiteBoardRes",
    value: function onStartRecvWhiteBoardRes(params) {
      var board = this._findWhiteBoard(params.mediaId);

      if (board) {
        var renderEle = board.renderEle,
            parentWidth = board.parentWidth,
            parentHeight = board.parentHeight,
            displayParam = board.displayParam,
            canvasSizeChangeCallback = board.canvasSizeChangeCallback;
        var _params = {
          parentWidth: parentWidth,
          parentHeight: parentHeight,
          scaleRatio: displayParam,
          canvasSizeChange: canvasSizeChangeCallback
        };
        renderEle && board.setRenderElement(renderEle, _params);
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].info("board exits:", board);
      } else {
        var _board3 = new _whiteBoard_Painter__WEBPACK_IMPORTED_MODULE_9__["default"](params);

        this.whiteBoards.push(_board3);

        if (this.displayMode) {
          // 默认使用全局设置
          _board3.setDisplayMode(this.displayMode, this.displayParam);
        }

        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].info("Total white board count: " + this.whiteBoards.length);
      }
    }
    /**
     * 收到停止接收白板的响应
     * @param {*} params 
     */

  }, {
    key: "onStopRecvWhiteBoardRes",
    value: function onStopRecvWhiteBoardRes(params) {
      var board = this._findWhiteBoard(params.mediaId);

      if (board) {
        for (var i = 0; i < this.whiteBoards.length; i++) {
          if (this.whiteBoards[i].mediaId == params.mediaId) {
            // this.whiteBoards[i].close();
            this.whiteBoards.splice(i, 1);
            break;
          }
        }
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_8__["default"].error("Cannot find White baord " + params.mediaId);
      }
    }
    /**
     * 重新初始化
     */

  }, {
    key: "reinitialize",
    value: function reinitialize() {
      var _iterator4 = _createForOfIteratorHelper(this.whiteBoards),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var board = _step4.value;
          board.close();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this._init();
    }
    /**
     * 移除指定白板
     * @param {*} mediaId 
     */

  }, {
    key: "removeWhiteBoard",
    value: function removeWhiteBoard(mediaId) {
      this.whiteBoards.forEach(function (board, index, arr) {
        if (board.mediaId == mediaId) {
          arr.splice(index, 1);
          return false;
        }
      });
    }
    /**
     * 获取指定白板
     * @param {*} mediaId 
     */

  }, {
    key: "getWhiteBoard",
    value: function getWhiteBoard(mediaId) {
      return this._findWhiteBoard(mediaId);
    }
    /**
     * 查找白板
     * @param {*} mediaId 
     */

  }, {
    key: "_findWhiteBoard",
    value: function _findWhiteBoard(mediaId) {
      var _iterator5 = _createForOfIteratorHelper(this.whiteBoards),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var board = _step5.value;

          if (board.mediaId == mediaId) {
            return board;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return null;
    }
    /**
     * 获取白板图片响应
     * @param {*} data 
     */

  }, {
    key: "_onGetWhiteBoardFileUrlRes",
    value: function _onGetWhiteBoardFileUrlRes(data) {
      if (data.code === 0) {
        var filePath = data.data.file_path;
        var rootPath = filePath.substr(0, filePath.lastIndexOf('/'));
        var fileUrls = this.cacheFileUrlMap.get(rootPath) || new Map(); // 微信小程序只能访问https

        var httpsUrl = data.data.url;

        if (data.data.url.search("https") == -1) {
          httpsUrl = data.data.url.replace(/^http/, "https");
        }

        fileUrls.set(data.data.file_path, httpsUrl);
        this.cacheFileUrlMap.set(rootPath, fileUrls);
      } else {
        console.warn('获取图片下载url失败');
      }
    }
  }, {
    key: "_onNotifyGetFileList",
    value: function _onNotifyGetFileList(data) {
      var fileList = data.data.file_list;
      _common_event_registry__WEBPACK_IMPORTED_MODULE_10__["default"].trigger('onGetFileList', fileList);
    }
    /**
     * 
     * @param {*} file_path
     */

  }, {
    key: "_getFileUrl",
    value: function _getFileUrl(file_path) {
      // 地址存储过 不用查询
      if (!file_path) return;
      var rootPath = file_path.substr(0, file_path.lastIndexOf('/'));
      if (this.cacheFileUrlMap.get(rootPath) && this.cacheFileUrlMap.get(rootPath).get(file_path)) return;
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_4__["default"].sendGetWhiteBoardFileUrlReq(file_path);
    }
  }]);

  return WhiteboardManager;
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "tryRestoreWhiteBoardRender", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "tryRestoreWhiteBoardRender"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "_onRestoreWhiteBoard", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "_onRestoreWhiteBoard"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "setDisplayMode", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "setDisplayMode"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "onStopRecvWhiteBoardRes", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "onStopRecvWhiteBoardRes"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "reinitialize", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "reinitialize"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (new WhiteboardManager());

/***/ }),

/***/ "./src/main/media/whiteBoard/Painter.js":
/*!**********************************************!*\
  !*** ./src/main/media/whiteBoard/Painter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_new_webscoket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/new_webscoket */ "./src/main/util/new_webscoket.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _util_msg_dispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/msg-dispatcher */ "./src/main/util/msg-dispatcher.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/common */ "./src/common/common.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/logger */ "./src/common/logger.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _page_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-store */ "./src/main/media/whiteBoard/page-store.js");
/* harmony import */ var _white_board_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../white-board-manager */ "./src/main/media/white-board-manager.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./render/render */ "./src/main/media/whiteBoard/render/render.js");
/* harmony import */ var _write_write__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./write/write */ "./src/main/media/whiteBoard/write/write.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _common_promise_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/promise-handler */ "./src/common/promise-handler.js");




var _class;













var EDIT_WHITE_BOARD = 'edit_white_board';
/**
 * 只读的白板对象（仅接收白板数据）
 */

var Painter = (_class = /*#__PURE__*/function () {
  function Painter(params) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Painter);

    this.isClosing = false;
    this.isSelect = false;
    this.isRotate = false;
    this.isSwitchPage = false;
    this.rotateAngle = 0; // 页数据存储

    this.pageStore = null;
    this.render = null; // 是否是第一次获取全量数据

    this.firstFullData = true; // 缩放比例

    this.scaleRatio = 1; // 白板的原始宽高

    this.width = 0;
    this.height = 0;
    this.write = null; // Canvas父标签宽高

    this.parentWidth = 0;
    this.parentHeight = 0; // Canvas标签宽高

    this.canvasWidth = 0;
    this.canvasHeight = 0; // Canvas

    this.canvasEle = null;
    this.canvasCtx = null;
    this.canvasSizeChangeCallback = null; // Canvas的CSS样式大小和位置

    this.canvasLeft = 0;
    this.canvasTop = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0; // 缓存全量数据

    this.sourcePaints = [];
    this.firstGetFullData = false; // 服务器发送的消息序列号

    this.msg_seq_id = null; // 本地发送消息序列号

    this.local_seq_id = this.msg_seq_id; // 显示模式和参数

    this.displayMode = _common_enums__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].DBSY;
    this.displayParam = null; // 保存构建参数

    this.userId = params.userId;
    this.mediaId = params.mediaId;
    this.mediaName = params.mediaName;
    this.streamId = params.streamId;
    this.streamToken = params.streamToken;
    this.streamServer = params.streamServer;
    this.channelId = '';
    this.seqId = parseInt(Math.random() * (1000 - 3000) + 3000); // 注册媒体服务事件

    this.msgDispatcher = new _util_msg_dispatcher__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.msgDispatcher.addMsgHandler(30002, this._editRes.bind(this));
    this.msgDispatcher.addMsgHandler(31000, this._dealAmendData.bind(this)); // 直线

    this.msgDispatcher.addMsgHandler(31002, this._dealAmendData.bind(this)); // 曲线

    this.msgDispatcher.addMsgHandler(30103, this._mouseMove.bind(this)); // 鼠标点

    this.msgDispatcher.addMsgHandler(31004, this._dealAmendData.bind(this)); // 矩形 圆角矩形 椭圆

    this.msgDispatcher.addMsgHandler(31006, this._dealAmendData.bind(this)); // 文字

    this.msgDispatcher.addMsgHandler(31008, this._dealAmendData.bind(this)); // 图片

    this.msgDispatcher.addMsgHandler(30200, this._pageChangeHandle.bind(this)); // 切页

    this.msgDispatcher.addMsgHandler(30202, this._moveGraph.bind(this)); // 移动

    this.msgDispatcher.addMsgHandler(30000, this._heartBeat.bind(this));
    this.msgDispatcher.addMsgHandler(30004, this._dealFullData.bind(this));
    this.msgDispatcher.addMsgHandler(19005, this._processLoginResp.bind(this));
    this.msgDispatcher.addMsgHandler(101, this._onConnectSuccess.bind(this)); //监听通道建立成功
    // 创建WebSocket连接

    this.websocket = _util_new_webscoket__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.websocket.createProxyConnect({
      backward_addr: this.streamServer,
      handler: this.msgDispatcher,
      seq_id: this.seqId,
      closed: this._onWebsocketClosed.bind(this),
      error: this._onWebsocketError.bind(this)
    });
    return this;
  }
  /**
   * 登录接收通道响应
   * @param {*} msg 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Painter, [{
    key: "_processLoginResp",
    value: function _processLoginResp(msg) {
      if (msg.result != 0) {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn("Login white board receive channel failed!");
      }
    }
    /**
     * WebSocket建立成功
     */

  }, {
    key: "_onWebsocketOpen",
    value: function _onWebsocketOpen(channelId) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendLoginRecvChannelReq({
        mediaType: _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD,
        mediaId: "",
        streamId: this.streamId,
        streamToken: this.streamToken,
        channelId: channelId
      });
    }
    /**
     * WebSocekt关闭
     */

  }, {
    key: "_onWebsocketClosed",
    value: function _onWebsocketClosed() {
      var _this = this;

      if (!this.isClosing) {
        if (this.websocket.reconnectNum < 10) {
          setTimeout(function () {
            _this.websocket.reconnect({
              backward_addr: _this.streamServer,
              handler: _this.msgDispatcher,
              seq_id: _this.seqId,
              closed: _this._onWebsocketClosed.bind(_this),
              error: _this._onWebsocketError.bind(_this)
            });
          }, 1000);
        } else {
          // throw error  
          _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger('onError');
        }
      } // if (!this.isClosing) {
      //   asyncWrapper(()=>{eventRegistry.trigger("restoreWhiteBoard", {
      //     userId: this.userId,
      //     mediaId: this.mediaId,
      //     parentEle: this.parentEle,
      //     displayMode: this.displayMode,
      //     displayParam: this.displayParam})
      //   })
      //   this.close();
      // }

    }
    /**
     * WebSocket错误
     */

  }, {
    key: "_onWebsocketError",
    value: function _onWebsocketError() {}
  }, {
    key: "_onConnectSuccess",
    value: function _onConnectSuccess(msg, socket) {
      console.warn('_onConnectSuccess msg', msg);
      var result = msg.result,
          channel_id = msg.channel_id,
          seq = msg.seq;

      if (result === 0) {
        if (seq === this.seqId) {
          this.channelId = channel_id;

          this._onWebsocketOpen(channel_id);
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].info('proxyChannel has exist');
        }
      }
    }
  }, {
    key: "switchBoard",
    value: function switchBoard() {
      // 切换白板时canvasCtx里面canvas的宽高没有变化，需要手动重新赋值
      this.canvasCtx.canvas.width = this.canvasWidth;
      this.canvasCtx.canvas.height = this.canvasHeight;
      this.canvasSizeChangeCallback && this.canvasSizeChangeCallback(this.canvasLeft, this.canvasTop, this.canvasWidth, this.canvasHeight);
    }
    /**
     * 设置显示模式
     * @param {*} mode 
     * @param {*} param 
     */

  }, {
    key: "setDisplayMode",
    value: function setDisplayMode(mode, param) {
      if (this.displayMode != mode // 显示模式改变
      || mode == _common_enums__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].DBSF && param && this.displayParam != param) {
        // 等比缩放参数改变
        this.displayMode = mode;
        this.displayParam = param;

        this._showWhiteBoard();
      }
    }
    /**
     * 等比完整显示
     */

  }, {
    key: "_showWhiteBoardDbwz",
    value: function _showWhiteBoardDbwz() {
      // 计算宽高比
      var showRatio = this.parentHeight / this.parentWidth.toFixed(6);
      var dataRatio = this.height / this.width.toFixed(6); // 显示窗口比数据窗口显得更加修长，则基于宽度进行缩放

      if (showRatio > dataRatio) {
        // 设置Canvas宽高
        this.canvasWidth = this.parentWidth;
        this.canvasHeight = this.height * this.parentWidth / this.width.toFixed(6); // 设置Canvas位置

        this.canvasLeft = 0;
        this.canvasTop = (this.parentHeight - this.canvasHeight) / 2;
      } else {
        // 显示窗口比数据窗口显得更加扁平，则基于高度进行缩放
        // 设置Canvas宽高
        this.canvasWidth = this.width * this.parentHeight / this.height.toFixed(6);
        this.canvasHeight = this.parentHeight; // 设置Canvas位置

        this.canvasLeft = (this.parentWidth - this.canvasWidth) / 2;
        this.canvasTop = 0;
      } // 通知上层应用调整Canvas宽高


      this.canvasSizeChangeCallback(this.canvasLeft, this.canvasTop, this.canvasWidth, this.canvasHeight); // 更新缩放比例，供显示的时候使用

      this.scaleRatio = this.canvasHeight / this.height.toFixed(6);
      this.canvasEle.width = this.canvasWidth;
      this.canvasEle.height = this.canvasHeight;

      this._refreshRender();
    }
    /**
     * 等比适应显示
     */

  }, {
    key: "_showWhiteBoardDbsy",
    value: function _showWhiteBoardDbsy() {
      // 计算宽高比
      var showRatio = this.parentHeight / Number(this.parentWidth).toFixed(6);
      var dataRatio = this.height / Number(this.width).toFixed(6); // 显示窗口比数据窗口显得更加修长，则基于高度进行缩放

      if (showRatio > dataRatio) {
        // 设置Canvas宽高
        this.canvasWidth = this.width * this.parentHeight / Number(this.height).toFixed(6);
        this.canvasHeight = this.parentHeight; // 设置Canvas位置

        this.canvasLeft = 0;
        this.canvasTop = 0;
      } else {
        // 显示窗口比数据窗口显得更加扁平，则基于宽度进行缩放
        // 设置Canvas宽高
        this.canvasWidth = this.parentWidth;
        this.canvasHeight = this.height * this.parentWidth / Number(this.width).toFixed(6); // 设置Canvas位置

        this.canvasLeft = 0;
        this.canvasTop = 0;
      }

      var _dealCanvasSize = Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["dealCanvasSize"])(this.canvasWidth, this.canvasHeight),
          width = _dealCanvasSize.width,
          height = _dealCanvasSize.height;

      this.canvasWidth = Number(width).toFixed(6);
      this.canvasHeight = Number(height).toFixed(6); // 通知上层应用调整Canvas宽高

      this.canvasSizeChangeCallback(this.canvasLeft, this.canvasTop, this.canvasWidth, this.canvasHeight); // 更新缩放比例，供显示的时候使用

      this.scaleRatio = this.canvasHeight / this.height.toFixed(6); // 更新Canvas宽高

      this.canvasEle.width = this.canvasWidth;
      this.canvasEle.height = this.canvasHeight;

      this._refreshRender();
    }
    /**
     * 等比缩放显示
     */

  }, {
    key: "_showWhiteBoardDbsf",
    value: function _showWhiteBoardDbsf() {
      // 设置Canvas宽高
      this.canvasWidth = this.width * this.displayParam.toFixed(6) / 100;
      this.canvasHeight = this.height * this.displayParam.toFixed(6) / 100; // 设置Canvas位置

      if (this.canvasWidth >= this.parentWidth) {
        this.canvasLeft = 0; // this.parentEle.style.overflowX = 'scroll';
      } else {
        this.canvasLeft = (this.parentWidth - this.canvasWidth) / 2; // this.parentEle.style.overflowX = 'hidden';
      }

      if (this.canvasHeight >= this.parentHeight) {
        this.canvasTop = 0; // this.parentEle.style.overflowY = 'scroll';
      } else {
        this.canvasTop = (this.parentHeight - this.canvasHeight) / 2; // this.parentEle.style.overflowY = 'hidden';
      } // 通知上层应用调整Canvas宽高


      this.canvasSizeChangeCallback(this.canvasLeft, this.canvasTop, this.canvasWidth, this.canvasHeight); // 更新缩放比例

      this.scaleRatio = this.displayParam.toFixed(6) / 100; // 更新Canvas宽高

      this.canvasEle.width = this.canvasWidth;
      this.canvasEle.height = this.canvasHeight;

      this._refreshRender();
    }
    /**
     * 渲染白板
     */

  }, {
    key: "_showWhiteBoard",
    value: function _showWhiteBoard() {
      if (!this.canvasEle || !this.canvasCtx) {
        console.warn("Invalid canvas render!");
        return;
      } // 绘制背景图片


      if (this.pageStore && this.pageStore.getConvertFilePath()) {
        this.render && this.render._insertImage();
      } // 绘制图形


      if (this.displayMode == _common_enums__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].DBWZ) {
        this._showWhiteBoardDbwz();
      } else if (this.displayMode == _common_enums__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].DBSY) {
        this._showWhiteBoardDbsy();
      } else if (this.displayMode == _common_enums__WEBPACK_IMPORTED_MODULE_4__["DisplayMode"].DBSF) {
        this._showWhiteBoardDbsf();
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Unknown display mode: " + this.displayMode);
      }
    }
    /**
    * 设置Canvas父节点
    * @param {*} parentEle 
    */

  }, {
    key: "setRenderElement",
    value: function setRenderElement(renderEle, params) {
      _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn("Set render element: " + JSON.stringify(params));
      _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn("renderEle", [renderEle]);

      if (renderEle) {
        this.canvasEle = renderEle; // this.canvasEle.width = this.width
        // this.canvasEle.height = this.height

        this.parentWidth = params.parentWidth;
        this.parentHeight = params.parentHeight;

        if (!params.parentWidth || !params.parentWidth) {
          var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
              screenWidth = _wx$getSystemInfoSync.screenWidth,
              screenHeigh = _wx$getSystemInfoSync.screenHeigh;

          this.parentWidth = screenWidth;
          this.parentHeight = screenHeigh;
        }

        this.displayParam = params.scaleRatio || 1;
        this.canvasSizeChangeCallback = params.canvasSizeChange; // 获取Canvas上下文

        this.canvasCtx = this.canvasEle.getContext('2d');

        if (this.pageStore) {
          this.pageStore = new _page_store__WEBPACK_IMPORTED_MODULE_9__["default"](this.sourcePaints);
          this.render = new _render_render__WEBPACK_IMPORTED_MODULE_11__["default"](this, this.pageStore);
          this.write = new _write_write__WEBPACK_IMPORTED_MODULE_12__["default"](this, this.pageStore);
        } // 设置父节点后立即显示


        this._showWhiteBoard();
      } else {
        // 清除画布图元
        this._emptyCanvas(); // 移除Canvas节点


        if (this.canvasEle) {
          this.canvasEle.width = 0;
          this.canvasEle.height = 0;
          this.canvasCtx = null;
          this.canvasEle = null;
        }

        this.canvasSizeChangeCallback = null;
        this.parentWidth = 0;
        this.parentHeight = 0;
        throw new Error('can not find canvasEle!!');
      }
    }
    /**
     * 初始化canvas画板
     * @param {*} boardInfo 
     */

  }, {
    key: "_initCanvas",
    value: function _initCanvas(boardInfo) {
      // 保存白板逻辑大小
      this.width = boardInfo.width;
      this.height = boardInfo.height; // 先清除一下白板内容

      if (this.canvasCtx) {
        this.canvasCtx.clearRect(0, 0, boardInfo.width, boardInfo.height);
      } // 获取图片URL（不一次性请求所有图片）
      // wbManager._getFileUrl(boardInfo.convert_file_path, boardInfo.page)
      // 绘制背景图片


      if (this.pageStore && this.pageStore.getConvertFilePath()) {
        this.render && this.render._insertImage();
      } // 绘制图形


      this._refreshRender();
    }
    /**
     * 等待从服务器获取图片URL
     */

  }, {
    key: "_waitGetImageUrl",
    value: function _waitGetImageUrl() {
      var convertPath = this.pageStore.getConvertFilePath();
      return new Promise(function (resolve, reject) {
        var count = 0;
        var handle = setInterval(function () {
          ++count;

          if (_white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].cacheFileUrlMap.get(convertPath)) {
            clearInterval(handle);
            resolve();
          } else {
            if (count > 10) {
              // 最多等待5秒
              clearInterval(handle);
              reject("等待获取图片URL失败");
            }
          }
        }, 500);
      });
    }
    /**
     * 插入背景图片
     */

  }, {
    key: "_drawImage",
    value: function _drawImage() {
      var self = this;
      var convertPath = this.pageStore.getConvertFilePath();
      var rootPath = convertPath;
      var curPage = this.pageStore.getCurPage();
      var fullPath = convertPath;

      if (!String(fullPath).toLowerCase().includes('.jpg')) {
        fullPath = "".concat(convertPath, "/").concat(curPage, ".jpg");
      } else {
        rootPath = convertPath.substr(0, convertPath.lastIndexOf('/'));
      }

      return new Promise(function (resolve, reject) {
        var imgUrl = _white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].cacheFileUrlMap.get(rootPath).get(fullPath);
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].info('imgUrl');
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].info(imgUrl);
        wx.downloadFile({
          url: imgUrl,
          timeout: 5000,
          success: function success(res) {
            _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].info('downloadFile res');
            _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].info(JSON.stringify(res));

            if (res.statusCode === 200 && self.canvasEle) {
              var seal = self.canvasEle.createImage();
              seal.src = res.tempFilePath;

              seal.onload = function () {
                try {
                  _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].info("加载图片成功");

                  if (self.canvasCtx) {
                    self.canvasCtx.drawImage(seal, 0, 0, self.canvasWidth, self.canvasHeight);
                  }

                  resolve();
                } catch (err) {
                  _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error('draw image error', err);
                }
              };

              seal.onerror = function (res) {
                _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("加载图片失败", res);
                reject();
              };
            }
          },
          fail: function fail(err) {
            _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn("download image failed!");
            _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn(err);
            reject();
          }
        });
      });
    }
    /**
     * 重绘render，需要保证背景图片比图元先绘制
     */

  }, {
    key: "_refreshRender",
    value: function _refreshRender() {
      var _this2 = this;

      var self = this;

      self._emptyCanvas();

      if (self.pageStore && self.pageStore.getConvertFilePath()) {
        self._waitGetImageUrl().then(function () {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Image url is ready.");

          self._drawImage().then(function () {
            _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Draw image finished.");
            _this2.render && _this2.render._drawAllPaint();
          })["catch"](function () {
            _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Draw image failed!");
          });
        })["catch"](function (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn(err);
        });
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("无需绘制背景图片");
        this.render && this.render._drawAllPaint();
      }
    }
    /**
     * 清除画板
     */

  }, {
    key: "_emptyCanvas",
    value: function _emptyCanvas() {
      if (this.canvasCtx) {
        this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      }
    }
    /**
    * 全量重新绘图
    */

  }, {
    key: "_drawAllPaint",
    value: function _drawAllPaint() {
      var _this3 = this;

      if (this.pageStore) {
        var paintObjs = this.pageStore.findPagePaints(this.pageStore.getCurPage());
        paintObjs.map(function (item) {
          _this3._drawPaint(item.type, item[item.type]);
        });
      }
    }
    /**
     * 增量绘图
     * @param {*} pageData 
     * @param {*} paintObj 
     */

  }, {
    key: "_drawAmendData",
    value: function _drawAmendData(pageData, paintObj) {
      if (paintObj.type !== _common_enums__WEBPACK_IMPORTED_MODULE_4__["Graphics"].CURVE) {
        this._emptyCanvas();

        this._drawAllPaint();
      } else {
        // 只需绘制修改图元
        var paint = this.pageStore.findPaintByGid(pageData, paintObj[paintObj.type].gid);

        if (paint) {
          this._drawPaint(paint.type, paint[paint.type]);
        }
      }
    }
    /**
     * 修改/删除/新增 图元
     * @param {*} paintObj 
     */

  }, {
    key: "_dealAmendData",
    value: function _dealAmendData(paintObj) {
      if (paintObj.channel_id !== this.channelId) return;

      this._updateMsgSeq(paintObj);

      this.render && this.render.dealAmendData(paintObj);
    }
    /**
     * 页变化
     * @param {*} pageObj 
     */

  }, {
    key: "_pageChangeHandle",
    value: function _pageChangeHandle(pageObj) {
      if (pageObj.channel_id !== this.channelId) return;

      this._updateMsgSeq(pageObj);

      this.render && this.render.pageChange(pageObj);
    }
    /**
     * 移动图元
     * @param {*} paintObj 
     */

  }, {
    key: "_moveGraph",
    value: function _moveGraph(paintObj) {
      this._updateMsgSeq(paintObj);

      this.render && this.render.moveGraph(paintObj);
    }
    /**
     * 鼠标移动
     * @param {*} paintObj 
     */

  }, {
    key: "_mouseMove",
    value: function _mouseMove(paintObj) {
      this._updateMsgSeq(paintObj);

      var rotate_angle = paintObj.rotate_angle,
          cur_page = paintObj.cur_page;

      if (rotate_angle || rotate_angle === 0) {
        this.rotateAngle = rotate_angle;
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger('shareOperation', {
          userId: this.userId,
          mediaId: this.mediaId,
          rotateAngle: rotate_angle,
          type: 'rotate'
        });
      }

      if (cur_page || cur_page === 0) {
        this._pageChangeHandle(paintObj);
      }
    } // 编辑响应

  }, {
    key: "_editRes",
    value: function _editRes(data) {
      if (data.channel_id !== this.channelId) return;
      this.pageStore.editConfig.id = data.edit_id;

      if (this.isSelect) {
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendSwitchWhiteBoard(data.edit_id, this.channelId);
        this.isSelect = false;
      } else if (this.isRotate) {
        var params = {
          edit_id: data.edit_id,
          rotateAngle: this.rotateAngle
        };
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendChangeWhiteBoardProperty(params, this.channelId);
        this.isRotate = false;
      } else if (this.isSwitchPage) {
        var _params = {
          edit_id: this.pageStore.editConfig.id,
          cur_page: this.pageStore.getCurPage()
        };
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendChangeWhiteBoardProperty(_params, this.channelId);
        this.isSwitchPage = false;
      } else {
        this.pageStore.editConfig.status = true;
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(EDIT_WHITE_BOARD, 0, true);
      }
    } // select() {
    //   if (this.pageStore && this.pageStore.editConfig && this.pageStore.editConfig.id) {
    //     protocolSender.sendSwitchWhiteBoard(this.pageStore.editConfig.id, this.channelId)
    //   } else {
    //     this.isSelect = true
    //     protocolSender.sendOpenEdit(this.channelId)
    //   }
    // }

  }, {
    key: "rotate",
    value: function rotate(rotateAngle) {
      this.rotateAngle = rotateAngle;

      if (this.pageStore.editConfig.id) {
        var params = {
          edit_id: this.pageStore.editConfig.id,
          rotateAngle: rotateAngle
        };
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendChangeWhiteBoardProperty(params, this.channelId);
      } else {
        this.isRotate = true;
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendOpenEdit(this.channelId);
      }
    }
  }, {
    key: "switchBoardPage",
    value: function switchBoardPage(curPage, needNotifyOthers) {
      this.pageStore.setCurPage(curPage);

      if (needNotifyOthers) {
        if (this.pageStore.editConfig.id) {
          var params = {
            edit_id: this.pageStore.editConfig.id,
            cur_page: curPage
          };
          _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendChangeWhiteBoardProperty(params, this.channelId);
        } else {
          this.isSwitchPage = true;
          _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendOpenEdit(this.channelId);
        }
      } else {
        if (this.pageStore && this.pageStore.getConvertFilePath()) {
          this.render && this.render._insertImage();
        }

        this._refreshRender();
      }
    }
    /**
     * 关闭白板
     */

  }, {
    key: "close",
    value: function close() {
      _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Close white board: " + this.mediaId);
      this.isClosing = true;
      this.pageStore = null;
      this.msgDispatcher = null;

      if (this.intervalHandle) {
        clearInterval(this.intervalHandle);
        this.intervalHandle = null;
      }

      if (this.parentEle && this.canvasEle) {
        this.parentEle.removeChild(this.canvasEle); //this.parentEle = null;

        this.canvasEle = null;
      }

      if (this.websocket) {
        this.websocket.close();
        this.websocket = null;
      } // let params = {
      //   userId: null,
      //   mediaType: MediaType.WHITE_BOARD,
      //   mediaId: this.mediaId,
      //   mediaName: this.pageStore.getBoardName()
      // };
      // eventRegistry.trigger("onUnPublishMedia", params);

    }
    /**
     * 处理全量数据
     * @param {*} msg 
     */

  }, {
    key: "_dealFullData",
    value: function _dealFullData(msg) {
      if (msg.channel_id !== this.channelId) return; // 有可能会有多个消息，先缓存

      this.sourcePaints = this.sourcePaints.concat(msg.data); // 全量数据同步完成

      if (msg.sync_end) {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Get white board full data complete.");
        this.pageStore = new _page_store__WEBPACK_IMPORTED_MODULE_9__["default"](this.sourcePaints);
        this.render = new _render_render__WEBPACK_IMPORTED_MODULE_11__["default"](this, this.pageStore);
        this.write = new _write_write__WEBPACK_IMPORTED_MODULE_12__["default"](this, this.pageStore);

        if (this.sourcePaints[0].board) {
          this._initCanvas(this.sourcePaints[0].board);
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("Invalid source paints: " + JSON.stringify(this.sourcePaints));
          this.sourcePaints = [];
          return;
        } // 通知上层开始渲染


        if (this.firstFullData) {
          if (!_white_board_manager__WEBPACK_IMPORTED_MODULE_10__["default"].tryRestoreWhiteBoardRender(this.mediaId)) {
            var board = this.sourcePaints[0].board;
            var rotateAngle = board.property && board.property.rotate_angle || 0;

            var _JSON$parse = JSON.parse(board.user_data),
                _JSON$parse$rights_in = _JSON$parse.rights_index,
                rights_index = _JSON$parse$rights_in === void 0 ? 0 : _JSON$parse$rights_in,
                name = _JSON$parse.name,
                ex_name = _JSON$parse.ex_name;

            var boardName = name;

            if (ex_name && !String(boardName).includes(String(ex_name))) {
              boardName = "".concat(name, ".").concat(ex_name);
            }

            _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger("onRemoteMediaAdd", {
              userId: this.userId,
              mediaType: _common_enums__WEBPACK_IMPORTED_MODULE_4__["MediaType"].WHITE_BOARD,
              mediaId: this.mediaId,
              rotateAngle: rotateAngle,
              rightIndex: rights_index,
              mediaName: boardName || this.pageStore.getBoardName(),
              totalPage: this.pageStore.getPageCount(),
              curPage: this.pageStore.getCurPage()
            });
          }

          this.firstFullData = false;
        }

        this.sourcePaints = [];
      }
    }
  }, {
    key: "_updateMsgSeq",
    value: function _updateMsgSeq(msg) {
      var channel_id = msg.channel_id,
          seq_id = msg.seq_id;

      if (channel_id === this.channelId) {
        this.msg_seq_id = seq_id;
      }
    }
    /**
     * 检查是否有丢消息，如果消息序列号异常，需要重新拉取全量数据
     * @param {*} msg 
     */

  }, {
    key: "_checkMsgSeq",
    value: function _checkMsgSeq(msg) {
      var seq_id = msg.seq_id;

      if (!this.firstGetFullData || !this.msg_seq_id // 第一次收到心跳
      || this.msg_seq_id !== null && seq_id - this.msg_seq_id != 1) {
        // 序列号不连续
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendGetWhiteBoardFullDataReq(this.channelId);
        this.firstGetFullData = true;
      }

      this.msg_seq_id = seq_id;
      this.local_seq_id = this.msg_seq_id;
    }
    /**
     * 心跳
     * @param {*} msg 
     */

  }, {
    key: "_heartBeat",
    value: function _heartBeat(msg) {
      if (msg.channel_id === this.channelId) {
        this._checkMsgSeq(msg);
      }
    }
    /**
    * 
    * @param {*} type 图型 
    * @param {*} params  图型数据
    * @param {*} action 1 新增 2 修改  3 删除 5 结束画线
    */

  }, {
    key: "_sendGraphMsg",
    value: function _sendGraphMsg(type, params, action) {
      var msg = {
        type: type,
        seq_id: ++this.local_seq_id,
        edit_id: this.pageStore.editConfig.id,
        channelId: this.channelId
      };
      params.action = action;
      params.line_shape = 0;
      msg[type] = params;

      if (type === _common_enums__WEBPACK_IMPORTED_MODULE_4__["Graphics"].LINE) {
        msg.id = 31000;
      } else if (type === _common_enums__WEBPACK_IMPORTED_MODULE_4__["Graphics"].CURVE || type === _common_enums__WEBPACK_IMPORTED_MODULE_4__["Graphics"].MASK_CURVE) {
        msg.id = 31002;
      } else if (type === _common_enums__WEBPACK_IMPORTED_MODULE_4__["Graphics"].TEXT) {
        msg.id = 31006;
      } else if (type === _common_enums__WEBPACK_IMPORTED_MODULE_4__["Graphics"].GMOV) {
        delete params.action;
        msg.id = 30202;
      }

      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendGraphMsg(msg);
    }
    /**
     * 清空白板
     */

  }, {
    key: "clear",
    value: function clear() {
      var params = {
        curPage: this.pageStore.getCurPage(),
        edit_id: this.pageStore.editConfig.id,
        // seq_id: this.msg_seq_id + 1,
        action: 3,
        channelId: this.channelId
      };
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendPageInfoMsg(params);
      this.pageStore.revokeStack = [];
      this.pageStore.restoreStack = [];
    } // 选择线型大小

  }, {
    key: "brushSize",
    value: function brushSize(size) {
      // 没有输入参数 获取值
      if (size === undefined) {
        return this.pageStore.brush_size;
      }

      this.pageStore.brush_size = parseInt(size) || this.pageStore.brush_size;
    } // 选择颜色

  }, {
    key: "brushColor",
    value: function brushColor(color) {
      if (color === undefined) {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["stringToColor"])(this.pageStore.color);
      }

      this.pageStore.color = Object(_common_common__WEBPACK_IMPORTED_MODULE_6__["colorToNumber"])(color) || this.pageStore.color;
    } // 选择图形

  }, {
    key: "toolType",
    value: function toolType(shape) {
      if (shape === undefined) {
        return this.pageStore.shape;
      }

      this.pageStore.shape = shape || this.pageStore.shape;
    }
  }, {
    key: "_transrate",
    value: function _transrate(stack1, stack2) {
      var paint = stack1.pop();
      if (!paint) return;
      var graphType = paint.type;
      var pageData = this.pageStore.findPagePaints(paint[graphType].pid);
      var movePaint = this.pageStore.findPaintByGid(pageData, paint[graphType].gid); // 当前找不到 则是恢复删除的线段 用原本保存的值

      paint = movePaint || paint;

      if (paint[graphType].action === 1 || paint[graphType].action === 2) {
        this._sendGraphMsg(graphType, paint[graphType], 3);

        stack2.push(paint);
      } else if (paint[graphType].action === 3) {
        this._sendGraphMsg(graphType, paint[graphType], 1);

        stack2.push(paint);
      }
    } // 撤销

  }, {
    key: "revoke",
    value: function revoke() {
      this._transrate(this.pageStore.revokeStack, this.pageStore.restoreStack);
    } // 恢复

  }, {
    key: "restore",
    value: function restore() {
      this._transrate(this.pageStore.restoreStack, this.pageStore.revokeStack);
    }
    /**
    * 是否开启编辑
    */

  }, {
    key: "edit",
    value: function edit(isEdit) {
      if (isEdit === undefined) {
        return this.pageStore.editConfig.status;
      } else {
        if (isEdit) {
          _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendOpenEdit(this.channelId);
          return Object(_common_promise_handler__WEBPACK_IMPORTED_MODULE_14__["promiseHandler"])(EDIT_WHITE_BOARD);
        } else {
          this.pageStore.editConfig.status = false;
          return Promise.resolve(false);
        }
      }
    }
  }, {
    key: "page",
    value: function page(num) {
      if (num === undefined) {
        return this.pageStore.getCurPage();
      } // 页面超出限制


      if (num >= this.pageStore.getPageCount() || num < 1) return _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn('page number is not reasonable');
      var params = {
        curPage: num,
        edit_id: this.pageStore.editConfig.id,
        // seq_id: this.msg_seq_id + 1,
        action: 0,
        channelId: this.channelId
      };
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_13__["default"].sendPageInfoMsg(params);
    }
  }, {
    key: "startPainting",
    value: function startPainting(event) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger("touchStart".concat(this.mediaId), event);
    }
  }, {
    key: "painting",
    value: function painting(event) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger("touchMove".concat(this.mediaId), event);
    }
  }, {
    key: "stopPainting",
    value: function stopPainting(event) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger("touchEnd".concat(this.mediaId), event);
    }
  }]);

  return Painter;
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "_processLoginResp", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "_processLoginResp"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "_onWebsocketOpen", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "_onWebsocketOpen"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "_onWebsocketClosed", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "_onWebsocketClosed"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "_onWebsocketError", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "_onWebsocketError"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "setRenderElement", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "setRenderElement"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "close", [_common_common__WEBPACK_IMPORTED_MODULE_6__["tracelog"]], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (Painter);

/***/ }),

/***/ "./src/main/media/whiteBoard/page-store.js":
/*!*************************************************!*\
  !*** ./src/main/media/whiteBoard/page-store.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/math */ "./src/main/util/math.js");
/* harmony import */ var _core_bbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/bbox */ "./src/core/bbox.js");






/**
 * 白板数据
 */

var PageStore = /*#__PURE__*/function () {
  function PageStore(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PageStore);

    /**
     * 全量数据存储
     * boardData : {
     *     seq_id: '' // 暂时不清楚作用
     *     board_name: 'xxx',
     *     board_type: 'xxx',
     *     "width":1280,
     *     "height":720,
     *     "page":10,
     *     "current_pid":2,
     *     "file_path":,
     *     "convert_file_path",
     *     paintMap:   // map key: 页码 value: [obj]  图元对象
     * }
     */
    this.boardData = {
      paintMap: new Map()
    }; // 白板编辑状态

    this.editConfig = {
      id: 1,
      status: false
    };
    this.shape = _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE;
    this.color = 4278190080;
    this.brush_size = 4; // 撤销栈

    this.revokeStack = []; // 恢复栈

    this.restoreStack = []; // 图元增量

    this.graphIdSeed = 0;

    this._init(data);

    return this;
  }
  /**
   * 初始化
   * @param {*} data 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PageStore, [{
    key: "_init",
    value: function _init(data) {
      var _this = this;

      // 第一个元素是白板属性数据
      var pageData = data.slice(0, 1); // 后面的元素是白板图元数据

      var paintObjs = data.slice(1); // 保存白板属性数据

      this.boardData = Object.assign(this.boardData, pageData[0].board);
      this.editConfig.id = this.boardData.edit_id; // 解析所有白板图元

      if (paintObjs.length > 0) {
        paintObjs.map(function (item) {
          var items = _this.boardData.paintMap.get(item[item.type].pid);

          if (!items) {
            _this.boardData.paintMap.set(item[item.type].pid, [item]);

            return;
          }

          items.push(item);

          _this.boardData.paintMap.set(item[item.type].pid, items);
        });
      } else {
        this.boardData.paintMap.set(pageData[0].board.current_pid, []);
      }
    }
  }, {
    key: "clearPaints",
    value: function clearPaints() {
      this.boardData.paintMap = new Map();
      this.boardData.paintMap.set(this.getCurPage(), []);
    }
    /**
     * 获取当前显示第几页
     */

  }, {
    key: "getCurPage",
    value: function getCurPage() {
      return this.boardData.current_pid;
    }
    /**
     * 获取白板总页数
     */

  }, {
    key: "getPageCount",
    value: function getPageCount() {
      return this.boardData.page;
    }
    /**
     * TODO：？？？
     */

  }, {
    key: "getFilePath",
    value: function getFilePath() {
      return this.boardData.convert_file_path;
    }
    /**
     * 获取白板图片URL
     */

  }, {
    key: "getConvertFilePath",
    value: function getConvertFilePath() {
      return this.boardData.convert_file_path;
    }
    /**
     * 设置当前显示的页码
     * @param {*} pid 
     */

  }, {
    key: "setCurPage",
    value: function setCurPage(pid) {
      this.boardData.current_pid = pid;
    }
    /**
     * 获取白板名称
     */

  }, {
    key: "getBoardName",
    value: function getBoardName() {
      return this.boardData.board_name;
    }
    /**
     * 删除白板页
     * @param {*} item 
     */

  }, {
    key: "deletePage",
    value: function deletePage(item) {
      var items = this.boardData.paintMap.get(item[item.type].pid);

      if (items) {
        this.boardData.paintMap.set(item[item.type].pid, []);
      }
    }
    /**
     * 获取白板页上的所有图元
     * @param {*} pid 
     */

  }, {
    key: "findPagePaints",
    value: function findPagePaints(pid) {
      if (!this.boardData.paintMap.get(pid)) {
        this.boardData.paintMap.set(pid, []);
      }

      return this.boardData.paintMap.get(pid);
    }
    /**
     * 根据gid查找图元数据
     * @param {*} pageData 
     * @param {*} gid 
     */

  }, {
    key: "findPaintByGid",
    value: function findPaintByGid(pageData, gid) {
      for (var i = 0; i < pageData.length; i++) {
        var data = pageData[i]; // 判断ObjId是否相等

        if (data[data.type].gid === gid) {
          // 替换全量对应ID的Obj
          return data;
        }
      }

      return null;
    }
    /**
     * 删除图元
     * @param {*} pageData 页图元数据组
     * @param {*} paintObj
     */

  }, {
    key: "deletePaintObj",
    value: function deletePaintObj(pageData, gid) {
      for (var i = 0; i < pageData.length; i++) {
        var data = pageData[i]; // 判断ObjId是否相等

        if (data[data.type].gid === gid) {
          try {
            return pageData.splice(i, 1)[0];
          } catch (er) {
            return null;
          }
        }
      }

      return null;
    }
  }, {
    key: "addPaintObj",
    value:
    /**
     * 添加图元
     * @param {*} pageData 
     * @param {*} paintObj 
     */
    function addPaintObj(pageData, paintObj) {
      pageData.push(paintObj);
    }
    /**
     * 
     * @param {*} pageData 
     * @param {*} paintObj 
     */

  }, {
    key: "amendPaintObj",
    value: function amendPaintObj(pageData, paintObj) {
      for (var i = 0; i < pageData.length; i++) {
        var data = pageData[i]; // 判断ObjId是否相等

        if (data[data.type].gid === paintObj[paintObj.type].gid) {
          // 替换全量对应ID的Obj
          if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE) {
            var _data$data$type$point;

            (_data$data$type$point = data[data.type].points).push.apply(_data$data$type$point, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(paintObj[paintObj.type].points));
          } else {
            pageData.splice(i, 1, paintObj);
          }

          break;
        }
      }
    }
    /**
     * 替换图元
     * @param {*} pageData 
     * @param {*} gid 
     * @param {*} paintData 
     */

  }, {
    key: "repalcePaintObj",
    value: function repalcePaintObj(pageData, gid, paintData) {
      for (var i = 0; i < pageData.length; i++) {
        var data = pageData[i];

        if (data[data.type].gid === gid) {
          data[data.type] = paintData;
          break;
        }
      }
    }
    /**
     * 移动图元
     * @param {*} pageData 
     * @param {*} gid 
     * @param {*} paintObj 
     */

  }, {
    key: "movePaintObj",
    value: function movePaintObj(pageData, gid, paintObj) {
      for (var i = 0; i < pageData.length; i++) {
        var data = pageData[i]; // 判断ObjId是否相等

        if (data[data.type].gid === gid) {
          // 替换全量对应ID的Obj
          if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE) {
            data[data.type].points = data[data.type].points.map(function (item) {
              return item = [item[0] + paintObj.ox, item[1] + paintObj.oy];
            });
          } else if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].TEXT) {
            data[data.type].left += paintObj.ox;
            data[data.type].top += paintObj.oy;
          } else {
            data[data.type].x1 += paintObj.ox;
            data[data.type].y1 += paintObj.oy;
            data[data.type].x2 += paintObj.ox;
            data[data.type].y2 += paintObj.oy;
          }

          break;
        }
      }
    }
  }, {
    key: "findPaintsByPoint",
    value: function findPaintsByPoint(pageData, target) {
      var flag = false;

      for (var i = 0; i < pageData.length; i++) {
        var data = pageData[i];

        if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE || data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].MASK_CURVE) {
          var points = data[data.type].points;

          for (var j = 0; j < points.length - 1; j++) {
            var point0 = points[j];
            var point1 = points[j + 1];
            flag = Object(_util_math__WEBPACK_IMPORTED_MODULE_4__["isPointAt"])(target, {
              x: point0[0],
              y: point0[1]
            }, {
              x: point1[0],
              y: point1[1]
            });
            if (flag) break;
          }
        } else if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].LINE) {
          var _points = data[data.type];
          flag = Object(_util_math__WEBPACK_IMPORTED_MODULE_4__["isPointAt"])(target, {
            x: _points.x1,
            y: _points.y1
          }, {
            x: _points.x2,
            y: _points.y2
          });
        }

        if (flag) return data;
      }

      return null;
    }
  }, {
    key: "containPaintObj",
    value: function containPaintObj(rect) {
      var pageData = this.findPagePaints(this.boardData.current_pid);
      var paints = [];
      pageData.map(function (data) {
        // 替换全量对应ID的Obj
        if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE) {
          var isContain = true;
          data[data.type].points.map(function (item) {
            if (item[0] < rect.x1 || item[0] > rect.x2 || item[1] < rect.y1 || item[1] > rect.y2) {
              isContain = false;
            }
          });

          if (isContain) {
            paints.push(data[data.type].gid);
          }
        } else if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].TEXT) {// data[data.type].left += paintObj.ox
          // data[data.type].top += paintObj.oy
        } else if (data.type === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].LINE) {
          var item = data[data.type];
          if (item.x1 < rect.x1 || item.x2 > rect.x2 || item.y1 < rect.y1 || item.y2 > rect.y2) return;
          paints.push(data[data.type].gid);
        }
      });
      return paints;
    }
  }, {
    key: "boundingRect",
    value: function boundingRect(gid) {
      var pageData = this.findPagePaints(this.boardData.current_pid);
      var graph = this.findPaintByGid(pageData, gid);
      var min = [];
      var max = [];

      if (graph.type === 'line') {
        var points = graph[graph.type];
        Object(_core_bbox__WEBPACK_IMPORTED_MODULE_5__["fromLine"])(points.x1, points.y1, points.x2, points.y2, min, max);
      } else if (graph.type === 'curve') {
        Object(_core_bbox__WEBPACK_IMPORTED_MODULE_5__["fromPoints"])(graph[graph.type].points, min, max);
      }

      return {
        x1: min[0],
        y1: min[1],
        x2: max[0],
        y2: max[1]
      };
    }
  }, {
    key: "groupBoundingRect",
    value: function groupBoundingRect(childrens) {
      var _this2 = this;

      // let pageData = this.findPagePaints(this.boardData.current_pid)
      var rect = null;
      childrens.map(function (gid) {
        var childRect = _this2.boundingRect(gid);

        rect = rect || childRect;
        rect.x1 = Math.min(rect.x1, childRect.x1);
        rect.y1 = Math.min(rect.y1, childRect.y1);
        rect.x2 = Math.max(rect.x2, childRect.x2);
        rect.y2 = Math.max(rect.y2, childRect.y2);
      });
      return rect;
    }
  }]);

  return PageStore;
}();

/* harmony default export */ __webpack_exports__["default"] = (PageStore);

/***/ }),

/***/ "./src/main/media/whiteBoard/render/render.js":
/*!****************************************************!*\
  !*** ./src/main/media/whiteBoard/render/render.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/draw */ "./src/main/util/draw.js");
/* harmony import */ var _white_board_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../white-board-manager */ "./src/main/media/white-board-manager.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/event-registry */ "./src/common/event-registry.js");


// import { PaasRender } from './paasRender'
// import { CloudRender } from './cloudRender'
// 8fff55e8-43db-4641-9592-6926e2962047




var Render = /*#__PURE__*/function () {
  function Render(painter, pageStore) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Render);

    this.painter = painter;
    this.pageStore = pageStore;
  }
  /**
   * 全量重新绘图
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Render, [{
    key: "_drawAllPaint",
    value: function _drawAllPaint() {
      var _this = this;

      // this._emptyCanvas()
      if (this.pageStore) {
        var paintObjs = this.pageStore.findPagePaints(this.pageStore.getCurPage());
        paintObjs.map(function (item) {
          _this._drawPaint(item.type, item[item.type]);
        });
      }
    }
    /**
    * 设置背景图(重试10次)
    */

  }, {
    key: "_insertImage",
    value: function _insertImage() {
      var _this2 = this;

      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (n > 10) {
        console.warn("insertImage failed!");
        return;
      }

      var convertPath = this.pageStore.getConvertFilePath();
      var rootPath = convertPath;
      var curPage = this.pageStore.getCurPage();
      var fullPath = convertPath;

      if (!String(fullPath).toLowerCase().includes('.jpg')) {
        fullPath = "".concat(convertPath, "/").concat(curPage, ".jpg");
      } else {
        rootPath = convertPath.substr(0, convertPath.lastIndexOf('/'));
      }

      if (_white_board_manager__WEBPACK_IMPORTED_MODULE_3__["default"].cacheFileUrlMap.get(rootPath) && _white_board_manager__WEBPACK_IMPORTED_MODULE_3__["default"].cacheFileUrlMap.get(rootPath).get(fullPath)) {
        if (this.painter.canvasEle) {
          this.painter._refreshRender();
        } else {
          console.warn("Invalid canvas element!");
        }
      } else {
        _white_board_manager__WEBPACK_IMPORTED_MODULE_3__["default"]._getFileUrl(fullPath);

        setTimeout(function () {
          _this2._insertImage(++n);
        }.bind(this), 3000);
      }
    }
    /**
     * 清除画板
     */

  }, {
    key: "_emptyCanvas",
    value: function _emptyCanvas() {
      if (this.painter.canvasCtx) {
        this.painter.canvasCtx.clearRect(0, 0, this.painter.canvasWidth, this.painter.canvasHeight);
      }
    }
    /**
     * 根据图形绘图
     * @param {*} type 
     * @param {*} obj 
     */

  }, {
    key: "_drawPaint",
    value: function _drawPaint(type, obj) {
      if (this.painter.canvasCtx) {
        try {
          _util_draw__WEBPACK_IMPORTED_MODULE_2__["default"][type](this.painter.canvasCtx, obj, this.painter.scaleRatio, this.painter.canvasEle);
        } catch (err) {
          console.error("Draw type: " + type + ", error: " + err);
        }
      }
    }
  }, {
    key: "drawAmendData",
    value: function drawAmendData(pageData, paintObj) {
      this._drawAllPaint();

      var paint = this.pageStore.findPaintByGid(pageData, paintObj[paintObj.type].gid);

      if (paint) {
        this._drawPaint(paint.type, paint[paint.type]);
      }
    }
    /**
     * 修改/删除/新增 图元
     * @param {*} paintObj 
     */

  }, {
    key: "dealAmendData",
    value: function dealAmendData(paintObj) {
      var pageData = this.pageStore.findPagePaints(this.pageStore.getCurPage());

      if (paintObj[paintObj.type].action === 1) {
        // 添加
        this.pageStore.addPaintObj(pageData, paintObj);
        this.drawAmendData(pageData, paintObj);
      } else if (paintObj[paintObj.type].action === 2) {
        // 修改
        this.pageStore.amendPaintObj(pageData, paintObj);
        this.drawAmendData(pageData, paintObj);
      } else if (paintObj[paintObj.type].action === 3) {
        // 删除
        this.pageStore.deletePaintObj(pageData, paintObj[paintObj.type].gid);

        this._emptyCanvas();

        this._drawAllPaint();
      } else if (paintObj[paintObj.type].action === 4) {
        this.pageStore.repalcePaintObj(pageData, paintObj[paintObj.type].gid, paintObj[paintObj.type]);

        this._drawAllPaint();
      }
    }
    /**
     * 页变化
     * @param {*} pageObj 
     */

  }, {
    key: "pageChange",
    value: function pageChange(pageObj) {
      if (!this.pageStore) return;
      var cur_page = pageObj.cur_page;
      if (cur_page === this.pageStore.getCurPage()) return;
      this.pageStore.setCurPage(pageObj.cur_page);

      if (this.pageStore.getConvertFilePath()) {
        this._insertImage();
      } // 通知白板页切换


      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger("shareOperation", {
        type: 'pageChange',
        mediaId: this.painter.mediaId,
        curPage: this.pageStore.getCurPage()
      });
    }
    /**
     * 移动图元
     * @param {*} paintObj 
     */

  }, {
    key: "moveGraph",
    value: function moveGraph(paintObj) {
      var _this3 = this;

      var pageData = this.pageStore.findPagePaints(paintObj.gmov.pid);
      paintObj.gmov.graphs.map(function (gid) {
        _this3.pageStore.movePaintObj(pageData, gid, paintObj.gmov);
      });

      this._emptyCanvas();

      this._drawAllPaint();
    } // 绘制包围盒

  }, {
    key: "drawBoundingRect",
    value: function drawBoundingRect(obj) {
      if (!obj) return;
      this.painter.canvasCtx.beginPath();
      this.painter.canvasCtx.lineWidth = 1; // 线宽

      this.painter.canvasCtx.strokeStyle = '#00ff00'; // 线颜色

      var x1 = parseInt(obj.x1) * this.painter.scaleRatio;
      var y1 = parseInt(obj.y1) * this.painter.scaleRatio;
      var x2 = parseInt(obj.x2) * this.painter.scaleRatio;
      var y2 = parseInt(obj.y2) * this.painter.scaleRatio;
      this.painter.canvasCtx.rect(x1, y1, x2 - x1, y2 - y1);
      this.painter.canvasCtx.closePath();
      this.painter.canvasCtx.stroke();
    }
  }]);

  return Render;
}();

/* harmony default export */ __webpack_exports__["default"] = (Render);

/***/ }),

/***/ "./src/main/media/whiteBoard/write/write.js":
/*!**************************************************!*\
  !*** ./src/main/media/whiteBoard/write/write.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WriteBoard; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/store */ "./src/main/util/store.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/event-registry */ "./src/common/event-registry.js");






var WriteBoard = /*#__PURE__*/function () {
  function WriteBoard(painter, pageStore) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WriteBoard);

    // super(params)
    this.painter = painter;
    this.pageStore = pageStore || {};
    this.render = this.painter.render;
    this.userId = _util_store__WEBPACK_IMPORTED_MODULE_2__["default"].userInfo.userId;
    this.parttern = {};
    this.getGraphId(); // 选择的线条

    this.graphChildren = []; // 包围盒对象

    this.boundingRect = null; // 选择对象移动状态

    this.moveStatus = false;
    this.registryTouchEvent();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WriteBoard, [{
    key: "registryTouchEvent",
    value: function registryTouchEvent() {
      var startId = "touchStart".concat(this.painter.mediaId);
      var moveId = "touchMove".concat(this.painter.mediaId);
      var endId = "touchEnd".concat(this.painter.mediaId); // 先清除注册，因为可能会执行多次导致有多个相同的事件callBack

      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].off(startId);
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].off(moveId);
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].off(endId);
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].on(startId, this.touchMoveStart.bind(this));
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].on(moveId, this.touchMoveEvent.bind(this));
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].on(endId, this.touchMoveEnd.bind(this));
    } // 获取图元id

  }, {
    key: "getGraphId",
    value: function getGraphId() {
      return this.userId << 16 | this.pageStore.graphIdSeed++;
    }
    /**
     * canvas触摸开始事件
     */

  }, {
    key: "touchMoveStart",
    value: function touchMoveStart(e) {
      this.rateX = this.painter.width / this.painter.canvasWidth;
      this.rateY = this.painter.height / this.painter.canvasHeight;

      var canvasDis = this._calcXY(e.touches[0].x, e.touches[0].y); // 橡皮檫处理


      if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].ERASER) {
        var pageData = this.pageStore.findPagePaints(this.pageStore.getCurPage()); // 遍历查找点是否在线上

        var paints = this.pageStore.findPaintsByPoint(pageData, canvasDis);

        if (paints) {
          this.painter._sendGraphMsg(paints.type, paints[paints.type], 3);

          this._storeStack(paints.type, paints[paints.type]);
        }

        return;
      }

      this._createShapeObject(); // 曲线处理


      if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE || this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].MASK_CURVE) {
        this.parttern.points.push([canvasDis.x, canvasDis.y]);

        this.painter._sendGraphMsg(this.pageStore.shape, this.parttern, 1);
      }
    }
    /**
     * canvas触摸移动事件
     */

  }, {
    key: "touchMoveEvent",
    value: function touchMoveEvent(e) {
      var endx = Math.floor(e.touches[0].x * this.rateX);
      var endy = Math.floor(e.touches[0].y * this.rateY);

      var canvasDis = this._calcXY(e.touches[0].x, e.touches[0].y); // 橡皮檫处理


      if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].ERASER) {
        var pageData = this.pageStore.findPagePaints(this.pageStore.getCurPage()); // 遍历查找点是否在线上

        var paints = this.pageStore.findPaintsByPoint(pageData, canvasDis);

        if (paints) {
          this.painter._sendGraphMsg(paints.type, paints[paints.type], 3);

          this._storeStack(paints.type, paints[paints.type]);
        }
      } else if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].LINE) {
        this.parttern.x2 = endx;
        this.parttern.y2 = endy;

        this.painter._sendGraphMsg(this.pageStore.shape, this.parttern, 2);
      } else if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE) {
        this.parttern.points = [[endx, endy]];

        this.painter._sendGraphMsg(this.pageStore.shape, this.parttern, 2);
      } else if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].GMOV) {
        if (this.moveStatus) {
          this.parttern.ox = endx - canvasDis.x;
          this.parttern.oy = endy - canvasDis.y;
          this.parttern.graphs = this.graphChildren;

          this.painter._sendGraphMsg(_common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].GMOV, this.parttern);

          canvasDis.x = endx;
          canvasDis.y = endy;
        } else {
          this.painter.render._drawAllPaint();

          this.boundingRect = {
            x1: canvasDis.x,
            y1: canvasDis.y,
            x2: endx,
            y2: endy
          };
          this.render.drawBoundingRect(this.boundingRect);
        }
      }
    }
    /**
     * canvas触摸结束事件
     */

  }, {
    key: "touchMoveEnd",
    value: function touchMoveEnd(e) {
      // 移动暂时无法撤销
      if (this.pageStore.shape !== _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].GMOV) {
        this._storeStack(this.pageStore.shape, this.parttern);

        this.painter._sendGraphMsg(this.pageStore.shape, this.parttern, 5);
      }

      if (this.pageStore.shape === _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].GMOV) {
        this.moveStatus = false;

        this.render._drawAllPaint();

        if (this.boundingRect) {
          this.graphChildren = this.pageStore.containPaintObj(this.boundingRect);
          this.boundingRect = this.pageStore.groupBoundingRect(this.graphChildren); // 绘制包围盒

          this.render.drawBoundingRect(this.boundingRect);
        }
      }
    }
  }, {
    key: "_storeStack",
    value: function _storeStack(shape, parttern) {
      var params = {
        type: shape
      };
      params[shape] = parttern;
      this.pageStore.revokeStack.push(params);
    }
    /**
     * 创建图型对象
     */

  }, {
    key: "_createShapeObject",
    value: function _createShapeObject() {
      switch (this.pageStore.shape) {
        case _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].LINE:
          this.parttern = {
            pid: this.pageStore.getCurPage(),
            gid: this.getGraphId(),
            action: null,
            graph: 1,
            brush_size: this.pageStore.brush_size,
            color: this.pageStore.color,
            x1: null,
            y1: null,
            x2: null,
            y2: null
          };
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].CURVE:
          this.parttern = {
            pid: this.pageStore.getCurPage(),
            gid: this.getGraphId(),
            action: null,
            graph: 2,
            brush_size: this.pageStore.brush_size,
            color: this.pageStore.color,
            points: []
          };
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].MASK_CURVE:
          this.parttern = {
            pid: this.pageStore.getCurPage(),
            gid: this.getGraphId(),
            action: null,
            graph: 2,
            brush_size: this.pageStore.brush_size,
            color: this.pageStore.color,
            points: []
          };
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].TEXT:
          this.parttern = {
            pid: this.pageStore.getCurPage(),
            gid: this.getGraphId(),
            text: '',
            action: null,
            color: this.pageStore.color,
            left: '',
            top: '',
            right: '',
            bottom: '',
            font: '新宋体',
            fontsize: 20
          };
          break;

        case _common_enums__WEBPACK_IMPORTED_MODULE_3__["Graphics"].GMOV:
          this.parttern = {
            pid: this.pageStore.getCurPage(),
            ox: null,
            oy: null,
            graphs: []
          };
      }
    }
    /**
     * 计算横纵坐标
     * @param {*} x 
     * @param {*} y 
     */

  }, {
    key: "_calcXY",
    value: function _calcXY(x, y) {
      return {
        x: Math.ceil(this.rateX * x),
        y: Math.ceil(this.rateY * y)
      };
    }
    /**
     * 计算输入框相对于画布的横纵坐标
     * @param {*} x 
     * @param {*} y 
     */

  }, {
    key: "_calcTextDisance",
    value: function _calcTextDisance(x, y) {
      // 等比适应 坐标不用转换
      if (this.painter.displayMode == DisplayMode.DBSY) {
        return {
          x: x,
          y: y
        };
      } else {
        return {
          x: Math.ceil(x + (this.painter.parentEle.offsetWidth - this.painter.canvasWidth) / 2),
          y: Math.ceil(y + (this.painter.parentEle.offsetHeight - this.painter.canvasHeight) / 2)
        };
      }
    }
  }]);

  return WriteBoard;
}();



/***/ }),

/***/ "./src/main/message/message-manager.js":
/*!*********************************************!*\
  !*** ./src/main/message/message-manager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/store */ "./src/main/util/store.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/event-registry */ "./src/common/event-registry.js");






var MessageManager = /*#__PURE__*/function () {
  function MessageManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MessageManager);

    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(11000, this._onRecvUserMsg.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(11006, this._onRecvGroupMsg.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(11010, this._onRecvServerAck.bind(this));
  }
  /**
   * 发送单播消息
   * @param {*} params 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MessageManager, [{
    key: "sendUserMsg",
    value: function sendUserMsg(params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__["default"].sendUserMsg(params);
    }
  }, {
    key: "sendGroupMsgWithWhiteList",
    value:
    /**
     * 发送白名单消息
     * @param {*} params 
     */
    function sendGroupMsgWithWhiteList(params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__["default"].sendGroupMsgWithWhiteList(params);
    }
  }, {
    key: "sendGroupMsgWithBlackList",
    value:
    /**
     * 发送黑名单消息
     * @param {*} params 
     */
    function sendGroupMsgWithBlackList(params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__["default"].sendGroupMsgWithBlackList(params);
    }
  }, {
    key: "sendGroupMsg",
    value:
    /**
     * 发送广播消息
     * @param {*} params 
     */
    function sendGroupMsg(params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__["default"].sendGroupMsg(params);
    }
  }, {
    key: "_onRecvUserMsg",
    value:
    /**
     * 收到用户消息
     * @param {*} data 
     */
    function _onRecvUserMsg(data) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger("onRecvUserMsg", {
        srcUserId: data.src_user_id,
        msg: data.msg,
        msgId: data.msg_id
      });
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__["default"].sendUserMsgAck(data);
    }
  }, {
    key: "_onRecvGroupMsg",
    value:
    /**
     * 收到分组消息
     * @param {*} data 
     */
    function _onRecvGroupMsg(data) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger("onRecvGroupMsg", {
        srcUserId: data.src_user_id,
        groupId: data.group_id,
        msg: data.msg,
        msgId: data.msg_id
      });
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_2__["default"].sendGroupMsgAck(data);
    }
    /**
     * 收到服务器Ack消息，说明服务器已经收到
     * @param {*} data 
     */

  }, {
    key: "_onRecvServerAck",
    value: function _onRecvServerAck(data) {// TODO: 暂时不做处理
    }
  }]);

  return MessageManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new MessageManager());

/***/ }),

/***/ "./src/main/online/online-manager.js":
/*!*******************************************!*\
  !*** ./src/main/online/online-manager.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/store */ "./src/main/util/store.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/event-registry */ "./src/common/event-registry.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var OnlineManager = /*#__PURE__*/function () {
  function OnlineManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OnlineManager);

    // 全量用户数据可能会分页
    this.cachedUserList = null; // 注册消息处理函数

    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(12120, this.onGetOnlineUsersRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(12123, this.onOnlineUsersNotify.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14001, this.onInviteRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14002, this.onNotifyInvite.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14004, this.onNotifyIgnoreInvite.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14007, this.onCancelInviteRes.bind(this));
    _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].msgDispatcher.addMsgHandler(14008, this.onNotifyCancelInvite.bind(this));
  }
  /**
   * 获取所有在线用户列表
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(OnlineManager, [{
    key: "getOnlineUsers",
    value: function getOnlineUsers() {
      var msg = {
        business: "PS",
        id: 12119,
        seq_id: Math.floor(Math.random() * 4096)
      };
      msg = this._dealMsg(msg);
      _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "onGetOnlineUsersRes",
    value:
    /**
     * 获取在线用户列表响应
     * @param {*} data 
     */
    function onGetOnlineUsersRes(data) {
      if (data.result != 0) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_GET_ONLINE_USERS, _common_enums__WEBPACK_IMPORTED_MODULE_2__["EventResult"].FAILED);
        return;
      }

      var pageInfo = {
        totalPages: data.page_info.total_pages,
        curPage: data.page_info.cur_page
      };
      var userInfo = [];

      var _iterator = _createForOfIteratorHelper(data.member_state_list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var user = _step.value;
          var u = {
            userId: user.uid,
            onlineInfo: []
          };

          var _iterator2 = _createForOfIteratorHelper(user.online_info),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var info = _step2.value;
              var state = {
                mutexType: info.mutex_type,
                customState: info.custom_state,
                state: info.state,
                extendInfo: info.extend_info
              };
              u.onlineInfo.push(state);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          userInfo.push(u);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var params = {
        pageInfo: pageInfo,
        userInfo: userInfo
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_GET_ONLINE_USERS, _common_enums__WEBPACK_IMPORTED_MODULE_2__["EventResult"].SUCCESS, params);
      this.cachedUserList = null;
    }
  }, {
    key: "invite",
    value:
    /**
     * 邀请其他用户加入分组
     * @param {*} params 
     */
    function invite(params) {
      var msg = {
        business: "GS",
        id: 14000,
        seq_id: params.seqId,
        group_id: params.groupId,
        callee_info: [],
        extend_info: params.extendInfo
      }; // 转换userId字段名

      var _iterator3 = _createForOfIteratorHelper(params.calleeInfo),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var userId = _step3.value;
          msg.callee_info.push({
            user_id: userId
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      msg = this._dealMsg(msg);
      _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "replyInvite",
    value:
    /**
     * 响应邀请
     * @param {*} params 
     */
    function replyInvite(params) {
      var msg = {
        business: "GS",
        id: 14003,
        seq_id: params.seqId,
        group_id: params.groupId,
        operate: params.operation,
        extend_info: params.extendInfo
      };
      msg = this._dealMsg(msg);
      _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "cancelInvite",
    value:
    /**
     * 邀请方取消邀请协议
     * @param {*} params 
     */
    function cancelInvite(params) {
      var msg = {
        business: "GS",
        id: 14006,
        seq_id: params.seqId,
        group_id: params.groupId,
        callee_info: params.calleeInfo
      };
      msg = this._dealMsg(msg);
      _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "onOnlineUsersNotify",
    value:
    /**
     * 增量在线用户推送
     * @param {*} data 
     */
    function onOnlineUsersNotify(data) {
      var result = data.result;
      var params = {
        userId: data.user_id,
        mutexType: data.mutex_type,
        state: data.operation,
        customState: data.custom_state,
        extendInfo: data.extend_info
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger("onOnlineUserState", params);
    }
  }, {
    key: "onInviteRes",
    value:
    /**
     * 邀请响应
     * @param {*} data 
     */
    function onInviteRes(data) {
      var params = {
        seqId: data.seq_id,
        userId: data.user_id,
        result: data.result
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger("onInviteReply", params);
    }
  }, {
    key: "onNotifyInvite",
    value:
    /**
     * 服务器通知被邀请者
     * @param {*} data 
     */
    function onNotifyInvite(data) {
      var params = {
        seqId: data.seq_id,
        groupId: data.group_id,
        userId: data.user_id,
        userName: data.user_name,
        extendInfo: data.extend_info
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger("onCommingInvite", params);
    }
  }, {
    key: "onNotifyIgnoreInvite",
    value:
    /**
     * 服务器通知被邀请者忽略邀请
     * @param {*} data 
     */
    function onNotifyIgnoreInvite(data) {
      var params = {
        groupId: data.group_id,
        userId: data.user_id,
        userName: data.user_name
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_NOTICE_IGNORE_INVITE, params);
    }
  }, {
    key: "onCancelInviteRes",
    value:
    /**
     * 取消邀请响应
     * @param {*} data 
     */
    function onCancelInviteRes(data) {
      var result = data.result;
      var params = {
        seqId: data.seq_id,
        userId: data.user_id
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_CANCEL_INVITE, result, params);
    }
  }, {
    key: "onNotifyCancelInvite",
    value:
    /**
     * 服务器通知取消邀请
     * @param {*} data 
     */
    function onNotifyCancelInvite(data) {
      var params = {
        seqId: data.seq_id,
        userId: data.user_id
      };
      _common_event_registry__WEBPACK_IMPORTED_MODULE_4__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_2__["EventType"].EVENT_NOTICE_CANCEL_INVITE, params);
    }
  }, {
    key: "_dealMsg",
    value: function _dealMsg(msg, channelId) {
      if (!channelId) {
        channelId = _util_store__WEBPACK_IMPORTED_MODULE_3__["default"].mainWebsocketChannelId;
      }

      return {
        id: 102,
        channel_id: channelId,
        msg: JSON.stringify(msg)
      };
    }
  }]);

  return OnlineManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new OnlineManager());

/***/ }),

/***/ "./src/main/rtc-engine.js":
/*!********************************!*\
  !*** ./src/main/rtc-engine.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! javascript-state-machine */ "./node_modules/javascript-state-machine/lib/state-machine.js");
/* harmony import */ var javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_state_machine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/store */ "./src/main/util/store.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
/* harmony import */ var _util_new_webscoket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/new_webscoket */ "./src/main/util/new_webscoket.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/enums */ "./src/common/enums.js");
/* harmony import */ var _util_protocol_sender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/protocol-sender */ "./src/main/util/protocol-sender.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/logger */ "./src/common/logger.js");
/* harmony import */ var _media_white_board_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/white-board-manager */ "./src/main/media/white-board-manager.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _util_tx_room__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/tx-room */ "./src/main/util/tx-room.js");










/**
 * 主引擎状态机
 */

var RtcEngine = new javascript_state_machine__WEBPACK_IMPORTED_MODULE_0___default.a({
  init: 'uninit',
  transitions: [{
    name: 'doInit',
    from: ['uninit', 'restoring'],
    to: 'initing'
  }, // 初始化
  {
    name: 'initSuccess',
    from: 'initing',
    to: 'inited'
  }, // 初始化成功
  {
    name: 'initFailed',
    from: 'initing',
    to: 'uninit'
  }, // 初始化失败
  {
    name: 'doLogin',
    from: 'inited',
    to: 'logining'
  }, // 登陆
  {
    name: 'loginSuccess',
    from: 'logining',
    to: 'logined'
  }, // 登陆成功
  {
    name: 'loginFailed',
    from: 'logining',
    to: 'inited'
  }, // 登陆失败
  {
    name: 'doJoin',
    from: 'logined',
    to: 'joining'
  }, // 加入分组
  {
    name: 'joinSuccess',
    from: 'joining',
    to: 'joined'
  }, // 加入分组成功
  {
    name: 'joinFailed',
    from: 'joining',
    to: 'logined'
  }, // 加入分组失败
  {
    name: 'doLeave',
    from: 'joined',
    to: 'leaving'
  }, // 离开分组
  {
    name: 'leaveSuccess',
    from: 'leaving',
    to: 'logined'
  }, // 离开分组成功
  {
    name: 'leaveFailed',
    from: 'leaving',
    to: 'joined'
  }, // 离开分组失败
  {
    name: 'doLogout',
    from: 'logined',
    to: 'logouting'
  }, // 退出登录
  {
    name: 'logoutSuccess',
    from: 'logouting',
    to: 'inited'
  }, // 退出登录成功
  {
    name: 'logoutFailed',
    from: 'logouting',
    to: 'logined'
  }, // 退出登录失败
  {
    name: 'doDestroy',
    from: ['logined', 'joined', 'inited', 'logining', 'joining', 'restoring', 'uninit', 'initing'],
    to: 'uninit'
  }, // 销毁
  {
    name: 'doRestore',
    from: 'joined',
    to: 'restoring'
  } // 断线重连 
  ],
  data: {
    registered: false,
    forceLogouted: false,
    kickedOut: false,
    hasLogin: false
  },
  methods: {
    /**
     * websocket关闭
     */
    onWebSocketClosed: function onWebSocketClosed() {
      _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].warn("Signalling websocket closed, state: " + this.state);

      if (_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket.close();
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket = null;
      } // TODO: 当前只处理以下一种状态


      if (this.state == 'joined' && !this.forceLogouted && !this.kickedOut) {
        this.doRestore();
      }
    },

    /**
     * 离开分组处理
     */
    onLeaveGroup: function onLeaveGroup() {
      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.groupId = null;
      _media_white_board_manager__WEBPACK_IMPORTED_MODULE_7__["default"].reinitialize();
    },

    /**
     * 登出处理
     */
    onLogout: function onLogout() {
      this.onLeaveGroup();
      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId = null;
    },

    /**
     * 销毁引擎处理
     */
    onDestroy: function onDestroy() {
      this.onLogout();
      this.hasLogin = false;
      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.appId = null;
      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.token = null;
      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.companyId = null;

      if (_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket.close();
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket = null;
      }
    },
    //--------------------------------------------------------------------------
    // 协议处理
    //--------------------------------------------------------------------------

    /**
     * 登录响应
     * @params {*} msg 
     * @params {*} socket 
     */
    onLoginRes: function onLoginRes(msg, socket) {
      var self = this;

      if (msg.result == 0) {
        _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].getLoginInfo(_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId, function (res) {
          self.loginSuccess({
            sdkAppId: res.data.sdkAppID,
            userSig: res.data.userSig,
            accountType: res.data.accountType
          });
        }, function (res) {
          self.loginFailed();
        });
      } else {
        self.loginFailed(msg.result);
      }
    },

    /**
     * 登出响应
     * @params {*} msg 
     * @params {*} socket 
     */
    onLogoutRes: function onLogoutRes(msg, socket) {
      msg.result == 0 ? this.logoutSuccess() : this.logoutFailed();
    },

    /**
     * 加入分组响应
     * @params {*} msg 
     * @params {*} socket 
     */
    onJoinGroupRes: function onJoinGroupRes(msg, socket) {
      var self = this;

      if (msg.result == 0) {
        var userId = _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId;
        _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].isPass && (userId = msg.room_id + "_" + userId);

        var success = function success(res, sdkAppId, userSig) {
          console.log("createRoom success." + JSON.stringify(res));
          self.joinSuccess({
            // 有两个RoomID，一个是Java服务上生成的RoomID，一个是网关生成的RoomID
            // 前一个RoomID只在Java服务上生效，后一个RoomID是在微信小程序使用的
            serverRoomId: res.data.roomID,
            serverUserId: userId,
            txRoomId: msg.room_id,
            privateMapKey: res.data.privateMapKey,
            sdkAppId: sdkAppId,
            userSig: userSig
          });
        };

        var fail = function fail() {
          console.error("Creat room failed!");
          self.joinFailed();
        };

        _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].getLoginInfo(userId, function (res) {
          var sdkAppId = res.data.sdkAppID;
          var userSig = res.data.userSig;

          if (_util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].isPass) {
            _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].createRoom(_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId, _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.groupId, success(res, sdkAppId, userSig), fail);
          } else {
            _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].enterRoom(_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId, msg.room_id, success(res, sdkAppId, userSig), fail);
          }
        }, function (res) {
          console.error("Get login info failed!");
          self.joinFailed();
        });
      } else {
        this.joinFailed();
      }
    },

    /**
     * 离开分组响应
     * @params {*} msg 
     * @params {*} socket 
     */
    onLeaveGroupRes: function onLeaveGroupRes(msg, socket) {
      msg.result == 0 ? this.leaveSuccess() : this.leaveFailed();
    },

    /**
     * 被强制登出
     * @params {*} msg 
     * @params {*} socket 
     */
    onForceLogout: function onForceLogout(msg, socket) {
      this.forceLogouted = true;
      this.onLogout();
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger("onUserForceLogout");
    },

    /**
     * 被踢出（登录）
     * @params {*} msg 
     * @params {*} socket 
     */
    onKickOut: function onKickOut(msg, socket) {
      this.kickedOut = true;
      this.onLogOut();
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_5__["default"].sendKickOutRes(); // 直接回复消息

      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger("onKickOut");
    },
    _onConnectSuccess: function _onConnectSuccess(msg, socket) {
      if (msg.result == 0) {
        // 因为webScoket只有一个，所以需要控制登录只执行一次
        if (this.hasLogin) return;
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].mainWebsocketChannelId = msg.channel_id;
        this.hasLogin = true;
        var options = {
          appId: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.appId,
          userId: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId,
          token: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.token,
          companyId: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.companyId,
          osType: "webchat",
          mutexType: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.mutexType,
          forceLogin: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.forceLogin,
          registered: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.registered,
          extendInfo: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.extendInfo
        };
        _util_protocol_sender__WEBPACK_IMPORTED_MODULE_5__["default"].sendLoginReq(options);
      }
    },
    //--------------------------------------------------------------------------
    // 状态机处理
    //--------------------------------------------------------------------------

    /**
     * 执行初始化
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onDoInit: function onDoInit(lifecycle, params) {
      var _this = this;

      var txRoomUrl = params.txRoomUrl,
          appId = params.appId,
          _params$isPass = params.isPass,
          isPass = _params$isPass === void 0 ? false : _params$isPass;
      _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].isPass = isPass;

      if (!txRoomUrl || !appId) {
        this.initFailed();
        return;
      }

      _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].serverDomain = txRoomUrl;
      _util_tx_room__WEBPACK_IMPORTED_MODULE_9__["default"].appId = appId;

      if (!this.registered) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(10001, this.onLoginRes.bind(this));
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(10003, this.onLogoutRes.bind(this));
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(10004, this.onForceLogout.bind(this));
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(12007, this.onKickOut.bind(this));
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(14101, this.onJoinGroupRes.bind(this));
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(14103, this.onLeaveGroupRes.bind(this));
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher.addMsgHandler(101, this._onConnectSuccess.bind(this));
        this.registered = true;
      }

      Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
        _this.initSuccess();
      });
    },

    /**
     * 打印状态转移信息
     * @param {*} lifecycle 
     */
    onTransition: function onTransition(lifecycle) {
      _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].state("transition: " + lifecycle.transition + ", from " + lifecycle.from + " to " + lifecycle.to);
    },

    /**
     * 初始化成功
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onInitSuccess: function onInitSuccess(lifecycle, params) {
      var _this2 = this;

      if (!_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_INIT, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].SUCCESS);
      } else {
        var _params = {
          userId: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId,
          appId: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.appId,
          companyId: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.companyId,
          token: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.token,
          forceLogin: true,
          // 防止用户冲突
          mutexType: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.mutexType,
          extendInfo: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.extendInfo,
          accessUrl: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.accessUrl
        };
        Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
          _this2.doLogin(_params);
        });
      }
    },

    /**
     * 初始化失败
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onInitFailed: function onInitFailed(lifecycle, params) {
      if (!_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_INIT, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].FAILED);
      } else {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring = false;
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].warn("Restoring failed for init!");
      }
    },

    /**
     * 执行登录
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onDoLogin: function onDoLogin(lifecycle, params) {
      var _this3 = this;

      console.log('paas login params', params);

      if (!params.userId) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
          _this3.loginFailed("Invalid userId!");
        });
      } else {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.userId = params.userId;
      }

      if (!params.appId) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
          _this3.loginFailed("Invalid appId!");
        });
      } else {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.appId = params.appId;
      }

      if (!params.token) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
          _this3.loginFailed("Invalid token!");
        });
      } else {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.token = params.token;
      } // 如果没有指定Access地址，则默认使用公有云服务


      if (!params.accessUrl) {
        params.accessUrl = "https://access.paas.hst.com/server/address";
      }

      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.accessUrl = params.accessUrl;

      if (params.forceLogin) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.forceLogin = params.forceLogin ? 1 : 0;
      }

      if (params.extendInfo) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.extendInfo = params.extendInfo;
      }

      if (params.companyId) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.companyId = params.companyId;
      }

      if (params.mutexType) {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].loginParams.mutexType = params.mutexType;
      }

      var self = this;

      try {
        // 获取WebSocket信令网关地址并创建连接
        wx.request({
          url: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].buildGetProxyWayUrl(params.accessUrl),
          data: {},
          method: 'GET',
          header: {
            'content-type': 'application/json' // 默认值

          },
          success: function success(res) {
            console.log("Response from access service: " + JSON.stringify(res));

            if (res.data.code == 0) {
              var addrUrl = res.data.result;
              wx.request({
                url: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].buildGetGateWayUrl(params.accessUrl),
                data: {},
                method: 'GET',
                header: {
                  'content-type': 'application/json' // 默认值

                },
                success: function success(res) {
                  if (res.data.code == 0) {
                    var backwardAddr = res.data.result;

                    if (backwardAddr) {
                      var options = {
                        addrUrl: addrUrl,
                        // addrUrl: 'wss://paas-demo-private.haoshitong.com:21000/wsproxy1',
                        backward_addr: backwardAddr,
                        handler: _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].msgDispatcher,
                        seq_id: parseInt(Math.random() * (1 - 1000) + 1000),
                        closed: function closed() {
                          self.onWebSocketClosed();
                        },
                        error: function error() {
                          self.loginFailed("Websocket error!");
                        }
                      };
                      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket = _util_new_webscoket__WEBPACK_IMPORTED_MODULE_3__["default"];
                      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].websocket.createProxyConnect(options);
                    }
                  } else {
                    throw "Cannot find websocket gateway from response!";
                  }
                },
                fail: function fail(res) {
                  throw "Get websocket gateway failed";
                },
                complete: function complete(res) {
                  console.log("Get websocket gateway complete");
                }
              });
            } else {
              throw "Get websocket gateway error!";
            }
          }
        });
      } catch (err) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
          self.loginFailed(err);
        });
      }
    },

    /**
     * 登录成功
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onLoginSuccess: function onLoginSuccess(lifecycle, params) {
      var _this4 = this;

      if (!_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_LOGIN, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].SUCCESS, params);
      } else {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["asyncWrapper"])(function () {
          _this4.doJoin(_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.groupId);
        });
      }
    },

    /**
     * 登录失败
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onLoginFailed: function onLoginFailed(lifecycle, params) {
      _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].error("Login failed: " + params);

      if (!_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_LOGIN, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].FAILED);
      } else {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring = false;
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].warn("Restoring failed for login!");
      }
    },

    /**
     * 执行加入分组
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onDoJoin: function onDoJoin(lifecycle, params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_5__["default"].sendJoinGroupReq(params);
      _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.groupId = params;
    },

    /**
     * 加入分组成功
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onJoinSuccess: function onJoinSuccess(lifecycle, params) {
      if (!_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_JOIN_GROUP, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].SUCCESS, params);
      } else {
        // Store.restoring = false
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Restoring success.");
      }
    },

    /**
     * 加入分组失败
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onJoinFailed: function onJoinFailed(lifecycle, params) {
      if (!_util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring) {
        _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_JOIN_GROUP, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].FAILED);
      } else {
        _util_store__WEBPACK_IMPORTED_MODULE_1__["default"].restoring = false;
        _common_logger__WEBPACK_IMPORTED_MODULE_6__["default"].warn("Restoring failed for join group!");
      }
    },

    /**
     * 执行离开分组
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onDoLeave: function onDoLeave(lifecycle, params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_5__["default"].sendLeaveGroupReq();
    },

    /**
     * 离开分组成功
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onLeaveSuccess: function onLeaveSuccess(lifecycle, params) {
      this.onLeaveGroup();
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_LEAVE_GROUP, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].SUCCESS);
    },

    /**
     * 离开分组失败
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onLeaveFailed: function onLeaveFailed(lifecycle, params) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_LEAVE_GROUP, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].FAILED);
    },

    /**
     * 执行登出
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onDoLogout: function onDoLogout(lifecycle, params) {
      _util_protocol_sender__WEBPACK_IMPORTED_MODULE_5__["default"].sendLogoutReq();
    },

    /**
     * 登出成功
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onLogoutSuccess: function onLogoutSuccess(lifecycle, params) {
      this.onLogout();
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_LOGOUT, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].SUCCESS);
    },

    /**
     * 登出失败
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onLogoutFailed: function onLogoutFailed(lifecycle, params) {
      _common_event_registry__WEBPACK_IMPORTED_MODULE_8__["default"].trigger(_common_enums__WEBPACK_IMPORTED_MODULE_4__["EventType"].EVENT_LOGOUT, _common_enums__WEBPACK_IMPORTED_MODULE_4__["EventResult"].FAILED);
    },

    /**
     * 销毁引擎
     * @params {*} lifecycle 
     * @params {*} params 
     */
    onDoDestroy: function onDoDestroy(lifecycle, params) {
      this.onDestroy();
    },

    /**
     * 断线重连
     * @param {*} lifecycle 
     * @param {*} params 
     */
    onRestoring: function onRestoring(lifecycle, params) {// Store.restoring = true
      // asyncWrapper(()=>{this.doInit()})
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (RtcEngine);

/***/ }),

/***/ "./src/main/util/draw.js":
/*!*******************************!*\
  !*** ./src/main/util/draw.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/white-board-manager */ "./src/main/media/white-board-manager.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * 
 * @param {*} canv 绘画对象
 * @param {*} lineType 0 1 2 3 4
 */

function setLineDash(canv, lineType, ratio) {
  var width1 = 20 * ratio;
  var width2 = 5 * ratio;

  switch (lineType) {
    case 0:
      canv.setLineDash([]);
      break;

    case 1:
      canv.setLineDash([width1, width2]);
      break;

    case 2:
      canv.setLineDash([width2, width2]);
      break;

    case 3:
      canv.setLineDash([width1, width2, width2, width2]);
      break;

    case 4:
      canv.setLineDash([width1, width2, width2, width2, width2, width2]);
      break;

    default:
      canv.setLineDash([]);
  }
}
/**
 * 
 * @param {*} canv 
 * @param {*} obj 
 * @param {*} ratio 
 * @param {*} type 填充类型
 */


function fillCustom(canv, obj, ratio, type) {
  canv.clip(); //必须

  canv.beginPath();
  canv.lineCap = "butt"; // 线型

  canv.lineWidth = 1; // 线宽

  canv.setLineDash([]);
  canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.bg_color); // 线颜色

  var x1 = Math.ceil(obj.left * ratio);
  var y1 = Math.ceil(obj.bottom * ratio);
  var x2 = Math.ceil(obj.right * ratio);
  var y2 = Math.ceil(obj.top * ratio);
  var width = x2 - x1;
  var height = y2 - y1;
  var space = 8;
  var n = Math.ceil(width / space);
  var m = Math.ceil(height / space);
  x2 = x1 + (n + m) * space;
  y2 = y1 + (m + n) * space;

  switch (type) {
    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].SOLID:
      canv.beginPath();
      canv.fillRect(x1, y1, width, height);
      canv.stroke();
      canv.closePath();
      break;

    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].L_SLASH:
      for (var i = 1; i <= m + n; i++) {
        canv.beginPath();
        canv.moveTo(x1, y1 + space * i);
        canv.lineTo(x1 + space * i, y1);
        canv.stroke();
        canv.closePath();
        canv.beginPath();
        canv.moveTo(x2, y2 - space * i);
        canv.lineTo(x2 - space * i, y2);
        canv.stroke();
        canv.closePath();
      }

      break;

    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].GRID:
      for (var _i = 1; _i < n; _i++) {
        // 竖线
        canv.beginPath();
        canv.moveTo(x1 + space * _i, y1);
        canv.lineTo(x1 + space * _i, y2);
        canv.stroke();
        canv.closePath();
      }

      for (var _i2 = 1; _i2 < m; _i2++) {
        // 横线
        canv.beginPath();
        canv.moveTo(x1, y1 + space * _i2);
        canv.lineTo(x2, y1 + space * _i2);
        canv.stroke();
        canv.closePath();
      }

      break;

    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].IN_GRID:
      for (var _i3 = 1; _i3 <= m + n; _i3++) {
        canv.beginPath();
        canv.moveTo(x1, y1 + space * _i3);
        canv.lineTo(x1 + space * _i3, y1);
        canv.stroke();
        canv.closePath();
        canv.beginPath();
        canv.moveTo(x2, y2 - space * _i3);
        canv.lineTo(x2 - space * _i3, y2);
        canv.stroke();
        canv.closePath();
      }

      for (var _i4 = 1; _i4 <= m + n; _i4++) {
        canv.beginPath();
        canv.moveTo(x2 - space * _i4, y1);
        canv.lineTo(x2, y1 + space * _i4);
        canv.stroke();
        canv.closePath();
        canv.beginPath();
        canv.moveTo(x1, y1 + space * _i4);
        canv.lineTo(x2 - space * _i4, y2);
        canv.stroke();
        canv.closePath();
      }

      break;

    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].R_SLASH:
      for (var _i5 = 1; _i5 <= m + n; _i5++) {
        canv.beginPath();
        canv.moveTo(x2 - space * _i5, y1);
        canv.lineTo(x2, y1 + space * _i5);
        canv.stroke();
        canv.closePath();
        canv.beginPath();
        canv.moveTo(x1, y1 + space * _i5);
        canv.lineTo(x2 - space * _i5, y2);
        canv.stroke();
        canv.closePath();
      }

      break;

    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].VERTICAL:
      for (var _i6 = 1; _i6 < n; _i6++) {
        // 竖线
        canv.beginPath();
        canv.moveTo(x1 + space * _i6, y1);
        canv.lineTo(x1 + space * _i6, y2);
        canv.stroke();
        canv.closePath();
      }

      break;

    case _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillStyle"].HORIZONTAL:
      for (var _i7 = 1; _i7 < m; _i7++) {
        // 横线
        canv.beginPath();
        canv.moveTo(x1, y1 + space * _i7);
        canv.lineTo(x2, y1 + space * _i7);
        canv.stroke();
        canv.closePath();
      }

      break;

    default:
      canv.fill();
  }
}
/**
 * 
 * @param {*} canv 
 * @param {*} obj  fill_mode 填充模式
 * @param {*} ratio 
 */


function drawFillMode(canv, obj, ratio) {
  if (obj.fill_mode === undefined || obj.fill_mode === _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillMode"].EMPTY) {
    canv.stroke();
  } else if (obj.fill_mode === _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillMode"].FILL_WITH_BORDER) {
    canv.stroke();
    fillCustom(canv, obj, ratio, obj.bg_shape);
  } else if (obj.fill_mode === _common_enums__WEBPACK_IMPORTED_MODULE_1__["fillMode"].FILL_NO_BORDER) {
    fillCustom(canv, obj, ratio, obj.bg_shape);
  }
}

var draw = {
  // 直线
  line: function line(canv, obj, ratio) {
    canv.beginPath();
    setLineDash(canv, obj.line_shape, ratio);
    canv.lineCap = "butt"; // 线型

    canv.lineWidth = parseInt(obj.brush_size * ratio); // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color); // 线颜色

    canv.moveTo(obj.x1 * ratio, obj.y1 * ratio);
    canv.lineTo(obj.x2 * ratio, obj.y2 * ratio);
    canv.stroke();
    canv.closePath();
  },
  // 曲线
  curve: function curve(canv, obj, ratio) {
    canv.beginPath();
    setLineDash(canv, obj.line_shape, ratio);
    canv.lineCap = "butt"; // 线型

    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color); // 线颜色

    var points = obj.points.map(function (item) {
      return {
        X: parseInt(item[0] * ratio),
        Y: parseInt(item[1] * ratio)
      };
    });

    if (obj.brush_size > 4) {
      canv.moveTo(points[0].X, points[0].Y);

      for (var i = 1; i < points.length; i++) {
        var ctrlP = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["getCtrlPoint"])(points, i - 1);
        canv.bezierCurveTo(ctrlP.pA.x, ctrlP.pA.y, ctrlP.pB.x, ctrlP.pB.y, points[i].X, points[i].Y);
      }
    } else {
      for (var _i8 = 0; _i8 < points.length; _i8++) {
        canv.lineTo(points[_i8].X, points[_i8].Y);
      }
    }

    canv.stroke();
    canv.closePath();
  },
  // 文字
  text: function text(canv, obj, ratio) {
    if (!Object.prototype.hasOwnProperty.call(obj, 'charset')) {
      canv.beginPath();
      canv.font = "".concat(obj.fontsize * 4 / 3 * ratio, "px \"").concat(obj.color, "\"");
      canv.textBaseline = "top";
      canv.fillStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color);
      var indexLine = 0;

      var _iterator = _createForOfIteratorHelper(obj.text.split('\r\n')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var txt = _step.value;
          canv.fillText(txt, obj.left * ratio, indexLine * 22 + obj.top * ratio);
          indexLine++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      // 云会议 fix bug #2201
      draw.cloudText(canv, obj, ratio);
    }

    canv.closePath();
  },
  cloudText: function cloudText(canv, obj, ratio) {
    var fontsize = parseInt((obj.fontsize + '').replace('-', ''));
    canv.font = "".concat(fontsize * ratio, "px ").concat(obj.font);
    canv.fillStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color);
    canv.textBaseline = "middle";
    var left = obj.left * ratio;
    var bottom = (obj.bottom + fontsize - 10) * ratio;
    var maxWidth = (obj.right - obj.left) * ratio;
    var strArr = obj.text.split(/\r\n|\n/);
    var row = 0;

    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i] == '') {
        row++;
      } else {
        var lineBreakNum = drawText(canv, strArr[i], left, bottom, maxWidth, row, fontsize);
        row = row + lineBreakNum;
      }
    }

    function drawText(ctx, str, x1, y1, maxWidth, row, fontsize) {
      str = str.split('');
      var temp = "";
      var rowTextArr = []; // 存储每一行的文字

      for (var i = 0; i < str.length; i++) {
        // 超过最大宽度自动换行
        if (ctx.measureText(temp + str[i]).width <= maxWidth) {
          temp += str[i];
        } else {
          rowTextArr.push(temp);
          temp = str[i];
        }
      }

      rowTextArr.push(temp);

      for (var j = 0; j < rowTextArr.length; j++) {
        ctx.fillText(rowTextArr[j], x1, y1 + (j + row) * fontsize * ratio);
      }

      return rowTextArr.length;
    }
  },
  // 矩形
  rectangle: function rectangle(canv, obj, ratio) {
    canv.beginPath();
    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = obj.color; // 线颜色

    var x1 = parseInt(obj.x1) * ratio;
    var y1 = parseInt(obj.y1) * ratio;
    var x2 = parseInt(obj.x2) * ratio;
    var y2 = parseInt(obj.y2) * ratio;
    canv.rect(x1, y1, x2 - x1, y2 - y1);
    canv.closePath();
    canv.stroke();
  },
  // 荧光笔
  mask_curve: function mask_curve(canv, obj, ratio) {
    canv.beginPath();
    setLineDash(canv, obj.line_shape, ratio);
    canv.lineCap = "butt"; // 线型

    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToRGBA"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color), '.4'); // 线颜色

    var points = obj.points.map(function (item) {
      return {
        X: parseInt(item[0] * ratio),
        Y: parseInt(item[1] * ratio)
      };
    });

    if (obj.brush_size > 4) {
      canv.moveTo(points[0].X, points[0].Y);

      for (var i = 1; i < points.length; i++) {
        var ctrlP = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["getCtrlPoint"])(points, i - 1);
        canv.bezierCurveTo(ctrlP.pA.x, ctrlP.pA.y, ctrlP.pB.x, ctrlP.pB.y, points[i].X, points[i].Y);
      }
    } else {
      for (var _i9 = 1; _i9 < points.length; _i9++) {
        canv.lineTo(points[_i9].X, points[_i9].Y);
      }
    }

    canv.stroke();
    canv.closePath();
  },
  // 箭头
  arrow: function arrow(canv, obj, ratio) {
    setLineDash(canv, obj.line_shape, ratio);
    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color); // 线颜色

    canv.fillStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color);
    drawLineArrow(canv, obj.x1 * ratio, obj.y1 * ratio, obj.x2 * ratio, obj.y2 * ratio, 10, 26);
    /**
     * 画箭头
     * fromX / fromY 起点坐标
     * toX / toY 终点坐标
     * headlen 箭头线的长度
     * theta 箭头线与直线的夹角
     */

    function drawLineArrow(ctx, fromX, fromY, toX, toY, headlen, theta) {
      var arrowX, arrowY; // 箭头线终点坐标
      // 计算各角度和对应的箭头终点坐标

      var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
      var angle1 = (angle + theta) * Math.PI / 180;
      var angle2 = (angle - theta) * Math.PI / 180;
      var topX = headlen * Math.cos(angle1);
      var topY = headlen * Math.sin(angle1);
      var botX = headlen * Math.cos(angle2);
      var botY = headlen * Math.sin(angle2);
      canv.save();
      ctx.beginPath(); //画直线

      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      arrowX = toX + topX;
      arrowY = toY + topY; //画上边箭头线

      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(toX, toY);
      arrowX = toX + botX;
      arrowY = toY + botY; //画下边箭头线

      ctx.lineTo(arrowX, arrowY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  },
  rect: function rect(canv, obj, ratio) {
    canv.save();
    canv.beginPath();

    if (obj.bg_color) {
      canv.fillStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.bg_color);
    }

    setLineDash(canv, obj.line_shape, ratio);
    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color); // 线颜色

    var x1 = parseInt(obj.left) * ratio;
    var y1 = parseInt(obj.bottom) * ratio;
    var x2 = parseInt(obj.right) * ratio;
    var y2 = parseInt(obj.top) * ratio;
    canv.rect(x1, y1, x2 - x1, y2 - y1);
    canv.closePath();
    drawFillMode(canv, obj, ratio);
    canv.restore();
  },
  // 圆角矩形
  round_rect: function round_rect(canv, obj, ratio) {
    canv.save();
    setLineDash(canv, obj.line_shape, ratio);
    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color); // 线颜色

    var x1 = parseInt(obj.left) * ratio; // 矩形左上角 x 轴坐标

    var y1 = parseInt(obj.bottom) * ratio; // 矩形左上角 y轴坐标

    var width = parseInt(obj.right - obj.left) * ratio; // 矩形的宽度

    var height = parseInt(obj.top - obj.bottom) * ratio; // 矩形的高度 

    var radius = Math.min(width, height) / 10; // 圆的半径

    canv.save();
    canv.translate(x1, y1);
    canv.beginPath(); //从右下角顺时针绘制，弧度从 0 到 1 / 2PI  

    canv.arc(width - radius, height - radius, radius, 0, Math.PI / 2); //矩形下边线

    canv.lineTo(radius, height); //左下角圆弧，弧度从 1 / 2PI 到 PI

    canv.arc(radius, height - radius, radius, Math.PI / 2, Math.PI); //矩形左边线

    canv.lineTo(0, radius); //左上角圆弧，弧度从 PI 到 3 / 2PI  

    canv.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2); //上边线

    canv.lineTo(width - radius, 0); //右上角圆弧

    canv.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2); //右边线  

    canv.lineTo(width, height - radius);
    canv.closePath();
    canv.restore(); // 清除translate 改变中线点

    drawFillMode(canv, obj, ratio);
    canv.restore();
  },
  // 椭圆
  ellipse: function ellipse(canv, obj, ratio) {
    canv.save();
    setLineDash(canv, obj.line_shape, ratio);
    canv.lineWidth = obj.brush_size * ratio; // 线宽

    canv.strokeStyle = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["stringToColor"])(obj.color); // 线颜色

    var a = parseInt((obj.right - obj.left) / 2) * ratio; // 椭圆横半轴长度

    var b = parseInt((obj.top - obj.bottom) / 2) * ratio; // 椭圆纵半轴长度

    var x = a + parseInt(obj.left) * ratio; // 椭圆中心 x 轴坐标

    var y = b + parseInt(obj.bottom) * ratio; // 椭圆中心 y 轴坐标

    var r = a > b ? a : b; // 选择a、b中的较大者作为arc方法的半径参数

    var ratioX = a / r; // 横轴缩放比率

    var ratioY = b / r; // 纵轴缩放比率

    canv.save();
    canv.scale(ratioX, ratioY); // 进行缩放（均匀压缩）

    canv.beginPath();
    canv.moveTo((x + a) / ratioX, y / ratioY); //从椭圆的左端点开始逆时针绘制

    canv.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI);
    canv.closePath();
    canv.restore(); // 清除缩放效果

    drawFillMode(canv, obj, ratio);
    canv.restore();
  },
  // 插入图片
  pic: function pic(canv, obj, ratio, canvasEle) {
    var filePath = "/".concat(obj.user_data.id);
    var key2 = "/".concat(obj.user_data.id, "/", 0, ".jpg"); // sendMessage(key2)

    if (!obj.insertSuccess) {
      insertImage();
    }

    function insertImage() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (n > 20) return;

      if (_media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].cacheFileUrlMap.get(filePath) && _media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].cacheFileUrlMap.get(filePath).get(key2)) {
        var left = obj.left * ratio;
        var bottom = obj.bottom * ratio;
        var right = obj.right * ratio;
        var top = obj.top * ratio;
        wx.getImageInfo({
          src: _media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"].cacheFileUrlMap.get(filePath).get(key2),
          success: function success(res) {
            console.log('getImageInfoRes', res);

            if (canvasEle) {
              var seal = canvasEle.createImage();
              seal.src = res.path;

              seal.onload = function () {
                console.log("加载图片成功");
                canv.drawImage(seal, 0, 0, right - left, top - bottom);
                obj.insertSuccess = true;
              };

              seal.onerror = function (res) {
                console.error("加载图片失败", res);
              };
            }
          },
          fail: function fail(err) {
            console.warn("Get image info failed!");
          }
        });
      } else {
        _media_white_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"]._getFileUrl(key2);

        setTimeout(function () {
          insertImage(++n);
        }, 500);
      }
    }
  }
}; // // 插入图片
// pic: (canv, obj, ratio, canvasEle) => {
//   let tempPathKey = `/${obj.user_data.id}/${0}.jpg`
//   let left = obj.left * ratio
//   let bottom = obj.bottom * ratio
//   let right = obj.right * ratio
//   let top = obj.top * ratio
//   const imgPath = wbManager.cacheTempPathMap && wbManager.cacheTempPathMap.get(tempPathKey)
//   if (imgPath) {
//     preloadImage(canvasEle, imgPath, (img)=> {
//       canv.drawImage(
//         img, 
//         0, 
//         0, 
//         right - left, 
//         top - bottom)
//     }, ()=> {
//       wbManager.cacheTempPathMap.delete(tempPathKey)
//       insertImage(canv, obj, ratio, canvasEle)
//     })
//   } else {
//     insertImage(canv, obj, ratio, canvasEle)
//   }
// },
// }
// function insertImage(canv, obj, ratio, canvasEle) {
// let filePath =  `/${obj.user_data.id}`
// let key2 = `/${obj.user_data.id}/${0}.jpg`
// let left = obj.left * ratio
// let bottom = obj.bottom * ratio
// let right = obj.right * ratio
// let top = obj.top * ratio
// if (wbManager.cacheFileUrlMap.get(filePath) && wbManager.cacheFileUrlMap.get(filePath).get(key2)) {
//   getTempPath(wbManager.cacheFileUrlMap.get(filePath).get(key2), (path)=> {
//     wbManager.cacheTempPathMap.set(key2, path)
//       if (canvasEle) {
//         preloadImage(canvasEle, path, (img)=> {
//           console.log('加载图片成功')
//           canv.drawImage(
//             img, 
//             0, 
//             0, 
//             right - left, 
//             top - bottom)
//         }, ()=> {
//           console.log('加载图片失败')
//         })
//       } 
//   })
// } else {
//   wbManager._getFileUrl(key2)
//   setTimeout(() => {
//     insertImage(canv, obj, ratio, canvasEle)
//   }, 500)
// }
// }

/* harmony default export */ __webpack_exports__["default"] = (draw);

/***/ }),

/***/ "./src/main/util/math.js":
/*!*******************************!*\
  !*** ./src/main/util/math.js ***!
  \*******************************/
/*! exports provided: isPointAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointAt", function() { return isPointAt; });
/**
 * 
 * @param {*} target
 * @param {*} p0 
 * @param {*} p1 
 */
function isPointAt(target, p0, p1) {
  var maxAllowOffsetLength = 15;
  var A = p1.y - p0.y;
  var B = p0.x - p1.x;
  var C = p1.x * p0.y - p0.x * p1.y; // 点到直线的距离方程

  var dis = Math.abs(A * target.x + B * target.y + C) / Math.sqrt(Math.pow(A, 2) + Math.pow(A, 2));

  if (dis > maxAllowOffsetLength) {
    return false;
  } else {
    var D = A * target.y - B * target.x;
    var jiaoX = -(A * C + B * D) / (Math.pow(B, 2) + Math.pow(A, 2)); //判断jiaoX是否在线段上，t如果在0~1之间说明在线段上，大于1则说明不在线段且靠近端点p1，小于0则不在线段上且靠近端点p0，这里用了插值的思想

    var t = (jiaoX - p0.x) / (p1.x - p0.x);

    if (t > 1 || isNaN(t)) {
      //最小距离为到p1点的距离
      dis = getLengthOfTwoPoint(p1, target);
    } else if (t < 0) {
      //最小距离为到p2点的距离
      dis = getLengthOfTwoPoint(p0, target);
    } //再次判断真正的最小距离是否小于允许值，小于则该点在直线上，反之则不在


    if (dis <= maxAllowOffsetLength) {
      return true;
    } else {
      return false;
    }
  }
} //这里是求两点距离公式


function getLengthOfTwoPoint(point1, point2) {
  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}



/***/ }),

/***/ "./src/main/util/msg-dispatcher.js":
/*!*****************************************!*\
  !*** ./src/main/util/msg-dispatcher.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");



/**
 * 消息分发器
 */

var MsgDispatcher = /*#__PURE__*/function () {
  function MsgDispatcher() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MsgDispatcher);

    this.handlerMap = new Map();
  }
  /**
   * 添加消息处理器
   * @param {*} msgId 
   * @param {*} handler 
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MsgDispatcher, [{
    key: "addMsgHandler",
    value: function addMsgHandler(msgId, handler) {
      if (!this.handlerMap[msgId]) {
        this.handlerMap[msgId] = handler;
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("Message: " + msgId + " handler already exists!");
      }
    }
    /**
     * 移除消息处理器
     * @param {*} msgId 
     */

  }, {
    key: "removeMsgHandler",
    value: function removeMsgHandler(msgId) {
      if (this.handlerMap[msgId]) {
        this.handlerMap["delete"](msgId);
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("Cannot find message handler: " + msgId);
      }
    }
    /**
     * 移除所有处理器
     */

  }, {
    key: "clearMsgHandler",
    value: function clearMsgHandler() {
      this.handlerMap = new Map();
    }
    /**
     * 消息处理
     * @param {*} msg 
     * @param {*} socket 
     */

  }, {
    key: "onMessage",
    value: function onMessage(msg, socket) {
      try {
        if (msg.id) {
          if (this.handlerMap[msg.id]) {
            this.handlerMap[msg.id](msg, socket);
          } else {// msg.id !== 30000 && logger.warn("No handler for msg: " + msg.id);
          }
        } else {
          _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("Unexpected!!!");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return MsgDispatcher;
}();

/* harmony default export */ __webpack_exports__["default"] = (MsgDispatcher);

/***/ }),

/***/ "./src/main/util/new_webscoket.js":
/*!****************************************!*\
  !*** ./src/main/util/new_webscoket.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");
/* harmony import */ var _util_msg_dispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/msg-dispatcher */ "./src/main/util/msg-dispatcher.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _common_event_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/event-registry */ "./src/common/event-registry.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/main/util/store.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/**
 * 对原生websocket的封装
 */

var HstWebSocket = /*#__PURE__*/function () {
  function HstWebSocket() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HstWebSocket);

    this.curAddrUrl = '';
    this.socket = {};
    this.allSocket = {};
    this.handlers = []; // 事件监听处理队列

    this.connected_hooks = []; // socket握手成功钩子函数列表

    this.closed_hooks = []; // socket链接断开钩子函数列表

    this.error_hooks = [];
    this.limitConnect = this.getTimer();
    this.proxyIndex = 0;
    this.timer = null;
    this.lockReconnect = false;
    var msgDispatcher = new _util_msg_dispatcher__WEBPACK_IMPORTED_MODULE_4__["default"]();
    msgDispatcher.addMsgHandler(_common_enums__WEBPACK_IMPORTED_MODULE_5__["ProxyEventType"].CREATE_CHANNEL_SUCCESS, this._onConnectSuccess.bind(this));
    this.handlers.push(msgDispatcher);
  }
  /**
   * 创建websocket
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HstWebSocket, [{
    key: "_createWebsocket",
    value: function _createWebsocket(key) {
      var self = this;
      var addrUrl = this.allSocket[key].addrUrl;
      this.curAddrUrl = addrUrl;

      if (!addrUrl) {
        throw new Error("Can't find webscoket link !");
      }

      var options = {
        url: addrUrl,
        success: function success() {
          _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info("Create websocket success.");
        },
        fail: function fail(res) {
          _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error("Create websocket failed, url: " + self.curAddrUrl);
          console.error(res);
        },
        complete: function complete() {
          _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info("Create websocket complete.");
        }
      };
      this.socket = wx.connectSocket(options);

      if (!this.socket) {
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error("Connect socket failed: " + this.curAddrUrl);
        return;
      }

      this._eventBind(key);
    }
  }, {
    key: "_sendCreateProxyMsg",
    value: function _sendCreateProxyMsg(key) {
      var backward_addr = this.allSocket[key].backward_addr;
      var msg = {
        id: _common_enums__WEBPACK_IMPORTED_MODULE_5__["ProxyEventType"].CREATE_CHANNEL,
        backward_addr: backward_addr,
        seq: key
      };

      if (this.socket && this.socket.readyState === 1) {
        this.socket.send({
          data: JSON.stringify(msg),
          success: function success(res) {},
          fail: function fail(res) {
            console.warn('res', res);
            _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error("Send failed!");
            resolve(false);
          },
          complete: function complete(res) {}
        });
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].warn('socket error');
      }
    }
    /**
     * 绑定事件处理
     * @param {*} socket 
     */

  }, {
    key: "_eventBind",
    value: function _eventBind(key) {
      var self = this;
      this.socket.onOpen(function (res) {
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].warn("Websocket opened: " + self.curAddrUrl);
        this.proxyIndex = 1;
        console.error(res);

        self._sendCreateProxyMsg(key);
      });
      this.socket.onClose(function (res) {
        var _arguments = arguments;
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].warn("Websocket closed: " + self.curAddrUrl);
        console.error(res);
        self.closed_hooks.map(function (item) {
          item(_arguments);
        });
        self.handlers = [];
        self.connected_hooks = [];
        self.closed_hooks = [];
        self.error_hooks = [];

        if (res.code !== 1000) {
          _common_event_registry__WEBPACK_IMPORTED_MODULE_6__["default"].trigger('onError', {
            code: 101
          });
        }
      });
      this.socket.onMessage(function (res) {
        var msg = JSON.parse(res.data);
        var _msg = msg,
            channel_id = _msg.channel_id;

        if (channel_id == _store__WEBPACK_IMPORTED_MODULE_7__["default"].mainWebsocketChannelId && msg.id == _common_enums__WEBPACK_IMPORTED_MODULE_5__["ProxyEventType"].CONNECT_ERROR && msg.result == 2) {
          _common_event_registry__WEBPACK_IMPORTED_MODULE_6__["default"].trigger('onError', {
            code: 101
          });

          if (self.socket !== undefined) {
            self.socket.close();
          }
        }

        if (msg.id == _common_enums__WEBPACK_IMPORTED_MODULE_5__["ProxyEventType"].BUSINESS_MESSAGE) {
          msg.msg && (msg = JSON.parse(msg.msg));
        }

        msg.channel_id = channel_id;

        if (msg.id != 30000) {
          // 白板心跳消息太多了
          _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("===> Recv msg from " + self.curAddrUrl + ": " + JSON.stringify(msg));
        }

        self.handlers.map(function (handler) {
          handler.onMessage(msg);
        });
      });
      this.socket.onError(function (res) {
        var _arguments2 = arguments;
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].warn('Error res', res);
        self.error_hooks.map(function (item) {
          item(_arguments2);
        });

        if (self.socket !== undefined) {
          self.socket.close();
        }
      });
    }
  }, {
    key: "_onConnectSuccess",
    value: function _onConnectSuccess() {
      var _arguments3 = arguments;
      this.connected_hooks.map(function (item) {
        item(_arguments3);
      });
    }
  }, {
    key: "createProxyConnect",
    value: function createProxyConnect(options) {
      var key = options.seq_id;

      if (this.allSocket[key]) {
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info('Proxy connect already exists !');
      } else {
        var _options$handler = options.handler,
            handler = _options$handler === void 0 ? {} : _options$handler,
            _options$opened = options.opened,
            opened = _options$opened === void 0 ? function () {} : _options$opened,
            _options$closed = options.closed,
            closed = _options$closed === void 0 ? function () {} : _options$closed,
            _options$error = options.error,
            error = _options$error === void 0 ? function () {} : _options$error;
        this.handlers.push(handler);
        this.connected_hooks.push(opened);
        this.closed_hooks.push(closed);
        this.error_hooks.push(error);
        this.allSocket[key] = _objectSpread({}, options);

        if (this.socket && this.socket.readyState === 1) {
          this._sendCreateProxyMsg(key);
        } else {
          this._createWebsocket(key);
        }
      }
    }
    /**
     * 重连处理
     */

  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this = this;

      console.warn('start reconnect');
      if (this.lockReconnect) return;
      this.lockReconnect = true;
      clearTimeout(this.timer);
      this.timer = null;

      if (this.proxyIndex < 2) {
        this.timer = setTimeout(function () {
          _this.lockReconnect = false;

          for (var key in _this.allSocket) {
            if (_this.socket && _this.socket.readyState === 1) {
              _this._sendCreateProxyMsg(key);
            } else {
              _this._createWebsocket(key);
            }
          }
        }, 5000);
        this.proxyIndex++;
      } else {
        clearInterval(this.timer);
        this.timer = null;
        throw new Error('重连失败');
      }
    } // reconnect() {
    //   if (!this.connectStatus) return
    //   this.limitConnect(function() {
    //     this.proxyIndex++;
    //   });
    //   this.createProxyConnect();
    // }
    // /**
    //  * 获取原生websocket
    //  */
    // getSocket() {
    //   if (this.socket && this.socket.readyState === 1) {
    //     return this.socket;
    //   }
    //   return null;
    // }

    /**
     * 暂时没使用
     */

  }, {
    key: "getTimer",
    value: function getTimer() {
      var timerArray = [];
      return function (fn) {
        timerArray.push(new Date().getTime());
        var timer = new Date().getTime();

        if (timer - timerArray[0] > 5000) {
          timerArray = [];
          fn.apply(this, arguments);
        }
      };
    } // /**
    //  * 暂时没使用
    //  * @param {*} val 
    //  */
    // setAddr(val) {
    //   if (!(val instanceof Array)) {
    //     throw new Error("value is not Array");
    //   }
    //   this.addrUrls = val;
    //   this.proxyIndex = 0;
    //   this.createWebsocket();
    // }

    /**
     * 发送消息
     * @param {*} msg 
     */

  }, {
    key: "send",
    value: function send(msg) {
      if (this.socket && this.socket.readyState === 1) {
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("<=== Send msg to " + this.curAddrUrl + ": " + msg);
        this.socket.send({
          data: msg,
          success: function success(res) {},
          fail: function fail(res) {
            _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error("Send failed!");
          },
          complete: function complete(res) {}
        });
      } else {
        _common_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error("Send msg failed: " + msg);
      }
    }
    /**
     * 关闭websocket
     */

  }, {
    key: "close",
    value: function close() {
      if (this.socket) {
        this.socket.close();
        this.socket = null;
      }
    }
  }]);

  return HstWebSocket;
}();

/* harmony default export */ __webpack_exports__["default"] = (new HstWebSocket());

/***/ }),

/***/ "./src/main/util/protocol-sender.js":
/*!******************************************!*\
  !*** ./src/main/util/protocol-sender.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/main/util/store.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _common_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/enums */ "./src/common/enums.js");
/* harmony import */ var _media_audio_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/audio-manager */ "./src/main/media/audio-manager.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ProtocolSender = /*#__PURE__*/function () {
  function ProtocolSender() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProtocolSender);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProtocolSender, [{
    key: "sendJoinGroupReq",
    value: function sendJoinGroupReq(groupId) {
      var msg = {
        business: "GS",
        id: 14100,
        group_id: groupId
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendLeaveGroupReq",
    value: function sendLeaveGroupReq() {
      var msg = {
        business: "GS",
        id: 14102
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendResolutionReport",
    value: function sendResolutionReport(params) {
      var msg = {
        business: "SS",
        id: 18004,
        stream_id: params.streamId,
        width: params.width,
        height: params.height,
        channel_type: params.channelType,
        report_type: params.reportType
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendLogoutReq",
    value: function sendLogoutReq() {
      var msg = {
        business: "BASE",
        id: 10002
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendLoginReq",
    value: function sendLoginReq(options) {
      var msg = {
        business: "BASE",
        id: 10000,
        app_id: options.appId,
        company_id: options.companyId,
        token: options.token,
        user_id: options.userId,
        client_guid: Object(_common_common__WEBPACK_IMPORTED_MODULE_4__["generateGUID"])(),
        // FIXME：不唯一
        os_type: options.osType,
        mutex_type: options.mutexType,
        force_login: options.forceLogin,
        registered_user: options.registered,
        protocol_version: "0.0.1",
        sdk_type: 26,
        extend_info: options.extendInfo
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendPublishMediaReq",
    value: function sendPublishMediaReq(operation, mediaType, mediaId, mediaOwner) {
      var msg = {
        business: "GS",
        id: 14104,
        //媒体类型，0为屏幕共享，1为音频，2为视频
        media_type: mediaType,
        // TODO 如果需要发布多路流，需要传入MediaId，单路流不影响
        media_id: mediaId,
        media_owner: mediaOwner,
        //操作类型，0停止广播，1开启广播
        operation: operation
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendRecvMediaReq",
    value: function sendRecvMediaReq(recvState, userId, mediaType, mediaId) {
      var msg = {
        business: "SS",
        id: 18002,
        group_id: _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.groupId,
        user_id: userId,
        media_type: mediaType,
        //媒体类型，0为屏幕共享，1为音频，2为视频
        media_id: mediaId,
        recv: recvState //0停止接收，1开启接收

      };

      if (mediaType == _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].AUDIO) {
        // 接收变声，但media_id没有_magic后缀，则加上后缀
        if (_media_audio_manager__WEBPACK_IMPORTED_MODULE_6__["default"].recvMagicAudio == _common_enums__WEBPACK_IMPORTED_MODULE_5__["RecvMagicMode"].ONLY_MAGIC) {
          if (mediaId.indexOf("_magic") == -1) {
            msg.media_id = mediaId + "_magic";
          }
        } else if (_media_audio_manager__WEBPACK_IMPORTED_MODULE_6__["default"].recvMagicAudio == _common_enums__WEBPACK_IMPORTED_MODULE_5__["RecvMagicMode"].ONLY_ORIGIN) {
          // 接收原声，但media_id有_magic后缀，则剥掉后缀
          if (mediaId.indexOf("_magic") != -1) {
            msg.media_id = mediaId.substr(0, mediaId.length - 6);
          }
        } else {// Do nothing
        }
      } // 白板属于组内资源


      if (mediaType == _common_enums__WEBPACK_IMPORTED_MODULE_5__["MediaType"].WHITE_BOARD) {
        msg.media_owner = "group";
      } else {
        msg.media_owner = "user";
      }

      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendRecvWhiteboardReq",
    value: function sendRecvWhiteboardReq(recvState, mediaType, mediaId) {
      var msg = {
        business: "SS",
        id: 18002,
        group_id: _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.groupId,
        media_type: mediaType,
        //媒体类型，0为屏幕共享，1为音频，2为视频, 4为白板
        media_id: mediaId,
        recv: recvState,
        //0停止接收，1开启接收
        source_type: 1,
        user_data: {}
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendCreateWhiteboardReq",
    value: function sendCreateWhiteboardReq(parmas) {
      var msg = {
        business: "WBS",
        id: 19000,
        cli_seq_id: 1,
        board_type: 0,
        width: 1280,
        height: 768,
        file_path: '',
        convert_file_path: '',
        page: 1
      };
      msg = Object.assign(msg, parmas);
      msg.convert_file_path = msg.convert_file_path.toUpperCase();
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendCloseWhiteboardReq",
    value: function sendCloseWhiteboardReq(mediaId) {
      var msg = {
        business: "WBS",
        id: 19002,
        board_id: mediaId
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendOpenUpload",
    value: function sendOpenUpload(_ref) {
      var file_path = _ref.file_path,
          size = _ref.size;
      var msg = {
        business: 'STORE',
        id: 20010,
        upload_id: _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.userId,
        checksum: '',
        file_path: file_path,
        file_size: size,
        upload_mode: 0
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendUploadEnd",
    value: function sendUploadEnd(params) {
      var msg = _objectSpread({
        business: 'STORE',
        id: 20002
      }, params);

      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendTransCodeMsg",
    value: function sendTransCodeMsg(file_path) {
      var msg = {
        business: 'DC',
        id: 21000,
        file_path: file_path
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendNotifySendStreamRes",
    value: function sendNotifySendStreamRes(params) {
      var msg = {
        business: "SS",
        id: 18001,
        stream_id: params.streamId,
        send: params.send,
        result: params.result
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendLogoutRecvChannelReq",
    value: function sendLogoutRecvChannelReq(streamId) {
      var msg = {
        business: 'SS',
        id: 19012,
        stream_id: streamId,
        client_id: "{" + _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.appId + ";" + _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.groupId + "};" + _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.userId
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendLoginRecvChannelReq",
    value: function sendLoginRecvChannelReq(params, bindId) {
      var msg = {
        business: 'WBS',
        id: 19004,
        stream_id: params.streamId,
        stream_token: params.streamToken,
        media_type: params.media_type,
        media_id: params.media_id,
        client_id: "{" + _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.appId + ";" + _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.groupId + "};" + _store__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo.userId,
        version: "1.0.0",
        bind_id: bindId
      };
      msg = this._dealMsg(msg, params.channelId);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendSdpInfo",
    value: function sendSdpInfo(description, pcId) {
      var msg = {
        business: "SS",
        id: 19008,
        type: description.type,
        pc_id: pcId,
        sdp: description.sdp
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendCandidate",
    value: function sendCandidate(event, pcId) {
      var msg = {
        business: "SS",
        id: 19008,
        pc_id: pcId,
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendLoginSendChannelReq",
    value: function sendLoginSendChannelReq(params, bindId) {
      var msg = {
        business: 'WBS',
        id: 19006,
        stream_id: params.streamId,
        stream_token: params.streamToken,
        media_type: params.mediaType,
        media_id: params.mediaId,
        client_id: _store__WEBPACK_IMPORTED_MODULE_3__["default"].getClientId(),
        version: "1.0.0",
        bind_id: bindId
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendSetAudioMagic",
    value: function sendSetAudioMagic(streamId, value) {
      var msg = {
        business: "SS",
        id: 19010,
        stream_id: streamId,
        client_id: _store__WEBPACK_IMPORTED_MODULE_3__["default"].getClientId(),
        param: [{
          param_type: "SoundTouch",
          param_value: value.toString()
        }]
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "SendSetAudioMagicReq",
    value: function SendSetAudioMagicReq(streamId, value) {
      var msg = {
        business: "SS",
        id: 19010,
        stream_id: streamId,
        client_id: _store__WEBPACK_IMPORTED_MODULE_3__["default"].getClientId(),
        param: [{
          param_type: "SoundTouch",
          param_value: value.toString()
        }]
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGetWhiteBoardFullDataReq",
    value: function sendGetWhiteBoardFullDataReq(channelId) {
      var msg = {
        id: 30003
      };
      msg = this._dealMsg(msg, channelId);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendChangeWhiteBoardProperty",
    value: function sendChangeWhiteBoardProperty(params, channelId) {
      var msg = {
        id: 30103,
        seq_id: Math.floor(Math.random() * 1000),
        edit_id: params.edit_id,
        zoom: params.zoom,
        rotate_angle: params.rotateAngle,
        mouse_posx: params.mouse_posx,
        mouse_posy: params.mouse_posy,
        scroll_posx: params.scroll_posx,
        cur_page: params.cur_page
      };
      msg = this._dealMsg(msg, channelId);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendSwitchWhiteBoard",
    value: function sendSwitchWhiteBoard(editId, channelId) {
      var msg = {
        id: 30101,
        seq_id: Math.floor(Math.random() * 100),
        edit_id: editId,
        is_select: true
      };
      msg = this._dealMsg(msg, channelId);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendRecvBoardFileList",
    value: function sendRecvBoardFileList(filePath) {
      var msg = {
        business: 'STORE',
        id: 20004,
        path: filePath
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGetWhiteBoardFileUrlReq",
    value: function sendGetWhiteBoardFileUrlReq(filePath) {
      var msg = {
        business: 'STORE',
        id: 20006,
        file_path: filePath
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendUserMsg",
    value: function sendUserMsg(params) {
      var msg = {
        business: "SG",
        id: 11000,
        dst_user_id: params.dstUserId,
        msg_id: 1024,
        msg: params.msg
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendUserMsgAck",
    value: function sendUserMsgAck(params) {
      var msg = {
        business: "SG",
        id: 11004,
        src_user_id: params.src_user_id,
        msg_id: params.msg_id
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGroupMsgWithWhiteList",
    value: function sendGroupMsgWithWhiteList(params) {
      var msg = {
        business: "SG",
        id: 11006,
        group_id: params.groupId,
        white_list: params.whiteList,
        msg_id: 1024,
        msg: params.msg
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGroupMsgWithBlackList",
    value: function sendGroupMsgWithBlackList(params) {
      var msg = {
        business: "SG",
        id: 11006,
        group_id: params.groupId,
        black_list: params.blackList,
        msg_id: 1024,
        msg: params.msg
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGroupMsg",
    value: function sendGroupMsg(params) {
      var msg = {
        business: "SG",
        id: 11006,
        group_id: params.groupId,
        msg_id: 1024,
        msg: params.msg
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGroupMsgAck",
    value: function sendGroupMsgAck(params) {
      var msg = {
        business: "SG",
        id: 11010,
        group_id: params.group_id,
        src_user_id: params.src_user_id,
        msg_id: params.msg_id
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendKickOutRes",
    value: function sendKickOutRes() {
      var msg = {
        business: "PS",
        id: 12008
      };
      msg = this._dealMsg(msg);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
    /**
     * 获取编辑
     * @param {*} websocket 
     */

  }, {
    key: "sendOpenEdit",
    value: function sendOpenEdit(channelId) {
      var msg = {
        id: 30001
      };
      msg = this._dealMsg(msg, channelId);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendPageInfoMsg",
    value: function sendPageInfoMsg(params) {
      var msg = {
        id: 30200,
        page: {
          pid: params.curPage,
          action: params.action
        },
        edit_id: params.edit_id,
        seq_id: params.seq_id,
        type: 'page'
      };
      msg = this._dealMsg(msg, params.channelId);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "sendGraphMsg",
    value: function sendGraphMsg(parmas) {
      // let msg = Object.assign({id: 31000}, parmas)
      var msg = this._dealMsg(parmas, parmas.channelId);

      _store__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send(JSON.stringify(msg));
    }
  }, {
    key: "_dealMsg",
    value: function _dealMsg(msg, channelId) {
      if (!channelId) {
        channelId = _store__WEBPACK_IMPORTED_MODULE_3__["default"].mainWebsocketChannelId;
      }

      return {
        id: 102,
        channel_id: channelId,
        msg: JSON.stringify(msg)
      };
    }
  }]);

  return ProtocolSender;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ProtocolSender());

/***/ }),

/***/ "./src/main/util/store.js":
/*!********************************!*\
  !*** ./src/main/util/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _msg_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msg-dispatcher */ "./src/main/util/msg-dispatcher.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common */ "./src/common/common.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/logger */ "./src/common/logger.js");





/**
 * 全局数据保存区
 * 注意：数据应该优先放到对应模块中，只有明确放在全局可以简化依赖关系，
 * 有利于降低代码复杂度，才可以放到Store中
 */

var Store = /*#__PURE__*/function () {
  function Store() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Store);

    // 与信令网关之间的连接
    this.websocket = null; // 断线恢复标志

    this.restoring = false; // 用户信息

    this.userInfo = {
      appId: null,
      groupId: null,
      userId: null
    }; // 登录信息

    this.loginParams = {
      accessUrl: "",
      token: null,
      companyId: "",
      forceLogin: 1,
      // 0是非强制登录 1是强制登录
      extendInfo: "",
      mutexType: "web",
      registered: 1,
      // 0是非注册，1是注册
      sessionId: ''
    }; // websocket主通道id

    this.mainWebsocketChannelId = ''; // Protocol handler

    this.msgDispatcher = new _msg_dispatcher__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
  /**
   * 获取ClientID
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Store, [{
    key: "getClientId",
    value: function getClientId() {
      return "{" + this.userInfo.appId + ";" + this.userInfo.groupId + "};" + this.userInfo.userId;
    }
    /**
     * 构造获取CP的URL参数
     */

  }, {
    key: "buildGetGateWayUrl",
    value: function buildGetGateWayUrl(accessUrl) {
      return accessUrl + "?appType=47&appId=" + this.userInfo.appId + "&ver=" + "2.1.0" + "&comid=" + this.loginParams.companyId + "&os=wechat" + "&token=" + this.loginParams.token;
    }
    /**
     * 构造获取代理的URL参数
     */

  }, {
    key: "buildGetProxyWayUrl",
    value: function buildGetProxyWayUrl(accessUrl) {
      return accessUrl + "?appType=48&appId=" + this.userInfo.appId + "&ver=" + "2.1.0" + "&comid=" + this.loginParams.companyId + "&os=wechat" + "&token=" + this.loginParams.token;
    }
  }]);

  return Store;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Store());

/***/ }),

/***/ "./src/main/util/tx-room.js":
/*!**********************************!*\
  !*** ./src/main/util/tx-room.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var TxRoom = /*#__PURE__*/function () {
  function TxRoom() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TxRoom);

    // this.serverDomain = 'https://fspwxlite.hst.com:443/weapp/webrtc_room';
    // this.serverDomain = 'https://fspwxlite.haoshitong.com:8443/weapp/webrtc_room';
    // this.serverDomain = 'https://xiaochengxu.haoshitong.com:8443';
    this.serverDomain = ''; // 生产环境
    // this.serverDomain = 'https://wxlite-webrtc.hst.com';

    this.appId = '';
    this.isPass = false;
    this.sessionId = '';
    this.requestNum = 0;
    this.heart = 0; // 判断心跳变量

    this.heartBeatReq = 0;
    this.requestSeq = 0; // 请求id

    this.requestTask = []; // 请求task
  }
  /**
   * [request 封装request请求]
   * @param {options}
   *   url: 请求接口url
   *   data: 请求参数
   *   success: 成功回调
   *   fail: 失败回调
   *   complete: 完成回调
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TxRoom, [{
    key: "request",
    value: function request(options) {
      var self = this;
      self.requestNum++;

      if (!this.isPass && !this.sessionId) {
        self.getSessionId(options);
        return;
      }

      var req = wx.request({
        url: self.serverDomain + options.url,
        data: options.data || {},
        method: 'POST',
        header: {
          'content-type': 'application/json',
          // 默认值
          sessionId: this.sessionId
        },
        // dataType: 'json',
        success: function success(res) {
          if (!self.isPass && 401 == res.statusCode) {
            self.getSessionId(options);
            return;
          }

          if (res.data.code) {
            console.error('服务器请求失败' + ', url=' + options.url + ', params = ' + (options.data ? JSON.stringify(options.data) : '') + ', 错误信息=' + JSON.stringify(res));
            options.fail && options.fail({
              errCode: res.data.code,
              errMsg: res.data.message
            });
          } else {
            options.success && options.success(res);
          }
        },
        fail: function fail(res) {
          console.error('请求失败' + ', url=' + options.url + ', 错误信息=' + JSON.stringify(res));
          options.fail && options.fail(res);
        },
        complete: function complete() {
          self.requestNum--;
          console.log('complete requestNum: ', self.requestNum);
        }
      });
      self.requestTask[self.requestSeq++] = req;
      return req;
    }
    /**
     * [clearRequest 中断请求]
     * @param {options}
     */

  }, {
    key: "clearRequest",
    value: function clearRequest() {
      var self = this;

      for (var i = 0; i < self.requestSeq; i++) {
        self.requestTask[i].abort();
      }

      self.requestTask = [];
      self.requestSeq = 0;
    }
    /**
    * 登录
    */

  }, {
    key: "getSessionId",
    value: function getSessionId(options) {
      var _this = this;

      var self = this;
      wx.login({
        success: function success(res_login) {
          if (!res_login.code) {
            return;
          }

          wx.request({
            url: self.serverDomain + '/wx/toLogin',
            data: {
              //wxfe13865e106f19fb
              appid: _this.appId,
              code: res_login.code
            },
            method: 'POST',
            header: {
              'content-type': 'application/json' // 默认值

            },
            success: function success(res) {
              _this.sessionId = res.data.result.sessionId;
              options && self.request(options);
            },
            fail: function fail(err) {
              console.error('getSessionId err', err);
            }
          });
        }
      });
    }
  }, {
    key: "getLoginInfo",
    value: function getLoginInfo(userID, success, fail) {
      var self = this;
      var data = {};

      if (userID) {
        data.userID = userID;
      }

      self.request({
        url: '/weapp/webrtc_room/get_login_info',
        data: data,
        success: success,
        fail: fail
      });
    }
  }, {
    key: "getRoomList",
    value: function getRoomList(index, count, success, fail) {
      var self = this;
      self.request({
        url: '/weapp/webrtc_room/get_room_list',
        data: {
          index: index,
          count: count,
          roomType: 'trtc'
        },
        success: success,
        fail: fail
      });
    }
  }, {
    key: "createRoom",
    value: function createRoom(userID, roomInfo, _success, fail) {
      console.log('roomInfo', roomInfo);
      var self = this;
      self.request({
        url: '/weapp/webrtc_room/create_room',
        data: {
          userID: userID,
          roomInfo: roomInfo,
          roomType: 'trtc'
        },
        success: function success(res) {
          _success && _success(res);
        },
        fail: fail
      });
    }
  }, {
    key: "enterRoom",
    value: function enterRoom(userID, roomID, _success2, fail) {
      var self = this;
      self.request({
        url: '/weapp/webrtc_room/enter_room',
        data: {
          userID: userID,
          roomID: roomID
        },
        success: function success(res) {
          _success2 && _success2(res);
        },
        fail: fail
      });
    }
  }, {
    key: "quitRoom",
    value: function quitRoom(userID, roomID, success, fail) {
      var self = this;
      self.request({
        url: '/weapp/webrtc_room/quit_room',
        data: {
          userID: userID,
          roomID: roomID
        },
        success: success,
        fail: fail
      }); // self.stopHeartBeat();
    }
  }, {
    key: "startHeartBeat",
    value: function startHeartBeat(userID, roomID, success, fail) {
      var self = this;
      self.heart = '1';
      self.heartBeat(userID, roomID, success, fail);
    }
  }, {
    key: "stopHeartBeat",
    value: function stopHeartBeat() {
      var self = this;
      self.heart = '';

      if (self.heartBeatReq) {
        console.log('停止心跳');
        self.heartBeatReq.abort();
        self.heartBeatReq = null;
      }
    }
  }, {
    key: "heartBeat",
    value: function heartBeat(userID, roomID, _success3, _fail) {
      var self = this;

      if (!self.heart) {
        self.clearRequest();
        return;
      }

      self.heartBeatReq = self.request({
        url: '/weapp/webrtc_room/heartbeat',
        data: {
          userID: userID,
          roomID: roomID
        },
        success: function success(res) {
          if (self.heart) {
            console.log('心跳成功');
            _success3 && _success3(res);
            setTimeout(function () {
              self.heartBeat(userID, roomID, _success3, _fail);
            }, 7000);
          }
        },
        fail: function fail(res) {
          _fail && _fail(res);

          if (self.heart) {
            setTimeout(function () {
              self.heartBeat(userID, roomID, _success3, _fail);
            }, 7000);
          }
        }
      });
    }
  }]);

  return TxRoom;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TxRoom());

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
//# sourceMappingURL=HstWxRtcEngine-2.1.0.js.map