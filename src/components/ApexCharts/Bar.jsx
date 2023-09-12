import React from "react";
import Chart from "react-apexcharts";

const Bar = ({ categories = [], series = [], width = "100%" }) => {

	const state = {
		options: {
			colors: ["#038229", "#76d43b", "#f5c61b", "#fa7c28", "#e61919"],
			chart: {
				id: "basic-bar",
			},
			xaxis: {
				categories: categories,
			},
		},
		series: series,
	};


	return (
		<Chart
			options={state.options}
			series={state.series}
			type="bar"
			height={372}
		/>
	);
};

export default Bar;
