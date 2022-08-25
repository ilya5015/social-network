import { useState } from "react";
import { sendMessage } from "../../../Redux/chat-reducer";

const AddMessageForm = () => {
  const [message, setMessage] = useState();

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => {
            console.log(e);
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("Message sent", message);
            sendMessage(message);
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AddMessageForm;
