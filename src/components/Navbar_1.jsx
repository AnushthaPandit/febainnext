import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import Image from "next/image";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from "@mui/icons-material/Reorder";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";

import navstyles from "../../styles/Navbar_1.module.css";

const useStyles = makeStyles({
	circleIcon: {
		fontSize: 35,
		marginRight: -2,
	},

	menuIcon: {
		marginLeft: 4,
		marginRight: 10,
	},
});

const Navbar = () => {
	const classes = useStyles();

	return (
		<div className={navstyles.navbar}>
			<div className={navstyles.left}>
				<Link href="/">
					<Image
						className={navstyles.logoimage}
						src="/Logo.png"
						alt="Company Logo"
						width={"40px"}
						height={"20px"}
					/>
				</Link>

				<span className={navstyles.logoname}>
					<Link href="/">
						<Typography variant="h5" fontSize={"22px"} marginLeft={"10px"}>
							Feba
						</Typography>
					</Link>
				</span>
			</div>
			<div className={navstyles.middle}>
				{/* <input type="text" placeholder="Search your query" className={navstyles.text_search}  /> */}
				{/* <TextField placeholder="Search your Query"  */}
				{/* startIcon={<SearchIcon fontSize="16px" className={navstyles.search_icon} />} className={navstyles.text_search}/> */}
				<SearchTextField variant="outlined" />
			</div>
			<div className={navstyles.right}>
				<div className={navstyles.rightelem}>Become a Host</div>
				<div className={navstyles.rightelem}>
					<LanguageIcon />
				</div>
				<div className={navstyles.rightelem1}>
					<AccountButton size="large" variant="outlined">
						<ReorderIcon fontSize="small" className={classes.menuIcon} />
						<AccountCircle className={classes.circleIcon} />
					</AccountButton>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

const SearchTextField = styled((props) => (
	<TextField
		placeholder="Bridal makeup artist in Mumbai"
		size="small"
		InputProps={{
			endAdornment: (
				<InputAdornment position="end">
					<SearchIcon
						sx={{
							color: `white`,
							borderRadius: "20px",
							fontSize: 30,
							padding: "5px",
							marginRight: "-8px",
							backgroundImage: `radial-gradient(circle at center right,
                #ff385c 0,
                #e61e4d 27.5%,
                #e31c5f 40%,
                #d70466 57.5%,
                #bd1e59 75%,
                #bd1e59 100%)`,
						}}
					/>
				</InputAdornment>
			),
		}}
		{...props}
	/>
))(() => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: "30px",
		width:"25rem",
	},
}));

const AccountButton = styled(Button)({
	borderColor: "#DDDDDD",
	borderRadius: "30px",
	padding: "2px 5px",
	display: "flex",
	justifyContent: "space-between",

	"&:hover": {
		borderColor: "#DDDDDD",
		boxShadow: "0 2px 4px rgba(0,0,0,0.18);",
	},
});
