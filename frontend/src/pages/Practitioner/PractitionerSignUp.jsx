import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import { register } from "../../features/auth/authSlice";
import { reset } from "../../features/practitionerProfiles/practitionerProfileSlice";
import "../../index.css";
import Logo from "../../img/LogoName.png";
import vec from "../../img/vector.png";
import {
  MDBInput,
 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,

  MDBModalBody,

} from "mdb-react-ui-kit";

export function PractitionerSignUp() {

  const [centredModal, setCentredModal] = useState(false);
	const toggleShow = () => setCentredModal(!centredModal);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    practiceName: "",
    practiceNumber: "",
    email: "",
    password: "",
    licensingCredentials: "",
    areaOfSpecialty: "",
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
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { practitionerUser, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || practitionerUser) {
      navigate("/practitionerCreateProfile");
    }

    dispatch(reset());
  }, [practitionerUser, isError, isSuccess, message, navigate, dispatch]);

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
      };

      dispatch(register(practitionerUserData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="signupGradient">
      <div className="bgwhite p-2">
        {/* /////// first part logo and icon*/}
        <div className="d-flex justify-content-between">
          <img src={Logo} className="logosingup" alt="Elana Logo"></img>
          <div>
            <i class="fas fa-times"></i>
          </div>
        </div>

        {/* /////// second part titles*/}

        <div className="text-center">
          <h2 className="titlesingup text-center">Welcome to Elana</h2>
          <p className="">
            Already have an account? Click <span>here</span> to login
          </p>
        </div>

        <div className="d-flex justify-content-evenly m-1">
          <div>
            <label className="labelsingup text-muted">First Name</label>
            <MDBInput
              type="text"
              className="form-control"
              id="form1"
              name="firstName"
              value={firstName}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="labelsingup text-muted">Last Name</label>
            <MDBInput
              type="text"
              className="form-control"
              id="form1"
              name="lastName"
              value={lastName}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-evenly m-1">
          <div>
            <label className="labelsingup text-muted">Practice Name</label>
            <MDBInput
              type="text"
              className="form-control"
              id="form1"
              name="practiceName"
              value={practiceName}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="labelsingup text-muted">Practice Number</label>
            <MDBInput
              type="text"
              className="form-control"
              id="form1"
              name="practiceNumber"
              value={practiceNumber}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-evenly m-1">
          <div>
            <label className="labelsingup text-muted">Email</label>
            <MDBInput
              type="text"
              className="form-control"
              id="form1"
              name="practiceName"
              value={email}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="labelsingup text-muted">password</label>
            <MDBInput
              type="text"
              className="form-control"
              id="form1"
              name="practiceNumber"
              value={password}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="inputdrop">
          <label className="labelsingup text-muted">Label</label>
          <MDBInput
            type="text"
            className="form-control"
            id="form1"
            name="licensingCredentials"
            value={licensingCredentials}
            onChange={onChange}
          />
        </div>

        <div className="inputdrop">
          <label className="labelsingup text-muted">Area of Specialty</label>
          <div class="input-group">
            <select
              class="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              name="areaOfSpecialty"
              value={areaOfSpecialty}
              onChange={onChange}
            >
              <option value="1" className="text-muted">
                -select one-
              </option>
              <option value="2">Occupational Therapist (OT)</option>
              <option value="3">Pain Management Doctor</option>
              <option value="4">Pain Management Psychologist</option>
              <option value="5">Pelvic Health Physical Therapist</option>
            </select>
          </div>
        </div>

        <div className="m-3 text-center">
          <input type="checkbox" className="checkbox-round m-2"></input>
          <span>
            By creating an account, you have read and agree to our{" "}
            <span>Terms</span> and <span>Privacy Policy</span>
          </span>
        </div>


        <div className="text-center">
					<button onClick={function (){toggleShow() ; onSubmit()}} className="buttonmainpage ">CONTINUE</button>

					<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
						<MDBModalDialog centered>
							<MDBModalContent>
								<MDBModalBody className="text-center">
									<img src={vec} className="logosingup" alt="keep"></img>
									<h1>Woohoo</h1>
									<p>Your registration is complete. Please, check your email for confirmation information.</p>
									<p>Next, let’s set up your profile.</p>
									<button className="buttonmainpage">CREATE PROFILE</button>
								</MDBModalBody>
							</MDBModalContent>
						</MDBModalDialog>
					</MDBModal>
				</div>

      </div>
    </div>
  );
}
