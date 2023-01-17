import React, { useEffect } from 'react';
import {useFetchUser, useFetchDailyActivity, useFetchAverageSessionDuration, useFetchPerformance} from '../../data/api.js'

function Home() {
  const user = useFetchUser();
  const dailyActivity = useFetchDailyActivity();
  const averageSessionDuration = useFetchAverageSessionDuration();
  const performance = useFetchPerformance();
  const userFirstName = user?.userInfos?.firstName || '';
  const userInfos = user?.userInfos || {};
  const completionOfDailyObjective = user?.todayScore || '';
  const typesOfActivities = performance?.kind || {};
  useEffect(() => {
    console.log(user);
    console.log(dailyActivity);
    console.log(averageSessionDuration);
    console.log(performance);
  }, [performance]);
  return (
      <main>
          {user && <h1>Bonjour {userFirstName}</h1>}
          <ul>
            {Object.entries(userInfos).map(([key, value]) => (
              <li key={key}>
                {key} : {value}
              </li>
            ))}
          </ul>
          {completionOfDailyObjective && <p>{completionOfDailyObjective}</p>}
      </main>
  )
}

export default Home
