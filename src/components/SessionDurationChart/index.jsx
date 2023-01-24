import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea } from 'recharts';
import '../../styles/SessionDurationChart.css';

const formattedXAxis = (value) => {
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

const CustomTooltip = ({ active, payload }) => {
  CustomTooltip.propTypes = {
    active: PropTypes.bool.isRequired,
    payload: PropTypes.array.isRequired,
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
          <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ left: 20, right: 20 }} stroke="rgba(255, 255, 255, 0.6)" interval={"preserveStartEnd"} tick={{fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: 12 }}tickFormatter={formattedXAxis} />
          <YAxis hide padding={{ top: 100, bottom: 0 }} />
          <CartesianGrid horizontal={false} vertical={false} stroke="#EEE" strokeDasharray="5 5" />
          <Line type="natural" dataKey="sessionLength" dot={false} activeDot={{ stroke: "rgba(255, 255, 255, 0.6)", strokeWidth: 10, r: 5 }} stroke="rgba(255, 255, 255, 0.6)" strokeWidth={2} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="black" strokeOpacity={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionDurationChart;