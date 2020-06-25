import React from "react";
import styled from "styled-components";

const NasaHeader = () => {
  const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #FC3D21;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: #0B3D91;
  `;
  return (
    <div className="NasaHeader">
      <Wrapper>
        <Title>Welcome, to NASA's Photo of the Day!</Title>
      </Wrapper>
    </div>
  );
};

export default NasaHeader;
