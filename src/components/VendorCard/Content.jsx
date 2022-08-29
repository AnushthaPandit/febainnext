import React from "react";
//import { useSelector } from "react-redux";
// import { Link } from "@version/react-router-v3";
import Link from "next/link";
import {
	CardContent,
	Typography,
	IconButton,
	Button,
	// makeStyles,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid";
// import SwipeButton from "react-swipezor";
// import { isMobile } from "react-device-detect";

// import CallIcon from "@mui/icons-materials/Call";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// import BubbleDate from "./BubbleDate.component";
// import { useCallMessageData } from "../CallMessage.provider";

// import { selectProfileSelecttedDates } from "../../../redux/utils/vendorProfileCalendar.slice";

const useStyles = makeStyles({
	sbCnt: {
		background: "#efc3c3 !important",
		borderRadius: "6px",
		border: "0 solid white !important",
	},

	sbOverlay: {
		background:
			"linear-gradient(345deg, #dd4060, #dd405d, #de3f55, #de3f4c, #dd4043, #dd4040) !important",
	},
	sbCaret: {
		background:
			"linear-gradient(345deg, #dd4060, #dd405d, #de3f55, #de3f4c, #dd4043, #dd4040) !important",
	},

	mobileCall: {
		background:
			"linear-gradient(345deg, #dd4060, #dd405d, #de3f55, #de3f4c, #dd4043, #dd4040) !important",
		borderRadius: "10px",
		padding: "11px",
		margin: 0,
	},
});

const Content = (props) => {
	let localCity = props.vendor.localities;
	let bookedDates = props.vendor.bookedDates ? props.vendor.bookedDates : [];
	let localCityLength = localCity ? localCity.length : false;
	let extraCityCount = localCityLength
		? localCityLength - 1 !== 0
			? `, +${localCityLength - 1}`
			: ""
		: "";

	const localCityTxt = localCityLength
		? `, ${localCity[0]} ${extraCityCount}`
		: "";

	const profileSelectedDates = {};//useSelector(selectProfileSelecttedDates);
	// const { setBottomData } = useCallMessageData();

	const bInfo = props.vendor.businessInfo;

	const classes = useStyles();

	const dateDisplayPorop = (date) => {
		if (!bookedDates) {
			return { className: "available", date };
		}

		if (!bookedDates.length) {
			return { className: "available", date };
		}

		let vendorBusyDates = bookedDates.map(({ appoint_date }) => appoint_date);
		let vendorBusySchedules = bookedDates.map(
			({ event_schedule }) => event_schedule
		);

		//converts 18-11-2021 => 2021-11-18
		let reveredDate = date.split("-").reverse().join("-");

		if (vendorBusyDates.includes(reveredDate)) {
			let scheduleIndex = vendorBusyDates.findIndex((d) => d === reveredDate);
			let schedule = vendorBusySchedules[scheduleIndex];

			return {
				date,
				className: !schedule ? "not-available" : schedule,
			};
		}

		return { className: "available", date };
	};

	const handleActionBtn = (isCall = true, isMessage = false, e) => {
		// setBottomData({
		// 	open: true,
		// 	vendorid: props.vendor.vendor_id,
		// 	isCall,
		// 	isMessage,
		// 	vendor_title: props.vendor.vendor_title,
		// });
	};

	return (
		<CardContent style={{ padding: 0 }}>
			{/* <Link
				href={props.to}
				target="_blank"
				rel="noopener noreferrer"
				style={{ textDecoration: "none", color: "black" }}> */}
				<div style={{ margin: "8px 0 2px" }}>
					{props.vendor.ranking_package == "verified" ? (
						<div style={{ display: "flex" }}>
							<span
								className="material-icons"
								style={{ color: "rgb(190, 35, 100)",
								       
								}}>
								verified
							</span>

							<Typography
								variant="body2"
								component="span"
								className="secondaryText"
								style={{ marginTop: "2px", marginLeft: "2px" }}>
								{" " + props.vendor.vendor_city}
							</Typography>
							<Typography
								variant="body2"
								component="span"
								className="secondaryText"
								style={{ marginTop: "2px" }}>
								{localCityTxt}
							</Typography>
							<span className="rating" style={{ marginLeft: "auto" }}>
								<StarRateRoundedIcon
									style={{ fontSize: 20, color: "rgb(190, 35, 100)" }}
								/>
								{props.vendor.avg
									? parseFloat(props.vendor.avg).toFixed(1)
									: 4.8}
								{props.vendor.total_reviews
									? `(${props.vendor.total_reviews})`
									: "(1)"}
							</span>
						</div>
					) : (
						<>
							<span
								className="memberTagList"
								style={
									props.vendor.ranking_package == "super_vendor"
										? {
												backgroundColor: "rgb(190, 35, 100)",
												padding: "3px 8px",
												borderRadius: "5px",
										  }
										: props.vendor.ranking_package !== "true"
										? props.vendor.ranking_package !== "verified"
											? { border: "1px solid #222", color: "#222" }
											: { color: "rgb(190, 35, 100)" }
										: { display: "none" }
								}>
								{props.vendor.ranking_package == "super_vendor" &&
									"SUPER VENDOR"}
									
								{props.vendor.ranking_package == "popular1" && "POPULAR" }
								{props.vendor.ranking_package == "popular2" && "POPULAR"}
							</span>
							<Typography
								variant="body2"
								component="span"
								className="secondaryText"
								style={{ marginTop: "2px" }}>
								{" " + props.vendor.vendor_city}
							</Typography>
							<Typography
								variant="body2"
								component="span"
								className="secondaryText"
								style={{ marginTop: "2px" }}>
								{localCityTxt}
							</Typography>
							<span className="rating" style={{ marginLeft: "auto" }}>
								<StarRateRoundedIcon
									style={{ fontSize: 20, color: "rgb(190, 35, 100)" }}
								/>
								{props.vendor.avg
									? parseFloat(props.vendor.avg).toFixed(1)
									: 4.8}
								{props.vendor.total_reviews
									? `(${props.vendor.total_reviews})`
									: "(1)"}
							</span>
						</>
					)}
				</div>
				<Typography variant="h5" component="span" className="vendorTitle">
					{props.vendor.vendor_title}
				</Typography>
				<Typography
					variant="h6"
					component="p"
					style={{ fontSize: "13px", fontWeight: 400 }}>
					<b
						style={{
							fontFamily: "Calibri",
							fontSize: 18,
							fontWeight: 600,
						}}>
						₹{props.vendor.vendor_service_price}
					</b>{" "}
					for {props.vendor.vendor_top_service}
				</Typography>
			{/* </Link> */}

			{/* Only for venues */}
			{bInfo && bInfo?.vb_id ? (
				<div>
					<Grid alignItems="center" spacing={0} container>
						<Grid
							spacing={1}
							wrap="nowrap"
							style={{ overflowX: "scroll", width: "100%" }}
							className="b-details"
							container>
							<Grid item>
								<Chip
									label={`${bInfo.veg_range} PAX`}
									size="small"
									style={{
										borderRadius: "5px",
										//  fontSize: "11px"
									}}
								/>
							</Grid>
							{Array.isArray(bInfo.type_of_venue)
								? bInfo.type_of_venue.map((e) => (
										<Grid key={e} item>
											<Chip
												label={`${e}`}
												size="small"
												style={{
													borderRadius: "5px",
													// fontSize: "11px"
												}}
											/>
										</Grid>
								  ))
								: null}
						</Grid>
					</Grid>
				</div>
			) : null}

			{/* swipe and call */}
			{/* {isMobile ? (
				<Grid
					style={{
						marginTop: "12px",
						justifyContent: "space-between",
					}}
					alignItems="center"
					container>
					<Grid xs={10} sm={10} item>
						<SwipeButton
							mainText={
								<Typography style={{ color: "white", marginLeft: "18px" }}>
									Swipe to send message
								</Typography>
							}
							classList={classes.sbCnt}
							overlayText={
								<Typography style={{ color: "white" }}>Send Message</Typography>
							}
							overlayClassList={classes.sbOverlay}
							caretClassList={classes.sbCaret}
							onSwipeDone={handleActionBtn.bind(this, false, true)}
						/>
					</Grid>
					<Grid xs={2} sm={2} style={{ marginRight: -5 }} item>
						<IconButton
							className={classes.mobileCall}
							onClick={handleActionBtn.bind(this, true, false)}>
							<CallIcon style={{ color: "white" }} />
						</IconButton>
					</Grid>
				</Grid>
			) : null} */}

			{/* <div style={{ marginTop: "6px" }} className="availibility-date-text">
				{profileSelectedDates.map((date, idx) => (
					<BubbleDate key={idx} displayData={dateDisplayPorop(date)} />
				))}
			</div> */}
		</CardContent>
	);
};

export default Content;
