import MyPosts from "./MyPosts";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

const SuperMyPostsContainer = connect(mapStateToProps, {})(MyPosts);

export default SuperMyPostsContainer;
