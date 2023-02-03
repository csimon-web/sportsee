import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataSourceSelector from '../../components/DataSourceSelector';
import DailyActivityChart from '../../components/DailyActivityChart';
import SessionDurationChart from '../../components/SessionDurationChart';
import PerformanceChart from '../../components/PerformanceChart';
import ObjectiveChart from '../../components/ObjectiveChart';
import KeyDataChart from '../../components/KeyDataChart';
import {fetchAllData} from '../../data/apiData.js'
import mockedData from '../../data/mockedData.js'
import '../../styles/Home.css'

const userId = 12;

/**
 * Home page displaying different charts and user information
 * @returns {JSX.Element} Home page content
 */
function Home() {
  // const [dataSource, setDataSource] = useState('API');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isDataLoaded, setIsDataLoaded] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     setError(null);

  //     try {
  //       let fetchedData;
  //       if (dataSource === 'API') {
  //         fetchedData = await fetchAllData();
  //       } else if (dataSource === 'Mock') {
  //         fetchedData = mockedData;
  //       }
  //       setData(fetchedData);
  //       setIsDataLoaded(true);
  //     } catch (err) {
  //       setError(err);
  //     }
    
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [dataSource]);

  // const handleDataSourceSelection = () => {
  // setIsDataLoaded(false);
  // setData({});
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
        // const [user, dailyActivity, sessionDuration, performance] = await Promise.all([
        //   fetch(`http://localhost:3000/user/${userId}`).then(response => response.json()).then(data => data.data),
        //   fetch(`http://localhost:3000/user/${userId}/activity`).then(response => response.json()).then(data => data.data),
        //   fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(response => response.json()).then(data => data.data),
        //   fetch(`http://localhost:3000/user/${userId}/performance`).then(response => response.json()).then(data => data.data),
        // ]);
  //       setData({ user, dailyActivity, sessionDuration, performance });
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return (
  //   <div>
  //     <DataSourceSelector setDataSource={setDataSource} />
  //     {loading ? (
  //     <p>Loading...</p>
  //     ) : error ? (
  //     <p>Error: {error.message}</p>
  //     ) : (
  //     <p>Data: {JSON.stringify(data)}</p>
  //     )}
  //   </div>
  // );

  // useEffect(() => {
  //   if (dataSource === 'API') {
  //     const { data: fetchedData, error, loading } = fetchAllData();
  //     setData(fetchedData);
  //   } else {
  //     // load mocked data
  //   }
  // }, [dataSource]);

  // return (
  //   <div>
  //     <DataSourceSelector setDataSource={setDataSource} />
  //     { data && <div>Data: {JSON.stringify(data)}</div> }
  //   </div>
  // );



  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await fetchAllData();
        setData(allData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      {/* Render data here */}
    </div>
  );








};






//   return (
//     <div className='home_page'>
//       <div className="home_page__content">
//         <DataSourceSelector dataSource={dataSource} setDataSource={setDataSource} handleDataSourceSelection={handleDataSourceSelection} />
//         {loading && <p>Chargement des données...</p>}
//         {error && (
//           <p>
//             Erreur lors de la récupération des données: {error.message}
//           </p>
//         )}
//         {isDataLoaded && data && Object.keys(data).length > 0 && (
//           <>
//             <div className='welcome'>
//               <h1 className='welcome__hello'>Bonjour <span className='first_name'>{data.user.userInfos.firstName}</span></h1>
//               <p className='welcome__message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
//             </div>
//             <div className='charts'>
//               <div className="charts__left">
//                 <div className="daily_activity">
//                   {data.dailyActivity.sessions.length > 0 &&<DailyActivityChart dailyActivityChartData={data.dailyActivity.sessions} />}
//                 </div>
//                 <div className="others">
//                   <div className="others__average_sessions">
//                     {data.sessionDuration.sessions.length > 0 && <SessionDurationChart sessionDurationChartData={data.sessionDuration.sessions} />}
//                   </div>
//                   <div className="others__performance">
//                     {data.performance.data.length > 0 && <PerformanceChart performanceChartData={data.performance.data} />}
//                   </div>
//                   <div className="others__completion_of_daily_objective">
//                     {data.user && <ObjectiveChart user={data.user} />}
//                   </div>
//                 </div>
//               </div>
//               <div className="charts__right">
//                 {Object.entries(data.user.keyData).map(([keyName, keyValue]) => (
//                   <KeyDataChart key={keyName} keyName={keyName} keyValue={keyValue} />
//                 ))}
//               </div>
//             </div>
//           </>
//         )}
//         {!data || Object.keys(data).length === 0 && (
//           <p>Aucune donnée disponible</p>
//         )}
//       </div>
//     </div>
//   )
// }

// Home.propTypes = {
//   data: PropTypes.object.isRequired
// };

// Home.defaultProps = {
//   data: {}
// };

export default Home
