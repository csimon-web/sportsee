import React from 'react';
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
  const { data, error, loading } = useFetchAllData();

  if (loading) {
    return (
      <div className='home_page'>
        <div className="home_page__content">
          <p>Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='home_page'>
        <div className="home_page__content">
          <p>Erreur lors de la récupération des données: {error.message}</p>
        </div>
      </div>
    );
  }

  if (data && Object.keys(data).length > 0) {
    return (
      <div className='home_page'>
        <div className="home_page__content">
          <div className='welcome'>
            <h1 className='welcome__hello'>Bonjour <span className='first_name'>{data.user.userInfos.firstName}</span></h1>
            <p className='welcome__message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className='charts'>
            <div className="charts__left">
              <div className="daily_activity">
                {data.dailyActivity.sessions.length > 0 &&<DailyActivityChart dailyActivityChartData={data.dailyActivity.sessions} />}
              </div>
              <div className="others">
                <div className="others__average_sessions">
                  {data.sessionDuration.sessions.length > 0 && <SessionDurationChart sessionDurationChartData={data.sessionDuration.sessions} />}
                </div>
                <div className="others__performance">
                  {data.performance.data.length > 0 && <PerformanceChart performanceChartData={data.performance.data} />}
                </div>
                <div className="others__completion_of_daily_objective">
                  {data.user && <ObjectiveChart user={data.user} />}
                </div>
              </div>
            </div>
            <div className="charts__right">
              {Object.entries(data.user.keyData).map(([keyName, keyValue]) => (
                <KeyDataChart key={keyName} keyName={keyName} keyValue={keyValue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='home_page'>
        <div className="home_page__content">
          <p>Aucune donnée disponible</p>
        </div>
      </div>
    );
  }

}

Home.propTypes = {
  data: PropTypes.object.isRequired
};

Home.defaultProps = {
  data: {}
};

export default Home
