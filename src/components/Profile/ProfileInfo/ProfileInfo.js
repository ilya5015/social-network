import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, userStatus, myId, currentId }) => {
  return (
    <div>
      <div className="profile-header">
        <ProfileAvatar avatar={profile?.photos.small} />

        <div className="profile-info">
          <ProfileStatus
            userStatus={userStatus}
            myId={myId}
            currentId={currentId}
          />
          <div className="profile-info-name">name: {profile?.fullName}</div>
          <div className="profile-info-about">about me: {profile?.aboutMe}</div>
        </div>
      </div>
      <div>{JSON.stringify(profile, 4, 4)}</div>
      <div className="description__text">avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
