import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { withStyles } from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useModal from "../../src/Hooks/useModal";

// import { POSTfbEevnt } from "../../apis/user.apis";

import vendorstyle from "../../styles/VendorList.module.scss";

const FilterButton = withStyles((theme) => ({
	root: {
		color: "#555",
		backgroundColor: "#fff",
		borderColor: "#999",
		borderRadius: 20,
		fontSize: 12,
		textTransform: "none",
	},
}))(Button);

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const btnStyles = {
	backgroundColor: "#333",
	color: "#fff",
	fontWeight: 600,
	position: "fixed",
	bottom: "20px",
	left: 0,
	width: "100%",
};

const Filter = (props) => {
	const { filterName, onApplyFilter, DefaultRadioValueObj, getFilterArray } =
		props;

	const [filterArray, setfilterArray] = useState([]);

	const { isOpen, open, close } = useModal();

	const handleOpen = () => {
		open();

		// if (filterName === "Wedding Services") {
		// 	POSTfbEevnt({
		// 		event_name: "AddToWishlist",
		// 	});
		// }
	};

	//this is for radio value
	const [radioValueObj, setradioValueObj] = useState(
		DefaultRadioValueObj ? DefaultRadioValueObj : {}
	);

	//this is to show filter name on filter box
	const [selectedRadioValueObj, setselectedRadioValueObj] = useState(
		DefaultRadioValueObj ? DefaultRadioValueObj : {}
	);

	const toggleRadio = (e) => {
		setradioValueObj({ label: e.target.id, value: e.target.value });
	};

	const handleApplyFilter = () => {
		setselectedRadioValueObj({ ...radioValueObj });
		if (typeof onApplyFilter === "function") {
			onApplyFilter(radioValueObj);
			close();
		}
	};

	useEffect(() => {
		setradioValueObj({
			label: DefaultRadioValueObj.label,
			value: DefaultRadioValueObj.value,
		});
		setselectedRadioValueObj({
			label: DefaultRadioValueObj.label,
			value: DefaultRadioValueObj.value,
		});
	}, [DefaultRadioValueObj.label, DefaultRadioValueObj.value]);

	useEffect(() => {
		(async () => {
			setfilterArray(await getFilterArray());
		})();
	}, []);

	return (
		<Grid item>
			<FilterButton
				variant="outlined"
				className={vendorstyle.filterButton}
				onClick={handleOpen}
				style={{ border: "2px solid black", backgroundColor: "#F7F7F7" }}>
				{selectedRadioValueObj.label.toLowerCase() === "all"
					? filterName
					: selectedRadioValueObj.label}
				<ExpandMoreIcon />
			</FilterButton>
			<Dialog
				fullScreen
				open={isOpen}
				onClose={close}
				TransitionComponent={Transition}>
				<AppBar elevation={0} color="secondary" className={vendorstyle.dialogHead}>
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
							{filterName}
						</Typography>
					</Toolbar>
				</AppBar>
				<Box p="65px 30px 75px">
					<RadioGroup
						aria-label="filter"
						name={filterName}
						value={radioValueObj.value}
						onChange={toggleRadio}>
						{filterArray.map((f) => (
							<FormControlLabel
								value={f.value}
								control={<Radio color="primary" inputProps={{ id: f.label }} />}
								label={f.label}
								key={f.label}
								data-label={f.label}
							/>
						))}
					</RadioGroup>
				</Box>
				<Box color="secondary">
					<Button
						variant="contained"
						onClick={handleApplyFilter}
						className={vendorstyle.dialogFootButton}
						style={btnStyles}
						disableElevation>
						Apply Filter
					</Button>
				</Box>
			</Dialog>
		</Grid>
	);
};

export default Filter;
