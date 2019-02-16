import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Wrapper';
import Button from '../../components/UI/Button/Button';
import UserSummary from '../../components/User/UserSummary/UserSummary';
import { bindActionCreators } from 'redux';
import {openUserModal,getUsers} from '../../store/actions/userActions';
import Grid from '../../components/Grid/Grid';

class Users extends Component{

    state = {
        loading:true
    }


    addUser = () => {

        this.props.openUserModal();
    }

    closedAddUserHandler = () =>{
        this.setState({ openaddUserModal: false});
    }


    componentWillMount(){
        this.props.getUsers();
        console.log("this.props.users$",this.props.users$);
    }

    render(){
        let userSummary = null;
        userSummary = <UserSummary />
    //    console.log("this.props.users$",this.props.users$);

        return(
        <Aux>
            <div>
                <h2>Manage Users</h2>
                {/* <Fab color="primary" aria-label="Add">
                    <AddIcon />
                </Fab> */}
                <Button 
                    color="primary"
                    clicked={this.addUser}>Add User</Button>

                    <Grid />
                
               
            </div>
            <Modal show={this.props.openaddUserModal}>
                {userSummary}
            </Modal>
         </Aux>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        openaddUserModal : state.userReducer.openaddUserModal,
        users$: state.userReducer.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openUserModal,
        getUsers
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);