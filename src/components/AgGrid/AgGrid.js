import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';

class AgGrid extends Component{

    componentWillMount(){
        console.log("componentWillMount ag users");
    }


    componentDidMount(){
        console.log("componentDidMount ag users",this.props.allUsers$);
    }

    render(){
        console.log("ag users",this.props.allUsers$);
        const userData = _.map(this.props.allUsers$, (userObj,key) => {
            return userObj.userData;
        });

        console.log("userData",userData);
        return(
            <div>
               <h1>Ag Grid Render Data</h1> 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
   return{
       allUsers$ : state.userReducer.users
   }
}

export default connect(mapStateToProps,null)(AgGrid);