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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	class Share {}

	Share.install = () => {
	    Vue.component("v-share", Vue.extend({
	        name: 'v-share',
	        template: `<div>
	            <input type="button" value="{{val_btn}}" @click="click_btn"/>
	         </div>
	        `,
	        data: function () {
	            return {
	                val_btn: "哼哼哈嘿"
	            };
	        },
	        methods: {
	            click_btn: function () {
	                alert("click_btn");
	            }
	        }
	    }));
	};

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Share);
	}

	// export default Share;

/***/ }
/******/ ]);