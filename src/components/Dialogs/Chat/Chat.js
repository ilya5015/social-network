import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import {
  startMessagesListening,
  stopMessagesListening,
} from "../../Redux/chat-reducer";
import styles from "../Dialogs.module.css";
import ChatMessages from "./ChatMessages/ChatMessages";

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      stopMessagesListening();
    };
  }, []);

  return (
    <div className={styles.chatContainer}>
      <ChatMessages />
    </div>
  );
};

export default Chat;
