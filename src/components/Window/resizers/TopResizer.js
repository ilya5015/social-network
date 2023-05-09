import React from "react";
import { getRelativePositionForTop } from "./positionCounters/getRelativePositionForTop.js";
import Resizer from "./Resizer.js";
function TopResizer({
  setMouseShift,
  mouseDownFirst,
  setMouseDownFirst,
  setWinHeightBefore,
  setWinHeight,
  setMouseUp,
  color,
}) {
  return (
    <Resizer
      className="window__sizing-top"
      onMouseDown={(e) => {
        e.preventDefault();
        setMouseShift(getRelativePositionForTop(e, ".window__sizing-top"));
        if (mouseDownFirst) {
          setMouseDownFirst(false);
          const target = e.target.closest(".window__wrapper");
          setWinHeightBefore(target.getBoundingClientRect().height);
          setWinHeight(target.getBoundingClientRect().height);
        }
        // console.log("Start move!");
        setMouseUp(1);
      }}
      countDimentions={(resizerWidth, borderWidth) => {
        return {
          left: resizerWidth / 2 + borderWidth / 2 + "px",
          top: -resizerWidth / 2 + borderWidth / 2 + "px",
          height: resizerWidth + "px",
          width: `calc(100% - ${resizerWidth + borderWidth}px)`,
        };
      }}
    />
  );
}

export default TopResizer;
