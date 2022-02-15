exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 8382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": function() { return /* binding */ GitHubProvider; },
  "M": function() { return /* binding */ useGitHubContext; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/core/hooks/useGitHub/index.tsx


// MARK: Libs


function useGitHub() {
  var _useState = (0,external_react_.useState)(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,external_react_.useState)(null),
      repositories = _useState2[0],
      setRepositories = _useState2[1];

  var _useState3 = (0,external_react_.useState)(false),
      hasUserNotFound = _useState3[0],
      setHasUserNotFound = _useState3[1];

  var _useState4 = (0,external_react_.useState)(false),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0,external_react_.useState)(false),
      isLoadingSearch = _useState5[0],
      setIsLoadingSearch = _useState5[1];

  function clean() {
    setHasUserNotFound(false);
    setIsLoading(false);
    setIsLoadingSearch(false);
    setRepositories(null);
    setUser(null);
  }

  function getUser(_x) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(userSearch) {
      var res;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clean();
              setIsLoadingSearch(true);
              _context.prev = 2;
              _context.next = 5;
              return external_axios_default().get("https://api.github.com/users/".concat(userSearch));

            case 5:
              res = _context.sent;
              setUser(res.data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              setHasUserNotFound(true);

            case 12:
              _context.prev = 12;
              setIsLoadingSearch(false);
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));
    return _getUser.apply(this, arguments);
  }

  function getRepositoriesList() {
    return _getRepositoriesList.apply(this, arguments);
  }

  function _getRepositoriesList() {
    _getRepositoriesList = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var res;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setRepositories(null);
              setIsLoading(true);

              if (!user) {
                _context2.next = 11;
                break;
              }

              _context2.prev = 3;
              _context2.next = 6;
              return external_axios_default().get("https://api.github.com/users/".concat(user.login, "/repos"));

            case 6:
              res = _context2.sent;
              setRepositories(res.data);

            case 8:
              _context2.prev = 8;
              setIsLoading(false);
              return _context2.finish(8);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3,, 8, 11]]);
    }));
    return _getRepositoriesList.apply(this, arguments);
  }

  function getStarredList() {
    return _getStarredList.apply(this, arguments);
  }

  function _getStarredList() {
    _getStarredList = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var res;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setRepositories(null);
              setIsLoading(true);

              if (!user) {
                _context3.next = 11;
                break;
              }

              _context3.prev = 3;
              _context3.next = 6;
              return external_axios_default().get("https://api.github.com/users/".concat(user.login, "/starred"));

            case 6:
              res = _context3.sent;
              setRepositories(res.data);

            case 8:
              _context3.prev = 8;
              setIsLoading(false);
              return _context3.finish(8);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3,, 8, 11]]);
    }));
    return _getStarredList.apply(this, arguments);
  }

  return {
    state: {
      isLoading: isLoading,
      user: user,
      hasUserNotFound: hasUserNotFound,
      repositories: repositories,
      isLoadingSearch: isLoadingSearch
    },
    actions: {
      getUser: getUser,
      getRepositoriesList: getRepositoriesList,
      getStarredList: getStarredList,
      clean: clean
    }
  };
}
;// CONCATENATED MODULE: ./src/core/contexts/GitHubContext/index.tsx

var __jsx = (external_react_default()).createElement;
// MARK: Libs
 // MARK: Hooks

 // MARK: Interfaces

var GitHubContext = /*#__PURE__*/(0,external_react_.createContext)({});

function useGitHubContext() {
  var context = (0,external_react_.useContext)(GitHubContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider.');
  }

  return context;
}

var GitHubProvider = function GitHubProvider(props) {
  var children = props.children;

  var _useGitHub = useGitHub(),
      actions = _useGitHub.actions,
      state = _useGitHub.state;

  function getUser(userSearch) {
    actions.getUser(userSearch);
  }

  function getRepositoriesList() {
    actions.getRepositoriesList();
  }

  function getStarredList() {
    actions.getStarredList();
  }

  return __jsx(GitHubContext.Provider, {
    value: {
      hasUserNotFound: state.hasUserNotFound,
      isLoading: state.isLoading,
      isLoadingSearch: state.isLoadingSearch,
      repositories: state.repositories,
      user: state.user,
      getUser: getUser,
      getRepositoriesList: getRepositoriesList,
      getStarredList: getStarredList
    }
  }, children);
};



/***/ })

};
;