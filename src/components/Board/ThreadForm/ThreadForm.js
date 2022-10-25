import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { fetchPostThread } from "../../Redux/board-reducer";
import { Footer } from "antd/lib/layout/layout";

const ThreadForm = () => {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((state) => state.boardReducer.isFetching);

  return (
    <div>
      <button
        disabled={isFetching}
        onClick={() => {
          dispatch(
            fetchPostThread({
              threadPostingData: {
                title: "COCO",
                threadText: "COCO",
                imgs: "COCO",
              },
            })
          );
        }}
      >
        POST
      </button>
    </div>
  );
};

export default ThreadForm;
