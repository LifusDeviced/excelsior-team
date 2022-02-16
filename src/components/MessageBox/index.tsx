// MARK: Hooks
import { useStrings } from '@core/contexts/StringsContext';

// MARK: Interfaces
import MessageBoxInterface from './interface';

// MARK: Styles
import styles from './styles.module.scss';

const MessageBox = (props: MessageBoxInterface): JSX.Element => {
  const { contentType } = props;
  const strings = useStrings();
  const { messageBox } = strings.components;
  return (
    <div className={styles.container}>
      <p className={styles.container__text}>
        {contentType ? messageBox.warning(contentType) : messageBox.error}
      </p>
    </div>
  );
};

export default MessageBox;
