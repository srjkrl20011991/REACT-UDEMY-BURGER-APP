import React from 'react';

import classes from './Order.css';
import Button from '../UI/Button/Button';

const Order = (props) =>{

    const ingredients =  [];

    for(let ingredientName in props.ingredients){
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        )
    }
    console.log(props.ingredients);

    const ingredientsOutput = ingredients.map( ig => {
        return <span 
        key={ig.name}
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px',
            boxShadow: '1px 2px grey'
            
            }}
        > {ig.name} ({ig.amount}) </span>
    })




    return(
        <div className={classes.Order}>
                <div className={classes.width50}>
                    <p>Ingredients: {ingredientsOutput}</p>
                    <p>Price: <strong>USD {Number.parseFloat(props.price.toFixed(2))}</strong></p>
                </div>
                <div className={classes.width50}>
                    <Button  
                        color="secondary" 
                        style={{float:"right"}}
                        btnType="Danger"
                        clicked={props.deleteOrder}
                    >Delete Order</Button>
                </div>
        </div>
    );
} 

export default Order;