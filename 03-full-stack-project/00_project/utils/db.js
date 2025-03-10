import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Your database connected successfully");

    })
    .catch((err)=>{
        console.log("your database not connect");
        
    })
}

export default db;
