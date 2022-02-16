export interface StringsContextInterface {
  components: {
    navBar: {
      title: string;
      excelsiorFilter: string;
    };
    repositoryList: {
      notFounded: string;
    };
    searchBar: {
      button: string;
      placeHolder: string;
    };
    characterCard: {
      noDescription: string;
    };
    characterProfile: {
      comicsSample: string;
    };
    comicSample: {
      details: (date: string, pages: number, price: number) => string;
    };
    messageBox: {
      warning: (contentType: string) => string;
      error: string;
    };
  };
}
