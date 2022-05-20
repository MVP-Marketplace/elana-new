const asyncHandler = require('express-async-handler')
const PractitionerUser = require('../models/practitionerUserModel')

// Description: Get practitioner users
// Route:       GET /api/practitionerUsers
// Access:      Private
const getPractitionerUsers = asyncHandler(async (req, res) => {
    const practitionerUsers = await PractitionerUser.find()
    res.status(200).json(practitionerUsers)
})

// Description: Create a practitioner user
// Route:       POST /api/practitionerUsers
// Access:      Private
const createPractitionerUser = asyncHandler(async (req, res) => {
    if(!req.body){
        req.status(400)
        throw new Error('Please add a json object')
    }

    const practitionerUser = await PractitionerUser.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        practiceName: req.body.practiceName, 
        practiceNumber: req.body.practiceNumber, 
        email: req.body.email, 
        password: req.body.password, 
        licensingCredentials: req.body.licensingCredentials, 
        areaOfSpecialty: req.body.areaOfSpecialty 
    })
    res.status(200).json(practitionerUser)
})

// Description: Update a practitioner user
// Route:       PUT /api/practitionerUsers/:id
// Access:      Private
const updatePractitionerUser = asyncHandler(async (req, res) => {
    const practitionerUser = await PractitionerUser.findById(req.params.id)
    
    if(!practitionerUser){
        res.status(400)
        throw new Error('Practitioner user not found')
    }

    const updatedPractitionerUser = await PractitionerUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedPractitionerUser)
})

// Description: Delete a practitioner user
// Route:       DELETE /api/practitionerUsers/:id
// Access:      Private
const deletePractitionerUser = asyncHandler(async (req, res) => {
    const practitionerUser = await PractitionerUser.findById(req.params.id)
    
    if(!practitionerUser){
        res.status(400)
        throw new Error('Practitioner user not found')
    }

    await practitionerUser.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getPractitionerUsers, createPractitionerUser, updatePractitionerUser, deletePractitionerUser
}