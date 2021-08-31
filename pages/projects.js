import projects from "../data/projects.json";
import Project from "../components/Project";
import Button from "../components/Button";
import VideoBackground from "../components/VideoBackground";
import { motion } from "framer-motion";

export default function ProjectsPage() {
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
      <div className="projects">
        <VideoBackground />
        <Button text="home" path="/" direction="up" />
        <div className="project-container">
          {projects.map((project, index) => (
            <Project key={index} data={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
