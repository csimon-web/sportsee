import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
import '../../styles/ObjectiveChart.css';

/**
 * Formats the user's score data for use in the objective chart
 * @param {Object} user - The user data to format. Expects an object with a property "todayScore".
 * @returns {Array} Formatted score data in the form of an array of objects with "name" and "score" properties
 */
function formattedScore(user) {
    if(user && user.todayScore) {
        return [
            { name: "today", score: user.todayScore },
            { name: "remainder", score: 1 - user.todayScore }
        ];
    }
    return [];
}

/**
 * Objective chart component
 * @param {Object} user - Data used to generate the chart
 * @returns {JSX.Element} Objective chart content
 */
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
