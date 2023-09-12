import React, { Component } from "react";
import Chart from "react-apexcharts";



const Donut = ({ labels = [], series = [], width = "100%" }) => {
	const state = {
		options: {
			labels: labels,
			plotOptions: {
				pie: {
					donut: {
						labels: {
							show: true,
							total: {
								showAlways: true,
								show: true
							}
						}
					}
				}
			},
		},
		series: series,
	};

	return (
		<Chart
			options={state.options}
			series={state.series}
			type="donut"
			height={385}
		/>
	);
};

export default Donut;
