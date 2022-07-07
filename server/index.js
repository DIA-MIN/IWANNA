const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/key');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected !!!'))
  .catch((err) => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
