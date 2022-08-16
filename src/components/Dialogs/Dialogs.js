import styles from "./Dialogs.module.css";
import { createRef, useEffect, useState } from "react";

import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import UsersContainer from "../Users/UsersContainer";

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.addEventListener("message", (event) => {
      console.log(event);
      setMessages((prevState) => JSON.parse(event.data));
    });
  }, []);

  return (
    <div className={styles.chatContainer}>
      {messages.map((message) => (
        <li>
          <div className={styles.messageContainer}>{message.message}</div>
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
