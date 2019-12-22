import React from 'react';
import PropTypes from 'prop-types';

const Work = (props) => {
  const {
    work
  } = props;

  return (
    <>
    { work &&
      <div className="work">
        { work.title }
        { work.author && work.author.profile.name }
        { work.images && work.images.map((image) => {
          return (
            <img key={ image.id } src={ image.urls.list } alt={ work.title } />
          )
        })}
      </div>
    }
    </>
  )
}

Work.propTypes = {
  work: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.object,
    images: PropTypes.array
  }),
}

export default Work;