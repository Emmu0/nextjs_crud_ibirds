
import connectDB from '@/config/database';
import Schema from '../../../ApiSchema/database';
import errorHandler from '@/midleware/error';

export default async (req, res) => {
  console.log(req.method,'req');
  if (req.method === 'PUT') {
    const newData = req.body;
    const _id = req.query;

    if (!_id) {
      return errorHandler(res, 400, 'Please provide _id.');
    }

    try {

      await connectDB();

      const updatedRecord = await Schema.findByIdAndUpdate(
        _id?.id, // Find record by _id
        { title: newData.title, description: newData.description }, // Update with newData
        { new: true } // Return the updated record
      );
      console.log(updatedRecord, 'updaterecords');
      if (!updatedRecord) {
        return errorHandler(res, 404, 'Record not found.');
      }

      return res.status(200).json({
        success: true,
        message: 'Record updated successfully!',
        updatedRecord
      });
    } catch (error) {
      console.log(newData, _id, '_id 1');

      return errorHandler(res, 500, 'Internal server error.');
    }
  }  else {
    return errorHandler(res, 405, 'Method not allowed.');
  }


};
