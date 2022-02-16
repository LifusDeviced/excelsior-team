// MARK: Context
import { useStrings } from '@contexts/StringsContext';

// MARK: Helpers
import limitText from '@core/helpers/limitText';

// MARK: Interfaces
import { ComicSampleProps } from './interface';

// MARK: Styles
import styles from './styles.module.scss';

const ComicSample = (props: ComicSampleProps): JSX.Element => {
  const { comic } = props;
  const { components } = useStrings();
  const descriptionValue = comic.description
    ? comic.description
    : components.characterCard.noDescription;

  return (
    <div className={styles.sample}>
      <img src={comic.thumb} alt="thumb" className={styles.sample__thumb} />
      <div className={styles.sample__info}>
        <strong>{comic.title}</strong>
        <p>
          {components.comicSample.details(
            comic.releaseDate,
            comic.pageCount,
            comic.price,
          )}
        </p>
        <p className={styles.desktopDescription}>
          {limitText(descriptionValue, 400)}
        </p>
        <p className={styles.mobileDescription}>
          {limitText(descriptionValue, 200)}
        </p>
      </div>
    </div>
  );
};

export default ComicSample;
