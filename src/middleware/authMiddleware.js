const jwt = require('jsonwebtoken');
require('dotenv').config();

function getauthenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log('Extracted Token:', token);

    if(token == null){
    console.log('Token is null');
    
    return res.sendStatus(401);
   }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, availableUser) => {
        if (err)
        { 
            console.log('token cannot access');
            return res.sendStatus(403);
        }
        req.availableUser = availableUser;
        console.log('user avaialable, session is valid');
        next();
    });
}

module.exports = {getauthenticationToken};