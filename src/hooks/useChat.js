import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../config";

export const useChat = () => {
  // локальное состояние для сообщений
  const [messages, setMessages] = useState([]);

  // useRef() используется не только для получения доступа к DOM-элементам,
  // но и для хранения любых мутирующих значений в течение всего жизненного цикла компонента
  const socketRef = useRef(null);

  useEffect(() => {
    // создаем экземпляр сокета, передаем ему адрес сервера
    socketRef.current = io(SOCKET_URL, {
      reconnectionDelayMax: 10000,
      withCredentials: true,
    });

    socketRef.current.on("chatMessages", (msgs) => {
      console.log("chatMessages", msgs);
      setMessages(msgs);
    });
    socketRef.current.on("message", (msg) => {
      console.log("message", msg.text);
    });
    socketRef.current.on("getChatMessage", (msg) => {
      console.log("getChatMessage", msg);
      setMessages((msgs) => [...msgs, msg]);
    });

    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socketRef.current.disconnect();
    };
  }, []);

  // функция отправки сообщения
  const sendMessage = (message) => {
    console.log("sendMessage", message);
    socketRef.current.emit("sendChatMessage", message);
  };

  // хук возвращает пользователей, сообщения и функции для отправки удаления сообщений
  return [messages, sendMessage];
};
