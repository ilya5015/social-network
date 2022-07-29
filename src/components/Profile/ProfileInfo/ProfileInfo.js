import styles from "./ProfileInfo.module.css";
import anime from "../anime.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <ProfileStatus />
      </div>
      <div>{console.log(props.profile)}</div>
      <div className={styles.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
