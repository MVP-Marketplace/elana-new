import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "../../practitionerpage.css";
import { Link } from "react-router-dom";
import woman from "../../img/woman-physician.jpg";
import BlowHorn from "../../img/BlowHorn.png";
import Calendar from "../../img/Calendar.png";
import LightBulb from "../../img/LightBulb.png";

export const PractitionerPage = () => {
  return (
    <div>
      {/* Practitioner Banner 1 */}
      <div className="practitioner-page-banner-1 p-5">
        <h1 className="text-center text-al fs-48 fw-bolder">
          Grow your Practice with Elana
        </h1>
        <h3 className="text-center text-al fs-40 fw-bolder">
          Together we can transform women's health
        </h3>
        <div className="d-flex justify-content-center p-3">
          <Link to="/practitionerSignUp" className="link">
            <button className="brand-bg-purple text-white text-ka px-5 py-3 border border-0 border-radius-8">
              REGISTER NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Practitioner Banner 2 */}
      <div className="practitioner-page-banner-2 p-5">
        <h1 className="text-center text-al fs-32 fw-bolder">
          Elana can help you build a thriving practice
        </h1>
        <h3 className="text-center text-al fs-24 fw-bolder">
          We are on a mission to make it easier for practitioners to reach women
          who want to
          <br />
          take control of their pelvic health. We are actively building our
          network.
        </h3>

        <MDBRow>
          <MDBCol className="d-flex justify-content-center p-4" lg="4">
            <MDBCard
              className="border border-0 border-radius-9 brand-bg-purple-2"
              style={{ height: "14rem", width: "22rem" }}
            >
              <MDBCardBody className="d-flex align-items-center justify-content-center">
                <MDBCardTitle className="text-center">
                  <div className="d-flex justify-content-center mb-2">
                    <img src={BlowHorn} alt="more" />
                  </div>
                  <p className="fs-24 text-al">Reach more patients</p>
                  <span className="fs-16 text-dark text-ka text-nowrap">
                    Fill up your patient load on your
                    <br />
                    terms with telehealth and in-
                    <br />
                    person appointments.
                  </span>
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="d-flex justify-content-center p-4" lg="4">
            <MDBCard
              className="border border-0 border-radius-9 brand-bg-purple-2"
              style={{ height: "14rem", width: "22rem" }}
            >
              <MDBCardBody className="d-flex align-items-center justify-content-center">
                <MDBCardTitle className="text-center">
                  <div className="d-flex justify-content-center mb-2">
                    <img src={Calendar} alt="more" />
                  </div>
                  <p className="fs-24 text-al">Connect with Practitioners</p>
                  <span className="fs-16 text-dark text-ka text-nowrap">
                    Collaborate with the other practitioners
                    <br />
                    and the Elana team to help us improve
                    <br />
                    women’s health.{" "}
                  </span>
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="d-flex justify-content-center p-4" lg="4">
            <MDBCard
              className="border border-0 border-radius-9 brand-bg-purple-2"
              style={{ height: "14rem", width: "22rem" }}
            >
              <MDBCardBody className="d-flex align-items-center justify-content-center">
                <MDBCardTitle className="text-center">
                  <div className="d-flex justify-content-center mb-2">
                    <img src={LightBulb} alt="more" />
                  </div>
                  <p className="fs-24 text-al">Generate Awareness</p>
                  <span className="fs-16 text-dark text-ka text-nowrap">
                    Reach more patients by offering
                    <br />
                    courses and content through
                    <br />
                    Elana’s platform.
                  </span>
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      {/* Practitioner Banner 3 */}
      <div className="practitioner-page-banner-3">
        <div className="d-flex justify-center-responsive">
          <MDBRow>
            <MDBCol md="6">
              <div className="p-5">
                <div className="d-flex justify-content-center p-2">
                  <h1 className="text-al fs-32 text-center">
                    Are you a practitioner passionate about
                    <br/>
                    women's pelvic health and wellness?
                  </h1>
                </div>
                <div className="d-flex justify-content-center">
                  <h3 className="text-al fs-32">
                    Joining Elana is simple and free.
                  </h3>
                </div>
                <div className="d-flex justify-content-center">
                  <ul className="me-8 mx-auto">
                    <li className="text-ka fs-20 p-2 text-start">
                      Fill out the online application
                    </li>
                    <li className="text-ka fs-20 p-2 text-start">
                      Provide us with your basic information
                    </li>
                    <li className="text-ka fs-20 p-2 text-start">We will be in touch!</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="/practitionerSignUp" className="link">
                    <button className="brand-bg-purple text-white text-ka px-5 py-3 border border-0 border-radius-8">
                      REGISTER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6" className="hidden">
              <div>
                <img
                  className="img-fit"
                  src={woman}
                  alt="female-practitioner"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};
