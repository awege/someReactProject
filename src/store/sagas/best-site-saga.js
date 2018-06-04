import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../constants';

function* setAccount(action) {
  const { payload } = action;
  const { text } = payload;
  yield put({
    type: actionTypes.SET_ACCOUNT_IDTEXT,
    payload: { accountIdText: text },
  });
}

export default function* bestSiteSaga() {
  yield takeEvery(actionTypes.INIT_ACCOUNT_ID, setAccount);
}
