import React from "react";
import {
  MDBContainer,
  MDBNavbar
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Logo from "../img/LogoName.png";
import '../index.css'

export const Navbar = () => {

  return (
    <MDBNavbar  className="d-flex navWrapper">
      <MDBContainer fluid>
        <Link to="/"><img src={Logo} className="logo" alt="Elana Logo" /></Link>
        <form className='d-flex w-auto form nav'>
            <Link to='/IndividualPage' className="link"><p>Individuals</p></Link>
            <Link to='/PractitionerPage' className="link"><p>Practitioner</p></Link>
            <Link to='/aboutPage' className="link"><p>About</p></Link>

            <Link to='/' className="link"><p>Browse</p></Link>
            <a className="link" href="https://www.elana.health/blog" target="_blank" rel="noreferrer"><p>Blog</p></a>
            <a className="link" href="https://www.elana.health/post/what-is-pelvic-wellness-and-why-does-it-matter" target="_blank" rel="noreferrer"><p>What is pelvic health?</p></a>

            <Link to='/practitionerSignUp' className="link"><p>Join</p></Link>
            <Link to='/practitionerLogin' className="link"><p>Login</p></Link>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}