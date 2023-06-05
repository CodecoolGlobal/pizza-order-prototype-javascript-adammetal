const express = require('express');
const morgan = require('morgan');
const path = require('path');

const FS_FE_PATH = path.join(__dirname, '..', 'frontend');

const app = express();

app.use(morgan('dev'));
app.use(express.static(FS_FE_PATH));

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello World' });
})

app.listen(8080, () => {
  console.log('App running on :8080');
});