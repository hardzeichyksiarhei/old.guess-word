import * as types from "../types/game";

import { generateWordsByCategory } from "../../helpers";

const initialState = {
  player: null,
  category: null,
  words: [],
  word: {},

  step: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Set player */
    case types.SET_PLAYER: {
      return {
        ...state,
        player: action.payload.player,
      };
    }

    /* Update player */
    case types.UPDATE_PLAYER: {
      return {
        ...state,
        player: {
          ...state.player,
          ...action.payload.player,
        },
      };
    }

    /* Set category */
    case types.SET_CATEGORY: {
      return {
        ...state,
        category: action.payload.category,
      };
    }

    /* Set words */
    case types.SET_WORDS: {
      return {
        ...state,
        words: generateWordsByCategory(state.category),
      };
    }

    /* Set word */
    case types.SET_WORD: {
      return {
        ...state,
        word: action.payload.word,
      };
    }

    /* Next Step */
    case types.NEXT_STEP: {
      return {
        ...state,
        step: state.step + 1,
      };
    }

    default:
      return state;
  }
};

export default reducer;
