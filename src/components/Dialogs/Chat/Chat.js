import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
import styles from "../Dialogs.module.css";
import { Manager } from "socket.io-client";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../../config";
import { Input, message } from "antd";
import "./Chat.css";

const { TextArea } = Input;

const info = (text) => {
  message.info(text);
};

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
      socket.on("chatMessages", (msgs) => {
        setMessages(msgs);
        console.log("messages", msgs);
      });
      socket.on("message", (msg) => {
        info(msg.text);
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
          <div className="chat-message">
            <span className="chat-message__name">{message.name}</span>
            <span className="chat-message__text">{message.text}</span>
            <span className="chat-message__time">{message.time}</span>
          </div>
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
          sendMessage(socket, newMessage);
          setNewMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
