import { all } from 'redux-saga/effects';

import crypto from './crypto/sagas';

export default function* rootSaga() {
  return yield all([crypto]);
}
