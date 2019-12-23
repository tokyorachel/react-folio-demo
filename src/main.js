import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';

import CreatorsPage from './containers/CreatorsPage';
import FourOhFour from './containers/FourOhFour';
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';
import WorkPage from './containers/WorkPage';

import './styles/global.scss';

class App extends React.Component {
  render(){
    return (
      <Router>  
        <div>
          <header>
            <Navigation />
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/users/:id' component={UserPage} />
              <Route path='/works/:id' component={WorkPage} />
              <Route path='/creators' component={CreatorsPage} />
              <Route component={FourOhFour} />
            </Switch>
          </main>
        </div>
      </Router> 
    )     
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);