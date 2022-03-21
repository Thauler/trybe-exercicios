const express = require('express');
const bodyParser = require('body-parser');
// const pingMsg = require('./controllers/ping'); 1
// const userName = require('./controllers/hello'); 2
// const greeting = require('./controllers/greetings'); 3
// const newUser = require('./controllers/newUser'); 4
const { getChar, getCharById, newChar } = require('./controllers/simpsons');


const app = express();

app.use(bodyParser.json());

// app.get('/ping', pingMsg); 1
// app.post('/hello', userName); 2
// app.post('/greetings', greeting); 3
// app.put('/users/:name/:age', newUser); 4
app.get('/simpsons', getChar);
app.get('/simpsons/:id', getCharById);
app.post('/simpsons', newChar);

app.use(function (err, req, res, next) {
  return res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('Porta 3000'));