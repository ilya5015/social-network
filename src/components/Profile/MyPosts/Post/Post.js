import styles from "./Post.module.css";
import avatar from "./avatar.jpg";
import { Avatar, Image } from "antd";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <Avatar
        src={<Image src={avatar} style={{ width: 200, height: 200 }} />}
      />
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
