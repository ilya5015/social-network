import styles from "./Profile.module.css";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../../components/Profile/MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
        myId={props.myId}
        currentId={props.currentId}
      />
      <MyPostsContainer postData={props.postData} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
