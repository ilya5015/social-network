import React from "react";
import Thread from "./Thread/Thread";
import { useState } from "react";

const Board = () => {
  const [threads, setThreads] = useState([
    {
      thread_id: 1,
      title: "first thread",
      founder_id: 3,
      founder_name: "COCO",
      thread_text: "My first thread",
      imgs: null,
      thread_time: "3.00",
    },
  ]);

  return (
    <div className="board">
      {threads.map((thread) => {
        return (
          <Thread
            threadId={thread.thread_id}
            threadFounderName={thread.founder_name}
            threadDate={thread.thread_time}
            threadText={thread.thread_text}
          />
        );
      })}
    </div>
  );
};

export default Board;
