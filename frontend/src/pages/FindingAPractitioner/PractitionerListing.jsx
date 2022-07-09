import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import "../../practitionerlisting.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import DownArrow from "../../img/down-arrow.png";
import UpArrow from "../../img/up-arrow.png";
import { getPractitionerUsers, reset } from "../../features/auth/authSlice";

export const PractitionerListing = () => {
  const { practitionerUsers } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const params = useParams();
 
  const [button1, setButton1] = useState(false);
  // const [button2, setButton2] = useState(false);
  // const [button3, setButton3] = useState(false);



  const [filterPractitionerValue, setFilterPractitionerValue] = useState("")
  const [filterAppointmentValue, setFilterAppointmentValue] = useState("")
  const [practitioners, setPractitioners] = useState([])

  console.log(practitionerUsers)

  useEffect(()=> {
    dispatch(getPractitionerUsers())
  },[])

  useEffect(()=> {
    setPractitioners(practitionerUsers)
  },[practitionerUsers])

  // Filter functionality when choosing Category
  useEffect(()=> {
    if(filterPractitionerValue !== "" ){
      let newArray = practitionerUsers.filter((item, index) => item.areaOfSpecialty === filterPractitionerValue )
      setPractitioners(newArray)
    } else {
      setPractitioners(practitionerUsers)
    }
  },[filterPractitionerValue])

  const practitionerTypes = [
    "Gyno-urology",
    "Nurse Practitioner (ARNP)",
    "Nutritionist",
    "OBGYN",
    "Occupational Therapist (OT)",
    "Pain Management Doctor",
    "Pain Management Psychologist",
    "Pelvic Health Physical Therapist",
    "Physical Therapist Assistant (PTA)",
    "Physician (MD)",
    "Pilates Instructor",
    "Sex Coach / Therapist",
    "Women's Health Coach",
    "Women's Health Psychologist",
    "Women's Mental Health Therapist",
    "Yoga Instructor",
  ];
  const appointmentTypes = [
    {
        name: "Bladder & Bowel Incontinence",
        description1: "Bladder and bowel incontinence is the involuntary leakage of urine or stool. Dealing with this embarrassing ailment can get overwhelming at times. You may schedule your days around it, which will inadvertently affect your quality of life.",
        description2: "And because women go through various reproductive changes in life, women are more likely than men to experience incontinence. Pregnancy, childbirth, and menopause weaken the pelvic floor muscles, thus weakening the muscles that hold the bladder and bowel sphincters.",
        description3: "But what is now weak can be strengthened again, and it is best to consult a pelvic health practitioner to help you effectively deal with bladder and bowel incontinence.",
    },
    {
        name: "Bladder Pain",
        description1: "Have you been dealing with a nagging discomfort in your lower belly? The kind that shows up unannounced and does not follow a regular pattern? It may feel like period cramps, but you know it isn't because you just went through the menstrual phase of your menstrual cycle?",
        description2: "You may be dealing with painful bladder syndrome, if this pain is accompanied by the following:",
        infoArray: ["- frequently going to the bathroom", "- the feeling you need to pee right away", "- pressure-like sensation or tenderness in your pelvic region", "- pain in your lower back", "- pain during sex", "- pain relieved after urinating"],
        description4: "Also known as interstitial cystitis, this condition is more common in women than men. Symptoms may flare up and go away on their own. But dealing with these flares of painful bladder syndrome significantly impacts one's quality of life. Yet that does not mean you can't deal with these symptoms and improve your life. There are ways to tackle painful bladder syndrome, and a health practitioner can guide you better. "
    },
    {
        name: "Constipation",
        description1: "For many of us, the day begins with bowel movements, emptying our gut contents to make way for more digestible meals. But what happens when your gut does not embark on this daily run? Does that mean you are constipated?",
        description2: "Constipation can have many causes, women may experience constipation through the varying stages of their reproductive system, as part of PMS to post-partum constipation, a package deal of menopause, or a pelvic floor dysfuntion. Constipation can make the pelvic floor muscles tight, and hard to relax making it hard to poop and causing chronic pelvic pain. However, over-straining from constipation can lead to a weakening of your pelvic floor muscles and subsequently incontinence.",
        description3: "If you are experiencing signs of constipation, don't be the blockage between seeking professional help and a healthier you."
    },
    {
      name: "Endometriosis",
      description1: "Endometriosis is when the uterine lining (endometrium) starts to grow in other places outside of the uterus, such as the ovaries, bladder, or rectum. Endometriosis can affect women of any age and often goes undiagnosed because of its non-specific symptoms.",
      description2: "You may be dealing with endometriosis if you experience the following:",
      infoArray: ["- intense period pain that lasts throughout your cycle, radiating to your lower back and abdomen","- pain during sex", "- painful urination or bowel movements during your periods","- heavy menstrual flow", "- gut symptoms such as nausea, diarrhea, and constipation"],
      description4: "Endometriosis can cause significant pelvic pain causing the muscles to spasm, those with Endometriosis are more likely to develop a pelvic floor disorder as a result. But help is out there to find the right support for you."
    },
    {
      name: "Menopause & Perimenopause",
      description1: "How do you recognize that your body is going through menopause? You may be well aware of the tell-tale sign of menopause, the absence of periods. However, a lack of periods does not represent the inception of menopause. Because before menopause comes perimenopause. Yay!",
      description2: "During perimenopause, your body will start experiencing the effects of fluctuating hormones such as a drop in progesterone which you may notice through a change in sleep patterns, anxiety or aching joints. Lets not forget the declining estrogen levels, which can cause vaginal dryness, atrophy (thinning of the tissues), increased pelvic pain, and pelvic organs to weaken resulting in incontinence.",
      description3: "But it's not all doom and gloom, consulting a women's health specialist and making time for your pelvic health as part of your overall wellbeing can help you manage this next chapter in your life like a pro!"
    },
    {
      name: "Painful Sex",
      description1: "Sex is fun. But the slightest ting of pain will raise some alarm bells and can ruin this pleasurable experience for all involved.",
      description2: "Also known as dyspareunia, there are many reasons why you could experience pain during sex, ranging from physical problems (such as an infection) to psychological issues.",
      description3: "Pain during sex may not be the same for every woman; but dyspareunia may feel like:",
      infoArray: ["- persistent or recurrent genital pain that occurs before, during, or after sex", "- stinging, aching, tearing, or burning sensation", "- anxiety at the thought of penetration", "- pain felt at the entrance of the vagina during penetration", "- deep pain (felt at the 'top' of the vagina)"],
      description4: "If something constantly feels off during sex, do not dismiss it. Reach out to a pelvic or sexual health practitioner to explore why you are experiencing dyspareunia. Identifying the issue, both physical and emotional, and working on a solution will help you feel more relaxed and improve your overall sexual health."
    },
    {
      name: "Pelvic Organ Prolapse",
      description1: "Pelvic organ prolapse feels exactly how it sounds; a sensation that something is bulging out of your vagina or anus. The condition arises when the pelvic floor muscles become weak and are unable to support the pelvic organs. Because of insufficient support, the pelvic organs will bulge downwards; through openings, they are not supposed to and end up in places they are not meant to be. Such as the uterus hanging low in the vaginal canal or the bladder bulging through the vaginal walls. There are many types of pelvic organ prolapses, and the above are just a few.",
      description2: "So does that mean we are doomed to suffer through pelvic organ prolapse? The answer is no. With the guidance of a pelvic health practitioner, you can help prevent a pelvic organ prolapse and adequately treat it."
    },
    {
      name: "Postpartum Recovery",
      description1: "The journey of pregnancy is like a roller coaster ride, but the postpartum period is just as significant.",
      description2: "The first six weeks after childbirth is known as the postpartum period, and is a critically important time to take care of yourself as well as your baby. It took months for your body to prepare for childbirth, muscles are stretched, joints (and emotions) are strained, so allowing sufficient time for your body to heal and recover from childbirth should be equally measured.",
      description3: "Many women will regain strength in their pelvic floor within a few months, but for some it could take a lot longer. Consulting a pelvic health specialist who can guide you through gentle exercises, or offer specialized treatment when the time is right, will help your pelvic floor and core recovery."
    },
    {
      name: "Proactive Pelvic Care",
      description1: "Part of the core muscle group, the pelvic floor muscles attach to your spine and pelvis, forming a hammock, thus supporting the organs within the pelvis.",
      description2: "When this hammock is slack (thus not supportive), the pelvic organs will begin to recline down and out of the pelvis. The consequence of this leads to incontinence (urinary or fecal), a heavy sensation in the pelvic, painful sex, and much more.",
      description3: "Proactive pelvic care involves caring for your pelvic floor muscles by preserving their strength and not giving them a chance to weaken.",
      description4: "Consult a Pelvic health specialist on how best to be proactive with your pelvic care routine."
    },
    {
      name: "Separated Abs",
      description1: "Separated abs or medically known as diastasis recti, is a condition that commonly arises in pregnant or postpartum women.",
      description2: "The Rectus Abdominis muscles (six-pack ab muscles) are a set of two long vertical muscles that run from the tip of your sternum (xiphoid process) to the pubic bone. Because of abdominal pressure (such as in pregnancy), these muscles can separate, resulting in the belly pooch. In addition to making one conscious about their physical appearance, diastasis recti can also cause lower back pain, constipation, bloating, and weak pelvic floor muscles.",
      description3: "For some women, diastasis recti are self-limiting (that is, it corrects itself). However, when it persists beyond eight weeks postpartum, it is best to seek the help of your health care practitioner."
    },
    {
      name: "Vaginoplasty Prep and Recovery",
      description1: "Preparing to undergo surgery requires a lot of strategic planning. And heading towards any surgery well-prepared will ascertain quick recovery.",
      description2: "Generally, vaginoplasty is a type of genitoplasty that repairs or constructs the vagina. And preparing for vaginoplasty depends on why you are opting for this surgery and your medical needs.",
      description3: "There is a long list of indications for this surgery. However, individuals who opt for this surgery are generally women:",
      infoArray: ["- who have gone through childbirth and are dealing with pelvic floor defects", "- looking to correct pelvic organ prolapse (such as cystocele or rectocele)", "- born with congenital abnormalities","- who require vaginal reconstruction after undergoing surgery or radiation to remove a vaginal tumor", "- undergoing gender affirmation surgery"],
      description4: "Before scheduling your surgery, talk to your health care practitioner about the procedure, how to prepare for it, what you need to do afterward, and any general concerns regarding vaginoplasty."
    }
  ];
  const data = appointmentTypes[params.id]


  return (
    <div>
      {data && <div className="listing-banner-1">
          {data.name && (
          <h1 className="text-center-mobile brand-purple text-al fs-54-36">
            {data.name}
          </h1>
        )}
        {data.description1 && <p>{data.description1}</p>}
        {data.description2 && <p>{data.description2}</p>}
        {data.description3 && <p>{data.description3}</p>}
        {data.infoArray && <ul>{data.infoArray.map((item, index) => {
          return(
            <li key={index} className="text-start">{item}</li>
          )
        })}</ul>}
        {data.description4 && <p>{data.description4}</p>}
      </div>}
      <div className="listing-banner-2">
        <MDBRow>
          <MDBCol md="4">
            <h1 className="text-al fs-32">Filter By</h1>

            {/* PRACTITIONER TYPE */}
            <button
              onClick={() => setButton1(!button1)}
              type="button"
              className="btn text-dark border-top border-bottom w-75 py-3 mb-2 text-al fs-24"
            >
              Practitioner Type{" "}
              {button1 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button1 && (
              <div className="mb-4">
                {practitionerTypes.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" checked={filterPractitionerValue === item} className="checkbox-squer m-0" onChange={()=> {
                        if(filterPractitionerValue !== item){
                          setFilterPractitionerValue(item)
                          setFilterAppointmentValue('')
                        } else {
                          setFilterPractitionerValue('')
                        }
                      }} />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* APPOINTMENT TYPE
            <button
              onClick={() => setButton2(!button2)}
              type="button"
              className="btn text-dark border-top border-bottom w-75 py-3 text-al fs-24"
            >
              Appointment Type{" "}
              {button2 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button2 && (
              <div>
                {appointmentTypes.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" checked={filterAppointmentValue === item} className="checkbox-squer m-0" onChange={()=> {
                        if(filterAppointmentValue !== item){
                          setFilterAppointmentValue(item)
                          setFilterPractitionerValue('')
                        } else {
                          setFilterAppointmentValue('')
                        }
                      }}/>
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

             LOCATION
            <button
              onClick={() => setButton3(!button3)}
              type="button"
              className="btn text-dark border-top border-bottom w-75 py-3 text-al fs-24"
            >
              Location{" "}
              {button3 === false ? (
                <img className="ms-3" src={DownArrow} alt="arrow" />
              ) : (
                <img className="ms-3" src={UpArrow} alt="arrow" />
              )}
            </button>
            {button3 && (
              <div>
                {locations.map((item, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center p-2">
                      <input type="checkbox" className="checkbox-squer m-0" />
                      <p className="m-0 ms-2">{item}</p>
                    </div>
                  );
                })}
              </div>
            )} */}
          </MDBCol>
          <MDBCol md="8">
            {practitioners.length > 0 ? practitioners.map((item, index) => {
              return(
                <Link className="text-decoration-none" to={`/practitionerProfileUserView/${item._id}`}>
                <div key={index} className="brand-bg-purple-2 d-flex border-9 mb-3">
                <img
                  className="p-3 img-circle"
                  src="http://cdn.onlinewebfonts.com/svg/img_569204.png"
                  alt="practitioner"
                />
                <div className="d-flex align-items-center">
                  <div>
                  <p className="m-0">{item.firstName} {item.lastName}</p>
                  <p className="m-0">Specialty: {item.areaOfSpecialty}</p>
                  <p className="m-0">Practice: {item.practiceName}</p>
                  {item.profile?.aboutMe && <p className="m-0">About: {item.profile.aboutMe}</p>}
                  </div>
                </div>
              </div>
              </Link>
              )
            }) : <h1 className="text-center m-5">No Practitioners Found...</h1>}
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};
