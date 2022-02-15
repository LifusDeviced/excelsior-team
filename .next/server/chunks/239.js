exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 9239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_Home; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/core/contexts/GitHubContext/index.tsx + 1 modules
var GitHubContext = __webpack_require__(8382);
;// CONCATENATED MODULE: ./src/core/hooks/useStrings/interfaces.ts
var Language;

(function (Language) {
  Language["ptBR"] = "ptBR";
  Language["enUS"] = "enUS";
})(Language || (Language = {}));
;// CONCATENATED MODULE: ./src/core/hooks/useStrings/index.tsx
// MARK: Libs
 // MARK: Interfaces


function useStrings(initialLanguage) {
  var _useState = (0,external_react_.useState)(initialLanguage || Language.ptBR),
      language = _useState[0],
      setLanguage = _useState[1];

  var strings = {
    ptBR: {
      components: {
        repositoryList: {
          notFounded: 'Sem repositórios encontrados :('
        },
        searchBar: {
          button: 'Buscar',
          placeHolder: 'Pesquise o login de um usuário gitHub'
        },
        userCard: {
          subTitle1: 'Repositórios públicos: ',
          subTitle2: 'Seguidores: ',
          button1: 'Repositórios',
          button2: 'Favoritos'
        },
        userNotFound: {
          warning: 'Usuário Não encontrado :('
        }
      }
    },
    enUS: {
      components: {
        repositoryList: {
          notFounded: 'No repositories found :('
        },
        searchBar: {
          button: 'Search',
          placeHolder: 'Search for a gitHub user login'
        },
        userCard: {
          subTitle1: 'Public repositories: ',
          subTitle2: 'Followers: ',
          button1: 'Repos',
          button2: 'Starred'
        },
        userNotFound: {
          warning: 'User Not found :('
        }
      }
    }
  };
  return {
    strings: strings[language],
    language: language,
    setLanguage: setLanguage
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js + 26 modules
var CircularProgress = __webpack_require__(7956);
// EXTERNAL MODULE: ./src/components/RepositoryList/styles.module.scss
var styles_module = __webpack_require__(8984);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/RepositoryList/index.tsx

var __jsx = (external_react_default()).createElement;
// MARK: Hooks
 // MARK: Interfaces

// MARK: Styles


var RepositoryList = function RepositoryList(props) {
  var list = props.list,
      listTitle = props.listTitle;

  var _useStrings = useStrings(),
      strings = _useStrings.strings;

  var repositoryList = strings.components.repositoryList;
  return __jsx("div", {
    className: (styles_module_default()).container
  }, __jsx("p", {
    className: (styles_module_default()).container__title
  }, listTitle), list.length > 0 ? __jsx("ul", null, list.map(function (_repository, index) {
    return __jsx("a", {
      key: "repository".concat(index),
      href: _repository.html_url,
      target: "_blank",
      rel: "noreferrer"
    }, __jsx("li", null, _repository.name));
  })) : __jsx("p", null, repositoryList.notFounded, " "));
};

/* harmony default export */ var components_RepositoryList = (RepositoryList);
;// CONCATENATED MODULE: ./src/components/UserCard/helpers.ts
function onReposClicked(handleRepos, setListTitle) {
  handleRepos();
  setListTitle('Repositórios:');
}
function onStarredClicked(handleStarred, setListTitle) {
  handleStarred();
  setListTitle('Starred:');
}
// EXTERNAL MODULE: ./src/components/UserCard/styles.module.scss
var UserCard_styles_module = __webpack_require__(1044);
var UserCard_styles_module_default = /*#__PURE__*/__webpack_require__.n(UserCard_styles_module);
;// CONCATENATED MODULE: ./src/components/UserCard/index.tsx

var UserCard_jsx = (external_react_default()).createElement;
// MARK: Libs
 // MARK: Hooks

 // MARK: components


 // MARK: Helprs

 // MARK: Interfaces

// MARK: Styles


var UserCard = function UserCard(props) {
  var user = props.user,
      repositories = props.repositories,
      isLoading = props.isLoading,
      handleRepos = props.handleRepos,
      handleStarred = props.handleStarred;

  var _useStrings = useStrings(),
      strings = _useStrings.strings;

  var userCard = strings.components.userCard;

  var _useState = (0,external_react_.useState)(''),
      listTitle = _useState[0],
      setListTitle = _useState[1];

  return UserCard_jsx("div", {
    className: (UserCard_styles_module_default()).container
  }, UserCard_jsx("div", {
    className: (UserCard_styles_module_default()).container__row
  }, UserCard_jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: (UserCard_styles_module_default()).container__image
  }), UserCard_jsx("p", {
    className: (UserCard_styles_module_default()).container__loginText
  }, user.login)), UserCard_jsx("div", {
    className: (UserCard_styles_module_default()).container__row
  }, UserCard_jsx("div", null, UserCard_jsx("p", {
    className: (UserCard_styles_module_default()).container__infoText
  }, "".concat(userCard.subTitle1, " ").concat(user.public_repos)), UserCard_jsx("p", {
    className: (UserCard_styles_module_default()).container__infoText
  }, "".concat(userCard.subTitle2, " ").concat(user.followers))), UserCard_jsx("div", null, UserCard_jsx("button", {
    type: "button",
    className: (UserCard_styles_module_default()).container__button,
    onClick: function onClick() {
      return onReposClicked(handleRepos, setListTitle);
    }
  }, userCard.button1), UserCard_jsx("button", {
    type: "button",
    className: (UserCard_styles_module_default()).container__button,
    onClick: function onClick() {
      return onStarredClicked(handleStarred, setListTitle);
    }
  }, userCard.button2))), UserCard_jsx("div", {
    className: (UserCard_styles_module_default()).container__listBox
  }, isLoading ? UserCard_jsx(CircularProgress/* default */.Z, {
    size: 35
  }) : repositories && UserCard_jsx(components_RepositoryList, {
    list: repositories,
    listTitle: listTitle
  })));
};

