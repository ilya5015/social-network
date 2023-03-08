const Placeholder = ({ height, width, backgroundColor, style }) => {
  return (
    <div
      className="placeholder"
      style={{
        height: height ? height : "100%",
        width: width ? width : "100%",
        backgroundColor: backgroundColor ? backgroundColor : "",
        ...style,
      }}
    ></div>
  );
};

export default Placeholder;
