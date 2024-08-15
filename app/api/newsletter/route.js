import { NextResponse } from "next/server";
import { sendEmail } from '../sendEmail'
import { ConnectionStr } from "@/app/lib/db";
import { Books } from "@/app/lib/model/book1"
import mongoose from "mongoose";

export async function POST(req) {
    let success = true;
    let data = {};

    try {
        // Connect to the database
        await mongoose.connect(ConnectionStr);

        // Extract data from the request body
        const body = await req.json();
        console.log(body);

        // Create a new record using the Mongoose model
        const newBooking = new Books({
            email: body.email,
        });

        // Save the record to the database
        const savedBooking = await newBooking.save();
        data = savedBooking;

        // Send an email notification (Optional)
        await sendEmailFunc('New Subscribe Customer from Webtrow', ` email=${email}, `);


    } catch (error) {
        console.error("Error occurred:", error);
        data = { message: "An error occurred while processing the request." };
        success = false;
    }

    return NextResponse.json({ result: data, success });
}

const sendEmailFunc = (sub, msg) => {
    try {
        const send_to = "jibrandevn@gmail.com";
        const sent_from = "jibrandevn@gmail.com";
        const reply_to = "jibrandevn@gmail.com";
        const subjecta = sub;
        const message = msg;
        sendEmail(subjecta, message, send_to, sent_from, reply_to);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        // You can handle the error here, such as logging, sending a notification, or returning an error response
    }
};