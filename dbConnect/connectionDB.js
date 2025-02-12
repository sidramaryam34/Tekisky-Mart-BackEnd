import mongoose from "mongoose";

 let dbConnect=async(dbURL,dbName)=>{
    try {
        await mongoose.connect(dbURL+dbName)
        console.log(`connected to db successfully`);
    } catch (error) {
        console.log(`error occurred while connecting to DB`);
    }
}
export default dbConnect