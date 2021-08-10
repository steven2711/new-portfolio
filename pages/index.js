import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steven Watson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Steven Watson | Frontend Developer" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}
