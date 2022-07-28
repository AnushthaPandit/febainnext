import React from "react";

import MUIButton from "@mui/material/Button";

const Button = (props) => {
	const { style, ...rest } = props;

	return (
		<MUIButton
			variant="contained"
			color="success"
			disableElevation
			style={{
				"background-image": `radial-gradient(circle at center right,
		#ff385c 0,
		#e61e4d 27.5%,
		#e31c5f 40%,
		#d70466 57.5%,
		#bd1e59 75%,
		#bd1e59 100%)`,
				width: "100%",
				padding: ".67rem 0",
				fontSize: ".95rem",
				fontWeight: 600,
				alignItems: "center",
				borderRadius: "8px",
				...style,
			}}
			{...rest}>
			{props.children}
		</MUIButton>
	);
};

export default Button;
