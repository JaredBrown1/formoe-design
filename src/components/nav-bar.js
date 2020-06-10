import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../design_files/Logo.jpg";

const Container = styled.div`
  background-color: red;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  font-size: 50px;
  padding-top: 30px;
`;

const LinkStyle = {
  textDecoration: "none",
  backgroundColor: "white",
  height: "50px",
  width: "320px",
  color: "gray",
  borderRadius: "50px",
  paddingBottom: "10px",
};

const NavBar = () => {
  return (
    <Container>
      <Link style={LinkStyle} to="/">
        Home
      </Link>
      <Link style={LinkStyle} to="/services">
        Services
      </Link>
      <Link to="/">
        <img src={logo} alt="Formoe Design Logo" width="150px" height="80px" />
      </Link>
      <Link style={LinkStyle} to="/about">
        About
      </Link>
      <Link style={LinkStyle} to="/certifications">
        Certifications
      </Link>
    </Container>
  );
};

export default NavBar;
