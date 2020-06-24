import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const NasaPhoto = (props) => {
    return (
        <Card>
          <CardImg className = 'apod-img' src={props.hdurl} />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
          </CardBody>
        </Card>
      );
};

export default NasaPhoto;