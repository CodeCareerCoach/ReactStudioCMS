export const VIEW = {
  SET_WIDTH: "view/set_width"
};

export const setViewWidth = width => ({
  type: VIEW.SET_WIDTH,
  payload: width
});
