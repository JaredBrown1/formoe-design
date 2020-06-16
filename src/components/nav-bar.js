import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../design_files/Logo.jpg";

const MainContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 30px;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  font-size: 20px;
`;

const LinkStyle = {
  textDecoration: "none",
  height: "50px",
  width: "150px",
  color: "gray",
  borderRadius: "50px",
  paddingBottom: "10px",
};

const NavBar = () => {
  return (
    <MainContainer>
      <Container>
        <Link to="/">
          <img
            src={logo}
            alt="Formoe Design Logo"
            width="150px"
            height="80px"
          />
        </Link>
      </Container>
      <Container>
        <Link style={LinkStyle} to="/">
          Home
        </Link>
        <Link style={LinkStyle} to="/services">
          Services
        </Link>
        <Link style={LinkStyle} to="/about">
          About
        </Link>
        <Link style={LinkStyle} to="/certifications">
          Certifications
        </Link>
      </Container>
    </MainContainer>
  );
};

export default NavBar;
