import { useMemo } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ListIcon from "../../assets/images/list.svg";
import QAIcon from "../../assets/images/qa.svg";
import UsersIcon from "../../assets/images/users.svg";

import LineChart from "../../components/Charts/Line";

import PlaylistReport from "../../components/PlaylistReport";

import BarChart from "../../components/ApexCharts/Bar";
import DonutChart from "../../components/ApexCharts/Donut";
import ApexLineChart from "../../components/ApexCharts/Line";

import useAxios from "axios-hooks";

const dummyData = [
	{ label: "Total content personalization", value: "236", icon: ListIcon },
	{ label: "Total User", value: "87", icon: ListIcon },
	{ label: "Watched minutes", value: "3640.10", icon: QAIcon },

	{ label: "Watched minutes", value: "3640.10", icon: UsersIcon, isAlt: true },
	{ label: "Watched minutes", value: "3640.10", icon: UsersIcon, isAlt: true },
	{ label: "Watched minutes", value: "3640.10", icon: UsersIcon, isAlt: true },
];

const Overview = () => {
	const [{ data: playlists, loading, error }] = useAxios(
		"https://player.infusevideo.com/ibc/playlist.json"
	);

	return (
		<Grid container item xs={12}>
			<Grid item xs={12}>
				<Typography
					sx={{
						fontWeight: 700,
						padding: "20px 0px",
					}}
				>
					Personalization
				</Typography>
			</Grid>
			<Grid container item xs={12} gap="10px" justifyContent="space-between">
				{dummyData.map((data) => {
					const { isAlt } = data;
					return (
						<Box
							sx={{
								border: "1px solid #DBDCE0",
								padding: "15px",
								flexBasis: "13.5%",
								borderRadius: "8px",
								minHeight: "100px",
								display: "flex",
								flexDirection: "column",
								gap: "15px",
								background: isAlt ? "#2858D3" : "transparent",
								color: isAlt ? "#FFF" : "000",
							}}
						>
							<Box
								display="flex"
								justifyContent="end"
								sx={{
									minHeight: "38px",
								}}
							>
								<img src={data.icon} alt="icon" />
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: "12px",
									}}
								>
									{data.label}
								</Typography>
							</Box>
							<Box>
								<Typography
									sx={{
										fontSize: "24px",
										fontWeight: 700,
									}}
								>
									{data.value}
								</Typography>
							</Box>
						</Box>
					);
				})}
			</Grid>

			<Grid
				container
				item
				xs={12}
				mt="20px"
				mb="20px"
				justifyContent="space-between"
			>
				<Grid
					item
					md={6}
					xs={12}
					sx={{
						flexBasis: "49%!important",
					}}
				>
					<Box
						sx={{
							border: "1px solid #DBDCE0",
							borderRadius: "8px",
						}}
					>
						<Box
							sx={{
								borderRadius: "8px 8px 0 0",
								background: "#DBDCE0",
								padding: "10px 20px",
							}}
						>
							<Typography
								sx={{
									fontWeight: 700,
									fontSize: "14px",
								}}
							>
								Top Picked Category
							</Typography>
						</Box>
						<BarChart width="64%" />
					</Box>
				</Grid>

				<Grid
					item
					md={6}
					xs={12}
					sx={{
						flexBasis: "49%!important",
					}}
				>
					<Box
						sx={{
							border: "1px solid #DBDCE0",
							borderRadius: "8px",
						}}
					>
						<Box
							sx={{
								borderRadius: "8px 8px 0 0",
								background: "#DBDCE0",
								padding: "10px 20px",
							}}
						>
							<Typography
								sx={{
									fontWeight: 700,
									fontSize: "14px",
									textTransform: "uppercase",
								}}
							>
								Personalisation
							</Typography>
						</Box>
						<DonutChart width="60%" />
					</Box>
				</Grid>
			</Grid>

			<Grid container item xs={12}>
				<Grid item md={7} xs={12}>
					<Box
						sx={{
							border: "1px solid #DBDCE0",
							borderRadius: "8px",
						}}
					>
						<Box
							sx={{
								borderRadius: "8px 8px 0 0",
								background: "#DBDCE0",
								padding: "10px 20px",
							}}
						>
							<Typography
								sx={{
									fontWeight: 700,
									fontSize: "14px",
									textTransform: "uppercase",
								}}
							>
								Personalisation
							</Typography>
						</Box>
						<ApexLineChart width="600" />
					</Box>
				</Grid>
			</Grid>

			<Grid container flexWrap="wrap" gap="10px">
				{Array.isArray(playlists) &&
					playlists.map((playlist) => {
						return <PlaylistReport playlist={playlist} />;
					})}
			</Grid>

			<Grid item xs={12} mt="50px">
				<Box
					sx={{
						border: "1px solid #DBDCE0",
						borderRadius: "8px",
					}}
				>
					<Box
						sx={{
							borderRadius: "8px 8px 0 0",
							background: "#DBDCE0",
							padding: "10px 20px",
						}}
					>
						{" "}
						<Typography
							sx={{
								fontWeight: 700,
								fontSize: "14px",
								textTransform: "uppercase",
							}}
						>
							personalization watch vs non personalized
						</Typography>
					</Box>
					<LineChart />
				</Box>
			</Grid>
		</Grid>
	);
};

export default Overview;
