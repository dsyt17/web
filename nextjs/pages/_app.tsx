import Layout from "../components/Layout";
import "../styles/globals.scss";
import Image from "next/image";
import snowCat from "../public/kot_sneg.jpg";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={snowCat}
      width="500"
      height="300"
      alt="cat"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
