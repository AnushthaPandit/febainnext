import React from "react";

import Image from "next/image";
import Link from "next/link";

import Typography from "@mui/material/Typography";

import Navbar_1 from "../src/components/Navbar_1";
import style from "../styles/Search.module.css";
import artists from "../mock.json";
import configs from "../src/configs";

const anchor_cards = [
  { title: "Culture", href: "#" },
  { title: "History Experiences", href: "#" },
  { title: "Photography", href: "#" },
  { title: "Architecture", href: "#" },
  { title: "Sightseeing", href: "#" },
];

const Searchresult = () => {
   
  const {data} = artists;
  const vendors = data.vendors.slice(1,4);
  const firstvendor = data.vendors[0];
  return (
    <div className={style.search_container}>
      <Navbar_1 />
      {/* <hr></hr> */}
      <Typography variant="h5" component="div" gutterBottom>
        Find local things to do
      </Typography>
      <div className={style.anchor_cards_container}>
        {anchor_cards.map((obj, idx) => (
          <Link key={idx} href={obj.href}>
            {obj.title}
          </Link>
        ))}
      </div>

      <div className={style.main_content}>
        <div className={style.part_1}>
          <div className={style.part1_heading}>
            <Typography variant="h5" component="div" gutterBottom>
              Showing best result from Mumbai
            </Typography>
          </div>
          <div className={style.subpart}>
            <div className={style.subpart_1}>
              <Image
                alt={firstvendor.vendor_title}
                src={configs.BASE_URL+firstvendor.image_url}
                height="275rem"
                width="325rem"
                className={style.subimage_1}
              ></Image>
            </div>
            <div className={style.subpart_2}>
              <div className={style.vendor_title}>{firstvendor.vendor_title}</div>
              <div className={style.ranking_package}>{firstvendor.ranking_package}</div>
              <div className={style.vendor_city}>{firstvendor.vendor_city}</div>
              <div className={style.vendor_service_price}>{firstvendor.vendor_service_price}</div>
            </div>
          </div>
        </div>
        <div className={style.part_2}>
          {/* <Image
            alt="deja vu bridal make up"
            src="/bride3.jpg"
            height="325rem"
            width="400rem"
            className={style.subimage_12 + " " + style.imageStyle}
          />
          <Image
            alt="deja vu bridal make up"
            src="/bride8.jpg"
            height="325rem"
            width="400rem"
            className={style.subimage_12}
          />
          <Image
            alt="deja vu bridal make up"
            src="/bride5.jpg"
            height="325rem"
            width="400rem"
            className={style.subimage_12}
          /> */}
          {vendors.map((data,idx) => {
            const img_url = configs.BASE_URL+data.image_url
            return <Image
            alt={data.vendor_title}
            src={img_url}
            height="225rem"
            width="200rem"
            className={style.subimage_12 + " " + style.imageStyle}
          />
          })}
        </div>
        
          
      </div>
      
    </div>
  );
};

export default Searchresult;
