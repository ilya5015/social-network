import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Paginator.css";

type Props = {
  pages: Array<number>,
  currentPage: number,
  portionSize: number,
  onPageChanged: (page: number) => void
}

const Paginator = ({ pages, currentPage, portionSize, onPageChanged } : Props) => {
  const [portion, setPortion] = useState<Array<number>>([]);
  const [rightBorder, setRightBorder] = useState<number>();
  const [leftBorder, setLeftBorder] = useState<number>();

  useEffect(() => {
    setLeftBorder(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (leftBorder) {
    let newRightBorder: number = leftBorder + portionSize;
    setRightBorder(newRightBorder)}
  }, [leftBorder, portionSize]);

  useEffect(() => {
    if (leftBorder && rightBorder){
    let newPortion: Array<number> = pages.filter(
      (page) => page >= leftBorder && page <= rightBorder
    );
    setPortion(newPortion)}
  }, [leftBorder, rightBorder, pages]);

  let onPaginationElemClick = (event: React.SyntheticEvent) => {
    if (event !== null) {
      let eventTarget = event.target as HTMLInputElement
    onPageChanged(Number(eventTarget.innerText))}
  } 

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
