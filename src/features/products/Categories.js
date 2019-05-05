import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import './Categories.css';

export default function Categories({productsByCategory, onCategoryClick, selectedCategoryId, shownProducts, onProductClick, selectedProductIds}) {
  const listItems =
    Object.keys(productsByCategory).map((key) =>
      <li 
        key={productsByCategory[key].title}
        id={key}
        className={`category-item ${selectedCategoryId === key ? 'selected-category' : ''}`}
      >
        <a className="category-item-link" onClick={() => onCategoryClick(key) }>
          {productsByCategory[key].title}
        </a>
      </li>
    );

  return (
    <Fragment>
      <ul className="category-list">
        {listItems}
      </ul>
      <Products products={shownProducts} onProductClick={onProductClick} selectedProductIds={selectedProductIds}/>
    </Fragment>
  );
}
