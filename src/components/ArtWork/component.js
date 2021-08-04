import React from 'react';
import PropTypes from 'prop-types';
import './ArtWork.css';

const ArtWork = (albumArtwork) => (
  <div className="album-artwork-container">
    <img
      alt="artwork"
      className="album-artwork"
      src={
        albumArtwork.albumImage
          ? albumArtwork.albumImage
          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/800px-HD_transparent_picture.png'
      }
    />
  </div>
);

ArtWork.propTypes = {
  albumArtwork: PropTypes.string,
};

export default ArtWork;