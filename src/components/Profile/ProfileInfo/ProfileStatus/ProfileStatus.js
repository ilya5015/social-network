import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { fetchUpdateUserStatus } from "../../../Redux/profile-reducer";

const ProfileStatus = React.memo(({ userStatus, myId, currentId }) => {
  const dispatch = useAppDispatch();

  const [statusText, setStatusText] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatusText(() => userStatus);
  }, [userStatus]);

  let setActivateEditMode = () => {
    setEditMode(true);
  };

  let setDeactivateEditMode = () => {
    setEditMode(false);
  };

  let updateLocalStatusText = (status) => {
    if (myId && !currentId) {
      setStatusText(status);
    } else {
      console.log("noooope");
      console.log(myId, currentId);
    }
  };

  let updateStatusText = (status) => {
    dispatch(fetchUpdateUserStatus({ userStatus: status }));
  };

  return (
    <div className="profile-info-status">
      {!editMode ? (
        <div
          onDoubleClick={() => {
            if (myId && !currentId) {
              setActivateEditMode();
            }
          }}
        >
          status: {statusText}
        </div>
      ) : (
        <div>
          status:{" "}
          <input
            value={statusText}
            autoFocus={true}
            onBlur={() => {
              setDeactivateEditMode();
              updateStatusText(statusText);
            }}
            onChange={(e) => {
              updateLocalStatusText(e.target.value);
            }}
          ></input>
        </div>
      )}
    </div>
  );
});

export default ProfileStatus;
