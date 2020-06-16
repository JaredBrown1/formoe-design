import React from "react";
import styled from "styled-components";
import Image from "../design_files/facebook.png";

const Container = styled.div`
  background-color: whitesmoke;
  max-width: 80%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const HomeCont = styled.div`
  padding: 30px;
`;

const ImageStyle = styled.img`
  height: 300px;
  width: 500px;
  padding-top: 35px;
`;

const TextStyle = styled.h2`
  border-bottom: solid 2px;
`;

const Home = () => {
  return (
    <Container>
      <HomeCont>
        <TextStyle>
          Residential and Commercial Plans for all your building plan needs
        </TextStyle>
        <TextStyle>
          Specializing in Electrical, Mechanical and Plumbing design
        </TextStyle>
        <TextStyle>California Disabled Access and Code Consulting</TextStyle>
        <TextStyle>
          Title 24 energy Calculations for Residential and Non-Residential
        </TextStyle>
      </HomeCont>

      <HomeCont>
        <a href="https://www.facebook.com/formoedesign">
          <ImageStyle src={Image} alt="facebook link" />
        </a>
      </HomeCont>
    </Container>
  );
};

export default Home;
