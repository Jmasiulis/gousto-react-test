import fetch from 'cross-fetch';
const initialState = {
}

export default (state = initialState, action) => {
  const res = fetch('/products/v2.0/categories');
  switch (action.type) {
    default:
      return state
  }
}