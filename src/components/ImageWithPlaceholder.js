import React from 'react';
import PropTypes from 'prop-types';

import '../styles/image-with-placeholder.scss';

class ImageWithPlaceholder extends React.Component {
  state = { isLoaded: false }

  componentDidMount() {
    // This can be improved upon.
    // Results are not consistent on discover creators page.
    const image = new Image();
    image.onload = () => this.setState({ isLoaded: true });
    image.src = this.props.src;
    image.alt = this.props.alt;
  }

  render() {
    const {
      alt,
      src
    } = this.props;
    const { isLoaded } = this.state;

    return isLoaded
      ? <img src={ src } alt={ alt } />
      : <div className="image-loading-placeholder">Loading image...</div>
  }
}

ImageWithPlaceholder.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
}

export default ImageWithPlaceholder;