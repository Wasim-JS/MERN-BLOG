import { CustomErrorGenerator } from "./CustomErrorGenerator.js"

const RouteErrorHandler = (routeFun) =>{

    return (req,res,next)=>{
            
        Promise.resolve(routeFun(req,res,next))
        .catch(error=>{
            next(new CustomErrorGenerator(400,error.message))
        })
    }
}

export {RouteErrorHandler}