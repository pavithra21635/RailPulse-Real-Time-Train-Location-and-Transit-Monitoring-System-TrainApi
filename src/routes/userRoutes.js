const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User authentication
 */

/**
 * @swagger
 * /user/login:
 *  post:
 *   summary: Authenticate user with username and password
 *   tags: [User]
 *   security: []
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               description: The Username.
 *               example: username
 *             password:
 *               type: string
 *               description: The password.
 *               example: password
 *   responses:
 *     '200':
 *       description: Successful login.
 *     '401':
 *       description: Invaild password.
 *     '404':
 *       description: User not found.
 *     '500':
 *       description: Error in login.
 */
router.post('/login', userController.validateUserLogin)

module.exports = router;