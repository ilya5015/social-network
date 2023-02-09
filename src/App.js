import React, { useEffect } from "react";
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

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

ConfigProvider.config({ theme: { primaryColor: "#f00" } });

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
              <AppHeader />

              <Layout
                className="app-content-wrapper"
                style={{ background: "rgb(255, 255, 238)", minHeight: "100vh" }}
              >
                <Content className="content-wrapper">
                  <Content title="card1" className="content-wrapper-window">
                    <Routes>
                      <Route path="/board" element={<Board />} />
                      <Route path="/" element={<Navigate to="/profile" />} />
                      <Route path="/profile/:userId" element={<Profile />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route
                        exact
                        path="/dialogs"
                        element={<DialogsContainer />}
                      />

                      <Route path="/users" element={<Users />} />
                      <Route path="/login" element={<LoginForm />} />
                      <Route path="/register" element={<RegistrationForm />} />
                    </Routes>
                  </Content>
                </Content>
              </Layout>
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
