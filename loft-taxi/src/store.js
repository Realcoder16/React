import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { authSaga, regSaga, profileSaga, routeSaga } from "./authSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(authSaga, regSaga, profileSaga, routeSaga);
