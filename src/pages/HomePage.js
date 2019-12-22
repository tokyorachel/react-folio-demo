import React from 'react';

import Greeting from '../components/Greeting';
import Navigation from '../components/Navigation';

class HomePage extends React.Component {
  render(){
    return (
      <>
        <Greeting name='foriio'/>
        <Navigation />
      </>
     )
  }
}

export default HomePage;
