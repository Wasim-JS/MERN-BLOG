const globalErrorHandler = async (error,req,res,next) =>{


    const status = error.status || 500
    const message = error.message || "Internal Server Error"

    res.status(status).json({
        success:false,
        message
    })

}

export {globalErrorHandler}