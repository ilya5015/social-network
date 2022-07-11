import React from "react";
import preloader from "../../../assets/preloader.gif";

const Preloader = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <img src={preloader} style={{ width: "100px" }} />
      ) : null}
    </div>
  );
};

export default Preloader;
