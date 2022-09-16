import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, myId, currentId }) => {
  return (
    <div>
      <div className="profile-header">
        <ProfileAvatar />

        <div className="profile-info">
          <ProfileStatus
            userStatus={profile?.status}
            myId={myId}
            currentId={currentId}
          />
          <div className="profile-info-name">name: {profile?.name}</div>
          <div className="profile-info-about">email: {profile?.email}</div>
        </div>
      </div>
      <div>{JSON.stringify(profile, 4, 4)}</div>
    </div>
  );
};

export default ProfileInfo;
