import styles from './ProjectsStyles.module.css';
import multiagent from '../../assets/multiagent.png';
import siam from '../../assets/siam.png';
import system from '../../assets/system.png';
import scatter from '../../assets/scatter.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={system}
          link="https://github.com/Janewu1128/mlc"
          h3="My Learning Coach Web"
          p="Typescript, Next.js, PostgreSQL, Docker"
        />
        <ProjectCard
          src={multiagent}
          link="https://github.com/Janewu1128/microservices"
          h3="Microservice Application"
          p="Java, Spring Boot, Spring Cloud"
        />
        <ProjectCard
          src={siam}
          link="https://github.com/Janewu1128/serverless_blog"
          h3="Serverless Web Blog"
          p="Typescript, React, AWS"
        />
        {/* <ProjectCard
          src={scatter}
          link="https://github.com/alicechen216/MAT6932"
          h3="Scattered Data Approximation"
          p="Franke Function"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
