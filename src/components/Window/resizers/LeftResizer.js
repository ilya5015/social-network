import React from "react";
import { getRelativePositionForLeft } from "./positionCounters/getRelativePositionForLeft.js";
import Resizer from "./Resizer.js";
function LeftResizer({
  setMouseShift,
  mouseDownFirst,
  setMouseDownFirst,
  setWinWidthBefore,
  setWinWidth,
  setMouseUp,
}) {
  return (
    <Resizer
      className="window__sizing-left"
      onMouseDown={(e) => {
        e.preventDefault();
        setMouseShift(getRelativePositionForLeft(e, ".window__sizing-left"));
        if (mouseDownFirst) {
          setMouseDownFirst(false);
          const target = e.target.closest(".window__wrapper");
          setWinWidthBefore(target.getBoundingClientRect().width);
          setWinWidth(target.getBoundingClientRect().width);
        }
        // console.log("Start move!");
        setMouseUp(7);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          top: resizerWidth / 2 + borderWidth / 2 + "px",
          left: -resizerWidth / 2 + borderWidth / 2 + "px",
          width: resizerWidth + "px",
          height: `calc(100% - ${resizerWidth + borderWidth}px)`,
        };
      }}
    />
  );
}

export default LeftResizer;
