import React from 'react';
import { ProjectCard, ProjectsFilter } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

function ProjectsContainer() {
  return (
    <div className="px-5">
      <ProjectsFilter />
      <Swiper
        spaceBetween={10}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
        allowTouchMove={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProjectsContainer;
