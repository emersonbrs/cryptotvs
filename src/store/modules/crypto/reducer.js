import produce from 'immer';

export default function crypto(state = [], action) {
  switch (action.type) {
    case '@crypto/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push({
          ...action.crypto,
        });
      });
    case '@crypto/REMOVE':
      return produce(state, draft => {
        const cryptoIndex = draft.findIndex(p => p.symbol === action.symbol);
        draft.splice(cryptoIndex, 1);
      });
    default:
      return state;
  }
}
