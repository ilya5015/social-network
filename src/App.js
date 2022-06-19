import "./App.css";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content window">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  postData={props.state.profilePage.postData}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              exact
              path="/dialogs"
              element={
                <Dialogs
                  dialogsData={props.state.dialogsPage.dialogsData}
                  messagesData={props.state.dialogsPage.messagesData}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
