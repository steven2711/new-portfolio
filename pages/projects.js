import projects from "../data/projects.json";
import Project from "../components/Project";
import styles from "../styles/Projects.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      {projects.map((project, index) => {
        return <Project key={index} data={project} />;
      })}
    </div>
  );
}
