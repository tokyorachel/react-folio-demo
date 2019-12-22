import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserProfile from './UserProfile';

import '../styles/user.scss';

const User = (props) => {
  const {
    profile,
    works
  } = props;

  return (
    <div className="user">
      <UserProfile type="full" profile={ profile } avatar={ profile.avatar } />
      <div className="user-works">
        { works && works.map((work, i) => {
          return(
            <div key={ work.id } className="user-work">
              <Link
                to={`/works/${work.id}`}
                className="user-work image-link">
                <img src={ work.thumbnail } alt={`${ work.title } by ${ profile.name }.`} />
              </Link>
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