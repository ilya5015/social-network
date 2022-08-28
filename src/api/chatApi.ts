let subscribers: Array<any> = [];

let ws: null|WebSocket = null;

let createChannel = () => {
  if (ws === null) {
    ws = new WebSocket(
      "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    ws.addEventListener("close", onCloseEventHandler);
    ws.addEventListener("message", onMessageEventHadler);
  }
};

let onCloseEventHandler = () => {
  console.log("WS CLOSED");
  setTimeout(createChannel, 3000);
};

let onMessageEventHadler = (e: any) => {
  let newMessages = JSON.parse(e.data);
  subscribers.forEach((subscriber) => subscriber(newMessages));
};

export const chatApi = {
  start() {
    createChannel();
  },
  stop() {
    ws?.removeEventListener("close", onCloseEventHandler);
    ws?.removeEventListener("message", onMessageEventHadler);
    ws?.close();
  },
  subscribeNewMessages(callback: any) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((subscriber) => subscriber !== callback);
    };
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
