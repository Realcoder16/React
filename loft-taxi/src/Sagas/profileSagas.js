import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api";
import { SAVE_IT, GET_PROFILE, fillProfile } from "../action";

export function* handleSaveProfile(action) {
  const response = yield call(api.saveProfile, action.payload);

  if (response.success) {
    yield put(fillProfile(action.payload));
  }
}

export function* handleGetProfile(action) {
  const { id, ...profile } = yield call(api.getProfile, action.payload);

  yield put(fillProfile(profile));
}

export function* profileSaga() {
  yield takeLatest(SAVE_IT, handleSaveProfile);
  yield takeLatest(GET_PROFILE, handleGetProfile);
}
