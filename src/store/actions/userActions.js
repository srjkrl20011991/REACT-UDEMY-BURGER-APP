import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addUserSuccess = (id, userData) =>{
    return {
        type: actionTypes.ADD_USER,
        userId : id,
        userData : userData 
    };
};

export const getUserAction = (users) =>{
    return {
        type: actionTypes.GET_USERS,
        payload: users
    }
}

// export const addUserFail = (error) =>{
//     return {
//         type: actionTypes.ADD_USER_FAIL,
//         error: error
//     };
// };


// export const addUserStart = () =>{
//     return {
//         type: actionTypes.ADD_USER_START
//     };
// };

// ASYNC
export const addUser = (userData) =>{
    return  dispatch => {
        // dispatch(addUserStart());
        axios.post('/users.json', userData)
        .then( response => {
            console.log(response.data);
           dispatch(addUserSuccess(response.data.name, userData));
        })
        .catch(error =>{  
            // dispatch(addUserFail(error));
        });
    }
}

export const getUsers = () =>{
    console.log("fetch record from action");
    return  dispatch => {
        // dispatch(addUserStart());
        axios.get('/users.json')
        .then( response => {
            console.log("response user",response.data);
           dispatch(getUserAction( response.data));
        })
        .catch(error =>{  
            // dispatch(addUserFail(error));
        });
    }
}

export const openUserModal = () =>{
    return{
        type: actionTypes.OPEN_USER_MODAL
    }
} 
