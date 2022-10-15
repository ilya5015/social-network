import threadImg from "./threadImg.jpg";
import "./Thread.css";

const Thread = ({ threadId, threadFounderName, threadDate, threadText }) => {
  return (
    <div className="thread">
      <div className="thread__info">
        <span className="thread__info__id">{threadId}</span>
        <span className="thread__info__founder">{threadFounderName}</span>
        <span className="thread_info__date">{threadDate}</span>
      </div>
      <div className="thread__content">
        <div className="thread__content__img">
          <img src={threadImg} width="200" />
        </div>
        <div className="thread__content__text">{threadText}</div>
      </div>
    </div>
  );
};

export default Thread;
