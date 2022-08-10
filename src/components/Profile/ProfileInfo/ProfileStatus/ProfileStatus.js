import React, { useEffect, useState } from "react";

const ProfileStatus = React.memo(
  ({ userStatus, updateUserStatus, myId, currentId }) => {
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
      updateUserStatus(status);
    };

    return (
      <div>
        {!editMode ? (
          <div
            onDoubleClick={() => {
              if (myId && !currentId) {
                setActivateEditMode();
              }
            }}
          >
            {statusText}
          </div>
        ) : (
          <div>
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
  }
);

export default ProfileStatus;
