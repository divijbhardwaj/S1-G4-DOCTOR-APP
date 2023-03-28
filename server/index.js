require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
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

app.get('/report', async(req, res) => {
  const _id = req.query.id;
  const [details] = await Patient.find({_id});
  const {desc: illnessDesc, report} = details;
  if(report) {
    return res.json({report});
  }
  const response = await openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages:[
      {"role": "system", "content": "Generate a doctors report based on the patient illness"},
      {"role": "user", "content": `Following is the illness: ${illnessDesc}`}
    ]
  });
  const r = response.data.choices;
  const user = await Patient.findByIdAndUpdate(_id,{ report: r[0].message.content })
  res.json({report: r[0].message.content})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})