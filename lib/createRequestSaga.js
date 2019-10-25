import { call, put } from "redux-saga/effects"
import { startLoading, finishLoading } from "../store/loading"

//각 요청마다 액션 타입을 3개 선언해야한다. 이것을 리팩토링하면 다음과 같다.
// const REGISTER = "auth/REGISTER"
// const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS"
// const REGISTER_FAILURE = "auth/REGISTER_FAILURE"

// const LOGIN = "auth/LOGIN"
// const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
// const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
export const createRequestActionTypes = (type) => {
  console.log(`createRequestActionTypes`, type)

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {
  console.log(`createRequestSaga`, type, request)

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE}`
  console.log(`saga call`)

  return function*(action) {
    yield put(startLoading(type)) //로딩 시작
    try {
      const response = yield call(request, action.payload)
      yield put({
        type: SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      })
    }
    yield put(finishLoading(type)) //로딩끝
  }
}
