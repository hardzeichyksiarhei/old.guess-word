import * as types from "../types/game";

const initialState = {
  userId: null,
  category: null,
  words: [], // 5 words
  word: {}, // { value: '', weight: 5 }
  letter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Set category */
    case types.SET_CATEGORY: {
      return {
        ...state,
        category: action.payload.category,
      };
    }

    default:
      return state;
  }
};

export default reducer;
