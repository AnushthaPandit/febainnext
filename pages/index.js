import Head from "next/head";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

import styles from "../styles/Home.module.css";
import Butn from "../src/components/Button";
import InputBox from "../src/components/InputBox";
import navstyles from "../styles/Navbar.module.css";
import Typography from "@mui/material/Typography";
import Navbar from "../src/components/Navbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<Navbar />

			{/* from here main content part start */}

			<div
				className={
					navstyles.contentcontainer + " " + navstyles.default_page_container
				}>
				<div className={navstyles.contentleft}>
					<Typography
						variant="h6"
						textAlign="left"
						 className={navstyles.text1}>
						FEBA EXPERIENCES
					</Typography>

					<Typography
						variant="h5"
						textAlign="left"
					    className={navstyles.text2}>
						Unique things to do in 9th arroundissment of Paris
					</Typography>
					<div style={{ marginBottom: "12px" }}>
						<Typography
							variant="p"
							 className={navstyles.text3}>
							Book unforgetable activities hosted by locals on Feba
						</Typography>
					</div>
					<div className={navstyles.left_second}>
						<InputBox
							label="location"
							defaultValue="9th arrondissement of Paris, Paris, France"
							fullWidth
						/>
						<InputBox
							label="Services"
							defaultValue="Bridal Makeup Artist"
							fullWidth
							style={{
								margin: "10px 0",
							}}
						/>
						<Butn
							style={{ marginTop: "5px", marginBottom: "0" }}
							startIcon={<SearchIcon fontSize="16px" />}>
							Search
						</Butn>
					</div>
				</div>
				<div className={navstyles.contentright}>{/* <h1>Hello</h1> */}</div>
			</div>
		</div>
	);
}
