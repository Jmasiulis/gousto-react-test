import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductsContainer extends Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}

const mapStateToProps = state => ({
  savingsAmount: state.savings.savingsAmount,
  accountUid: state.savings.accountUid,
  savingsGoalUid: state.savings.savingsGoalUid
});

export default connect(null)(ProductsContainer);
