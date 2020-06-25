import React from "react";
import styled from "styled-components";
import {RocketIcon} from '@primer/octicons-react';


const NasaFooter = () => {
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #FC3D21;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: #0B3D91;
  `;


  return (
    <div classname="footer">
      <Wrapper>
        <Title>Thanks for visiting!</Title>
        <RocketIcon size={24}/>
      </Wrapper>
    </div>
  );
};

export default NasaFooter;
