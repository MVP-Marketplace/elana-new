import { Link } from 'react'
import Spinner from '../../components/spinner'
import { useSelector } from 'react-redux'
import './PractitionerProfileStyles.css'
import { Container, Image, Card } from 'react-bootstrap'
import '../../index.css'

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
                        <div key={practitionerProfile} className="profilePage">
                            <Container className='d-flex flex-column'>
                                <Card className="d-flex align-items-center profileTop mt-5">
                                    <Image
                                        src={'https://imgur.com/PCEcljZ.png'}
                                        alt="profile-picture"
                                        className="profileImg"
                                        roundedCircle
                                    />
                                </Card>

                                <div className="mt-3 heading">
                                    <h1 className="userName">{practitionerProfile.fullName}</h1>
                                    <p>I am a registered user!</p>
                                    <h6>{practitionerProfile.fullName}</h6>
                                </div>

                                <section className=''>
                                <div className="row">
				<div className="col-md-4 boximage ">

					<div className="">
					</div>
					<div className="sectionprofile">
						<h5 className="mb-2">Dr. Susana Horia </h5> <i className="fas fa-pencil-alt" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

						<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">Edit Credentials</h5>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body ">
										<div>Please add the following credentials:</div>
										<div className="d-grid justify-content-center m-1">
											<label className="labelsingup text-muted">Your Name
												<input></input>
											</label>
											<label className="labelsingup text-muted">Your Practice’s Name
												<input></input>
											</label>
											<label className="labelsingup text-muted">Your Specialty
												<input></input>
											</label>
											<label className="labelsingup text-muted">Sub Specialty
												<input></input>
											</label>
											<label className="labelsingup text-muted">Years of Experience
												<input></input>
											</label>

										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" className="btn btn-primary">Save changes</button>
									</div>
								</div>
							</div>
						</div>


						<h6 className="mb-2">practice name</h6>
						<p></p>
						<h6 className="mb-2">Specialty</h6>
						<p>are1</p>
						<h6 className="mb-2">Sub-Specialties</h6>
						<p>area2</p>
						<h6 className="mb-2">Years of Experience</h6>
						<p>area3</p>
						<div className="d-flex mb-2">
							<h6>need a video call?</h6>
							<i class="fas fa-video ms-3"></i>
						</div>

					</div>

				</div>
				<div className="col-md-4">
					<div className="editprofile">
						<h3>About Me</h3>
						<textarea></textarea>
					</div>
					<div className="editprofile">
						<h3>How I can help you?</h3>
						<textarea></textarea>
					</div>
					<div className="editprofile">
						<h3>Services offered</h3>
						<textarea></textarea>
					</div>
					<div className="editprofilecertification">
						<h3>Certifications</h3>
						<textarea className="special"></textarea>
					</div>
				</div>
				<div className="col-md-4">
					<div className="availability"></div>
					<div className="cancelation"></div>
					<div className="payment"></div>
				</div>
			</div>
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
                            </Container>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>You havent made a profile</h2>
            )
            }
        </>
    );
}