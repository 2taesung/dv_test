import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
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
import moment from 'moment';
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

const options = {
  responsive: true,
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      drawOnChartArea: true,
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
    },
  },
};

function LineChart2(props) {
  console.log('시작')
  console.log(props);
  let envData= [...props.envData]
  let tmp_labels = [] 
  let tmp_temp_data = []
  let tmp_hum_data = []
  let tmp_co2_data = []
  envData.map((a, i) => {
    tmp_labels.push(moment(a.ts).format("MM-DD HH:mm"))
    tmp_temp_data.push(a.temp[0])
    tmp_hum_data.push(a.hum[0])
    tmp_co2_data.push(a.co2[0])
  });
  console.log(typeof(tmp_temp_data[0]))
  console.log('여기');
  let data = {
    labels: [...tmp_labels],
    datasets: [
      {
        label: '온도',
        data: tmp_labels.map((a, i) => tmp_temp_data[i]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: '습도',
        data: tmp_labels.map((a, i) => tmp_hum_data[i]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'CO2',
        data: tmp_labels.map((a, i) => tmp_co2_data[i]),
        borderColor: 'rgb(53, 162, 100)',
        backgroundColor: 'rgba(53, 162, 100, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            센서 종류
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">온도</Dropdown.Item>
            <Dropdown.Item href="#/action-2">습도</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CO2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Group
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button type='submit' variant="success">+</Button>
      </div>
      <Line options={options} data={data} style={{display:'block', margin:30, marginTop:0, height:300}}/>
    </div>
  );
}

export default LineChart2;