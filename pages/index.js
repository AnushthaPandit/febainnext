import Head from "next/head";

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
            }}
          >
            Feba Experiences
          </Typography>

          <Typography
            variant="h5"
            textAlign="left"
            style={{
              fontWeight: 900,
            }}
          >
            Unique things to do in 9th arroundissment of Paris
          </Typography>
          <Typography variant="h6" textAlign="left" style={{ color: `#757575` }}>
            <p>Book unforgetable activities hosteb by the locals on Airbnb</p>
          </Typography>

          <div className={navstyles.left_second}>
            <InputBox width="100%" />
            <InputBox width="100%" />
            <Butn width="100%" />
          </div>
        </div>
        <div className={navstyles.contentright}>
          <img src="/frontphoto.webp" alt="" width={1000} height={560} />
        </div>
      </div>
    </div>
  );
}
