import mongoose from  'mongoose'
import { db_name } from '../constants.js'


const connectDB=async ()=>{
    try{
        const connectionInstance=await mongoose.connect
        (
            `${process.env.DATABASE_URL}/${db_name}`
        )
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log('Error in Database Connection mein hain:',error)
        process.exit(1);
        }
};

export default connectDB;