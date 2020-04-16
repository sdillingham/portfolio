import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ src, borderColor }) => {
    let styles = {
      borderColor: `${borderColor}`,
      borderStyle: `solid`,
      borderWidth: `28px`,
      borderRadius: `28px`,
      display: `block`,
      height: `75vh`,
    };
    return (
      <video
        style={styles}
        className="videoDesktop"
        autoplay="true" 
        loop="true"
        crossOrigin="anonymous">
          <source src={src} type="video/mp4" />
          <track src="subtitles.vtt" kind="captions" srclang="en" label="English" />
      </video>
  )
}

Video.propTypes = {
  src: PropTypes.string,
  borderColor: PropTypes.string,
}

Video.defaultProps = {
  src: ``,
  borderColor: ``,
}

export default Video

