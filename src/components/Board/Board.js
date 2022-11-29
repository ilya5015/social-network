import React, { useEffect } from "react";
import Thread from "./Thread/Thread";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ThreadForm from "./ThreadForm/ThreadForm";
import { Footer } from "antd/lib/layout/layout";
import { fetchGetThreads } from "../Redux/board-reducer";

const Board = () => {
  const dispatch = useAppDispatch();
  const [threads] = useAppSelector((state) => [state.boardReducer.threads]);

  useEffect(() => {
    dispatch(fetchGetThreads());
  }, []);

  useEffect(() => {
    console.log("Threads are", threads);
  }, [threads]);

  return (
    <div className="board">
      {threads.map((thread) => {
        return (
          <div>
            <Thread
              threadId={thread.thread_id}
              threadTitle={thread.title}
              threadFounderName={thread.founder_name}
              threadDate={thread.thread_time}
              threadText={thread.thread_text}
              threadImgs={thread.imgs}
              threadReplies={[]}
            />
            <hr stylee={{ size: "3px", width: "100%", align: "center" }} />
          </div>
        );
      })}
      <Footer
        style={{
          position: "sticky",
          bottom: "0",
          left: "80%",
          width: "40%",
          marginRight: "5px",
        }}
      >
        <ThreadForm />
      </Footer>
    </div>
  );
};

export default Board;
