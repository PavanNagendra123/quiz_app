import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://23225a4205csm_db_user:ViNomy0EztncruZW@cluster0.n7fimtt.mongodb.net/QuizApp')
        .then(()=>{console.log('DB CONNECTED')})
}