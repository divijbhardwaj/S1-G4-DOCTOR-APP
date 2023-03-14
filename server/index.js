const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Patient = require('./model/patient.js');
const app = express()
const port = 3009

mongoose.connect('mongodb+srv://divij:OOlDc8xBMzCGAJbj@cluster0.54s602e.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(){ console.log("Application is succesfully connected to the Databse");})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/book-appointment', async (req, res) => {
  const r = await Patient.create(req.body);
  res.json(r);
})

app.get('/get-appointments', async(req, res) => {
  const r =   await Patient.find({});
  console.log(r)

  res.json(r);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})