import * as types from "../types/categories";

const initialState = {
  isCategoriesLoading: false,
  isError: false,

  categories: [
    // {
    //   id: "category1",
    //   slug: "all",
    //   label: "All",
    //   words: [
    //     { value: "", weight: 5 },
    //     { value: "", weight: 1 },
    //     { value: "", weight: 2 },
    //   ],
    // },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Fetch categories */
    case types.REQUESTED_CATEGORIES: {
      return {
        ...state,
        isCategoriesLoading: true,
      };
    }
    case types.REQUESTED_CATEGORIES_SUCCEEDED: {
      return {
        ...state,
        categories: action.payload.categories,
        isCategoriesLoading: false,
      };
    }
    case types.REQUESTED_CATEGORIES_FAILED: {
      return {
        ...state,
        isError: true,
        isCategoriesLoading: false,
      };
    }

    case types.CLEAR_CATEGORIES: {
      return {
        ...state,
        categories: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
