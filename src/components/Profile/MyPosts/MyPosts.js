import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => {
    return (
      <Post
        message={post.message}
        likeCounter={post.likeCounter}
        dislikeCounter={post.dislikeCounter}
      />
    );
  });

  return (
    <div className={styles.postsBlock}>
      my posts
      <div>
        <button type="button">Add new post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
