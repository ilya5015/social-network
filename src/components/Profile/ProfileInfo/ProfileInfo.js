import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, userStatus, myId, currentId }) => {
  return (
    <div>
      <div className="profile-header">
        <img className="profile-header__avatar" src={profile?.photos.large} />
        <div className="profile-header__status">
          <ProfileStatus
            userStatus={userStatus}
            myId={myId}
            currentId={currentId}
          />
        </div>
      </div>
      <div>{JSON.stringify(profile, 4, 4)}</div>
      <div className="description__text">avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
