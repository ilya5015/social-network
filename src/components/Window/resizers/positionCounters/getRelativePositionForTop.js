export const getRelativePositionForTop = (e, selector) => {
  if (e.target.closest(selector)) {
    var target = e.target.closest(selector); // Здесь что-то уникальное, что может указать на род. блок
    var windowWrapper = e.target.closest(".window__wrapper");

    var windowWrapperCoords = windowWrapper.getBoundingClientRect();
    var targetCoords = target.getBoundingClientRect();

    var xCoord = e.clientX - targetCoords.left;
    var yCoord = e.clientY - windowWrapperCoords.top;
    return { x: xCoord, y: yCoord };
  }
};
