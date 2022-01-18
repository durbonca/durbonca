import React from 'react';
import { ProjectCard, ProjectsFilter } from '../components';
// import HorizontalScroll from 'react-horizontal-scrolling';
// import HorizontalScroller from 'react-horizontal-scroll-container';

function ProjectsContainer() {
  return (
    <div className="px-5">
      <ProjectsFilter />
      <div className="flex overflow-x-scroll">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectsContainer;
