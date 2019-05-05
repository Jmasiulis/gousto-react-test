import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import './Categories.css';

export default function Products({ products, onProductClick, selectedProductIds }) {

  if (!products) {
    return null;
  }

  const listItems =
    products.map((item) =>
      <li key={item.title}>
        <a className="product-item-link" onClick={() => onProductClick(item.id)}>
          {item.title}
        </a>
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
