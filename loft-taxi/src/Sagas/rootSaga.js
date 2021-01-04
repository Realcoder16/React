import { fork, all } from "redux-saga/effects";
import { authSaga, regSaga } from "./authSaga";

import { profileSaga } from "./profileSagas";

import { routeSaga, addressSaga } from "./mapSagas";

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(regSaga),
    fork(profileSaga),
    fork(routeSaga),
    fork(addressSaga),
  ]);
}
