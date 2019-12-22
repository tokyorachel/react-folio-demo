import React from 'react';

import Creator from '../components/Creator';
import Navigation from '../components/Navigation';

class CreatorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorsData: []
    }
  }

  componentDidMount(){
    fetch('https://api.foriio.com/api/v1/promoted/users')
      .then((response) => {
        if (!response.ok) {
          console.error(response);
          return;
        }
        response.json().then((data) => {
          this.setState({ creatorsData: data.users });
          console.log(this.state.creatorsData)
        });
      });
  }

  render(){
    const {
      creatorsData
    } = this.state;

    return (
      <>
        <Navigation />
        <p>Hello, Creators</p>
        { creatorsData.length > 0 && creatorsData.map((creatorData) => {
          return (
            <Creator key={ creatorData.id } creator={ creatorData } />
          )
        })}
      </>
    )
  }
}

export default CreatorsPage;