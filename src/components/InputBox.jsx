import React from "react";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { colors } from "@mui/material";

const RedditTextField = styled((props) => (
	<TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
	"& .MuiFilledInput-root": {
		border: "1px solid #e2e2e1",
		overflow: "hidden",
		borderRadius: "8px",
		color: "#000",
		fontWeight: 400,
		backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
		transition: theme.transitions.create(["background-color"]),
		"&:hover": {
			backgroundColor: "transparent",
		},
		"&.Mui-focused": {
			backgroundColor: "transparent",
			borderColor: theme.palette.primary.main,
			borderWidth: "2px",
			boxShadow: "#DDDDDD 0 0 0 1px inset !important",
		},
	},
}));

const inputLabelStyles = {
	color: "#000",
	textTransform: "uppercase",
	fontSize: "14px",
};

const InputBox = (props) => {
	const { InputLabelProps } = props;
	return (
		<RedditTextField
			variant="filled"
			{...props}
			InputLabelProps={{
				...InputLabelProps,
				style: { ...inputLabelStyles, ...InputLabelProps?.style },
			}}
		/>
	);
};

InputBox.defaultProps = {
	InputLabelProps: {
		style: {},
	},
};

export default InputBox;
