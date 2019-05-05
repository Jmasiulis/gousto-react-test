import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

export default function Search({ onSearch }) {
  return (
    <Fragment>
      <input className="search" onChange={onSearch}></input>
    </Fragment>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};
