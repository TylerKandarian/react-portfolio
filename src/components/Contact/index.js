import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <hr className="hr-light w-25" />
          <h3>Phone Number</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:678-520-1861">
          </a>
          <hr className="hr-light w-25" />
          <h3>Email</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:tyler.kand2@gmail.com">
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;