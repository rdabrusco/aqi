const { Signup, Login, EditTrackedLocations, UpdateSendEmail, SendAllEmails, EditLocationName } = require('../controllers/auth')
const {userVerification} = require('../middleware/authentication')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)
router.post('/sendAllEmails', SendAllEmails)
router.put('/editTrackedLocations', EditTrackedLocations)
router.put('/editLocationName', EditLocationName)
router.put('/updateSendEmail', UpdateSendEmail)



module.exports = router