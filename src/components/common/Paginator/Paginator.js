import { Pagination } from "@mui/material";
import React, { useEffect } from "react";
import "./Paginator.css";

const Paginator = ({ pages, currentPage, portionSize, onPageChanged }) => {
  let onPaginationElemClick = (event) => {
    if (event !== null) {
      let eventTarget = event.target;
      onPageChanged(Number(eventTarget.innerText));
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className={"window"} style={{ width: "320px" }}>
        <Pagination
          count={pages.length}
          onClick={(e) => {
            onPaginationElemClick(e);
          }}
        />
      </div>
    </div>
  );
};

export default Paginator;
