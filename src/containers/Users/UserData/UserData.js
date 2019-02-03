import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorhandler/withErrorhandler';
import Axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import { bindActionCreators } from 'redux';
import { addUser } from '../../../store/actions/userActions';

class UserData extends Component {

    state ={
        userForm:{
            firstName: {
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'First Name'
                },
                value:'',
                validation:{
                    required : true 
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Last Name'
                },
                value:'',
                validation:{
                    required : true 
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    addUserHandler = (event) => {
        event.preventDefault();
        const formData = {};
        
        for(let formElementIdentifier in this.state.userForm){
            formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value;
        }

        const user = {
          userData: formData
        }
       
        this.props.addUser(user);
        this.render();
        // this.props.history.push('/users');
        // console.log(this.history);x
    }

    inputChangedHandler = (event, inputIdentifier) =>{
        //debugger
        const updatedUserForm = {
            ...this.state.userForm
        };
 
        const updatedFormElement = {
            ...updatedUserForm[inputIdentifier]
         };
 
         updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.valid = true; 
        updatedFormElement.touched = true;
         updatedUserForm[inputIdentifier] = updatedFormElement;
 
         this.setState({
             userForm : updatedUserForm
         })
     }

    render(){

        const formElementArray = [];
        for(let key in this.state.userForm){
            formElementArray.push({
                id:key,
                config: this.state.userForm[key]
            });
        }

        return(
            <form>
                {formElementArray.map( formElement =>(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button 
                    btnType="Success" 
                    color="primary"
                    clicked={this.addUserHandler}

                >Add User</Button>
            </form>
        )
    }

}

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddUser: (userData) => dispatch(actions.addUser(userData))
//     };
// };

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addUser
    }, dispatch);
}

const mapStateToProps = state =>{
    return {
        users : state.userReducer.users,
        loading: state.userReducer.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(UserData, Axios));