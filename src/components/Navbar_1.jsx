import React from "react";
import navstyles from "../../styles/Navbar_1.module.css";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from '@mui/icons-material/Reorder';
import AccountCircle from '@mui/icons-material/AccountCircle';

import InputAdornment from "@mui/material/InputAdornment";
import LanguageIcon from '@mui/icons-material/Language';


const SearchTextField = styled((props) => (
  <TextField
    placeholder="search"
    size="small"
    
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon
            sx={{
              color: `black`,
              borderRadius: "20px",
              fontSize: `28px`,
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
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    borderRadius: "40px",
    variant: "outlined",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    width: "10rem",
  },
}));


const Navbar = () => {
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
        <div className={navstyles.rightelem}><LanguageIcon /></div>
        <div className={navstyles.rightelem1}>
        <Button variant="outlined" startIcon={<ReorderIcon />} endIcon={<AccountCircle />} >
        
      </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
