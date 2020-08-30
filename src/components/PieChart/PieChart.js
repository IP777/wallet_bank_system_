import React, { useState, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import css from './PieChart.module.css';

function PieChartComponent(props) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  return (
    <div className={css.wrapper}>
      <div className={css.innerWrapper}>
        <PieChart
          style={{
            fontFamily:
              '"Myriad Pro", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: '8px',
            fontWeight: '200',
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          center={[50, 50]}
          viewBoxSize={[100, 100]}
          data={data}
          startAngle={0}
          radius={PieChart.defaultProps.radius}
          segmentsStyle={{
            transition: 'stroke .3s',
            cursor: 'pointer',
          }}
          segmentsShift={0.3}
          animate
          label={({ dataEntry }) => dataEntry.title}
          labelPosition={70}
          labelStyle={{
            fill: '#fff',
            opacity: 1,
            pointerEvents: 'none',
          }}
          onClick={(_, index) => {
            setSelected(index === selected ? undefined : index);
          }}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={() => {
            setHovered(undefined);
          }}
        />
      </div>
    </div>
  );
}

export default PieChartComponent;
