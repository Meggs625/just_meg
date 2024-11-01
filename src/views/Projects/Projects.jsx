import React from "react";
import styles from "./Projects.module.scss";
import Title from "../../components/Title/Title";
import projectDetails from "../../dataFiles/projectDetails";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className={styles.projects_wrapper}>
      <Title variant="1">My Projects</Title>
      <div className={styles.project_description_container}>
        {projectDetails.map(({ title, img, alt, link }) => (
          <ProjectCard title={title} img={img} alt={alt} link={link} />
        ))}
      </div>
    </section>
  );
}
