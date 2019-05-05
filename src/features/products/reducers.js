import update from 'immutability-helper';
import { FETCHING_PRODUCTS_DONE} from './actions';


const initialState = {
  productsByCategory: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCHING_PRODUCTS_DONE:
      return update(state, {
        productsByCategory: { $set: insertCategories(payload.data) }
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