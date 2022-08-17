import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { AppBar, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@material-ui/icons";

const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  let handleDrawerToggle = () => {
    setDrawerOpen((drawer) => !drawer);
  };

  return (
    <header className="header">
      <AppBar position="fixed" style={{ backgroundColor: "#F19CBB" }} sx={{ top: 'auto', bottom: 0 }}>
        <div>
          <MenuIcon
            onClick={() => {
              handleDrawerToggle();
            }}
            fontSize="large"
          />

          <div>Welcome to the "FaceBookKiller"</div>
        </div>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} >
        <Navbar />
      </Drawer>
    </header>
  );
};

export default Header;
