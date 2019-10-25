import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga"
import { takeLatest } from "redux-saga/effects"
import { test } from "../lib/api/auth"
const CHANGE_FIELD = "auth/CHANGE_FIELD"
const INITIALIZE_TYPE = "auth/INITIALIZE_TYPE"

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes("auth/SIGNUP")
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes("auth/LOGIN")

export const initialState = {
  signUp: {
    email: "",
    password: "",
  },
  login: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
  auth: null,
  authError: null,
}
export const changeField = createAction(CHANGE_FIELD, ({ type, key, value }) => ({
  type, // account / login
  key, // username, password, passwordConfirm
  value, // 실제값
}))
export const initializeType = createAction(INITIALIZE_TYPE, (type) => type)
export const signUp = createAction(SIGNUP, ({ email, password, passwordConfirm }) => {
  console.log(`signUp  action ㅎㅇㅎㅇ`)

  return {
    email,
    password,
    passwordConfirm,
  }
})
export const login = createAction(LOGIN, ({ email, password }) => {
  console.log(`login  action ㅎㅇㅎㅇ`)

  return {
    email,
    password,
  }
})

// create saga
const signUpSaga = createRequestSaga(SIGNUP, test)
const loginSaga = createRequestSaga(LOGIN, test)

export function* authSaga() {
  console.log(`auth saga`)

  yield takeLatest(SIGNUP, signUpSaga)
  yield takeLatest(LOGIN, loginSaga)
}

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { type, key, value } }) => {
      console.log(`CHANGE_FIELD `, payload)
      produce(state, (draft) => {
        draft[type][key] = value //state.account.email = `김대현@구그리.com`
      })
    },
    [INITIALIZE_TYPE]: (state, { payload: { type } }) => {
      console.log(`type ready`)

      return {
        ...state,
        [type]: initialState[type],
      }
    },
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => {
      console.log(`SIGNUP_SUCCESS`)

      return {
        ...state,
        authError: null,
        auth,
      }
    },
    [SIGNUP_FAILURE]: (state, { payload: error }) => {
      console.log(`SIGNUP_FAILURE`)
      return {
        ...state,
        authError: error,
      }
    },
    [LOGIN_SUCCESS]: (state, { payload: auth }) => {
      console.log(`LOGIN_SUCCESS`)

      return {
        ...state,
        authError: null,
        auth,
      }
    },
    [LOGIN_FAILURE]: (state, { payload: error }) => {
      console.log(`LOGIN_FAILURE`)
      return {
        ...state,
        authError: error,
      }
    },
  },
  initialState,
)
export default auth
