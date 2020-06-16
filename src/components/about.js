import React from "react";
import styled from "styled-components";
import Image from "../design_files/gary-pic.jpg";

const Container = styled.div`
  background-color: whitesmoke;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 80%;
  font-size: 25px;
`;

const ImageStyle = styled.img`
  width: 450px;
  height: 500px;
`;

const AboutCont = styled.div`
  padding: 30px;
`;

const About = () => {
  return (
    <Container>
      <AboutCont>
        <ImageStyle src={Image} alt="pic of gary" />
      </AboutCont>
      <AboutCont>
        <p>
          Hi my name is Gary Formoe, owner and creator of 4MO Design.
          <br />
          I have been working in the construction industry since 1974. In
          <br />
          1984, I was hired by the County of Riverside and worked there as a
          <br />
          Building Inspector, Senior Building Inspector and Plans Examiner. In
          <br />
          June of 2000, I was hired as the only Plans Examiner for the City of{" "}
          <br />
          Temecula. I have been drafting plans for building projects since{" "}
          <br /> 1987. Due to my 25 years of experience with the County and
          City, I <br /> am well aware of what is required to be shown on the
          plans to be <br /> approved by the plan check division. I specialize
          in electrical, <br /> plumbing and energy reports and code consulting.
        </p>
      </AboutCont>
    </Container>
  );
};

export default About;
