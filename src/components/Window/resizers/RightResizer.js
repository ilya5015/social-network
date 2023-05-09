import React from "react";
import { getRelativePositionForRight } from "./positionCounters/getRelativePositionForRight.js";
import Resizer from "./Resizer.js";
function RightResizer({ setMouseShift, setMouseUp, color }) {
  return (
    <Resizer
      className="window__sizing-right"
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          top: resizerWidth / 2 + borderWidth / 2 + "px",
          right: -resizerWidth / 2 + borderWidth / 2 + "px",
          width: resizerWidth + "px",
          height: `calc(100% - ${resizerWidth + borderWidth}px)`,
        };
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        // console.log("Start move!");
        setMouseShift(getRelativePositionForRight(e, ".window__sizing-right"));
        setMouseUp(3);
      }}
    />
  );
}

export default RightResizer;
