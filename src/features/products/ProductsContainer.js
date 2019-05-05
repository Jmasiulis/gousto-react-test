import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getInitialData, selectCategory, selectProduct, searchProducts } from './actions';
import Categories from './Categories';

class ProductsContainer extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;

    dispatch(getInitialData(match.params.categoryId));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, match } = this.props;
    if (match.params.categoryId !== prevProps.match.params.categoryId) {
      dispatch(selectCategory(match.params.categoryId));
    }
  }

  handleProductClick = productId => {
    this.props.dispatch(selectProduct(productId));
  }

  handleSearch = e => {
    this.props.dispatch(searchProducts(e.target.value));
  }

  render() {
    const { productsByCategory, selectedCategoryId, shownProducts, selectedProductIds } = this.props;

    if (!productsByCategory) {
      return null;
    }

    return (
      <Categories
        productsByCategory={productsByCategory}
        onProductClick={this.handleProductClick}
        onSearch={this.handleSearch}
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

ProductsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  productsByCategory: PropTypes.object,
  onProductClick: PropTypes.func,
  onSearch: PropTypes.func,
  selectedCategoryId: PropTypes.string,
  selectedProductIds: PropTypes.arrayOf(PropTypes.string),
  shownProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }))
};

export default withRouter(connect(mapStateToProps)(ProductsContainer));
