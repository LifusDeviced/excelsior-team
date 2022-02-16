// MARK: Context
import { useStrings } from '@contexts/StringsContext';
import { useCharactersContext } from '@contexts/CharactersContext';

// MARK: Components
import CircularProgress from '@material-ui/core/CircularProgress';
import MessageBox from '@components/MessageBox';

// MARK: Styles
import styles from './styles.module.scss';
import ComicSample from './ComicSample';

const CharacterProfile = (): JSX.Element => {
  const { components } = useStrings();
  const { isLoading, selectedCharacter, comicsSample } = useCharactersContext();
  const descriptionValue = selectedCharacter.description
    ? selectedCharacter.description
    : components.characterCard.noDescription;

  function renderComics(): JSX.Element | JSX.Element[] {
    if (isLoading) {
      return <CircularProgress size={60} />;
    }

    if (comicsSample?.length > 0) {
      return comicsSample.map((comic) => (
        <ComicSample key={comic.id} comic={comic} />
      ));
    }

    return <MessageBox contentType={comicsSample ? '' : 'comic'} />;
  }

  if (selectedCharacter) {
    return (
      <div className={styles.profile}>
        <div className={styles.profile__card}>
          <img
            src={selectedCharacter.thumb}
            alt="thumb"
            className={styles.profile__card__thumb}
          />
          <div className={styles.profile__card__info}>
            <strong>{selectedCharacter.name}</strong>
            <p>{descriptionValue}</p>
          </div>
        </div>
        <h6>{components.characterProfile.comicsSample}</h6>
        {renderComics()}
      </div>
    );
  }

  return <MessageBox />;
};

export default CharacterProfile;
