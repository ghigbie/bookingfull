import express from 'express';
import authRouter from './routes/auth.js';
import {readdirSync} from 'fs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const app = express();
const PORT = 8000;

//maps through all routes and applies middleware
readdirSync("./routes").map( route => 
    app.use('/api', require(`./routes/${route}`))
);


app.listen(PORT, () => console.log(`App is running on ${PORT}`));