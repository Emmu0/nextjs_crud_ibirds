
import connectDB from '@/config/database';
import Schema from '../../../ApiSchema/database';
import errorHandler from '@/midleware/error';

export default async (req, res) => {
  if (req.method === 'PUT') {
    let newData = req.body,
      _id = req.query

    if (!_id) {
      return errorHandler(res, 400, 'Please provide _id.');
    }

    try{

      await connectDB();
  console.log(newData, _id, '_id 2');

// const { newtitle:title, newdescription:description } = await req.json();
if(_id && newData){
  const updatedRecord = await Schema.findOneAndUpdate(
    _id , // Find record by _id
    newData, // Update with newData
    // { new: true } // Return the updated record
  );
}
      
      console.log(updatedRecord, 'updaterecords');

      if (!updatedRecord) {
        return errorHandler(res, 404, 'Record not found.');
      }

      res.status(200).json({
        success: true,
        message: 'Record updated successfully!',
        updatedRecord
      });
    } catch (error) {
  console.log(newData, _id, '_id 1');

      errorHandler(res, 500, 'Internal server error.');
    }
  } else {
    errorHandler(res, 405, 'Method not allowed.');
  }
};
