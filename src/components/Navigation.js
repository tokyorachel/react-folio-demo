import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User Hirohito</Link></li>
        <li><Link to="/work">Hirohito Work 43</Link></li>
        <li><Link to="/creators">Creators</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;