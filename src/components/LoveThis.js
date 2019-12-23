import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import UserContext from '../contexts/UserContext';

import '../styles/love-this.scss';

const LoveThis = (props) => {

  // Context makes this demo work for anonymous users;
  // ideally we'd persist user data after login.
  const user = useContext(UserContext);

  const onLove = () => {
    user.setLovedWork(props.work);
  }

  return (
    <button className={classNames(
      'love-this',
      {'loved': user.lovedWorks && user.lovedWorks.indexOf(props.work) >= 0 }
      )} onClick={ onLove }>Love this</button>
  )
}

LoveThis.propTypes = {
  work: PropTypes.number.isRequired
}

export default LoveThis;