import Title from "./Title";
import Button from "./Button";
import VideoBackground from "./VideoBackground";
import { motion } from "framer-motion";

export default function Header() {
  const animations = {
    pageExit: {
      filter: `blur(20px)`,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    pageEnter: {
      opacity: 0,
    },
    pageFinish: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      initial="pageEnter"
      animate="pageFinish"
      exit="pageExit"
      variants={animations}
    >
      <header className="header">
        <VideoBackground />
        <Title />
        <Button text="projects" path="/projects" direction="down" />
      </header>
    </motion.div>
  );
}
