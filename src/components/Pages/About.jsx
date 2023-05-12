import React from "react";
import "./css/About.scss";
import Container from "../fragment/Container";
import Attribution from "../fragment/Attribution";

const About = () => {
  return (
    <Container>
      <div className={"About"}>
        <Attribution />
      </div>
    </Container>
  );
};
export default About;
