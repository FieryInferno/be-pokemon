const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {origin: '*'};
const bodyParser = require('body-parser');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is running on port 5000'));
app.get('/', (req, res) => {
  return res.status(200).send('Welcome');
})
app.get('/catch', (req, res) => {
  return res.status(200).send({
    catchStatus: Math.floor(Math.random() * 2),
  });
})
app.get('/release', (req, res) => {
  return res.status(200).send({
    releaseStatus: Math.floor(Math.random() * 101),
  });
})
app.get('/rename/:n', (req, res) => {
  const {n} = req.params;

  return res.status(200).send({
    fibonacci: n === '1' ? 0 : fibonacci(parseInt(n) - 1),
    rename: parseInt(n) + 1,
  });
})

const fibonacci = (num) => {
  if(num < 2) {
    return num;
  }
  else {
    return fibonacci(num-1) + fibonacci(num - 2);
  }
}
