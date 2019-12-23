import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';
import { UserProvider } from './contexts/UserContext'

import CreatorsPage from './containers/CreatorsPage';
import FourOhFour from './containers/FourOhFour';
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';
import WorkPage from './containers/WorkPage';

import './styles/global.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lovedWorks: [],
      setLovedWork: this.setLoved
    }
  }

  setLoved = (workId) => {
    this.setState({ lovedWorks: [...this.state.lovedWorks, workId] });
  };

  render(){
    const user = {...this.state}
    return (
      <Router>  
        <div>
          <UserProvider value={user}>
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
          </UserProvider>
        </div>
      </Router> 
    )     
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);