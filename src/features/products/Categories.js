import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import Search from '../../components/Search';
import './Categories.css';

export default function Categories({productsByCategory, onCategoryClick, selectedCategoryId, shownProducts, onProductClick, selectedProductIds, onSearch}) {
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
      {selectedCategoryId && <Search onSearch={onSearch}/>}
      <Products products={shownProducts} onProductClick={onProductClick} selectedProductIds={selectedProductIds}/>
    </Fragment>
  );
}
