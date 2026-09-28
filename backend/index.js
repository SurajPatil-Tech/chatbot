import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import chatbotRoutes from './routes/chatbot.route.js'

dotenv.config();

const app = express();
const port = process.env.PORT;
const DB_URI =process.env.MONGO_URI;
app.use(express.json());
app.use(cors())
try {
  await mongoose.connect(DB_URI);
   console.log("database connected");
} catch (error) {
    console.log("error in database connection",error)
}

app.use("/bot/v1/",chatbotRoutes)

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})