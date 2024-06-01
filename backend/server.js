import { connctToDataBase } from "./DataBase/DB.js";
import { app } from "./app.js";
import env from 'dotenv'
env.config()


connctToDataBase()
.then(()=>{
    let port = Number(process.env.PORT) || 8000
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })
})
.catch(error=>{
    console.log(`ERROR: Error While Connecting To DataBase ${error}`)
    process.exit(1)
})
