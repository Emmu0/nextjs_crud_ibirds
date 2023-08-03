import connectDB from "@/config/database"
import Schema from "../../../ApiSchema/database";
import errorHandler from "@/midleware/error";


export default async (req, res) => {

    if (req.method == "POST") {
        const { title, description } = req.body;
        if (!title || !description)
        return errorHandler(res, 400, "Please Enter title and description.");

        await connectDB();
      
        const JsonData = Schema.create({
            title,
            description
        })
        return res.status(200).json({
            success: true,
            message: 'successfull !',
            rescord: {
                title: title,
                description: description
            }
        })
    } else {
        return errorHandler(res, 404, "only POST api Method is allowed")

    }

}