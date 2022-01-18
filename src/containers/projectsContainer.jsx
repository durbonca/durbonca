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

  const getProjects = () => {
    db.collection('projects').onSnapshot((snapshot) => {
      const projects = [];
      snapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });
      setProjects(projects);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log('projects', projects);

  return (
    <div className="px-5">
      <ProjectsFilter />
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
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsContainer;
