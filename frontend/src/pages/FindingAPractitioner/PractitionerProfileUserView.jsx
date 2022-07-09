import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import {logout, reset} from "../../features/auth/authSlice"
// import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux"
import pen from "../../img/Edit.png";
import camera from "../../img/camera.png";
import trash from "../../img/trash.png";
import videocamera from "../../img/videocamera.png";
import "../Practitioner/PractitionerProfileStyles.css";
import "../../index.css";
import "../../userprofileview.css"
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useEffect } from "react";

export function PractitionerProfileUserView() {
  const {practitionerUsers} = useSelector((state)=> state.auth)
  const [basicModal, setBasicModal] = useState(false);
  const [basicModalLast, setBasicModalLast] = useState(false);
  const [basicModaltwo, setBasicModaltwo] = useState(false);
  const [firstProfile, setFirstProfile] = useState({ firstName: "", PracticesName: "", YourSpecialty: "", SubSpecialties: "", YearsOfExperience: "", education: "" });
  const [showbuttons, setShowButtons] = useState(false);
  const [showbuttonstwo, setShowButtonsTwo] = useState(false);
  const [showbuttonsthree, setShowButtonsThree] = useState(false)
  const [practitioner, setPractitioner] = useState(null)
  console.log(practitioner)

  const params = useParams();

  useEffect(()=> {
    let individual = practitionerUsers.find((item)=> item._id === params.practitioner_id)
    setPractitioner(individual)
  },[])

  return (
    <div>
    <MDBContainer className="container-profile">
      <div className="container">
    <h1 className="mb-5 ms-5 text-start">Hello, {practitioner && `Dr. ${practitioner.firstName} ${practitioner.lastName}`}</h1>
    </div>
      <MDBRow>
        <MDBCol className="mb-4 d-flex justify-content-center">
          <div className="fisrt-secction-profile ">
            <div className="">
              <div className="photo-secction">
                

              </div>
            </div>


            {practitioner && <div>
              <div className="name-profile ms-4">
                <h6>Dr. {practitioner.firstName} {practitioner.lastName}</h6>
                
             
              </div>
              <div className="ms-4 mt-2">
                <h6>Practice Name</h6>
                <p>{practitioner.practiceName}</p>
                <h6>Specialty:</h6>
                <p>{practitioner.areaOfSpeciality}</p>
                <h6>Sub-Specialties</h6>
                <p>Obstetrics, Gynecology</p>
                <h6>25 Years </h6>
                <p>area 1</p>
                <h6>Education: </h6>
                <p>Johns Hopkins University</p>
              </div>
            </div>}


          </div>
        </MDBCol>


        <MDBCol order='' className="second-secction-profile d-flex justify-content-center ">
          <div>
            <div className="bg-profile-input-two mb-5">
              <h4 className="ps-2 pt-2  text-al">About me</h4>
             <p className="text-center-profile-userview text-ka"> Dr. Smith is a trusted and	highly	skilled	physician	with	25	years	of	experience	in	pain management, obstetrics	and	gynecology.	She	is	well regarded	in	the	Southern Florida	community earning	numerous	accolades	for	her	quality	and	patient centered	care. Dr.	Smith	was	born	in	Seattle, Washington and now resides	in	Miami	with her	husband,	and	 enjoys	life	with	her	two	daughters.</p>
            </div>

            <div className="bg-profile-input-two mb-5">
              <div>
              <h4 className="ps-2 pt-2  m-2 text-al">How i can help</h4>
             <p className="text-center-profile-userview text-ka"> Dr. Smith provides a full range of services in pain management, obstetric and gynecologic for women of all ages and helps manage endometriosis. </p>
              </div>
            </div>

            <div className="bg-profile-input-two mb-5">
              <div className="">
                <h4 className="ps-2 pt-2   text-al">Services offered</h4>
                <p className="text-center-profile-userview text-ka"> She offers general consultations, treatment for issues relating to pelvic pain and pelvic floor dysfunction. She and her staff are committed to cost transparency and best practices.</p>
              </div>
                
            </div>

            <div className="bg-profile-input-certifications">
              <div className="">
                <h4 className="ps-2 pt-2 text-al ">Certification</h4>
                <p className="text-center-profile-userview text-ka">Board Certified, ABPM, ABOG </p>
              </div>


            </div>
          </div>
        </MDBCol>


        <MDBCol order='' className="d-flex justify-content-center">
          <div className="">
            <div className="availability mb-4">
              <h4 className="mx-3 mb-3 pt-2">Availability</h4>
              <div className="availability-box"></div>
            </div>

            <div className="policy-user">
              <h4 className="m-3 pt-3 text-al">Cancellation Policy</h4>
              <p className="text-center-profile-userview text-ka"> Should you need to cancel or rescheduled an appointment, please contact our office no later than 24 hours prior to your scheduled appointment.</p>
            </div>

            <div className="certification mt-3">
              <h4 className="m-3 pt-2 whitespace">Payment Methods</h4>
              {/* <span className="m-3 pt-2 plus-button">+</span> */}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
