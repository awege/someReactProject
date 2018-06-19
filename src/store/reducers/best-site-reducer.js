import { actionTypes } from '../constants';

const initialState = {
  accountId: ['Anonymous',''],
  wikiRes: [],
  wikiImage: '',
};

export default function bestSiteReducer(state = initialState, action = {}) {
  const { type, payload = {} } = action;
  switch (type) {
    case actionTypes.SET_ACCOUNT_IDTEXT: {
      const { accountId } = payload;
      return { ...state, accountId };
    }

    case actionTypes.SET_WIKI_RES: {
      const { wikiRes } = payload;
      return { ...state, wikiRes };
    }

    case actionTypes.SET_WIKI_IMAGE: {
      const { wikiImage } = payload;
      return { ...state, wikiImage };
    }

    default: return state;
  }
}
