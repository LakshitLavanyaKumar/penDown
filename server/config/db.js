//here we do the mongoDB connection
const mongoose = require('mongoose');

const connectDB = async () => {

    try {
 mongoose.set('strictQuery',false);
 const conn = await mongoose.connect(process.env.MONGODB_URI);
 console.log('Database Connected: '+conn.connection.host);
    } catch (error) {
     console.log(error);
    }
}

//we need to export connectDB func other we wont be able to use it
module.exports = connectDB;