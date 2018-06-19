import { actionTypes } from '../constants';

function setAccount(array) {
  return {
    type: actionTypes.INIT_ACCOUNT_ID,
    payload: { array },
  };
}
function setWikiRes(array) {
  return {
    type: actionTypes.INIT_WIKI_RES,
    payload: { array },
  }
}
function setWikiImage(text) {
  return {
    type: actionTypes.INIT_WIKI_IMAGE,
    payload: { text },
  }
}

export {
  setAccount,
  setWikiRes,
  setWikiImage
};
