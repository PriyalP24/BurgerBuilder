import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route , Switch} from 'react-router-dom';
import Orders from '../src/containers/Orders/Orders';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/orders" component={Orders} />
            <Route path="/Checkout" component={Checkout}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
