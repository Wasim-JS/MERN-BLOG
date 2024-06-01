import { CustomErrorGenerator } from "../ErrorHandlers/CustomErrorGenerator.js"
import { RouteErrorHandler } from "../ErrorHandlers/RouteErrorHandler.js"
import { RegisterModel } from "../Models/Register.Model.js"
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"


const registerHandler = RouteErrorHandler(async (req,res,next) => {

    const {name,email,password,phone} = req.body

   if( [name,email,password,phone].some(field=>field==="" || field===undefined) ) return next(new CustomErrorGenerator(400,"All Feilds Are Requried.."))
   
   const user = await RegisterModel.findOne({email})

   if(user) return next(new CustomErrorGenerator(400,"This Email is Already Registred.."))
      const salt = await bcrypt.genSalt(10)
     const hashPassword = await bcrypt.hash(password,salt)

   await RegisterModel.create({name,email,password:hashPassword,phone})

    res.status(201).json({

        success:true,
        message:"Register successfully.."

    })

})
const loginHandler = RouteErrorHandler(async (req,res,next) => {

    const { email,password } = req.body

   if( [email,password].some(field=>field==="" || field===undefined) ) return next(new CustomErrorGenerator(400,"All Feilds Are Requried.."))
   
   const user = await RegisterModel.findOne({email})

   if(!user) return next(new CustomErrorGenerator(400,"User not Found"))

     const isMatchPassword = await bcrypt.compare(password,user.password)

     if(!isMatchPassword) return next(new CustomErrorGenerator(400,"Invalid Email or Password"))

    const token = jwt.sign({id:user._id},process.env.JWT_SECERET,{expiresIn:"2d"})
     console.log(token)


    return res.cookie('token',token,{
        httpOnly:true,
        maxAge:2 * 24 * 60 * 60 *1000,
        
        }).status(200).json({

        success:true,
        message:"Login successfully..",
        token

    })

})


export {
    registerHandler,
    loginHandler
}