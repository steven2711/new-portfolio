import Icons from "./Icons";
import styles from "../styles/Title.module.scss";

export default function Title() {
  return (
    <div className={styles.title}>
      <h1>
        Hello, <br />
        I&apos;m Steven
      </h1>
      <p>frontend developer</p>
      <Icons />
    </div>
  );
}
