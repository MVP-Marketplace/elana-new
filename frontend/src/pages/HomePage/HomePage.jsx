import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import '../../homepage.css'

export const HomePage = () => {

    return (
        <div>

            <div className="homepage-banner-1 d-flex align-items-center">
                <div className="w-50">
                    <h1 className="px-5 text-end brand-purple text-al fs-58">Elana is your partner<br />in pelvic care</h1>
                    <h5 className="px-5 text-end brand-purple text-ka fs-24 fw-lighter">We connect you to pelvic care, so you<br />feel confident from the inside out.</h5>
                    <div className="px-5 text-end">
                        <MDBBtn className="brand-bg-purple border-0 mx-2 w-50">LEARN MORE</MDBBtn>
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
                <h1 className="text-center text-al fs-40 pt-5">Take control of your pelvic wellbeing</h1>
                <h3 className="text-center text-al fs-24 p-3 fw-lighter">Issues or not - finding the right care for your pelvic wellness isn’t always easy.<br />Elana works with you to prevent or help treat pelvic challenges you may be facing. </h3>
                <div className="p-5 d-flex justify-content-evenly">
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Pelvic Care</MDBCardTitle>
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
                <h3 className="text-al fs-23 pt-5 pb-4 text-center">Features coming soon to Elana:</h3>
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
                    <h1 className="px-5 text-end text-al fs-24">We’d love to hear from you! Send us your comments at:</h1>
                    <h5 className="px-5 text-end text-al fs-32">hello@elana.health</h5>
                </div>
                <div className="w-50">
                    <img className="img-fluid h-50" src="https://s3-alpha-sig.figma.com/img/1da9/d4c1/5e11fd13ad6ce83f40f464a0fc9f51da?Expires=1655078400&Signature=IrGz0ai7uxYHoNkNrdbiYjcyDtBnHFLstEzP92sVL6iHZ7xWNqZw~~dQ5vDRE2Kc7t6l3m8CsorG-3799m5kePLVtH-e8Ioa1X4TuhzY7vpX9WDyqYEjeJeBb~7KX4KRCHqT1KKyLKUtcjmPYcE12BGLW7W99uY~pGk9VSybhne5ybnDFHUndnfYwTwgsBfw8x9QnKKBtOId42E4HG6QvdA50ryV7ESqGrGjjUJkFOq7kEp6PeWOMCoqhHYzZrecX0EKgJuDIx6glfbQM6VZhBGhIJ0BVJ0pfU9omDnfy~P~INbnX8CVjxgtakKzzfxdMLXiuUOVnG6vbMdwRZimcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="women-health" />
                </div>
            </div>

            <div className="homepage-banner-6 p-5">
                <h1 className="px-5 text-center text-al fs-24">Stay in the know with our newsletter.</h1>
                <h3 className="px-5 text-center text-al fs-24">Get updates and the latest on pelvic care delivered to your inbox.</h3>
                <MDBInputGroup className='mx-auto mb-3 w-35 p-4'>
                    <input className='text-ka form-control p-2' placeholder="Enter your email" type='text' />
                    <MDBBtn className="brand-bg-purple p-2">Stay in the know</MDBBtn>
                </MDBInputGroup>
                <h5 className="px-5 text-center text-ka fs-16 fw-lighter">Disclaimer: The information provided through Elana Health website and services is not intended<br/>or implied to be a substitute for professional medical advice, diagnosis or treatment.</h5>

            </div>

        </div>
    )

}