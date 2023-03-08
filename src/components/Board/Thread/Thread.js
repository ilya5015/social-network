import React, { useEffect } from "react";
import { useState } from "react";
import threadImg from "./threadImg.jpg";
import { Image, Popover } from "antd";
import ThreadReply from "./ThreadReplies/ThreadReply";
import "./Thread.css";
import ThreadReplyForm from "./ThreadReplies/ThreadReplyForm/ThreadReplyForm";
import Placeholder from "../../common/Placeholder/Placeholder";

const Thread = ({
  threadId,
  threadFounderName,
  threadTitle,
  threadDate,
  threadText,
  threadImgs,
  threadReplies,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const hideModal = () => {
    setModalOpen(false);
  };

  const handleOpenModalChange = (newOpen) => {
    setModalOpen(newOpen);
  };

  useEffect(() => {
    console.log("Thread replies", threadReplies);
  }, [threadReplies]);

  return (
    <div className="thread">
      <div className="thread__info">
        <span className="thread__info__id">{`No. `}</span>
        <span>{threadId}</span>

        <Placeholder width={"50px"} />

        <span className="thread__info__founder">{`Founder:`}</span>

        <span>{threadFounderName}</span>

        <Placeholder width={"50px"} />

        <span className="thread__info__date">{` ${threadDate}`}</span>

        <Popover
          placement="bottomLeft"
          content={
            <div>
              <ThreadReplyForm parentThreadId={threadId} />
            </div>
          }
          title="Reply"
          trigger="click"
          open={modalOpen}
          onOpenChange={handleOpenModalChange}
        >
          <button
            className="thread__info__answer"
            onClick={() => {}}
          >{`Answer`}</button>
        </Popover>
      </div>
      <div className="thread__content">
        <div className="thread__content__imgs">
          {threadImgs.map((threadImg) => (
            <div className="thread__content__img">
              <a
                href={`http://localhost:5000/${threadImg}`}
                className="thread__content__img__link"
                target="_blank"
              >
                {threadImg.split("/").splice(-1)}
              </a>
              <Image width={200} src={`http://localhost:5000/${threadImg}`} />
            </div>
          ))}
        </div>
        <div className="thread__body">
          <div className="thread__body__item thread__content__text">
            <div className="thread__content__text__title">{threadTitle}</div>
            <div className="thread__content__text__body">{threadText}</div>
          </div>

          {threadReplies.map((reply) => {
            return (
              <ThreadReply
                replySenderName={reply.reply_sender_name}
                replyDate={reply.reply_time}
                replyImgs={reply.imgs}
                replyText={reply.reply_text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thread;
