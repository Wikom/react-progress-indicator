(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define("reactProgressIndicator", ["react", "prop-types", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["reactProgressIndicator"] = factory(require("react"), require("prop-types"), require("react-redux"));
	else
		root["reactProgressIndicator"] = factory(root["react"], root["prop-types"], root["react-redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressIndicator = function ProgressIndicator(_ref) {
	    var percent = _ref.percent;
	    return _react2.default.createElement(
	        'div',
	        { className: 'progress progress--pageload' + (percent === 100 ? ' invisible' : '') },
	        _react2.default.createElement(
	            'div',
	            {
	                className: 'progress-bar progress-bar-striped',
	                role: 'progressbar',
	                'aria-valuenow': percent,
	                'aria-valuemin': '0',
	                'aria-valuemax': '100',
	                style: { width: percent + '%' }
	            },
	            _react2.default.createElement(
	                'span',
	                { className: 'sr-only' },
	                percent,
	                '% Complete'
	            )
	        )
	    );
	}; /**
	    * Created by rouven on 12.04.17.
	    */
	
	ProgressIndicator.propTypes = {
	    percent: _propTypes2.default.number
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	    var queries = Object.keys(state.queries);
	    var count = queries.length;
	    var sum = queries.reduce(function (acc, val) {
	        return acc + state.queries[val].percent;
	    }, 0);
	    var percent = count > 0 ? sum / count : 0;
	
	    return {
	        percent: percent
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProgressIndicator);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map