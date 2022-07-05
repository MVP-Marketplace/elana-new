import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/spinner'
import { MDBInput } from 'mdb-react-ui-kit';
import Logo from "../../img/LogoName.png";
import Logores from "../../img/logoresponsive.png";
import '../../index.css'

export function PractitionerLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (user) {
            navigate('/newPractitionerProfile')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const practitionerUserData = {
            email,
            password,
        }

        dispatch(login(practitionerUserData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="signupGradientbg2">
            {/* /////// singUpGradient control padding */}
            <div className="bgwhite2 row">

                {/* /////// first part logo and icon*/}
                <div className="p-3">
                    <img src={Logo} className="logosingup" alt='Elana Logo'></img>
                    
                </div>

                {/* /////// second part titles*/}

                <div className="">
                    <div className='d-flex'>
                    <div className='responsivediv'>
                    <img src={Logores} className="Logores" alt='Elana Logo'></img>
                    </div>
                    <div className='text-center'>
                    <h2 className="titlesingup text-center">Practitioner Log In</h2>
                    <p className="labelsingup text-center">Don`t have an account? Click <a className="Link text-decoration-none" href="/practitionerSignUp" target="_blank"><span>here</span></a> to Sign Up</p>
                    </div>
                    </div>

                </div>

                {/* /////// third part inputs*/}

                <div className="d-grid justify-content-center m-1 row">
                    <div className='col-sm'>
                        <label className="labelsingup text-muted">Username</label>
                        <MDBInput 
                            id='form1' 
                            type='email'
                            className='form-control inputlogin'
                            name='email'
                            value={email}
                            onChange={onChange} />
                    </div>

                    <div className='col-sm'>
                        <label className="labelsingup text-muted">Password</label>
                        <MDBInput 
                            id='form1' 
                            type='Password'
                            className='form-control inputlogin'
                            name='password'
                            value={password}
                            onChange={onChange} />
                    </div>

                    <button className='buttonmainpage col-sm m-4' onClick={onSubmit}>
                        LOG IN
                    </button>
                    </div>
                </div>

            </div>
            )
}