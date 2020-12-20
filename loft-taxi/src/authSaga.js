import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import {
  REGISTRATION,
  logIn,
  AUTHENTICATE,
  SAVE_IT,
  ROUTE,
  ADDRESS,
  fillroute,
  mapToStateProfile,
  storeAddress,
} from "./action";

export function* authenticateSaga(action) {
  debugger;
  console.log(action.payload);
  const email = action.payload.email;
  const password = action.payload.password;
  const result = yield call(api.serverLogin, email, password);

  if (result.success === true) {
    console.log(result);
    yield put(logIn());
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
  console.log(registr);
  if (registr.success === true) {
    yield put(logIn());
  }
}

export function* regSaga() {
  yield takeLatest(REGISTRATION, registrationSaga);
}

export function* handleSaveProfile(action) {
  const { cardName, cardNumber, expireDate, cvc, token } = action.payload;

  const response = yield call(
    api.saveProfile,
    cardName,
    cardNumber,
    expireDate,
    cvc,
    token
  );
  if (response.success === true) {
    yield put(mapToStateProfile());
  }
}

export function* profileSaga() {
  yield takeLatest(SAVE_IT, handleSaveProfile);
}

export function* routeListSaga(action) {
  console.log(action.payload);
  const to = action.payload.to;
  const from = action.payload.from;
  const data = yield call(api.routeAddress, to, from);
  yield put(fillroute(data));
}

export function* routeSaga() {
  yield takeLatest(ROUTE, routeListSaga);
}

export function* addressListSaga(action) {
  const address = yield call(api.getAddress);

  yield put(storeAddress(address));
}

export function* addressSaga() {
  yield takeLatest(ADDRESS, addressListSaga);
}
