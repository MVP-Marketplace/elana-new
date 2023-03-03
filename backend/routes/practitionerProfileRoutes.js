const express = require('express')
const router = express.Router()
const { getPractitionerProfiles, createPractitionerProfile, updatePractitionerProfile, deletePractitionerProfile } = require('../controllers/practitionerProfileController')
const { protect } = require('../middleware/authMiddleware')

//GET and POST Routes
router.route('/').get(protect, getPractitionerProfiles).post(protect, createPractitionerProfile)

//PUT and DELETE Routes
router.route('/:id').put(protect, updatePractitionerProfile).delete(protect, deletePractitionerProfile)

module.exports = router