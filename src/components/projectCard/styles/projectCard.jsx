import { Button } from '@mui/material';
import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(Button)`
  margin-top: 0.5rem;
  font-size: 8px;
  text-transform: capitalize;
  justify-content: start;
`;

const AccordionDetailsStyled = styled(AccordionDetails)`
  display: 'flex';
  flexdirection: 'column';
`;

const AccordionStyled = styled(Accordion)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: #fff;
`;

export { ButtonStyled, AccordionStyled, AccordionDetailsStyled };
