import React from 'react';

import Aux from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const orderSummary = Object.keys(props.ingrediants)
                        .map((igKey) => {
                            return <li> <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingrediants[igKey]}</li>
                        })

  return (  <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>    
        {orderSummary}
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.puchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>

    </Aux>
    );
}


export default orderSummary;