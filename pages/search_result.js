import React from "react";
import Navbar from "../src/components/Navbar";
import style from "../styles/Search.module.css";

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
			<Navbar />

			<div className={style.anchor_cards_container}>
				{anchor_cards.map((obj, idx) => (
					<a key={idx} href={obj.href} className={style.anchor_card}>
						{obj.title}
					</a>
				))}
			</div>
			<div className={style.main_content}>
				<div className={style.part_1}></div>
				<div className={style.part_2}></div>
			</div>
		</div>
	);
};

export default search_result;
