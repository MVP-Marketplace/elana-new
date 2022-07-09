import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Logo from "../img/LogoName.png";
import "../index.css";
import {logout, reset} from "../features/auth/authSlice"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import arrow from "../img/Link.png"
// import  arrow  from "../../src/img/link.png"

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const {user} = useSelector((state)=> state.auth)





  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
}


  return (
    <MDBNavbar expand="lg" className="d-flex navWrapper py-4 border-bottom">
      <MDBContainer fluid>

        <Link to="/">
          <MDBNavbarBrand>
            <img src={Logo} className="logo" alt="Elana Logo" />
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false} >
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/IndividualPage" className="link fix">
                  <div className="responsive-grey">
                  <p onClick={() => setShowNav(!showNav)} className="m-0">Individuals</p>
                  <img src={arrow} className="icon-responsive"></img>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="">
                <Link to="/PractitionerPage" className="link fix">
                <div className="responsive-grey">
                  <p onClick={() => setShowNav(!showNav)} className="m-0">Practitioner</p>
                  <img src={arrow} className="icon-responsive"></img>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/about" className="link fix">
                <div className="responsive-grey">
                  <p onClick={() => setShowNav(!showNav)} className="m-0">About</p>
                  <img src={arrow} className="icon-responsive"></img>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/choosingACategory" className="link fix">
                <div className="responsive-grey">
                  <p onClick={() => setShowNav(!showNav)} className="m-0">Browse</p>
                  <img src={arrow} className="icon-responsive"></img>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="move-r">
              <div className="responsive-grey margin-top-responsive ">
                <a
                  className="link2 fix"
                  href="https://www.elana.health/blog"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <p onClick={() => setShowNav(!showNav)} className="m-0">Blog</p>
                </a>
                <img src={arrow} className="icon-responsive"></img>
                  </div>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="move-r">
              <div className="responsive-grey margin-top-responsive">
                <a
                  className="link2 d-flex align-items-center fix"
                  href="https://www.elana.health/post/what-is-pelvic-wellness-and-why-does-it-matter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p onClick={() => setShowNav(!showNav)} className="m-0">What is pelvic health?</p>
                </a>
                <img src={arrow} className="icon-responsive"></img>
                  </div>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/practitionerSignUp" className="link fix">
                <div className="responsive-grey">
                  <p onClick={() => setShowNav(!showNav)} className="m-0">Join</p>
                  <img src={arrow} className="icon-responsive"></img>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="last-nav-item">
              <MDBNavbarLink>
                <Link to="/practitionerLogin" className="link fix">
                <div className="responsive-grey">
                {user ? <p onClick={() => {
                    setShowNav(!showNav);
                    onLogout()
                  }}>Logout</p>: <p onClick={() => setShowNav(!showNav)} className="m-0">Login</p>
                  }
                  <img src={arrow} className="icon-responsive"></img>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
};


