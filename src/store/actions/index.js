import { actionTypes } from '../constants';

function setAccount(text) {
  return {
    type: actionTypes.INIT_ACCOUNT_ID,
    payload: { text },
  };
}

export {
  setAccount,
};
