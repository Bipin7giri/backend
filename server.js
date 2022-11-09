const express = require('express');
const { connect } = require('./DB/connect');
const app = express();
const axios = require('axios');
const port = process.env.PORT;
let cors = require('cors');
app.use(cors());
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/static', express.static('public'));

const authRoutes = require('./routes/authRouter');
const postRoutes = require('./routes/postRouter');
// api

app.use('/auth', authRoutes);
app.use('/post', postRoutes);

// connecting database
connect();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/add', (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
