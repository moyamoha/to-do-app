import React, {useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function getStats(data) {
    return [
      data.filter(_x => _x.state === "not started").length,
      data.filter(_x => _x.state === "under work").length,
      data.filter(_x => _x.state === "done").length,
      data.filter(_x => _x.state === "expired").length,
    ]
  }

export default function Stat({src}) {
  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Todos in detail',
      },
    },
    scales: {
      yAxis: {
        max: Math.max(...getStats(src)) * 3/2
      }
    }
  };
  
  const labels = ['not started', 'under work', 'done', 'expired'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Number of each todo class',
        data: getStats(src),
        backgroundColor:['#007bff', '#ffc107', '#28a745', '#de4452'],
        borderColor: ["black", "red", "white", "green"],
        borderWidth: 1,
      },
    ],
  };
    return (
        <Bar
          options={options}
          data={data}
        />
    );
}
