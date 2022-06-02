import { Link } from 'react'
import Spinner from '../../components/spinner'
import { useSelector } from 'react-redux'
import './PractitionerProfileStyles.css'
import { Container, Image, Card } from 'react-bootstrap'
import '../../index.css'

export function PractitionerProfile() {


    return (
        <div className="pp">  <h1 className="ppHeader">Hello, Jessica Smith</h1>
            <button className="ppButton">Log Out</button>
            <div className="ppConainer">

                <div className="ppPerson">
                    <div className="ppImageBox">
                        <div className="ppd">
                            <p className="ppText">Upload photo and video file</p>
                            {/* <form action="/action_page.php">
                                <input type="file" id="myFile" name="filename" />
                                <input type="submit" />
                            </form> */}
                        </div>
                    </div>
                    <div className="ppProfile">
                        <p><b>Dr. Jessica Smith</b></p>
                        <p>Practice Name</p>
                        <p>Specialty</p>
                        <p>Sub specialties</p>
                        <p>Years of Experience</p>
                        <p>Education</p>
                        <p>Telehealth Services:</p>
                    </div>
                </div>
                <div className="ppAbout">
                    <div className="ppAbout">
                        <div className="ppAboutbox">
                            <h4>About Me</h4>
                            <input type="text" placeholder="Body text goes here" className="ppInput" />
                        </div>
                    </div>
                    <div className="ppAboutA">
                        <div className="ppAboutbox">
                            <h4>How I can Help</h4>
                            <input type="text" placeholder="Body text goes here" className="ppInput" />
                        </div>
                    </div>
                    <div className="ppAboutB">
                        <div className="ppAboutbox">
                            <h4>Services Offered</h4>
                            <input type="text" placeholder="Body text goes here" className="ppInput" />
                        </div>
                    </div>
                    <div className="ppAbout2">
                        <div className="ppAboutbox2">
                            <h4>Certifications</h4>
                            <button className="ppCertificationButton">+</button>
                        </div>
                    </div>
                </div>
                <div className="ppAvailability">
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
                            <input type="text" placeholder="Body text goes here" className="ppInput3" />
                        </div>
                    </div>
                    <div className="ppPayment">
                        <div className="ppMethodsbox">
                            <h4>Payment Methods</h4>
                            <button className="ppPaymentButton">+</button>
                        </div>
                    </div>
                </div>
            </div></div>)








    // const { practitionerProfiles, isLoading } = useSelector(
    //     (state) => state.practitionerProfiles
    // )

    // if (isLoading) {
    //     return <Spinner />
    // }

    // return (
    //     <>
    //         {practitionerProfiles.length > 0 ? (
    //             <div>
    //                 {practitionerProfiles.map((practitionerProfile) => (
    //                     <div key={practitionerProfile} className="profilePage">
    //                         <Container className='d-flex flex-column'>
    //                             <Card className="d-flex align-items-center profileTop mt-5">
    //                                 <Image
    //                                     src={'https://imgur.com/PCEcljZ.png'}
    //                                     alt="profile-picture"
    //                                     className="profileImg"
    //                                     roundedCircle
    //                                 />
    //                             </Card>

    //                             <div className="mt-3 heading">
    //                                 <h1 className="userName">{practitionerProfile.fullName}</h1>
    //                                 <p>I am a registered user!</p>
    //                                 <h6>{practitionerProfile.fullName}</h6>
    //                             </div>

    //                             <section className=''>
    //                                 <form>
    //                                     <div className=''>
    //                                         <label htmlFor="text">aboutMe</label>
    //                                         <input type='text' name='aboutMe' id='aboutMe' value={practitionerProfile.aboutMe} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">howCanIHelp</label>
    //                                         <input type='text' name='howCanIHelp' id='howCanIHelp' value={practitionerProfile.howCanIHelp} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">servicesOffered</label>
    //                                         <input type='text' name='servicesOffered' id='servicesOffered' value={practitionerProfile.servicesOffered} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">certifications</label>
    //                                         <input type='text' name='certifications' id='certifications' value={practitionerProfile.certifications} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">availability</label>
    //                                         <input type='text' name='availability' id='availability' value={practitionerProfile.availability} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">cancellationPolicy</label>
    //                                         <input type='text' name='cancellationPolicy' id='cancellationPolicy' value={practitionerProfile.cancellationPolicy} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">paymentMethods</label>
    //                                         <input type='text' name='paymentMethods' id='paymentMethods' value={practitionerProfile.paymentMethods} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">fullName</label>
    //                                         <input type='text' name='fullName' id='fullName' value={practitionerProfile.fullName} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">practiceName</label>
    //                                         <input type='text' name='practiceName' id='practiceName' value={practitionerProfile.practiceName} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">specialty</label>
    //                                         <input type='text' name='specialty' id='specialty' value={practitionerProfile.specialty} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">subSpecialites</label>
    //                                         <input type='text' name='subSpecialites' id='subSpecialites' value={practitionerProfile.subSpecialites} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">yearsOfExperience</label>
    //                                         <input type='text' name='yearsOfExperience' id='yearsOfExperience' value={practitionerProfile.yearsOfExperience} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">education</label>
    //                                         <input type='text' name='education' id='education' value={practitionerProfile.education} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <label htmlFor="text">telehealthProvided</label>
    //                                         <input type='text' name='telehealthProvided' id='telehealthProvided' value={practitionerProfile.telehealthProvided} />
    //                                     </div>
    //                                     <div className=''>
    //                                         <Link to={`/practitionerEditProfile/${practitionerProfile._id}`}>
    //                                             <button className='btn' type='submit' >
    //                                                 Edit Profile
    //                                             </button>
    //                                         </Link>
    //                                     </div>
    //                                 </form>
    //                             </section>
    //                         </Container>
    //                     </div>
    //                 ))}
    //             </div>
    //         ) : (
    //             <h2>You havent made a profile</h2>
    //         )
    //         }
    //     </>
    // )
}