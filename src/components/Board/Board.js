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
              threadFounderName={thread.founder_name}
              threadDate={thread.thread_time}
              threadText={thread.thread_text}
              threadReplies={[]}
            />
            <hr stylee={{ size: "3px", width: "100%", align: "center" }} />
          </div>
        );
      })}
      <Footer style={{ position: "sticky", bottom: "0", width: "100px" }}>
        <ThreadForm />
      </Footer>
    </div>
  );
};

export default Board;
