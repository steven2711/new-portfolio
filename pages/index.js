import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div>
      <Head>
        <title>Steven Watson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Steven Watson | Frontend Developer" />
      </Head>
      <main className={styles.container}>
        <Header />
      </main>
    </motion.div>
  );
}
