import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIANT_PRICES = {
    salad: 0.5,
    meat : 0.7,
    cheese: 1.0,
    bacon: 2.3
}

class BurgerBuilder extends Component {

    state = {
        ingrediants : {
            salad: 0,
            bacon: 0,
            meat : 0,
            cheese : 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseClosedHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () =>{
        alert("lets continue...");
    }    

    updatePurchaseState (ingrediants){
        const sum = Object.keys(ingrediants)
                            .map(igKey => {
                                return ingrediants[igKey];
                            })//['0','0','0','0']
                            .reduce((sum, el) =>{
                             return sum + el;
                            },0) /// give sum

        this.setState({
            purchasable: sum > 0
        })

        console.log(this.state.ingrediants);
    }

    addIngrediantHandler = (type)=> {
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        }
        updatedIngrediants[type] = updatedCount;
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice : newPrice,
            ingrediants : updatedIngrediants
        })
        this.updatePurchaseState(updatedIngrediants);
    }

    removeIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        if (oldCount <= 0)
            return;
        const updatedCount = oldCount - 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        }
        updatedIngrediants[type] = updatedCount;
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice : newPrice,
            ingrediants : updatedIngrediants
        })
        this.updatePurchaseState(updatedIngrediants);
    }

    render(){
        const disabledInfo = {
            ...this.state.ingrediants
        }

        for(let key in disabledInfo){
            //console.log(disabledInfo[key]);
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        //console.log(disabledInfo);
        return(
            <Aux>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseClosedHandler}>
                    <OrderSummary 
                    price = {this.state.totalPrice}
                    ingrediants={this.state.ingrediants}  
                    puchaseCancelled = {this.purchaseClosedHandler}
                    purchaseContinue = {this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger 
                    ingrediants={this.state.ingrediants} />
                <BuildControls 
                    ingrediantAdded = {this.addIngrediantHandler} 
                    ingrediantRemoved={this.removeIngrediantHandler}  
                    disabled = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;