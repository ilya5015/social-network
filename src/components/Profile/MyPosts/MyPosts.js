import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { createRef } from "react";

const MyPosts = (props) => {
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

  let newPost = createRef();

  let onPostChange = () => {
    let postMessage = newPost.current.value;
    props.addPostMessage(postMessage);
  };

  let postPost = () => {
    props.addPost();
    newPost.current.value = "";
  };

  return (
    <div className={styles.postsBlock}>
      my posts
      <div>
        <div className="field-row-stacked">
          <textarea onChange={onPostChange} ref={newPost} rows="8"></textarea>
        </div>
        <button onClick={postPost}>Add new post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
