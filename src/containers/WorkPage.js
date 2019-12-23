import React from 'react';
import PropTypes from 'prop-types';

import Work from '../components/Work';

class WorkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      workData: {}
    }
  }

  fetchData(id) {
    const url = `https://api.foriio.com/api/v1/works/${id}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error(`Call to ${url} failed.`);
          throw Error(response.statusText);
        }
        response.json().then((data) => {
          this.setState({ workData: data.work });
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() =>{
        this.setState({ loaded: true });
      });
  }

  componentDidMount() {
    const workId = this.props.match.params.id
    this.fetchData(workId);
  }

  componentDidUpdate(prevProps, prevState) {
    // If we change the url id, we need to update our state
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const workId = this.props.match.params.id;
      this.fetchData(workId);
    }
  }

  render(){
    const {
      loaded,
      workData
    } = this.state;

    return (
      <section className="work-page">
        <Work work={ workData } loaded={ loaded }/>
      </section>
    )
  }
}

WorkPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

export default WorkPage;
