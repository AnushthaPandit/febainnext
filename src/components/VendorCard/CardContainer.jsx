import React, { forwardRef } from "react";
import { Grid } from "@mui/material";

import ImpressionClickTrackerHOC from "./ImpressionClickTrackerHOC";

const CardContainer = forwardRef(({ children }, ref) => {
	return (
		<Grid ref={ref} item xs={12} sm={6} md={4} lg={4} xl={3}>
			<ImpressionClickTrackerHOC
				clickEvent={`ADD-TO-CART`}
				disableViewportTracking={false}>
				{children}
			</ImpressionClickTrackerHOC>
		</Grid>
	);
});

export default CardContainer;
