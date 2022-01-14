import React from 'react';
import { ProjectCard } from '../components';
import { ProjectsFilter } from '../components';
import { ProjectsCarousel } from '../components/';

function ProjectsContainer() {
  return (
    <>
      <ProjectsFilter />
      <ProjectsCarousel>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsCarousel>
    </>
  );
}

export default ProjectsContainer;
