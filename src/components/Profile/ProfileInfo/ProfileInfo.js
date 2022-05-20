import styles from "./ProfileInfo.module.css";
import anime from "../anime.png";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={anime} width="1000px" />
      </div>
      <div className={styles.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
