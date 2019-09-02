import React from "react";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga.config";

import { authReducer, chatReducer } from "../redux/reducers";

export const configureStore = () => {
  let preloadedState = {};
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [];

  const middleware = [sagaMiddleware];
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const rootReducer = combineReducers({
    chat: chatReducer,
    auth: authReducer
  });
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );
  const persistor = persistStore(store);
  store.runSaga = sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor
  };
};

export default configureStore;
