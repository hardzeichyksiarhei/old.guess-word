import { v4 as uuid } from "uuid";

import * as types from "../types/players";

const initialState = {
  players: [
    {
      id: uuid(),
      name: "Player 1",
      avatar: 1,
      score: 1,
      time: 1,
      weight: 1,
    },
    {
      id: uuid(),
      name: "Player 2",
      avatar: 1,
      score: 1,
      time: 1,
      weight: 1,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Add player */
    case types.ADD_PLAYER: {
      return {
        ...state,
        players: [
          ...state.players,
          {
            ...action.payload.player,
            id: uuid(),
            score: 1,
            time: 1,
            weight: 1,
          },
        ],
      };
    }

    // Delete player
    case types.DELETE_PLAYER: {
      return {
        ...state.players,
        players: state.players.filter(
          (player) => player.id !== action.payload.playerId
        ),
      };
    }

    // Update player
    case types.UPDATE_PLAYER: {
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.playerId
            ? {
                ...player,
                ...action.payload.player,
              }
            : player
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
