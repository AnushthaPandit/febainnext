import React, { useState, forwardRef } from "react";
// import { isMobile } from "react-device-detect";
// import { Link } from "@version/react-router-v3";
import Link from "next/link";

import { makeStyles } from "@mui/styles";
import { Card } from "@mui/material";

import ImageCarouselComponent from "./ImageCarousel";
import CardContainer from "./CardContainer";

// import Actions from "./Actions.component";
import Content from "./Content";

// import "./vendorCard.styles.css";
import "../../../styles/VendorCard_style.module.css";

const useStyles = makeStyles({
	root: {
		height: "100%",
		position: "relative",
		maxWidth: 640,
		// cursor: isMobile ? "default" : "pointer",
        cursor: "default",
	},
	actionFavourite: {
		position: "absolute",
		top: "3px",
		right: "3px",
	},
	badge: {
		position: "absolute",
		top: "0px",
		left: "20px",
		width: "30px",
		height: "40px",
		zIndex: 1,
	},
});

const CardVendor = forwardRef((props, ref) => {
	const classes = useStyles();

	const [favourite, setFavourite] = useState(
		props.vendor.event === "Favourite" ? true : false
	);

	async function addToFavourites(event) {
		if (await props.onFav(props.vendor.vendor_id, favourite)) {
			setFavourite(!favourite);
		}
	}

	let to = `/profile/${props.vendor.vendor_title.replace(/ /g, "-")}-${
		props.vendor.vendor_id
	}`;

	return (
		<CardContainer ref={ref} key={props.vendor.vendor_id}>
			<Card
				className={classes.root}
				elevation={0}
				cardId={props.vendor.vendor_id}>
				<Link
					href={to}
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none", color: "inherit" }}>
					<ImageCarouselComponent
						coverImages={
							props.vendor.coverImage?.length < 2
								? [...props.vendor.coverImage, ...props.vendor.coverImage]
								: props.vendor.coverImage
						}
					/>
				</Link>
				<Content to={to} style={{ padding: 0 }} vendor={props.vendor} />
				{/* <Actions
					addToFavourites={addToFavourites}
					to={to}
					favourite={favourite}
				/> */}
			</Card>
		</CardContainer>
	);
});
export default CardVendor;
