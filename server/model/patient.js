const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
    name: String,
    number: Number,
    email: String,
    date: Date,
    time: String,
    area: String,
    city: String,
    state: String,
    zip: String,
    desc: String,
    report: String
});
const Patient = mongoose.model('Patient', PatientSchema, "patients");
module.exports = Patient;