import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Welcome to the "FaceBookKiller"</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="status-bar">
            <p className="status-bar-field">Press F1 for help</p>
            <p className="status-bar-field">Slide 1</p>
            <p className="status-bar-field">CPU Usage: 14%</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
