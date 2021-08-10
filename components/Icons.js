import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import styles from "../styles/Icons.module.css";

export default function Icons() {
  return (
    <div className={styles.icons}>
      <a
        href="https://www.linkedin.com/in/stevenwatson47/"
        target="_blank"
        rel="nofollow"
      >
        <FaLinkedin />
      </a>

      <a href="https://github.com/steven2711" target="_blank" rel="nofollow">
        <FaGithub />
      </a>

      <a
        href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
        target="_blank"
      >
        <FaEnvelope />
      </a>

      <a
        href="/resume/steven-watson-resume.pdf"
        download="steven-watson-resume.pdf"
      >
        <FaDownload />
      </a>
    </div>
  );
}
