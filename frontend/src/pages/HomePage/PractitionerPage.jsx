import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import '../../practitionerpage.css'

export const PractitionerPage = () => {

    return (
        <div>

            {/* Practitioner Banner 1 */}
            <div className="practitioner-page-banner-1 p-5">
                <h1 className="text-center text-al fs-48 fw-bolder">Grow your Practice with Elana</h1>
                <h3 className="text-center text-al fs-40 fw-bolder">Together we can transform women's health</h3>
                <div className="d-flex justify-content-center p-3">
                    <button className="brand-bg-purple text-white text-ka px-5 py-3 border border-0 border-radius-8">REGISTER NOW</button>
                </div>
            </div>

            {/* Practitioner Banner 2 */}
            <div className="practitioner-page-banner-2 p-5">
                <h1 className="text-center text-al fs-32 fw-bolder">Elana can help you build a thriving practice</h1>
                <h3 className="text-center text-al fs-24 fw-bolder">We are on a mission to make it easier for practitioners to reach women who want to<br/>take control of their pelvic health.  We are actively building our network.</h3>
                <div className="d-flex justify-content-evenly p-3">
                    <MDBCard className="border border-0 border-radius-9 brand-bg-purple-2" style={{ height: '14rem', width: '22rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center">
                                <p className="fs-24 text-al">Reach more patients</p>
                                <span className="fs-16 text-dark text-ka">Fill up your patient load on your<br/>terms with telehealth and in-<br/>person appointments.</span>
                            </MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border border-0 border-radius-9 brand-bg-purple-2" style={{ height: '14rem', width: '22rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center">
                                <p className="fs-24 text-al">Connect with Practitioners</p>
                                <span className="fs-16 text-dark text-ka">Collaborate with the other practitioners<br/>and the Elana team to help us improve<br/>women’s health. </span>
                            </MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border border-0 border-radius-9 brand-bg-purple-2" style={{ height: '14rem', width: '22rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center">
                                <p className="fs-24 text-al">Generate Awareness</p>
                                <span className="fs-16 text-dark text-ka">Reach more patients by offering<br/>courses and content through<br/>Elana’s platform.</span>
                            </MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>

            {/* Practitioner Banner 3 */}
            <div className="practitioner-page-banner-3">
                <div className="d-flex">
                    <div className="w-50 p-5">
                        <div className="d-flex justify-content-center p-2">
                            <h1 className=" text-al fs-32">Are you a practitioner passionate about<br/>women's pelvic health and wellness?</h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h3 className=" text-al fs-32">Joining Elana is simple and free.</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                            <ul className="me-8">
                                <li className="text-ka fs-20 p-2">Fill out the online application</li>
                                <li className="text-ka fs-20 p-2">Provide us with your basic information</li>
                                <li className="text-ka fs-20 p-2">We will be in touch!</li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button className="brand-bg-purple text-white text-ka px-5 py-3 border border-0 border-radius-8">REGISTER NOW</button>
                        </div>
                    </div>
                    <div className="w-50">
                        <img className="img-fit" src="https://s3-alpha-sig.figma.com/img/126b/c054/7cf6206a301f15fcdcf3a75c8d5bb89c?Expires=1655683200&Signature=QbzOZF-H3dO-RRuvJH-Jpgg~qBxSPJMChedq9eF9Bbgy-vORbTuPYJqO2UBZS88CI6blR5oYuy-5MS~IM0WWv2~wIyAvR7CoMo~tD61tGrkxojaVj0QJf4V5ql6hbXdMaxg8EKpSzPXHfRTf7kq3SKl3zSF17BIWkNAEbuFOzORMiquKqAshYh-fgQP~JnySjvRmJp~SkPhAH34eefWTzBpzp5qEHOr-WO-NNd3pGTyDmUzN1fmCGaJ3WCwRDZYZjk9q-aRt-tezgl7pXMhrXxdnKwiKuhBmB9fw~VltgqCm4Ln8Xa9kJPaLLcnipPQRcqSwQhfofJauiS6lc4SqVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="female-practitioner" />
                    </div>
                </div>
            </div>
        </div>
    )

}