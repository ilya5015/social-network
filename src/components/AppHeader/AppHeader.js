import { useState } from "react";
import "./AppHeader.css";
import { Header } from "antd/lib/layout/layout";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Navbar from "../Navbar/Navbar";
import { useAppSelector } from "../../hooks/hooks";

const AppHeader = (props) => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  let handleDrawerToggle = () => {
    setDrawerOpen((drawer) => !drawer);
  };

  const menu = <Navbar />;

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "60px",
        position: "fixed",
        backgroundColor: "white",
      }}
      className="app-header"
    >
      <Dropdown overlay={menu} className="app-header__menu-overlay-button">
        <a onClick={(e) => e.preventDefault()}>
          <div className="app-header__menu-button">
            menu
            <DownOutlined />
          </div>
        </a>
      </Dropdown>

      {!isAuth ? (
        <Button type="primary" className="app-header__login-button">
          <NavLink to="/login">Login</NavLink>
        </Button>
      ) : (
        <Button type="primary" className="app-header__login-button">
          <NavLink to="/login">Logout</NavLink>
        </Button>
      )}
    </Header>
  );
};

export default AppHeader;
