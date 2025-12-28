 import express from "express"
 import { registerUser } from "../controllers/userController.js"
 import { verification } from "../controllers/userController.js"
 import { loginUser } from "../controllers/userController.js"
 import { logoutUser } from "../controllers/userController.js"
 import { forgotPassword } from "../controllers/userController.js"
 import { verifyOTP } from "../controllers/userController.js"
 import { changePassword } from "../controllers/userController.js"
// import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, verification, verifyOTP } from "../controllers/userController.js"
 import { isAuthenticated } from "../middleware/isAuthenticated.js"
 import { userSchema, validateUser } from "../validators/userValidate.js"

 const router = express.Router()


 router.post('/register',validateUser(userSchema),registerUser)
 router.post('/verify', verification)
 router.post('/login', loginUser)
 router.post('/logout',isAuthenticated, logoutUser)
 router.post('/forgot-password', forgotPassword)
 router.post('/verify-otp/:email', verifyOTP)
router.post('/change-password/:email', changePassword)

 export default router