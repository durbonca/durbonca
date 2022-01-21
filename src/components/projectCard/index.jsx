import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore, MdPreview } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

import { ButtonStyled, AccordionStyled, AccordionDetailsStyled } from './styles/projectCard';

function ProjectCard({ project }) {
  const { gitUrl, url, description, title, imgUrl } = project;
  return (
    <div className="flex flex-col justify-around border-solid m-3 p-6 rounded-xl shadow-lg blue-glassmorphism min-h-[450px] w-[300px]">
      <h1 className="text-2xl text-white">{title}</h1>
      <img className="w-5/6 h-40 object-cover mx-auto my-2 rounded-2xl shadow-lg" src={imgUrl} />
      <p className="my-2 text-sm text-white">{description}</p>
      {(gitUrl || url) && (
        <AccordionStyled>
          <AccordionSummary
            expandIcon={<MdExpandMore style={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1>See more...</h1>
          </AccordionSummary>
          <AccordionDetailsStyled sx={{ display: 'flex', flexDirection: 'column' }}>
            {url && (
              <ButtonStyled variant="outlined" color="inherit" startIcon={<MdPreview />}>
                <a href={url} target="_blank" className="text-sm md:text-md" rel="noreferrer">
                  View the demo
                </a>
              </ButtonStyled>
            )}
            {gitUrl && (
              <ButtonStyled variant="outlined" color="inherit" startIcon={<AiFillGithub />}>
                <a target="_blank" href={gitUrl} className="text-sm md:text-md" rel="noreferrer">
                  Explore the code
                </a>
              </ButtonStyled>
            )}
          </AccordionDetailsStyled>
        </AccordionStyled>
      )}
    </div>
  );
}

export default ProjectCard;
