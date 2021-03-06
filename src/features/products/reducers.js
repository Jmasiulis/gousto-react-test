import update from 'immutability-helper';
import {
  FETCHING_PRODUCTS_DONE,
  SETTING_CATEGORY_DONE,
  SETTING_PRODUCT_DONE,
  SEARCHING_PRODUCTS_DONE
} from './actions';


const initialState = {
  productsByCategory: null,
  selectedCategoryId: null,
  selectedProductIds: [],
  shownProducts: null
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCHING_PRODUCTS_DONE:
      return update(state, {
        productsByCategory: { $set: insertCategories(payload.data) }
      });

    case SETTING_CATEGORY_DONE:
      if (!state.productsByCategory[payload.categoryId]) {
        return state;
      }

      return update(state, {
        selectedCategoryId: { $set: payload.categoryId },
        selectedProductIds: { $set: [] },
        shownProducts:{
          $set: state.productsByCategory[payload.categoryId].products
        }
      });

    case SETTING_PRODUCT_DONE:
      const productIndex = getProductIndexInSelectedProducts(state.selectedProductIds, payload.productId);

      return update(state, {
        selectedProductIds:
          productIndex !== -1 ?
          { $splice: [[productIndex, 1]] } :
          { $push: [payload.productId] }
      });

    case SEARCHING_PRODUCTS_DONE:
      if (!state.productsByCategory[state.selectedCategoryId]) {
        return state;
      }

      return update(state, {
        shownProducts:{
          $set: payload.searchValue ?
            searchProducts(
              state.productsByCategory[state.selectedCategoryId].products,
              payload.searchValue.toLowerCase()
            ) :
            state.productsByCategory[state.selectedCategoryId].products
        }
      });

    default:
      return state;
  }
}

function insertCategories(payload) {
  return payload.reduce((categories, value) => {
    value.categories.forEach((item) => {
      if (!item.hidden) {
        if (!categories[item.id]) {
          categories[item.id] = { id: item.id, title: item.title, products: []};
        }

        categories[item.id].products.push({ id: value.id, title: value.title, description: value.description });
      }
    });

    return categories;
  }, {});
}

function getProductIndexInSelectedProducts(selectedProductIds, productId) {
  return selectedProductIds.indexOf(productId);
}

function searchProducts(shownProducts, searchValue) {
  return shownProducts.reduce((acc, item) => {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    if (title.includes(searchValue) || description.includes(searchValue)) {
      acc.push(item);
    }

    return acc;
  }, [])
}