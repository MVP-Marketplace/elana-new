import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPractitionerProfile } from '../../features/practitionerProfiles/practitionerProfileSlice'
import { Link } from "react-router-dom";
import '../../index.css'

export function PractitionerCreateProfile() {
    const [formData, setFormData] = useState({
        aboutMe: '',
        howCanIHelp: '',
        servicesOffered: '',
        certifications: '',
        availability: '',
        cancellationPolicy: '',
        paymentMethods: '',
        fullName: '',
        practiceName: '',
        specialty: '',
        subSpecialites: '',
        yearsOfExperience: '',
        education: '',
        telehealthProvided: ''
    })

    const { aboutMe, howCanIHelp, servicesOffered, certifications, availability, cancellationPolicy, paymentMethods, fullName, practiceName, specialty, subSpecialites, yearsOfExperience, education, telehealthProvided } = formData

    const dispatch = useDispatch()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createPractitionerProfile(formData))

        const practitionerProfileData = {
            aboutMe,
            howCanIHelp,
            servicesOffered,
            certifications,
            availability,
            cancellationPolicy,
            paymentMethods,
            fullName,
            practiceName,
            specialty,
            subSpecialites,
            yearsOfExperience,
            education,
            telehealthProvided
        }

        setFormData(practitionerProfileData)
    }

    return (
        <>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor="text">aboutMe</label>
                        <input type='text' name='aboutMe' id='aboutMe' value={aboutMe} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">howCanIHelp</label>
                        <input type='text' name='howCanIHelp' id='howCanIHelp' value={howCanIHelp} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">servicesOffered</label>
                        <input type='text' name='servicesOffered' id='servicesOffered' value={servicesOffered} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">certifications</label>
                        <input type='text' name='certifications' id='certifications' value={certifications} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">availability</label>
                        <input type='text' name='availability' id='availability' value={availability} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">cancellationPolicy</label>
                        <input type='text' name='cancellationPolicy' id='cancellationPolicy' value={cancellationPolicy} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">paymentMethods</label>
                        <input type='text' name='paymentMethods' id='paymentMethods' value={paymentMethods} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">fullName</label>
                        <input type='text' name='fullName' id='fullName' value={fullName} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">practiceName</label>
                        <input type='text' name='practiceName' id='practiceName' value={practiceName} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">specialty</label>
                        <input type='text' name='specialty' id='specialty' value={specialty} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">subSpecialites</label>
                        <input type='text' name='subSpecialites' id='subSpecialites' value={subSpecialites} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">yearsOfExperience</label>
                        <input type='text' name='yearsOfExperience' id='yearsOfExperience' value={yearsOfExperience} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">education</label>
                        <input type='text' name='education' id='education' value={education} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="text">telehealthProvided</label>
                        <input type='text' name='telehealthProvided' id='telehealthProvided' value={telehealthProvided} onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <Link to='/PractitonerProfile'>
                            <button className='btn btn-block' type='submit'>
                                Save Profile
                            </button>
                        </Link>
                    </div>
                </form>
            </section>
        </>
    )
}