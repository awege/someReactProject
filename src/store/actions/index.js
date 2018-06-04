import { actionTypes } from '../constants.js';

function setAccount(text) {
  return {
    type: actionTypes.INIT_ACCOUNT_ID,
    payload: { text },
  };
}

export {
  setAccount,
};
