import React from 'react';

import classes from './Order.css';

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
            <p>Customer Name: {props.customer.name}</p>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price)}</strong></p>
        </div>
    );
} 

export default Order;