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

}