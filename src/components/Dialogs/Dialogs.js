import styles from "./Dialogs.module.css";
import Chat from "./Chat/Chat";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <Chat />
    </div>
  );
};

export default Dialogs;
