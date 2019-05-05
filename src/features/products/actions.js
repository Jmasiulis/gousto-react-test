import fetch from 'cross-fetch';

const BAD_RESPONSE = 'Bad response from server';
const PRODUCTS_API_URL = '/products/v2.0/products?includes[]=categories&image_sizes[]=365';

export const FETCHING_PRODUCTS_DONE = 'FETCHING_PRODUCTS_DONE';
export const SETTING_CATEGORY_DONE = 'SETTING_CATEGORY_DONE';
export const SETTING_PRODUCT_DONE = 'SETTING_PRODUCT_DONE';
export const SEARCHING_PRODUCTS_DONE = 'SEARCHING_PRODUCTS_DONE';

export function getInitialData() {
  return async (dispatch) => {
    const products = await fetch(PRODUCTS_API_URL)
    if (products.status >= 400) {
      throw new Error(BAD_RESPONSE);
    }

    dispatch({
      type: FETCHING_PRODUCTS_DONE,
      payload: await products.json()
    });
  }
}

export function selectCategory(categoryId) {
  return (dispatch) => {
    dispatch({
      type: SETTING_CATEGORY_DONE,
      payload: { categoryId }
    });
  }
}

export function selectProduct(productId) {
  return (dispatch) => {
    dispatch({
      type: SETTING_PRODUCT_DONE,
      payload: { productId }
    });
  }
}

export function searchProducts(searchValue) {
  return (dispatch) => {
    dispatch({
      type: SEARCHING_PRODUCTS_DONE,
      payload: { searchValue }
    });
  }
}
