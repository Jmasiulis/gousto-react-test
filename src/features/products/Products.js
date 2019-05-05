import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

export default function Products({ products, onProductClick, selectedProductIds }) {
  const listItems =
    products.map((item) =>
      <li key={item.title}>
        <button className="product-item" onClick={() => onProductClick(item.id)}>
          {item.title}
        </button>
        {selectedProductIds.indexOf(item.id) !== -1 && <p className="product-description">
          {item.description}
        </p>}
      </li>);

  return (
    <Fragment>
      <ul className="product-list">
        {listItems}
      </ul>
    </Fragment>
  );
}

Products.propTypes = {
  onProductClick: PropTypes.func.isRequired,
  selectedProductIds: PropTypes.arrayOf(PropTypes.string),
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })).isRequired
};
