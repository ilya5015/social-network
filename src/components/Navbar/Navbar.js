import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${classes.nav} ${classes.active}`}>
      <div className={`${classes.navItem} ${classes.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${classes.navItem} ${classes.active}`}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={`${classes.navItem} ${classes.active}`}>
        <a href="news">News</a>
      </div>
      <div className={`${classes.navItem} ${classes.active}`}>
        <a href="music">Music</a>
      </div>
      <div className={`${classes.navItem} ${classes.active}`}>
        <a href="settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
