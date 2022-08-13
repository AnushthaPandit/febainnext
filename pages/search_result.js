import Typography from "@mui/material/Typography";
import React from "react";
import Navbar_1 from "../src/components/Navbar_1";
import style from "../styles/Search.module.css";
import Image from "next/image";

const anchor_cards = [
	{ title: "Culture", href: "#" },
	{ title: "History Experiences", href: "#" },
	{ title: "Photography", href: "#" },
	{ title: "Architecture", href: "#" },
	{ title: "Sightseeing", href: "#" },
];

const search_result = () => {
	return (
		<div className={style.search_container}>
			<Navbar_1 />
			{/* <hr></hr> */}
			<Typography variant="h5" component="div" gutterBottom>
				Find local things to do
			</Typography>
			<div className={style.anchor_cards_container}>
				{anchor_cards.map((obj, idx) => (
					<a key={idx} href={obj.href} className={style.anchor_card}>
						{obj.title}
					</a>
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
								alt="deja vu bridal make up"
								src="/bride2.jpg"
								height="400rem"
								width="500rem"
								className={style.subimage_1}></Image>
						</div>
						<div className={style.subpart_2}>
							<div className={style.vendor_title}>Dejavu Makeup By Vinni</div>
							<div className={style.ranking_package}>verified</div>
							<div className={style.vendor_city}>Bangalore</div>
							<div className={style.vendor_service_price}>15000</div>
						</div>
					</div>
				</div>
				<div className={style.part_2}></div>
			</div>
		</div>
	);
};

export default search_result;
