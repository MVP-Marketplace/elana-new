const mongoose = require('mongoose')

const practitionerUserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    practiceName: {
        type: String,
        required: true
    },
    practiceNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    licensingCredentials: {
        type: String,
        required: true
    },
    areaOfSpecialty: {
        type: String,
        required: true
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