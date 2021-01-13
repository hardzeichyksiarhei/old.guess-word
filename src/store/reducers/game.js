import * as types from "../types/game";

import { generateWordsByCategory } from "../../helpers";

const initialState = {
  user: null,
  category: null,
  words: [],
  word: {},
  letter: "",

  step: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Set user */
    case types.SET_USER: {
      return {
        ...state,
        user: action.payload.user,
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
