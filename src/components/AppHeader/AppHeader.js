import { useState } from "react";
import "./AppHeader.css";
import { Header } from "antd/lib/layout/layout";
import { NavLink } from "react-router-dom";

const AppHeader = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  let handleDrawerToggle = () => {
    setDrawerOpen((drawer) => !drawer);
  };

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "60px",
        position: "fixed",
        backgroundColor: "rgb(242,242,247)",
      }}
      className="app-header"
    >
      <div className="app-header-logo">Here will be logo</div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </Header>
  );
};

export default AppHeader;
