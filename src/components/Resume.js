import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Resume from "../assets/TYLER_WEBDEV_2023.pdf";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-4">
      <MDBRow>
        <MDBCol md="12">
          <embed id="Resume" src={Resume} width="100%" height="750px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;