import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="tree-view">
      <nav className={`${styles.nav}`}>
        <div className={`${styles.navItem}`}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navItem
            }
          >
            Profile
          </NavLink>
        </div>
        <div className={`${styles.navItem}`}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navItem
            }
          >
            Messages
          </NavLink>
        </div>
        <div className={`${styles.navItem}`}>
          <NavLink
            to="news"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navItem
            }
          >
            News
          </NavLink>
        </div>
        <div className={`${styles.navItem}`}>
          <NavLink
            to="music"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navItem
            }
          >
            Music
          </NavLink>
        </div>
        <div className={`${styles.navItem}`}>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navItem
            }
          >
            Settings
          </NavLink>
        </div>
        <div className={`${styles.navItem}`}>
          <NavLink
            to="users"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navItem
            }
          >
            Users
          </NavLink>
        </div>
      </nav>
    </ul>
  );
};

export default Navbar;
