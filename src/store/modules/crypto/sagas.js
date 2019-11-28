import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addCryptoSuccess } from './actions';

function* addCrypto({ symbol }) {
  const response = yield call(api.get, `${symbol}/metrics`);

  yield put(addCryptoSuccess(response.data));
}

export default all([takeLatest('@crypto/ADD_REQUEST', addCrypto)]);
