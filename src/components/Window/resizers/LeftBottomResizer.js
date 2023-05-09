import React from "react";
import { getRelativePositionForBottom } from "./positionCounters/getRelativePositionForBottom.js";
import { getRelativePositionForLeft } from "./positionCounters/getRelativePositionForLeft.js";
import Resizer from "./Resizer.js";
function LeftBottomResizer({
  setMouseShift,
  mouseDownFirst,
  setMouseDownFirst,
  setWinWidthBefore,
  setWinWidth,
  setMouseUp,
}) {
  return (
    <Resizer
      className="window__sizing-left-bottom"
      onMouseDown={(e) => {
        e.preventDefault();
        // console.log("Start move!");
        setMouseShift({
          x: getRelativePositionForLeft(e, ".window__sizing-left-bottom").x,
          y: getRelativePositionForBottom(e, ".window__sizing-left-bottom").y,
        });
        setMouseUp(6);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          left: -resizerWidth / 2 + borderWidth / 2 + "px",
          bottom: -resizerWidth / 2 + borderWidth / 2 + "px",
          height: resizerWidth + "px",
          width: resizerWidth + "px",
        };
      }}
    />
  );
}

export default LeftBottomResizer;
