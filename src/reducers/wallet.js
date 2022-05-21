// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
};

export default function customerReducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'CURRENCIES':
    return { ...state, currencies: payload };
  default:
    return state;
  }
}
