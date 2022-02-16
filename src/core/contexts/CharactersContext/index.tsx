// MARK: Libs
import { createContext, useContext, useEffect, useState } from 'react';

// MARK: Hooks
import useCharacters from '@core/hooks/useCharacters';

// MARK: Interfaces
import { CharactersContextInterface } from './interfaces';

const CharactersContext = createContext<CharactersContextInterface>(
  {} as CharactersContextInterface,
);

function useCharactersContext(): CharactersContextInterface {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error('useCharacters must be used within an CharactersProvider.');
  }
  return context;
}

const CharactersProvider = (props: { children }): JSX.Element => {
  const { children } = props;
  const { actions, state } = useCharacters();
  const { nameSearch, offset } = state;
  const [excelsiorTeam, setExcelsiorTeam] = useState([]);

  function getExcelsiorTeam() {
    const storagedTeam = JSON.parse(localStorage.getItem('EXCELSIOR_TEAM'));

    if (storagedTeam?.length > 0) {
      actions.setCharacters(null);
      setExcelsiorTeam(storagedTeam);
    }
  }

  useEffect(() => {
    setExcelsiorTeam(null);
    actions.loadCharacters();
  }, [nameSearch]);

  useEffect(() => {
    if (offset > 0) {
      actions.getCharacters();
    }
  }, [offset]);

  return (
    <CharactersContext.Provider
      value={{
        isLoading: state.isLoading,
        isGetLoading: state.isGetLoading,
        offset,
        nameSearch,
        characters: state.characters,
        selectedCharacter: state.selectedCharacter,
        comicsSample: state.comicsSample,
        excelsiorTeam,
        setOffset: actions.setOffset,
        setNameSearch: actions.setNameSearch,
        loadCharacters: actions.loadCharacters,
        getCharacters: actions.getCharacters,
        selectCharacter: actions.selectCharacter,
        getExcelsiorTeam,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersProvider, useCharactersContext };
