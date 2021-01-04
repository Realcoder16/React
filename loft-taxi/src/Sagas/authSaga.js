import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api";
import { REGISTRATION, logIn, AUTHENTICATE } from "../action";

export function* authenticateSaga(action) {
  console.log(action.payload);
  const email = action.payload.email;
  const password = action.payload.password;

  const result = yield call(api.serverLogin, email, password);

  if (result.success) {
    yield put(logIn(result.token));
  }
}

export function* authSaga() {
  yield takeLatest(AUTHENTICATE, authenticateSaga);
}

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const registr = yield call(
    api.serverRegistration,
    email,
    password,
    name,
    surname
  );
  if (registr.success === true) {
    yield put(logIn());
  }
}

export function* regSaga() {
  yield takeLatest(REGISTRATION, registrationSaga);
}
