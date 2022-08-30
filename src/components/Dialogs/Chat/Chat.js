import { useAppDispatch } from "../../../hooks/hooks";
import { useEffect } from "react";
import {
  startMessagesListening,
  stopMessagesListening,
} from "../../Redux/chat-reducer";
import styles from "../Dialogs.module.css";
import ChatMessages from "./ChatMessages/ChatMessages";

const Chat = () => {
  const dispatch = useAppDispatch();

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
