import express from "express"
import { loginHandler, registerHandler } from "../Controllers/Auth.Controller.js"

const router = express.Router()


router.post('/register',registerHandler)

router.post('/login',loginHandler)


export default router