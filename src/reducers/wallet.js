// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};
export default function customerReducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'CURRENCIES':
    return { ...state, currencies: payload };
  case 'EXPENSE':
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
}
