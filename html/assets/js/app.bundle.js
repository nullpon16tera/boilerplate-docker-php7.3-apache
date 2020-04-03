/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var viewport_units_buggyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! viewport-units-buggyfill */ "./node_modules/viewport-units-buggyfill/viewport-units-buggyfill.js");
/* harmony import */ var viewport_units_buggyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(viewport_units_buggyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _include_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/include/_helper */ "./src/js/include/_helper.js");
/* harmony import */ var _include_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/include/_scroll */ "./src/js/include/_scroll.js");
/* harmony import */ var _include_gnavi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/include/_gnavi */ "./src/js/include/_gnavi.js");
/* harmony import */ var _include_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/include/_touch */ "./src/js/include/_touch.js");
// import quicklink from 'quicklink/dist/quicklink.mjs';
// quicklink();

viewport_units_buggyfill__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  hacks: viewport_units_buggyfill__WEBPACK_IMPORTED_MODULE_0___default.a.hacks,
  refreshDebounceWait: 250
}); // orientationchange
// window.addEventListener('resize', viewportUnitsBuggyfill.refresh, true);

var scrollCache = 0;
window.scrollCache = scrollCache; // 最大公約数を求める

function gcd(x, y) {
  if (y === 0) return x;
  return gcd(y, x % y);
}

window.gcd = gcd;
/**
 * Library
 * 読み込むだけで使えるようなライブラリーはここにインポートしてください
 * 設定が必要なライブラリーは、vendor/_sample.js のようにvendorディレクトリに入れてインポートしてください
 */
// import 'lity';

/**
 * 作成したもの
 */





var helper = new _include_helper__WEBPACK_IMPORTED_MODULE_1__["default"]();
helper.setQueryParameter();
new _include_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _include_gnavi__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _include_touch__WEBPACK_IMPORTED_MODULE_4__["default"]('a, button');

/***/ }),

/***/ "./src/js/include/_gnavi.js":
/*!**********************************!*\
  !*** ./src/js/include/_gnavi.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function NaviCtrl() {
  this.$win = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
  this.$htmlBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body');
  this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  this.$target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#gNavi');
  this.$btnOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#gnaviToggle');
  this.$btnClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#naviClose');
  this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main');
  this.scrollState = 0;
  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  this.init();
}

NaviCtrl.prototype.init = function () {
  this.$btnOpen.on('click', this.open);
  this.$btnClose.on('click', this.close);
  this.$target.find('a').on('click', this.close);
};

NaviCtrl.prototype.open = function () {
  if (!this.$target.hasClass('drawer-active')) {
    var scrollTop = this.$win.scrollTop();
    scrollCache = scrollTop;
    this.scrollState = scrollTop;
    this.$htmlBody.addClass('drawer-active');
    this.$target.addClass('drawer-active');
    this.$btnOpen.addClass('drawer-active');
    this.$content.css('transform', "translateY(-".concat(scrollTop, "px)"));
  } else {
    this.$htmlBody.removeClass('drawer-active');
    this.$target.removeClass('drawer-active');
    this.$btnOpen.removeClass('drawer-active');
    this.$win.scrollTop(this.scrollState);
    this.$content.css('transform', 'translateY(0px)');
  }
};

NaviCtrl.prototype.close = function () {
  this.$htmlBody.removeClass('drawer-active');
  this.$target.removeClass('drawer-active');
  this.$win.scrollTop(this.scrollState);
  this.$content.css('transform', 'translateY(0px)');
};

/* harmony default export */ __webpack_exports__["default"] = (NaviCtrl);

/***/ }),

