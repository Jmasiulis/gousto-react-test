import React from 'react';
import PropTypes from 'prop-types'
import './Categories.css'

export default function Categories({productsByCategory}) {

  const listItems = Object.keys(productsByCategory).map((key) => <li key={productsByCategory[key].title}><a>{productsByCategory[key].title}</a></li>);
  return (
    <ul>
      {listItems}
    </ul>
  );
}
