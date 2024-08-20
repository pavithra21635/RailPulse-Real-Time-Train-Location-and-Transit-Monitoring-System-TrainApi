const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const trainLocationSchema = new mongoose.Schema({
    trainId: {type: String, required: true },
    latitude: {type: Number, required: true },
    longitude: {type: Number, required: true },
    timestamp: {type: Date, required: true },

});

const TrainLocations = mongoose.model("TrainLocations",trainLocationSchema);
 
module.exports =  TrainLocations;