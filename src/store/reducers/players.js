import { v4 as uuid } from "uuid";

import * as types from "../types/game";

const initialState = {
  players: [
    // {
    //   id: 1,
    //   name: "",
    //   avatar: "",
    //   score: 1,
    //   time: 360,
    //   weight: 20,
    // },
    // {
    //   id: 2,
    //   name: "",
    //   avatar: "",
    //   score: 1,
    //   time: 360,
    //   weight: 20,
    // },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Add player */
    case types.ADD_PLAYER: {
      return {
        ...state,
        players: [
          ...state.player,
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

    default:
      return state;
  }
};

export default reducer;
