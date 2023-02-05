import { Image } from "antd";
import React from "react";
import "./ThreadReply.css";

const ThreadReply = ({ replySenderName, replyDate, replyImgs, replyText }) => {
  return (
    <div className="thread-reply">
      <div className="thread-reply__info">
        <span className="thread-reply__info__sender">{replySenderName}</span>

        <span className="thread-reply__info__date">{replyDate}</span>
      </div>
      <div className="thread-reply__content">
        <div className="thread-reply__content__imgs">
          {replyImgs.map((replyImg) => (
            <div className="thread-reply__content__img">
              <a
                href={`http://localhost:5000/${replyImg}`}
                target="_blank"
                className="thread-reply__content__img__link"
              >
                {replyImg.split("/").splice(-1)}
              </a>
              <Image width={200} src={`http://localhost:5000/${replyImg}`} />
            </div>
          ))}
        </div>
        <div className="thread-reply__content__text">{replyText}</div>
      </div>
    </div>
  );
};

export default ThreadReply;
