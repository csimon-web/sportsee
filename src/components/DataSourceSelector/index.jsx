import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DataSourceSelector = ({ setDataSource }) => {
  const [dataSource, setDataSourceState] = useState('API');

  const handleOptionChange = (e) => {
    setDataSourceState(e.target.value);
    setDataSource(e.target.value);
  };

  return (
    <div>
      <p>Je souhaite importer les données</p>
      <label>
        <input
          type="radio"
          value="API"
          checked={dataSource === 'API'}
          onChange={handleOptionChange}
        />
        depuis l&apos;API
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="MockedData"
          checked={dataSource === 'MockedData'}
          onChange={handleOptionChange}
        />
        depuis les données mockées
      </label>
    </div>
  );
};

DataSourceSelector.propTypes = {
  setDataSource: PropTypes.func.isRequired,
};

export default DataSourceSelector;
