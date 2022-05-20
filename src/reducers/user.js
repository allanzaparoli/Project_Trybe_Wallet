// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

export default function customerReducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'EMAIL':
    return { ...state, email: payload };
  default:
    return state;
  }
}
