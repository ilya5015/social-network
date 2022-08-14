import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Suspense } from "react";
import UsersContainer from "./components/Users/UsersContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux/es/exports";
import { initializeApp } from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));

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
              <Navbar />
              <div className="app-wrapper-content window">
                <Routes>
                  <Route
                    path="/profile/:userId"
                    element={<ProfileContainer />}
                  />
                  <Route path="/profile" element={<ProfileContainer />} />

                  <Route exact path="/dialogs" element={<DialogsContainer />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
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
