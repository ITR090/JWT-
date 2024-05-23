const express = require('express')
const router = express.Router()
const userController =  require('../Controllers/userController')
// auth middlware
const auth_middlware = require('../middlewares/authMiddelware')

router.post('/login',userController.loginUser)
router.post('/register',userController.registerUser)
// need user to be auth with vaild token
router.get('/inquiry',auth_middlware.verifyToken,userController.getUser)
router.put('/updateInfo',auth_middlware.verifyToken,userController.updateUserInfo)
router.post('/logout',auth_middlware.verifyToken,userController.logoutUser)


module.exports= router

