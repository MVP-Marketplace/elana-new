import { Link } from 'react'
import Spinner from '../../components/spinner'
import { useSelector } from 'react-redux'
import './PractitionerProfileStyles.css'

export function PractitionerProfile() {

    const { practitionerProfiles, isLoading } = useSelector(
        (state) => state.practitionerProfiles
    )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {practitionerProfiles.length > 0 ? (
                <div>
                    {practitionerProfiles.map((practitionerProfile) => (
                        <div key={practitionerProfile}>
                            <section>
                                <h1>Welcome {practitionerProfile.fullName}</h1>
                                <p>Profile</p>
                            </section>

                            <section className=''>
                                <form>
                                    <div className=''>
                                        <label htmlFor="text">aboutMe</label>
                                        <input type='text' name='aboutMe' id='aboutMe' value={practitionerProfile.aboutMe} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">howCanIHelp</label>
                                        <input type='text' name='howCanIHelp' id='howCanIHelp' value={practitionerProfile.howCanIHelp} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">servicesOffered</label>
                                        <input type='text' name='servicesOffered' id='servicesOffered' value={practitionerProfile.servicesOffered} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">certifications</label>
                                        <input type='text' name='certifications' id='certifications' value={practitionerProfile.certifications} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">availability</label>
                                        <input type='text' name='availability' id='availability' value={practitionerProfile.availability} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">cancellationPolicy</label>
                                        <input type='text' name='cancellationPolicy' id='cancellationPolicy' value={practitionerProfile.cancellationPolicy} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">paymentMethods</label>
                                        <input type='text' name='paymentMethods' id='paymentMethods' value={practitionerProfile.paymentMethods} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">fullName</label>
                                        <input type='text' name='fullName' id='fullName' value={practitionerProfile.fullName} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">practiceName</label>
                                        <input type='text' name='practiceName' id='practiceName' value={practitionerProfile.practiceName} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">specialty</label>
                                        <input type='text' name='specialty' id='specialty' value={practitionerProfile.specialty} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">subSpecialites</label>
                                        <input type='text' name='subSpecialites' id='subSpecialites' value={practitionerProfile.subSpecialites} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">yearsOfExperience</label>
                                        <input type='text' name='yearsOfExperience' id='yearsOfExperience' value={practitionerProfile.yearsOfExperience} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">education</label>
                                        <input type='text' name='education' id='education' value={practitionerProfile.education} />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="text">telehealthProvided</label>
                                        <input type='text' name='telehealthProvided' id='telehealthProvided' value={practitionerProfile.telehealthProvided} />
                                    </div>
                                    <div className=''>
                                        <Link to={`/practitionerEditProfile/${practitionerProfile._id}`}>
                                            <button className='btn' type='submit' >
                                                Edit Profile
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </section>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>You havent made a profile</h2>
            )
            }
        </>
    )
}