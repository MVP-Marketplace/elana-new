const mongoose = require('mongoose')

const practitionerProfileSchema = mongoose.Schema({
    practitionerUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'PractitionerUser'
        
    },
    aboutMe: {
        type: String,
        required: false
    },
    howCanIHelp: {
        type: String,
        required: false
    },
    servicesOffered: {
        type: String,
        required: false
    },
    certifications: {
        type: String,
        required: false
    },
    availability: {
        type: String,
        required: false
    },
    cancellationPolicy: {
        type: String,
        required: false
    },
    paymentMethods: {
        type: String,
        required: false
    },
    subSpecialites: {
        type: String,
        required: false
    },
    yearsOfExperience: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },
    telehealthProvided: {
        type: String,
        required: false
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
    "subSpecialites": "Pediatrics",
    "yearsOfExperience": "20",
    "education": "UCF",
    "telehealthProvided": "Yes"
}
*/
