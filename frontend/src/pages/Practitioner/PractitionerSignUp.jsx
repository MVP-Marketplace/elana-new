import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../components/spinner'
import { register } from '../../features/auth/authSlice'
import { reset } from '../../features/practitionerProfiles/practitionerProfileSlice'
import '../../index.css'
import Logo from "../../img/LogoName.png";
import { MDBInput } from 'mdb-react-ui-kit';

export function PractitionerSignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        practiceName: "",
        practiceNumber: "",
        email: "",
        password: "",
        licensingCredentials: "",
        areaOfSpecialty: ""
    })

    const { firstName, lastName, practiceName, practiceNumber, email, password, licensingCredentials, areaOfSpecialty } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { practitionerUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || practitionerUser) {
            navigate('/practitionerCreateProfile')
        }

        dispatch(reset())

    }, [practitionerUser, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password.length <= 8) {
            toast.error('Password does not meet requirements')
        } else {
            const practitionerUserData = {
                firstName,
                lastName,
                practiceName,
                practiceNumber,
                email,
                password,
                licensingCredentials,
                areaOfSpecialty
            }

            dispatch(register(practitionerUserData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='signupGradient'>
            <div className='bgwhite2'>
                {/* /////// first part logo and icon*/}
                <div className="p-3">
                    <img src={Logo} className="logosingup" alt='Elana Logo'></img>
                </div>

                {/* /////// second part titles*/}

                <div className="text-center">
                    <h2 className="titlesingup">Practitioner Sign Up</h2>
                </div>

                <div className="d-grid justify-content-center m-1">
                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="firstName" value={firstName} placeholder="Enter your first Name" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="lastName" value={lastName} placeholder="Enter your last Name" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="practiceName" value={practiceName} placeholder="Enter your practiceName" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="practiceNumber" value={practiceNumber} placeholder="Enter your practiceNumber" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="password" value={password} placeholder="Enter your password" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="licensingCredentials" value={licensingCredentials} placeholder="Enter your licensingCredentials" onChange={onChange} />
                    </div>

                    <div>
                        <label className="labelsingup text-muted">Label</label>
                        <MDBInput type="text" className="form-control" id="form1" name="areaOfSpecialty" value={areaOfSpecialty} placeholder="Enter your areaOfSpecialty" onChange={onChange} />
                    </div>

                    <button className='buttonmainpage col-sm m-5' onClick={onSubmit}>
                        LOG IN
                    </button>
                </div>
            </div>

        </div >
    )
}
