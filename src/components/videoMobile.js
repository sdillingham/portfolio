import React from 'react'
import PropTypes from 'prop-types'

const VideoMobile = ({ videoSrc, posterSrc, borderColor }) => {
    let styles = {
      borderColor: `${borderColor}`,
      borderStyle: `solid`,
      borderWidth: `28px 7px`,
      borderRadius: `28px`,
      display: `block`,
      height: `75vh`,
      outline: `none`,
    };
    return (
      <video
        style={styles}
        poster={posterSrc}
        className="videoMobile"
        controls={true}
        preload="metadata"
        crossOrigin="anonymous">
          <source src={videoSrc} type="video/mp4" />
          <track src="subtitles.vtt" kind="captions" label="English" />
      </video>
  )
}

VideoMobile.propTypes = {
  src: PropTypes.string,
  borderColor: PropTypes.string,
}

VideoMobile.defaultProps = {
  src: ``,
  borderColor: ``,
}

export default VideoMobile

