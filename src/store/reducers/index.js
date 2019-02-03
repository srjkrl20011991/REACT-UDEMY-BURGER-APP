import { combineReducers } from 'redux';

import orderReducer from './order';
import burgerBuilderReducer from './burgerBuilder';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    orderReducer,
    burgerBuilderReducer,
    userReducer
})

export default rootReducer;