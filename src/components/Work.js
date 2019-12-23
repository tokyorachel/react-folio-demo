import React from 'react';
import PropTypes from 'prop-types';

import LoveThis from './LoveThis';
import Spinner from './Spinner';
import UserProfile from './UserProfile';

import '../styles/work.scss';

const Work = (props) => {
  const {
    loaded,
    work
  } = props;

  return (
    <div className="work">
      { work.author && work.author.profile &&
        <div className="work-details">
          <h1>{ work.name }</h1>
          <p>{ work.description }</p>
          <UserProfile type="full" profile={ work.author.profile } avatar={ work.author.profile.avatar } />
          <LoveThis work={ work.id } />
        </div>
      }
      <div className="work-images">
        { loaded ?
          <>
          { work.images && work.images.map((image) => {
            return (
              <img key={ image.id } src={ image.urls.list } alt={ work.title } />
            )
          })}
          </>
         :
           <Spinner />
        }
      </div>
    </div>
  )
}

Work.propTypes = {
  loaded: PropTypes.bool,
  work: PropTypes.shape({
    author: PropTypes.object,
    description: PropTypes.string,
    id: PropTypes.number,
    images: PropTypes.array,
    name: PropTypes.string,
    title: PropTypes.string
  }),
}

export default Work;