// MARK: Libs
import { createContext, useContext } from 'react';

// MARK: Interfaces
import { StringsContextInterface } from './interfaces';

const StringsContext = createContext<StringsContextInterface>(
  {} as StringsContextInterface,
);

function useStrings(): StringsContextInterface {
  const context = useContext(StringsContext);
  if (!context) {
    throw new Error('useStrings must be used within an StringsProvider.');
  }
  return context;
}

const StringsProvider = (props: { children }): JSX.Element => {
  const { children } = props;
  const strings = {
    components: {
      repositoryList: {
        notFounded: 'Sem repositórios encontrados :(',
      },
      navBar: {
        title: 'Excelsior Team',
        excelsiorFilter: 'Your Team',
      },
      searchBar: {
        button: 'Search',
        placeHolder: 'Load the list by name',
      },
      characterCard: {
        noDescription: 'No description available.',
      },
      characterProfile: {
        comicsSample: 'Comics Sample',
      },
      comicSample: {
        details: (date: string, pages: number, price: number) =>
          `Released in ${date
            .substring(0, 10)
            .replaceAll('-', '/')} | ${pages} pages | U$ ${price}`,
      },
      messageBox: {
        warning: (contentType: string) => `None ${contentType} was found :/`,
        error: 'Something went wrong :(',
      },
    },
  };

  return (
    <StringsContext.Provider value={strings}>
      {children}
    </StringsContext.Provider>
  );
};

export { StringsProvider, useStrings };
