(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__(1052);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/core/contexts/GitHubContext/index.tsx + 1 modules
var GitHubContext = __webpack_require__(8382);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




var __jsx = (external_react_default()).createElement;






var ContingencyApp = /*#__PURE__*/function (_App) {
  (0,inherits/* default */.Z)(ContingencyApp, _App);

  var _super = (0,createSuper/* default */.Z)(ContingencyApp);

  function ContingencyApp() {
    (0,classCallCheck/* default */.Z)(this, ContingencyApp);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(ContingencyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx((external_react_default()).Fragment, null, __jsx((head_default()), null, __jsx("title", null, "Marvel Team")), __jsx(GitHubContext/* GitHubProvider */.C, null, __jsx(Component, pageProps)));
    }
  }]);

  return ContingencyApp;
}(app.default);

/* harmony default export */ var _app = (ContingencyApp);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6512:
/***/ (function(module) {

"use strict";
module.exports = require("regenerator-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [641,262,912,382], function() { return __webpack_exec__(6577); });
module.exports = __webpack_exports__;

})();