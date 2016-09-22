/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mingtao on 7/12/16.
	 */

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(12);
	__webpack_require__(15);

	var Card = __webpack_require__(7);
	var ScrollBar = __webpack_require__(14);
	var ScrollObject = __webpack_require__(17);
	__webpack_require__(18);


	window.onload = function () {
	  var body = document.querySelector(".body");
	  var scrollObject = new ScrollObject();
	  var scrollBar = new ScrollBar(scrollObject);
	  body.appendChild(scrollBar.element);
	  body.appendChild(scrollObject.element);

	  utils.getJson("/items", {}, function (data) {
	    var param = {
	      title: data.title,
	      time: "01.25",
	      text: data.description,
	      image: data.image,
	      color: []
	    };

	    for(var i = 0; i < data.colors.length; i++) {
	      param.color.push("#" + data.colors[i].hex_value);
	    }

	    var card = new Card(param);

	    scrollObject.addItems([card])
	  });

	  function xxxx() {

	    card2.style.transform = "translate(100%, 0)";
	      var xxx = card.parentNode
	      xxx.removeChild(card);
	      xxx.appendChild(card);
	      setTimeout(function () {
	        card2.className = "card tra"
	        setTimeout(function () {
	          card2.style.transform = "translate(0,0)"
	        },1)
	      },1)
	  }
	  window.xxxx = xxxx
	  window.card = card;
	  window.card2 = card2
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	exports.i(__webpack_require__(8), "");

	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.clear {\n  clear: both; }\n\nbody {\n  background-color: #E8F1F5;\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\", \"Microsoft YaHei\", \"Microsoft YaHei UI\", \"Microsoft YaHei Regular\", \"\\9ED1\\4F53\"; }\n\n#container {\n  max-width: 928px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 50px; }\n\n.header, .user {\n  height: 60px;\n  box-sizing: border-box;\n  border: 2px solid #fff; }\n\n.user {\n  width: 60px;\n  float: right; }\n\n.header {\n  float: left;\n  width: 282px;\n  padding: 15px 22px; }\n  .header .logo, .header .page {\n    display: inline-block;\n    height: 26px;\n    line-height: 26px;\n    vertical-align: top;\n    font-size: 20px; }\n  .header .page {\n    margin-left: 24px;\n    letter-spacing: 3px; }\n\n.logo span {\n  float: left;\n  margin-right: 3px; }\n  .logo span:nth-child(1) {\n    color: #a08e77; }\n  .logo span:nth-child(2) {\n    color: #f1af63; }\n  .logo span:nth-child(3) {\n    color: #90b774; }\n  .logo span:nth-child(4) {\n    color: #818181; }\n  .logo span:nth-child(5) {\n    color: #81c9d1; }\n  .logo span:nth-child(6) {\n    color: #799999; }\n  .logo span:nth-child(7) {\n    color: #bacc65; }\n  .logo span:nth-child(8) {\n    color: #65b8ba; }\n\n.body {\n  position: relative;\n  max-width: 810px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto; }\n  .body .add-btn {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #dcccb4;\n    left: 100%;\n    top: 50%; }\n  .body .scroll-bar {\n    position: absolute;\n    width: 16px;\n    height: 40%;\n    margin-top: 10px;\n    left: 100%;\n    top: 0; }\n  .body .scroll-bar-track {\n    height: 100%;\n    border-radius: 8px;\n    background-color: #ddd; }\n  .body .scroll-bar-thumb {\n    position: relative;\n    height: 50px;\n    top: 20px;\n    border-radius: 8px;\n    background-color: #009999; }\n\n.scroll-obj-container {\n  overflow-y: hidden; }\n\n.scroll-obj {\n  position: relative; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./Card.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./Card.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".card > header > .title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.card > .body > .text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  word-break: break-all;\n  overflow: hidden; }\n\n.card {\n  display: inline-block;\n  vertical-align: top;\n  width: 250px;\n  height: 228px;\n  margin: 10px;\n  padding: 10px 10px 0;\n  background-color: #fff;\n  box-sizing: border-box; }\n  .card.tra {\n    transition: all 1s; }\n  .card > header {\n    border-bottom: 1px solid #dde5e5;\n    height: 27px; }\n    .card > header > .title {\n      display: inline-block;\n      vertical-align: bottom;\n      width: 194px;\n      color: #799999;\n      font-size: 16px;\n      letter-spacing: 1.5px; }\n    .card > header > .time {\n      display: inline-block;\n      vertical-align: bottom;\n      width: 36px;\n      color: #799999;\n      opacity: 0.54;\n      font-size: 12px;\n      letter-spacing: 1.2px; }\n  .card > .body {\n    margin-top: 8px; }\n    .card > .body section {\n      display: inline-block;\n      vertical-align: top;\n      height: 102px; }\n      .card > .body section.left {\n        width: 135px;\n        margin-right: 5px; }\n      .card > .body section.right {\n        width: 90px; }\n    .card > .body > .text {\n      height: 32px;\n      overflow: hidden;\n      text-indent: 2em;\n      color: #999;\n      font-size: 12px;\n      letter-spacing: 1.2px;\n      margin-top: 10px;\n      margin-bottom: 8px; }\n    .card > .body .color-2-0, .card > .body .color-2-1 {\n      height: 51px; }\n    .card > .body .color-3-0 {\n      height: 24px; }\n    .card > .body .color-3-1 {\n      height: 34px; }\n    .card > .body .color-3-2 {\n      height: 44px; }\n    .card > .body .color-4-0 {\n      height: 20px; }\n    .card > .body .color-4-1 {\n      height: 23px; }\n    .card > .body .color-4-2 {\n      height: 27px; }\n    .card > .body .color-4-3 {\n      height: 32px; }\n  .card > footer {\n    height: 30px;\n    border-top: 1px solid #dde5e5;\n    box-sizing: border-box; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Card = function () {
	  function Card(obj) {
	    _classCallCheck(this, Card);

	    var template = '\
	        <header>\
	          <span class="title">{{title}}</span\
	          ><span class="time">{{time}}</span>\
	        </header>\
	        <div class="body">\
	          <div>\
	            <section class="left">\
	              <img src="{{image}}">\
	            </section\
	            ><section class="right">\
	              ``color``\
	            </section>\
	          </div>\
	          <p class="text">{{text}}</p>\
	        </div>\
	        <footer></footer>\
	      ';

	    {
	      var fields = Object.keys(obj);
	      for (var i in fields) {
	        if (!fields.hasOwnProperty(i)) {
	          console.error("Error happens in param.");
	          continue;
	        }
	        var pattern = new RegExp("\{\{" + fields[i] + "}}", "g");
	        template = template.replace(pattern, obj[fields[i]]);
	      }
	    }

	    // render colors
	    {
	      if (obj.color) {
	        var str = '';
	        var len = obj.color.length;

	        if (len <= 4 && len >= 2) {
	          for (var _i in obj.color) {
	            if (!obj.color.hasOwnProperty(_i)) {
	              console.error("Error happens in color.");
	              continue;
	            }
	            str += '<div class="color color-' + len + '-' + _i + '" style="background-color:' + obj.color[_i] + '"></div>';
	          }
	        } else {
	          console.error("color.length is invalid.");
	        }

	        template = template.replace(/``color``/, str);
	      } else {
	        console.error("color needed.");
	      }
	    }

	    var element = document.createElement('div');
	    element.className = "card";
	    element.innerHTML = template;
	    this.element = element;
	    this.listenEvent();
	  }

	  _createClass(Card, [{
	    key: "listenEvent",
	    value: function listenEvent() {
	      this.element.draggable = true;
	      this.element.addEventListener("dragstart", function (e) {
	        var that = this;
	        setTimeout(function () {
	          //that.parentNode.removeChild(that)
	          that.style.opacity = 0;
	        }, 1);
	        console.log(e);
	      });
	      this.element.addEventListener("dragenter", function (e) {
	        console.log(e);
	      });
	    }
	  }]);

	  return Card;
	}();

	module.exports = Card;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/*\nYUI 3.18.1 (build f7e7bcb)\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttp://yuilibrary.com/license/\n*/\n\nhtml{color:#000;background:#FFF}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}", ""]);

	// exports


/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ScrollBar.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ScrollBar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScrollBar = function () {
	  function ScrollBar(obj) {
	    _classCallCheck(this, ScrollBar);

	    var template = '\
	      <div class="scroll-bar-track">\
	        <div class="scroll-bar-thumb">\
	        </div>\
	      </div>\
	    ';
	    var element = document.createElement('div');
	    element.className = "scroll-bar";
	    element.innerHTML = template;
	    this.element = element;
	    var that = this;
	    this.listenEvent();

	    setTimeout(function () {
	      that.bindView(obj);
	    });
	  }

	  _createClass(ScrollBar, [{
	    key: 'bindView',
	    value: function bindView(obj) {
	      this.view = obj;
	      obj.bar = this;

	      this.trackHeight = this.element.offsetHeight;
	      this.scrollTop = 0;
	      this.thumbHeight = obj.getScrollHeight() * this.trackHeight;
	      var thumb = this.element.querySelector(".scroll-bar-thumb");
	      this.canScrollHeight = this.trackHeight - this.thumbHeight;
	      this.canScrollHeight = this.canScrollHeight < 0 ? 0 : this.canScrollHeight;
	      thumb.style.height = this.thumbHeight + "px";
	      thumb.style.top = this.scrollTop + "px";
	    }
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight() {
	      var thumb = this.element.querySelector(".scroll-bar-thumb");
	      this.thumbHeight = this.view.getScrollHeight() * this.trackHeight;
	      this.canScrollHeight = this.trackHeight - this.thumbHeight;
	      this.canScrollHeight = this.canScrollHeight < 0 ? 0 : this.canScrollHeight;
	      thumb.style.height = this.thumbHeight + "px";
	    }
	  }, {
	    key: 'updateView',
	    value: function updateView() {
	      var thumb = this.element.querySelector(".scroll-bar-thumb");
	      thumb.style.height = this.thumbHeight + "px";
	      thumb.style.top = this.scrollTop + "px";
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(top_percent) {
	      this.view.updateView(top_percent);
	    }
	  }, {
	    key: 'scrollDown',
	    value: function scrollDown() {
	      var scrollTop = this.scrollTop;
	      scrollTop += 20;
	      if (scrollTop > this.canScrollHeight) {
	        scrollTop = this.canScrollHeight;
	      }
	      this.scrollTop = scrollTop;
	      this.updateView();

	      this.trigger(scrollTop / this.trackHeight);
	    }
	  }, {
	    key: 'scrollUp',
	    value: function scrollUp() {
	      var scrollTop = this.scrollTop;
	      scrollTop -= 20;
	      if (scrollTop < 0) {
	        scrollTop = 0;
	      }
	      this.scrollTop = scrollTop;
	      this.updateView();
	      this.trigger(scrollTop / this.trackHeight);
	    }
	  }, {
	    key: 'listenEvent',
	    value: function listenEvent() {
	      var thumb = this.element.querySelector(".scroll-bar-thumb");
	      var that = this;

	      window.addEventListener("mousewheel", function () {
	        /**
	         * 往下翻 deltaY 为53
	         * 往上翻 deltaY 为-53
	         */
	        if (event.deltaY > 0) {
	          that.scrollDown();
	        } else {
	          that.scrollUp();
	        }
	      });
	      window.addEventListener("DOMMouseScroll", function (event) {
	        /**
	         * 往下翻 detail 为3
	         * 往上翻 detail 为-3
	         */
	        console.log(event.detail);
	      });

	      thumb.addEventListener("mousedown", function (event) {
	        var originalClientY = event.clientY;
	        var originalScrollTop = that.scrollTop;

	        {
	          (function () {
	            var mousemove = function mousemove(event) {
	              var clientY = event.clientY;
	              var scrollY = clientY - originalClientY + originalScrollTop;

	              if (scrollY > that.canScrollHeight) {
	                scrollY = that.canScrollHeight;
	              } else if (scrollY < 0) {
	                scrollY = 0;
	              }
	              that.scrollTop = scrollY;
	              thumb.style.top = scrollY + "px";

	              that.trigger(scrollY / that.trackHeight);
	            };
	            window.addEventListener("mousemove", mousemove);

	            var mouseup = function mouseup() {
	              window.removeEventListener("mousemove", mousemove);
	              window.removeEventListener("mouseup", mouseup);
	            };
	            window.addEventListener("mouseup", mouseup);
	          })();
	        }
	      });
	    }
	  }]);

	  return ScrollBar;
	}();

	module.exports = ScrollBar;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./scrollObject.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./scrollObject.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScrollObject = function () {
	  function ScrollObject() {
	    _classCallCheck(this, ScrollObject);

	    var template = '\
	      <div class="scroll-obj"></div>\
	    ';
	    var element = document.createElement("div");
	    element.innerHTML = template;
	    element.className = "scroll-obj-container";
	    this.element = element;
	    this.updateHeight();

	    this.arr = [];
	  }

	  _createClass(ScrollObject, [{
	    key: "updateHeight",
	    value: function updateHeight() {
	      var element = this.element;
	      var updateSize = function updateSize() {
	        element.style.height = window.innerHeight - 130 + "px";
	      };
	      window.addEventListener('resize', function () {
	        updateSize();
	      });
	      updateSize();
	    }
	  }, {
	    key: "addItems",
	    value: function addItems(arr) {
	      var scrollObj = this.element.querySelector(".scroll-obj");
	      for (var i = 0; i < arr.length; i++) {
	        scrollObj.appendChild(arr[i].element);
	        this.arr.push(arr[i]);
	      }

	      var that = this;
	      setTimeout(function () {
	        that.bar.updateHeight();
	      }, 0);
	    }
	  }, {
	    key: "removeItem",
	    value: function removeItem(index) {
	      var scrollObj = this.element.querySelector(".scroll-obj");
	      scrollObj.removeChild(this.arr[index].element);

	      var that = this;
	      setTimeout(function () {
	        that.bar.updateHeight();
	      }, 0);
	    }
	  }, {
	    key: "getScrollHeight",
	    value: function getScrollHeight() {
	      var scrollObj = this.element.querySelector(".scroll-obj");
	      var value = this.element.offsetHeight / scrollObj.offsetHeight;
	      value = value > 1 ? 1 : value;
	      return value;
	    }
	  }, {
	    key: "updateView",
	    value: function updateView(top_percent) {
	      var scrollObj = this.element.querySelector(".scroll-obj");
	      scrollObj.style.top = -top_percent * scrollObj.offsetHeight + "px";
	    }
	  }, {
	    key: "scrollDown",
	    value: function scrollDown(value) {
	      var scrollObj = this.element.querySelector(".scroll-obj");
	      scrollObj.style.top = value + "px";
	    }
	  }, {
	    key: "scrollUp",
	    value: function scrollUp() {}
	  }]);

	  return ScrollObject;
	}();

	module.exports = ScrollObject;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Created by mingtao on 9/22/16.
	 */

	utils = {
	  getJson: function (url, data, callback, callbackError) {
	    var xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = function () {
	      if(xhr.readyState === 4) {
	        if(xhr.status >= 200 && xhr.status < 300|| xhr.status == 304) {
	          var data = JSON.parse(xhr.responseText);
	          callback(data);
	        } else {
	          callbackError();
	        }
	      }
	    };
	    xhr.open('get', url);
	    xhr.send(data);
	  },
	  post: function () {
	  }
	};

/***/ }
/******/ ]);