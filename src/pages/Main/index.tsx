// MARK: Libs
import { useEffect } from 'react';
// MARK: Hooks
import { useCharactersContext } from '@core/contexts/CharactersContext';
// MARK: Components
import SearchBar from '@components/SearchBar';
import CharacterCard from '@components/CharacterCard';
import MessageBox from '@components/MessageBox';
import CircularProgress from '@material-ui/core/CircularProgress';
import CharacterProfile from '@components/CharacterProfile';

// MARK: Styles
import styles from './styles.module.scss';

const Main = (): JSX.Element => {
  const {
    isLoading,
    isGetLoading,
    offset,
    characters,
    excelsiorTeam,
    setNameSearch,
    setOffset,
    selectedCharacter,
    selectCharacter,
  } = useCharactersContext();

  function renderCards(chars: Character[]): JSX.Element {
    return (
      <div className={styles.main__list}>
        {chars.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            selectCharacter={selectCharacter}
          />
        ))}
      </div>
    );
  }

  function renderContent(): JSX.Element {
    if (isLoading) {
      return <CircularProgress size={60} />;
    }

    if (selectedCharacter) {
      return <CharacterProfile />;
    }

    if (characters?.length > 0) {
      return renderCards(characters);
    }

    if (excelsiorTeam?.length > 0) {
      return renderCards(excelsiorTeam);
    }

    return <MessageBox contentType={characters ? '' : 'character'} />;
  }

  function handleInfinityScroll() {
    if (window) {
      const isEnough = document.body.scrollHeight * 0.7 <= window.scrollY;
      if (isEnough) {
        setOffset(offset + 20);
      }
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleInfinityScroll);
    }

    return () => window.removeEventListener('scroll', handleInfinityScroll);
  }, [isGetLoading]);

  return (
    <>
      <div className={styles.main}>
        <SearchBar getSearch={(value) => setNameSearch(value)} />
        {renderContent()}
        {isGetLoading && <CircularProgress style={{ marginTop: '2rem' }} size={60} />}
      </div>
      <h5 className={styles.restriction}>
        Resolutions below 400px of width are not supported
      </h5>
    </>
  );
};

export default Main;
