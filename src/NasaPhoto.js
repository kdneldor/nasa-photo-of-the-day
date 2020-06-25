import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./NasaPhoto.css";
const NasaPhoto = (props) => {
  return (
    <Card>
      <CardImg className="apod-img" src={props.hdurl} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.explanation}</p>
        <p>Date: {props.date}</p>
        <p>Photo by: {props.copyright}</p>
      </CardBody>
    </Card>
  );
};

export default NasaPhoto;
