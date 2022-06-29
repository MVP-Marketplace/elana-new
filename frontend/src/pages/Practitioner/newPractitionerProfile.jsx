import React, { useState } from "react";
import { useSelector } from "react-redux";
// import {logout, reset} from "../../features/auth/authSlice"
// import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux"
import pen from "../../img/Edit.png";
import camera from "../../img/camera.png";
import trash from "../../img/trash.png";
import videocamera from "../../img/videocamera.png";
import "./PractitionerProfileStyles.css";
import "../../index.css";
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

  // const navigate = useNavigate()
  // const dispatch = useDispatch()
 
  const {user} = useSelector((state)=> state.auth)





//   const onLogout = () => {
//     dispatch(logout())
//     dispatch(reset())
//     navigate('/')
// }

  return (
    <div>
    <MDBContainer className="container-profile">
      <div className="container">
    <h1 className="mb-5 ms-5 text-start">Hello, {user && `Dr. ${user.firstName} ${user.lastName}`}</h1>
    </div>
      <MDBRow>
        <MDBCol className="mb-4 d-flex justify-content-center">
          <div className="fisrt-secction-profile ">
            <div className="">
              <div className="photo-secction">
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
                        <div className="mt-2 bg-responsive">
                          <MDBCol className="" sm="">
                            <img
                              alt=""
                              src={camera}
                              onClick={toggleShow}
                              className="m-5 "
                            ></img>
                          </MDBCol>
                           <MDBCol className="" sm="">
                            <img
                              alt=""
                              src={pen}
                              onClick={toggleShow}
                              className="m-5 "
                            ></img>
                          </MDBCol>
                          <MDBCol sm="">
                            <img
                              alt=""
                              src={trash}
                              onClick={toggleShow}
                              className="m-5 "
                            ></img>
                          </MDBCol>

                          <MDBCol sm="">
                            <img
                              alt=""
                              src={videocamera}
                              onClick={toggleShow}
                              className="m-5 "
                            ></img>
                          </MDBCol>
                        </div>
                        <br></br>
                      </MDBModalBody>

                      <MDBBtn className="buttonmainpage me-5 mb-5 p-2 px-5 buttonmodalresponsive">
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
                  <MDBModalDialog className="boxmodal modal-lg boxmodalresponsive">
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
                        <div className="margin-left">
                          <div className="m-1 div-grid">
                            <div className="col-sm ">
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

                            <div className="col-sm ">
                              <label className="labelsingup text-muted whitespace">
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
                          <div className="div-grid m-1">
                            <div className="col-sm ">
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

                            <div className="col-sm ">
                              <label className="labelsingup text-muted whitespace">
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
                          <div className="div-grid m-1">
                            <div className="col-sm ">
                              <label className="labelsingup text-muted whitespace">
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

                            <div className="col-sm ">
                              <label className="labelsingup text-muted whitespace">
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
                          <div className="d-flex ">
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
            <div className="bg-profile-input mb-5">
              <h4 className="mx-3 mb-3 pt-2">About me</h4>
              <input className="input-profile" onClick={() => setShowButtons(!showbuttons)}></input>
              {showbuttons && 
              <div className="d-flex bg-purple-modal">
               <div> <button className="square_btn-modal margin-right-button me-2">save</button></div>
                <div><button className="square_btn-modal ">Cancel</button></div>
                </div>}
            </div>

            <div className="bg-profile-input mb-5">
              <div>
              <h4 className="m-3 pt-2">How i can help</h4>
              <input className="input-profile" onClick={() => setShowButtonsTwo(!showbuttonstwo)}></input>
              {showbuttonstwo && 
                <div className="d-flex bg-purple-modal">
                  
                  <div> <button className="square_btn-modal margin-right-button me-2">save</button></div>
                  <div> <button className="square_btn-modal ">Cancel</button> </div>
                </div>}
              </div>
            </div>

            <div className="bg-profile-input mb-5">
              <div className="">
                <h4 className="m-3 pt-2">Services offered</h4>
                <input className="input-profile" onClick={() => setShowButtonsThree(!showbuttonsthree)}></input>
                {showbuttonsthree && <div className="d-flex bg-purple-modal">
                  <div><button className="square_btn-modal margin-right-button me-2">save</button></div>
                  <div><button className="square_btn-modal ">Cancel</button></div></div>}
              </div>
                
            </div>

            <div className="bg-profile-input-certifications">
              <div className="icon-plus">
                <h4 className="m-3 pt-2">Certification</h4>
                <span className="m-3 pt-2 plus-button" onClick={toggleShowlast}>+</span>
                <MDBModal show={basicModalLast} setShow={setBasicModalLast} tabIndex='-1'>
                  <MDBModalDialog className="boxmodal modal-lg">
                    <MDBModalContent className="bgmodal">
                      <MDBModalHeader>
                        <MDBModalTitle>Edit certification</MDBModalTitle>
                        <MDBBtn className='btn-close ' color='none' onClick={toggleShowlast}></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>


                        <MDBRow around className="responsive-grid-modal">
                          <MDBCol size='4' className="whitespace ">
                            <input type='checkbox' className="checkbox-squer-diferent  checkbox-squer-margin"></input>
                            <label className="label-responsive"><br/>Board Certified</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace">
                            <input type='checkbox' className="checkbox-squer  checkbox-squer-margin"></input>
                            <label className="label-responsive">American Board of Pain Medicine<br/>(ABPM)</label>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow around className="responsive-grid-modal">
                          <MDBCol size='4' className="whitespace">
                          <input type='checkbox'  className="checkbox-squer  checkbox-squer-margin"></input>
                            <label className="label-responsive">American Board of Physician Specialties <br/>(ABPS)</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace">
                          <input type='checkbox'  className="checkbox-squer  checkbox-squer-margin"></input>
                            <label className="label-responsive">American Board of Anesthesiology<br/> (ABA)</label>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow around className="responsive-grid-modal">
                          <MDBCol size='4' className="whitespace">
                          <input type='checkbox'  className="checkbox-squer  checkbox-squer-margin"></input>
                            <label className="label-responsive">American Board of Medical Specialties<br/> (ABMS)</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace">
                          <input type='checkbox'  className="checkbox-squer  checkbox-squer-margin"></input>
                            <label className="label-responsive">American Board of Family Medicine<br/> (ABFM)</label>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow around className="responsive-grid-modal">
                          <MDBCol size='4' className="whitespace">
                          <input type='checkbox'  className="checkbox-squer"></input>
                            <label className="label-responsive">American Board of Obstetrics and Gynecology<br/> (ABOG)</label>
                          </MDBCol>
                          <MDBCol size='4' className="whitespace">
                          <input type='checkbox' className="checkbox-squer"></input>
                            <label className="label-responsive">American Board of Internal Medicine<br/> (ABIM)</label>
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
          <div className="">
            <div className="availability mb-4">
              <h4 className="mx-3 mb-3 pt-2">Availability</h4>
              <div className="availability-box"></div>
            </div>

            <div className="policy">
              <h4 className="m-3 pt-3">Cancellation Policy</h4>
              <input className="input-policy"></input>
            </div>

            <div className="certification mt-3">
              <h4 className="m-3 pt-2 whitespace">Payment Methods</h4>
              <span className="m-3 pt-2 plus-button">+</span>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
