import React, { useEffect } from "react";
import Thread from "./Thread/Thread";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ThreadForm from "./ThreadForm/ThreadForm";
import { Footer } from "antd/lib/layout/layout";
import { fetchGetThreads } from "../Redux/board-reducer";
import Placeholder from "../common/Placeholder/Placeholder";
import "./Board.css";

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
      <Placeholder
        height={"0px"}
        width={"100%"}
        backgroundColor={"black"}
        style={{ alignSelf: "center", border: "1px solid #000000" }}
      />
      {threads.map((thread) => {
        return (
          <>
            <div className="board-item thread-wrapper">
              <Thread
                threadId={thread.thread_id}
                threadTitle={thread.title}
                threadFounderName={thread.founder_name}
                threadDate={thread.thread_time}
                threadText={thread.thread_text}
                threadImgs={thread.imgs}
                threadReplies={thread.replies}
              />
            </div>
            <Placeholder
              height={"0px"}
              width={"100%"}
              style={{ alignSelf: "center", border: "1px solid #000000" }}
            />
          </>
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
