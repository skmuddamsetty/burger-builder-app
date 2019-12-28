import React from 'react';
import './OrderSummary.css';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div className='OrderSummary'>
      <h3>Your Order</h3>
      <p>Delicious Burger with following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
    </div>
  );
};

export default orderSummary;
