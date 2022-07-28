import React, { useState, useEffect }from "react";
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
import { Link } from 'react-router-dom';
import Group from "../../img/HomepageBanner5.png";
import Photo from "../../img/elana-homepage-image.png";
import "../../homepage.css";

export const HomePage = () => {

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
    <div>
      {/* Homepage Banner 1 - Main header with Picture */}
      <div className="homepage-banner-1 d-flex align-items-center">
        <MDBRow>
          <MDBCol
            className="d-flex align-items-center justify-content-end"
            md="6"
          >
            <div className="pt-4 pb-4">
              <h1 className="px-5 text-position banner-1-h1">
                Elana is your partner
                <br className="mobile-view-hidden"/>
                {" "}in pelvic care
              </h1>
              <h5 className="px-5 text-position banner-1-h3 fw-lighter">
                We connect you to pelvic care options, so you
                <br className="mobile-view-hidden"/>
                {" "}feel confident from the inside out.
              </h5>
              <div className="px-5 text-end">
              <Link to='/IndividualPage' className="hidden"><MDBBtn className="brand-bg-purple border-0 mx-2 w-50">LEARN MORE</MDBBtn></Link>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className="">
              <img className="img-fit" src={Photo} alt="women-smiling" />
            </div>
          </MDBCol>
        </MDBRow>
      </div>

      {/* Homepage Banner 7 - Hidden On Desktop */}
      <div className="homepage-banner-7">
        <h1 className="fs-24 text-al text-center text-bold">
          We’re so glad you’re here.{" "}
        </h1>
        <h3 className="fs-16 text-ka text-center pb-3">
          Take a look into how Elana can help you:
        </h3>
        <div className="d-flex justify-content-center">
        <Link to='/IndividualPage'>
          <button className="button-6 border-0 text-white border-curve-6 blue-hover fs-12">
            LEARN MORE ABOUT INDIVIDUAL CARE
          </button>
          </Link>
        </div>
      </div>

      {/* Homepage Banner 2 - Title with infocircles */}
      <div className="homepage-banner-2">
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
                    <MDBCardText className="text-center text-al line-height-normal">
                      <span className="fs-32 text-dark">1 in 6</span>
                      <br />
                      <span className="fs-16 text-dark">
                        women suffer from
                        <br />
                        painful sex
                      </span>
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
                    <MDBCardText className="text-center text-al line-height-normal">
                      <span className="fs-32 text-dark">1 in 3</span>
                      <br />
                      <span className="fs-16 text-dark">
                        women experience
                        <br />
                        urinary incontinence
                      </span>
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
                    <MDBCardText className="text-center text-al line-height-normal">
                      <span className="fs-32 text-dark">50%</span>
                      <br />
                      <span className="fs-16 text-dark">
                        postmenopausal women
                        <br />
                        have vaginal atrophy
                      </span>
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
                    <MDBCardText className="text-center text-al line-height-normal">
                      <span className="fs-32 text-dark">7 Years</span>
                      <br />
                      <span className="fs-16 text-dark">
                        average amount of
                        <br />
                        time to be diagnosed
                      </span>
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

      {/* Homepage Banner 3 - Card Categories */}
      <div className="homepage-banner-3">
        <h1 className="text-center text-al fs-40-24 pt-5">
          Embrace your Pelvic Power
        </h1>
        <h3 className="text-center text-al fs-24-16 p-3 fw-lighter">
          Elana makes it easy to find the right treatment or simply optimise
          your pelvic health.
          <br className="mobile-view-hidden" />
          {" "}Your partner in pelvic care.
        </h3>
        <div className="category-cards">
          <MDBRow around>
            <MDBCol className="d-flex justify-content-center py-4" md="4" sm="6">
              <MDBCard
                className="border-curve-10 homepage-cards"
              >
                <MDBCardBody className="d-flex align-items-center justify-content-center">
                  <MDBCardTitle className="text-center fs-24">
                    Optimise my
                    <br />
                    Pelvic health
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center py-4" md="4" sm="6">
              <MDBCard
                className="border-curve-10 homepage-cards"
              >
                <MDBCardBody className="d-flex align-items-center justify-content-center">
                  <MDBCardTitle className="text-center fs-24">
                    Relief from
                    <br />
                    Painful sex
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center py-4" md="4" sm="6">
              <MDBCard
                className="border-curve-10 homepage-cards"
              >
                <MDBCardBody className="d-flex align-items-center justify-content-center">
                  <MDBCardTitle className="text-center fs-24">
                    Bladder control
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center py-4" md="4" sm="6">
              <MDBCard
                className="border-curve-10 homepage-cards"
              >
                <MDBCardBody className="d-flex align-items-center justify-content-center">
                  <MDBCardTitle className="text-center fs-24">
                    Postpartum care
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center py-4" md="4" sm="6">
              <MDBCard
                className="border-curve-10 homepage-cards"
              >
                <MDBCardBody className="d-flex align-items-center justify-content-center">
                  <MDBCardTitle className="text-center fs-24">
                    Mental health &<br />
                    Sex coaching
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center py-4" md="4" sm="6">
              <MDBCard
                className="border-curve-10 homepage-cards"
              >
                <MDBCardBody className="d-flex align-items-center justify-content-center">
                  <MDBCardTitle className="text-center fs-24">
                    Perimenopause
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="px-5 pb-5 d-flex justify-content-center">
        {/* <Link to='/ChoosingACategory'>
        <MDBBtn className="brand-bg-purple-1 border-0 mx-2">LEARN MORE</MDBBtn>
          </Link> */}
          <a href="https://www.elana.health/post/what-is-pelvic-health" className="brand-bg-purple-a border-0 mx-2 a-tag">What is pelvic health?</a>
          
        </div>
      </div>

      {/* Homepage Banner 4 - Coming Soon Infocircles */}
      <div className="homepage-banner-4 hidden">
        <h3 className="text-al fs-32 pt-5 m-0 text-center">
          Coming soon to ELANA:
        </h3>
        <div className="p-5 d-flex justify-content-evenly">
          <MDBCard
            className=" border-purple p-2 perfect-circle-2"
            style={{ maxWidth: "10.5rem" }}
          >
            <MDBCardBody className="d-flex align-items-center justify-content-center">
              <MDBCardText className="text-center brand-purple fs-16">
                Track your
                <br />
                Symptoms
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard
            className=" border-purple p-2 perfect-circle-2"
            style={{ maxWidth: "10.5rem" }}
          >
            <MDBCardBody className="d-flex align-items-center justify-content-center">
              <MDBCardText className="text-center brand-purple fs-16">
                Shopping for
                <br />
                Pelvic Health
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard
            className=" border-purple p-2 perfect-circle-2"
            style={{ maxWidth: "10.5rem" }}
          >
            <MDBCardBody className="d-flex align-items-center justify-content-center">
              <MDBCardText className="text-center brand-purple fs-16">
                Telehealth
                <br />
                Services
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard
            className=" border-purple p-2 perfect-circle-2"
            style={{ maxWidth: "10.5rem" }}
          >
            <MDBCardBody className="d-flex align-items-center justify-content-center">
              <MDBCardText className="text-center brand-purple fs-16">
                Community
                <br />
                Content
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard
            className=" border-purple p-2 perfect-circle-2"
            style={{ maxWidth: "10.5rem" }}
          >
            <MDBCardBody className="d-flex align-items-center justify-content-center">
              <MDBCardText className="text-center brand-purple fs-16">
                Educational
                <br />
                Resources
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>

      {/* Homepage Banner 5 - Contact the Team */}
      <div className="homepage-banner-5">
        <MDBRow>
          <MDBCol md="6" className="d-flex align-items-center div-position">
            <div className="p-5">
              <h1 className="px-3 text-position text-al fs-24">
                We’d love to hear from you! You can reach our team at:
              </h1>
              <h5 className="px-3 text-position text-al fs-24">
                hello@elana.health
              </h5>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className="hidden">
              <img className="img-fluid" src={Group} alt="women-health" />
            </div>
          </MDBCol>
        </MDBRow>
      </div>

      {/* Homepage Banner 6 - Call to action (email) */}
      <div className="homepage-banner-6 p-5">
        <h1 className=" text-center text-al fs-24">
          Connect with the ELANA community, we’ll only send you the important
          stuff.
        </h1>
        <h3 className=" text-center text-al fs-24">
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
        <h5 className="px-5 text-center text-ka fs-16 fw-lighter hidden mt-5">
          Disclaimer: The information provided through Elana Health website and
          services is not intended
          <br />
          or implied to be a substitute for professional medical advice,
          diagnosis or treatment.
        </h5>
      </div>
    </div>
  );
};
