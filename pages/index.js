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

			<div className={navstyles.contentcontainer}>
				<div className={navstyles.contentleft}>
					<Typography
						variant="h6"
						textAlign="left"
						style={{
							fontWeight: 400,
							fontSize: `16px`,
						}}>
						Feba Experiences
					</Typography>

					<Typography
						variant="h5"
						textAlign="left"
						style={{
							margin: "7px 0",
							fontWeight: 600,
							fontSize: `30px`,
							lineHeight: 1.1,
						}}>
						Unique things to do in 9th arroundissment of Paris
					</Typography>
					<div style={{ marginBottom: "12px" }}>
						<Typography
							variant="p"
							style={{
								color: `#000`,
								// color: `#717171`,
								fontSize: `15px`,
								fontWeight: 400,
							}}>
							Book unforgetable activities hosteb by locals on Feba
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
							style={{ marginTop: "8px" }}
							startIcon={<SearchIcon fontSize="16px" />}>
							Search
						</Butn>
					</div>
				</div>
				<div className={navstyles.contentright}>
					<Image
						src="/bride8.jpg"
						alt="geezer on a bike"
						width={960}      //1000
						height={535}     //
						className={navstyles.contentright_img}
					/>
				</div>
			</div>
		</div>
	);
}
