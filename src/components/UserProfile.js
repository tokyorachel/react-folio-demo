import React, {useEffect} from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/user-profile.scss';

const UserProfile = (props) => {
  const {
    avatar,
    profile,
    type
  } = props;

  return (
    <div className={classNames(
      'user-profile',
      {'full': type === 'full'}
    )}>

      <h1 className="user-name">{ profile.name }</h1>
      <h1 className="user-roles">{ profile.profession }</h1>
      { avatar &&
        <img className="user-avatar" src={ avatar.thumb || '/assets/default_avatar_v2.png' } alt="User avatar" />
      }
      { type === "full" &&
        <div className="user-location">{ profile.location }</div>
      }
      { type === "full" &&
        <div className="user-location">{ profile.bio }</div>
      }
    </div>
  )
}

UserProfile.propTypes = {
  avatar: PropTypes.object,
  profile: PropTypes.object,
  type: PropTypes.string
}

export default UserProfile;