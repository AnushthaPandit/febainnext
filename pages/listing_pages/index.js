import { Typography, Divider } from "@mui/material";
import React from "react";
import style from "../../styles/Listingcss.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarRateIcon from "@mui/icons-material/StarRate";
import logoimage from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import mockjson from "../../mock.json";
import configs from "../../src/configs";
import Filter from "../../src/components/Filter.component";
import AllFilters from "../../src/components/AllFilter";
import Drawer from "@mui/material";
import Grid from "@mui/material/Grid";
import VendorCard from "../../src/components/VendorCard";

const ListingPage = () => {
  const { data } = mockjson;
  const vendors = data.vendors;
  return (
    <div className={style.mainComponent}>
      {/* NavBar section */}
      <header className={style.navBar}>
        <div className={style.menuIcon}>
          <MenuIcon fontSize="medium" />

          {/* <Drawer open={this.state.drawer} onClose={this.toggleDrawer}>
            <List style={{ minWidth: 250 }}>
              {[
                {
                  icon: HomeOutlinedIcon,
                  label: "Wedding Services",
                  path: "/",
                },
                {
                  icon: HomeOutlinedIcon, //"user",
                  label: "Vendor Login",
                  path: "/vendor/login",
                },
              ].map((obj, index) => (
                <Link
                  href={obj.path}
                  variant="inherit"
                  color="inherit"
                  underline="none"
                >
                  <ListItem button key={obj.label}>
                    <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
                      {obj.icon === HomeOutlinedIcon ? (
                        <obj.icon />
                      ) : (
                        <img
                          src={require(`../../images/${obj.icon}.png`)}
                          width="22"
                          height="20"
                        />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={obj.label} />
                  </ListItem>
                </Link>
              ))}
            </List>

            <List
              style={{
                minWidth: 250,
                position: "absolute",
                bottom: 0,
                borderTop: "1px solid #ddd",
                backgroundColor: "#fff",
              }}
            >
              {[
                {
                  icon: MailOutlineIcon,
                  label: "contact@feba.co.in",
                  path: "mailto:contact@feba.co.in",
                },
                {
                  icon: WhatsAppIcon,
                  label: "+91 7304879310",
                  path: "https://wa.me/917304879310",
                },
                {
                  icon: InstagramIcon,
                  label: "@feba__",
                  path: "https://www.instagram.com/feba__/",
                },
              ].map((obj, index) => (
                <Link
                  href={obj.path}
                  target="_blank"
                  variant="inherit"
                  color="inherit"
                  underline="none"
                >
                  <ListItem button key={obj.label}>
                    <ListItemIcon style={{ minWidth: 0, marginRight: 10 }}>
                      <obj.icon style={{ fontSize: 22 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={obj.label}
                      className="drawerContact"
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer> */}
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
          <Filter
            filterName="City"
            getFilterArray={getCityFilterArray}
            DefaultRadioValueObj={{
              label: "City",
              value: "all",
            }}
            onApplyFilter={() => null}
          />
        </div>

        <div className={style.service_filter}>
          <Filter
            filterName="wedding services"
            getFilterArray={getCategoryFilterArray}
            DefaultRadioValueObj={{
              label: "wedding Services",
              value: "all",
            }}
            onApplyFilter={() => null}
          />
        </div>

        <Divider
          style={{
            margin: "0 4px",
            marginTop: "10px",
            minHeight: "inherit",
            color: "red",
            height: "25px",
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <div className={style.other_filter}>
          {/* <TuneIcon />
          Filter */}

          <AllFilters
            citySlug="mumbai" //{city}
            pathname="pathname" //{props.location.pathname}
            query={{}} //{props.location.query}
            max={100} // {parseInt(resultData.max_price_limit)}
            min={0} //{parseInt(resultData.min_price_limit)}
            priceLabel="label" //{resultData.price_limit_filter_label}
          />
        </div>
      </div>
      <hr></hr>

      {/* main content */}
      <div className={style.main_container}>
        <div className={style.container_heading}>
          <Typography variant="h5">Bridal Makeup Artist in Mumbai</Typography>
          <Typography variant="h6">Showing 271+result</Typography>
        </div>
        <Grid container spacing={3}>
          {vendors.map((vendor_data) => (
            <VendorCard
              ref={() => null}
              vendor={vendor_data}
              onFav={() => null}
              key={vendor_data.vendor_id}
            />
          ))}
        </Grid>

        
      </div>
    </div>
  );
};

export default ListingPage;
function getCityFilterArray() {
  return [
    { label: "Mumbai", value: "mumbai" },
    { label: "Delhi-NCR", value: "delhi-ncr" },
    { label: "Kolkata", value: "kolkata" },
    { label: "Banglore", value: "banglore" },
  ];
}
function getCategoryFilterArray() {
  return [
    { label: "Bridal Makeup", value: "bridal-makeup" },
    { label: "Venue", value: "venue" },
    { label: "Photographer", value: "photographer" },
    { label: "Dj", value: "dj" },
    { label: "Food stall", value: "food-stall" },
    { label: "Wedding Pandits", value: "wedding-pandit" },
  ];
}
