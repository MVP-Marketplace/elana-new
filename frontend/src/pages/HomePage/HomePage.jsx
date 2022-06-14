import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import '../../homepage.css'
import { Link } from "react-router-dom";

export const HomePage = () => {

    return (
        <div>

            <div className="homepage-banner-1 d-flex align-items-center">
                <div className="w-50">
                    <h1 className="px-5 text-end brand-purple text-al fs-58">Elana is your partner<br />in pelvic care</h1>
                    <h5 className="px-5 text-end brand-purple text-ka fs-24 fw-lighter">We connect you to pelvic care options, so you<br />feel confident from the inside out.</h5>
                    <div className="px-5 text-end">
                    <Link to='/IndividualPage' className="link"><MDBBtn className="brand-bg-purple border-0 mx-2 w-50">LEARN MORE</MDBBtn></Link>
                    </div>
                </div>
                <div className="w-50">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/b7d6/239d/fe16a91102133ca4456bb4369cd9d0b0?Expires=1655078400&Signature=Y4R0CpCr39-Tc5npNSVK0ZJVKcgVmZ2k997kLbyYp-TUTA~plCBlmrRs7~DJtz4bcwVA~C~z5wM1CjhbT0TQW5eAL16EfQquMN-jMCQzYY6mRvE81a8ekmFJTKVuINfDAjTlyxm7shaFPjyUytV~5DNuVqv8fmMmO03oIjAtev6VJudYAqpaFlbnRrmWQP3YJ6j-A5MrFInZPZKSu99ic9WkizDKT9hnGpq7Caqqld4aAkL0NlFi3LvxI45OT23dQNhh1Oqc~Y7nsafpuKxQ7Cwf8ZNrsub~UjVJNKKdn1CD5Y6tXxLvFqqq7tg5kq9Kmm0O2-cNU47fXCaAVWQ9rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="women-smiling" />
                </div>
            </div>

            <div className="homepage-banner-2">
                <h1 className="text-al fs-40 pt-5 pb-4 text-center">Pelvic issues are way more common than you think</h1>
                <div className="p-4 d-flex justify-content-evenly">
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center text-al ">
                                <span className="fs-32 text-dark">1 in 6</span><br /><span className="fs-16 text-dark">women suffer from<br />painful sex</span>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center text-al">
                                <span className="fs-32 text-dark">1 in 3</span><br /><span className="fs-16 text-dark">women experience<br />urinary incontinence</span>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center text-al">
                                <span className="fs-32 text-dark">50%</span><br /><span className="fs-16 text-dark">postmenopausal women<br />have vaginal atrophy</span>
                            </MDBCardText>
                        </MDBCardBody >
                    </MDBCard>
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center text-al">
                                <span className="fs-32 text-dark">7 Years</span><br /><span className="fs-16 text-dark">average amount of<br />time to be diagnosed</span>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <h3 className="pt-4 pb-5 text-center fs-32 text-al">Pain is never normal. Many women suffer in silence.</h3>
            </div>

            <div className="homepage-banner-3">
                <h1 className="text-center text-al fs-40 pt-5">Embrace your Pelvic Power</h1>
                <h3 className="text-center text-al fs-24 p-3 fw-lighter">Elana makes it easy to find the right treatment or simply optimise your pelvic health.<br />Your partner in pelvic care.</h3>
                <div className="p-5 d-flex justify-content-evenly">
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Optimise my<br/>Pelvic health</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Relief from<br />Painful sex</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Bladder control</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="pt-5 px-5 d-flex justify-content-evenly">
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Postpartum care</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Mental health &<br />Sex coaching</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Perimenopause</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="p-5 d-flex justify-content-center">
                <MDBBtn className='text-center brand-bg-purple px-5 w-50 border-0'>Browse Practicioner Categories</MDBBtn>
                </div>
            </div>

            <div className="homepage-banner-4">
                <h3 className="text-al fs-32 pt-5 pb-4 text-center">Coming soon to ELANA:</h3>
                <div className="pt-4 pb-5 d-flex justify-content-evenly">
                    <MDBCard className="rounded-circle border-purple p-2" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center p-2 brand-purple">
                                Track your<br />Symptoms
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="rounded-circle border-purple p-2" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center p-2 brand-purple">
                                Shopping for<br />Pelvic Health
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="rounded-circle border-purple p-2" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center p-2 brand-purple">
                                Telehealth<br />Services
                            </MDBCardText>
                        </MDBCardBody >
                    </MDBCard>
                    <MDBCard className="rounded-circle border-purple p-2" style={{ maxWidth: '10.5rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center p-2 brand-purple">
                                Community<br />Content
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="rounded-circle border-purple" style={{ maxWidth: '14rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center p-2 brand-purple">
                                Educational<br />Resources
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>

            <div className="homepage-banner-5 d-flex align-items-center">
                <div className="w-50">
                    <h1 className="px-5 text-end text-al fs-24">We’d love to hear from you! You can reach our team at:</h1>
                    <h5 className="px-5 text-end text-al fs-32">hello@elana.health</h5>
                </div>
                <div className="w-50 ">
                    <img className="img-fluid h-50 " src="https://static.wixstatic.com/media/8f59bb_69b581d17c8547b39a130bc7fda35f5b~mv2.jpg/v1/crop/x_2067,y_0,w_3057,h_3332/fill/w_394,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Beautiful%20woman%20at%20home%20sitting%20casual%20on%20her%20patio%20relaxing%20and%20enjoying%20leisure%20time%20alo.jpg" alt="women-health" />
                </div>
            </div>

            <div className="homepage-banner-6 p-5">
                <h1 className="px-5 text-center text-al fs-24">Connect with the ELANA community, we’ll only send you the important stuff.</h1>
                <h3 className="px-5 text-center text-al fs-24">Get updates and the latest info on pelvic care delivered to your inbox.</h3>
                <MDBInputGroup className='mx-auto mb-3 w-35 p-4'>
                    <input className='text-ka form-control p-2' placeholder="Enter your email" type='text' />
                    <MDBBtn className="brand-bg-purple p-2">Stay in the know</MDBBtn>
                </MDBInputGroup>
                <h5 className="px-5 text-center text-ka fs-16 fw-lighter">Disclaimer: The information provided through Elana Health website and services is not intended<br/>or implied to be a substitute for professional medical advice, diagnosis or treatment.</h5>

            </div>

        </div>
    )

}