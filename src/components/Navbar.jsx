import React from "react";
import navstyles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";

const Navbar = () => {
	return (
		<div className={navstyles.navbar}>
			<div className={navstyles.left}>
				<Link href="/">
					<Image
						src="/Logo.png"
						alt="Company Logo"
						width={"40px"}
						height={"20px"}
					/>
				</Link>

				<span className={navstyles.logoname}>
					<Link href="/">
						<Typography variant="h5" fontSize={"18px"} marginLeft={"10px"}>
							Feba
						</Typography>
					</Link>
				</span>
			</div>
			<div className={navstyles.right}>
				<div className={navstyles.rightelem}>Become a Host</div>
				<div className={navstyles.rightelem}>Sign Up</div>
				<div className={navstyles.rightelem1}>Login</div>
			</div>
		</div>
	);
};

export default Navbar;
