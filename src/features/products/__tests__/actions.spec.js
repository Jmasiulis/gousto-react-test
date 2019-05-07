import * as actions from '../actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCHING_PRODUCTS_DONE when fetching products with categories has been done', () => {
    const payload = getProductData();

    fetchMock.get('*', {
      body: payload
    });

    const expectedActions = [
      { type: actions.FETCHING_PRODUCTS_DONE, payload }
    ];
    const store = mockStore();

    return store.dispatch(actions.getInitialData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SETTING_CATEGORY_DONE when category id is passed for an initial data fetch action', () => {
    const payload = getProductData();

    fetchMock.get('*', {
      body: payload
    });

    const expectedActions = [
      { type: actions.FETCHING_PRODUCTS_DONE, payload },
      { type: actions.SETTING_CATEGORY_DONE, payload: { categoryId: 'Category1' } },
    ];
    const store = mockStore();

    return store.dispatch(actions.getInitialData('Category1')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SETTING_CATEGORY_DONE when category is selected', () => {
    const expectedAction = [{
      type: actions.SETTING_CATEGORY_DONE, payload: { categoryId: 'Category1'}
    }];

    const store = mockStore();

    store.dispatch(actions.selectCategory('Category1'));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('creates SETTING_PRODUCT_DONE when product is selected', () => {
    const expectedAction = [{
      type: actions.SETTING_PRODUCT_DONE, payload: { productId: 'Product1'}
    }];

    const store = mockStore();

    store.dispatch(actions.selectProduct('Product1'));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('creates SEARCHING_PRODUCTS_DONE when search value is entered', () => {
    const expectedAction = [{
      type: actions.SEARCHING_PRODUCTS_DONE, payload: { searchValue: 'Product 1 Title'}
    }];

    const store = mockStore();

    store.dispatch(actions.searchProducts('Product 1 Title'));
    expect(store.getActions()).toEqual(expectedAction);
  });
})

function getProductData() {
  return { 
    data: [
      {
        id: 'Product1',
        title: 'Product 1 title',
        description: 'Product 1 description',
        categories: [{
          id: 'Category1',
          hidden: false,
          title: 'Category 1 title'
        }]
      },
      {
        id: 'Product2',
        title: 'Product 2 title',
        description: 'Product 2 description',
        categories: [{
          id: 'Category2',
          hidden: false,
          title: 'Category 2 title'
        }]
      },
    ] 
  };
}