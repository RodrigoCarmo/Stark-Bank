require('dotenv').config();
require('./database');
const cors = require('cors');

const express = require('express');
const {userRoutes} = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRoutes);

app.listen(process.env.PORT || 3931, () => {
  console.log('Servidor rodando na porta:', 3931);
});
