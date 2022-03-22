const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const { validateToken } = require('./controllers/authUser');
const { notFound } = require('./controllers/notFound')

const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);


app.get('/btc', validateToken, async (_req, res) => {
    const result = await axios.get(URL);

    return res.status(200).json(result.data);
  }
);

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(notFound);


app.listen(3000, () => console.log('Porta 3000'));