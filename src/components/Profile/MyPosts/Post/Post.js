import styles from "./Post.module.css";
import avatar from "./avatar.jpg";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src={avatar} />
      {props.message}
      <div>
        <span>LIKE</span>:{props.likeCounter}
      </div>
      <div>
        <span>DISLIKE</span>:{props.dislikeCounter}
      </div>
    </div>
  );
};

export default Post;
