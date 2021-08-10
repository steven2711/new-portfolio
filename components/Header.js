import styles from "../styles/Header.module.css";
import Title from "./Title";
import ArrowLink from "./ArrowLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <Title />
      <video src="/video/background.mp4" muted autoPlay loop></video>
      <div className={styles.overlay}></div>
      <ArrowLink />
    </header>
  );
}
