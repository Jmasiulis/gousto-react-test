import reducer from '../reducers'
import * as actions from '../actions'

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      getInitialState()
    );
  })

  it('should handle FETCHING_PRODUCTS_DONE when products are fetched and remove hidden categories with products', () => {
    const payload = getProductData();

    const expectedResult = {
      productsByCategory: {
        Category1: {
          id: 'Category1',
          products: [
            {
              description: 'Product 1 description',
              id: 'Product1',
              title: 'Product 1 Title'
            },
            {
              id: 'Product3',
              title: 'Product 3 Title',
              description: 'Product 3 description'
            }
          ],
          title: 'Category 1 description'
        }, 
        Category2: {
          id: 'Category2',
          products: [{
            description: 'Product 2 description',
            id: 'Product2',
            title: 'Product 2 Title'
          }],
          title: 'Category 2 description'
        }
      },
      selectedCategoryId: null,
      selectedProductIds: [],
      shownProducts: null
    };
    
    expect(
      reducer(getInitialState(), {
        type: actions.FETCHING_PRODUCTS_DONE,
        payload
      })
    ).toEqual(
      expectedResult
    );
  })

  it('should handle SETTING_CATEGORY_DONE when category is selected', () => {
    const expectedResult = {
      productsByCategory: {
        Category1: {
          id: 'Category1',
          products: [
            {
              description: 'Product 1 description',
              id: 'Product1',
              title: 'Product 1 Title'
            },
            {
              id: 'Product3',
              title: 'Product 3 Title',
              description: 'Product 3 description'
            }
          ],
          title: 'Category 1 description'
        },
        Category2: {
          id: 'Category2',
          products: [{
            description: 'Product 2 description',
            id: 'Product2',
            title: 'Product 2 Title'
          }],
          title: 'Category 2 description'
        }
      },
      selectedCategoryId: 'Category1',
      selectedProductIds: [],
      shownProducts: [
        {
          description: 'Product 1 description',
          id: 'Product1',
          title: 'Product 1 Title'
        },
        {
          id: 'Product3',
          title: 'Product 3 Title',
          description: 'Product 3 description'
        }
      ]
    };
    
    expect(
      reducer(getInitialStateForCategorySelection(), {
        type: actions.SETTING_CATEGORY_DONE,
        payload: {categoryId: 'Category1'}
      })
    ).toEqual(
      expectedResult
    );
  })

  it('should handle SETTING_CATEGORY_DONE when category selected doesn\'t exist', () => {
    expect(
      reducer(getInitialStateForCategorySelection(), {
        type: actions.SETTING_CATEGORY_DONE,
        payload: {categoryId: '457'}
      })
    ).toEqual(
      getInitialStateForCategorySelection()
    );
  })

  it('should handle SETTING_PRODUCT_DONE when product is selected and add new selected product', () => {
    const expectedResult = {
      productsByCategory: null,
      selectedCategoryId: null,
      selectedProductIds: ['Product1', 'Product3'],
      shownProducts: null
    }
    
    expect(
      reducer(getInitialStateForProductSelection(), {
        type: actions.SETTING_PRODUCT_DONE,
        payload: {productId: 'Product3'}
      })
    ).toEqual(
      expectedResult
    );
  })

  it('should handle SETTING_PRODUCT_DONE when product is selected and remove already selected product', () => {
    const expectedResult = {
      productsByCategory: null,
      selectedCategoryId: null,
      selectedProductIds: [],
      shownProducts: null
    }
    
    expect(
      reducer(getInitialStateForProductSelection(), {
        type: actions.SETTING_PRODUCT_DONE,
        payload: {productId: 'Product1'}
      })
    ).toEqual(
      expectedResult
    );
  })

  it('should handle SEARCHING_PRODUCTS_DONE and return only products with title matching search criteria', () => {
    const expectedResult = getExpectedResultForSearch();
    
    expect(
      reducer(getInitialStateForSearch(), {
        type: actions.SEARCHING_PRODUCTS_DONE,
        payload: {searchValue: 'Product 1 Title'}
      })
    ).toEqual(
      expectedResult
    );
  })

  it('should handle SEARCHING_PRODUCTS_DONE and return only products with description matching search criteria', () => {
    const expectedResult = getExpectedResultForSearch();
    
    expect(
      reducer(getInitialStateForSearch(), {
        type: actions.SEARCHING_PRODUCTS_DONE,
        payload: {searchValue: 'Product 1 description'}
      })
    ).toEqual(
      expectedResult
    );
  })

  it('should handle SEARCHING_PRODUCTS_DONE and return only products with description matching search criteria case insensitive', () => {
    const expectedResult = getExpectedResultForSearch();
    
    expect(
      reducer(getInitialStateForSearch(), {
        type: actions.SEARCHING_PRODUCTS_DONE,
        payload: {searchValue: 'ProDUct 1 descripTIon'}
      })
    ).toEqual(
      expectedResult
    );
  })
})

