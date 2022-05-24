import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialogItem) => {
    return <DialogItem name={dialogItem.name} id={dialogItem.id} />;
  });

  let messagesElements = props.messagesData.map((messageItem) => {
    return <DialogMessage message={messageItem.message} />;
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.dialogMessages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
