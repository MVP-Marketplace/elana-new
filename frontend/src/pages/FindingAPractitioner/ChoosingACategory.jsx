import React from "react";
import { MDBCol } from 'mdb-react-ui-kit';
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


export function ChoosingACategory() {

    return (
        <div className="">
        <div className="p-4 iconback"><i className="fas fa-angle-left"></i><span className="p-2">back</span></div>
       
        <div className="text-center row">
            <h2 className="titlepractitioner col-sm-12 text-center">Browse Practitioner Categories</h2>
            <p className="textpractitioner col-sm-12">Choose a category from below that best matches your current symptoms and needs. <br />
                This will assist you in finding a provider who can help you.  </p>
        </div>
        


        <div className="purplecards d-flex align-items-center justify-content-center mb-5">
            {/* fisrt card here */}
            <div class="d-flex align-items-center justify-content-center row">
                <MDBCol>

                    <div className="purpleboxes d-flex col-sm-12">
                        <img src={image1} alt="more"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Bladder & Bowel Incontinence</h6>
                            <p className="paragraphbox">Accidental leakage of <br /> bodily fluids and waste</p>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol>
                    <div className="purpleboxes d-flex col-sm-12">
                        <img src={Categories} alt="try"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Bladder Pain</h6>
                            <p className="paragraphbox">Pain or pressure in the <br />lower abdomen area and bladder</p>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol>
                    <div className="purpleboxes d-flex col-sm-12">
                        <img src={image2} alt="imagetry"></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Constipation</h6>
                            <p className="paragraphbox">Straining pain during <br /> bowel movements </p>
                        </div>
                    </div>
                </MDBCol>
            </div>

            {/* /////////////////// */}

            <div class="d-flex align-items-center justify-content-center row">
                <MDBCol>

                    <div className="purpleboxes d-flex col-sm">
                        <img src={image3} alt=""></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Endometriosis</h6>
                            <p className="paragraphbox">Pain that occurs especially<br /> during menstrual periods</p>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image4} alt=""></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Menopause & Perimenopause</h6>
                            <p className="paragraphbox">Irregular or pause of <br />  menstrual cycles </p>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol>

                    <div className="purpleboxes d-flex col-sm">
                        <img src={image5} alt=""></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Painful Sex</h6>
                            <p className="paragraphbox">Recurrent genital pain that<br /> occurs just before, during, or after sex  </p>
                        </div>
                    </div>
                </MDBCol>
            </div>

            {/* /////////////////// */}

            <div class="d-flex align-items-center justify-content-center row">
                <MDBCol>

                    <div className="purpleboxes d-flex col-sm">
                        <img src={image6} alt=""></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Pelvic Organ Prolapse</h6>
                            <p className="paragraphbox">Drooping of pelvic organs <br /> such as  the bladder, uterus, vagina, etc. </p>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol>
                    <div className="purpleboxes d-flex col-sm">
                        <img src={image7} alt=""></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Postpartum <br /> Recovery</h6>
                            <p className="paragraphbox">Recovery period after<br /> pregnancy/childbirth </p>
                        </div>
                    </div>

                </MDBCol>
                <MDBCol>

                    <div className="purpleboxes d-flex col-sm">
                        <img src={image8} alt=""></img>
                        <div className="d-block information">
                            <h6 className="titlebox">Proactive Pelvic <br /> Care</h6>
                            <p className="paragraphbox">Methods to actively take <br /> care of your pelvic health </p>
                        </div>
                    </div>
                </MDBCol>
            </div>

        </div>
    </div>
    )

}