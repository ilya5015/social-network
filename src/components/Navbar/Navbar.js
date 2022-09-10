import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import Sider from "antd/lib/layout/Sider";

const Navbar = () => {
  return (
    <Sider className="app-sider">
      <div className="app-sider-nav-menu">
        <Menu theme="dark" mode="inline" style={{ listStyleType: "none" }}>
          <MenuItem key="1">
            <NavLink to="/profile">Profile</NavLink>
          </MenuItem>
          <MenuItem key="2">
            <NavLink to="/dialogs">Dialogs</NavLink>
          </MenuItem>
          <MenuItem key="3">
            <NavLink to="/news">News</NavLink>
          </MenuItem>
          <MenuItem key="4">
            <NavLink to="/music">Music</NavLink>
          </MenuItem>
          <MenuItem key="5">
            <NavLink to="/users">Users</NavLink>
          </MenuItem>
        </Menu>
      </div>
    </Sider>
  );
};

export default Navbar;
