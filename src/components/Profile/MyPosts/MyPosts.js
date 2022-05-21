import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    {
      id: 1,
      message: "Hi there, how are you ?",
      likeCounter: "40",
      dislikeCounter: "20",
    },
    {
      id: 2,
      message: "It`s my first post",
      likeCounter: "30",
      dislikeCounter: "10",
    },
  ];

  let postElements = postData.map((post) => {
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
