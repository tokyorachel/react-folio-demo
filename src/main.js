import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';
import Greeting from './components/Greeting';
import User from './components/User';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userProfile: {},
      userWorks: []
    }
  }

  componentDidMount(){
    const urls = [
      'https://api.foriio.com/api/v1/users/hirohito/profile',
      'https://api.foriio.com/api/v1/users/hirohito/works'
    ];

    const requests = urls.map((url) => fetch(url));

    Promise.all(requests)
      .then((responses) => {
        responses[0].json().then((data) => {
          this.setState({ userProfile: data.profile })
        })
        responses[1].json().then((data) => {
          this.setState({ userWorks: data.works });
        })
      });
  }
  render(){
    return (
      <React.Fragment>
        <Greeting name='foriio'/>
        <User profile={ this.state.userProfile } works={ this.state.userWorks } />
      </React.Fragment>
     )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));