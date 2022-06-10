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
} from "mdb-react-ui-kit";

export function PractitionerProfile() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div className="pp row">
      {" "}
      <h1 className="ppHeader">Hello, Jessica Smith</h1>
      <button className="ppButton">Log Out</button>
      <div className="ppConainer row">
        <div className="ppPerson">
          <div className="ppImageBox col-sm">
          <img alt="" src={pen} onClick={toggleShow} className="m-auto"></img>
                <MDBModal
                  show={basicModal}
                  setShow={setBasicModal}
                  tabIndex="-1"
                >
                  <MDBModalDialog className="boxmodal modal-lg" >
                    <MDBModalContent className="bgmodal">
                      <MDBModalHeader>
                        <MDBModalTitle>Upload Photo & Video Bio</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShow}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                          <p className="text-center">Please include a photograph and video biography (if necessary).</p>
                          <div className="d-flex justify-content-center mt-2">
                              <div>
                              <img alt="" src={camera} onClick={toggleShow} className="m-5 iconmodal"></img>
                              </div>
                              <div>
                              <img alt="" src={pen} onClick={toggleShow} className="m-5 iconmodal"></img>
                              </div>
                              <div>
                              <img alt="" src={trash} onClick={toggleShow} className="m-5 iconmodal"></img>
                              </div>
                              
                              <div>
                              <img alt="" src={videocamera} onClick={toggleShow} className="m-5 iconmodal"></img>
                              </div>
                          </div>
                          <br></br>
                      </MDBModalBody>
                        
                      
                        <MDBBtn className="buttonmainpage me-5 mb-5 p-2 px-5">Save</MDBBtn>
                      
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
            <div className="ppd">
              <p className="ppText">Upload photo and video file</p>
            </div>
          </div>
          <div className="ppProfile col-sm">
            <div className="d-flex">
              <div>
                <p>
                  <b>Dr. Jessica Smith</b>
                </p>
              </div>
              <div>
                {/* <img alt="" src={pen} onClick={toggleShow} className="ms-5"></img>
                <MDBModal
                  show={basicModal}
                  setShow={setBasicModal}
                  tabIndex="-1"
                >
                  <MDBModalDialog>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle></MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShow}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>...</MDBModalBody>

                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleShow}>
                          Close
                        </MDBBtn>
                        <MDBBtn>Save changes</MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal> */}
              </div>
            </div>
            <p>Practice Name</p>
            <p>Specialty</p>
            <p>Sub specialties</p>
            <p>Years of Experience</p>
            <p>Education</p>
            <p>Telehealth Services:</p>
          </div>
        </div>
        <div className="ppAbout col-sm">
          <div className="ppAbout">
            <div className="ppAboutbox">
              <h4>About Me</h4>
              <input
                type="text"
                placeholder="Body text goes here"
                className="ppInput"
              />
            </div>
          </div>
          <div className="ppAboutA">
            <div className="ppAboutbox">
              <h4>How I can Help</h4>
              <input
                type="text"
                placeholder="Body text goes here"
                className="ppInput"
              />
            </div>
          </div>
          <div className="ppAboutB">
            <div className="ppAboutbox">
              <h4>Services Offered</h4>
              <input
                type="text"
                placeholder="Body text goes here"
                className="ppInput"
              />
            </div>
          </div>
          <div className="ppAbout2">
            <div className="ppAboutbox2">
              <h4>Certifications</h4>
              <button className="ppCertificationButton">+</button>
            </div>
          </div>
        </div>
        <div className="ppAvailability col-sm">
          <div className="ppAvailability">
            <div className="ppAbox">
              <h4>Availability</h4>
            </div>
            <div className="ppApointmentCalender">
              <div className="ppd">
                <p className="ppText">Appointment booking calander</p>
              </div>
            </div>
          </div>
          <div className="ppCancellation">
            <div className="ppCancelationbox2">
              <h4>Cancelation Policy</h4>
              <input
                type="text"
                placeholder="Body text goes here"
                className="ppInput3"
              />
            </div>
          </div>
          <div className="ppPayment">
            <div className="ppMethodsbox">
              <h4>Payment Methods</h4>
              <button className="ppPaymentButton">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
