import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialData } from './actions';
import Categories from './Categories';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  render() {
    const { productsByCategory } = this.props;

    if (!productsByCategory) {
      return null;
    }

    return (
      <Categories productsByCategory={productsByCategory}/>
    );
  }
}

const mapStateToProps = state => ({
  productsByCategory: state.products.productsByCategory
});

export default connect(mapStateToProps)(ProductsContainer);
