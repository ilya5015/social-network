import minimize from "../../media/icons/minimize.svg";
import fullscreen from "../../media/icons/fullscreen.svg";
import close from "../../media/icons/close.svg";
import minus from "../../media/icons/minus.svg";

const IconUni = ({
  variant = "remove",
  onClick,
  width = 20,
  height = width,
  style,
  className,
}) => {
  const src = (() => {
    switch (variant) {
      case "showMore":
        return "showMore";
      case "showLess":
        return "showLess";
      case "find":
        return "find";

      case "close":
        return close;
      case "minimize":
        return minus;
      case "windowScreen":
        return minimize;
      case "fullScreen":
        return fullscreen;

      default:
        return "remove";
    }
  })();

  return (
    <img
      src={src}
      onClick={(e) => {
        // console.log("CLICKED ICONS!!!");
        e.stopPropagation();
        onClick && onClick(e);
      }}
      className={"icon-uni " + (className || "")}
      style={{
        ...style,
        width: (width || "") + "px",
        height: (height || "") + "px",
      }}
    />
  );
};

export default IconUni;
