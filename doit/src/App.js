import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // React-Router import
import logo from './logo.svg';
import './App.css';
import intro from './component/intro';
import login from './component/login';
import Register from './component/Register';
import Form from './component/Form';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={intro} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={Form} />
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
