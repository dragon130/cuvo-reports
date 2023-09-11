import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useDemoConfig from "../../utils/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
	const { data, randomizeData } = useDemoConfig({
		series: 10,
		dataType: "time",
	});

	const primaryAxis = React.useMemo(
		() => ({
			getValue: (datum) => datum.primary,
		}),
		[]
	);

	const secondaryAxes = React.useMemo(
		() => [
			{
				getValue: (datum) => datum.secondary,
			},
		],
		[]
	);

	return (
		<Box sx={{}}>
			<Chart
				options={{
					data,
					primaryAxis,
					secondaryAxes,
				}}
			/>
		</Box>
	);
}
