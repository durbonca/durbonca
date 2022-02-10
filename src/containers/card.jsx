import React from 'react';
import { Card } from '../components';

export function CardContainer() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>HI</Card.Title>
        <Card.TitleText>
          MY NAME IS
          <Card.Name name={['Manuel Durán']}></Card.Name>
        </Card.TitleText>
        <Card.Space />
      </Card.Body>

      <Card.Carreer className="text-white">Web UI Developer</Card.Carreer>
    </Card>
  );
}
