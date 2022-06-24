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
  const [basicModal, setBasicModal] = useState(false);
  const [basicModalLast, setBasicModalLast] = useState(false);
  const [basicModaltwo, setBasicModaltwo] = useState(false);
  const [firstProfile, setFirstProfile] = useState({ firstName: "", PracticesName: "", YourSpecialty: "", SubSpecialties: "", YearsOfExperience: "", education: "" });
  const [showbuttons, setShowButtons] = useState(false);
  const [showbuttonstwo, setShowButtonsTwo] = useState(false);
  const [showbuttonsthree, setShowButtonsThree] = useState(false)



  const toggleShow = () => setBasicModal(!basicModal);
  const toggleShowtwo = () => setBasicModaltwo(!basicModaltwo);
  const toggleShowlast = () => setBasicModalLast(!basicModalLast);

  const handleChange = e => {
    setFirstProfile({ ...firstProfile, [e.target.name]: e.target.value });
    console.log(firstProfile);
  };

  return (
    <MDBContainer className="container-profile">
      <MDBRow>
        <MDBCol className="d-flex justify-content-center">
          <div className="fisrt-secction-profile ">
            <div className="mt-2">
              <div className="photo-secction mb-2">
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
              </div>
            </div>


            <div>
              <div className="name-profile ms-4">
                <h6>Dr. Jessica Smith</h6>
                <img
                  alt=""
                  src={pen}
                  className="m-auto"
                  onClick={toggleShowtwo}
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
                              <input type="checkbox" className="checkbox-squer m-2"></input>
                            </div>
                            <div>
                              <label>no</label>
                              <input type="checkbox" className="checkbox-squer m-2"></input>
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


        <MDBCol order='' className="second-secction-profile d-flex justify-content-center ">
          <div>
            <div className="bg-profile-input">
              <h4 className="m-3 pt-2">About me</h4>
              <input className="input-profile" onClick={() => setShowButtons(!showbuttons)}></input>
              {showbuttons && <div className="d-flex moveR"><button className="buttonmodal me-1">save</button><button className="buttonmodal me-1 ">Cancel</button></div>}
            </div>

            <div className="bg-profile-input mb-4">
              <h4 className="m-3 pt-2">How i can help</h4>
              <input className="input-profile" onClick={() => setShowButtonsTwo(!showbuttonstwo)}></input>
              {showbuttonstwo && <div className="d-flex moveR"><button className="buttonmodal me-1">save</button><button className="buttonmodal me-1 ">Cancel</button></div>}

            </div>

            <div className="bg-profile-input mb-4">
              <div className="">
                <h4 className="m-3 pt-2">Services offered</h4>
                <input className="input-profile" onClick={() => setShowButtonsThree(!showbuttonsthree)}></input>
                {showbuttonsthree && <div className="d-flex bg-purple-modal"><button className="buttonmodal me-1">save</button><button className="buttonmodal me-1 ">Cancel</button></div>}
              </div>
                
            </div>

            <div className="bg-profile-input-certifications">
              <div className="icon-plus">
                <h4 className="m-3 pt-2">Certification</h4>
                <span className="m-3 pt-2" onClick={toggleShowlast}>+</span>
                <MDBModal show={basicModalLast} setShow={setBasicModalLast} tabIndex='-1'>
                  <MDBModalDialog className="boxmodal modal-lg">
                    <MDBModalContent className="bgmodal">
                      <MDBModalHeader>
                        <MDBModalTitle>Edit certification</MDBModalTitle>
                        <MDBBtn className='btn-close ' color='none' onClick={toggleShowlast}></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>


                        <MDBRow around>
                          <MDBCol size='4' className="whitespace me-5">
                            <input type='checkbox' className="checkbox-squer me-3 "></input>
                            <label><br/>Board Certified</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace me-5">
                            <input type='checkbox' className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Pain Medicine<br/>(ABPM)</label>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow around>
                          <MDBCol size='4' className="whitespace me-5">
                          <input type='checkbox'  className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Physician Specialties <br/>(ABPS)</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace me-5">
                          <input type='checkbox'  className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Anesthesiology<br/> (ABA)</label>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow around>
                          <MDBCol size='4' className="whitespace me-5">
                          <input type='checkbox'  className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Medical Specialties<br/> (ABMS)</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace me-5">
                          <input type='checkbox'  className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Family Medicine<br/> (ABFM)</label>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow around>
                          <MDBCol size='4' className="whitespace me-5">
                          <input type='checkbox'  className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Obstetrics and Gynecology<br/> (ABOG)</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace me-5">
                          <input type='checkbox' className="checkbox-squer me-3 mb-4"></input>
                            <label>American Board of Internal Medicine<br/> (ABIM)</label>
                          </MDBCol>
                        </MDBRow>


                      </MDBModalBody>


                      <MDBBtn className='buttonmodal mt-4 mb-3 me-4'>Save changes</MDBBtn>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </div>


            </div>
          </div>
        </MDBCol>


        <MDBCol order='' className="d-flex justify-content-center">
          <div>
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
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
