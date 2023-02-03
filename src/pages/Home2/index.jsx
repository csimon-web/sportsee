import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataSourceSelector from '../../components/DataSourceSelector';
import DailyActivityChart from '../../components/DailyActivityChart';
import SessionDurationChart from '../../components/SessionDurationChart';
import PerformanceChart from '../../components/PerformanceChart';
import ObjectiveChart from '../../components/ObjectiveChart';
import KeyDataChart from '../../components/KeyDataChart';
import fetchAllData from '../../data/apiData2.js';
import mockedData from '../../data/mockedData.js';
import formatData from '../../data/dataFormatting.js';
import '../../styles/Home.css';

function Home2() {
  const [dataSource, setDataSource] = useState('API');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setData(allData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [dataSource]);


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

  if (!loading && !error) {
    const formattedData = formatData(data)
    console.log("data")
    console.log(data)
    // console.log("user")
    // console.log(data.user)
    // console.log("dailyActivity")
    // console.log(data.dailyActivity)
    // console.log("sessionDuration")
    // console.log(data.sessionDuration)
    // console.log("performance")
    // console.log(data.performance)

    console.log("formattedData")
    console.log(formattedData)

    // return (
    //   <div>
    //     {data.map((object, index) => (
    //       <div key={index}>
    //         <p>{object}</p>
    //       </div>
    //     ))}
    //   </div>
    // );

  }

  // if (formattedData && Object.keys(formattedData).length > 0) {
  //   return (
  //     <div className='home_page'>
  //       <div className="home_page__content">
  //         <div className="source_selector">
  //           <DataSourceSelector setDataSource={setDataSource} />
  //         </div>
  //         <div className='welcome'>
  //           <h1 className='welcome__hello'>Bonjour <span className='first_name'>{formattedData.user.userInfos.firstName}</span></h1>
  //           <p className='welcome__message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  //         </div>
  //         <div className='charts'>
  //           <div className="charts__left">
  //             <div className="daily_activity">
  //               {formattedData.dailyActivity.sessions.length > 0 &&<DailyActivityChart dailyActivityChartData={formattedData.dailyActivity.sessions} />}
  //             </div>
  //             <div className="others">
  //               <div className="others__average_sessions">
  //                 {formattedData.sessionDuration.sessions.length > 0 && <SessionDurationChart sessionDurationChartData={formattedData.sessionDuration.sessions} />}
  //               </div>
  //               <div className="others__performance">
  //                 {formattedData.performance.data.length > 0 && <PerformanceChart performanceChartData={formattedData.performance.data} />}
  //               </div>
  //               <div className="others__completion_of_daily_objective">
  //                 {formattedData.user && <ObjectiveChart user={formattedData.user} />}
  //               </div>
  //             </div>
  //           </div>
  //           <div className="charts__right">
  //             {Object.entries(formattedData.user.keyData).map(([keyName, keyValue]) => (
  //               <KeyDataChart key={keyName} keyName={keyName} keyValue={keyValue} />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className='home_page'>
  //       <div className="home_page__content">
  //         <p>Aucune donnée disponible</p>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Home2;

