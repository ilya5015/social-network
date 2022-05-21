import styles from "../Dialogs.module.css";

const DialogMessage = (props) => {
  return <div className={styles.dialogMessage}>{props.message}</div>;
};

export default DialogMessage;
