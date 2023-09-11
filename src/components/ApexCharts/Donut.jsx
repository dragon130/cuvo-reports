import React, { Component } from "react";
import Chart from "react-apexcharts";

const chartState = {
	options: {},
	series: [44, 55, 41, 17, 15],
	labels: ["A", "B", "C", "D", "E"],
};

const Donut = ({ width = "100%" }) => {
	return (
		<Chart
			options={chartState.options}
			series={chartState.series}
			type="donut"
			width={width}
		/>
	);
};

export default Donut;
