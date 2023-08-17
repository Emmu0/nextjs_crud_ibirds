
import connectDB from '@/config/database';
import Schema from '../../../ApiSchema/database';
import errorHandler from '@/utils/error';

export default async (req, res) => {
   if (req.method === 'GET') {
    console.log(req.body,'query##1');
    console.log(req.query,'query##2');

    const _id = req.query;

    await connectDB();
    const records = await Schema.findById({_id : _id.id})
    if (!records) {
      return errorHandler(res, 404, "Record not found.")
    }

    return res.status(200).json({
      success: true,
      message: 'Record founded !',
      records
    });

  } else {
    return errorHandler(res, 405, 'Method not allowed.');
  }


};
