import * as types from "../types/game";

// Game
export const setCategory = (category) => ({
  type: types.SET_CATEGORY,
  payload: { category },
});
