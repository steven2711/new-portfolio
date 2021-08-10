import "../styles/globals.css";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Cursor /> */}
    </>
  );
}

export default MyApp;
