import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

/**
 * Navigation button component
 * @param {Object} props - Component props
 * @param {string} props.to - The route to navigate to when the button is clicked
 * @param {string} props.picture - The url for the button's picture
 * @param {string} props.name - The name of the button
 * @returns {JSX.Element} Navigation button content
 */
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