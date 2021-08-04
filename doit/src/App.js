import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // React-Router import
import './App.css';
import intro from './component/intro';
import login from './component/login';
import Form from './component/Form';
import Main from './component/main';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={intro} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={Form} />
          <Route path="/main/:nickName" exact component={Main} />
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
