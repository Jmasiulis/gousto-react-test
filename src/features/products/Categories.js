import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Products from './Products';
import Search from '../../components/Search';

export default function Categories({productsByCategory, selectedCategoryId, shownProducts, onProductClick, selectedProductIds, onSearch}) {
  const listItems =
    Object.keys(productsByCategory).map((key) =>
      <li 
        key={productsByCategory[key].title}
        id={key}
        className={`category-item ${selectedCategoryId === key ? 'selected-category' : ''}`}
      >
        <Link to={`/category/${key}`}className="category-item-link">
          {productsByCategory[key].title}
        </Link>
      </li>
    );

  return (
    <Fragment>
      <ul className="category-list">
        {listItems}
      </ul>
      {selectedCategoryId && <Search onSearch={onSearch}/>}
      {shownProducts && <Products products={shownProducts} onProductClick={onProductClick} selectedProductIds={selectedProductIds}/>}
    </Fragment>
  );
}

Categories.propTypes = {
  productsByCategory: PropTypes.object.isRequired,
  onProductClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  selectedCategoryId: PropTypes.string,
  selectedProductIds: PropTypes.arrayOf(PropTypes.string),
  shownProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }))
};