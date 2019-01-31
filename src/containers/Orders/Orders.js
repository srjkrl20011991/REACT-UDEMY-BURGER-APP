import React, { Component } from 'react';
import {connect} from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorhandler/withErrorhandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    state = {
        orders : [],
        loading: true
    }

    componentDidMount(){
      //  console.log("this.props.orderData", this.props.orders)
        // axios.get('/orders.json')
        //     .then(res =>{
        //         const fetchedOrders = [];
        //         for(let key in res.data){
        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 id:key
        //             });
        //         }
        //       console.log(fetchedOrders);
        //         this.setState({loading: false, orders: fetchedOrders});
            
        //     })
        //     .catch(err =>{
        //         this.setState({loading: false});
        //     })
        this.props.onFetchOrders();
           
    }

    deleteOrder = (orderid) =>{
        console.log("delete Order",orderid);
        this.props.deleteOrder(orderid);
        this.props.onFetchOrders();
    }

    render() {
    
            let orders = <Spinner />;
            if(!this.props.loading){
                orders =  this.props.orders.map( order => (
                    <Order  
                         key={order.id}  
                         customer={order.customer}
                         ingredients = {order.ingredients}
                         price = {order.price}
                         deleteOrder={() => this.deleteOrder(order.id)}
                         />
                ))
            }
            return (
                <div>
                    {orders}
                </div>
            );
           
    }
}
///state.order is order reducer
export const mapStateToProps =(state) =>{
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

export const mapDispatchToProps = (dispatch) =>{
     return {
        onFetchOrders : () =>{dispatch(actions.fetchOrders())},
        deleteOrder : (id) => {dispatch(actions.deleteOrder(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders, axios));