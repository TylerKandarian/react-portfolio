import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars.githubusercontent.com/u/110927902?v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Tyler Kandarian"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Tyler Kandarian and I am a Full Stack Web Developer. I have a bachelors in Aviation Science
            and Managementbut but pivited to help companies find faster solutions and help users have a better experience on web applications.
            I am proficient with HTML, CSS, JavaScript, React and much more. I have experience with Windows operating systems and Mac OS. 
            I have an eagerness to learn more and always advance in what i am doing. There is alwasy new techniques and technologies to learn so in my free time 
            thats is what I do along with watching Soccer, learning aboyt space and playing video games.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;