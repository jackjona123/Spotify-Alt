import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';

const UserDetails = ({ userImage, displayName }) => (
  <div className="user-details-container">
    <img
      alt="user"
      className="user-image"
      src={userImage ? userImage : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'}
    />
    <p className="user-name">{displayName}</p>
  </div>
);

UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string,
};

export default UserDetails;