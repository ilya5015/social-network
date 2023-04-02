import * as ReactDOM from "react-dom";
import React, { useCallback, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { useEffect, useState } from "react";
import styles from "../../Dialogs.module.css";
import { Manager } from "socket.io-client";
import { useChat } from "../../../../hooks/useChat";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../../../config";
import { Button, Input, message } from "antd";
import "./ChatMini.css";
import { ScrollWrapper } from "react-bottom-scroll";

const { TextArea } = Input;

const portal = document.getElementById("portal");

const ChatMini = React.memo(() => {
  const [isAuth] = useAppSelector((state) => [state.authReducer.isAuth]);
  const [messageText, setMessageText] = useState("");
  const [messages, sendMessage] = useChat();

  useEffect(() => {
    console.log("new mes", messages);
  }, [messages]);

  return ReactDOM.createPortal(
    <div className="chat-mini-container">
      <ScrollWrapper
        wrapperStyle={{ overflowY: "scroll", maxHeight: "500px" }}
        minScroll={0}
        smoothBehavior
      >
        {messages.map((message) => {
          return (
            <div className="chat-mini-message">
              <span className="chat-mini-message__name">{message.name}</span>
              <span className="chat-mini-message__text">{message.text}</span>
              <span className="chat-mini-message__time">{message.time}</span>
            </div>
          );
        })}
      </ScrollWrapper>

      <div className="chat-mini__send-form">
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
        <Button
          onClick={() => {
            console.log("Current message text is", messageText);
            sendMessage(messageText);
            setMessageText("");
          }}
        >
          Send
        </Button>
      </div>
    </div>,
    portal
  );
});

export default ChatMini;
