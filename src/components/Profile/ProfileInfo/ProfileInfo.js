import "./ProfileInfo.css";
import anime from "../anime.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className="profile-header">
        <img
          className="profile-header__avatar"
          src={props.profile?.photos.large}
        />
        <div className="profile-header__status">
          <ProfileStatus
            userStatus={props.userStatus}
            updateUserStatus={props.updateUserStatus}
            myId={props.myId}
            currentId={props.currentId}
          />
        </div>
      </div>
      <div>{JSON.stringify(props.profile, 4, 4)}</div>
      <div className="description__text">avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
