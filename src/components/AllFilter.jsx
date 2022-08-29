import React, { useEffect, useState, useRef } from "react";
import {
	Box,
	Button,
	Slide,
	Dialog,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	FormControlLabel,
	Grid,
	//withStyles,
	Radio,
	RadioGroup,
	Divider,
	Slider,
	FormControl,
	FormGroup,
	Checkbox,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
// import { browserHistory } from "@version/react-router-v3";
import { useRouter } from 'next/router'
import useModal from "../Hooks/useModal";
//import useModal from "../../custom-hooks/useModal.hook";
//import { getLocalCityByCitySlug } from "../../apis/user.apis";
import localcity from "../../localCity.json";
import { addCommas } from "../utilis/function";
import "../../styles/VendorList.module.scss";
//import "./VendorList.scss";



function getLocalCityByCitySlug() {
	return {data: {data:localcity}}

}

//const router = useRouter();
const btnStyles = {
	backgroundColor: "#333",
	color: "#fff",
	fontWeight: 600,
	position: "fixed",
	bottom: "20px",
	left: 0,
	width: "100%",
};

const FilterButton = withStyles((theme) => ({
	root: {
		color: "#555",
		backgroundColor: "#fff",
		borderColor: "#999",
		borderRadius: 20,
		fontSize: 14,
		textTransform: "none",
	},
}))(Button);
const FilterIconButton = withStyles((theme) => ({
	root: {
		borderColor: "#999",
		borderRadius: 20,
		fontSize: "14px",
		textTransform: "none",
		color: "#4a4a4a",
		backgroundColor: "rgb(238, 238, 238)",
	},
}))(Button);

const AirbnbSlider = withStyles({
	root: {
		height: 3,
		padding: "13px 0",
	},
	thumb: {
		height: 27,
		width: 27,
		backgroundColor: "#fff",
		border: "1px solid currentColor",
		marginTop: -12,
		marginLeft: -13,
		boxShadow: "#ebebeb 0 2px 2px",
		"&:focus, &:hover, &$active": {
			boxShadow: "#ccc 0 2px 3px 1px",
		},
		"& .bar": {
			// display: inline-block !important;
			height: 9,
			width: 1,
			backgroundColor: "currentColor",
			marginLeft: 1,
			marginRight: 1,
		},
	},
	active: {},
	track: {
		height: 3,
	},
	rail: {
		color: "#d8d8d8",
		opacity: 1,
		height: 3,
	},
})(Slider);

function AirbnbThumbComponent(props) {
	return (
		<span {...props}>
			<span className="bar" />
			<span className="bar" />
			<span className="bar" />
		</span>
	);
}

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const filterArray = [
	{ label: "Rated < 4", value: "avg_lt_eql=4" },
	{ label: "Rated 4+", value: "avg_gt_eql=4" },
	{ label: "Rated 4.5+", value: "avg_gt_eql=4.5" },
];

const AllFilters = ({ citySlug, pathname, query, priceLabel, min, max }) => {
	const { isOpen, open, close } = useModal();

	//for user selection
	let maxPrice = !isNaN(parseInt(query.price_lt_eql))
		? parseInt(query.price_lt_eql)
		: max;
	let minPrice = !isNaN(parseInt(query.price_gt_eql))
		? parseInt(query.price_gt_eql)
		: min;

	let defaultRating = ``;

	if (query.avg_lt_eql) {
		defaultRating = "avg_lt_eql=4";
	}

	if (query.avg_gt_eql && query.avg_gt_eql === "4") {
		defaultRating = "avg_gt_eql=4";
	}

	if (query.avg_gt_eql && query.avg_gt_eql === "4.5") {
		defaultRating = "avg_gt_eql=4.5";
	}

	const [localCityData, setlocalCityData] = useState([]);
	const [ratingFilter, setratingFilter] = useState(defaultRating);
	const [localCityFilter, setlocalCityFilter] = useState(
		query.locals ? query.locals.split(",") : []
	);
	const [priceLimit, setpriceLimit] = useState([minPrice, maxPrice]);

	const allLocalCity = useRef([]);

	const handleRatingFilter = (e) => setratingFilter(e.target.value);

	const handleChangeLocalFilter = (e) =>
		setlocalCityFilter((curr) => {
			let val = e.target.name;
			if (curr.includes(val)) {
				return curr.filter((e) => e !== val);
			} else {
				return [...curr, val];
			}
		});

	const handlePriceLimit = (e, newVal) => setpriceLimit(newVal);

	const handleApplyFilter = () => {
		let queries = [];

		if (ratingFilter) {
			queries.push(ratingFilter);
		}

		if (localCityFilter.length) {
			queries.push(`locals=${localCityFilter.join(",")}`);
		}

		//user has changed the min
		if (priceLimit[0] !== min) {
			queries.push(`price_gt_eql=${parseInt(priceLimit[0])}`);
		}

		//user has changed the max
		if (priceLimit[1] !== max) {
			queries.push(`price_lt_eql=${parseInt(priceLimit[1])}`);
		}

		let q = `${pathname}?${queries.join("&")}`;
		useRouter.push(q);

		close();
	};
    // console.log(min,max); 
     console.log(priceLimit); 
	// useEffect(() => {
	// 	(async () => {
	// 		if (!citySlug) {
	// 			setlocalCityData([]);
	// 			allLocalCity.current = [];
	// 			return;
	// 		}

	// 		const {
	// 			data: { data },
	// 		} = await getLocalCityByCitySlug(citySlug);
	// 		setlocalCityData(data);
	// 		allLocalCity.current = data;
	// 	})();
	// }, [citySlug]);

	useEffect(() => {
		setpriceLimit([minPrice, maxPrice]);
	}, [minPrice, maxPrice]);

	return (
        
		<Grid item>
			<FilterIconButton
				onClick={open}
				size="small"
				style={{
					padding: "8px 10px",
				}}
				startIcon={<TuneIcon fontSize="small" />}>
				Filter
			</FilterIconButton>
			<Dialog
				fullScreen
				open={isOpen}
				onClose={close}
				TransitionComponent={Transition}>
				<AppBar elevation={0} color="secondary" className="dialogHead">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={close}
							aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography
							variant="h6"
							align="center"
							style={{
								marginLeft: "-20px",
								flex: 1,
							}}>
							All Filters
						</Typography>
					</Toolbar>
				</AppBar>
				<Box p="65px 30px 75px">
					<Typography variant="h4" gutterBottom>
						Ratings
					</Typography>
					<RadioGroup
						value={ratingFilter}
						onChange={handleRatingFilter}
						aria-label="rating filter"
						name={"rating filter"}>
						{filterArray.map((f) => (
							<FormControlLabel
								value={f.value}
								control={<Radio color="primary" />}
								label={f.label}
								key={f.label}
							/>
						))}
					</RadioGroup>

					<Divider style={{ margin: "9px 0" }} />

					<Typography variant="h4" gutterTop gutterBottom>
						Price Limit
					</Typography>
					<AirbnbSlider
						ThumbComponent={AirbnbThumbComponent}
						min={min}
						step={200}
						max={max}
						value={priceLimit}
						onChange={handlePriceLimit}
					/>

					<Grid
						direction="row"
						justifyContent="space-between"
						container
						width="100%">
						<Grid xs={6} sm={6} item>
							<Typography variant="subtitle1">
								min: ₹{addCommas(priceLimit[0])} {priceLabel}
							</Typography>
						</Grid>
						<Grid xs={6} sm={6} item>
							<Typography style={{ textAlign: "right" }} variant="subtitle1">
								max: ₹{addCommas(priceLimit[1])} {priceLabel}
							</Typography>
						</Grid>
					</Grid>

					<Divider style={{ margin: "8px 0" }} />

					<Typography variant="h4" gutterBottom>
						Locality
					</Typography>

					{citySlug ? (
						<FormControl component="fieldset">
							<FormGroup>
								{localCityData.map((f) => (
									<FormControlLabel
										control={
											<Checkbox
												checked={localCityFilter.includes(f.local_city_name)}
												onChange={handleChangeLocalFilter}
												name={f.local_city_name}
											/>
										}
										label={f.local_city_name}
										key={f.local_city_name}
									/>
								))}
							</FormGroup>
						</FormControl>
					) : (
						<Typography>Please select city for local city filter.</Typography>
					)}
				</Box>
				<Box color="secondary">
					<Button
						variant="contained"
						className="dialogFootButton"
						style={btnStyles}
						onClick={handleApplyFilter}
						disableElevation>
						Apply Filter
					</Button>
				</Box>
			</Dialog>
		</Grid>
	);
};

export default AllFilters;
