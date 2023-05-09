import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { openWindow } from "../Redux/windows-reducer";
import Window from "../Window/Window";

const TestStand = () => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <button
        onClick={() => {
          dispatch(
            openWindow({
              windowId: 1,
              windowOptions: { minimized: false, fullscreen: false },
            })
          );
        }}
      >
        Add window
      </button>
    </div>
  );
};

export default TestStand;
