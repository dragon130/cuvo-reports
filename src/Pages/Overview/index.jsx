import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import BarChart from "../../components/ApexCharts/Bar";
import DonutChart from "../../components/ApexCharts/Donut";
import ApexLineChart from "../../components/ApexCharts/Line";

import TopMovies from "../../components/TopMovies";
import TopCategories from "../../components/TopCategories";
import PersonalizationChart from "../../components/PersonalizationChart";
import TotalStats from "../../components/TotalStats";
import TotalPickedTags from "../../components/TotalPickedTags";

import useAxios from "axios-hooks";


const Overview = () => {
	const [{ data: playlists, loading, error }] = useAxios(
		"https://player.infusevideo.com/ibc/playlist.json"
	);


	return (
		<Grid container item xs={12}>
			<Grid
				item
				xs={12}
				sx={{
					borderBottom: "1px solid #E9E9E9",
				}}
			>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: 700,
						padding: "10px 20px",
						color: "#3D4043",
					}}
				>
					Personalization Dashboard
				</Typography>
			</Grid>
			<Box
				sx={{
					width: "100%",
					padding: "30px",
				}}
			>
				<TotalStats />

				<TotalPickedTags />

				<Grid container item xs={12} gap="10px">
					<PersonalizationChart />
					<TopCategories />
					<TopMovies />
				</Grid>
			</Box>
		</Grid>
	);
};

export default Overview;
