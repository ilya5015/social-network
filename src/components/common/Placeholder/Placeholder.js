const Placeholder = ({ height, width }) => {
  return (
    <div
      style={{
        height: height ? height : "100%",
        width: width ? width : "100%",
      }}
    ></div>
  );
};

export default Placeholder;
