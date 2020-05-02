import React from "react";

const PhotoPage = props => {
    return (
      <div className="photo-header">
          <h2>{props.title}</h2>
        <div className="photo-image-wrapper">
          <img
            alt="galaxies"
            className="photo-image"
            src={props.hdurl}
          />
        </div>
       
      </div>  
      
    );
  };

export default PhotoPage;


  