import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: "Ilya" },
    { id: 1, name: "Alexey" },
    { id: 1, name: "Sergey" },
    { id: 1, name: "Artem" },
    { id: 1, name: "Dmitriy" },
    { id: 1, name: "Vladimir" },
  ];

  let dialogsElements = dialogsData.map((dialogItem) => {
    return <DialogItem name={dialogItem.name} id={dialogItem.id} />;
  });

  const messagesData = [
    { id: 1, message: "hi" },
    { id: 1, message: "how are you" },
    { id: 1, message: "nice to meet you" },
  ];

  let messagesElements = messagesData.map((messageItem) => {
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
