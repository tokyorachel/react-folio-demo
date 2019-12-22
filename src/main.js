import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import CreatorsPage from './pages/CreatorsPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import WorkPage from './pages/WorkPage';

import './styles/global.scss';

class App extends React.Component {
  render(){
    return (
      <Router>  
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/user' component={UserPage} />
            <Route path='/work' component={WorkPage} />
            <Route path='/creators' component={CreatorsPage} />
          </Switch>
        </div>
      </Router> 
    )     
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);