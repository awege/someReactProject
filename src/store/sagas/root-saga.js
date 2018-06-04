import { fork } from 'redux-saga/effects';
import bestSiteSaga from './best-site-saga.js';

function* rootSaga() {
  yield fork(bestSiteSaga);
}

export default rootSaga;
