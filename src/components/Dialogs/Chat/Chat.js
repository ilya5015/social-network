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
import { Manager } from "socket.io-client";
import { io } from "socket.io-client";

const Chat = () => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);
  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState({});

  const sendMessage = (socket, message) => {
    if (socket) {
      console.log(socket);
      socket.emit("chatMessage", message);
    }
  };

  useEffect(() => {
    if (isAuth === true) {
      const socket = io("http://localhost:5000/", {
        reconnectionDelayMax: 10000,
        withCredentials: true,
      });
      setSocket(socket);
      socket.on("message", (msg) => {
        console.log("message", msg);
        setMessages((messages) => [...messages, msg]);
      });
      socket.on("chatMessage", (msg) => {
        console.log("chatMessage", msg);
      });
    }
    //   const manager = new Manager("http://localhost:5000/");
    //   manager.reconnection(true);
    //   manager.reconnectionDelay(3000)
    //   const socket = manager.socket("/");
    //   //
    //   console.log(Cookies.get("token"));
    //   const socket = socketio.connect("http://localhost:5000/", {
    //     withCredentials: true,
    //     extraHeaders: {},
    //   });
    //   socket.on("message", (msg) => {
    //     console.log("message", msg);
    //     setMessages((messages) => [...messages, msg]);
    //   });
    //   socket.on("chatMessage", (msg) => {
    //     console.log("chatMessage", msg);
    //   });
    // }

    return () => {};
  }, [isAuth]);

  return (
    <div className={styles.chatContainer}>
      <div>
        {messages.map((message) => (
          <div>{JSON.stringify(message)}</div>
        ))}
      </div>
      <button onClick={() => sendMessage(socket, "coc")}></button>
    </div>
  );
};

export default Chat;
