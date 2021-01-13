import * as types from "../types/game";

// Game
export const setPlayer = (player) => ({
  type: types.SET_PLAYER,
  payload: { player },
});

export const updatePlayer = (player) => ({
  type: types.UPDATE_PLAYER,
  payload: { player },
});

export const setCategory = (category) => ({
  type: types.SET_CATEGORY,
  payload: { category },
});

export const setWords = () => ({
  type: types.SET_WORDS,
});

export const setWord = (word) => ({
  type: types.SET_WORD,
  payload: { word },
});

export const nextStep = () => ({
  type: types.NEXT_STEP,
});
