import React from 'react';
import './OrderSummary.css';
import Button from '../../UI/Button/Button';

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
      <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelHandler}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinueHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default orderSummary;
