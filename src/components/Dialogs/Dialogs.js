import styles from "./Dialogs.module.css";
import { useRef } from "react";

import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialogItem) => {
    return <DialogItem name={dialogItem.name} id={dialogItem.id} />;
  });

  let messagesElements = props.messagesData.map((messageItem) => {
    return <DialogMessage message={messageItem.message} />;
  });

  const newMessage = useRef(null);

  let sendMessage = () => {
    let messageText = newMessage.current.value;
    alert(messageText);
  };

  return (
    <div className={styles.dialogs}>
      <ul className="tree-view">
        <div className={styles.dialogsItems}>{dialogsElements}</div>
      </ul>
      <ul className="tree-view">
        <div className={styles.dialogMessages}>{messagesElements}</div>
      </ul>
      <button onClick={sendMessage}>Send</button>
      <div class="field-row-stacked">
        <textarea ref={newMessage} rows="8"></textarea>
      </div>
    </div>
  );
};

export default Dialogs;
