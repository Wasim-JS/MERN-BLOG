import { CustomErrorGenerator } from "../ErrorHandlers/CustomErrorGenerator.js"
import { RouteErrorHandler } from "../ErrorHandlers/RouteErrorHandler.js"
import jwt from 'jsonwebtoken'
import { RegisterModel } from "../Models/Register.Model.js"

export const authCheck = RouteErrorHandler(async (req,res,next) =>{


    const token = req.cookies.token

    if(!token) return next(new CustomErrorGenerator(400,"Token Not Found"))

        let {id} = jwt.verify(token,process.env.JWT_SECERET)
        let user = await RegisterModel.findById(id).select('-password -__v')
        req.user = user

        next()
})