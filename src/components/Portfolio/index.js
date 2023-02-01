import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-20">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border">
          <MDBCardImage
            style={{ height: "225" }}
            src="https://camo.githubusercontent.com/5fa49026cddb8d8edbee05f09575293c3d25988660a316a93040c8dd16f34660/68747470733a2f2f692e696d6775722e636f6d2f734c3431314c322e706e67"
            alt="Brewery Locator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Brewery Locator</MDBCardTitle>
            <MDBCardText>
              As a perosn who enjoys Beer or a good time out with friends, this
              site lets you search your area and see the closest brewerys
              around.
            </MDBCardText>
            <MDBBtn
              href="https://tylerkandarian.github.io/Project-1---Local-Brewery-Finder/" target="_blank"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/TylerKandarian/Comic-Case/main/public/img/comic-case-feed.png"
            alt="Comic Collector"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Comic Collector</MDBCardTitle>
            <MDBCardText>
              Website that allows fellow comic enthusiast to search their comics
              they own and add them to their profile for otheres to see.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/TylerKandarian/Comic-Case" target="_blank"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border">
          <MDBCardImage
            style={{ height: "225" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/TylerKandarian/Code-Quiz/main/Workspace/Images/Quiz%20ss.PNG"
            alt="Quiz"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">F1 Quiz</MDBCardTitle>
            <MDBCardText>
              A short but fun quiz to test your Formula 1 knowledge.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/TylerKandarian/Code-Quiz" target="_blank"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border">
          <MDBCardImage
          style={{ height: "225" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/TylerKandarian/note-taker/main/assets/note-taker-ss.PNG"
            alt="Note Taker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
            <MDBCardText>
              A web application to create, edit and delete notes.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/TylerKandarian/note-taker" target="_blank"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/TylerKandarian/work-day-scheduler/main/images/calendar%20ss.PNG"
            alt="Scheduler"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work Day Scheduler</MDBCardTitle>
            <MDBCardText>
              This web application allows you to view every hour of the day and
              make notes on a schedule.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/TylerKandarian/work-day-scheduler" target="_blank"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/TylerKandarian/PWA-Text-editor/main/assets/Capture.PNG"
            alt="Text Editor"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Text Editor</MDBCardTitle>
            <MDBCardText>
              A application that is able to be used offline and take notes.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/TylerKandarian/PWA-Text-editor" target="_blank"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
