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

export const updatePlayer = (playerId, player) => ({
  type: types.UPDATE_PLAYER,
  payload: { playerId, player },
});
