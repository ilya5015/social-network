import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  {
    id: 1,
    message: "Hi there, how are you ?",
    likeCounter: "40",
    dislikeCounter: "20",
  },
  {
    id: 2,
    message: "It`s my first post",
    likeCounter: "30",
    dislikeCounter: "10",
  },
];

const dialogsData = [
  { id: 1, name: "Ilya" },
  { id: 1, name: "Alexey" },
  { id: 1, name: "Sergey" },
  { id: 1, name: "Artem" },
  { id: 1, name: "Dmitriy" },
  { id: 1, name: "Vladimir" },
];

const messagesData = [
  { id: 1, message: "hi" },
  { id: 1, message: "how are you" },
  { id: 1, message: "nice to meet you" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
