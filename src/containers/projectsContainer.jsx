import React, { useState, useEffect } from 'react';
import { ProjectCard, ProjectsFilter } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

function ProjectsContainer({ db }) {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  const getAllProjects = () => {
    db.collection('projects').onSnapshot((snapshot) => {
      const projects = [];
      snapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });
      setProjects(projects);
    });
  };

  useEffect(() => {
    if (activeCategories[0] !== null) {
      const projectsFiltered = projects.filter((project) => {
        return project.categoriesProjects?.includes(activeCategories[0]);
      });
      setFilterProjects(projectsFiltered);
    } else {
      setFilterProjects(projects);
    }
  }, [activeCategories]);

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="px-5">
      <ProjectsFilter db={db} setActiveCategories={setActiveCategories} />
      <Swiper
        spaceBetween={10}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        breakpoints={{
          1710: {
            slidesPerView: 5,
          },
          1368: {
            slidesPerView: 4,
          },
          1026: {
            slidesPerView: 3,
          },
          684: {
            slidesPerView: 2,
          },
          342: {
            slidesPerView: 1,
          },
        }}
      >
        {filterProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsContainer;
