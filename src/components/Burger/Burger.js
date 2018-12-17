import React from 'react';

import classes from './Burger.css';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';

const burger = (props)=>{
   
    let transformedIngrediants = Object.keys(props.ingrediants)
        .map(igKey => {
            return [...Array(props.ingrediants[igKey])].map((_, i) => {
                    return  <BurgerIngrediant 
                            key={igKey + i} 
                            type={igKey} />
                    });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if(transformedIngrediants.length === 0){
            transformedIngrediants = <p>Please start adding ingrediants!</p>
        }

    return (
        <div className = {classes.Burger}>
            <BurgerIngrediant type="bread-top"/>
             {transformedIngrediants}
            <BurgerIngrediant type="bread-bottom"/>
        </div>
    );
}

export default burger;