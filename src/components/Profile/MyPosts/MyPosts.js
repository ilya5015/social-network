import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useRef, useState } from "react";

const MyPosts = (props) => {
  const [newPostText, setNewPostText] = useState("");

  let postElements = props.postData.map((post) => {
    return (
      <Post
        message={post.message}
        likeCounter={post.likeCounter}
        dislikeCounter={post.dislikeCounter}
        key={post.id}
      />
    );
  });

  return (
    <div className={styles.postsBlock}>
      my posts
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
