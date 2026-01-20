"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {

    const data = {
        datasets: [
            {
                label: 'Accounts',
                data: [1250, 2500, 3750],
                backgroundColor: ['#08609bff', '#36A2EB', '#007ccfff']
            }
        ],
        labels: ['Savings', 'Checking', 'Credit']
    }
    return (
        <Doughnut 
        data={data} 
        options={{
            cutout: "60%",
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                },
            },
        }}
        
        />
    )
}

export default DoughnutChart