import React from 'react'
import navstyles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <div className={navstyles.navbar}> 
        <div className={navstyles.left}>
          <a>
            <Image src="/Logo.png" alt="" width={60} height={21.813} />
          </a>
          <span className={navstyles.logoname}>
            <Link href="/">
              <a><Typography variant="h5">Feba</Typography></a>
            </Link>
          </span> 
        </div>
        <div className={navstyles.right}>
          <div className={navstyles.rightelem}>Become a Host</div>
          <div className={navstyles.rightelem}>Sign Up</div>
          <div className={navstyles.rightelem}>Login</div>
        </div>
      </div>
  )
}

export default Navbar
