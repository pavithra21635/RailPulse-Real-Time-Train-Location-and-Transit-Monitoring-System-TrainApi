const express = require('express');
const router = express.Router();

const trainLocationController = require('../controllers/trainLocationController');
const {getauthenticationToken} = require('../middleware/authMiddleware');

// /**
//  * @swagger
//  * tags:
//  *  name: train-Location
//  *  description: Train-Location
//  */

/**
 * @swagger
 * /train-location:
 *  get:
 *   summary: Get latest train location details
 *   tags: [Train Location]
 *   security:
 *     - BearerAuth: []
 *   responses:
 *     '200':
 *       description: Returns latest train Location data.
 *     '500':
 *       description: Internal server error.
 */
//router.get('/', trainLocationController.getLastTwoTrainLocations);
router.get('/', getauthenticationToken, trainLocationController.getLastTenTrainLocations);

module.exports = router;