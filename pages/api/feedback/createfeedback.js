import fessBackSchema from "@/ApiSchema/feedback";
import connectDB from "@/config/database";
import errorHandler from "@/utils/error";


export default async (req, res) => {
    if (req.method == "POST") {
        const { name, email, subject, message } = req.body
        console.log(name, email, subject, message, 'body@www@');
        if (!name || !email || !subject || !message) {return errorHandler(res, 400, "Please Enter All Field !") }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){return errorHandler(res, 404, "Enter valid Email !")}
       await connectDB()
       const data = await fessBackSchema.create({
            name,
            email,
            subject,
            message
        })
        console.log(data,"log he #########");
        return res.status(200).json({
            success: true,
            message: "feedback successfully submit !",
            // records: {
            //     name,
            //     email,
            //     feedback,
            //     message
            // }
        })

    } else {
       return errorHandler(res, 404, "error 404")
    }

}

