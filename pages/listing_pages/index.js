import { Typography } from "@mui/material";
import React from "react";
import style from "../../styles/Listingcss.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from '@mui/icons-material/Tune';
import StarRateIcon from '@mui/icons-material/StarRate';
import logoimage from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import mockjson from "../../mock.json";
import configs from "../../src/configs";

const ListingPage = () => {
  const { data } = mockjson;
  const vendors = data.vendors;
  return (
    <div className={style.mainComponent}>
      {/* NavBar section */}
      <header className={style.navBar}>
        <div className={style.menuIcon}>
          <MenuIcon fontSize="medium" />
        </div>
        <div className={style.logoImage}>
          <Link href="/">
            <Image
              className={style.logoimage}
              src="/Logo.png"
              alt="Company Logo"
              width={"55px"}
              height={"28px"}
            />
          </Link>
        </div>
        <div className={style.logoText}>
          <Typography variant="h5">Feba</Typography>
        </div>
      </header>

      <hr></hr>

      <div className={style.filter_section}>
        <div className={style.city_filter}>
          <Button variant="contained" disabledelevation>
            mumbai
            <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className={style.service_filter}>
          <Button variant="contained" disabledelevation>
            Bridal makeup
            <KeyboardArrowDownIcon />
          </Button>
        </div>

        <div className={style.other_filter}><TuneIcon/>Filter</div>
      </div>
      <hr></hr>
      {/* main content */}
      <div className={style.main_container}>
        <div className={style.container_heading}>
          <Typography variant="h5">Bridal Makeup Artist in Mumbai</Typography>
          <Typography variant="h6">Showing 271+result</Typography>
        </div>

        {vendors.map((data, idx) => {
          const img_url = configs.BASE_URL + data.image_url;
          return (
            <div className={style.container_cards}>
              <div className={style.cardLayout}>
                <Image
                  alt={data.vendor_title}
                  src={img_url}
                  height="225rem"
                  width="225rem"
                  className={style.cardimage}
                />
                <div className={style.cardData}>
                    <div className={style.cardData_1}>
                    <Button variant="contained">{data.ranking_package}</Button>
                    {data.vendor_city},{data.localities.slice(0,1)}
                    <StarRateIcon/>{data.avg}
                    </div>
                    <div className={style.cardData_2}>
                        <Typography variant="h4">{data.vendor_title}</Typography>
                    </div>
                    <div className={style.cardData_3}>
                        {data.vendor_service_price}for{data.vendor_top_service}
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListingPage;
