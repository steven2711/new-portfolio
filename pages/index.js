import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steven Watson</title>
        <meta name="description" content="Steven Watson | Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}
