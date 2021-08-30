import styles from "../styles/Header.module.scss";
import Title from "./Title";
import Button from "./Button";
import VideoBackground from "./VideoBackground";

export default function Header() {
  return (
    <header className={styles.header}>
      <VideoBackground />
      <Title />
      <Button text="projects" path="/projects" direction="down" />
    </header>
  );
}
