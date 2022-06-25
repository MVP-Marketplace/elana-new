import React from 'react'
import '../../practitionerlisting.css'
import {
    MDBRow,
    MDBCol,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownLink,
  } from "mdb-react-ui-kit";

export const PractitionerListingNew = () => {
  return (
    <div>
        <div className="listing-banner-1">
            <h1 className="text-center-mobile brand-purple text-al fs-48-24">Endometriosis</h1>
            <p className="fs-16-12">Endometriosis (en-doe-me-tree-O-sis) is an often painful disorder in which tissue similar to the tissue that normally lines the inside of your uterus (the endometrium) grows outside your uterus. Endometriosis commonly involves your ovaries, fallopian tubes and the tissue lining your pelvis.</p>
            <p className="fs-16-12">Common signs and symptoms of endometriosis include painful periods (dysmenorrhea), pain with intercourse, pain with bowel movements or urination, excessive bleeding , and infertility. Other signs and symptoms may include fatigue, diarrhea, constipation, bloating or nausea, especially during menstrual periods.</p>
        </div>
        <div className="listing-banner-2">
            <MDBRow>
                <MDBCol md="3">
                    <h1 className="text-al fs-32">Filter By</h1>

                    {/* FIRST FILTER */}
                    <MDBDropdown group className="shadow-0 w-100">
                        <MDBDropdownToggle color="light" className="border-top border-bottom py-3">Practitioner Type</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Action</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>

                    {/* SECOND FILTER */}
                    <MDBDropdown group className="shadow-0 w-100">
                        <MDBDropdownToggle color="light" className="border-top border-bottom py-3">Appointment Type</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Action</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>

                    {/* THIRD FILTER */}
                    <MDBDropdown group className="shadow-0 w-100">
                        <MDBDropdownToggle color="light" className="border-top border-bottom py-3">Location</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Action</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBCol>
                <MDBCol md="9">
                    <div className="brand-bg-purple-2 d-flex border-9 mb-3">
                            <img className="p-3 img-circle" src="http://cdn.onlinewebfonts.com/svg/img_569204.png" alt="practitioner"/>
                        <div>
                            <p>Hannah Miller</p>
                            <p>Nurse Practitioner (ARNP)</p>
                            <p>I’m a registerd nurse that has helped countless number of women navigate a wide variety of their pelvic health issues, including endometriosis, menopause, and separated abs. I also give advice for best methods to actively take care of the pelvic floor.</p>
                        </div>
                    </div>
                    <div className="brand-bg-purple-2 d-flex border-9 mb-3">
                            <img className="p-3 img-circle" src="http://cdn.onlinewebfonts.com/svg/img_569204.png" alt="practitioner"/>
                        <div>
                            <p>Hannah Miller</p>
                            <p>Nurse Practitioner (ARNP)</p>
                            <p>I’m a registerd nurse that has helped countless number of women navigate a wide variety of their pelvic health issues, including endometriosis, menopause, and separated abs. I also give advice for best methods to actively take care of the pelvic floor.</p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
   
    </div>
  )
}
