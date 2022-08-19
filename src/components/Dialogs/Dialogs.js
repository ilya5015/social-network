import styles from "./Dialogs.module.css";
import { createRef, useEffect, useState } from "react";

import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Chat = () => {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    createChannel();
  }, []);

  useEffect(() => {
    console.log("WEB SOCKET IS", webSocket);
    if (webSocket !== null) {
      webSocket?.addEventListener("close", closeEventListener);
    }
    return () => {
      console.log("where u goin");
      webSocket?.removeEventListener("close", closeEventListener);
    };
  }, [webSocket]);

  let createChannel = () => {
    let ws = new WebSocket(
      "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    setWebSocket(ws);
  };

  let closeEventListener = () => {
    console.log("WS CLOSED, RECONNECTING...");
    createChannel();
  };

  return (
    <div className={styles.chatContainer}>
      <ChatMessages webSocket={webSocket} />
    </div>
  );
};

const ChatMessages = ({ webSocket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    webSocket?.addEventListener("message", (event) =>
      messageEventListener(event)
    );

    return () => {
      webSocket?.removeEventListener("message", messageEventListener);
    };
  }, [webSocket]);

  let messageEventListener = (event) => {
    console.log(event);
    setMessages((prevState) => JSON.parse(event.data));
  };

  return (
    <div>
      <div>{JSON.stringify(messages, 4, 4)}</div>
      {messages.map((message) => (
        <li>
          <div className={styles.messageContainer}>
            <span>{message.message}</span>
          </div>
        </li>
      ))}
    </div>
  );
};

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialogItem) => {
    return (
      <DialogItem
        name={dialogItem.name}
        id={dialogItem.id}
        key={dialogItem.id}
      />
    );
  });

  let messagesElements = props.messagesData.map((messageItem) => {
    return <DialogMessage message={messageItem.message} key={messageItem.id} />;
  });

  const newMessage = createRef();

  let onMessageChange = () => {
    let messageText = newMessage.current.value;
    props.addMessageText(messageText);
  };

  let sendMessage = () => {
    props.addMessage();
    newMessage.current.value = "";
  };

  return (
    <div className={styles.dialogs}>
      <ul className="tree-view">
        <div className={styles.dialogsItems}>{dialogsElements}</div>
      </ul>

      <Chat />

      <button onClick={sendMessage}>Send</button>
      <div className="field-row-stacked">
        <textarea
          onChange={onMessageChange}
          ref={newMessage}
          rows="8"
        ></textarea>
      </div>
    </div>
  );
};

export default Dialogs;
