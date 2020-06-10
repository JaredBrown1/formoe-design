import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: gray;
  max-width: 80%;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <Container>
      <h1>Home page component</h1>
    </Container>
  );
};

export default Home;
