import * as types from "../types/players";

// Plaayers
export const addPlayer = (player) => ({
  type: types.ADD_PLAYER,
  payload: { player },
});

export const deletePlayer = (playerId) => ({
  type: types.DELETE_PLAYER,
  payload: { playerId },
});
