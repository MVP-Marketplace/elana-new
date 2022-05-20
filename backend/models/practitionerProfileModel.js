const mongoose = require('mongoose')

const practitionerProfileSchema = mongoose.Schema({
    practitionerUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'PractitionerUser'
    },
    aboutMe: {
        type: String,
        required: true
    },
    howCanIHelp: {
        type: String,
        required: true
    },
    servicesOffered: {
        type: String,
        required: true
    },
    certifications: {
        type: [],
        required: true
    },
    availability: {
        type: String,
        required: false
    },
    cancellationPolicy: {
        type: String,
        required: true
    },
    paymentMethods: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    practiceName: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    subSpecialites: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    telehealthProvided: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('PractitionerProfile', practitionerProfileSchema)

/*

Example for Postman

{
    "practitionerUser": "6286f5cd330fa7ecac50775c",
    "aboutMe": "I advocate for female health awareness",
    "howCanIHelp": "I will make you feel heard and cared for",
    "certifications": "OBYGYN MD",
    "availabilty": "Mon-Fri 9-5",
    "cancellationPolicy": "No refunds",
    "paymentMehtods": "Amex, VISA",
    "fullName": "Annie Gomez",
    "practiceName": "OBYGYNSuns",
    "specialty": "Obstetrics",
    "subSpecialites": "Pediatrics",
    "yearsOfExperience": "20",
    "education": "UCF",
    "telehealthProvided": "Yes"
}
*/