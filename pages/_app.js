import "../styles/globals.scss";
import "../styles/Header.scss";
import "../styles/Button.scss";
import "../styles/Title.scss";
import "../styles/Icons.scss";
import "../styles/Projects.scss";
import "../styles/Project.scss";

import Cursor from "../components/Cursor";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
