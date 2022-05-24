import React from "react";

export function PractitionerListing() {

    return (
        <div className="col">
            <button className="listingButton">Back</button>
            <div className="listingContainer">
                <h1 className="listingHeader">Endometriosis</h1>
                <p className="listingText1">Endometriosis (en-doe-me-tree-O-sis) is an often painful disorder in which tissue similar to the tissue that normally lines the inside of your uterus (the endometrium) grows outside your uterus. Endometriosis commonly involves your ovaries, fallopian tubes and the tissue lining your pelvis. </p>
                <p className="listingText2">Common signs and symptoms of endometriosis include painful periods (dysmenorrhea), pain with intercourse, pain with bowel movements or urination, excessive bleeding, and infertility. Other signs and symptoms may include fatigue, diarrhea, constipation, bloating or nausea, especially during menstrual periods.</p>
            </div>
            <div className="filterByContainer">
                <label for="cars"><u><h2>Practitioner Type</h2></u></label>
                <select id="cars" name="cars">
                    <option value="volvo">Gyno-urology</option>
                    <option value="saab">Nurse Practitioner</option>
                    <option value="fiat">Nutritionist</option>
                    <option value="audi">OBGYN</option>
                    <option value="audi">Yoga Instructer</option>
                    <option value="audi">Physician</option>
                </select>

                <label for="cars"><u><h2>Appointment Type</h2></u></label>
                <select id="cars" name="cars">
                    <option value="volvo">Gyno-urology</option>
                    <option value="saab">Nurse Practitioner</option>
                    <option value="fiat">Nutritionist</option>
                    <option value="audi">OBGYN</option>
                    <option value="audi">Yoga Instructer</option>
                    <option value="audi">Physician</option>
                </select>

                <label for="cars"><u><h2>Location</h2></u></label>
                <select id="cars" name="cars">
                    <option value="volvo">Gyno-urology</option>
                    <option value="saab">Nurse Practitioner</option>
                    <option value="fiat">Nutritionist</option>
                    <option value="audi">OBGYN</option>
                    <option value="audi">Yoga Instructer</option>
                    <option value="audi">Physician</option>
                </select>

            </div>
            <div className="filterDataContainer">
                <div className="person">

                </div>
                <div className="person">

                </div>
                <div className="person">

                </div>
                <div className="person">

                </div>
            </div>
            <div className="resourcesContainer col">
                <h1 className="resourcesText">Additional Resources</h1> <button className="browseButton">Browse More</button>
                <div className="bottomContainer">
                    <ul className="purple">
                        <li className="purpleBox1"><h3 className="ARh3">How’s Endometriosis Research Going?</h3> <p className="ARp">A look at research happening all around the world</p></li>
                        <li className="purpleBox1"><h3 className="ARh3">Physical Therapy for Endometriosis?</h3> <p className="ARp">An interview with an expert to answer all your questions</p></li>
                        <li className="purpleBox3"><h3 className="ARh3">Why is Endometriosis So Poorly Understood?</h3><p className="ARp">A deep dive look into why this is a serious issue</p></li>
                        <li className="purpleBox4"><h3 className="ARh3">Endometriosis Pain: Finding Relief</h3><p className="ARp">Some tips to care and provide relief for yourself at home </p></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}