import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function Button({ to, picture, name }) {
  return (
    <Link to={to} className={`left_menu__nav__nav_element`}>
      <img src={picture} alt={name} />
    </Link>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  picture: '',
};

export default Button