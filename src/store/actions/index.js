import { actionTypes } from '../constants';

function setAccount(text) {
  return {
    type: actionTypes.INIT_ACCOUNT_ID,
    payload: { text },
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
