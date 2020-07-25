import React from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Orders: this.props.Orders,
            BarC: {
                dataBar: {
                    labels: ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"],
                    datasets: [
                        {
                            label: "",
                            data: null,
                            backgroundColor: [
                                "rgba(255, 134,159,0.4)",
                                "rgba(98,  182, 239,0.4)",
                                "rgba(255, 218, 128,0.4)",
                                "rgba(113, 205, 205,0.4)",
                                "rgba(170, 128, 252,0.4)",
                                "rgba(255, 177, 101,0.4)"
                            ],
                            borderWidth: 2,
                            borderColor: [
                                "rgba(255, 134, 159, 1)",
                                "rgba(98,  182, 239, 1)",
                                "rgba(255, 218, 128, 1)",
                                "rgba(113, 205, 205, 1)",
                                "rgba(170, 128, 252, 1)",
                                "rgba(255, 177, 101, 1)"
                            ]
                        }
                    ]
                },
                barChartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                barPercentage: 1,
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
    componentDidMount() {

        this.OrderBarChart();

    }

    OrderBarChart = () => {
        let daysArray = [];
        this.props.Orders.map((order) => {
            var d = new Date(order.reservationDate)
            daysArray.push(d.getDay() + 1);
        })
        let b = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
        };
        daysArray.forEach(el => {
            if (el === 1) { b[0] += 1 }
            if (el === 2) { b[1] += 1 }
            if (el === 3) { b[2] += 1 }
            if (el === 4) { b[3] += 1 }
            if (el === 5) { b[4] += 1 }
            if (el === 6) { b[5] += 1 }
            if (el === 7) { b[6] += 1 }
        });

        this.setState({
            BarC: {
                dataBar: {
                    labels: ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"],
                    datasets: [
                        {
                            label: "",
                            data: Object.values(b),
                            backgroundColor: [
                                "rgba(255, 134,159,0.4)",
                                "rgba(98,  182, 239,0.4)",
                                "rgba(255, 218, 128,0.4)",
                                "rgba(113, 205, 205,0.4)",
                                "rgba(170, 128, 252,0.4)",
                                "rgba(255, 177, 101,0.4)"
                            ],
                            borderWidth: 2,
                            borderColor: [
                                "rgba(255, 134, 159, 1)",
                                "rgba(98,  182, 239, 1)",
                                "rgba(255, 218, 128, 1)",
                                "rgba(113, 205, 205, 1)",
                                "rgba(170, 128, 252, 1)",
                                "rgba(255, 177, 101, 1)"
                            ]
                        }
                    ]
                },
                barChartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [
                            {
                                barPercentage: 1,
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            }
        });
    }
    
    render() {
        return (
            <div>
                <h3 style={textStyle} className="mt-5">{this.props.header}</h3>
                <p style={textStyle}> {this.props.description}</p>
                <div style={{ height: this.props.height, width: this.props.width, position:'relative' }}>
                    <Bar data={this.state.BarC.dataBar} options={this.state.BarC.barChartOptions, {responsive: true,  maintainAspectRatio: false}} />
                </div>
            </div>
        );
    }
}
export default BarChart;

const textStyle = {
    textAlign: 'center'
}