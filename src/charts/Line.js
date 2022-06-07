import React from 'react';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'ec',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'ph',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: '수온',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: 'rgb(53, 162, 100)',
      backgroundColor: 'rgba(53, 162, 100, 0.5)',
    },
  ]
};

function LineChart() {
  return <Line data={data} style={{display:'block', marginLeft:50}}/>;
};

export default LineChart;