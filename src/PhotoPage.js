import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import './PhotoPage.css'
const PhotoPage = (props) => {
  return (
    <Card>
      <CardImg className = 'apod-img' src={props.hdurl} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default PhotoPage;
