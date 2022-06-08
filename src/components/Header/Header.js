import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="window">
        <div class="title-bar">
          <div class="title-bar-text">Welcome to the "FaceBookKiller"</div>
          <div class="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div class="status-bar">
            <p class="status-bar-field">Press F1 for help</p>
            <p class="status-bar-field">Slide 1</p>
            <p class="status-bar-field">CPU Usage: 14%</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
