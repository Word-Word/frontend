import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga"
import { takeLatest } from "redux-saga/effects"
import { emailCheckRequest, test, loginRequest } from "../lib/api/auth"
const CHANGE_FIELD = "auth/CHANGE_FIELD"
const INITIALIZE_TYPE = "auth/INITIALIZE_TYPE"

const EMAIL_CHECK = "auth/EMAIL_CHECK"

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes("auth/SIGNUP")
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes("auth/LOGIN")

export const initialState = {
  create: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    email: "",
    password: "",
  },
  auth: null,
  authError: null,
  email_check: null,
}
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form, // create / login
  key, // username, password, passwordConfirm
  value, // 실제값
}))
export const initializeType = createAction(INITIALIZE_TYPE, (form) => form)
export const signUp = createAction(SIGNUP, ({ email, password, passwordConfirm }) => {
  console.log(`signUp  action ㅎㅇㅎㅇ`)

  return {
    email,
    password,
    passwordConfirm,
  }
})
export const login = createAction(LOGIN, ({ email, password }) => {
  console.log(`login  action ㅎㅇㅎㅇ`, email, password)

  return {
    email,
    password,
  }
})
export const emailCheck = createAction(EMAIL_CHECK, emailCheckRequest)

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
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value
      }),
    [INITIALIZE_TYPE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [EMAIL_CHECK]: (state, { payload: code }) => {
      console.log(`EMAIL_CHECK`)
      return {
        ...state,
        email_check: code,
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
