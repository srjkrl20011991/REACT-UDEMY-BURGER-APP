import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) =>{
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData 
    };
};

export const purchaseBurgerFail = (error) =>{
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};


export const purchaseBurgerStart = () =>{
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};
// ASYNC
export const purchaseBurger = (orderData) =>{
    return  dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then( response => {
            console.log(response.data);
           dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch(error =>{  
            dispatch(purchaseBurgerFail(error));
        });
    }
}


export const fetchOrdersSuccess =(orders) =>{
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFail = (error) =>{
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () =>{
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}



export const fetchOrders = () =>{
    return dispatch =>{
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then(res =>{
                const fetchedOrders = [];
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id:key
                    });
                }
            console.log("fetchedOrders",fetchedOrders);
                // this.setState({loading: false, orders: fetchedOrders});
                dispatch(fetchOrdersSuccess(fetchedOrders))
            
            })
            .catch(err =>{
                // this.setState({loading: false});
                dispatch(fetchOrdersFail(err));
            })
    }
}

export const purchaseInit = () =>{
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchCustInfoStart = () =>{
    return {
        type: actionTypes.FETCH_CUST_INFO_START
    }
}



export const deleteOrder = (id) =>{
    return dispatch =>{
        
        axios.delete('orders/'+ id +'.json').then(response => {
            console.log(response);
            console.log("delete order successfully");
            axios.get('/orders.json')
                .then(res =>{
                    const fetchedOrders = [];
                    for(let key in res.data){
                        fetchedOrders.push({
                            ...res.data[key],
                            id:key
                        });
                    }
                    dispatch(fetchOrdersSuccess(fetchedOrders))
                
                })
        })
    }
}