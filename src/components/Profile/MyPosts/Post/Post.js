import styles from "./Post.module.css";
import avatar from "./avatar.jpg";
import Avatar from "@mui/material/Avatar";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <Avatar alt="user" sx={{ width: 200, height: 200 }} src={avatar} />
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
