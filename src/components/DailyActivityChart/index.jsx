import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../styles/DailyActivityChart.css'

/**
 * Custom tooltip component for the daily activity chart
 * @param {Object} props - Component props
 * @param {bool} props.active - Determines if the tooltip is active
 * @param {array} props.payload - Array of data to be displayed in the tooltip
 * @returns {JSX.Element} Custom tooltip content
 */
const CustomTooltip = ({ active, payload }) => {
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  }
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip" style={{ width: "39px", border: "none" }}>
        <p className="custom_tooltip__kilogram" style={{ background: "#E60000", margin: 0, fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: "7px", lineHeight: "24px", textAlign: "center", color: "#FFFFFF" }}>{`${payload[0].value}kg`}</p>
        <p className="custom_tooltip__calories" style={{ background: "#E60000", margin: 0, fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: "7px", lineHeight: "24px", textAlign: "center", color: "#FFFFFF" }}>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Daily activity chart component
 * @param {Object} dailyActivityChartData - Data used to generate the chart
 * @returns {JSX.Element} Daily activity chart content
 */
function DailyActivityChart({ dailyActivityChartData }) {
  return (
    <div className="daily_activity_chart_container">
      <p className='daily_activity_chart_container__title'>Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          className='daily_activity_chart_container__chart'
          data={dailyActivityChartData}
          barGap={8}
          margin={{
          top: 30, right: 0, left: 30, bottom: 20,
          }}
        >
          <XAxis axisLine={false} tickFormatter={(index) => index + 1} />
          <YAxis axisLine={false} orientation="right" yAxisId={1} dataKey={"kilogram"}  domain={["dataMin - 10", "dataMax + 10"]} />
          <YAxis hide dataKey={"calories"} yAxisId={2} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="horizontal" width="600" verticalAlign="top" align="right" iconType={"circle"} wrapperStyle={{paddingBottom: "50px", paddingRight: "30px"}} />
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