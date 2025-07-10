import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://naveenkarthikeyan88:9788367178Na@cluster0.bdcv7.mongodb.net/foodapp').then(()=>console.log("DB Connected"));
}