import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";
import styles from "../Dialogs.module.css";
import { Manager } from "socket.io-client";
import { useChat } from "../../../hooks/useChat";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../../config";
import { Input, message } from "antd";
import "./Chat.css";

const { TextArea } = Input;

const Chat = () => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);
  const [messageText, setMessageText] = useState("");
  const [messages, sendMessage] = useChat();

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
        autoSize={{
          minRows: 2,
          maxRows: 6,
        }}
        value={messageText}
        onChange={(event) => {
          console.log("value is", event.target.value);
          setMessageText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("Current message text is", messageText);
          sendMessage(messageText);
          setMessageText("");
        }}
      >
        Send
      </button>
      {JSON.stringify(messages, 4, 4)}
    </div>
  );
};

export default Chat;
