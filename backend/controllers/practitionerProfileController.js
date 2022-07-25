const asyncHandler = require('express-async-handler')
const PractitionerProfile = require('../models/practitionerProfileModel')
const PractitionerUser = require('../models/practitionerUserModel')

// Description: Get practitioner profiles
// Route:       GET /api/practitionerProfiles
// Access:      Private
const getPractitionerProfiles = asyncHandler(async (req, res) => {
    const practitionerProfiles = await PractitionerProfile.find({practitionerUser: req.practitionerUser.id})
    
    res.status(200).json(practitionerProfiles)
})

// Description: Create a practitioner profile
// Route:       POST /api/practitionerProfiles
// Access:      Private
const createPractitionerProfile = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const practitionerProfile = await PractitionerProfile.create({
        practitionerUser: req.practitionerUser.id,
        aboutMe: req.body.aboutMe,
        howCanIHelp: req.body.howCanIHelp,
        servicesOffered: req.body.servicesOffered,
        certifications: req.body.certifications,
        availability: req.body.availability,
        cancellationPolicy: req.body.cancellationPolicy,
        paymentMethods: req.body.paymentMethods,
        subSpecialites: req.body.subSpecialites,
        yearsOfExperience: req.body.yearsOfExperience,
        education: req.body.education,
        telehealthProvided: req.body.telehealthProvided,
        image: req.body.image
    })

    // Connect practitionerUser to practitionerProfile
    const selectedUser = await PractitionerUser.findById(req.practitionerUser.id)
    selectedUser.profile = practitionerProfile._id
    console.log('user', selectedUser)
    await selectedUser.save()


    res.status(200).json(practitionerProfile)
})

// Description: Upgrade a practitioner profile
// Route:       PUT /api/practitionerProfiles/:id
// Access:      Private
const updatePractitionerProfile = asyncHandler(async (req, res) => {
    const practitionerProfile = await PractitionerProfile.findById(req.params.id)

    if(!practitionerProfile){
        res.status(400)
        throw new Error('Practitioner not found')
    }

    // Chekc for practitioner user
    if(!req.practitionerUser){
        res.status(401)
        throw new Error('Practitioner user not found')
    }

    //Make sure the logged in practitioner user matches the practitioner profile
    if(practitionerProfile.practitionerUser.toString() !== req.practitionerUser.id) {
        res.status(401)
        throw new Error('Practitioner user not authorized')
    }

    const updatedPractitionerProfile = await PractitionerProfile.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedPractitionerProfile)
})

// Description: Delete practitioner a profile
// Route:       Delete /api/practitionerProfiles
// Access:      Private
const deletePractitionerProfile = asyncHandler(async (req, res) => {
    const practitionerProfile = await PractitionerProfile.findById(req.params.id)

    if(!practitionerProfile){
        res.status(400)
        throw new Error('PractitionerProfile not found')
    }

    // Chekc for practitioner user
    if(!req.practitionerUser){
        res.status(401)
        throw new Error('Practitioner user not found')
    }

    //Make sure the logged in practitioner user matches the practitioner profile
    if(practitionerProfile.practitionerUser.toString() !== req.practitionerUser.id) {
        res.status(401)
        throw new Error('Practitioner user not authorized')
    }

    await practitionerProfile.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getPractitionerProfiles, 
    createPractitionerProfile, 
    updatePractitionerProfile, 
    deletePractitionerProfile
}