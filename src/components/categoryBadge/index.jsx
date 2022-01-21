import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import randomColor from 'randomcolor';

const categoryBadge = ({ id, title, setActiveCategories }) => {
  const [color, setColor] = useState('');
  useEffect(() => {
    setColor(randomColor({ luminosity: 'light' }));
  }, []);

  const ButtonStyled = styled(Button)({
    margin: '10px',
    color: `${color}`,
    borderColor: `${color}`,
    ':hover': {
      color: '#1976d2',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.775rem',
      margin: '2px',
    },
  });

  return (
    <ButtonStyled onClick={() => setActiveCategories([id])} variant="outlined">
      {title}
    </ButtonStyled>
  );
};

export default categoryBadge;
