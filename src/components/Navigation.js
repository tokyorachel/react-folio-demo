import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/main-menu.scss';

const Navigation = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-logo"><Link to="/">foriio</Link></li>
        <li><Link to="/creators">discover creators</Link></li>
        <li><Link to="/users/hirohito">User Hirohito</Link></li>
        <li><Link to="/works/43">Hirohito Work 43</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;