import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';

import Backdrop from '../UI/Backdrop/Backdrop';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AgGrid extends Component{

    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

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
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
               <h1>Ag Grid Render Data</h1> 
               <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '500px', 
	                width: '600px' }} 
		            >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
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