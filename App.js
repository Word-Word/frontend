import React, { useState } from "react"
import AppContainer from "./screens/navigation"
import { AppLoading } from "expo"
import loadAll from "./config/load/loadAll" //여기서 load해주는 것에 user도 포함되어있음.

//redux
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import RootReducer, { rootSaga } from "./store"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
//console.log(store.getState())

export default function App() {
  const [isReady, setIsReady] = useState(false)

  // https://docs.expo.io/versions/latest/sdk/app-loading/
  return !isReady ? (
    <AppLoading startAsync={loadAll} onFinish={() => setIsReady(true)} onError={console.warn} />
  ) : (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
//#fff
//#9BB6E8
//#637DFC
//#636FF6
//#E0BBEC



 
// #00f260 #0575e6
// #c2e59c #64b3f4