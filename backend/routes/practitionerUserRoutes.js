const express = require('express')
const router =  express.Router()
const { 
    registerPractitionerUser, 
    loginPractitionerUser, 
    getMe 
} = require('../controllers/practitionerUserController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerPractitionerUser)
router.post('/practitionerLogin', loginPractitionerUser)
router.get('/me', protect, getMe)

module.exports = router