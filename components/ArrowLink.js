import styles from "../styles/ArrowLink.module.css";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function ArrowLink() {
  return (
    <div className={styles.arrow}>
      <Link href="/projects">
        <a>
          projects
          <FaChevronDown />
        </a>
      </Link>
    </div>
  );
}
