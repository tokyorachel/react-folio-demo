import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../components/Navigation';
import User from '../components/User';

class UserPage extends React.Component {
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

    // Strictly speaking we don't need to use Promises.all().
    // If one query fails, we could load the data we do get back.
    // But for the user, it seemed best to return an error if
    // we can't get all the requested data.
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
      <>
        <Navigation />
        <User profile={ this.state.userProfile } works={ this.state.userWorks } />
      </>
     )
  }
}

export default UserPage;