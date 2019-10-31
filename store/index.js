import { combineReducers } from "redux"
import { all } from "redux-saga/effects"
import counter from "./counter"
import auth, { authSaga } from "./auth"
import loading from "./loading"
import user, { userSaga } from "./user"

const rootReducer = combineReducers({
  counter,
  auth,
  loading,
  user,
})

export function* rootSaga() {
  console.log(`rootSaga`)
  yield all([authSaga(), userSaga()])
}

export default rootReducer
