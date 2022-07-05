import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import "../../practitionerlisting.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import DownArrow from "../../img/down-arrow.png";
import UpArrow from "../../img/up-arrow.png";
import { getPractitionerUsers, reset } from "../../features/auth/authSlice";

export const PractitionerListing = (props) => {
  const { practitionerUsers } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const params = useParams();
 
  const [button1, setButton1] = useState(false);
  // const [button2, setButton2] = useState(false);
  // const [button3, setButton3] = useState(false);

  const [filterPractitionerValue, setFilterPractitionerValue] = useState("")
  const [filterAppointmentValue, setFilterAppointmentValue] = useState("")
  const [practitioners, setPractitioners] = useState([])

  console.log(practitionerUsers)

  useEffect(()=> {
    dispatch(getPractitionerUsers())
  },[])

  useEffect(()=> {
    setPractitioners(practitionerUsers)
  },[practitionerUsers])

  // Filter functionality when choosing Category
  useEffect(()=> {
    if(filterPractitionerValue !== "" ){
      let newArray = practitionerUsers.filter((item, index) => item.areaOfSpecialty === filterPractitionerValue )
      setPractitioners(newArray)
    } else {
      setPractitioners(practitionerUsers)
    }
  },[filterPractitionerValue])

  const practitionerTypes = [
    "Gyno-urology",
    "Nurse Practitioner (ARNP)",
    "Nutritionist",
    "OBGYN",
    "Occupational Therapist (OT)",
    "Pain Management Doctor",
    "Pain Management Psychologist",
    "Pelvic Health Physical Therapist",
    "Physical Therapist Assistant (PTA)",
    "Physician (MD)",
    "Pilates Instructor",
    "Sex Coach / Therapist",
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
              className="btn text-dark border-top border-bottom w-75 py-3 mb-2 text-al fs-24"
            >
              Practitioner Type{" "}
              {button1 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button1 && (
              <div className="mb-4">
                {practitionerTypes.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" checked={filterPractitionerValue === item} className="checkbox-squer m-0" onChange={()=> {
                        if(filterPractitionerValue !== item){
                          setFilterPractitionerValue(item)
                          setFilterAppointmentValue('')
                        } else {
                          setFilterPractitionerValue('')
                        }
                      }} />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* APPOINTMENT TYPE
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
                      <input type="checkbox" checked={filterAppointmentValue === item} className="checkbox-squer m-0" onChange={()=> {
                        if(filterAppointmentValue !== item){
                          setFilterAppointmentValue(item)
                          setFilterPractitionerValue('')
                        } else {
                          setFilterAppointmentValue('')
                        }
                      }}/>
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

             LOCATION
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
                      <input type="checkbox" className="checkbox-squer m-0" />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )} */}
          </MDBCol>
          <MDBCol md="8">
            {practitioners.length > 0 ? practitioners.map((item, index) => {
              return(
                <Link to={`/practitionerProfileUserView/${index}`}>
                <div key={index} className="brand-bg-purple-2 d-flex border-9 mb-3">
                <img
                  className="p-3 img-circle"
                  src="http://cdn.onlinewebfonts.com/svg/img_569204.png"
                  alt="practitioner"
                />
                <div className="d-flex align-items-center">
                  <div>
                  <p className="m-0">{item.firstName} {item.lastName}</p>
                  <p className="m-0">Specialty: {item.areaOfSpecialty}</p>
                  <p className="m-0">Practice: {item.practiceName}</p>
                  {item.profile?.aboutMe && <p className="m-0">About: {item.profile.aboutMe}</p>}
                  </div>
                </div>
              </div>
              </Link>
              )
            }) : <h1 className="text-center m-5">No Practitioners Found...</h1>}
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};
