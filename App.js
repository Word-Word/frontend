import React, { useState } from "react"
import AppContainer from "./screens/navigation"
import { AppLoading } from "expo"
import loadAssets from "./config/load/LoadAssets"

//redux
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import RootReducer, { rootSaga } from "./store"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default function App() {
  const [isReady, setIsReady] = useState(false)

  // https://docs.expo.io/versions/latest/sdk/app-loading/
  return !isReady ? (
    <AppLoading startAsync={loadAssets} onFinish={() => setIsReady(true)} onError={console.warn} />
  ) : (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
