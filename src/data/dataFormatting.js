/**
 * Formats the input data to meet the desired format.
 * @param {Object} data - The data that needs to be formatted.
 * @returns {Object} - The formatted data.
 */
function formatData(data) {
  const formattedData = JSON.parse(JSON.stringify(data));

  formattedData.user.todayScore = [
    { name: "today", score: formattedData.user.todayScore },
    { name: "remainder", score: 1 - formattedData.user.todayScore }
    ];

  formattedData.sessionDuration.sessions = formattedData.sessionDuration.sessions.map(session => {
    let dayInFrench;
    switch (session.day) {
      case 1:
        dayInFrench = "L";
        break;
      case 2:
      case 3:
        dayInFrench = "M";
        break;
      case 4:
        dayInFrench = "J";
        break;
      case 5:
        dayInFrench = "V";
        break;
      case 6:
        dayInFrench = "S";
        break;
      case 7:
        dayInFrench = "D";
        break;
      default:
        dayInFrench = "";
    }
    return {...session, dayInFrench};
  });

  formattedData.performance.data = formattedData.performance.data.map(entry => {
    let kindInFrench;
    switch (entry.kind) {
      case 1:
        kindInFrench = "Cardio";
        break;
      case 2:
        kindInFrench = "Energie";
        break;
      case 3:
        kindInFrench = "Endurance";
        break;
      case 4:
        kindInFrench = "Force";
        break;
      case 5:
        kindInFrench = "Vitesse";
        break;
      case 6:
        kindInFrench = "Intensité";
        break;
      default:
        kindInFrench = "";
    }
    return {...entry, kindInFrench};
  });

  return formattedData;
}
  
export default formatData;

  