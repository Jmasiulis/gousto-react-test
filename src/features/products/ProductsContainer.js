import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialData, selectCategory, selectProduct } from './actions';
import Categories from './Categories';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  handleCategoryClick = categoryId => {
    this.props.dispatch(selectCategory(categoryId));
  }

  handleProductClick = productId => {
    this.props.dispatch(selectProduct(productId));
  }

  render() {
    const { productsByCategory, selectedCategoryId, shownProducts, selectedProductIds } = this.props;

    if (!productsByCategory) {
      return null;
    }

    return (
      <Categories
        productsByCategory={productsByCategory}
        onCategoryClick={this.handleCategoryClick}
        onProductClick={this.handleProductClick}
        selectedCategoryId={selectedCategoryId}
        selectedProductIds={selectedProductIds}
        shownProducts={shownProducts}/>
    );
  }
}

const mapStateToProps = state => ({
  productsByCategory: state.products.productsByCategory,
  selectedCategoryId: state.products.selectedCategoryId,
  shownProducts: state.products.shownProducts,
  selectedProductIds: state.products.selectedProductIds
});

export default connect(mapStateToProps)(ProductsContainer);
