import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useRef } from "react";

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

  const newPost = useRef(null);

  let postPost = () => {
    let postText = newPost.current.value;
    alert(postText);
  };

  return (
    <div className={styles.postsBlock}>
      my posts
      <div>
        <div class="field-row-stacked">
          <textarea ref={newPost} rows="8"></textarea>
        </div>
        <button onClick={postPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
