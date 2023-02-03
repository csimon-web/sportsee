function formatXAxisSessionDurationChart(value) {
  switch(value) {
    case 1:
      return 'L';
    case 2:
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
    default:
      return value;
  }
}

// function formatUser(data.user) {
//   return {
//     user: {
//       id: data.user.id,
//       userInfos: {
//         firstName: data.user.userInfos.firstName,
//         lastName: data.user.userInfos.lastName,
//         age: data.user.userInfos.age
//       },
//       todayScore: data.user.todayScore,
//       keyData: {
//         calorieCount: data.user.keyData.calorieCount,
//         proteinCount: data.user.keyData.proteinCount,
//         carbohydrateCount: data.user.keyData.carbohydrateCount,
//         lipidCount: data.user.keyData.lipidCount
//       }
//     }
//   }
// }

// export default formatUser;

function formatData(data) {
  const formattedData = JSON.parse(JSON.stringify(data));
  console.log(formattedData.user.id)
  // const formattedData = {...data}
  // formattedData.sessionDuration.sessions = formattedData.sessionDuration.sessions.map(session => {
  //   let dayInFrench;
  //   switch (session.day) {
  //     case 1:
  //       dayInFrench = "L";
  //       break;
  //     case 2:
  //     case 3:
  //       dayInFrench = "M";
  //       break;
  //     case 4:
  //     case 5:
  //       dayInFrench = "Me";
  //       break;
  //     case 6:
  //     case 7:
  //       dayInFrench = "J";
  //       break;
  //     default:
  //       dayInFrench = "";
  //   }
  //   return {...session, dayInFrench};
  // });
  return formattedData;
}
  
export default formatData;

  