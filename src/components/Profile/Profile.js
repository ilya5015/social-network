import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer
        postData={props.state.postData}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
