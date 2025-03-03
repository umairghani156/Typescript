import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        if(db.connection.readyState === 1){
            console.log("Database connected");
        }
        if(db.connection.readyState === 2){
            console.log("Database disconnected");
        }
    } catch (error) {
        console.log("Database connection error", error);
    }
}