import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DailyActivityChart from '../../components/DailyActivityChart';
import SessionDurationChart from '../../components/SessionDurationChart';
import PerformanceChart from '../../components/PerformanceChart';
import ObjectiveChart from '../../components/ObjectiveChart';
import KeyDataChart from '../../components/KeyDataChart';
import {useFetchAllData} from '../../data/api.js'
import '../../styles/Home.css'

/**
 * Home page displaying different charts and user information
 * @returns {JSX.Element} Home page content
 */
function Home() {
  const allData = useFetchAllData();

  return (
    allData ?
      <div className='home_page'>
        <div className="home_page__content">
          <div className='welcome'>
            <h1 className='welcome__hello'>Bonjour <span className='first_name'>{allData.user.userInfos.firstName}</span></h1>
            <p className='welcome__message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className='charts'>
            <div className="charts__left">
              <div className="daily_activity">
                {allData.dailyActivity.sessions.length > 0 &&<DailyActivityChart dailyActivityChartData={allData.dailyActivity.sessions} />}
              </div>
              <div className="others">
                <div className="others__average_sessions">
                  {allData.sessionDuration.sessions.length > 0 && <SessionDurationChart sessionDurationChartData={allData.sessionDuration.sessions} />}
                </div>
                <div className="others__performance">
                  {allData.performance.data.length > 0 && <PerformanceChart performanceChartData={allData.performance.data} />}
                </div>
                <div className="others__completion_of_daily_objective">
                  {allData.user && <ObjectiveChart user={allData.user} />}
                </div>
              </div>
            </div>
            <div className="charts__right">
              {Object.entries(allData.user.keyData).map(([keyName, keyValue]) => (
                <KeyDataChart key={keyName} keyName={keyName} keyValue={keyValue} />
              ))}
            </div>
          </div>
        </div>
      </div>
      : 
      <div className='home_page'>
        <div className="home_page__content">
          <p>En attente des données...</p>
        </div>
      </div>
  )
}

Home.propTypes = {
  allData: PropTypes.object.isRequired
};

Home.defaultProps = {
  allData: {}
};

export default Home
