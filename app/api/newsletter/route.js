import { NextResponse } from "next/server";
import { sendEmail } from '../sendEmail'



export async function POST(req) {
    let success = true;
    let data = {};

    try {
        // Extract data from the request body
        const body = await req.json();
        console.log(body);
        // Process the data (e.g., save to a database, send an email, etc.)
        // For demonstration, we're just returning the data
        data = body;
        // const dataemail=data
        console.log(data);
        const { email } = data
     
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