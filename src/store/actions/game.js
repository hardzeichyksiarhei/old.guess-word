import * as types from "../types/game";

// Game
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: { user },
});

export const setCategory = (category) => ({
  type: types.SET_CATEGORY,
  payload: { category },
});

export const setWords = () => ({
  type: types.SET_WORDS,
});

export const nextStep = () => ({
  type: types.NEXT_STEP,
});
