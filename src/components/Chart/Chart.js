import React from 'react';
import { Line } from 'react-chartjs-2';
// import styles from './Chart.module.css';

const Chart = ({borough, data}) => {
    console.log(borough)
    console.log(data)


            const lineChart = (
                data.length
                ? (
                <Line
                data={{
                    labels: [1950,1960,1970,1980,1990,2000,2010,2020,2030,2040],
                    datasets: [{
                        data: [data[0]._1950,data[0]._1960,data[0]._1970,data[0]._1980,data[0]._1990,data[0]._2000,data[0]._2010,data[0]._2020,data[0]._2030,data[0]._2040],
                        label: 'NYC Total',
                        borderColor: '#3333ff',
                        fill: true,
                    }
                    ]
                }}
                />) : null
                )
        
        


    return (
        <div>
        { lineChart }
        </div>
    )
}

export default Chart;