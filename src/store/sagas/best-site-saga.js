import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../constants';

function* setAccount(action) {
  const { payload } = action;
  const { array } = payload;
  yield put({
    type: actionTypes.SET_ACCOUNT_IDTEXT,
    payload: { accountId: array },
  });
}

function* setWikiRes(action) {
  const { payload } = action;
  const { array } = payload;
  yield put({
    type: actionTypes.SET_WIKI_RES,
    payload: { wikiRes: array },
  })
}

function* setWikiImage(action) {
  const { payload } = action;
  const { text } = payload;
  yield put({
    type: actionTypes.SET_WIKI_IMAGE,
    payload: { wikiImage: text },
  });
}

export default function* bestSiteSaga() {
  yield takeEvery(actionTypes.INIT_ACCOUNT_ID, setAccount);
  yield takeEvery(actionTypes.INIT_WIKI_RES, setWikiRes);
  yield takeEvery(actionTypes.INIT_WIKI_IMAGE, setWikiImage)
}
