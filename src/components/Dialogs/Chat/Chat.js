import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
import {
  startMessagesListening,
  stopMessagesListening,
} from "../../Redux/chat-reducer";
import styles from "../Dialogs.module.css";
import ChatMessages from "./ChatMessages/ChatMessages";
import socketio from "socket.io-client";
import Cookies from "js-cookie";

const Chat = () => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);
  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isAuth === true) {
      console.log(Cookies.get("token"));
      const socket = socketio.connect("http://localhost:5000/", {
        withCredentials: true,
        extraHeaders: {},
      });
      socket.on("message", (msg) => {
        console.log("message", msg);
        setMessages((messages) => [...messages, msg]);
      });
      socket.on("chatMessage", (msg) => {
        console.log("chatMessage", msg);
      });
    }

    return () => {};
  }, [isAuth]);

  return (
    <div className={styles.chatContainer}>
      <div>
        {messages.map((message) => (
          <div>{JSON.stringify(message)}</div>
        ))}
      </div>
      {/* <ChatMessages /> */}
    </div>
  );
};

export default Chat;
