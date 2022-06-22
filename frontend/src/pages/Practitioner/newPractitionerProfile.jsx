import { Link, useState } from "react";
import Spinner from "../../components/spinner";
import { useSelector } from "react-redux";
import "./PractitionerProfileStyles.css";
import { Container, Image, Card } from "react-bootstrap";
import pen from "../../img/Edit.png";
import camera from "../../img/camera.png";
import trash from "../../img/trash.png";
import videocamera from "../../img/videocamera.png";
import "../../index.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export function NewPractitionerProfile() {

  return (
    <div>
      <MDBContainer>
      <MDBRow>
        <MDBCol>
          <div className="fisrt-secction-profile">
            <div className="photo-secction"></div>

            <div>
              <div className="name-profile ms-4">
                <h6>Dr. Jessica Smith</h6>
                <img
              alt=""
              src={pen}
              className="m-auto"
            ></img>
              </div>
              <div className="ms-4 mt-2">
                <h6>Practice Name</h6>
                <p>area 1</p>
                <h6>Specialty</h6>
                <p>area 1</p>
                <h6>Sub-Specialties</h6>
                <p>area 1</p>
                <h6>Years of Experience</h6>
                <p>area 1</p>
                <h6>Education</h6>
                <p>area 1</p>
              </div>
            </div>


          </div>
          </MDBCol>


        <MDBCol order='' className="second-secction-profile">
         <div className="bg-profile-input">
          <h4 className="m-3 pt-2">About me</h4>
          <input className="input-profile"></input>
         </div>

         <div className="bg-profile-input mb-4">
          <h4 className="m-3 pt-2">How i can help</h4>
          <input className="input-profile"></input>
         </div>

         <div className="bg-profile-input mb-4">
          <h4 className="m-3 pt-2">Services offered</h4>
          <input className="input-profile"></input>
         </div>

         <div className="bg-profile-input-certifications">
          <div className="icon-plus">
          <h4 className="m-3 pt-2">Certification</h4>
          <span className="m-3 pt-2">+</span>
          </div>
          
          
         </div>

        </MDBCol>


        <MDBCol order=''>
         <div className="availability">
          <h4 className="m-3 pt-2">Availability</h4>
          <div className="availability-box"></div>
         </div>

         <div className="policy">
         <h4 className="m-3 pt-3">Cancellation Policy</h4>
         <input className="input-policy"></input>
         </div>

         <div className="certification mt-3">
         <h4 className="m-3 pt-2">Certification</h4>
          <span className="m-3 pt-2">+</span>
         </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