/***/ "./src/js/include/_helper.js":
/*!***********************************!*\
  !*** ./src/js/include/_helper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $_GET = $_GET || [];
window.$_GET = $_GET;

function Helper() {
  this.$win = window;
  this.check = false; // this.isMobile = this.isMobile.bind(this);
  // this.init();
}

Helper.prototype.init = function () {};

Helper.prototype.isMobile = function () {
  var self = this;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) self.check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return this.check;
};

Helper.prototype = {
  isDataURI: function isDataURI(src) {
    return src && src.indexOf('data:') == 0;
  },
  generateUUID: function generateUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  isIOS: function isIOS() {
    return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  },
  isSafari: function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },
  isAndroid: function isAndroid() {
    return /(Android)/g.test(navigator.userAgent);
  },
  isIE11: function isIE11() {
    return navigator.userAgent.match(/Trident/);
  },
  isIELess: function isIELess() {
    var re = /(MSIE) ([\d.]+)/;
    var IEVersion = navigator.userAgent.match(re);
    console.log(IEVersion);
  },

  /**
   * 配列に指定の文字列があるか調べる
   *
   * @param String str
   * @param Array array
   * @return Boolen
   */
  inArray: function inArray(str, array) {
    var check = false;
    if (~array.indexOf(str)) check = true;
    return check;
  },
  hashCode: function hashCode(s) {
    return s.split("").reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  },
  getQueryParameter: function getQueryParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },
  getScreenWidth: function getScreenWidth() {
    return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio;
  },
  getScreenHeight: function getScreenHeight() {
    return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio;
  },
  getExtension: function getExtension(url) {
    return url.split('.').pop();
  },

  /**
   * オブジェクトや配列からクエリパラメーターを生成する
   *
   * @param params {Object|Array}
   */
  buildQuery: function buildQuery(params) {
    var out = '?';

    for (var k in params) {
      if (out !== '?') out += '&';
      var paramString = k + '=' + params[k];
      out += paramString;
    }

    out.substring(0, params.length - 2);
    return out;
  },

  /**
   * $_GETを使うためのセットアップ
   */
  setQueryParameter: function setQueryParameter(name) {
    var param = location.search.replace(/^[?]/i, "");
    var array = param.split('&');

    for (var i = 0; i < array.length; i++) {
      var keys = array[i].split('=');
      var regex = new RegExp(/([\[](.*)[\]])/);
      var results = regex.exec(keys[0]);
      var context = decodeURIComponent(keys[1]).replace(/\+/g, " ");

      if (results) {
        var key = keys[0].replace(/[\[](.*)[\]]/g, "");
        if (typeof $_GET[key] === 'undefined') $_GET[key] = new Array();
        $_GET[key].push(context);
      } else {
        if (keys[0]) {
          $_GET[keys[0]] = context;
        } else {
          $_GET = [];
        }
      }
    }

    return $_GET;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Helper);

/***/ }),

/***/ "./src/js/include/_scroll.js":
/*!***********************************!*\
  !*** ./src/js/include/_scroll.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function ScrollCtrl() {
  this.$win = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
  this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  this.$target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header');
  this.headerHeight = this.$target.height();
  this.headerStart = 100;
  this.headerPos = 0;
  this.headerOffsetTop = 0;
  this.classScrolled = 'scrolled';
  this.classScrolldown = 'scrolldown';
  this.scroll = this.scroll.bind(this);
  this.scrollDown = this.scrollDown.bind(this);
  this.init();
}

ScrollCtrl.prototype.init = function () {
  this.$win.on('load.headerScrolled', this.scroll);
  this.$win.on('scroll.headerScrolled', this.scroll);
  this.$win.on('scroll.headerScrollDown', this.scrollDown);
};

ScrollCtrl.prototype.scroll = function () {
  var posTop = this.$win.scrollTop();

  if (this.headerHeight + this.headerStart < posTop) {
    this.$body.addClass(this.classScrolled);
    this.$target.addClass(this.classScrolled);
  } else {
    this.$body.removeClass(this.classScrolled);
    this.$target.removeClass(this.classScrolled);
  }
};

ScrollCtrl.prototype.scrollDown = function () {
  var posTop = this.$win.scrollTop();

  if (posTop > this.headerPos) {
    if (scrollCache === posTop) return;

    if (this.$win.scrollTop() > this.headerHeight) {
      this.$body.addClass(this.classScrolldown);
      this.$target.addClass(this.classScrolldown);
    }
  } else {
    this.$body.removeClass(this.classScrolldown);
    this.$target.removeClass(this.classScrolldown);
  }

  this.headerPos = posTop;
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollCtrl);

/***/ }),

/***/ "./src/js/include/_touch.js":
/*!**********************************!*\
  !*** ./src/js/include/_touch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function TouchCtrl(target) {
  this.$target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target);
  this.init();
}

TouchCtrl.prototype.init = function () {
  this.$target.on('touchstart.touchCtrl mouseover.mouseCtrl', this.start);
  this.$target.on('touchmove.touchCtrl', this.move);
  this.$target.on('touchend.touchCtrl mouseout.mouseCtrl', this.end);
};

TouchCtrl.prototype.start = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('hover');
};

TouchCtrl.prototype.move = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('hmove');
};

TouchCtrl.prototype.end = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('hover').removeClass('hmove');
};

/* harmony default export */ __webpack_exports__["default"] = (TouchCtrl);

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map