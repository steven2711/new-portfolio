import styles from "../styles/Button.module.scss";
import Link from "next/link";

export default function Button({ text, path, direction }) {
  return (
    <>
      {direction === "down" ? (
        <div className={styles.buttonDown}>
          <Link href={path}>
            <a>{text}</a>
          </Link>
        </div>
      ) : direction === "up" ? (
        <div className={styles.buttonUp}>
          <Link href={path}>
            <a>{text}</a>
          </Link>
        </div>
      ) : null}
    </>
  );
}
