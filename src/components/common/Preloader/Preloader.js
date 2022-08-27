import React from "react";
import preloader from "../../../assets/preloader.gif";

const Preloader = () => {
  return <div>{<img src={preloader} style={{ width: "100px" }} />}</div>;
};

export default Preloader;
