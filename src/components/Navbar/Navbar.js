import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer } from "@mui/material";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="nav">
        <div className="nav-item">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
          >
            Profile
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink
            to="/dialogs"
            className={({ isActive }) => (isActive ? "active" : "nav-item")}
          >
            Messages
          </NavLink>
        </div>
        <div className={`${"nav-item"}`}>
          <NavLink
            to="news"
            className={({ isActive }) => (isActive ? "nav-item" : "nav-item")}
          >
            News
          </NavLink>
        </div>
        <div className={`${"nav-item"}`}>
          <NavLink
            to="music"
            className={({ isActive }) => (isActive ? "nav-item" : "nav-item")}
          >
            Music
          </NavLink>
        </div>
        <div className={`${"nav-item"}`}>
          <NavLink
            to="settings"
            className={({ isActive }) => (isActive ? "nav-item" : "nav-item")}
          >
            Settings
          </NavLink>
        </div>
        <div className={`${"nav-item"}`}>
          <NavLink
            to="users"
            className={({ isActive }) => (isActive ? "nav-item" : "nav-item")}
          >
            Users
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
