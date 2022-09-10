import React, { useEffect } from "react";
import "./Paginator.css";
import { Pagination } from "antd";

const Paginator = ({ pages, onPageChanged }) => {
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
          defaultCurrent={1}
          total={pages.length}
          onClick={(e) => {
            onPaginationElemClick(e);
          }}
        />
      </div>
    </div>
  );
};

export default Paginator;
