import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../practitionerlisting.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import DownArrow from "../../img/down-arrow.png";
import UpArrow from "../../img/up-arrow.png";

export const PractitionerListing = (props) => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  const params = useParams();
  const practitionerTypes = [
    "Gyno-urology",
    "Nurse Practitioner (ARNP)",
    "Nutritionist",
    "OBGYN",
    "Occupational Therapist (OT)",
    "Pain Management Doctor",
    "Pain Management Doctor",
    "Pain Management Psychologist",
    "Pelvic Health Physical Therapist",
    "Physical Therapist Assistant (PTA)",
    "Physician (MD)",
    "Pilates Instructor",
    "Sex Coach / Therapist",
    "Women's Health Coach",
    "Women's Health Coach",
    "Women's Health Psychologist",
    "Women's Mental Health Therapist",
    "Yoga Instructor",
  ];
  const appointmentTypes = [
    "Bladder & Bowel Incontinence",
    "Bladder Pain",
    "Constipation",
    "Endometriosis",
    "Menopause & Perimenopause",
    "Painful Sex",
    "Pelvic Organ Prolapse",
    "Postpartum Recovery",
    "Proactive Pelvic Care",
    "Separated Abs",
    "Vaginoplasty Prep & Recovery",
  ];
  const locations = ["Miami", "London", "New York", "Chicago"];

  return (
    <div>
      <div className="listing-banner-1">
        {appointmentTypes[params.id] && (
          <h1 className="text-center-mobile brand-purple text-al fs-48-24">
            {appointmentTypes[params.id]}
          </h1>
        )}
        {/* <p className="fs-16-12">
          Endometriosis (en-doe-me-tree-O-sis) is an often painful disorder in
          which tissue similar to the tissue that normally lines the inside of
          your uterus (the endometrium) grows outside your uterus. Endometriosis
          commonly involves your ovaries, fallopian tubes and the tissue lining
          your pelvis.
        </p>
        <p className="fs-16-12">
          Common signs and symptoms of endometriosis include painful periods
          (dysmenorrhea), pain with intercourse, pain with bowel movements or
          urination, excessive bleeding , and infertility. Other signs and
          symptoms may include fatigue, diarrhea, constipation, bloating or
          nausea, especially during menstrual periods.
        </p> */}
      </div>
      <div className="listing-banner-2">
        <MDBRow>
          <MDBCol md="4">
            <h1 className="text-al fs-32">Filter By</h1>

            {/* PRACTITIONER TYPE */}
            <button
              onClick={() => setButton1(!button1)}
              type="button"
              className="btn text-dark border-top border-bottom w-75 py-3 text-al fs-24"
            >
              Practitioner Type{" "}
              {button1 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button1 && (
              <div>
                {practitionerTypes.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" className="checkbox-squer" />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* APPOINTMENT TYPE */}
            <button
              onClick={() => setButton2(!button2)}
              type="button"
              className="btn text-dark border-top border-bottom w-75 py-3 text-al fs-24"
            >
              Appointment Type{" "}
              {button2 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button2 && (
              <div>
                {appointmentTypes.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" className="checkbox-squer" />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* LOCATION */}
            <button
              onClick={() => setButton3(!button3)}
              type="button"
              className="btn text-dark border-top border-bottom w-75 py-3 text-al fs-24"
            >
              Location{" "}
              {button3 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button3 && (
              <div>
                {locations.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" className="checkbox-squer" />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </MDBCol>
          <MDBCol md="8">
            <div className="bg-purple-2 d-flex border-9 mb-3">
              <img
                className="p-3 img-circle"
                src="http://cdn.onlinewebfonts.com/svg/img_569204.png"
                alt="practitioner"
              />
              <div>
                <p>Hannah Miller</p>
                <p>Nurse Practitioner (ARNP)</p>
                <p>
                  I’m a registerd nurse that has helped countless number of
                  women navigate a wide variety of their pelvic health issues,
                  including endometriosis, menopause, and separated abs. I also
                  give advice for best methods to actively take care of the
                  pelvic floor.
                </p>
              </div>
            </div>
            <div className="brand-bg-purple-2 d-flex border-9 mb-3">
              <img
                className="p-3 img-circle"
                src="http://cdn.onlinewebfonts.com/svg/img_569204.png"
                alt="practitioner"
              />
              <div>
                <p>Hannah Miller</p>
                <p>Nurse Practitioner (ARNP)</p>
                <p>
                  I’m a registerd nurse that has helped countless number of
                  women navigate a wide variety of their pelvic health issues,
                  including endometriosis, menopause, and separated abs. I also
                  give advice for best methods to actively take care of the
                  pelvic floor.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};
