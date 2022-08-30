import styles from "./Dialogs.module.css";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <ul className="tree-view">
        <div className={styles.dialogsItems}>{}</div>
      </ul>

      <Chat />
    </div>
  );
};

export default Dialogs;
