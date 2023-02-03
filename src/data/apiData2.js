const userId = 12;

/* eslint-disable no-useless-catch */
async function fetchAllData() {
  try {
    const [user, dailyActivity, sessionDuration, performance] = await Promise.all([
      fetch(`http://localhost:3000/user/${userId}`).then(response => response.json()).then(data => data.data),
      fetch(`http://localhost:3000/user/${userId}/activity`).then(response => response.json()).then(data => data.data),
      fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(response => response.json()).then(data => data.data),
      fetch(`http://localhost:3000/user/${userId}/performance`).then(response => response.json()).then(data => data.data)
    ]);
  
    return { user, dailyActivity, sessionDuration, performance };
  } catch (error) {
    throw error;
  }
};

export default fetchAllData;