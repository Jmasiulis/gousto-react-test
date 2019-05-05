import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import './Categories.css';

export default function Products({products}) {

  if (!products) {
    return null;
  }

  const listItems = products.map((item) => <li key={item.title}><a className="product-item-link">{item.title}</a></li>);
  return (
    <Fragment>
      <ul className="product-list">
        {listItems}
      </ul>
    </Fragment>
  );
}
