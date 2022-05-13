import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <button type="button">Add new post</button>
      <div className={styles.posts}>
        <Post
          message="Hi there, how are you ?"
          likeCounter="20"
          dislikeCounter="40"
        />
        <Post
          message="It`s my first post"
          likeCounter="15"
          dislikeCounter="23"
        />
      </div>
    </div>
  );
};

export default MyPosts;
