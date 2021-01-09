import { v4 as uuid } from "uuid";

import * as types from "../types/players";

const initialState = {
  players: [
    {
      id: uuid(),
      name: "Player 1",
      avatar: "https://via.placeholder.com/150",
      score: 1,
      time: 1,
      weight: 1,
    },
    {
      id: uuid(),
      name: "Player 2",
      avatar: "https://via.placeholder.com/150",
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
        ...state,
        players: state.players.filter(
          (player) => player.id !== action.payload.playerId
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
