import React from 'react';
import { Pie } from 'react-chartjs';

console.log('Pie', Pie);

const PieChart = ({ chartData, chartOptions }) => {
  return (
    <Pie data={chartData} options={chartOptions} width="600" height="250" />
  );
};

export default PieChart;
