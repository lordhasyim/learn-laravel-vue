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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (106:34)\n\n\u001b[0m \u001b[90m 104 | \u001b[39m})\n \u001b[90m 105 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 106 | \u001b[39mrouter\u001b[33m.\u001b[39mbeforeEach(to\u001b[33m,\u001b[39m from\u001b[33m,\u001b[39m next) \u001b[33m=>\u001b[39m {\n \u001b[90m     | \u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 107 | \u001b[39m    \u001b[36mif\u001b[39m (to\u001b[33m.\u001b[39mmatched\u001b[33m.\u001b[39msome(record \u001b[33m=>\u001b[39m record\u001b[33m.\u001b[39mmeta\u001b[33m.\u001b[39mrequiresAuth))\n \u001b[90m 108 | \u001b[39m    {\n \u001b[90m 109 | \u001b[39m        \u001b[36mif\u001b[39m (localStorage\u001b[33m.\u001b[39mgetItem(\u001b[32m'bigStore.jwt'\u001b[39m) \u001b[33m==\u001b[39m \u001b[36mnull\u001b[39m)\u001b[0m\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/node-sass/vendor/linux-x64-57/binding.node\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - Linux 64-bit with Node.js 7.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at runLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/Compilation.js:157:10)\n    at moduleFactory.create (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/Compilation.js:460:10)\n    at factory (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModuleFactory.js:243:5)\n    at applyPluginsAsyncWaterfall (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModuleFactory.js:94:13)\n    at /home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/tapable/lib/Tapable.js:272:13)\n    at resolver (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModuleFactory.js:69:10)\n    at process.nextTick (/home/hasyim/HTTP/WWW/laravel/bigStore/node_modules/webpack/lib/NormalModuleFactory.js:196:7)\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)");

/***/ })
/******/ ]);