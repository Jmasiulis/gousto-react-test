import fetch from 'cross-fetch';

export const FETCHING_PRODUCTS_DONE = 'FETCHING_PRODUCTS_DONE';

export function getInitialData() {
  return async (dispatch) => {
    const products = await fetch('/products/v2.0/products?includes[]=categories&image_sizes[]=365')
    if (products.status >= 400) {
      throw new Error("Bad response from server");
    }

    dispatch({
      type: FETCHING_PRODUCTS_DONE,
      payload: await products.json()
    });
  }
}
