import React from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Suspense } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux/es/exports";
import { thunkInitializeApp } from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import LoginFormContainer from "./components/forms/LoginFormContainer";
import { Paper } from "@mui/material";
import { Navigate } from "react-router-dom";
import Users from "./components/Users/Users";

const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

let onUnhandledRejectionEvent = (event) => {
  console.log("Error uccured", event);
};

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", (e) =>
      onUnhandledRejectionEvent(e)
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <Suspense
          fallback={
            <div>
              <Preloader />
            </div>
          }
        >
          <BrowserRouter>
            <div className="app-wrapper">
              <HeaderContainer />

              <div className="app-wrapper-content window">
                <Paper elevation={3}>
                  <Routes>
                    <Route path="/" element={<Navigate to="/profile" />} />
                    <Route
                      path="/profile/:userId"
                      element={<ProfileContainer />}
                    />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route
                      exact
                      path="/dialogs"
                      element={<DialogsContainer />}
                    />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/login" element={<LoginFormContainer />} />
                  </Routes>
                </Paper>
              </div>
            </div>
          </BrowserRouter>
        </Suspense>
      );
    }
  }
}

let mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
});

export default connect(mapStateToProps, { initializeApp: thunkInitializeApp })(
  App
);
