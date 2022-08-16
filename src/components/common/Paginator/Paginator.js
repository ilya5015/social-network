import React, { useEffect, useState } from "react";
import "./Paginator.css";

const Paginator = ({ elems, currentPage, portionSize, onPageChanged }) => {
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
    let newPortion = elems.filter(
      (elem) => elem >= leftBorder && elem <= rightBorder
    );
    setPortion(newPortion);
  }, [leftBorder, rightBorder, elems]);

  return (
    <div>
      <div className={"window"} style={{ width: "320px" }}>
        <div class="title-bar">
          <div class="title-bar-text">Users list</div>
        </div>

        <div className="status-bar">
          <div
            className="status-bar-field status-bar-field__controll-btn"
            onClick={() =>
              leftBorder - portionSize > 0
                ? setLeftBorder(leftBorder - portionSize)
                : setLeftBorder(1)
            }
          >
            Prev
          </div>
          {portion.map((page) => {
            return (
              <div className="status-bar-field status-bar-field__page">
                <span
                  className={currentPage === page ? "selectedPage" : "page"}
                  onClick={() => {
                    onPageChanged(page);
                  }}
                >
                  {page}
                </span>
              </div>
            );
          })}

          <div
            className="status-bar-field status-bar-field__controll-btn"
            onClick={() =>
              rightBorder + portionSize <= elems[elems.length - 1]
                ? setLeftBorder(leftBorder + portionSize)
                : setLeftBorder(elems[elems.length - 1])
            }
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
