import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import Sider from "antd/lib/layout/Sider";

const Navbar = () => {
  return (
    <div className="app-sider-nav-menu">
      <Menu theme="light" style={{}}>
        <MenuItem key="0">
          <NavLink to="/board">Board</NavLink>
        </MenuItem>
        <MenuItem key="1">
          <NavLink to="/profile">Profile</NavLink>
        </MenuItem>
        <MenuItem key="2">
          <NavLink to="/dialogs">Chat</NavLink>
        </MenuItem>
        <MenuItem key="3">
          <NavLink to="/users">Users</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
