let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        message: "Hi there, how are you ?",
        likeCounter: "40",
        dislikeCounter: "20",
      },
      {
        id: 2,
        message: "It`s my first post",
        likeCounter: "30",
        dislikeCounter: "10",
      },
    ],
  },
  messagesPage: {
    dialogsData: [
      { id: 1, name: "Ilya" },
      { id: 1, name: "Alexey" },
      { id: 1, name: "Sergey" },
      { id: 1, name: "Artem" },
      { id: 1, name: "Dmitriy" },
      { id: 1, name: "Vladimir" },
    ],
    messagesData: [
      { id: 1, message: "hi" },
      { id: 1, message: "how are you" },
      { id: 1, message: "nice to meet you" },
    ],
  },
};

export default state;
