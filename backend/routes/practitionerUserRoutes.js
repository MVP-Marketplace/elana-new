const express = require('express')
const router = express.Router()
const {getPractitionerUsers, createPractitionerUser, updatePractitionerUser, deletePractitionerUser } = require('../controllers/practitionerUserController')

// GET and POST Routes
router.route('/').get(getPractitionerUsers).post(createPractitionerUser)
// PUT and DELETE Routes
router.route('/:id').put(updatePractitionerUser).delete(deletePractitionerUser)

module.exports = router