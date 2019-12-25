import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => {
  return (
    <div className='BuildControls'>
      <p>
        Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            type={ctrl.type}
            ingredientAdded={props.ingredientAdded}
            ingredientRemoved={props.ingredientRemoved}
            disabledInfo={props.disabledInfo}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
