import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageWithPlaceholder from './ImageWithPlaceholder';
import UserProfile from './UserProfile';

import '../styles/creator.scss'

const Creator = (props) => {
  const {
    creator
  } = props;

  return (
    <div className="creator">
      <div className="creator-details">
        <Link to={`/users/${creator.screen_name}`}>
          <UserProfile type="short" profile={ creator } avatar={{ thumb: creator.avatar }} />
        </Link>
        
      </div>
      <div className="creator-works">
        { creator.works && creator.works.map((work)=>{
          return (
            <Link
            to={`/works/${work.id}`}
            key={ work.id }
            className="creator-work image-link">
              <ImageWithPlaceholder src={ work.thumbnail } alt={ work.title } />
            </Link>
          )
        })}
      </div>
    </div>
  ) 
}

Creator.propTypes = {
  creator: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    screen_name: PropTypes.string,
    works: PropTypes.array
  }),
}

export default Creator;