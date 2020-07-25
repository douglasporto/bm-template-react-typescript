import React, { useMemo, useState } from 'react';
import { Line, ChartData } from 'react-chartjs-2';
import { format, eachDayOfInterval, getMonth } from 'date-fns';

import { ChartData as IChartData } from 'chart.js';

import chartConfig from '../../../../utils/chart';

import monthsData from './simulatorApi';

interface ILineChartProps {
  data?: ChartData<IChartData>;
  height?: number;
  selectedDays: Date[];
}

const dataSets = {
  label: 'Projetos',
  fill: false,
  lineTension: 0.5,
  backgroundColor: '#7051dc',
  borderColor: '#7051dc',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'round',
  pointBorderColor: '#7051dc',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: '#7051dc',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
};

const dataInit = {
  datasets: [
    {
      ...dataSets,
      data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 90],
    },
  ],
};

const LineChart: React.FC<ILineChartProps> = ({ height, selectedDays }) => {
  const [data, setData] = useState(dataInit);
  const labelSelectedDays = useMemo(() => {
    const [start, end] = selectedDays;

    const parsedDays = eachDayOfInterval({
      start,
      end,
    });
    const month = getMonth(start);
    setData({
      datasets: [
        {
          ...dataSets,
          data: monthsData[month].total,
        },
      ],
    });
    return parsedDays.map((date) => format(date, 'dd/MM'));
  }, [selectedDays, setData]);

  return (
    <Line
      data={{ ...data, labels: labelSelectedDays } as ChartData<IChartData>}
      height={height || 80}
      options={chartConfig.line.options}
    />
  );
};

export default LineChart;
