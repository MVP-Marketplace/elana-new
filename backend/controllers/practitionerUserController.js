const asyncHandler = require('express-async-handler')

// Description: Get practitioner users
// Route:       GET /api/practitionerUsers
// Access:      Private
const getPractitionerUsers = asyncHandler(async (req, res) => {

    if(!req.body){
        req.status(400)
        throw new Error('Please add a json object')
    }
    res.status(200).json({message: 'Get practitioner users'})
})

// Description: Create a practitioner user
// Route:       POST /api/practitionerUsers
// Access:      Private
const createPractitionerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Create practitioner user'})
})

// Description: Update a practitioner user
// Route:       PUT /api/practitionerUsers/:id
// Access:      Private
const updatePractitionerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update practitioner user number ${req.params.id}`})
})

// Description: Delete a practitioner user
// Route:       DELETE /api/practitionerUsers/:id
// Access:      Private
const deletePractitionerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete practitioner user number ${req.params.id}`})
})


module.exports = {
    getPractitionerUsers, createPractitionerUser, updatePractitionerUser, deletePractitionerUser
}