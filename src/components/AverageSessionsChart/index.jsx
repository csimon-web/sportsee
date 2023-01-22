import { func } from 'prop-types';
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../../styles/AverageSessionsChart.css';

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
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip">
        <p className="custom_tooltip__session_length">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

function AverageSessionsChart({ averageSessionsChartData }) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={averageSessionsChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} style={{ background: "#FF0000", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)", borderRadius: "5px" }}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ right: 20, left: 20 }} stroke={"#FFF"} interval={"preserveStartEnd"} tickFormatter={formattedXAxis} />
        <YAxis hide />
        <CartesianGrid horizontal={false} vertical={false} stroke="#EEE" strokeDasharray="5 5" />
        <Line type="natural" dataKey="sessionLength" dot={false} activeDot={{ stroke: "red", strokeWidth: 2, r: 3 }} unit={"min"} stroke={"#FFF"} strokeWidth={2} />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionsChart;