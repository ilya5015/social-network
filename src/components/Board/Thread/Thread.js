import React from "react";
import { useState } from "react";
import threadImg from "./threadImg.jpg";
import { Image, Popover } from "antd";
import ThreadReply from "./ThreadReplies/ThreadReply";
import "./Thread.css";

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

  return (
    <div className="thread">
      <div className="thread__info">
        <span className="thread__info__founder">{threadFounderName}</span>

        <span className="thread__info__date">{threadDate}</span>

        <Popover
          placement="bottomLeft"
          content={
            <div>
              <div>Reply form</div>
            </div>
          }
          title="Reply"
          trigger="click"
          open={modalOpen}
          onOpenChange={handleOpenModalChange}
        >
          <button
            className="thread__info__id"
            onClick={() => {}}
          >{`No.${threadId}`}</button>
        </Popover>
      </div>
      <div className="thread__content">
        <div className="thread__content__imgs">
          {threadImgs.map((threadImg) => (
            <div className="thread__content__img">
              <a href={threadImg} className="thread__content__img__link">
                {threadImg.split("/").splice(-1)}
              </a>
              <Image width={200} src={`http://localhost:5000/${threadImg}`} />
            </div>
          ))}
        </div>
        <div className="thread__content__text">
          <div className="thread__content__text__title">{threadTitle}</div>
          <div className="thread__content__text__body">{threadText}</div>
        </div>
      </div>
      {threadReplies.map((reply) => {
        return (
          <ThreadReply
            replySenderName={reply}
            replyDate={reply}
            replyImg={reply}
            replyText={reply}
          />
        );
      })}
    </div>
  );
};

export default Thread;
