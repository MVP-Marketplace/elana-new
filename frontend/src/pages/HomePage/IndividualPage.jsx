import React from "react";
import Image from "../../img/Image.png";
import "../../index.css";
import { Link } from "react-router-dom";

export function IndividualPage() {
  return (
    <div className="">
      <div className="bgpurple">
        <div className="intro row d-grid">
          <h1 className="p-4 col-sm">We’re so glad you’re here. </h1>
          <h4 className="introtitle p-0 col-sm p-3">
            Elana is changing a generation of women’s health, putting you in
            control <br />
            of managing your pelvic health, how, and when, it suits you.
          </h4>
        </div>
      </div>
      <div className="d-flex row">
        <div className="col-sm-12 col-md-6 p-0">
          <img src={Image} className="w-100" alt=""></img>
        </div>
        <div className="col-sm-12 col-md-6 pl-5 p-4">
        <div className="ms-5 mt-2">
          <h3 className="title-1 mb-3 text-al center-text-responsive">Health providers in Elana include:</h3>

          <ul type="none" className="list col-sm p-0">
            <li className="fs-20 text-ka fw-lighter">Yoga Instructors</li>
            <li className="fs-20 text-ka fw-lighter">Pilates Instructors</li>
            <li className="fs-20 text-ka fw-lighter">Physical Therapy</li>
            <li className="fs-20 text-ka fw-lighter">Pain Management</li>
            <li className="fs-20 text-ka fw-lighter">Health Coach</li>
            <li className="fs-20 text-ka fw-lighter">Gynecologist</li>
            <li className="fs-20 text-ka fw-lighter">and more!</li>
          </ul>
            <div className="center-div-button">
            <Link to="/ChoosingACategory" className="link-individual">
              <button className="buttonmainpageindividual col-sm blue-hover mt-2">
                BROWSE PRACTITIONERS
              </button>
            </Link>
              </div>
            </div>
        </div>
      </div>
      <div className="bggrey row">
        <div className="text-center p-3 title3 ">
          <h4 className="pt-4 col-sm title2">
            Stay in the know with our newsletter.
          </h4>
          <h4 className="col-sm title2">
            Get updates and the latest on pelvic care delivered to your inbox.
          </h4>
        </div>
        <div className="input-group p-0 d-flex justify-content-center">
          <div className="active-purple-4 mb-2 d-flex">
            <div className="input-group md-form form-sm form-2 pl-0 pb-2">
              <input
                className="form-control inputindividual"
                type="text"
                placeholder="Enter your email"
                aria-label="Search"
              />
              <div className="input-group-append">
                <span className="" id="basic-text1">
                  <button className="buttonmainpage">Stay in the know</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
