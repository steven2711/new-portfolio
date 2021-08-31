import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function HomePage() {
  const animations = {
    pageExit: {
      filter: `blur(20px)`,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    pageEnter: {
      opacity: 0,
    },
    pageFinish: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
    // initial="pageEnter"
    // animate="pageFinish"
    // exit="pageExit"
    // variants={animations}
    >
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
