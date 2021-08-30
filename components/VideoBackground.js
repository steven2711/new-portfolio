import styles from "../styles/VideoBackground.module.scss";

export default function VideoBackground() {
  return (
    <div className={styles.container}>
      <video src="/video/background.mp4" muted autoPlay loop></video>
      <div className={styles.overlay}></div>
    </div>
  );
}
