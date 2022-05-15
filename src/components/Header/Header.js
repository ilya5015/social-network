import logo from "./logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
        <div className={styles.logoText}>Welcome to "FacebookKiller"</div>
      </div>
    </header>
  );
};

export default Header;
