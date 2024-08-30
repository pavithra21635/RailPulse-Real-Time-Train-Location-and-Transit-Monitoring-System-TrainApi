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

      // if(hextrimresPassword === hextrimdbPassword) {
        console.log('correct password');
        const accessToken = generateNewAccessToken({ username: availableUser.username });
        console.log('Token generated:', accessToken);
        
        if (accessToken) {
            console.log('Token generated successfully:', accessToken);
            return res.status(200).json({ accessToken });
        } else {
            console.error('Failed to generate access token');
            return res.status(500).json({ error: 'Failed to generate access token' });
        }

       
  ////  } else {
      //  return res.status(401).json({ error: 'Invalid password' });  // Return error if the password is incorrect
  //  }

       
    
    } catch(error){
        console.error('Unauthorized access:', error);
        res.status(500).json({ error: 'Cannot log in'});

  }
}

function generateNewAccessToken(availableUser) {
    return jwt.sign(availableUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m'});
}

async function registerUser(req, res) {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await user.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new user({
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}

module.exports = { validateUserLogin, registerUser };