import { put, takeEvery, call } from "redux-saga/effects";

import * as types from "../types/categories";
import * as actions from "../actions/categories";

import * as categoriesService from "../../services/categories";

// Menus
function* fetchCategories() {
  try {
    yield put(actions.requestedCategories());
    const categories = yield call(categoriesService.getAll);
    yield put(actions.requestedCategoriesSuccess(categories));
  } catch (error) {
    yield put(actions.requestedCategoriesError());
  }
}

export default function* watchCategories() {
  yield takeEvery(types.FETCH_CATEGORIES, fetchCategories);
}
