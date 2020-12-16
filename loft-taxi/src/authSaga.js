import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import {
  registration,
  logIn,
  authenticate,
  saveProfile,
  route,
  addressList,
} from "./action";
import auth from "./reducers/auth";

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
  yield takeLatest(authenticate, authenticateSaga);
}

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const result = yield call(
    api.serverRegistration,
    email,
    password,
    name,
    surname
  );
  console.log(result);
  if (result.success === true) {
    yield put(logIn());
  }
}

export function* regSaga() {
  yield takeLatest(registration, registrationSaga);
}

export function* handleSaveProfile(action) {
  try {
    const response = yield call(api.saveProfile, action.payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* profileSaga() {
  yield takeLatest(saveProfile, handleSaveProfile);
}

export function* routeListSaga(action) {
  console.log(action.payload);
  const address1 = action.payload.address1;
  const address2 = action.payload.address2;
  const result = yield call(api.routeAddress, address1, address2);

  if (result.success === true) {
    console.log(result);
  }
}

export function* routeSaga() {
  yield takeLatest(route, routeListSaga);
}

export function* addressListSaga(action) {
  const result = yield call(api.getAddress);

  if (result.success === true) {
    console.log(result);
  }
}

export function* addressSaga() {
  yield takeLatest(addressList, addressListSaga);
}
