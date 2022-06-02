import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import '../../homepage.css'

export const HomePage = () => {

    return (
        <div>

            <div className="homepage-banner-1 d-flex align-items-center">
                <div className="w-50">
                    <h1 className="px-5 text-end brand-purple text-al fs-58">Elana is your partner<br />in pelvic care</h1>
                    <h5 className="px-5 text-end brand-purple text-ka fs-24 fw-lighter">We connect you to pelvic care, so you<br />feel confident from the inside out.</h5>
                    <div className="px-5 text-end">
                        <MDBBtn className="brand-bg-purple">Learn More</MDBBtn>
                    </div>
                </div>
                <div className="w-50">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/b7d6/239d/fe16a91102133ca4456bb4369cd9d0b0?Expires=1655078400&Signature=Y4R0CpCr39-Tc5npNSVK0ZJVKcgVmZ2k997kLbyYp-TUTA~plCBlmrRs7~DJtz4bcwVA~C~z5wM1CjhbT0TQW5eAL16EfQquMN-jMCQzYY6mRvE81a8ekmFJTKVuINfDAjTlyxm7shaFPjyUytV~5DNuVqv8fmMmO03oIjAtev6VJudYAqpaFlbnRrmWQP3YJ6j-A5MrFInZPZKSu99ic9WkizDKT9hnGpq7Caqqld4aAkL0NlFi3LvxI45OT23dQNhh1Oqc~Y7nsafpuKxQ7Cwf8ZNrsub~UjVJNKKdn1CD5Y6tXxLvFqqq7tg5kq9Kmm0O2-cNU47fXCaAVWQ9rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="women-smiling" />
                </div>
            </div>

            <div className="homepage-banner-2">
                <h1 className="text-al fs-40 pt-5 pb-4 text-center">Pelvic issues are way more common than you think</h1>
                <div className="p-4 d-flex justify-content-evenly">
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center">
                                1 in 6<br />women suffer from<br />painful sex
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center">
                                1 in 3<br />women experience<br />urinary incontinence
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center">
                                50%<br />postmenopausal women<br />have vaginal atrophy
                            </MDBCardText>
                        </MDBCardBody >
                    </MDBCard>
                    <MDBCard className="brand-bg-purple-2 rounded-circle" style={{ maxWidth: '10rem' }}>
                        <MDBCardBody className="d-flex align-items-center">
                            <MDBCardText className="text-center">
                                7 Years<br />average amount of<br />time to be diagnosed
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
                            <MDBCardTitle className="text-center fs-24">Relief from<br/>Painful sex</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Bladder control</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className="p-5 d-flex justify-content-evenly">
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Postpartum care</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Mental health &<br/>Sex coaching</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="border-curve-8" style={{ height: '15rem', width: '15rem' }}>
                        <MDBCardBody className="d-flex align-items-center justify-content-center">
                            <MDBCardTitle className="text-center fs-24">Perimenopause</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>

        </div>
    )

}