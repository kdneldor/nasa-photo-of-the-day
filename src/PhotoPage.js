import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PhotoPage = props => {
    return (
      <div>
      <Card>
        <CardImg top width="100%" src={props.hdurl} alt="Card image cap" />
        <CardBody>
    <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div> 
    );
  };

export default PhotoPage;


{/* <div className="photo-header">
          <h2>{props.title}</h2>
        <div className="photo-image-wrapper">
          <img
            alt="galaxies"
            className="photo-image"
            src={props.hdurl}
          />
        </div>
       
      </div> */}