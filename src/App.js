import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Users from './containers/Users/Users';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Layout>
            {/* SWITCH LOAD ONE OF THESE ROUTE */}
            <Switch>
              <Route path="/users" component={Users}/>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/auth" component={Auth}/>
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
