import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
// import '../../styles/PerformanceChart.css'

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


function PerformanceChart({ performanceChartData }) {

    const formattedData = performanceChartData.map(data => ({
        ...data,
        name: formattedPolarAngleData(data.kind)
    }));

    return (
        <ResponsiveContainer width='100%' height={300}>
            <RadarChart data={formattedData} style={{ background: "#282D30", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)", borderRadius: "5px" }} startAngle={-150} endAngle={210}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
};
    
export default PerformanceChart;