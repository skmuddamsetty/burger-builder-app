import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './BurgerBuilder.css';

class BurgerBuilder extends Component {
  // render is a life cycle method
  render() {
    return (
      <Aux className='Content'>
        <div>Burger</div>
        <div>Build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
