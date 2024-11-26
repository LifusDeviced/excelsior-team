// MARK: Contexts
import { useStrings } from '@core/contexts/StringsContext';
import { useCharactersContext } from '@core/contexts/CharactersContext';

// MARK: Styles
import styles from './styles.module.scss';

const NavBar = (): JSX.Element => {
  const strings = useStrings();
  const { getExcelsiorTeam } = useCharactersContext();
  const { navBar } = strings.components;
  const refresh = () => window.location.reload();

  return (
    <nav className={styles.nav}>
      <div
        className={styles.nav__title}
        onClick={refresh}
      >
        <img
          src="https://i.pinimg.com/236x/6e/3d/db/6e3ddb056560cabf02ace9ee0092e4d7.jpg"
          alt="logo"
        />
        <h5>{navBar.title}</h5>
      </div>
      <button
        className={styles.nav__button}
        type="button"
        id="navButton"
        onClick={getExcelsiorTeam}
      >
        {navBar.excelsiorFilter}
      </button>
    </nav>
  );
};

export default NavBar;
