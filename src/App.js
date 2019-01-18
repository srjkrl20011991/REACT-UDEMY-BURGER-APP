import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {

  // state = {
  //   show: true
  // };

  
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       show: false
  //     })
  //   }, 5000);
  // }

  render() {
    return (
      <div className="App">
          <Layout>
            {/* SWITCH LOAD ONE OF THESE ROUTE */}
            <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/" exact component={BurgerBuilder}/>
            </Switch>
            
              {/* { this.state.show ?  <BurgerBuilder/> : null }
              <BurgerBuilder />
              <Checkout /> */}
          </Layout>
      </div>
    );
  }
}

export default App;
