import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/DailyActivityChart.css'

function DailyActivityChart({dailyActivityChartData}) {
  return (
    <div className="daily_activity_container">
      <p className='daily_activity_container__title'>Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          className='daily_activity_container__chart'
          data={dailyActivityChartData}
          barGap={8}
          margin={{
          top: 30, right: 0, left: 30, bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickFormatter={(index) => index + 1} />
          <YAxis orientation="right" yAxisId={1}  dataKey={"kilogram"} domain={["dataMin - 10", "dataMax + 10"]} />
          <YAxis hide dataKey={"calories"} yAxisId={2} />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="right" iconType={"circle"} wrapperStyle={{paddingBottom: "50px", paddingRight: "50px"}} />
          <Bar name="Poids (kg)" dataKey="kilogram" yAxisId={1} barSize={7} fill="#282D30" radius={[3, 3, 0, 0]} />
          <Bar name="Calories brûlées (kCal)" dataKey="calories" yAxisId={2} barSize={7} fill="#E60000" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

DailyActivityChart.propTypes = {
  dailyActivityChartData: PropTypes.array.isRequired,
};

export default DailyActivityChart