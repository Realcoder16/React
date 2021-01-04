import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api";
import { GET_ROUTE, GET_ADDRESS, fillroute, storeAddress } from "../action";

export function* routeListSaga(action) {
  const data = yield call(api.routeAddress, action.payload);
  yield put(fillroute(data));
}

export function* routeSaga() {
  yield takeLatest(GET_ROUTE, routeListSaga);
}

export function* addressListSaga() {
  const { addresses } = yield call(api.getAddress);

  yield put(storeAddress(addresses));
}

export function* addressSaga() {
  yield takeLatest(GET_ADDRESS, addressListSaga);
}
