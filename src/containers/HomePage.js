import React from 'react';

import Hero from '../components/Hero';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      slideArray: [
        '/assets/home-slides/slide1.jpg',
        '/assets/home-slides/slide2.jpg',
        '/assets/home-slides/slide3.jpg',
      ]
    }
  }
  render(){
    return (
      <Hero slides={ this.state.slideArray }/>
    )
  }
}

export default HomePage;
