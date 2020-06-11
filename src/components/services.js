import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: gray;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ServicesStyles = styled.div`
  border-bottom: solid 2px;
`;

const Services = () => {
  return (
    <Container>
      <ServicesStyles>
        <h1>Code Analysis</h1>
        <p>
          Allowable Areas, Type of Construction, Occupant Load Calculations,
          Exit Analysis and Disabled Access
        </p>
      </ServicesStyles>
      <ServicesStyles>
        <h1>Electrical Design</h1>
        <p>
          Panel Schedules, Service Load, Voltage Drop and Short Circuit
          Calculations
        </p>
      </ServicesStyles>
      <ServicesStyles>
        <h1>Plumbing Design</h1>
        <p>
          Fixture Load Calculations, Drain Waste & Vent, Hot & Cold Water,
          Condensate Waste and Gas Pipe Sizing
        </p>
      </ServicesStyles>
      <ServicesStyles>
        <h1>Mechanical Design</h1>
        <p>HVAC: Unit Sizing, Duct Sizing, Kitchen Hood and Make Up Air</p>
      </ServicesStyles>
      <ServicesStyles>
        <h1>Title 24 Energy Reports</h1>
        <p>Residential & Non-Residential</p>
      </ServicesStyles>
    </Container>
  );
};

export default Services;
