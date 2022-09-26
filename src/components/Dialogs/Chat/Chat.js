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
import { SOCKET_URL } from "../../../config";
import { Input } from "antd";

const { TextArea } = Input;

const Chat = () => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);
  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState({});
  const [newMessage, setNewMessage] = useState();

  const sendMessage = (socket, message) => {
    if (socket) {
      console.log(socket);
      socket.emit("chatMessage", message);
    }
  };

  useEffect(() => {
    if (isAuth === true) {
      console.log("socket");
      const socket = io(SOCKET_URL, {
        path: "/socketchat",
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
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div>
        {messages.map((message) => (
          <div>{JSON.stringify(message)}</div>
        ))}
      </div>
      <TextArea
        placeholder="message"
        value={newMessage}
        autoSize={{
          minRows: 2,
          maxRows: 6,
        }}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        onClick={() => {
          console.log(newMessage);
          sendMessage(socket, "coc");
          setNewMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
