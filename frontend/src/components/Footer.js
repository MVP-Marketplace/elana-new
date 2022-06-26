import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
import {
	MDBFooter,
	MDBContainer,
	MDBCol,
	MDBRow
} from 'mdb-react-ui-kit';

export const Footer = () => {
	return (
		<MDBFooter className="footer-ori justify-content-between">
			<MDBContainer className=''>
				<MDBRow className="footer1" >
					<MDBCol lg='9' md='9' className='footerlinks'>
						<div className="d-flex footer-res" sm=''>
							<div className="footerlink"><p>Home</p></div>
							<div className="footerlink contact-res"><p>Contact us</p></div>
						</div>
						<div className="d-flex footer-res" sm=''>
							<div className="footerlink"><p>Login</p></div>
							<div className="footerlink contact-res"><p>About</p></div>
						</div>
						<div className="d-flex footer-res" sm=''>
							<div className="footerlink"><Link to="/terms" className="text-decoration-none text-white"><p>Terms</p></Link></div>
							<div className="footerlink contact-res"><Link to="/privacyPolicy" className="text-decoration-none text-white"><p>Privacy Policy</p></Link></div>
						</div>

						 <div className="footerlink"><Link to="/newPractitionerProfile" className="text-decoration-none text-white"><p>newprofile</p></Link></div>
			{/* <div className="footerlink"><Link to="/practitionerListing" className="text-decoration-none text-white"><p>listening</p></Link></div>  */}
					</MDBCol>

					<MDBCol lg='3' md='3' sm='2' className=''>
						<div className="">
							<div className="mb-1 icon d-flex">
								<div className="me-3"><a href="https://www.facebook.com/helloelana/"><i className="fab fa-facebook-square"/></a></div>
								<div className="me-3"><i className="fab fa-linkedin"/></div>
								<div className="me-3"><i className="fab fa-pinterest"/></div>
								<div className="me-3"><i className="fab fa-instagram"/></div>
							</div>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
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