import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../../index.css'
import Categories from "../../img/Categories.png";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import image4 from "../../img/image4.png";
import image5 from "../../img/image5.png";
import image6 from "../../img/image6.png";
import image7 from "../../img/image7.png";
import image8 from "../../img/image8.png";
import image9 from "../../img/image9.png";
import image10 from "../../img/image10.png";


export function ChoosingACategory() {

    return (
        <div className="">
        {/* <div className="p-4 iconback"><i className="fas fa-angle-left"></i><span className="p-2">back</span></div> */}
       <br/>
        <div className="text-center row">
            <h2 className="titlepractitioner col-sm-12 text-center">Browse Pelvic Health</h2>
            <p className="textpractitioner col-sm-12">Choose a category from below that best matches your current symptoms and needs. <br />
                This will assist you in finding a provider who can help you.  </p>
        </div>
        


        <div className="purplecards d-flex align-items-center justify-content-center center-res mb-5">
            {/* fisrt card here */}
            <MDBRow>
                <MDBCol className="d-flex justify-content-center">

                <Link className="link-categories" to='/practitionerListing/0'>
                    <div className="purpleboxes d-flex col-sm-12">
                        <img src={image1} alt="more"className="icon-responsive2"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Bladder & Bowel Incontinence</h6>
                            <p className="paragraphbox">Accidental leakage of <br /> bodily fluids and waste</p>
                        </div>
                    </div>
                </Link>

                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/1'>
                    <div className="purpleboxes d-flex col-sm-12">
                        <img src={Categories} alt="try"className="icon-responsive2"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Bladder Pain</h6>
                            <p className="paragraphbox">Pain or pressure in the <br />lower abdomen area and bladder</p>
                        </div>
                    </div>
                </Link>

                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/2'>
                    <div className="purpleboxes d-flex col-sm-12">
                        <img src={image2} alt="imagetry"className="icon-responsive2"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Constipation</h6>
                            <p className="paragraphbox">Straining pain during <br /> bowel movements </p>
                        </div>
                    </div>
                </Link>
                </MDBCol>
            </MDBRow>

            {/* /////////////////// */}

            <MDBRow class="d-flex align-items-center justify-content-center row">
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/3'>
                <div className="purpleboxes d-flex col-sm">
                        <img src={image3} alt=""className="icon-responsive2"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Endometriosis</h6>
                            <p className="paragraphbox">Pain that occurs especially<br /> during menstrual periods</p>
                        </div>
                    </div>
                </Link>
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/4'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image4} alt="" className="icon-responsive2"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Menopause & Perimenopause</h6>
                            <p className="paragraphbox">Irregular or pause of <br />  menstrual cycles </p>
                        </div>
                    </div>
                </Link>
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/5'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image5} alt="" className="icon-responsive2"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Painful Sex</h6>
                            <p className="paragraphbox">Recurrent genital pain that<br /> occurs just before, during, or after sex  </p>
                        </div>
                    </div>
                    </Link>
                </MDBCol>
            </MDBRow>

            {/* /////////////////// */}

            <MDBRow class="d-flex align-items-center justify-content-center row">
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/6'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image6} alt="" className="icon-responsive"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Pelvic Organ Prolapse</h6>
                            <p className="paragraphbox">Drooping of pelvic organs <br /> such as  the bladder, uterus, vagina, etc. </p>
                        </div>
                    </div>
                    </Link>
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/7'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image7} alt="" className="icon-responsive"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Postpartum <br /> Recovery</h6>
                            <p className="paragraphbox">Recovery period after<br /> pregnancy/childbirth </p>
                        </div>
                    </div>
                </Link>
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/8'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image8} alt="" className="icon-responsive" ></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Proactive Pelvic <br /> Care</h6>
                            <p className="paragraphbox">Methods to actively take <br /> care of your pelvic health </p>
                        </div>
                    </div>
                </Link>
                </MDBCol>

                
            </MDBRow>
            <MDBRow class="d-flex align-items-center justify-content-center row">
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/9'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image9} alt="" className="icon-responsive"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Separated Abs</h6>
                            <p className="paragraphbox">Condition when abdominal<br />  muscles separate during pregnancy   </p>
                        </div>
                    </div>
                    </Link>
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/10'>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image10} alt="" className="icon-responsive"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Vaginoplasty Prep <br /> & Recovery</h6>
                            <p className="paragraphbox">Prepping and recovering <br /> from the repair of a vagina  </p>
                        </div>
                    </div>
                </Link>
                </MDBCol>
                <MDBCol className="d-flex justify-content-center">
                <Link className="link-categories" to='/practitionerListing/general'>
                    <div className="purpleboxes d-flex col-sm">
                        <div className="d-block information see-all m-responsive">
                            <h2 className="m-0 ">See all</h2>
                        </div>
                    </div>
                </Link>
                </MDBCol>                
            </MDBRow>

        </div>
    </div>
    )

}