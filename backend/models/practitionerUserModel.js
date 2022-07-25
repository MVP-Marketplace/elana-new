const mongoose = require('mongoose')

const practitionerUserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    practiceName: {
        type: String,
        required: false
    },
    practiceNumber: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: false
    },
    password: {
        type: String,
        required: false
    },
    licensingCredentials: {
        type: String,
        required: false
    },
    areaOfSpecialty: {
        type: String,
        required: false
    },
    subSpecialty: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'PractitionerProfile'
    }
    
})

module.exports = mongoose.model('PractitionerUser', practitionerUserSchema)

/* 

Example to test on Postman

{
    "firstName": "Jane",
    "lastName": "Smith",
    "practiceName": "Yoga 4All",
    "practiceNumber": "YMD8798",
    "email": "janesmithyoga@gmail.com",
    "password": "yoga123",
    "licensingCredentials": "Yoga Board License",
    "areaOfSpecialty": "Yoga"
}
*/