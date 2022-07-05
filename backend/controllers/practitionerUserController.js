const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const PractitionerUser = require('../models/practitionerUserModel')
const PractitionerProfile = require('../models/practitionerProfileModel')

// Description: Register a practitioner user
// Route:       POST /api/practitionerUsers
// Access:      Public
const registerPractitionerUser = asyncHandler(async (req,res) => {
    const { 
        firstName,
        lastName, 
        practiceName, 
        practiceNumber, 
        email, 
        password, 
        licensingCredentials, 
        areaOfSpecialty 
    } = req.body

    if ( 
        !firstName || 
        !lastName || 
        !practiceName || 
        !practiceNumber || 
        !email || 
        !password || 
        !licensingCredentials || 
        !areaOfSpecialty 
        ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if practitioner user exists
    const practitionerUserExists = await PractitionerUser.findOne({email})

    if(practitionerUserExists) {
        res.status(400)
        throw new Error('Practitioner user already existys')
    }

     //Hash Password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)

    //Create a practitioner User
    const practitionerUser = await PractitionerUser.create({
        firstName,
        lastName,
        practiceName,
        practiceNumber, 
        email,
        areaOfSpecialty,
        licensingCredentials,
        password: hashedPassword
    })

    if(practitionerUser){
        res.status(201).json({
            _id: practitionerUser.id,
            firstName: practitionerUser.firstName,
            lastName: practitionerUser.lastName,
            email: practitionerUser.email,
            areaOfSpecialty: practitionerUser.areaOfSpecialty,
            licensingCredentials: practitionerUser.licensingCredentials,
            practiceName: practitionerUser.practiceName,
            token: generateToken(practitionerUser._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid practitioner user data')
    }

})

// Description: Authenticate a practitioner user
// Route:       POST /api/practitionerUsers/practitionerLogin
// Access:      Public
const loginPractitionerUser = asyncHandler(async (req,res) => {
    const { 
        email, 
        password, 
    } = req.body

    //Check for a practitioner user email
    const practitionerUser = await PractitionerUser.findOne({email})

    if (practitionerUser && (await bcrypt.compare(password, practitionerUser.password))) {
        res.json({
            _id: practitionerUser.id,
            firstName: practitionerUser.firstName,
            lastName: practitionerUser.lastName,
            email: practitionerUser.email,
            areaOfSpecialty: practitionerUser.areaOfSpecialty,
            licensingCredentials: practitionerUser.licensingCredentials,
            practiceName: practitionerUser.practiceName,
            token: generateToken(practitionerUser._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// Description: Get an array of practitionerUsers
// Route:       GET /api/practitionerUsers/users
// Access:      Public
const getUsers = asyncHandler (async (req,res) => {
    const practitionerUser = await PractitionerUser.find().populate({
        path: 'profile'
    })
    res.status(200).json(practitionerUser)
})  

// Description: Get a practitioner user
// Route:       GET /api/practitionerUsers/me
// Access:      Private
const getMe = asyncHandler (async (req,res) => {
    res.status(200).json(req.practitionerUser)
})  

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports ={
    registerPractitionerUser, 
    loginPractitionerUser, 
    getUsers,
    getMe
}