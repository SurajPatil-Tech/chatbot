import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
    
    text:{
        type:String,
        required:true
    },
    timstamp:{
        type:Date,
        default:Date.now
    }
})

export const Bot = mongoose.model("Bot",botSchema);