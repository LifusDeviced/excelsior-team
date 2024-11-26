// MARK: Libs
import { useState } from 'react';

// MARK: Context
import { useStrings } from '@contexts/StringsContext';

// MARK: Helpers
import limitText from '@core/helpers/limitText';
import toggleIsExcelsior from './helpers';

// MARK: Interfaces
import { CharacterCardProps } from './interface';

// MARK: Styles
import styles from './styles.module.scss';

const CharacterCard = (props: CharacterCardProps): JSX.Element => {
  const { character, selectCharacter } = props;
  const { components } = useStrings();
  const [isExcelsior, setIsExcelsior] = useState(character.isExcelsior);
  const descriptionValue = character.description
    ? character.description
    : components.characterCard.noDescription;

  function handleStarClick() {
    toggleIsExcelsior(isExcelsior, character);
    character.isExcelsior = !isExcelsior;
    setIsExcelsior(!isExcelsior);
  }

  return (
    <div className={styles.card}>
      <button
        type="button"
        onClick={handleStarClick}
        className={styles.card__star}
      >
        <img
          src={`/static/${character.isExcelsior ? 'full' : 'empty'}_star.png`}
          alt="fav"
        />
      </button>
      <button
        type="button"
        onClick={() => selectCharacter(character.id)}
        className={styles.card__thumb}
      >
        <img src={character.thumb} alt="thumb" />
      </button>
      <div className={styles.card__info}>
        <strong>{limitText(character.name, 30)}</strong>
        <p className={styles.desktopDescription}>
          {limitText(descriptionValue, 220)}
        </p>
        <p className={styles.mobileDescription}>
          {limitText(descriptionValue, 120)}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
