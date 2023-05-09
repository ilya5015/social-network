import React from "react";
function Resizer({ onMouseDown, className, countDimentions, style }) {
  const resierWidth = 20;
  const borderWidth = 7;
  const dimentions =
    (countDimentions && countDimentions(resierWidth, borderWidth)) || {};

  return (
    <div
      draggable={false}
      className={className}
      onMouseDown={onMouseDown}
      style={{
        ...style,
        zIndex: 1000,
        backgroundColor: "rgba(122,122,122,0.3)",
        backgroundColor: "transparent",
        ...dimentions,
      }}
    />
  );
}

export default Resizer;
