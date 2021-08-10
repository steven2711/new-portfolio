import styles from "../styles/Header.module.css";
import Title from "./Title";

export default function Header() {
  return (
    <header className={styles.header}>
      <Title />
      <video src="/video/background.mp4" muted autoPlay loop></video>
      <div className={styles.overlay}></div>
    </header>
  );
}
