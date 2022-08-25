import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "../../Dialogs.module.css";
import AddMessageForm from "../AddMessageForm/AddMessageForm";

const ChatMessages = () => {
  const messages = useSelector((state) => state.chatReducer.messages);
  return (
    <div>
      <div>
        <div>{JSON.stringify(messages, 4, 4)}</div>
        {messages?.map((message) => (
          <li>
            <div className={styles.messageContainer}>
              <span>{message.message}</span>
            </div>
          </li>
        ))}
      </div>
      <AddMessageForm />
    </div>
  );
};

export default ChatMessages;
