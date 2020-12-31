import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import {
  REGISTRATION,
  logIn,
  AUTHENTICATE,
  SAVE_IT,
  GETROUTE,
  GETADDRESS,
  fillroute,
  mapToStateProfile,
  storeAddress,
} from "./action";

export function* authenticateSaga(action) {
  console.log(action.payload);
  const email = action.payload.email;
  const password = action.payload.password;

  const result = yield call(api.serverLogin, email, password);

  if (result.success === true) {
    console.log(result);
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
  console.log(registr);
  if (registr.success === true) {
    yield put(logIn());
  }
}

export function* regSaga() {
  yield takeLatest(REGISTRATION, registrationSaga);
}

export function* handleSaveProfile(action) {
  const response = yield call(api.saveProfile, action.payload);
  console.log(response);
  console.log(action.payload);
  if (response.success === true) {
    yield put(mapToStateProfile(action.payload));
  }
}

export function* profileSaga() {
  yield takeLatest(SAVE_IT, handleSaveProfile);
}

export function* routeListSaga(action) {
  const data = yield call(api.routeAddress, action.payload);
  yield put(fillroute(data));
}

export function* routeSaga() {
  yield takeLatest(GETROUTE, routeListSaga);
}

export function* addressListSaga() {
  const { addresses } = yield call(api.getAddress);

  yield put(storeAddress(addresses));
}

export function* addressSaga() {
  yield takeLatest(GETADDRESS, addressListSaga);
}
