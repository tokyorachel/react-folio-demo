import React from 'react';

import '../styles/greeting.scss'

const Greeting = (props) => {
  return (<h1 class="greeting">Welcome, {props.name}! </h1>)
}

export default Greeting;