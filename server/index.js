import express from 'express';
import cors from 'cors';

import krankenkasse_calculator from './routes/krankenkasse.js';

const app = express()

app.use(cors({origin: true, credentials: true}));

const port = 5000

app.use('/krankenkasse', krankenkasse_calculator);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



