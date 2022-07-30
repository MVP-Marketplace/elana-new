import React, { useEffect, useState } from "react";
import Image from "../../img/Image.png";
import "../../index.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInputGroup,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export function IndividualPage() {

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
});

  return (
    <div className="">
      <div className="bgpurple">
        <div className="intro row d-grid">
          <h1 className="col-sm title-res">We’re so glad you’re here. </h1>
          <h4 className="introtitle p-1 col-sm ">
            Elana is changing a generation of women’s health, putting you in
            control <br />
            of managing your pelvic health, how, and when, it suits you.
          </h4>
        </div>
          <a href="https://www.elana.health/post/what-is-pelvic-health" className="brand-bg-purple-a2 border-0 mx-2 a-tag p-2">What is pelvic health?</a>
      </div>
      <div className="d-flex row">
        <div className="col-sm-12 col-md-6 p-0">
          <img src={Image} className="w-res" alt=""></img>
        </div>
        <div className="col-sm-12 col-md-6 pl-5 padi">
        <div className="margin-list">
          <h3 className="title-1 mb-3 text-al center-text-responsive">Health providers on Elana include:</h3>

          <ul type="none" className="list col-sm p-0">
            <li className="fs-20 text-ka fw-lighter">Yoga Instructors</li>
            <li className="fs-20 text-ka fw-lighter">Pilates Instructors</li>
            <li className="fs-20 text-ka fw-lighter">Physical Therapy</li>
            <li className="fs-20 text-ka fw-lighter">Pain Management</li>
            <li className="fs-20 text-ka fw-lighter">Health Coach</li>
            <li className="fs-20 text-ka fw-lighter">Gynecologist</li>
            <li className="fs-20 text-ka fw-lighter">and more!</li>
          </ul>
            <div className="center-div-button">
            <Link to="/ChoosingACategory" className="link-individual">
              <button className="buttonmainpageindividual col-sm blue-hover mt-2">
                BROWSE PRACTITIONERS
              </button>
            </Link>
              </div>
            </div>
        </div>
      </div>
      <div className="homepage-banner-9">
        <h1 className="banner-2-h1 pt-5 px-1 text-center">
          Pelvic issues are way more common than you think
        </h1>
        <div className="py-5">
          <MDBRow className="d-flex justify-content-evenly">
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-1">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"

                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al ">
                      <span className="fs-32 text-dark ">Yoga Instructors</span>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-2">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"
                  
                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al">
                      <span className="fs-32 text-dark">Pilates Instructors</span>
                     
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-3">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"
                  
                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al">
                      <span className="fs-32 text-dark">Physical Therapy</span>
                     
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-4">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"
                  
                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al">
                      <span className="fs-32 text-dark">Pain Management</span>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-1">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"

                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al ">
                      <span className="fs-32 text-dark ">Health Coach</span>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-2">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"
                  
                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al">
                      <span className="fs-32 text-dark">Gynecologist</span>
                     
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="3">
              <div className="d-flex banner-2-circle-1">
                <MDBCard
                  className="brand-bg-purple-2 perfect-circle"

                >
                  <MDBCardBody className="d-flex align-items-center justify-content-center">
                    <MDBCardText className="text-center text-al ">
                      <span className="fs-32 text-dark ">And more</span>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <h3 className="pt-4 pb-5 text-center fs-32 text-al hidden">
          Pain is never normal. Many women suffer in silence.
        </h3>
      </div>
      <div className="individual-page-banner-3 p-5">
        <h1 className="px-5 text-center text-al fs-24">
          Connect with the ELANA community, we’ll only send you the important
          stuff.
        </h1>
        <h3 className="px-5 text-center text-al fs-24">
          Get updates and the latest info on pelvic care delivered to your
          inbox.
        </h3>
            <div className="d-flex justify-content-center">
        <MDBInputGroup className="email-width mt-3">
          <input
            className="text-ka form-control p-2"
            placeholder="Enter your email"
            type="text"
          />
          {windowDimensions.width > 500 ? <button className="brand-bg-purple p-2 border-0 text-white rounded-end blue-hover">Stay in the know</button> : <button className="brand-bg-purple p-2 border-0 text-white rounded-end blue-hover px-4">Join</button>}
        </MDBInputGroup>
          </div>
      </div>
    </div>
  );
}
