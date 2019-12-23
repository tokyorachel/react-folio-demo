import React from 'react';
import PropTypes from 'prop-types';

import User from '../components/User';

class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      userProfile: {},
      userWorks: []
    }
  }

  fetchData(id) {
    const urls = [
      `https://api.foriio.com/api/v1/users/${id}/profile`,
      `https://api.foriio.com/api/v1/users/${id}/works`
    ];

    const requests = urls.map((url) => fetch(url));

    // Strictly speaking we don't need to use Promises.all().
    // If one query fails, we could load the data we do get back.
    // For this exercise, it seemed best to return an error if
    // we couldn't get all the requested data.
    Promise.all(requests)
      .catch((error) => {
        this.setState({ loaded: true });
        console.error('There was an error with this request.', error);
        return;
      })
      .then((responses) => {
        responses[0].json().then((data) => {
          this.setState({ userProfile: data.profile })
        })
        responses[1].json().then((data) => {
          this.setState({ userWorks: data.works });
        })
        if (responses[0].ok && responses[1].ok) {
          this.setState({ loaded: true });
        }
      })
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.fetchData(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    // If we change the url id, we need to update our state
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const userId = this.props.match.params.id;
      this.fetchData(userId);
    }
  }

  render(){
    const {
      loaded,
      userProfile,
      userWorks
    } = this.state;

    return (
      <section className="user-page">
        <User profile={ userProfile } works={ userWorks } loaded={ loaded }/>
      </section>
     )
  }
}

UserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

export default UserPage;