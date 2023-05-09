import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import { useEffect } from "react";
import {
  fullscreenWindow,
  minimizeWindow,
  toFrontWindow,
} from "../Redux/windows-reducer";
import BottomResizer from "./resizers/BottomResizer";
import LeftResizer from "./resizers/LeftResizer";
import TopResizer from "./resizers/TopResizer";
import RightResizer from "./resizers/RightResizer";
import RightBottomResizer from "./resizers/RightBottomResizer";
import RightTopResizer from "./resizers/RightTopResizer";
import LeftTopResizer from "./resizers/LeftTopResizer";
import LeftBottomResizer from "./resizers/LeftBottomResizer";
import { Typography } from "antd";
import "./Window.css";
import IconUni from "../Icons/IconUni";

const Window = ({
  children,
  colorVariant,
  color = "#eb564d",
  header = "Окно",
  width,
  height,
  bodyClass,
  bodyStyle,
  parentId,
  cursorResize,
  expanded,
  closeAction,
  refToWinBody,
  windowId,
}) => {
  const dispatch = useAppDispatch();

  const expandedWindows = useAppSelector(
    (state) => state.windowsReducer.expandedWindows
  );
  const windowsOptions = useAppSelector(
    (state) => state.windowsReducer.windowsOptions
  );

  useEffect(() => {
    console.log("windwoa dsa", windowsOptions);
  }, [windowsOptions]);

  const window =
    expandedWindows && expandedWindows.find((window) => window.id === windowId);

  const windowZIndex = expandedWindows.findIndex(
    (window) => window.id === windowId
  );

  const windowOptions =
    windowsOptions &&
    windowsOptions.find((window) => window.id === windowId)?.options;

  const [winWidth, setWinWidth] = useState(windowOptions?.width || width);
  const [winHeight, setWinHeight] = useState(windowOptions?.height || height);
  const [winLeft, setWinLeft] = useState(windowOptions?.left || 50);
  const [winTop, setWinTop] = useState(windowOptions?.top || 50);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseUp, setMouseUp] = useState(0);
  const [winTopBefore, setWinTopBefore] = useState(50);
  const [winHeightBefore, setWinHeightBefore] = useState(height);
  const [winLeftBefore, setWinLeftBefore] = useState(300);
  const [winWidthBefore, setWinWidthBefore] = useState(width);
  const [mouseUpFirst, setMouseUpFirst] = useState(true);
  const [mouseDownFirst, setMouseDownFirst] = useState(true);
  const [padding, setPadding] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    console.log("dasfsd", isExpanded);
  }, [isExpanded]);
  // const [mouseX0, setMouseX0] = useState({ x: 0, y: 0 })

  const [mouseShift, setMouseShift] = useState({ x: 0, y: 0 });

  const minHeight = 150;
  const minWidth = 150;

  winTop < 50 && setWinTop(50);

  const resizeTop = (winTopBefore, mouseY, winHeightBefore) => {
    // console.log("resizeTop: ", winTopBefore, mouseY, winHeightBefore);
    const newHeight = winTopBefore - mouseY + winHeightBefore;
    setWinHeight(newHeight > minHeight ? newHeight + mouseShift.y : minHeight);
    setWinTop(mouseY - mouseShift.y); //
  };
  const resizeBottom = (winTop, mouseY) => {
    const newHeight = mouseY - winTop;
    setWinHeight(newHeight > minHeight ? newHeight + mouseShift.y : minHeight);
  };
  const resizeRight = (winLeft, mouseX) => {
    const newWidth = mouseX - winLeft;
    // console.log("resizeRight: ", mouseShift.x);
    setWinWidth(newWidth > minWidth ? newWidth - mouseShift.x : minWidth);
  };
  const resizeLeft = (winLeftBefore, mouseX, winWidthBefore) => {
    // console.log("resizeLeft: ", winLeftBefore, mouseX, winWidthBefore);
    const newWidth = winLeftBefore - mouseX + winWidthBefore;
    setWinWidth(newWidth > minWidth ? newWidth - mouseShift.x : minWidth);
    setWinLeft(mouseX + mouseShift.x);
  };
  const moveWindow = (winLeftBefore, winTopBefore) => {
    setWinLeft(winLeftBefore + (mouseX - mouseShift.x));
    setWinTop(winTopBefore + (mouseY - mouseShift.y));
  };

  useEffect(() => {
    setWinTop(
      parseInt(document.documentElement.scrollTop + document.body.scrollTop) +
        50
    );

    setWinTopBefore(
      parseInt(document.documentElement.scrollTop + document.body.scrollTop) +
        50
    );
    setIsExpanded(expanded);
  }, [expanded]);

  useEffect(() => {
    windowId && dispatch(toFrontWindow({ windowId }));

    const body = document.getElementsByTagName("body");
    const parent = document.getElementsByTagName("body")[0];
    parent.addEventListener("mousemove", (e) => {
      e.preventDefault();
      const pos = getPosition(e, parent);

      setMouseX(pos.x);
      setMouseY(pos.y);
    });
    body[0].addEventListener("mouseup", (e) => {
      e.preventDefault();
      setMouseUp(true);
      setMouseUpFirst(true);
    });
  }, []);

  useEffect(() => {
    if (mouseUpFirst && winHeight !== "0") {
      setMouseUpFirst(false);
      setWinTopBefore(winTop);
      setWinLeftBefore(winLeft);
      setWinWidthBefore(winWidth);
      setWinHeightBefore(winHeight);
    }
  }, [mouseUpFirst, mouseUp, winWidth, winHeight, winTop, winLeft]);

  //   useEffect(() => {
  //     dispatch(
  //       rectWindow(windowId, {
  //         width: winWidth,
  //         height: winHeight,
  //         top: winTop,
  //         left: winLeft,
  //       })
  //     );
  //   }, [winWidth, winHeight, winTop, winLeft]);

  useEffect(() => {
    switch (mouseUp) {
      case 1:
        resizeTop(winTopBefore, mouseY, winHeightBefore);
        break;
      case 2:
        resizeTop(winTopBefore, mouseY, winHeightBefore);
        resizeRight(winLeft, mouseX);
        break;
      case 3:
        resizeRight(winLeft, mouseX);
        break;
      case 4:
        resizeRight(winLeft, mouseX);
        resizeBottom(winTop, mouseY);
        break;
      case 5:
        resizeBottom(winTop, mouseY);
        break;
      case 6:
        resizeBottom(winTop, mouseY);
        resizeLeft(winLeftBefore, mouseX, winWidthBefore);
        break;
      case 7:
        resizeLeft(winLeftBefore, mouseX, winWidthBefore);
        break;
      case 8:
        resizeLeft(winLeftBefore, mouseX, winWidthBefore);
        resizeTop(winTopBefore, mouseY, winHeightBefore);
        break;
      case 9:
        moveWindow(winLeftBefore, winTopBefore);
        break;

      default:
        break;
    }
    // dispatch(
    //   refreshWindow(windowId, window?.props, {
    //     winWidth: fullScreenState.width || winWidth,
    //     winHeight: fullScreenState.height || winHeight,
    //     winTop: fullScreenState.top || winTop,
    //     winLeft: fullScreenState.left || winLeft,
    //   })
    // );
  }, [
    mouseUp,
    mouseX,
    mouseY,
    winWidth,
    winHeight,
    winWidthBefore,
    winHeightBefore,
    winTop,
    winLeft,
    winTopBefore,
    winLeftBefore,
  ]);

  const bgcolor = (() => {
    switch (colorVariant) {
      case "purple":
        return "#d246bc";
      case "yellow":
        return "#F3EDAD";

      default:
        return color;
    }
  })();

  return (
    <div
      draggable={false}
      // onClick={() => {
      //   windowId && console.log("zIndex clickOnWindow", windowId);
      //   windowId && dispatch(toFrontWindow(windowId));
      // }}
      onMouseDown={() => {
        // windowId && console.log("zIndex mouseDownWindow", windowId);
        windowId && dispatch(toFrontWindow({ windowId }));
      }}
      className={
        "window__wrapper " + (windowOptions?.minimized ? "window__hidden" : "")
        // "window__wrapper "
      }
      key={windowId}
      style={{
        width: (windowOptions?.fullscreen && "100%") || winWidth + "px" || "",
        height: (windowOptions?.fullscreen && "100%") || winHeight + "px" || "",
        left: (windowOptions?.fullscreen && "0") || winLeft + "px" || "",
        top: (windowOptions?.fullscreen && "0") || winTop + "px" || "",
        backgroundColor: bgcolor,
        cursor: cursorResize ? "ew-resize" : "",
        zIndex: 1100 + windowZIndex,
        // overflow: "hidden",
        padding: padding,
        position: windowOptions?.fullscreen ? "absolute" : "",
      }}
    >
      <div
        className="window__dark-layer"
        style={
          windowZIndex !== expandedWindows.length - 1
            ? { backgroundColor: "#00000024" }
            : {}
        }
      ></div>
      {!windowOptions?.fullscreen && (
        <>
          <TopResizer
            setMouseShift={setMouseShift}
            mouseDownFirst={mouseDownFirst}
            setMouseDownFirst={setMouseDownFirst}
            setWinHeightBefore={setWinHeightBefore}
            setWinHeight={setWinHeight}
            setMouseUp={setMouseUp}
            color={bgcolor}
          />
          <LeftResizer
            setMouseShift={setMouseShift}
            mouseDownFirst={mouseDownFirst}
            setMouseDownFirst={setMouseDownFirst}
            setWinWidthBefore={setWinWidthBefore}
            setWinWidth={setWinWidth}
            setMouseUp={setMouseUp}
            color={bgcolor}
          />
          <BottomResizer
            setMouseUp={setMouseUp}
            setMouseShift={setMouseShift}
            color={bgcolor}
          />
          <RightResizer
            setMouseUp={setMouseUp}
            setMouseShift={setMouseShift}
            color={bgcolor}
          />
          <RightBottomResizer
            setMouseUp={setMouseUp}
            setMouseShift={setMouseShift}
            color={bgcolor}
          />
          <RightTopResizer
            setMouseUp={setMouseUp}
            setMouseShift={setMouseShift}
            color={bgcolor}
          />
          <LeftTopResizer
            setMouseUp={setMouseUp}
            setMouseShift={setMouseShift}
            color={bgcolor}
          />
          <LeftBottomResizer
            setMouseUp={setMouseUp}
            setMouseShift={setMouseShift}
            color={bgcolor}
          />
        </>
      )}

      <div
        className="window__header"
        draggable={false}
        onDoubleClick={() => {
          fullscreenWindow({ windowId });
        }}
        onMouseDown={(e) => {
          console.log("Start move!", parentId);
          setWinTopBefore(winTop);
          setWinLeftBefore(winLeft);
          const parent = document.getElementsByTagName("body")[0];
          const coord = getPosition(e, parent);
          e.preventDefault();
          setMouseShift(coord);
          setMouseUp(9);
        }}
      >
        <Typography
          component="span"
          variant="inherit"
          className="window__info-line"
          noWrap
        >
          {header || window?.props?.header || "Окно"}
        </Typography>
        <div className="window__toolbar" draggable={false}>
          <IconUni
            width={22}
            variant="minimize"
            onClick={() => {
              dispatch(minimizeWindow({ windowId }));
            }}
          />
          <IconUni
            width={22}
            variant={windowOptions?.fullscreen ? "windowScreen" : "fullScreen"}
            onClick={() => {
              dispatch(fullscreenWindow({ windowId }));
            }}
          />
          <IconUni
            width={22}
            variant="close"
            onClick={() => {
              closeAction && closeAction();
            }}
          />
        </div>
      </div>
      <div
        className={"window__body " + (bodyClass || "")}
        style={bodyStyle}
        draggable={false}
        ref={refToWinBody}
      >
        {/* {mouseX +
            " " +
            mouseY +
            " " +
            mouseUp +
            " " +
            mouseShift.x +
            " " +
            mouseShift.y +
            " " +
            winLeftBefore +
            " " +
            (mouseX - mouseShift.x) +
            " "} */}
        {children}
      </div>
    </div>
  );
};

export default Window;

function getPosition(e, elem) {
  let x = 0;
  let y = 0;

  if (!elem) {
    return { x, y };
  }

  const coords = elem.getBoundingClientRect();
  if (!e) {
    var e = window.event;
  }
  if (e.pageX || e.pageY) {
    x = e.pageX - coords.left;
    y = e.pageY - coords.top;
  } else if (e.clientX || e.clientY) {
    x =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft -
      coords.left;
    y =
      e.clientY +
      document.body.scrollTop +
      document.documentElement.scrollTop -
      coords.top;
  }
  return { x: x, y: y };
}
