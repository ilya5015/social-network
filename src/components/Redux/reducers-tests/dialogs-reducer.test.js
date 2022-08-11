import dialogsReducer, { addMessage, addMessageText } from "../dialogs-reducer";

let state = {
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
  newMessageText: "",
};

it("ADD-MESSAGE action succeeded", () => {
  let action = addMessage();

  let newState = dialogsReducer(state, action);

  expect(newState.messagesData).toStrictEqual([
    { id: 1, message: "hi" },
    { id: 1, message: "how are you" },
    { id: 1, message: "nice to meet you" },
    { id: 1, message: "" },
  ]);
});

it("ADD-MESSAGE-TEXT action succeeded", () => {
  let action = addMessageText("test succeeded");

  let newState = dialogsReducer(state, action);

  expect(newState.newMessageText).toBe("test succeeded");
});
