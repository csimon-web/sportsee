import React, { useState, useEffect } from 'react';
import DailyActivityChart from '../../components/DailyActivityChart';
import SessionDurationChart from '../../components/SessionDurationChart';
import PerformanceChart from '../../components/PerformanceChart';
import ObjectiveChart from '../../components/ObjectiveChart';
import KeyDataChart from '../../components/KeyDataChart';
import {useFetchUser, useFetchDailyActivity, useFetchSessionDuration, useFetchPerformance} from '../../data/api.js'
import '../../styles/Home.css'

function Home() {
  const user = useFetchUser();
  const dailyActivity = useFetchDailyActivity();
  const sessionDuration = useFetchSessionDuration();
  const performance = useFetchPerformance();

  const userFirstName = user?.userInfos?.firstName || '';
  const [dailyActivityChartData, setDailyActivityChartData] = useState([]);
  const [sessionDurationChartData, setSessionDurationChartData] = useState([]);
  const [performanceChartData, setPerformanceChartData] = useState([]);
  const [objectiveChartData, setObjectiveChartData] = useState([]);
  // const completionOfDailyObjectiveChartData = user?.todayScore || '';
  const keyDataChartData = user?.keyData || {};

  useEffect(() => {
    if(dailyActivity){
      setDailyActivityChartData(dailyActivity.sessions);
    }
    if(sessionDuration){
      setSessionDurationChartData(sessionDuration.sessions);
    }
    if(performance){
      setPerformanceChartData(performance.data);
    }
    if(user){
      setObjectiveChartData(user);
    }
    console.log(user);
    console.log(dailyActivity);
    console.log(sessionDuration);
    console.log(performance);
  }, [dailyActivity, sessionDuration, performance, user]);

  return (
    <div className='home_page'>
      <div className="home_page__content">
        <div className='welcome'>
          <h1 className='welcome__hello'>Bonjour <span className='first_name'>{userFirstName}</span></h1>
          <p className='welcome__message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className='charts'>
          <div className="charts__left">
            <div className="daily_activity">
              {dailyActivityChartData.length > 0 &&<DailyActivityChart dailyActivityChartData={dailyActivityChartData} />}
            </div>
            <div className="others">
              <div className="others__average_sessions">
                {sessionDurationChartData.length > 0 && <SessionDurationChart sessionDurationChartData={sessionDurationChartData} />}
              </div>
              <div className="others__performance">
                {performanceChartData.length > 0 && <PerformanceChart performanceChartData={performanceChartData} />}
              </div>
              <div className="others__completion_of_daily_objective">
              {user && <ObjectiveChart user={user} />}
              </div>
            </div>
          </div>
          <div className="charts__right">
            {Object.entries(keyDataChartData).map(([keyName, keyValue]) => (
              <KeyDataChart key={keyName} keyName={keyName} keyValue={keyValue} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
