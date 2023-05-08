const express = require('express');
const pug = require('pug');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { message: 'nimblERP!' });
});

app.listen(443, () => console.log('Server running on port 3000'));
