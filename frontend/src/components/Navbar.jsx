import React, { useState, useEffect } from "react";
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


  useEffect(()=> {
    if(!user){
      navigate('/practitionerLogin')
    }
  },[])


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
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
                  <div className="responsive-grey" onClick={() => setShowNav(!showNav)} >
                  <p className="m-0">Individuals</p>
                  <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="">
                <Link to="/PractitionerPage" className="link fix">
                <div className="responsive-grey" onClick={() => setShowNav(!showNav)} >
                  <p className="m-0">Practitioner</p>
                  <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/about" className="link fix">
                <div className="responsive-grey" onClick={() => setShowNav(!showNav)}>
                  <p className="m-0">About</p>
                  <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/choosingACategory" className="link fix">
                <div className="responsive-grey" onClick={() => setShowNav(!showNav)}>
                  <p className="m-0">Browse</p>
                  <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="move-r">
              <div className="responsive-grey margin-top-responsive" onClick={() => setShowNav(!showNav)}>
                <a
                  className="link2 fix"
                  href="https://www.elana.health/blog"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <p className="m-0">Blog</p>
                </a>
                <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="move-r">
              <div className="responsive-grey margin-top-responsive" onClick={() => setShowNav(!showNav)}>
                <a
                  className="link2 d-flex align-items-center fix"
                  href="https://www.elana.health/post/what-is-pelvic-wellness-and-why-does-it-matter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="m-0">What is pelvic health?</p>
                </a>
                <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/practitionerSignUp" className="link fix">
                <div className="responsive-grey" onClick={() => setShowNav(!showNav)}>
                  <p className="m-0">Join</p>
                  <img src={arrow} alt="arrow" className="icon-responsive"/>
                  </div>
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="last-nav-item">
              <MDBNavbarLink>
                {/* Need to fix this doesn't make proper sense */}
                <Link to="/practitionerLogin" className="link fix">
                <div className="responsive-grey" onClick={() => setShowNav(!showNav)}>
                {user ? <p onClick={() => {
                    onLogout()
                  }}>Logout</p>: <p className="m-0">Login</p>
                  }
                  <img src={arrow} alt="arrow" className="icon-responsive"/>
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


