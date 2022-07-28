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
              fontSize:`16px`,
              marginBottom:`8px`
            }}
          >
            Feba Experiences
          </Typography>

          <Typography
            variant="h5"
            textAlign="left"
            style={{
              fontWeight: 520,
              fontSize: `30px`,
              lineHeight: 1.2
            }}
          >
            Unique things to do in 9th arroundissment of Paris
          </Typography>
          <Typography variant="h6" textAlign="left" style={{ color: `#9e9e9e`,
        fontSize:`15px` ,fontWeight:`50px` ,lineHeight: 1.3}}>
            <p>Book unforgetable activities hosteb by locals on Feba</p>
          </Typography>

          <div className={navstyles.left_second}>
            <InputBox width="100%" />
            <InputBox width="100%" />
            <Butn width="100%" />
          </div>
        </div>
        <div className={navstyles.contentright}>
          <img src="/frontphoto.webp" alt="" width={1000} height={545} className={navstyles.contentright_img}/>
        </div>
      </div>
    </div>
  );
}
