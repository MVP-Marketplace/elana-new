import React from "react";
import "../../index.css";
import arrow from "../../img/arrow.png";
import imageface from "../../img/imageface.png";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";

export function PractitionerListing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="listingContainer">
            <h1 className="listingHeader titleresponsive">Endometriosis</h1>
            <p className="textresponsive ">
              <span>Endometriosis (en-doe-me-tree-O-sis) </span>is an often painful disorder
              in which tissue similar to the tissue that normally lines the
              inside of your uterus (the endometrium) grows outside your uterus.
              Endometriosis commonly involves your ovaries, fallopian tubes and
              the tissue lining your pelvis.{" "}
            </p>
            <p className="textresponsive">
              Common signs and symptoms of endometriosis include<span> painful periods
              (dysmenorrhea), pain with intercourse, pain with bowel movements
              or urination, excessive bleeding </span>, and <span>infertility</span>. Other signs and
              symptoms may include fatigue, diarrhea, constipation, bloating or
              nausea, especially during menstrual periods.
            </p>
          </div>
          <div className="filterByContainer">
            <MDBDropdown>
              <MDBDropdownToggle  color='shadow-0'>
                
                <div className="d-flex">
                  <div className="">
                    <h4 className="me-5">Practitioner Type</h4>
                  </div>
                  <div>
                    <img src={arrow} alt="description"></img>
                  </div>
                </div>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                    <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                    <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                <input type="checkbox" className="checkbox"></input>
                  <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                  <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                  <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>


            <MDBDropdown>
              <MDBDropdownToggle  color='shadow-0'>
                
                <div className="d-flex">
                  <div className="">
                    <h4 className="me-5">Practitioner Type</h4>
                  </div>
                  <div>
                    <img src={arrow} alt="description"></img>
                  </div>
                </div>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                    <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                    <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                <input type="checkbox" className="checkbox"></input>
                  <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                  <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    <input type="checkbox" className="checkbox"></input>
                  <label>Gyno-urology</label>
                  </MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

            <label for="cars">
              <u>
                <h2>Location</h2>
              </u>
            </label>
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
                <div className="d-flex">
                    <div>
                        <img src={imageface} alt="more" className="imageface mt-4 ms-3"></img>
                    </div>
                    <div className="ms-3 mt-4">
                        <h4>Hannah Miller</h4>
                        <h6>Nurse Practitioner (ARNP)</h6>
                        <p>I’m a registerd nurse that has helped countless number of women navigate a wide variety of their pelvic health issues, including endometriosis, menopause, and separated abs. I also give advice for best methods to actively take care of the pelvic floor. </p>
                    </div>
                </div>
            </div>
            <div className="person">
            <div className="d-flex">
                    <div>
                        <img src={imageface} alt="more" className="imageface mt-4 ms-3"></img>
                    </div>
                    <div className="ms-3 mt-4">
                        <h4>Hannah Miller</h4>
                        <h6>Nurse Practitioner (ARNP)</h6>
                        <p>I’m a registerd nurse that has helped countless number of women navigate a wide variety of their pelvic health issues, including endometriosis, menopause, and separated abs. I also give advice for best methods to actively take care of the pelvic floor. </p>
                    </div>
                </div>
            </div>
            <div className="person">
            <div className="d-flex">
                    <div>
                        <img src={imageface} alt="more" className="imageface mt-4 ms-3"></img>
                    </div>
                    <div className="ms-3 mt-4">
                        <h4>Hannah Miller</h4>
                        <h6>Nurse Practitioner (ARNP)</h6>
                        <p>I’m a registerd nurse that has helped countless number of women navigate a wide variety of their pelvic health issues, including endometriosis, menopause, and separated abs. I also give advice for best methods to actively take care of the pelvic floor. </p>
                    </div>
                </div>
            </div>
            <div className="person"> <div className="d-flex">
                    <div>
                        <img src={imageface} alt="more" className="imageface mt-4 ms-3"></img>
                    </div>
                    <div className="ms-3 mt-4">
                        <h4>Hannah Miller</h4>
                        <h6>Nurse Practitioner (ARNP)</h6>
                        <p>I’m a registerd nurse that has helped countless number of women navigate a wide variety of their pelvic health issues, including endometriosis, menopause, and separated abs. I also give advice for best methods to actively take care of the pelvic floor. </p>
                    </div>
                </div>
              </div>
          </div>



{/* /////////////////////////////////////////////////////////////////////////////// */}



          <div className="resourcesContainer col">
            <h1 className="resourcesText">Additional Resources</h1>{" "}
            <button className="browseButton">Browse More</button>
            <div className="bottomContainer">
              <ul className="purple">
                <li className="purpleBox1 text-center p-3">
                  <h3 className="ARh3 mt-4 text-start">How’s Endometriosis Research Going?</h3>{" "}
                  <p className="ARp text-start">
                    A look at research happening all around the world
                  </p>
                </li>
                <li className="purpleBox1 text-center p-3">
                  <h3 className="ARh3 mt-4 text-start">Physical Therapy for Endometriosis?</h3>{" "}
                  <p className="ARp text-start">
                    An interview with an expert to answer all your questions
                  </p>
                </li>
                <li className="purpleBox3 text-center p-3">
                  <h3 className="ARh3 mt-4 text-start">
                    Why is Endometriosis So Poorly <br/> Understood?
                  </h3>
                  <p className="ARp text-start">
                    A deep dive look into why this is a serious issue
                  </p>
                </li>
                <li className="purpleBox4 text-center p-3">
                  <h3 className="ARh3 mt-4 text-start">Endometriosis Pain: Finding Relief</h3>
                  <p className="ARp text-start">
                    Some tips to care and provide relief for yourself at home{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
