import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    users : [],
    loading: false,
    adduser: false
}


const addUserSuccess = (state, action) => {
     const newUser = updateObject(action.userData,{id: action.userId});
    //  console.log("action",action);
    return updateObject(state, {
        loading: false,
        openaddUserModal: false,
        users: state.users.concat(newUser)
    })
}

const openUserModal = (state, action) =>{
    return updateObject(state, {
        openaddUserModal: true
    })
}

const getUsers = (state, action) =>{
   console.log("get user reducer",state,action);
    return updateObject(state, {
        users: action.payload
    })
}




const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_USER: return addUserSuccess(state, action);
        case actionTypes.OPEN_USER_MODAL: return openUserModal(state, action);
        case actionTypes.GET_USERS: return getUsers(state, action);
        default: return state;
    }
}

export default userReducer;