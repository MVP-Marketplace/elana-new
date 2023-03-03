import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
import {
	MDBFooter,
	MDBCol,
	MDBRow
} from 'mdb-react-ui-kit';

export const Footer = () => {
	return (
		<MDBFooter className="footer-ori p-3">
			{/* <MDBContainer className='m-0 '> */}
				<MDBRow className="d-flex justify-content-between px-5" >
					<MDBCol lg='9' md='9' className='footerlinks '>
						<div className="d-flex footer-res media-left" sm=''>
							<div className="footerlink "><Link to="/individualPage" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Induvidual</p></Link></div>
							<div className="footerlink media-right"><Link to="/" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Home</p></Link></div>
						</div>
						<div className="d-flex footer-res media-left" sm=''>
							<div className="footerlink "><Link to="/practitionerPage" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Practitioner</p></Link></div>
							<div className="footerlink media-right1"><Link to="/about" className="text-decoration-none text-white m-0 p-0"><p className="m-0">About</p></Link></div>
						</div>
						<div className="d-flex footer-res media-left" sm=''>
							<div className="footerlink"><Link to="/choosingACategory" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Browser</p></Link></div>
							<div className="footerlink media-right3"><Link to="/terms" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Terms</p></Link></div>
						</div>
						<div className="d-flex footer-res media-left" sm=''>
							<div className="footerlink"><Link to="/practitionerLogin" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Login</p></Link></div>
							<div className="footerlink media-right4"><Link to="/privacyPolicy" className="text-decoration-none text-white m-0 p-0"><p className="m-0">Privacy Policy</p></Link></div>
						</div>

			
					</MDBCol>

					<MDBCol lg='3' md='3' sm='2' className='d-flex icon'>
							{/* <div className="mb-1 icon pt-2"> */}
								<div className="me-3"><a className="a-link-footer" href="https://www.facebook.com/helloelana/"><i className="fab fa-facebook-square"/></a></div>
								<div className="me-3"><a className="a-link-footer" href="https://www.linkedin.com/company/elanahealth/"><i className="fab fa-linkedin"/></a></div>
								<div className="me-3"><a className="a-link-footer" href="https://www.pinterest.com/elanahealth/"><i className="fab fa-pinterest"/></a></div>
								<div className="me-3"><a className="a-link-footer" href="https://www.instagram.com/elana.health/"><i className="fab fa-instagram"/></a></div>
							{/* </div> */}
					</MDBCol>
				</MDBRow>
			{/* </MDBContainer> */}
		</MDBFooter>

	)
}
// <div className="footer  mt-auto py-3 d-flex justify-content-between">
	// 	<div className="footerlinks">

	// 		<div className="footerlink"><p>Home</p></div>
	// 		<div className="footerlink"><p>Contact us</p></div>
	// 		<div className="footerlink"><p>Login</p></div>
	// 		<div className="footerlink"><p>About</p></div>
	// 		<div className="footerlink"><Link to="/terms" className="text-decoration-none text-white"><p>Terms</p></Link></div>
	// 		<div className="footerlink"><Link to="/privacyPolicy" className="text-decoration-none text-white"><p>Privacy Policy</p></Link></div>
	// 		<div className="footerlink"><Link to="/newPractitionerProfile" className="text-decoration-none text-white"><p>newprofile</p></Link></div>
	// 		<div className="footerlink"><Link to="/practitionerListing" className="text-decoration-none text-white"><p>listening</p></Link></div>
	// 	</div>
	// 			<div className="m-0 pe-3">
	// 				<p className="text-white p-0 m-0">Connect with us</p>
	// 				<div className="icon d-flex">
	// 					<div className="me-3"><i className="fab fa-facebook-square"></i></div>
	// 					<div className="me-3"><i className="fab fa-linkedin"></i></div>
	// 					<div className="me-3"><i className="fab fa-pinterest"></i></div>
	// 					<div className="me-3"><i className="fab fa-instagram"></i></div>
	// 				</div>
	// 			</div>

	// </div>