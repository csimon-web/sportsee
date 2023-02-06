import React, { useState, useEffect } from 'react';
import DataSourceSelector from '../../components/DataSourceSelector';
import DailyActivityChart from '../../components/DailyActivityChart';
import SessionDurationChart from '../../components/SessionDurationChart';
import PerformanceChart from '../../components/PerformanceChart';
import ObjectiveChart from '../../components/ObjectiveChart';
import KeyDataChart from '../../components/KeyDataChart';
import fetchAllData from '../../data/apiData.js';
import mockedData from '../../data/mockedData.js';
import formatData from '../../data/dataFormatting.js';
import '../../styles/Home.css';

function Home() {
  const [dataSource, setDataSource] = useState('API');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let allData;
        if (dataSource === 'API') {
          allData = await fetchAllData();
        } else {
          allData = mockedData;
        }
        const data = formatData(allData);
        setData(data)
        setLoading(false);
        setIsDataLoaded(true);
        console.log(data)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [dataSource]);

  return (
    <div className='home_page'>
      <div className="home_page__content">
        <div className="source_selector">
          <DataSourceSelector setDataSource={setDataSource} />
        </div>
        {loading && <p>Chargement des données...</p>}
          {error && (
            <p>
              Erreur lors de la récupération des données: {error.message}
            </p>
          )}
        {isDataLoaded && data && Object.keys(data).length > 0 ? (
        <>
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
        </>
        ) : (
        <p>Aucune donnée disponible</p>
      )}
      </div>
    </div>
  )
}

export default Home;
