import { useState } from "react";
import "./AppHeader.css";
import { Header } from "antd/lib/layout/layout";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Button, ConfigProvider, Popover } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Navbar from "../Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout } from "../Redux/auth-reducer";
import { setIsChatMiniOpen } from "../Redux/app-reducer";

const AppHeader = (props) => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);

  const dispatch = useAppDispatch();

  const isChatMiniOpen = useAppSelector(
    (state) => state.appReducer.isChatMiniOpen
  );

  const menu = <Navbar />;

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "60px",
        background: "#EEAA88",
        position: "fixed",
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
      {isChatMiniOpen ? (
        <Button
          type="primary"
          onClick={() => {
            dispatch(setIsChatMiniOpen({ toggler: false }));
          }}
        >
          Закрыть мини-чат
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            dispatch(setIsChatMiniOpen({ toggler: true }));
          }}
        >
          Открыть мини-чат
        </Button>
      )}

      {!isAuth ? (
        <Button type="primary" className="app-header__login-button">
          <NavLink to="/login">Login</NavLink>
        </Button>
      ) : (
        <Button
          type="primary"
          className="app-header__login-button"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <NavLink to="/login">Logout</NavLink>
        </Button>
      )}
    </Header>
  );
};

export default AppHeader;
