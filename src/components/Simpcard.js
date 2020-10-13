import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './Simpcard.css'

const Simpcard = ({image, firstName, lastName}) => {
  return (
    <div className="container">
      <Card className="cbody">
        <CardImg className="img" src={image} alt={firstName + "" + lastName} />
        <CardBody>
          <CardTitle>{firstName}</CardTitle>
          <CardSubtitle>{lastName}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Simpcard;
