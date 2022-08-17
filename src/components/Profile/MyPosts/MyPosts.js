import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Button, TextField } from "@mui/material";
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

  const newPost = useRef("");

  let onPostChange = (postText) => {
    setNewPostText(postText);
  };

  let postPost = () => {
    props.addPost(newPostText);
    newPost.current.value = "";
  };

  return (
    <div className={styles.postsBlock}>
      my posts
      <div>
        <div className="field-row-stacked">
          <TextField
            id="outlined-multiline-static"
            label="Post text"
            multiline
            variant="filled"
            rows={4}
            onChange={() => {
              onPostChange(newPost.current.value);
            }}
            inputRef={newPost}
          />
        </div>
        <Button
          variant="contained"
          onClick={() => {
            postPost();
          }}
        >
          Add new post
        </Button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