function getProductData() {
  return { 
    data: [
      {
        id: 'Product1',
        title: 'Product 1 Title',
        description: 'Product 1 description',
        categories: [{
          id: 'Category1',
          hidden: false,
          title: 'Category 1 description'
        }]
      },
      {
        id: 'Product2',
        title: 'Product 2 Title',
        description: 'Product 2 description',
        categories: [{
          id: 'Category2',
          hidden: false,
          title: 'Category 2 description'
        }]
      },
      {
        id: 'Product3',
        title: 'Product 3 Title',
        description: 'Product 3 description',
        categories: [
          {
            id: 'Category3',
            hidden: true,
            title: 'Category 3 description'
          },
          {
            id: 'Category1',
            hidden: false,
            title: 'Category 1 description'
          }
        ]
      },
    ] 
  };
}

function getInitialState() {
  return {
    productsByCategory: null,
    selectedCategoryId: null,
    selectedProductIds: [],
    shownProducts: null
  };
}

function getInitialStateForProductSelection() {
  return {
    productsByCategory: null,
    selectedCategoryId: null,
    selectedProductIds: ['Product1'],
    shownProducts: null
  };
}

function getInitialStateForCategorySelection() {
  return {
    productsByCategory: {
      Category1: {
        id: 'Category1',
        products: [
          {
            description: 'Product 1 description',
            id: 'Product1',
            title: 'Product 1 Title'
          },
          {
            id: 'Product3',
            title: 'Product 3 Title',
            description: 'Product 3 description'
          }
        ],
        title: 'Category 1 description'
      }, 
      Category2: {
        id: 'Category2',
        products: [{
          description: 'Product 2 description',
          id: 'Product2',
          title: 'Product 2 Title'
        }],
        title: 'Category 2 description'
      }
    },
    selectedCategoryId: null,
    selectedProductIds: ['Product1'],
    shownProducts: null
  };
}

function getInitialStateForSearch() {
  return {
    productsByCategory: {
      Category1: {
        id: 'Category1',
        products: [
          {
            description: 'Product 1 description',
            id: 'Product1',
            title: 'Product 1 Title'
          },
          {
            id: 'Product3',
            title: 'Product 3 Title',
            description: 'Product 3 description'
          }
        ],
        title: 'Category 1 description'
      }, 
      Category2: {
        id: 'Category2',
        products: [{
          description: 'Product 2 description',
          id: 'Product2',
          title: 'Product 2 Title'
        }],
        title: 'Category 2 description'
      }
    },
    selectedCategoryId: 'Category1',
    selectedProductIds: ['Product1'],
    shownProducts: [
      {
        description: 'Product 1 description',
        id: 'Product1',
        title: 'Product 1 Title'
      },
      {
        id: 'Product3',
        title: 'Product 3 Title',
        description: 'Product 3 description'
      }
    ]
  };
}

function getExpectedResultForSearch() {
  return {
    productsByCategory: {
      Category1: {
        id: 'Category1',
        products: [
          {
            description: 'Product 1 description',
            id: 'Product1',
            title: 'Product 1 Title'
          },
          {
            id: 'Product3',
            title: 'Product 3 Title',
            description: 'Product 3 description'
          }
        ],
        title: 'Category 1 description'
      },
      Category2: {
        id: 'Category2',
        products: [{
          description: 'Product 2 description',
          id: 'Product2',
          title: 'Product 2 Title'
        }],
        title: 'Category 2 description'
      }
    },
    selectedCategoryId: 'Category1',
    selectedProductIds: ['Product1'],
    shownProducts: [
      {
        description: 'Product 1 description',
        id: 'Product1',
        title: 'Product 1 Title'
      }
    ]
  };
}