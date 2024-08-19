const mongoose = require('mongoose');
require('dotenv').config();

const mongodbURL = process.env.CONNECTION_STRING;

mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Successfully Connected to MongoDB'))
.catch((err) => console.error('Cannot connect to Mongo DB:', err));


module.exports = mongoose;