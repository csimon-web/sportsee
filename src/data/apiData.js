// import { useState, useEffect } from 'react';

// const userId = 12;
// /**
//  * Fetch all data from the server for a given user
//  * @returns {object} All data required for different charts
//  */
// export function fetchAllData() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [user, dailyActivity, sessionDuration, performance] = await Promise.all([
//                     fetch(`http://localhost:3000/user/${userId}`).then(response => response.json()).then(data => data.data),
//                     fetch(`http://localhost:3000/user/${userId}/activity`).then(response => response.json()).then(data => data.data),
//                     fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(response => response.json()).then(data => data.data),
//                     fetch(`http://localhost:3000/user/${userId}/performance`).then(response => response.json()).then(data => data.data)
//                 ]);

//                 setData({ user, dailyActivity, sessionDuration, performance });
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { data, error, loading };
// }

const userId = 12;

/* eslint-disable no-useless-catch */
async function fetchAllData() {
  let data = null;
  let error = null;
  let loading = true;

  try {
    const [user, dailyActivity, sessionDuration, performance] = await Promise.all([
      fetch(`http://localhost:3000/user/${userId}`).then(response => response.json()).then(data => data.data),
      fetch(`http://localhost:3000/user/${userId}/activity`).then(response => response.json()).then(data => data.data),
      fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(response => response.json()).then(data => data.data),
      fetch(`http://localhost:3000/user/${userId}/performance`).then(response => response.json()).then(data => data.data)
    ]);
  
    data = { user, dailyActivity, sessionDuration, performance };
  } catch (e) {
    error = e;
  } finally {
    loading = false;
  }

  return { data, error, loading };
}

export default fetchAllData;
  