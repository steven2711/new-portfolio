import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="icons">
      <a
        href="https://www.linkedin.com/in/stevenwatson47/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a href="https://github.com/steven2711" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a href="mailto:swatson.emu@gmail.com">
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
