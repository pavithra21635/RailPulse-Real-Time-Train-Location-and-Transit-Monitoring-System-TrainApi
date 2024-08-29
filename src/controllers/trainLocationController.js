const trainLocationData = require('../models/trainLocationModel');


async function getLastTwoTrainLocations(req, res) {
    try {
        
        const latestTrainLocations = await trainLocationData.find().sort({ timestamp: -1 }).limit(10);
        
        
        res.status(200).json(latestTrainLocations);
    } catch (error) {
        console.error('Error retrieving train location data:', error);
        res.status(500).json({ error: 'Error retrieving data' });
    }
}

module.exports = {getLastTwoTrainLocations,};