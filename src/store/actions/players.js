import * as types from "../types/game";

// Plaayers
export const addPlayer = (player) => ({
  type: types.ADD_PLAYER,
  payload: { player },
});
