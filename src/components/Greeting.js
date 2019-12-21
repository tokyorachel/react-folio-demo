import React from 'react';
import PropTypes from 'prop-types';

import '../styles/greeting.scss'

const Greeting = (props) => {
  return (<h1 className="greeting">Welcome, {props.name}! </h1>)
}

Greeting.propTypes = {
  name: PropTypes.string
}

export default Greeting;