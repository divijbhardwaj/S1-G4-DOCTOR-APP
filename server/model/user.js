const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fName: String,
    lName: String,
    number: Number,
    email: String,
});
const User = mongoose.model('User', UserSchema, "users");
module.exports = User;