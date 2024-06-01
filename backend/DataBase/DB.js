import mongoose from "mongoose";

export const connctToDataBase = async () =>{

    try {

        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('App Connected to DataBase...')

    } catch (error) {
        console.log(`ERROR: Error While Connecting To DataBase ${error}`)
        process.exit(1)
        
    }

}