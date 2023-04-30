const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { handleErrors } = require('./middlewares/handle-errors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use('/', require('./routes/index'));

app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
