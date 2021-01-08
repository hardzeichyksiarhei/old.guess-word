import { all } from 'redux-saga/effects'
import watchApp from './appSagas'

export default function* watchSagas() {
  yield all([watchApp()])
}