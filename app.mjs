import express from 'express';
import models from './models/index.mjs';

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { message: 'nimblERP!' });
});

app.listen(8000, () => console.log('Server running on port 8000'));
