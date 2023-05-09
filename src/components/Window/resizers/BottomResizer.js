import React from "react";
import { getRelativePositionForBottom } from "./positionCounters/getRelativePositionForBottom.js";
import Resizer from "./Resizer.js";
function BottomResizer({ setMouseShift, setMouseUp }) {
  return (
    <Resizer
      className="window__sizing-bottom"
      onMouseDown={(e) => {
        e.preventDefault();
        // console.log("Start move!");
        setMouseShift(
          getRelativePositionForBottom(e, ".window__sizing-bottom")
        );
        setMouseUp(5);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          left: resizerWidth / 2 + borderWidth / 2 + "px",
          bottom: -resizerWidth / 2 + borderWidth / 2 + "px",
          height: resizerWidth + "px",
          width: `calc(100% - ${resizerWidth + borderWidth}px)`,
        };
      }}
    />
  );
}

export default BottomResizer;
