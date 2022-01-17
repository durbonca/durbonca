import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore, MdPreview } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

import { ButtonStyled, AccordionStyled, AccordionDetailsStyled } from './styles/projectCard';

function ProjectCard() {
  return (
    <div className="flex flex-col border-solid m-3 p-6 rounded-xl shadow-lg blue-glassmorphism min-w-fit max-w-[350px]">
      <h1 className="text-2xl">Titulo</h1>
      <img className="w-5/6 h-40 object-cover mx-auto my-2 rounded-2xl shadow-lg" src="https://picsum.photos/200/200" />
      <p className="my-2 text-sm">small caption</p>
      <AccordionStyled>
        <AccordionSummary
          expandIcon={<MdExpandMore style={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1>See more...</h1>
        </AccordionSummary>
        <AccordionDetailsStyled sx={{ display: 'flex', flexDirection: 'column' }}>
          <ButtonStyled variant="outlined" color="inherit" startIcon={<MdPreview />}>
            <div className="text-sm md:text-md">View the demo</div>
          </ButtonStyled>
          <ButtonStyled variant="outlined" color="inherit" startIcon={<AiFillGithub />}>
            <div className="text-sm md:text-md">Explore the code</div>
          </ButtonStyled>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </div>
  );
}

export default ProjectCard;
