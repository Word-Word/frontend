import { createAction, handleActions } from "redux-actions"
import { takeLatest } from "redux-saga/effects"
import * as authAPI from "../lib/api/auth"
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga"

// 새로고침 이후 임시 로그인 처리
const TEMP_SET_USER = "user/TEMP_SET_USER"
// 회원정보확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes("user/CHECK")

const check = createAction(CHECK)

//export const utem
const initialState = {
  user: null,
  checkError: null,
}
export const checkSaga = createRequestSaga(CHECK, authAPI.check)
export function* userSaga() {
  // user에 대한 정보도 saga를 통해서 가져와야하기 때문에 saga를 거친다.
  yield takeLatest(CHECK, checkSaga)
}

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkError: error,
      user: null,
    }),
  },
  initialState,
)

export default user
