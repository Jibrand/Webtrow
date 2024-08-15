import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fname: { type: String, },
    email: { type: String, },
    number: { type: String, },
    date: { type: String, },
    time: { type: String, },
    timez: { type: String, },
    comment: { type: String, },
});

export const Books = mongoose.models.Story2Sleep || mongoose.model("Webtrow_Consultation", userSchema);