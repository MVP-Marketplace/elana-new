import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import '../../homepage.css'

export const HomePage = () => {

    return (
        <div>
           <div className="homepage-banner-1 d-flex align-items-center">
                <div className="w-50">
                    <h1 className="p-3 brand-purple text-al fs-58">Elana is your partner<br/>in pelvic care</h1>
                    <h5 className="p-3 brand-purple text-ka fs-24 fw-lighter">We connect you to pelvic carea, so you<br/>feel confident from the inside out.</h5>
                    <div className="px-3">
                        <MDBBtn className="px-6 py-1 brand-bg-purple">LEARN MORE</MDBBtn>
                    </div>
                </div>
                <div className="w-50">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/b7d6/239d/fe16a91102133ca4456bb4369cd9d0b0?Expires=1655078400&Signature=Y4R0CpCr39-Tc5npNSVK0ZJVKcgVmZ2k997kLbyYp-TUTA~plCBlmrRs7~DJtz4bcwVA~C~z5wM1CjhbT0TQW5eAL16EfQquMN-jMCQzYY6mRvE81a8ekmFJTKVuINfDAjTlyxm7shaFPjyUytV~5DNuVqv8fmMmO03oIjAtev6VJudYAqpaFlbnRrmWQP3YJ6j-A5MrFInZPZKSu99ic9WkizDKT9hnGpq7Caqqld4aAkL0NlFi3LvxI45OT23dQNhh1Oqc~Y7nsafpuKxQ7Cwf8ZNrsub~UjVJNKKdn1CD5Y6tXxLvFqqq7tg5kq9Kmm0O2-cNU47fXCaAVWQ9rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="women smiling" />
                </div>
           </div>
        </div>
    )

}