import React from 'react';
import PropTypes from 'prop-types';

import '../styles/user.scss';

const User = (props) => {
  const {
    profile,
    works
  } = props;

  return (
    <div className="user">
      <h1 className="user-name">{ profile.name }</h1>
      { profile.avatar &&
        <img className="user-avatar" src={ profile.avatar.thumb } alt="User avatar" />
      }
      <div className="user-location">{ profile.location }</div>
      <div className="user-works">
        { works && works.map((work, i) => {
          return(
            <div key={i} className="user-work">
              <img src={ work.thumbnail } alt={`${ work.title } by ${ profile.name }.`} />
              <div className="user-work-title">{ work.title }</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

User.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.object,
    location: PropTypes.string
  }),
  works: PropTypes.array
}
export default User;