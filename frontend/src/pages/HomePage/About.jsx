import React from "react";
import {
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Helen from "../../img/helen-grimshaw.png"
import Kerstin from "../../img/kerstin-recker.png"
import Hannah from "../../img/hannah-lawrence.png"
import Becky from "../../img/becky-graves.png"
import "../../about.css"
import "../../homepage.css"

export const About = () => {
  return (
    <div>

        <div className="about-banner-1 p-4">
          <h1 className="text-center text-al fs-40-24 brand-purple about-banner-1-h1">Our Mission</h1>
          <h3 className="text-center text-al fs-24-18">Elana was launched to support, and be part of, a generational change<br className="mobile-view-hidden"/>{" "}in women’s health, transforming the conversation around pelvic care<br className="mobile-view-hidden"/>{" "}through empowerment, accessibility, and education.</h3>
        </div>

        <div className="about-banner-2 p-4">
          <h1 className="text-center text-al fs-40-24 brand-purple">Our Story2</h1>
          <h3 className="text-center text-al fs-32-24 about-banner-2-h3">Here at Elana, pelvic care isn’t just business, it’s personal.​​</h3>
          <p className="text-center text-al fs-24-18 px-4 fs-light-1">Managing our own health at various chapters in our lives, we have seen and experienced first-hand some of the<br className="mobile-view-hidden"/>{" "}challenges when it comes to talking about intimate issues. Finding answers and feeling comfortable to talk openly<br className="mobile-view-hidden"/>{" "}about health problems can be hard even with people you trust. </p>
          <p className="text-center text-al fs-24-18 px-5 py-4 fs-light-1">Our journey started as two women, different countries, different ages, sharing our experiences of c-sections,<br className="mobile-view-hidden"/>{" "}postpartum complications, to the signs of perimenopause. From battling with extreme pelvic pain and complications,<br className="mobile-view-hidden"/>{" "}to feeling unprepared for the changes in a woman's health as we age, much of which, down to the lack of easily<br className="mobile-view-hidden"/>{" "}accessible information and knowing where to go for the right support. </p>
          <p className="text-center text-al fs-24-18 px-5 fs-light-1">Our journeys shouldn’t have been so hard,  but it was, and is for so many women globally - on average it takes 7 years<br className="mobile-view-hidden"/>{" "}for pelvic issues to be properly diagnosed. Having experienced first hand how life changing issues with the pelvic region<br className="mobile-view-hidden"/>{" "}can have on you, your mental health and relationships, we knew we had to be part of a lasting change.</p>
        </div>

        <div className="about-banner-3">
          <h1 className="text-center text-al fs-40-24 brand-purple mb-4">Meet the Team</h1>
          <MDBRow>
            <MDBCol className="mb-4" sm="6" md="3">
              <div className="about-img-1">
                <div className="d-flex justify-content-center">
                  <img className="border curve-18" src={Helen} alt="Helen Grimshaw" />
                </div>
                <div>
                  <h4 className="text-center text-al fs-24-18 mt-4">Helen Grimshaw</h4>
                  <h5 className="text-center text-al fs-24-18">Co-founder</h5>
                </div>
              </div>
            </MDBCol>
            <MDBCol className="mb-4" sm="6" md="3">
              <div className="about-img-1">
                <div className="d-flex justify-content-center">
                  <img className="border curve-18" src={Kerstin} alt="Kerstin Recker" />
                </div>
                <div>
                  <h4 className="text-center text-al fs-24-18 mt-4">Kerstin Recker</h4>
                  <h5 className="text-center text-al fs-24-18">Advisor, Co-founder</h5>
                </div>
              </div>
            </MDBCol>
            <MDBCol className="mb-4" sm="6" md="3">
              <div className="about-img-1">
                <div className="d-flex justify-content-center">
                  <img className="border curve-18" src={Hannah} alt="Hannah Lawrence" />
                </div>
                <div>
                  <h4 className="text-center text-al fs-24-18 mt-4">Hannah Lawrence</h4>
                  <h5 className="text-center text-al fs-24-18">Marketing</h5>
                </div>
              </div>
            </MDBCol>
            <MDBCol className="mb-4" sm="6" md="3">
              <div className="about-img-1">
                <div className="d-flex justify-content-center">
                  <img className="border curve-18" src={Becky} alt="Becky Graves" />
                </div>
                <div>
                  <h4 className="text-center text-al fs-24-18 mt-4">Becky Graves</h4>
                  <h5 className="text-center text-al fs-24-18">Operations</h5>
                </div>
              </div>
            </MDBCol>
        </MDBRow>
    </div>
    </div>
  );
};
