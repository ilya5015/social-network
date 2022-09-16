import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchAuthUserProfile, fetchUser } from "../Redux/profile-reducer";

const Profile = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  const dispatch = useAppDispatch();

  const [profile, userStatus, myId, isAuth] = useAppSelector((state) => [
    state.profilePage.profile,
    state.profilePage.userStatus,
    state.authReducer.id,
    state.authReducer.isAuth,
  ]);

  useEffect(() => {
    console.log(params);
    let userIdFromPath = Number(params.userId);
    console.log("Mounted", userIdFromPath, myId, isAuth);
    if (userIdFromPath) {
      dispatch(fetchUser({ userId: userIdFromPath }));
    } else if (myId) {
      if (isAuth) {
        dispatch(fetchAuthUserProfile());
      }
    }
  }, [myId, params.userId]);

  return (
    <div>
      <ProfileInfo profile={profile} myId={myId} currentId={params.userId} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
