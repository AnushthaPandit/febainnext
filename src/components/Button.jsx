import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchButton from "@mui/material/Button";

const Button = () => {
  return (
    <div>
      <SearchButton
        variant="contained"
        color="success"
        disabledElevation
        startIcon={<SearchIcon style={{ fontSize: `1.5rem` }} />}
        style={{
          "background-image": `radial-gradient(circle at center right,
		#ff385c 0,
		#e61e4d 27.5%,
		#e31c5f 40%,
		#d70466 57.5%,
		#bd1e59 75%,
		#bd1e59 100%)`,
          width: `100%`,
          // "padding":`1rem`,
          fontSize: `1.3rem`,
          alignItems: `center`,
          // margin: `.5rem`,
          // marginRight:0,
          marginTop: `1rem`,
          borderRadius: `5px`,
          // boxShadow:`none`
        }}
      >
        Search
      </SearchButton>
    </div>
  );
};

export default Button;
