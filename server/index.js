var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var krankenkasse_calculator = require('./routes/krankenkasse.js');
var rechtschutz = require('./routes/rechtschutz.js');
var Users = require('./routes/Users.js');

const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
const port = 5000


app.use('/krankenkasse', krankenkasse_calculator);
app.use('/rechtschutz',rechtschutz)
app.use('/', Users);

app.listen(port, () => console.log(`App listening on port ${port}!`))



