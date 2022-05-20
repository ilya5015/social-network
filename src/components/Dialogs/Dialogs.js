import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialogItem + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const DialogMessage = (props) => {
  return <div className={styles.dialogMessage}>{props.message}</div>;
};

const dialogsData = [
  { id: 1, name: "Ilya" },
  { id: 1, name: "Alexey" },
  { id: 1, name: "Sergey" },
  { id: 1, name: "Artem" },
  { id: 1, name: "Dmitriy" },
  { id: 1, name: "Vladimir" },
];

const messageData = [
  { id: 1, message: "hi" },
  { id: 1, message: "how are you" },
  { id: 1, message: "nice to meet you" },
];

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialogsItem}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        </div>
        <div className={styles.dialogsItem}>
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>
        <div className={styles.dialogsItem}>
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        </div>
        <div className={styles.dialogsItem}>
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        </div>
        <div className={styles.dialogsItem}>
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        </div>
        <div className={styles.dialogsItem}>
          <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        </div>
      </div>
      <div className={styles.dialogMessages}>
        <DialogMessage message={messageData[0].message} />
        <DialogMessage message={messageData[1].message} />
        <DialogMessage message={messageData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
