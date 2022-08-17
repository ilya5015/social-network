import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Paginator.css";

const Paginator = ({ pages, currentPage, portionSize, onPageChanged }) => {
  const [portion, setPortion] = useState([]);
  const [rightBorder, setRightBorder] = useState();
  const [leftBorder, setLeftBorder] = useState();

  useEffect(() => {
    setLeftBorder(currentPage);
  }, [currentPage]);

  useEffect(() => {
    let newRightBorder = leftBorder + portionSize;
    setRightBorder(newRightBorder);
  }, [leftBorder, portionSize]);

  useEffect(() => {
    let newPortion = pages.filter(
      (page) => page >= leftBorder && page <= rightBorder
    );
    setPortion(newPortion);
  }, [leftBorder, rightBorder, pages]);

  let onPaginationElemClick = (event) => {
    onPageChanged(event.target.innerText);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className={"window"} style={{ width: "320px" }}>
        <Pagination
          count={`${pages.length}`}
          onClick={(e) => {
            onPaginationElemClick(e);
          }}
        />
      </div>
    </div>
  );
};

export default Paginator;
