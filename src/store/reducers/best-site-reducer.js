import { actionTypes } from '../constants.js';

const initialState = {
  accountIdText: 'Anonymous',
};

export default function bestSiteReducer(state=initialState, action={}) {

  const { type, payload={} } = action;

  switch (type) {


    case actionTypes.SET_ACCOUNT_IDTEXT: {
      const { accountIdText } = payload;
      return { ...state, accountIdText };
    }


    default: return state;
  }

}
