import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ confirmed, recovered, deaths }) => {
    const barChart = (
      confirmed ? (
        <Bar
          data = {{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor :['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed, recovered, deaths],
            }]
          }}
          options={{
            legend: { display: false },
          }}
        />
      ) : null
    );
    return (
        <div className="text-dark">
            {barChart}
        </div>
    )
}

export default Chart;
