import { useDispatch, useSelector } from 'react-redux'
import { useState, Link } from 'react'
import Spinner from '../../components/spinner'
import { updatePractitionerProfile } from '../../features/practitionerProfiles/practitionerProfileSlice'
import { useParams } from "react-router-dom";

export function PractitionerEditProfile() {

    let { id } = useParams();
    const dispatch = useDispatch()

    const { practitionerProfiles, isLoading } = useSelector(
        (state) => state.practitionerProfiles
    )

    let practitionerProfile = practitionerProfiles.find((profile, index) => {
        if (profile._id == id) {
            return profile;
        }
    });

    const [updatedPractitionerProfile, setUpdatedPractitionerProfile] = useState(practitionerProfile);

    const onChange = (e) => {
        setUpdatedPractitionerProfile({ ...updatedPractitionerProfile, [e.target.name]: e.target.value });
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {id ? (
                <>
                    <section className=''>
                        <h1>Welcome {practitionerProfile.fullName}</h1>
                        <p>Profile</p>
                    </section>

                    <section className=''>
                        <form>
                            <div className=''>
                                <label htmlFor="text">aboutMe</label>
                                <input type='text' name='aboutMe' id='aboutMe' value={practitionerProfile.aboutMe} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">howCanIHelp</label>
                                <input type='text' name='howCanIHelp' id='howCanIHelp' value={practitionerProfile.howCanIHelp} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">servicesOffered</label>
                                <input type='text' name='servicesOffered' id='servicesOffered' value={practitionerProfile.servicesOffered} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">certifications</label>
                                <input type='text' name='certifications' id='certifications' value={practitionerProfile.certifications} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">availability</label>
                                <input type='text' name='availability' id='availability' value={practitionerProfile.availability} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">cancellationPolicy</label>
                                <input type='text' name='cancellationPolicy' id='cancellationPolicy' value={practitionerProfile.cancellationPolicy} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">paymentMethods</label>
                                <input type='text' name='paymentMethods' id='paymentMethods' value={practitionerProfile.paymentMethods} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">fullName</label>
                                <input type='text' name='fullName' id='fullName' value={practitionerProfile.fullName} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">practiceName</label>
                                <input type='text' name='practiceName' id='practiceName' value={practitionerProfile.practiceName} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">specialty</label>
                                <input type='text' name='specialty' id='specialty' value={practitionerProfile.specialty} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">subSpecialites</label>
                                <input type='text' name='subSpecialites' id='subSpecialites' value={practitionerProfile.subSpecialites} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">yearsOfExperience</label>
                                <input type='text' name='yearsOfExperience' id='yearsOfExperience' value={practitionerProfile.yearsOfExperience} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">education</label>
                                <input type='text' name='education' id='education' value={practitionerProfile.education} onChange={onChange} />
                            </div>
                            <div className=''>
                                <label htmlFor="text">telehealthProvided</label>
                                <input type='text' name='telehealthProvided' id='telehealthProvided' value={practitionerProfile.telehealthProvided} onChange={onChange} />
                            </div>
                            <div className=''>
                                <Link to='/practitionerProfile'>
                                    <button className='btn' type='submit' onClick={() => {
                                        dispatch(updatePractitionerProfile(practitionerProfile._id))
                                    }}>
                                        Save Profile
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </section>
                </>
            ) : (
                <h2>Please create a profile</h2>
            )}
        </>
    )
}