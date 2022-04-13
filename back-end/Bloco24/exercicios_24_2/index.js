const patientsRouter = require('./src/routes/patients');
const plansRouter = require('./src/routes/plans');
const surgeriesRouter = require('./src/routes/surgeries');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patientsRouter);
app.use('/plans', plansRouter);
app.use('/surgeries', surgeriesRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});