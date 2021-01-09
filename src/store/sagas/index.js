import { all } from "redux-saga/effects";
import watchCategories from "./categoriesSagas";

export default function* watchSagas() {
  yield all([watchCategories()]);
}
