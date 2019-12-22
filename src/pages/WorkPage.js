import React from 'react';

import Work from '../components/Work';
import Navigation from '../components/Navigation';

class WorkPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        workData: {}
      }
    }
    componentDidMount(){
    fetch('https://api.foriio.com/api/v1/works/43')
      .then((response) => {
        if (!response.ok) {
          console.error(response);
          return;
        }
        response.json().then((data) => {
          this.setState({ workData: data.work });
        });
      });
  }
  render(){
    const {
      workData
    } = this.state;

    return (
      <>
        <Navigation />
        <h1>Works for {workData.author && workData.author.profile.name } </h1>
        <Work work={ workData } />
      </>
     )
  }
}

export default WorkPage;
