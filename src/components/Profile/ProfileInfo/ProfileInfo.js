import styles from "./ProfileInfo.module.css";
import anime from "../anime.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <ProfileStatus
          userStatus={props.userStatus}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <div>{JSON.stringify(props.profile, 4, 4)}</div>
      <div className={styles.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
