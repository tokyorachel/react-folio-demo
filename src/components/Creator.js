import React from 'react';
import PropTypes from 'prop-types';

import '../styles/creator.scss'

const Creator = (props) => {
  const {
    creator
  } = props;

  return (
    <div className="creator">
      <div className="creator-details">
        { creator.name }
        <img src={ creator.avatar } alt="Creator avatar" />
      </div>
      <div className="creator-works">
        { creator.works && creator.works.map((work)=>{
          return (
            <div key={ work.id } className="creator-works-container">
              <img src={ work.thumbnail} alt={ work.title } />
            </div>
          )
        })}
      </div>
    </div>
  ) 
}

Creator.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    works: PropTypes.array
  }),
}

export default Creator;