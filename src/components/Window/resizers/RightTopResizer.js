import React from "react";
import { getRelativePositionForRight } from "./positionCounters/getRelativePositionForRight.js";
import { getRelativePositionForTop } from "./positionCounters/getRelativePositionForTop.js";
import Resizer from "./Resizer.js";
function RightTopResizer({
  setMouseShift,
  mouseDownFirst,
  setMouseDownFirst,
  setWinWidthBefore,
  setWinWidth,
  setMouseUp,
  color,
}) {
  return (
    <Resizer
      className="window__sizing-right-top"
      onMouseDown={(e) => {
        e.preventDefault();
        // console.log("Start move!");
        setMouseShift({
          x: getRelativePositionForRight(e, ".window__sizing-right-top").x,
          y: getRelativePositionForTop(e, ".window__sizing-right-top").y,
        });
        setMouseUp(2);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          right: -resizerWidth / 2 + borderWidth / 2 + "px",
          top: -resizerWidth / 2 + borderWidth / 2 + "px",
          height: resizerWidth + "px",
          width: resizerWidth + "px",
        };
      }}
    />
  );
}

export default RightTopResizer;
