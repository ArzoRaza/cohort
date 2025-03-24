import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config()

// export a function that cnnects to database
const database = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Successfuly connecte to mongodb");  
    })
    .catch((err) => {
        console.log("Error connecting to mongoDB", err)  
    })
};

export default database;


