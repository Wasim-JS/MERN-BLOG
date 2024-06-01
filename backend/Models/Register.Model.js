import mongoose from "mongoose";


const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is Requried'],
        trim:true
    },
    email:{
        type:String,
        require:[true,'Email is Requried'],
        trim:true
    },
    password:{
        type:String,
        require:[true,'Password is Requried'],
        trim:true
    },
    phone:{
        type:String,
        require:[true,'Phone is Requried'],
        trim:true
    }
})

export const RegisterModel = mongoose.model('User',registerSchema)