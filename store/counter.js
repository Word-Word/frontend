import { createAction, handleActions } from "redux-actions"

const PLUS = "counter/PLUS"
const MINUS = "counter/MINUS"

export const setPlus = createAction(PLUS)
export const setMinus = createAction(MINUS)

const initialState = { num: 0 }

const counter = handleActions(
  {
    [PLUS]: (state, action) => {
      console.log(`뿌라쓰 `, action)

      return {
        num: state.num + 1,
      }
    },
    [MINUS]: (state, action) => ({
      num: state.num - 1,
    }),
  },
  initialState,
)
export default counter
