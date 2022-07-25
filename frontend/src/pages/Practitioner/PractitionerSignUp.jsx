import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import { register } from "../../features/auth/authSlice";
import { reset } from "../../features/practitionerProfiles/practitionerProfileSlice";
import "../../index.css";
import Logo from "../../img/LogoName.png";
import vec from "../../img/vectormodal.png";
import Logores from "../../img/logoresponsive.png";
import {
  MDBInput,

  MDBModal,
  MDBModalDialog,
  MDBModalContent,

  MDBModalBody,

} from "mdb-react-ui-kit";

export function PractitionerSignUp() {
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
    "Vaginoplasty Prep and Recovery"
  ]

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState (false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    practiceName: "",
    practiceNumber: "",
    email: "",
    password: "",
    licensingCredentials: "",
    areaOfSpecialty: "",
    subSpecialty: "",
    location: "",
 
  });

  const {
    firstName,
    lastName,
    practiceName,
    practiceNumber,
    email,
    password,
    licensingCredentials,
    areaOfSpecialty,
    subSpecialty,
    location,
    

  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/newPractitionerProfile");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  useEffect(()=>{
    const checkdata = (data)=>{
      if(data.password === "" || data.email === "" || data.firstName === ""|| data.lastName === "" || data.licensingCredentials === "" || data.areaOfSpecialty === "" || data.location === "" || data.subSpecialty === "" || checked === false){
        setDone(false) 
      } else{
        setDone(true)
      }
      
        }
      checkdata(formData)
  }, [formData, checked])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password.length <= 8) {
      toast.error("Password does not meet requirements");
    } else {
      const practitionerUserData = {
        firstName,
        lastName,
        practiceName,
        practiceNumber,
        email,
        password,
        licensingCredentials,
        areaOfSpecialty,
        subSpecialty,
        location,
      };

      dispatch(register(practitionerUserData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }



  return (
    <section className=''> 
      <form onSubmit={onSubmit}>
    <div className="signupGradient d-flex">
      <div className="bgwhite p-2 row ">
        {/* /////// first part logo and icon*/}
        <div className="d-flex justify-content-between">
          <img src={Logo} className="logonew" alt="Elana Logo"></img>
          {/* <div>
            <i class="fas fa-times"></i>
          </div> */}
        </div>

        {/* /////// second part titles*/}

        <div className="text-center no-responsive-view">
          <h2 className="titlesingup text-center m-0">Welcome to Elana</h2>
          <p className="mb-2">
            Already have an account? Click <span onClick={()=> navigate('/practitionerLogin')} className="pointer">here</span> to login
          </p>
        </div>

        <div className="">
          <div className='d-flex'>
            <div className=''>
              <img src={Logores} className="Logores" alt='Elana Logo'></img>
            </div>
            <div className='text-center no-bigscreen'>
              <h2 className="titlesingup text-center">Welcome to Elana</h2>
              <p className="labelsingup text-center"> Already have an account? Click <span onClick={()=> navigate('/practitionerLogin')}>here</span> to login</p>
            </div>
          </div>

        </div>



        <div className="margin-left">
          <div className="d-flex justify-content-evenly m-1 row">
            <div className="col-sm">
              <label className="labelsingup text-muted">First Name</label>

              <MDBInput
                type="text"
                className="form-control mdb"
                id="form1"
                name="firstName"
                value={firstName}
                onChange={onChange}
                required
              />
            </div>

            <div className="col-sm ">
              <label className="labelsingup text-muted">Last Name</label>
              <MDBInput
                type="text"
                className="form-control mdb"
                id="form1"
                name="lastName"
                value={lastName}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-evenly m-1 row">
            <div className="col-sm ">
              <label className="labelsingup text-muted">Practice Name</label>
              <MDBInput
                type="text"
                className="form-control mdb"
                id="form1"
                name="practiceName"
                value={practiceName}
                onChange={onChange}
                required
              />
            </div>

            <div className="col-sm ">
              <label className="labelsingup text-muted">Practice Number</label>
              <MDBInput
                type="text"
                className="form-control mdb"
                id="form1"
                name="practiceNumber"
                value={practiceNumber}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-evenly m-1 row">
            <div className="col-sm ">
              <label className="labelsingup text-muted">Email</label>
              <MDBInput
                type="text"
                className="form-control col-sm mdb"
                id="form1"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>

            <div className="col-sm ">
              <label className="labelsingup text-muted">Password <span className="smallLetters">(9 characters min.)</span></label>
              <MDBInput
                type="password"
                className="form- mdb"
                id="form1"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-evenly m-1 row">
            <div className="col-sm ">
              <label className="labelsingup text-muted">Licensing Credentials</label>
              <MDBInput
                type="text"
                className="form-control col-sm mdb"
                id="form1"
                name="licensingCredentials"
                value={licensingCredentials}
                onChange={onChange}
                required
              />
            </div>

            <div className="col-sm ">
              <label className="labelsingup text-muted">Location </label>
              <MDBInput
                type="text"
                className="form- mdb"
                id="form1"
                name="location"
                value={location}
                onChange={onChange}
                required
              />
            </div>
          </div>

          


          <div className="row">
            {/* <div className="inputdrop col-sm col-md-12 ">
              <label className="labelsingup text-muted">Licensing Credentials</label>
              <MDBInput
                type="text"
                className="form-control input-responsive-new"
                id="form1"
                name="subSpecialty"
                value={subSpecialty}
                onChange={onChange}
                required
              />
            </div> */}
            <div className="inputdrop col-sm col-md-12">
              <label className="labelsingup text-muted">Area of Specialty</label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  name="areaOfSpecialty"
                  value={areaOfSpecialty}
                  onChange={onChange}
                  required
                >
                  <option value="0" className="text-muted">
                    -select one-
                  </option>
                  {practitionerTypes.map((type, index) => {
                   return <option key={index} value={type} className="text-muted">
                      {type}
                    </option>
                  })}
                </select>
              </div>
            </div>

            <div className="inputdrop col-sm col-md-12">
              <label className="labelsingup text-muted">Sub Specialty</label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  name="subSpecialty"
                  value={subSpecialty}
                  onChange={onChange}
                  required
                >
                  <option value="0" className="text-muted">
                    -select one-
                  </option>
                  {appointmentTypes.map((type, index) => {
                   return <option key={index} value={type} className="text-muted">
                      {type}
                    </option>
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center center-responsive-checkbox">
          <input type="checkbox" onChange={()=> setChecked(!checked)}className="checkbox-round m-2"></input>
          <span>
            By creating an account, you have read and agree to our{" "}
            <span>Terms</span> and <span>Privacy Policy</span>
          </span>
          <div className="text-center">
            <button onClick={function () { toggleShow(); onSubmit() }} className={done ? "buttonmainpage": "button-disable"} disabled={!done}>CONTINUE</button>

            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
              <MDBModalDialog centered>
                <MDBModalContent>
                  <MDBModalBody className="text-center">
                    <img src={vec} className="" alt="keep"></img>
                    <h1>Woohoo</h1>
                    <p>Your registration is complete. Please, check your email for confirmation information.</p>
                    <p>Next, let’s set up your profile.</p>
                     <Link to="/newPractitionerProfile"><button className="buttonmainpage">CREATE PROFILE</button></Link> 
                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
        </div>



      </div>
    </div>
    </form>
    </section>

  );
}
