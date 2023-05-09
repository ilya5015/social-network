import React from "react";
import { getRelativePositionForBottom } from "./positionCounters/getRelativePositionForBottom.js";
import { getRelativePositionForRight } from "./positionCounters/getRelativePositionForRight.js";
import Resizer from "./Resizer.js";
function RightBottomResizer({
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
      className="window__sizing-right-bottom"
      onMouseDown={(e) => {
        e.preventDefault();
        // console.log("Start move!");
        setMouseShift({
          x: getRelativePositionForRight(e, ".window__sizing-right-bottom").x,
          y: getRelativePositionForBottom(e, ".window__sizing-right-bottom").y,
        });
        setMouseUp(4);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          right: -resizerWidth / 2 + borderWidth / 2 + "px",
          bottom: -resizerWidth / 2 + borderWidth / 2 + "px",
          height: resizerWidth + "px",
          width: resizerWidth + "px",
        };
      }}
    />
  );
}

export default RightBottomResizer;
