import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    
    email: { type: String, },
   
});

export const Books = mongoose.models.Story2Sleep || mongoose.model("Webtrow_Subscribe", userSchema);