import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/hero.scss'

const Hero = (props) => {

  const [currentImage, setImage] = useState(
    {
      index: 0, 
      path: props.slides[0]
    });

  useEffect(() => {
    const timer = setInterval(() => {
      setImage(prev => {
        const newIndex = prev.index < props.slides.length - 1 ? prev.index + 1 : 0;
        return {
          index: newIndex,
          path: props.slides[newIndex]
        }
      })
    }, 7500);

    return () => {
      clearInterval(timer);
    };
  }, [])


  return (
    <section className="hero theme-dark">
      { props.slides && 
        <div className="hero-image" style={{ backgroundImage: "url("+currentImage.path+")" }}></div>
      }
      <div className="hero-overlay">
        <h1 className="hero-title">Portfolio made easy.</h1>
        <h2 className="hero-subtitle">Every creator needs a great portfolio.</h2>
      </div>
    </section>
  )
}

Hero.propTypes = {
  slides: PropTypes.array
}

export default Hero;