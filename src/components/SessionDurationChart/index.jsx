import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea } from 'recharts';
import '../../styles/SessionDurationChart.css';

/**
 * Custom tooltip component for the session duration chart
 * @param {Object} props - Component props
 * @param {bool} props.active - Determines if the tooltip is active
 * @param {array} props.payload - Array of data to be displayed in the tooltip
 * @returns {JSX.Element} Custom tooltip content
 */
const CustomTooltip = ({ active, payload }) => {
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip">
        <p className="custom_tooltip__session_length">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Session duration chart component
 * @param {Object} sessionDurationChartData - Data used to generate the chart. Expects an array of objects with properties "day" and "sessionLength".
 * @returns {JSX.Element} Session duration chart content
 */
function SessionDurationChart({ sessionDurationChartData }) {
  SessionDurationChart.propTypes = {
    sessionDurationChartData: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  return (
    <div className="average_sessions_chart_container">
      <p className='average_sessions_chart_container__title'>Durée moyenne des sessions</p>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart className='average_sessions_chart_container__chart' data={sessionDurationChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} style={{ background: "#FF0000", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)", borderRadius: "5px" }}>
          <XAxis dataKey="dayInFrench" axisLine={false} tickLine={false} padding={{ left: 20, right: 20 }} stroke="rgba(255, 255, 255, 0.6)" interval={"preserveStartEnd"} tick={{fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: 12 }} />
          <YAxis hide padding={{ top: 100, bottom: 0 }} />
          <CartesianGrid horizontal={false} vertical={false} stroke="#EEE" strokeDasharray="5 5" />
          <Line type="natural" dataKey="sessionLength" dot={false} activeDot={{ stroke: "rgba(255, 255, 255, 0.6)", strokeWidth: 10, r: 5 }} stroke="rgba(255, 255, 255, 0.6)" strokeWidth={2} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="black" strokeOpacity={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionDurationChart;