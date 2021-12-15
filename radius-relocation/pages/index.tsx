import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Radius Relocation</title>
        <meta name="keywords" content="apartments, relocation, moving" />
      </Head>
      {/* <h1>Radius Relocation!</h1> */}
    </div>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const res = await fetch('https')
// }
