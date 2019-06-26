import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/Login" component={Login} exact />
            <Route path="/Signup" component={Signup} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
