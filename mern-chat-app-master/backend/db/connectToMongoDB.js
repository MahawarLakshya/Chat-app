import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://lakshyamahawarstp:aWJumUnXiv0FpsNC@cluster0.q7ndlch.mongodb.net/chat-app-db');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;