/* harmony default export */ var components_UserCard = (UserCard);
// EXTERNAL MODULE: ./src/components/UserNotFound/styles.module.scss
var UserNotFound_styles_module = __webpack_require__(188);
var UserNotFound_styles_module_default = /*#__PURE__*/__webpack_require__.n(UserNotFound_styles_module);
;// CONCATENATED MODULE: ./src/components/UserNotFound/index.tsx

var UserNotFound_jsx = (external_react_default()).createElement;
// MARK: Hooks
 // MARK: Styles



var UserNotFound = function UserNotFound() {
  var _useStrings = useStrings(),
      strings = _useStrings.strings;

  var userNotFound = strings.components.userNotFound;
  return UserNotFound_jsx("div", {
    className: (UserNotFound_styles_module_default()).container
  }, UserNotFound_jsx("p", {
    className: (UserNotFound_styles_module_default()).container__text
  }, userNotFound.warning, " "));
};

/* harmony default export */ var components_UserNotFound = (UserNotFound);
// EXTERNAL MODULE: ./src/components/SearchBar/styles.module.scss
var SearchBar_styles_module = __webpack_require__(3227);
var SearchBar_styles_module_default = /*#__PURE__*/__webpack_require__.n(SearchBar_styles_module);
;// CONCATENATED MODULE: ./src/components/SearchBar/index.tsx

var SearchBar_jsx = (external_react_default()).createElement;
// MARK: Libs
 // MARK: Hooks

 // MARK Interfaces

// MARK: Styles


var SearchBar = function SearchBar(props) {
  var getSearch = props.getSearch;

  var _useStrings = useStrings(),
      strings = _useStrings.strings;

  var searchBar = strings.components.searchBar;

  var _useState = (0,external_react_.useState)(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var handleInput = function handleInput(event) {
    setSearchText(event.target.value);
  };

  var handleSubmit = function handleSubmit() {
    getSearch(searchText);
  };

  return SearchBar_jsx("div", {
    className: (SearchBar_styles_module_default()).container
  }, SearchBar_jsx("input", {
    className: (SearchBar_styles_module_default()).container__input,
    onChange: handleInput,
    placeholder: searchBar.placeHolder,
    id: "searchInput"
  }), SearchBar_jsx("button", {
    className: (SearchBar_styles_module_default()).container__button,
    type: "submit",
    onClick: handleSubmit,
    id: "submitSearchButton",
    "data-testid": "submitSearchButton"
  }, searchBar.button));
};

/* harmony default export */ var components_SearchBar = (SearchBar);
// EXTERNAL MODULE: ./src/pages/Home/styles.module.scss
var Home_styles_module = __webpack_require__(7201);
var Home_styles_module_default = /*#__PURE__*/__webpack_require__.n(Home_styles_module);
;// CONCATENATED MODULE: ./src/pages/Home/index.tsx
var Home_jsx = (external_react_default()).createElement;
// MARK: Libs
 // MARK: Hooks

 // MARK: Components




 // MARK: Styles



var Home = function Home() {
  var _useGitHubContext = (0,GitHubContext/* useGitHubContext */.M)(),
      user = _useGitHubContext.user,
      isLoading = _useGitHubContext.isLoading,
      hasUserNotFound = _useGitHubContext.hasUserNotFound,
      isLoadingSearch = _useGitHubContext.isLoadingSearch,
      repositories = _useGitHubContext.repositories,
      getUser = _useGitHubContext.getUser,
      getRepositoriesList = _useGitHubContext.getRepositoriesList,
      getStarredList = _useGitHubContext.getStarredList;

  function search(userName) {
    getUser(userName);
  }

  return Home_jsx("div", {
    className: (Home_styles_module_default()).main
  }, Home_jsx(components_SearchBar, {
    getSearch: function getSearch(value) {
      return search(value);
    }
  }), isLoadingSearch && Home_jsx(CircularProgress/* default */.Z, {
    size: 60
  }), user && Home_jsx(components_UserCard, {
    user: user,
    isLoading: isLoading,
    repositories: repositories,
    handleRepos: getRepositoriesList,
    handleStarred: getStarredList
  }), hasUserNotFound && Home_jsx(components_UserNotFound, null));
};

/* harmony default export */ var pages_Home = (Home);

/***/ }),

/***/ 8984:
/***/ (function(module) {

// Exports
module.exports = {
	"container__title": "styles_container__title__3q86t"
};


/***/ }),

/***/ 3227:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "styles_container__19lRN",
	"container__input": "styles_container__input__222SP",
	"container__button": "styles_container__button__NFhwe"
};


/***/ }),

/***/ 1044:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "styles_container__O-Fmy",
	"container__row": "styles_container__row__2bH7x",
	"container__listBox": "styles_container__listBox__2WlCv",
	"container__loginText": "styles_container__loginText__2cUL3",
	"container__infoText": "styles_container__infoText__1cd6Z",
	"container__image": "styles_container__image__1H4xA",
	"container__button": "styles_container__button__3uqo2"
};


/***/ }),

/***/ 188:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "styles_container__eT0Gi",
	"container__text": "styles_container__text__2_dhK"
};


/***/ }),

/***/ 7201:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "styles_main__1JJ0h"
};


/***/ })

};
;