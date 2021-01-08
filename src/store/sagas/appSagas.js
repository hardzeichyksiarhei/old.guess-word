import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/app'
import * as actions from '../actions/app'

const asyncWords = async () => {
  return null
}

export function* fetchWords() {
  // try {
  //   yield put(actions.requestedUser())
  //   const user = yield call(asyncWords)
  //   yield put(actions.requestedUserSuccess(user))
  // } catch (error) {
  //   yield put(actions.requestedUserError())
  // }
}

export default function* watchAuth() {
  yield takeEvery(types.FETCH_WORDS, fetchWords)
}