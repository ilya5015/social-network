import React from "react";
import "./ThreadReply.css";

const ThreadReply = ({ replySenderName, replyDate, replyImg, replyText }) => {
  return (
    <div className="thread-reply">
      <div className="thread-reply__info">
        <span className="thread-reply__info__sender">{replySenderName}</span>

        <span className="thread-reply__info__date">{replyDate}</span>
      </div>
      <div className="thread-reply__content">
        <div className="thread-reply__content__img">
          <a href={""} className="thread__content__img__link">
            {replyImg}
          </a>
          <img src={replyImg} width="200" />
        </div>
        <div className="thread-reply__content__text">{replyText}</div>
      </div>
    </div>
  );
};

export default ThreadReply;
