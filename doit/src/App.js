import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // React-Router import
import logo from './logo.svg';
import './App.css';
import intro from './intro';
import login from './login';
import register from './register';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={intro} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={register} />
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
