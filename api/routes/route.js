const express = require ("express");
const router = express.Router();
const authController = require ("../controllers/authRoutes");
const authVerify = require ("../../helpers/authverify");


router.post('/user/signup', authController.createUser)
router.post('/user/signin', authController.signInUser)
router.get('/user/protected', authVerify.tokenVerify, authController.getCall)
// router.post('/user/signup', authController.authRoutes)
// router.post('/user/signup', authController.authRoutes)

module.exports = router