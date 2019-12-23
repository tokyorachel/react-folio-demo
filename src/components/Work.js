import React from 'react';
import PropTypes from 'prop-types';

import LoveThis from './LoveThis';
import UserProfile from './UserProfile';

import '../styles/work.scss';

const Work = (props) => {
  const {
    work
  } = props;

  return (
    <>
    { work &&
      <div className="work">
        { work.author && work.author.profile &&
          <div className="work-details">
            <h1>{ work.name }</h1>
            <p>{ work.description }</p>
            <UserProfile type="full" profile={ work.author.profile } avatar={ work.author.profile.avatar } />
            <LoveThis work={ work.id }/>
          </div>
        }
        <div className="work-images">
          { work.images && work.images.map((image) => {
            return (
              <img key={ image.id } src={ image.urls.list } alt={ work.title } />
            )
          })}
        </div>
      </div>
    }
    </>
  )
}

Work.propTypes = {
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