import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
// import '../../styles/PerformanceChart.css'

/**
 * Formats the angle data of the performance chart
 * @param {number} value - The data to format. It should be a number representing the kind of data.
 * @returns {string} Formatted data to display on the performance chart. The returned value will be "Cardio" when value is 1, "Energie" when value is 2, etc.
 */
const formattedPolarAngleData = (value) => {
    switch(value) {
      case 1:
        return 'Cardio';
      case 2:
        return 'Energie';
      case 3:
        return 'Endurance';
      case 4:
        return 'Force';
      case 5:
        return 'Vitesse';
      case 6:
        return 'Intensité';
      default:
        return value;
    }
}

/**
 * Performance chart component
 * @param {Object} performanceChartData - Data used to generate the chart. Expects an array of objects with properties "kind" and "value".
 * @returns {JSX.Element} Performance chart content
 */
function PerformanceChart({ performanceChartData }) {
  PerformanceChart.propTypes = {
    performanceChartData: PropTypes.arrayOf(PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
  };

  const formattedData = performanceChartData.map(data => ({
      ...data,
      name: formattedPolarAngleData(data.kind)
  }));

  return (
      <ResponsiveContainer width='100%' height={300}>
          <RadarChart data={formattedData} style={{ background: "#282D30", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)", borderRadius: "5px" }} startAngle={-150} endAngle={210} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="name" stroke="#FFF" tickLine={false} tick={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: 12 }}/>
              {/* <PolarRadiusAxis angle="90" axisLine={false} tickCount="6" /> */}
              <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
      </ResponsiveContainer>
  );
};
    
export default PerformanceChart;
