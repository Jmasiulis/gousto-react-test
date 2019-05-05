import update from 'immutability-helper';
import { FETCHING_PRODUCTS_DONE, SETTING_CATEGORY_DONE, SETTING_PRODUCT_DONE } from './actions';


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
      return update(state, {
        selectedCategoryId: { $set: payload.categoryId },
        selectedProductIds: { $set: [] },
        shownProducts:{
          $set: state.productsByCategory[payload.categoryId] && state.productsByCategory[payload.categoryId].products
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