const jwt = require('jsonwebtoken');
const user = require( '../models/userModel');
const bcrypt = require('bcryptjs');


async function validateUserLogin(req, res) {
    const {username, password } = req.body;

    try{
        
        const availableUser = await user.findOne({username});
        if(!availableUser){
            return res.status(404).json({error: 'Invalid username'});
        }


        function convertStringToHex(str){
            let hex = '';
            for (let i = 0; i < str.length; i++) {
                hex += str.charCodeAt(i).toString(16).padStart(2,'0');
        }
        return  hex;
       }

       const trimdbPassword = availableUser.password.trim();
       const trimresPassword = password.trim();

       const hextrimdbPassword = convertStringToHex(trimdbPassword);
       const hextrimresPassword = convertStringToHex(trimresPassword);

       console.log('DB Password', hextrimdbPassword);
       console.log('res Password', hextrimresPassword);

       if(hextrimresPassword == hextrimdbPassword )
       {
        console.log('correct password');
       }

       const accessToken = generateNewAccessToken({ username: availableUser.username });

       res.status(200).json({accessToken});
    
    } catch(error){
        console.error('Unauthorized access:', error);
        res.status(500).json({ error: 'Cannot log in'});

  }
}

function generateNewAccessToken(availableUser) {
    return jwt.sign(availableUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m'});
}

module.exports = {validateUserLogin};
