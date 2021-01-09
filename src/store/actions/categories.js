import * as types from "../types/categories";

// Categories
export const fetchCategories = () => ({
  type: types.FETCH_CATEGORIES,
});

export const requestedCategories = () => ({
  type: types.REQUESTED_CATEGORIES,
});

export const requestedCategoriesSuccess = (categories) => ({
  type: types.REQUESTED_CATEGORIES_SUCCEEDED,
  payload: { categories },
});

export const requestedCategoriesError = () => ({
  type: types.REQUESTED_CATEGORIES_FAILED,
});

export const clearCategories = () => ({
  type: types.CLEAR_CATEGORIES,
});
