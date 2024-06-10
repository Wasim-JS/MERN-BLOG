import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import { globalErrorHandler } from "./ErrorHandlers/globalErrorHandler.js"
import authRoutes from './Routes/Auth.Route.js'

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }))
  


app.use('/api/v1/auth',authRoutes)


app.use(globalErrorHandler)

export {app}
