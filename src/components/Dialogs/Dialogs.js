import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";

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

  return (
    <div className={styles.dialogs}>
      <ul className="tree-view">
        <div className={styles.dialogsItems}>{dialogsElements}</div>
      </ul>

      <Chat />
    </div>
  );
};

export default Dialogs;
