import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ProfileAvatar = ({ avatar }) => {
  return (
    <div className="profile-header-avatar">
      {avatar !== null ? (
        <Avatar size={200} src={avatar} />
      ) : (
        <Avatar size={200} icon={<UserOutlined />} />
      )}
    </div>
  );
};

export default ProfileAvatar;
