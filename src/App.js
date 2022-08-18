import React from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Suspense } from "react";
import UsersContainer from "./components/Users/UsersContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux/es/exports";
import { initializeApp } from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import LoginFormContainer from "./components/forms/LoginFormContainer";
import { Paper } from "@mui/material";

const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
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
                    <Route path="/users" element={<UsersContainer />} />
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

export default connect(mapStateToProps, { initializeApp })(App);
