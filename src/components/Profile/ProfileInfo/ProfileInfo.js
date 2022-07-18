import styles from "./ProfileInfo.module.css";
import anime from "../anime.png";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src={props.profile.photos.large} width="1000px" />
      </div>
      <div>{console.log(props.profile)}</div>
      <div className={styles.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
