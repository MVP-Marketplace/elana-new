import React from "react";

export function AboutPage() {

    return (
        <div className="container">
            <div className="missionContainer">
                <div className="c">
                    <h1 className="headerText">Our Mission</h1>
                </div>
                <div>
                    <h2 className="missionText">Elana was launched to support, and be part of, a generational change in women’s health, transforming the conversation around pelvic care through empowerment, accessibility, and education.</h2>
                </div>
            </div>
            <div className="OurStoryContainer">

                <h1 className="headerText2">Our Story</h1>

                <h3 className="ourStoryText">Here at Elana, pelvic care isn’t just business, it’s personal.​​</h3>

                <div>
                    <p className="ourStoryText2">
                        Managing our own health at various chapters in our lives, we have seen and experienced first-hand some of the challenges when it comes to talking about intimate issues. Finding answers and feeling comfortable to talk openly about health problems can be hard even with people you trust. <p>Our journey started as two women, different countries, different ages, sharing our experiences of c-sections, postpartum complications, to the signs of perimenopause. From battling with extreme pelvic pain and complications, to feeling unprepared for the changes in a woman's health as we age, much of which, down to the lack of easily accessible information and knowing where to go for the right support.</p> <p> Our journeys shouldn’t have been so hard, but it was, and is for so many women globally - on average it takes 7 years for pelvic issues to be properly diagnosed. Having experienced first hand how life changing issues with the pelvic region can have on you, your mental health and relationships, we knew we had to be part of a lasting change.</p>
                    </p>
                </div>

            </div>
            <div className="meetTheTeamContainer">

                <h1 className="meetTheTeamHeader">Meet the Team</h1>

                <ul className="teamPics">
                    <li><img className="pic1" alt="" src="https://s3-alpha-sig.figma.com/img/2485/509b/6f18c7fbbc04d535f46b478b8237e167?Expires=1653868800&Signature=RdcvAui1V-9p1~yOfLRDmiGEm3GIxD7IhbbAtm9IQjgV-IPxlP9psC76ClU8s0R2O5-Xg~D6kahi9yZ~I7J6hiEHzdz-WM8YmGmdaeJXepR5yXr-fR33r2Gy0rb0VYLfR1tYMtdfPvQOcWpYdvfci2rtoX6WyfrWlgM8qnLngTW~KCWoCMURJniYPQDOqdEpVAcsI8uoq4vL1eLUmLCN3qnI0xLvxNmDfhIZSY~8EyqhvaS-~6meI-zu1kN~L6KOuss0mZBvwzn9vvZti5uLQUPCxN5TGM9H9AJpqwqPWT2spmp9eSc7GxyGA4EIg--ovS6RZvnhbv3OgW38ELU4Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" /><p className="names">Helen Grimshaw</p><p className="titles">Co-founder</p></li>
                    <li><img className="pic2" alt="" src="https://s3-alpha-sig.figma.com/img/0f3d/060c/bb771404488bd0ba0c55cc28bb02e3b3?Expires=1653868800&Signature=gtdX7pDxOFVcf5ocepWgzs8F-g2Ivd0m7WFgPuLWrerp1j-UmRtFq3FU3lDC3qesD-AdPj8wdHqxnm~iw2CMiFywKDygObLCUQVewSdkbLPIEFe4H0uu2DI6FIJoOyMHNuuA0Ne-e2TqZ5TYjlbGdVvdX1SdFufGHXIPdxUfD03GeCMuDS7p7lurWFXElBo38LLHj8ZouAFsDD-0lcvKrLjOc15Nz6TqPqtth1A5-9CDEFQ3f9MpCI7V15YNc4JnYUE4Bef88qssd3UBPmLSAQcpN6Pb6Xu02ysT1ytjLvKTIC4ng8N1esIll-nDYLzBVq2BwamDEauBZRNeyNTN9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" /><p className="names">Kerstin Recker</p><p className="titles">Advisor, Co-founder</p></li>
                    <li><img className="pic3" alt="" src="https://s3-alpha-sig.figma.com/img/908a/23bf/156209ba146a0159c91b468b11953c8e?Expires=1653868800&Signature=hdpLRD4prlP7HSYy~1ieDpqrYtre2o06lJ2ySZNbOnU86e9Hap0cBS7JbtrtzL~ifWuTcEs7e3mm3bo9uQx9fhY~V9PI6H4X4Boyph2MAB3w2tIzXGv7Tro~-FgVnyTDcsYtX~hJM4U1vipSid2ek3EWyN4csNrR9r9cHnDqVvMTM7mAFLGrlkBHnpRQZSckm8~WNAv4E-g0RqUG5YhOk4RNjugbbn3DsQsAA9xamQ-uGI7QByafEVXmLn2uDMraJdXa3-ei5YUtL3Lbmmw9FpcU-y1wnDt6Wr1SkU94M7P~dRgYaoBFoKaQu3~ynN2eW9vvsR77M9pxPpnqgaL4UA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" /><p className="names"> Hannah Lawrence</p><p className="titles">Marketing</p></li>
                    <li><img className="pic4" alt="" src="https://s3-alpha-sig.figma.com/img/9ddf/8cb2/d677922d218786b1578cabeef93da20a?Expires=1653868800&Signature=OJCrz1hb8Jv3~R12FCb10tcMJ8KiTY0RXO5318XVvfEBEeY1NFds3DbCJxaieRMHTN2oYbL1gAnQKJJqRdIyIl9PvYXwa2Y9ctbEj~t73U9MRZyd~LFKtRkNLnpJCcCt~Nee9jmL0SyoD-hF-O2jmY2UcpldgiCk9UceglH~bIfGyUyIWQVfFbGcscbbDoKgUA9a6Axy9hdCLDrPs4aMB0L-I1kqVvQy078rQocrReau88nrsIwcRby9p~ZXnJqHtUnW-1ZSSuwjDFnuZsQM8rbvn46OJof9Vpx~IsRiMrs14Nk1NR8D9u2pKPsCokweqlbSYL-hd6Kk3NuUU3IwWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" /><p className="names">Becky Graves</p><p className="titles">Operations</p></li>
                </ul>
            </div>
        </div>
    )

}