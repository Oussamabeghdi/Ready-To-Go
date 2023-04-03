import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <FontAwesomeIcon
          className={styles.icon}
          icon="shuttle-space"
          size="2x"
        />
        <h2 className={styles.title}>Ready To Go</h2>
      </div>
    </header>
  );
};

export default Header;
