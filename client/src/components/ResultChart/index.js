import React from 'react';
import { VictoryPie } from 'victory';
import palette from '../../styles/theme';
import { useSelector } from 'react-redux';

const ResultChart = () => {
  const volatility = useSelector((state) => state.prediction.prediction);
  const chartScore = volatility * (100 / 60);

  let elseScore = 100 - chartScore;
  let resultColor;

  if (volatility < 10) {
    resultColor = `${palette.green}`;
  } else if (volatility < 30) {
    resultColor = `${palette.orange}`;
  } else {
    resultColor = `${palette.red}`;
  }

  const color = [`${palette.gray}`, `${resultColor}`];

  const sampleData = [
    { label: ` `, y: elseScore },
    { label: `${volatility}`, y: chartScore },
  ];

  return (
    <>
      <VictoryPie
        innerRadius={100}
        startAngle={90}
        endAngle={-90}
        data={sampleData}
        colorScale={color}
        width={400}
        height={400}
        // labelRadius={20}
        style={{
          labels: {
            fill: `${resultColor}`,
            fontSize: 20,
          },
        }}
        padAngle={1}
        cornerRadius={10}
      />
    </>
  );
};

export default ResultChart;
