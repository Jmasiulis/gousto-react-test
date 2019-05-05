import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialData, selectCategory } from './actions';
import Categories from './Categories';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  handleCategoryClick = categoryId => {
    this.props.dispatch(selectCategory(categoryId));
  }

  render() {
    const { productsByCategory, selectedCategoryId, shownProducts } = this.props;

    if (!productsByCategory) {
      return null;
    }

    return (
      <Categories
        productsByCategory={productsByCategory}
        onCategoryClick={this.handleCategoryClick}
        selectedCategoryId={selectedCategoryId}
        shownProducts={shownProducts}/>
    );
  }
}

const mapStateToProps = state => ({
  productsByCategory: state.products.productsByCategory,
  selectedCategoryId: state.products.selectedCategoryId,
  shownProducts: state.products.shownProducts,
});

export default connect(mapStateToProps)(ProductsContainer);
