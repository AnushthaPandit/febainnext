import React from "react";

// import makeStyles from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import {IconButton} from "@mui/material";

import {
	LazyLoadImage as LazyImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import configs from "../../configs";


const useStyles = makeStyles({
	aspectRatio: {
		position: "relative",
		maxWidth: 640,
		width: "100%",
		paddingTop: "66%",
	},
	media: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100%",
		borderRadius: "12px",
	},

	icnRightBtn: {
		position: "absolute",
		color: "black",
		padding: "4px",
		marginRight: "5px",
		right: 0,
		backgroundColor: "white",

		"&:focus": {
			backgroundColor: "white",
		},
		"&:hover": {
			backgroundColor: "white",
		},
	},
	icnLefttBtn: {
		position: "absolute",
		color: "black",
		padding: "4px",
		marginLeft: "5px",
		left: 0,
		backgroundColor: "white",
		"&:focus": {
			backgroundColor: "white",
		},
		"&:hover": {
			backgroundColor: "white",
		},
	},
});

const CustomRightArrow = ({ onClick }) => {
	const classes = useStyles();
	const clickHandler = (e) => {
		e.stopPropagation();
		onClick();
	};
	return (
		<IconButton onClick={clickHandler} className={classes.icnRightBtn}>
			<ChevronRightIcon />
		</IconButton>
	);
};

const CustomLeftArrow = ({ onClick }) => {
	const classes = useStyles();
	const clickHandler = (e) => {
		e.stopPropagation();
		onClick();
	};
	return (
		<IconButton onClick={clickHandler} className={classes.icnLefttBtn}>
			<ChevronLeftIcon />
		</IconButton>
	);
};

const CustomDot = ({ active }) => {
	return (
		<FiberManualRecordIcon
			style={{
				fontSize: 10,
				marginBottom: "10px",
				color: "white",
				opacity: active ? 1 : 0.5,
			}}
		/>
	);
};

const ImageCarousel = ({ scrollPosition, coverImages }) => {
	const classes = useStyles();

	return (
		<Carousel
			customDot={<CustomDot />}
			customRightArrow={<CustomRightArrow />}
			customLeftArrow={<CustomLeftArrow />}
			shouldResetAutoplay={false}
			autoPlay={false}
			centerMode={false}
			focusOnSelect={false}
			keyBoardControl
			minimumTouchDrag={80}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 1,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 1,
				},
			}}
			showDots
			slidesToSlide={1}
			removeArrowOnDeviceType={["tablet", "mobile"]}
			swipeable
			infinite>
			{coverImages.map((e, i) => (
				<div key={i} className={classes.aspectRatio}>
					<LazyImage
						scrollPosition={scrollPosition}
						className={classes.media}
						// src={`${config.protocol}://${config.hostName}:${config.serverPort}${e.url}`}
						src={configs.BASE_URL+e.url}
						alt={e.desc}
					/>
				</div>
			))}
		</Carousel>
	);
};

// export default ImageCarousel;
export default trackWindowScroll(ImageCarousel);
