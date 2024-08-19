const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true },
    password : {type: String, required: true },
}, { collection: 'User'});

const Users = mongoose.model("User",usersSchema);
 
module.exports =  Users;