const userId = 12;

// /**
//  * Fetch all data from the server for a given user
//  * @returns {object} All data required for different charts
//  */
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
  