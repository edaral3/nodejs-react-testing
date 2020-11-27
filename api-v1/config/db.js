
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
        console.log('MongoDB conectado...');
    }
    catch (err) {
        console.log("Error");
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;