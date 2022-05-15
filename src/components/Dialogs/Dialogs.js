import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialogsItem}>Ilya</div>
        <div className={styles.dialogsItem}>Alexey</div>
        <div className={styles.dialogsItem}>Sergey</div>
        <div className={styles.dialogsItem}>Artem</div>
        <div className={styles.dialogsItem}>Dmitriy</div>
        <div className={styles.dialogsItem}>Vladimir</div>
      </div>
      <div className={styles.dialogMessages}>
        <div className={styles.dialogMessage}>Hi</div>
        <div className={styles.dialogMessage}>How are you</div>
        <div className={styles.dialogMessage}>Nice to meet you</div>
      </div>
    </div>
  );
};

export default Dialogs;
