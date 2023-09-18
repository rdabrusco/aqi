const { Signup, Login, EditTrackedLocations, UpdateSendEmail, SendAllEmails } = require('../controllers/auth')
const {userVerification} = require('../middleware/authentication')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)
router.post('/', SendAllEmails)
router.put('/editTrackedLocations', EditTrackedLocations)
router.put('/updateSendEmail', UpdateSendEmail)



module.exports = router