import { combineReducers } from "redux"
import { all } from "redux-saga/effects"
import counter from "./counter"
import auth, { authSaga } from "./auth"
import loading from "./loading"

const rootReducer = combineReducers({
  counter,
  auth,
  loading,
})

export function* rootSaga() {
  console.log(`rootSaga`)
  yield all([authSaga()])
}

export default rootReducer
