import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorhandler/withErrorhandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        // axios.get("https://react-my-burger-473fe.firebaseio.com/ingrediants.json")
        //     .then(response => {
        //         console.log(response);
        //         this.setState({
        //              ingredients: response.data
        //         })
        //     }).catch(error => {                
        //         this.setState({ error: true})
        //     })
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        // this.setState( { purchasable: sum > 0 } );
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    // console.log("this.props in burger builder",this.props);

    // const queryParam = [];
    // for(let i in this.state.ingredients){
    //     queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    // }
    // queryParam.push('price='+ this.state.totalPrice);
    // const queryString = queryParam.join('&');
    // this.props.history.push({
    //     pathname: '/checkout',
    //     search:'?' + queryString
    // });
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        // ingrediants initially null so orderSummary Components contains 
        // ingrediants as a props so we will show only if ingrediants are availble
        // same for burger and build controls 
        // initially we show spinner and then burger and its controls

        let orderSummary = null; 

        let burger = this.state.error ? <p>ingrediants not shown.</p> : <Spinner />;

        if(this.props.ings){
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />

            burger =  (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    price={this.props.price} />
                </Aux>
                );
        }

        if(this.state.loading){
            orderSummary = <Spinner />
        }

        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
               {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ings : state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));