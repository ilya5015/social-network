import React from "react";
import { getRelativePositionForLeft } from "./positionCounters/getRelativePositionForLeft.js";
import { getRelativePositionForTop } from "./positionCounters/getRelativePositionForTop.js";
import Resizer from "./Resizer.js";
function LeftTopResizer({
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
      className="window__sizing-left-top"
      onMouseDown={(e) => {
        e.preventDefault();
        // console.log("Start move!");
        setMouseShift({
          x: getRelativePositionForLeft(e, ".window__sizing-left-top").x,
          y: getRelativePositionForTop(e, ".window__sizing-left-top").y,
        });
        setMouseUp(8);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          left: -resizerWidth / 2 + borderWidth / 2 + "px",
          top: -resizerWidth / 2 + borderWidth / 2 + "px",
          height: resizerWidth + "px",
          width: resizerWidth + "px",
        };
      }}
    />
  );
}

export default LeftTopResizer;
