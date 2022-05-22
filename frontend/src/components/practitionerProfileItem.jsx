import {useDispatch} from 'react-redux'
import {updatePractitionerProfile} from '../features/practitionerProfiles/practitionerProfileSlice'

function PractitionerProfileItem({practitionerProfile}) {
    const dispatch = useDispatch()

    return (
        <div className="goal">
            <div>
                <div><h2>{practitionerProfile.aboutMe}</h2></div>
                <div><h2>{practitionerProfile.howCanIHelp}</h2></div>
                <div><h2>{practitionerProfile.servicesOffered}</h2></div>
                <div><h2>{practitionerProfile.certifications}</h2></div>
                <div><h2>{practitionerProfile.availability}</h2></div>
                <div><h2>{practitionerProfile.cancellationPolicy}</h2></div>
                <div><h2>{practitionerProfile.paymentMethods}</h2></div>
                <div><h2>{practitionerProfile.fullName}</h2></div>
                <div><h2>{practitionerProfile.practiceName}</h2></div>
                <div><h2>{practitionerProfile.specialty}</h2></div>
                <div><h2>{practitionerProfile.subSpecialites}</h2></div>
                <div><h2>{practitionerProfile.yearsOfExperience}</h2></div>
                <div><h2>{practitionerProfile.education}</h2></div>
                <div><h2>{practitionerProfile.telehealthProvided}</h2></div>
                <button onClick={() => dispatch(updatePractitionerProfile(practitionerProfile._id))} className="closek">X</button>
            </div>
        </div>
    )
}

export default PractitionerProfileItem