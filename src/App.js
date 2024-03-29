import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.variable.min.css";
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
import AppHeader from "./components/AppHeader/AppHeader";
import RegistrationForm from "./components/forms/RegistrationForm";
import Board from "./components/Board/Board";
import { Button, ConfigProvider } from "antd";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import BoardPage from "./pages/BoardPage/BoardPage";
import ChatMini from "./components/Dialogs/Chat/ChatMini/ChatMini";
import TestStand from "./components/TestStand/TestStand";
import Window from "./components/Window/Window";
import { closeWindow } from "./components/Redux/windows-reducer";

const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));

ConfigProvider.config({ theme: { primaryColor: "#f00" } });

const App = () => {
  const dispatch = useAppDispatch();
  const [initialized] = useAppSelector((state) => [
    state.appReducer.initialized,
  ]);
  const isChatMiniOpen = useAppSelector(
    (state) => state.appReducer.isChatMiniOpen
  );
  const windows = useAppSelector(
    (state) => state.windowsReducer.expandedWindows
  );

  useEffect(() => {
    console.log("windows are", windows);
  }, [windows]);

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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "green",
          },
        }}
      >
        <Suspense
          fallback={
            <div>
              <Preloader />
            </div>
          }
        >
          <BrowserRouter>
            <Layout className="app-wrapper">
              {windows?.map((window) => {
                if (window) {
                  return (
                    <Window
                      windowId={window.id}
                      closeAction={() =>
                        dispatch(closeWindow({ windowId: window.id }))
                      }
                    />
                  );
                }
              })}
              <AppHeader />

              <Layout
                className="app-content-wrapper"
                style={{
                  minHeight: "100vh",
                }}
              >
                <Content
                  className="content-wrapper"
                  style={{ display: "grid" }}
                >
                  <Content
                    className="content-wrapper-window"
                    style={{ display: "flex" }}
                  >
                    <Routes>
                      <Route path="/dev" element={<TestStand></TestStand>} />
                      <Route
                        path="/board"
                        element={
                          <ProtectedRoute>
                            <BoardPage />
                          </ProtectedRoute>
                        }
                      />

                      <Route
                        path="/"
                        element={
                          <ProtectedRoute>
                            <Navigate to="/profile" />{" "}
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/profile/:userId"
                        element={
                          <ProtectedRoute>
                            <Profile />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/profile"
                        element={
                          <ProtectedRoute>
                            <Profile />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        exact
                        path="/dialogs"
                        element={
                          <ProtectedRoute>
                            <Dialogs />
                          </ProtectedRoute>
                        }
                      />
                      <Route path="/users" element={<Users />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<RegistrationForm />} />
                    </Routes>
                  </Content>
                </Content>
              </Layout>
              {isChatMiniOpen ? <ChatMini /> : <div>false</div>}
            </Layout>
          </BrowserRouter>
        </Suspense>
      </ConfigProvider>
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
