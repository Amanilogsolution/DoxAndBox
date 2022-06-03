const express = require('express');
const router = express.Router();
const procedureController = require('../controller/procedure')
const userController = require('../controller/Login')
const profileController = require('../controller/Profile')

router.post('/reports',procedureController.Data)
router.post('/request',procedureController.AddRequest)

router.post('/UserLogin',userController.UserLogin)
router.post('/profiledetails',profileController.ProfileDetails)



module.exports = router