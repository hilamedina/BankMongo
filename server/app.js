const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = 3000;

// const expressJsonMiddleWere = (req,res,next) => {
//     req.body = jsonify(req.body);
//     next();
// }

mongoose.connect(
  `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@databaseproject.nwjez.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
