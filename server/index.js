var express = require('express');
var cors = require('cors');

var krankenkasse_calculator = require('./routes/krankenkasse.js');

const app = express()

app.use(cors({ origin: true, credentials: true }));

const port = 5000

app.use('/krankenkasse', krankenkasse_calculator);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



