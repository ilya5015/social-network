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
      last_replies: ["coc", "cabana", "coco"],
    },
    {
      thread_id: 34234,
      title: "second thread",
      founder_id: 6,
      founder_name: "ILYA",
      thread_text:
        "プロ野球のパ・リーグは２日、今季最終戦が行われ、２位オリックスが仙台市の楽天生命パーク宮城で楽天に５－２で勝ち、首位ソフトバンクが千葉市のＺＯＺＯマリンスタジアムでロッテに３－５で敗れたため、逆転で２年連続１４度目（阪急時代を含む）のリーグ優勝を果たした。オリックスとソフトバンクが勝率で並んだが、直接対決でオリックスが１５勝１０敗と勝ち越しているため、優勝が決まった。",
      imgs: null,
      thread_time: "4.00",
      last_replies: ["coc", "cabana", "coco"],
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
            threadReplies={thread.last_replies}
          />
        );
      })}
    </div>
  );
};

export default Board;
