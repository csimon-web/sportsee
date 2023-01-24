import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
import '../../styles/ObjectiveChart.css';

function formattedScore(user) {
    if(user && user.todayScore) {
      return [
        { name: "today", score: user.todayScore },
        { name: "remainder", score: 1 - user.todayScore }
      ];
    }
    return [];
  }

function ObjectiveChart({ user }) {
    const COLORS = ['#FF0000', '#FFF'];
    return (
        <div className="objective_chart_container">
            <p className='objective_chart_container__title'>Score</p>
            <ResponsiveContainer width='100%' height={300}>
                <PieChart>
                    <Pie
                        className='objective_chart_container__chart'
                        data={formattedScore(user)}
                        cy={150}
                        startAngle={90}
                        endAngle={450}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#000000"
                        paddingAngle={0}
                        dataKey="score"
                    >
                    {formattedScore(user).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <p className="objective_chart_container__message"><span className='objective_chart_container__message__score'>{user.todayScore * 100}%</span><br />de votre<br />objectif</p>
        </div>
    );
}

ObjectiveChart.propTypes = {
    user: PropTypes.object.isRequired
}

export default ObjectiveChart;
  


// import React from 'react';
// import PropTypes from 'prop-types';
// import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
// import '../../styles/ObjectiveChart.css';

// function formattedScore(user) {
//     if(user && user.todayScore) {
//       return [
//         { name: "today", score: user.todayScore, fill: "#FF0000" }
//         // ,
//         // { name: "remainder", score: 1 - user.todayScore }
//       ];
//     }
//     return [];
// }

// const data = [
//     {
//       "name": "18-24",
//       "uv": 31.47,
//       "pv": 2400,
//       "fill": "#8884d8"
//     },
//     {
//       "name": "25-29",
//       "uv": 26.69,
//       "pv": 4567,
//       "fill": "#83a6ed"
//     }
// ]

// function ObjectiveChart({ user }) {
//     return (
//         <div className="objective_chart_container">
//             <p className='objective_chart_container__title'>Score</p>
//             <ResponsiveContainer width='100%' height={300}>
//                 <RadialBarChart
//                     className='objective_chart_container__chart'
//                     data={data} 
//                     startAngle={90} 
//                     endAngle={450} >
//                     <RadialBar 
//                         dataKey= "pv" 
//                         fill= '#FF0000'  />
//                     <PolarAngleAxis type="number" />
//                     <circle cx="50%" cy="50%" fill="#FFF" r="85"></circle>
//                 </RadialBarChart>
//             </ResponsiveContainer>
//             <p className="objective_chart_container__message"><span className='objective_chart_container__message__score'>{user.todayScore * 100}%</span><br />de votre<br />objectif</p>
//         </div>
//     );
// }

// ObjectiveChart.propTypes = {
//     user: PropTypes.object.isRequired
// }

// export default ObjectiveChart;
  