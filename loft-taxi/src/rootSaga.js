import { fork, all } from "redux-saga/effects";
import {
  authSaga,
  regSaga,
  profileSaga,
  routeSaga,
  addressSaga,
} from "./authSaga";

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(regSaga),
    fork(profileSaga),
    fork(routeSaga),
    fork(addressSaga),
  ]);
}
