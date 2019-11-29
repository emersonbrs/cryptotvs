import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addCryptoSuccess, loadCryptoSuccess } from './actions';

function* addCrypto({ symbol }) {
  const response = yield call(api.get, `${symbol}/metrics`);
  yield put(addCryptoSuccess(response.data));
}

function* loadCrypto() {
  const response = yield call(api.get, `btc/metrics`);
  yield put(loadCryptoSuccess(response.data));
}

export default all([
  takeLatest('@crypto/ADD_REQUEST', addCrypto),
  takeLatest('@crypto/LOAD_REQUEST', loadCrypto),
]);
