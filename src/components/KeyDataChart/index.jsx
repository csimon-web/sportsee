import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/KeyData.css'

/**
 * Key data component
 * @param {Object} props - Component props
 * @param {string} props.keyName - Name of the key data to display
 * @param {number} props.keyValue - Value of the key data to display
 * @returns {JSX.Element} Key data content
 */
const KeyData = ({ keyName, keyValue }) => {
  let icon;
  let name;
  let unit;
  switch (keyName) {
    case 'calorieCount':
      icon = <img src={require('../../assets/calories-icon.png')} alt="Calories" />;
      name = "Calories";
      unit = "kCal";
      break;
    case 'proteinCount':
      icon = <img src={require('../../assets/protein-icon.png')} alt="Protéines" />;
      name = "Protéines";
      unit = "g";
      break;
    case 'carbohydrateCount':
      icon = <img src={require('../../assets/carbs-icon.png')} alt="Glucides" />;
      name = "Glucides";
      unit = "g";
      break;
    case 'lipidCount':
      icon = <img src={require('../../assets/fat-icon.png')} alt="Lipides" />;
      name = "Lipides";
      unit = "g";
      break;
    default:
      icon = null;
      name = null;
      unit = null;
  }
  return (
    <div className="key_data">
      <div className='key_data__icon'>{icon}</div>
      <div className="key_data__data">
        <p className='key_data__data__amount'>{keyValue}{unit}</p>
        <p className='key_data__data__name'>{name}</p>
      </div>
    </div>
  )
}

KeyData.propTypes = {
  keyName: PropTypes.string.isRequired,
  keyValue: PropTypes.number.isRequired
};

export default KeyData;