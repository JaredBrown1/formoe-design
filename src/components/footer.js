import React from "react";
import styled from "styled-components";

const Feetstyles = styled.div`
  height: 0px;
  max-width: 80%;

  margin: 0 auto;
`;

const TextStyles = styled.h1`
  background-color: white;
  width: 800px;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <Feetstyles>
      <TextStyles>Formoe Copyright 2020</TextStyles>
    </Feetstyles>
  );
};

export default Footer;
