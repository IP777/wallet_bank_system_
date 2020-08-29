import React from 'react';
import Chart from 'react-google-charts';
import css from './PieChart.module.css';

const pieOptions = {
  title: '',
  pieSliceText: 'label',
  pieHole: 0,
  //   slices: [
  //     {
  //       color: "#2BB673",
  //     },
  //     {
  //       color: "#d91e48",
  //     },
  //     {
  //       color: "#007fad",
  //     },
  //     {
  //       color: "#e9a227",
  //     },
  //   ],
  legend: {
    position: 'bottom',
    alignment: 'center',
    textStyle: {
      color: '233238',
      fontSize: 14,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 10,
    top: 10,
    width: '90%',
    height: '90%',
    position: 'center',
  },
  fontName: 'Roboto',
};
const PieChart = ({ chartData }) => {
  return (
    <div className={css.PieContainer}>
      <Chart
        className={css.chart}
        // className={css.pieChart}
        chartType="PieChart"
        data={chartData}
        options={pieOptions}
        graph_id="PieChart"
        width={'100%'}
        height={'500px'}
        legend_toggle
      />
    </div>
  );
};

export default PieChart;
