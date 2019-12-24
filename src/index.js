import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FoodListMenu from './components/FoodListMenu';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Checkout from './components/checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
      <Router>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/" component={FoodListMenu}/>
        </Switch>
      </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
