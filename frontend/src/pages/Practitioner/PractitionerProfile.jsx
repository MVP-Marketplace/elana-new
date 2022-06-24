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
  MDBCol
} from "mdb-react-ui-kit";

export function PractitionerProfile() {
  const [basicModal, setBasicModal] = useState(false);
  const [basicModaltwo, setBasicModaltwo] = useState(false);
  const [firstProfile, setFirstProfile] = useState({ firstName: "", PracticesName: "", YourSpecialty: "", SubSpecialties: "", YearsOfExperience: "", education: "" });
  const [secondProfile, setSecondProfileProfile] = useState({ AboutMe: "", HowICanHelp: "", ServicesOffered: "" });
  const [showbuttons, setShowButtons] = useState(false);
  const [showbuttonstwo, setShowButtonsTwo] = useState(false);
  const [showbuttonsthree, setShowButtonsThree] = useState(false)


  const toggleShow = () => setBasicModal(!basicModal);
  const toggleShowtwo = () => setBasicModaltwo(!basicModaltwo);

  const handleChange = e => {
    setFirstProfile({ ...firstProfile, [e.target.name]: e.target.value });
    console.log(firstProfile);
  };
  const handleChangeTwo = e => {
    setSecondProfileProfile({ ...secondProfile, [e.target.name]: e.target.value });
    console.log(firstProfile);
  };

  return (
    <div className="pp ">
      {" "}
      <h1 className="ppHeader">Hello, Jessica Smith</h1>
      <button className="ppButton">Log Out</button>
      <div className="ppConainer ">
        <div className="ppPerson">
          <div className="ppImageBox">
            <img
              alt=""
              src={pen}
              onClick={toggleShow}
              className="m-auto "
            ></img>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog className="boxmodal modal-lg">
                <MDBModalContent className="bgmodal">
                  <MDBModalHeader>
                    <MDBModalTitle>Upload Photo & Video Bio</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody className="resmodal">
                    <p className="text-center">
                      Please include a photograph and video biography (if
                      necessary).
                    </p>
                    <div className="d-flex justify-content-center mt-2 iconres">
                      <div className="">
                        <img
                          alt=""
                          src={camera}
                          onClick={toggleShow}
                          className="m-5 iconmodal"
                        ></img>
                      </div>
                      <div>
                        <img
                          alt=""
                          src={pen}
                          onClick={toggleShow}
                          className="m-5 iconmodal"
                        ></img>
                      </div>
                      <div>
                        <img
                          alt=""
                          src={trash}
                          onClick={toggleShow}
                          className="m-5 iconmodal"
                        ></img>
                      </div>

                      <div>
                        <img
                          alt=""
                          src={videocamera}
                          onClick={toggleShow}
                          className="m-5 iconmodal"
                        ></img>
                      </div>
                    </div>
                    <br></br>
                  </MDBModalBody>

                  <MDBBtn className="buttonmainpage me-5 mb-5 p-2 px-5">
                    Save
                  </MDBBtn>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            <div className="ppd">
              <p className="ppText">Upload photo and video file</p>
            </div>
          </div>
          <div className="ppProfile ">
            <div className="d-flex ms-3 whitespace">
              <div className="name-responsive">
                <p>
                  <b>Dr. Jessica Smith</b>
                </p>
              </div>
              <div className="icon-responsive">
                <img
                  alt=""
                  src={pen}
                  onClick={toggleShowtwo}
                  className="ms-5"
                ></img>
                <MDBModal
                  show={basicModaltwo}
                  setShow={setBasicModaltwo}
                  tabIndex="-1"
                >
                  <MDBModalDialog className="boxmodal modal-lg">
                    <MDBModalContent className="bgmodal">
                      <MDBModalHeader>
                        <MDBModalTitle>Edit Credentials</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShowtwo}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <div>
                          <div className="d-flex justify-content-evenly m-1">
                            <div className="col-sm ms-5">
                              <label className="labelsingup text-muted">
                                Your Name
                              </label>
                              <MDBInput
                                type="text"
                                className="form-control mdb"
                                id="form1"
                                name="firstName"
                                value={firstProfile.firstName}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm ms-5">
                              <label className="labelsingup text-muted">
                                Your Practice’s Name
                              </label>
                              <MDBInput
                                type="text"
                                className="form-control mdb"
                                id="form1"
                                name="PracticesName"
                                value={firstProfile.PracticesName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-evenly m-1">
                            <div className="col-sm ms-5">
                              <label className="labelsingup text-muted">
                                Your Specialty
                              </label>
                              <MDBInput
                                type="text"
                                className="form-control mdb"
                                id="form1"
                                name="YourSpecialty"
                                value={firstProfile.YourSpecialty}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm ms-5">
                              <label className="labelsingup text-muted">
                                Sub-Specialties
                              </label>
                              <MDBInput
                                type="text"
                                className="form-control mdb"
                                id="form1"
                                name="SubSpecialties"
                                value={firstProfile.SubSpecialties}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-evenly m-1">
                            <div className="col-sm ms-5">
                              <label className="labelsingup text-muted">
                                Years of Experience
                              </label>
                              <MDBInput
                                type="text"
                                className="form-control mdb"
                                id="form1"
                                name="YearsOfExperience"
                                value={firstProfile.YearsOfExperience}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-sm ms-5">
                              <label className="labelsingup text-muted">
                                Education
                              </label>
                              <MDBInput
                                type="text"
                                className="form-control mdb"
                                id="form1"
                                name="education"
                                value={firstProfile.education}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <p className="ms-5">Do you provide telehealth services?</p>
                          <div className="d-flex ms-5">
                            <div className="">
                              <label>yes</label>
                              <input type="checkbox" className="checkbox-round m-2"></input>
                            </div>
                            <div>
                              <label>no</label>
                              <input type="checkbox" className="checkbox-round m-2"></input>
                            </div>
                          </div>
                        </div>
                      </MDBModalBody>


                      <MDBBtn className="buttonmainpage mb-3 me-5" onClick={toggleShowtwo}>
                        Save
                      </MDBBtn>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </div>
            </div>
            <div className="p-responsive">
              <p className="ms-3">Practice Name</p>
              <p className="ms-3">Specialty</p>
              <p className="ms-3">Sub specialties</p>
              <p className="ms-3">Years of Experience</p>
              <p className="ms-3">Education</p>
              <p className="ms-3">Telehealth Services:</p>
            </div>
          </div>
        </div>
        <div className="ppAbout allcolum">
          <div className="ppAbout ">
            <div className="ppAboutbox">
              <h4 className="">About Me</h4>
              <input
                onClick={() => setShowButtons(!showbuttons)}
                type="text"
                placeholder="Body text goes here"
                className="ppInput"
                name="AboutMe"
                value={secondProfile.AboutMe}
                onChange={handleChangeTwo}
              />
              {showbuttons && <div className="d-flex moveR"><button className="buttonmodal me-1">save</button><button className="buttonmodal me-1 ">Cancel</button></div>}

            </div>
          </div>
          <div className="ppAboutA">
            <div className="ppAboutbox">
              <h4>How I can Help</h4>
              <input
                onClick={() => setShowButtonsTwo === (showbuttonstwo) ? (!showbuttonstwo) : (showbuttonstwo)}
                type="text"
                placeholder="Body text goes here"
                className="ppInput "
                name="HowICanHelp"
                value={secondProfile.HowICanHelp}
                onChange={handleChangeTwo}
              />
              {showbuttonstwo && <div className="d-flex moveR"><button className="buttonmodal me-1">save</button><button className="buttonmodal me-1 ">Cancel</button></div>}
            </div>
          </div>
          <div className="ppAboutB">
            <div className="ppAboutbox">
              <h4>Services Offered</h4>
              <input
                onClick={() => setShowButtonsThree(!showbuttonsthree)}
                type="text"
                placeholder="Body text goes here"
                className="ppInput"
                name="ServicesOffered"
                value={secondProfile.ServicesOffered}
                onChange={handleChangeTwo}
              />
              {showbuttonsthree && <div className="d-flex moveR"><button className="buttonmodal me-1">save!!!</button><button className="buttonmodal me-1 ">Cancel</button></div>}
            </div>
          </div>
          <div className="ppAbout2">
            <div className="ppAboutbox2">
              <h4>Certifications</h4>
              <MDBBtn className="ppCertificationButton" onClick={toggleShow}>+</MDBBtn>
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Edit certification</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      hola
                    </MDBModalBody>

                    
                      <MDBBtn>Save changes</MDBBtn>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
          </div>
        </div>
        <div className="ppAvailability allcolum">
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
