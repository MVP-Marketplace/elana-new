import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export function Homescreen() {

    return (
        <div className="container">
            <h2>Homescreen</h2>
            <h5>Click on the Elana logo to come back to the index</h5>
            <ul>
                <li><Link to='/choosingACategory'>BrowsePelvicHealth</Link></li>
                <li><Link to='/practitionerListing'>PractitionerListing</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/homePage'>HomePage</Link></li>
                <li><Link to='/individualPage'>IndividualPage</Link></li>
                <li><Link to='/practitionerPage'>PractitionerPage</Link></li>
                <li><Link to='/terms'>Terms</Link></li>
                <li><Link to='/privacyPolicy'>PrivacyPolicy</Link></li>
                <li><Link to='/practitionerSignUp'>PractitionerSignUp</Link></li>
                <li><Link to='/practitionerLogin'>PractitionerLogin</Link></li>
                <li><Link to='/newPractitionerProfile'>New Practitioner Profile</Link></li>
                <li><Link to='/newPractitionerListing'>New Practitioner Listing</Link></li>
            </ul>
        </div>
    )

}