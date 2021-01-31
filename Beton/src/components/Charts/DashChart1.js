import React, { Component } from 'react'
import Chart from "chart.js";


export default class DashChart1 extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [100, 17, 21],
                        borderWidth: 2,
                        borderColor: '#fff',
                        pointRadius: 2,
                        pointBackgroundColor: '#000000',
                        pointStyle: 'circle',
                        pointBorderColor: '#000000'
                    }
                ]
            },
            options: {
                layout: {
                    padding: {
                        left: -10,
                        bottom: -10
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false
                        }
                    }]
                }
            },
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
