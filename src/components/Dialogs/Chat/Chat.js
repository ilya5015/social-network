import React from "react";
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
  const [socketState, setSocketState] = useState();
  const [newMessage, setNewMessage] = useState();

  const sendMessage = (socket, message) => {
    if (socket) {
      console.log(socket);
      socket.emit("sendChatMessage", message);
    }
  };

  const setIncomingMessage = (msg) => {
    console.log("chatMessage", msg);
    if (messages.find((message) => message.messageId === msg.messageId)) {
      console.log("messages are", messages);
      console.log("setting message");
      setMessages((msgs) => [...msgs, msg]);
    } else {
      console.log("Messages not found", messages);
    }
  };

  useEffect(() => {
    console.log("Socket state is", socketState);
  }, [socketState]);

  useEffect(() => {
    if (isAuth === true) {
      console.log("socket");
      const socket = io(SOCKET_URL, {
        reconnectionDelayMax: 10000,
        withCredentials: true,
      });
      setSocketState(socket);
      socket.on("chatMessages", (msgs) => {
        setMessages(msgs);
        console.log("messages", msgs);
      });
      socket.on("message", (msg) => {
        info(msg.text);
      });
      socket.on("getChatMessage", (msg) => {
        setIncomingMessage(msg);
      });
      console.log("Listeners created");
    }

    return () => {
      if (socketState) {
        console.log("Listeners deleted", socketState);
        socketState.removeAllListeners(
          "getChatMessage",
          "chatMessage",
          "message"
        );
      }
    };
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
          sendMessage(socketState, newMessage);
          setNewMessage("");
        }}
      >
        Send
      </button>
      {JSON.stringify(messages, 4, 4)}
    </div>
  );
};

export default Chat;
