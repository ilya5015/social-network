import {
  addPostActionCreator,
  addPostMessageActionCreator,
} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    addPostMessage: (postMessage) => {
      dispatch(addPostMessageActionCreator(postMessage));
    },
  };
};

const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperMyPostsContainer;
