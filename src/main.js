import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';
import Greeting from './components/Greeting'

class App extends React.Component {
  render(){
    return (<Greeting name='foriio'/>)
  }
}

ReactDOM.render(<App />, document.getElementById("app"));