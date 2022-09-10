import React, { useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import { Suspense } from "react";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { initializeApp } from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import LoginForm from "./components/forms/LoginForm";
import { Navigate, NavLink } from "react-router-dom";
import Users from "./components/Users/Users";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Navbar from "./components/Navbar/Navbar";
import AppHeader from "./components/AppHeader/AppHeader";

const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const App = () => {
  const dispatch = useAppDispatch();
  const [initialized] = useAppSelector((state) => [
    state.appReducer.initialized,
  ]);

  useEffect(() => {
    dispatch(initializeApp());
    window.addEventListener("unhandledrejection", (e) =>
      onUnhandledRejectionEvent(e)
    );
  }, []);

  let onUnhandledRejectionEvent = (event) => {
    console.log("Error uccured", event);
  };

  if (!initialized) {
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
        <Layout className="app-wrapper">
          <BrowserRouter>
            <AppHeader />

            <Layout className="app-content-wrapper">
              <Navbar />
              <Content className="content-wrapper">
                <Content
                  title="card1"
                  size="large"
                  className="content-wrapper-window"
                >
                  <Routes>
                    <Route path="/" element={<Navigate to="/profile" />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                      exact
                      path="/dialogs"
                      element={<DialogsContainer />}
                    />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/login" element={<LoginForm />} />
                  </Routes>
                </Content>
              </Content>
            </Layout>
          </BrowserRouter>
        </Layout>
      </Suspense>
    );
  }
};

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     this.props.initializeApp();
//     window.addEventListener("unhandledrejection", (e) =>
//       onUnhandledRejectionEvent(e)
//     );
//   }

//   render() {
//     if (!this.props.initialized) {
//       return <Preloader />;
//     } else {
//       return (
//         <Suspense
//           fallback={
//             <div>
//               <Preloader />
//             </div>
//           }
//         >
//           <BrowserRouter>
//             <div className="app-wrapper">
//               <HeaderContainer />

//               <div className="app-wrapper-content window">
//                 <Paper elevation={3}>
//                   <Routes>
//                     <Route path="/" element={<Navigate to="/profile" />} />
//                     <Route path="/profile/:userId" element={<Profile />} />
//                     <Route path="/profile" element={<Profile />} />
//                     <Route
//                       exact
//                       path="/dialogs"
//                       element={<DialogsContainer />}
//                     />
//                     <Route path="/news" element={<News />} />
//                     <Route path="/music" element={<Music />} />
//                     <Route path="/settings" element={<Settings />} />
//                     <Route path="/users" element={<Users />} />
//                     <Route path="/login" element={<LoginForm />} />
//                   </Routes>
//                 </Paper>
//               </div>
//             </div>
//           </BrowserRouter>
//         </Suspense>
//       );
//     }
//   }
// }

// let mapStateToProps = (state) => ({
//   initialized: state.appReducer.initialized,
// });

// export default connect(mapStateToProps, { initializeApp: initializeApp })(App);
