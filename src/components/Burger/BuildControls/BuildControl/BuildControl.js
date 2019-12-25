import React from 'react';
import './BuildControl.css';

const buildControl = props => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{props.label}</div>
      <button
        className='Less'
        onClick={() => props.ingredientRemoved(props.type)}
        disabled={props.disabledInfo[props.type]}
      >
        Less
      </button>
      <button
        className='More'
        onClick={() => props.ingredientAdded(props.type)}
      >
        More
      </button>
    </div>
  );
};

export default buildControl;
