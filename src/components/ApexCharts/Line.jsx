import React, { Component } from "react";
import Chart from "react-apexcharts";

const chartState = {
	options: {
		chart: {
			id: "basic-bar",
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
		},
	},
	series: [
		{
			name: "series-1",
			data: [30, 40, 45, 50, 49, 60, 70, 91],
		},
	],
};

const Line = ({ width = "100%" }) => {
	return (
		<Chart
			options={chartState.options}
			series={chartState.series}
			type="line"
			width={width}
		/>
	);
};

export default Line;
