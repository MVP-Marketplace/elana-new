import React from "react";
import { Link } from "react-router-dom";

export function Homescreen() {

    return (
        <div className="container">
            <h2>Homescreen</h2>
            <h5>Click on the Elana link to come back to the index</h5>
            <ul>
                <li><Link to='/choosingACategory'>ChoosingACategory</Link></li>
                <li><Link to='/practitionerListing'>PractitionerListing</Link></li>
                <li><Link to='/aboutPage'>AboutPage</Link></li>
                <li><Link to='/individualPage'>IndividualPage</Link></li>
                <li><Link to='/terms'>Terms</Link></li>
                <li><Link to='/privacyPolicy'>PrivacyPolicy</Link></li>
                <li><Link to='/practitionerSignUp'>PractitionerSignUp</Link></li>
                <li><Link to='/practitionerLogin'>PractitionerLogin</Link></li>
                <li><Link to='/practitionerCreateProfile'>PractitionerCreateProfile</Link></li>
                <li><Link to='/practitionerProfile'>PractitionerProfile</Link></li>
                <li><Link to='/practitionerEditProfile'>PractitionerEditProfile</Link></li>
            </ul>
        </div>
    )

}