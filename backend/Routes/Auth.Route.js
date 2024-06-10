import express from "express"
import { loginHandler, registerHandler,getUser } from "../Controllers/Auth.Controller.js"
import { authCheck } from "../Middlewares/AuthMiddleware.js"

const router = express.Router()


router.post('/register',registerHandler)

router.post('/login',loginHandler)

router.get('/me',authCheck,getUser)

export default router